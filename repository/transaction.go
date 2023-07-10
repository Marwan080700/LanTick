package repository

import (
	"Backend/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	FindTransactions() ([]models.Transaction, error)
	GetTransaction(ID int)(models.Transaction, error)
	CreateTransaction(transaction models.Transaction)(models.Transaction, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

// find all
func (r repository) FindTransactions() ([]models.Transaction, error) {
	var transactions []models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").Find(&transactions).Error

	return transactions, err
}

// get a transaction
func (r repository) GetTransaction(ID int) (models.Transaction, error) {
	var transaction models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").First(&transaction, ID).Error

	return transaction, err
}

func (r repository) CreateTransaction(transaction models.Transaction) (models.Transaction, error) {
	var data models.Transaction
	err := r.db.Create(&transaction).Where("user_id = ? AND ticket_id = ?", transaction.UserID, transaction.TicketID).Order("id DESC").Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").First(&data).Error

	return data, err
}
