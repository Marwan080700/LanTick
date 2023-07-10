package authdto

//register request
type AuthRequest struct {
	Fullname string `json:"fullname" validate:"required" form:"fullname"`
	Username string `json:"username" validate:"required" form:"username"`
	Email    string `json:"email" validate:"required" form:"email"`
	Password string `json:"password" validate:"required" form:"password"`
	Gender string `json:"gender" validate:"required" form:"gender"`
	Telp string `json:"no_telp" validate:"required" form:"no_telp"`
	Address string `json:"address" validate:"required" form:"address"`
}

// login request

type LoginRequest struct {
	Email    string `json:"email" validate:"required" form:"email"`
	Password string `json:"password" validate:"required" form:"password"`
}

// login response
type LoginResponse struct {
	Fullname string `json:"fullname"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Token    string `json:"token"`
}

