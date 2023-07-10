package models

type Ticket struct {
	ID                   int             `json:"id" `
	TrainName            string          `json:"name_train" `
	TrainType            string          `json:"type_train" `
	StartDate            string          `json:"start_date"`
	StartStationID       int             `json:"start_station_id"`
	StationStart         StationResponse `json:"start_station"  gorm:"foreignKey:Id;references:StartStationID"`
	StartTime            string          `json:"start_time"`
	DestinationStationID int             `json:"destination_station_id"`
	StationDestination   StationResponse `json:"destination_station" gorm:"foreignKey:Id;references:DestinationStationID"`
	ArrivalTime          string          `json:"arrival_time" `
	Price                int             `json:"price" `
	Qty                  string          `json:"-"`
}

type TicketResponseModels struct {
	ID                   int             `json:"id"`
	TrainName            string          `json:"name_train"`
	TrainType            string          `json:"type_train"`
	StartDate            string          `json:"start_date"`
	StartStationID       int             `json:"start_station_id"`
	StartStation         StationResponse `json:"start_station"`
	StartTime            string          `json:"start_time"`
	DestinationStationID int             `json:"destination_station_id"`
	DestinationStation   StationResponse `json:"destination_station"`
	ArrivalTime          string          `json:"arival_time"`
	Price                int             `json:"price"`
	Qty                  string          `json:"-"`
}

type TicketResponseTransaction struct {
	ID                   int             `json:"-"`
	TrainName            string          `json:"name_train" validate:"required"`
	TrainType            string          `json:"type_train" validate:"required"`
	StartDate            string          `json:"start_date" validate:"required"`
	StartStationID       int             `json:"-"`
	StationStart         StationResponse `json:"start_station"  validate:"required"`
	StartTime            string          `json:"start_time" validate:"required"`
	DestinationStationID int             `json:"-"`
	StationDestination   StationResponse `json:"destination_station" validate:"required"`
	ArrivalTime          string          `json:"arrival_time" validate:"required"`
	Price                int             `json:"price" validate:"required" `
}

func (TicketResponseModels) TableName() string {
	return "Tickets"
}