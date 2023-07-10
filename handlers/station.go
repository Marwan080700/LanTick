package handlers

import (
	dto "Backend/dto/result"
	stationdto "Backend/dto/station"
	"Backend/models"
	"Backend/repository"
	"strconv"

	"net/http"

	"github.com/labstack/echo/v4"
)

type handlerStation struct{
	Station repository.StationRepository
}

type dataStation struct{
	User interface{} `json:"stations"`
}

func StationHandler(StationRepository repository.StationRepository) *handlerStation{
	return &handlerStation{StationRepository}
}

// to find all stations------------------------------------------------
func (h *handlerStation) FindStation(c echo.Context) error {
	stasions, err := h.Station.FindStation()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "success",
		Data: dataStation{User: stasions }})
}

// to get 1 of user--------------------------------------------------
func (h *handlerStation) GetStation(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	stations, err := h.Station.GetStation(id)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{
		Status: "success",
		Data: dataStation{User: convertResponseStation(stations)}})
}


//response if u want to view data
func convertResponseStation(u models.Station) stationdto.StationResponse{
	return stationdto.StationResponse{
		ID: u.ID,
		Station: u.Station,
	}
} 