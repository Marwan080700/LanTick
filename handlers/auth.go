package handlers

import (
	authdto "Backend/dto/auth"
	dto "Backend/dto/result"
	userdto "Backend/dto/user"
	jwtToken "Backend/pkg/jwt"
	"Backend/repository"
	"log"
	"net/http"
	"time"

	"Backend/models"
	"Backend/pkg/bcrypt"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerAuth struct {
	AuthRepository repository.AuthRepository
}

type dataAuth struct{
	Data interface{} `json:"user"`
}

func HandlerAuth(AuthRepository repository.AuthRepository) *handlerAuth {
	return &handlerAuth{AuthRepository}
}


// register-----------------------------------------------------------------------------------------

func (h *handlerAuth) Register(c echo.Context) error {
	request := new(authdto.AuthRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	password, err := bcrypt.HashingPassword(request.Password)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	user := models.User{
		Fullname: request.Fullname,
		Username: request.Username,
		Email:    request.Email,
		Password: password,
		Gender: request.Gender,
		Telp: request.Telp,
		Address: request.Address,
	}

	data, err := h.AuthRepository.Register(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: "Success", Data: dataAuth{Data: convertResponseUser(data)}})
}

// login-------------------------------------------------------------------------

func (h *handlerAuth) Login(c echo.Context) error {
	request := new(authdto.LoginRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	user := models.User{
		Email: request.Email,
		Password: request.Password,
	}



	// Check email
	user, err := h.AuthRepository.Login(user.Email)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{
			Code:    http.StatusBadRequest,
			Message: "email benerin mas",
		})
	}

	// Check password
	isValid := bcrypt.CheckPasswordHash(request.Password, user.Password)
	if !isValid {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{
			Code:    http.StatusBadRequest,
			Message: "pasword benerin mas",
		})
	}

	//generate token
	claims := jwt.MapClaims{} // inisialisasi
	claims["id"] = user.ID
	claims["exp"] = time.Now().Add(time.Hour * 2).Unix() // 2 hours expired

	token, errGenerateToken := jwtToken.GenerateToken(&claims)
	if errGenerateToken != nil {
		log.Println(errGenerateToken)
		return echo.NewHTTPError(http.StatusUnauthorized)
	}

	loginResponse := authdto.LoginResponse{
		Fullname: user.Fullname,
		Username:     user.Username,
		Email:    user.Email,

		Token:    token,
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data: dataAuth{Data: loginResponse},
	})
}


// to convert response body
func convertResponseUser(u models.User) userdto.UserResponse {
	return userdto.UserResponse{
		ID:       u.ID,
		FullName: u.Fullname,
		Username: u.Username,
		Email:    u.Email,
		Password: u.Password,
	}
}