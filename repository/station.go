package repository

import (
	"Backend/models"

	"gorm.io/gorm"
)

type StationRepository interface {
	FindStation() ([]models.Station, error)
	GetStation(ID int) (models.Station, error)
}

func RepositoryStation(db *gorm.DB) *repository{
	return &repository{db}
}

// find station--------------------------------------------------
func (r *repository) FindStation() ([]models.Station, error) {
	var stations []models.Station
	err := r.db.Find(&stations).Error

	return stations, err
}

// get a station--------------------------------------------------
func (r *repository) GetStation(ID int) (models.Station, error) {
	var stasion models.Station
	err := r.db.First(&stasion,ID).Error

	return stasion, err
}

// // create a station------------------------------------------------
// func (r *repository) CreateStation