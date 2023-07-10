package models

type User struct {
	ID       int    `json:"id" gorm:"primaryKey:autoIncrement"`
	Fullname string `json:"fullname" gorm:"type: varchar(255)"`
	Username string `json:"username" gorm:"type: varchar(255)"`
	Email    string `json:"email" gorm:"type: varchar(255)"`
	Password string `json:"password" gorm:"type: varchar(255)"`
	Gender   string `json:"gender" form:"gender" gorm:"varchar(255)"`
	Telp     string `json:"no_hp" form:"no_hp" gorm:"varchar(255)"`
	Address  string `json:"address" form:"address"`
}

type UserResponse struct {
	Id       int    `json:"id"`
	Fullname string `json:"fullname"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

type UserResponseTicket struct {
	ID       int    `json:"id" form:"id"`
	Fullname string `json:"fullname" form:"fullname"`
	Telp     string `json:"no_hp" form:"no_hp"`
	Email    string `json:"email" form:"email"`
}

type UserResponseTransaction struct {
	ID       int    `json:"-" form:"id"`
	Fullname string `json:"fullname" form:"fullname"`
	Telp     string `json:"no_hp" form:"no_hp"`
	Email    string `json:"email" form:"email"`
}

func (UserResponse) TableName() string {
	return "users"
}

func (UserResponseTicket) TableName() string {
	return "users"
}

func (UserResponseTransaction) TableName() string {
	return "users"
}