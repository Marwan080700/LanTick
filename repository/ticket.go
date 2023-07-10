package repository

import (
	"Backend/models"

	"gorm.io/gorm"
)

type TicketRepo interface {
	FindTickets()([]models.Ticket, error)
	CreateTicket(ticket models.Ticket) (models.Ticket, error)
	GetTicket(ID int)(models.Ticket,error)
	GetStationByName(station string)(models.Station, error)
	SearchTickets(date string, startStationID, destinationStationID int) ([]models.Ticket, error)
}

func RepositoryTicket(db *gorm.DB) *repository{
	return &repository{db}
}

// find all ticket--------------------------------------------------
func (r *repository) FindTickets() ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Preload("StationStart").Preload("StationDestination").Find(&tickets).Error

	return tickets, err
}

func (r *repository) CreateTicket(ticket models.Ticket) (models.Ticket, error){
	err := r.db.Preload("StationStart").Preload("StationDestination").Create(&ticket).Error

	return ticket, err
}

// get a ticket--------------------------------------------------------------------
func (r repository) GetTicket(ID int) (models.Ticket, error) {
	var ticket models.Ticket
	err := r.db.Preload("StationStart").Preload("StationDestination").First(&ticket, ID).Error

	return ticket, err
}

func (r repository) GetStationByName(station string) (models.Station, error) {
	var s models.Station
	err := r.db.First(&station, "station = ?", station).Error

	return s, err
}


func (r repository) SearchTickets(date string, startStationID, destinationStationID int) ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Where("start_date = ? AND start_station_id = ? AND destination_station_id = ?", date, startStationID, destinationStationID).Preload("StartStation").Preload("DestinationStation").Find(&tickets).Error

	return tickets, err

}
