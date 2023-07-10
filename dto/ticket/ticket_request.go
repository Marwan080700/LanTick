package ticketdto

type CreateTicketRequestDTO struct {
	TrainName            string `json:"name_train"`
	TrainType            string `json:"type_train"`
	StartDate            string `json:"start_date"`
	StartTime            string `json:"start_time"`
	ArrivalTime          string `json:"arrival_time"`
	StartStationID       int    `json:"start_station_id"`
	DestinationStationID int    `json:"destination_station_id" `
	Price                int    `json:"price"`
	Qty                  string `json:"qty"`
	// UserID               int    `json:"user_id"`
}