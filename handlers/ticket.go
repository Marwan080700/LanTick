package handlers

import (
	dto "Backend/dto/result"
	ticketdto "Backend/dto/ticket"
	"Backend/models"
	"Backend/repository"
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type handlerTicket struct {
	TicketRepo repository.TicketRepo
}

type dataTicket struct{
	User interface{} `json:"Tickets"`
}

func TicketHandler(Ticket repository.TicketRepo) *handlerTicket{
	return &handlerTicket{Ticket}
}

// to find all ticket
func (h *handlerTicket) FindTickets(c echo.Context) error {
	tickets, err := h.TicketRepo.FindTickets()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	response := make([]ticketdto.TicketResponseDtoGet, len(tickets))
	for i, t := range tickets {
		response[i] = convertResponseTicketGet(t)
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "success",
		Data: tickets})
}



// to create a ticket--------------------------------------------------
func (h *handlerTicket) CreateTicket(c echo.Context) error{
	request := new(ticketdto.CreateTicketRequestDTO)
	if err := c.Bind(&request); err != nil{
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{
			Code: http.StatusBadRequest,
			Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{
			Code: http.StatusBadRequest,
			Message: "salah ini create ticketnya"})
	}

	data := models.Ticket{
		TrainName: request.TrainName,   
		TrainType: request.TrainType,
		StartDate: request.StartDate,
		StartStationID: request.StartStationID,
		StartTime: request.StartTime,
		DestinationStationID: request.DestinationStationID,
		ArrivalTime: request.ArrivalTime,
		Price: request.Price,         
		Qty: request.Qty,             
	}

	response, err := h.TicketRepo.CreateTicket(data)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code: http.StatusInternalServerError,
			Message: "salah juga create ticketnya"})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data: convertResponseTicketCreate(response)})
}

// get a ticket

func (h *handlerTicket) GetTicket(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code: http.StatusInternalServerError, 
			Message: err.Error()})
	}

	ticket, err := h.TicketRepo.GetTicket(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code: http.StatusInternalServerError, 
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data:   convertResponseTicketGet(ticket),
	})
}

// search
func (h *handlerTicket) SearchTickets(c echo.Context) error {
	date := c.QueryParam("start_date")
	startStationQuery := c.QueryParam("start_station_id")
	destinationStationQuery := c.QueryParam("destination_station_id")

	fmt.Println(date)

	startStation, err := h.TicketRepo.GetStationByName(startStationQuery)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	destinationStation, err := h.TicketRepo.GetStationByName(destinationStationQuery)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	tickets, err := h.TicketRepo.SearchTickets(date, startStation.ID, destinationStation.ID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "Error 1"})
	}

	response := make([]ticketdto.TicketResponseDtoGet, len(tickets))
	for i, t := range tickets {
		response[i] = convertResponseTicketGet(t)
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data:   response,
	})
}



// to convert response when create
func convertResponseTicketCreate(t models.Ticket) ticketdto.TicketResponseDtoCreate {
	return ticketdto.TicketResponseDtoCreate{	
		ID:                   t.ID,
		TrainName:          t.TrainName,
		TrainType:          t.TrainType,
		StartDate:          t.StartDate,
		StartStationID:       t.StartStationID,
		StartTime:          t.StartTime,
		DestinationStationID: t.DestinationStationID,
		ArrivalTime:        t.ArrivalTime,
		Price:              t.Price,
		Qty:                  t.Qty,
	}
}

// to convert response when get
func convertResponseTicketGet(t models.Ticket) ticketdto.TicketResponseDtoGet{
	return ticketdto.TicketResponseDtoGet{
		ID:                 t.ID,
		TrainName:          t.TrainName,
		TrainType:          t.TrainType,
		StartDate:          t.StartDate,
		StartStation:       t.StationStart,
		StartTime:          t.StartTime,
		ArrivalTime:        t.ArrivalTime,
		DestinationStation: t.StationDestination,
		Price:              t.Price,
	}
}
