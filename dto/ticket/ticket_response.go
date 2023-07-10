package ticketdto

import "Backend/models"

type TicketResponseDtoCreate struct {
	ID                   int    `json:"id"`
	TrainName            string `json:"name_train" validate:"required"`
	TrainType            string `json:"type_train" validate:"required"`
	StartDate            string `json:"start_date" validate:"required"`
	StartStationID       int    `json:"start_station_id"`
	StartTime            string `json:"start_time" validate:"required"`
	DestinationStationID int    `json:"destination_station_id" `
	ArrivalTime          string `json:"arrival_time" validate:"required"`
	Price                int    `json:"price" validate:"required"`
	Qty                  string    `json:"qty"`

	
}

// to associate
type TicketResponseDtoGet struct {
	ID                   int    `json:"id"`
	TrainName            string `json:"name_train" validate:"required"`
	TrainType            string `json:"type_train" validate:"required"`
	StartDate            string `json:"start_date" validate:"required"`
	StartStationID       int    `json:"-"`
	StartStation models.StationResponse `json:"start_station"`
	StartTime            string `json:"start_time" validate:"required"`
	DestinationStationID int    `json:"-"`
	DestinationStation models.StationResponse `json:"destination_station"`
	ArrivalTime          string `json:"arrival_time" validate:"required"`
	Price                int    `json:"price" validate:"required"`
	Qty                  string    `json:"qty"`
}

type MyTicketResponseDto struct{
	ID                   int    `json:"id"`
	TrainName            string `json:"name_train" validate:"required"`
	TrainType            string `json:"type_train" validate:"required"`
	StartDate            string `json:"start_date" validate:"required"`
	StartStationID       int    `json:"start_station_id"`
	StartStation models.StationResponse `json:"start_station"`
	StartTime            string `json:"start_time" validate:"required"`
	DestinationStationID int    `json:"destination_station_id"`
	DestinationStation models.StationResponse `json:"destination_station"`
	ArrivalTime          string `json:"arrival_time" validate:"required"`
	Price                int    `json:"price" validate:"required"`
	Qty                  string    `json:"qty"`
	UserID 				int `json:"-"`
	User models.UserResponseTicket `json:"user"`
}
