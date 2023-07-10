package transactiondto

import "Backend/models"

// Response
type TransactionResponseDto struct {
	ID     int                            `json:"id"`
	User   models.UserResponseTransaction `json:"user"`
	Ticket models.TicketResponseTransaction `json:"ticket"`
	Image string `json:"image" form:"image"`
	Status string `json:"status" form:"status"`
}

type TransactionResponseDtoId struct{
	ID     int                            `json:"id"`
	User   models.UserResponseTransaction `json:"user"`
	Ticket models.TicketResponseTransaction `json:"ticket"`
	Image string `json:"image" form:"image"`
	Status string `json:"status" form:"status"`
}

type transactionTicketResponse struct{
	ID     int                            `json:"-"`
	Ticket models.TicketResponseTransaction `json:"ticket"`
	User   models.UserResponseTransaction `json:"user"`
}

// request
type CreateTransactionRequestDto struct {
	UserID   int    `json:"user_id" form:"user_id"`
	TicketID int    `json:"ticket_id" form:"ticket_id"`
	Image    string `json:"image" form:"image"`
	Status string `json:"status" form:"status"`
}
