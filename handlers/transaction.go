package handlers

import (
	dto "Backend/dto/result"
	transactiondto "Backend/dto/transaction"
	"Backend/models"
	"Backend/repository"
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

var path_file = "http://localhost:5000/uploads/"

type handlerTransaction struct {
	TransactionRepository repository.TransactionRepository
}

type dataTransaction struct {
	Transaction interface{} `json:"transaction"`
}

func HandlerTransaction(TransactionRepository repository.TransactionRepository) *handlerTransaction{
	return &handlerTransaction{TransactionRepository}
}

func (h *handlerTransaction) FindTransactions(c echo.Context) error {
	transactions, err := h.TransactionRepository.FindTransactions()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}
	response := make([]transactiondto.TransactionResponseDto, len(transactions))
	for i, t := range transactions {
		response[i] = convertResponseTransactionFindAll(t)
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data: dataTransaction{
			Transaction: response,
		},
	})
}

// fint single data
func (h *handlerTransaction) GetTransaction(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	transaction, err := h.TransactionRepository.GetTransaction(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data: transaction,
		})
}

//create transaction
func (h *handlerTransaction) CreateTransaction(c echo.Context) error {
	request := new(transactiondto.CreateTransactionRequestDto)

	UserID, _ := strconv.Atoi(c.FormValue("user_id"))
	TicketID, _ := strconv.Atoi(c.FormValue("ticket_id"))
	Image := c.Get("dataFile").(string)

	fmt.Println(UserID)
	fmt.Println(TicketID)

	request.UserID = UserID
	request.TicketID = TicketID
	request.Image = Image

	validation := validator.New()

	validationErr := validation.Struct(request)
	if validationErr != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: validationErr.Error()})
	}

	newTransaction := models.Transaction{
		UserID:   request.UserID,
		TicketID: request.TicketID,
		Image:    request.Image,
		Status: request.Status,
	}

	data, err := h.TransactionRepository.CreateTransaction(newTransaction)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "Success",
		Data: dataTransaction{Transaction: convertResponseTransactionGet(data),
		}})
}






// all convert

func convertResponseTransactionFindAll(t models.Transaction) transactiondto.TransactionResponseDto {
	return transactiondto.TransactionResponseDto{
		ID:     t.ID,
		User:   convertUser(t.User),
		Ticket: convertTicket(t.Ticket),
		Image:  path_file + t.Image,
		Status: t.Status,
	}
}

func convertResponseTransactionGet(t models.Transaction) transactiondto.TransactionResponseDtoId {
	return transactiondto.TransactionResponseDtoId{
		ID:     t.ID,
		User:   convertUser(t.User),
		Ticket: convertTicket(t.Ticket),
		Image:  path_file + t.Image,
		Status: t.Status,
	}
}

func convertUser(u models.UserResponseTransaction) models.UserResponseTransaction {
	return models.UserResponseTransaction{
		Fullname: u.Fullname,
		Telp:     u.Telp,
		Email:    u.Email,
	}
}

func convertTicket(t models.TicketResponseModels) models.TicketResponseTransaction {
	return models.TicketResponseTransaction{
		TrainName:            t.TrainName,
		TrainType:            t.TrainType,
		StartDate:            t.StartDate,
		StartStationID:       t.StartStationID,
		StationStart:         convertStation(t.StartStation),
		StartTime:            t.StartTime,
		DestinationStationID: t.DestinationStationID,
		StationDestination:   convertStation(t.DestinationStation),
		ArrivalTime:          t.ArrivalTime,
		Price:                t.Price,
	}
}

func convertStation(s models.StationResponse) models.StationResponse {
	return models.StationResponse{
		Id:   s.Id,
		Station: s.Station,
	}
}
