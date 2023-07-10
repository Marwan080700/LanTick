package userdto

type UserResponse struct {
	ID       int    `json:"id"`
	FullName string `json:"fullname"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
