package models

type Station struct {
	ID      int    `json:"id" gorm:"primaryKey:autoIncrement"`
	Station string `json:"stasion" gorm:"type: varchar(255)"`
}

type StationResponse struct {
	Id      int    `json:"id"`
	Station string `json:"station"`
}

func (StationResponse) TableName() string {
	return "stations"
}