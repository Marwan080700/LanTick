package handlers

import (
	dto "Backend/dto/result"
	userdto "Backend/dto/user"
	"Backend/models"
	"Backend/repository"
	"strconv"

	"net/http"

	"github.com/labstack/echo/v4"
)

type handler struct {
	UserRepository repository.UserRepository
}

type dataUser struct{
	User interface{} `json:"users"`
}

func UserHandler(UserRepository repository.UserRepository) *handler{
	return &handler{UserRepository}
}

// to find all users------------------------------------------------
func (h *handler) FindUsers(c echo.Context) error {
	users, err := h.UserRepository.FindUsers()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "success",
		Data: dataUser{User: users }})
}

// to get 1 of user--------------------------------------------------
func (h *handler) GetUser(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := h.UserRepository.GetUser(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "success",
		Data: dataUser{User: convertResponse(user)}})
}



//response if u want to view data
func convertResponse(u models.User) userdto.UserResponse{
	return userdto.UserResponse{
		ID: u.ID,
		FullName: u.Fullname,
		Username: u.Username,
		Email: u.Email,
		Password: u.Password,
	}
}  

