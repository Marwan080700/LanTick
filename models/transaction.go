package models

type Transaction struct {
	ID       int                     `json:"id" gorm:"primaryKey"`
	UserID   int                     `json:"user_id" form:"user_id"`
	User     UserResponseTransaction `json:"user" gorm:"foreignKey:UserID"`
	TicketID int                     `json:"ticket_id" form:"ticket_id"`
	Ticket   TicketResponseModels    `json:"ticket" gorm:"foreignKey:TicketID"`
	Image    string                  `json:"image" form:"image"`
	Status   string                  `json:"status" form:"status" gorm:"default:'pending'"`
}

type TransactionResponse struct {
	UserID   int                       `json:"user_id" form:"user_id"`
	User     UserResponseTransaction   `json:"user"`
	TicketID int                       `json:"ticket_id" form:"ticket_id"`
	Ticket   TicketResponseTransaction `json:"ticket"`
	Image    string                    `json:"image" form:"image"`
	Status   string                    `json:"status" form:"status"`
}

type MyTicketTransaction struct {
	TicketID int                     `json:"-" form:"ticket_id"`
	Ticket   TicketResponseModels    `json:"ticket"`
	UserID   int                     `json:"-" form:"user_id"`
	User     UserResponseTransaction `json:"user"`
}

func (TransactionResponse) TableName() string {
	return "transactions"
}

func (MyTicketTransaction) TableName() string {
	return "transactions"
}
