package routes

import (
	"Backend/handlers"
	"Backend/pkg/mysql"
	"Backend/repository"

	"github.com/labstack/echo/v4"
)

func StationRoutes(e *echo.Group){
	repoStation := repository.RepositoryStation(mysql.DB)
	h := handlers.StationHandler(repoStation)

	e.GET("/stations", h.FindStation)
	e.GET("/station/:id", h.GetStation)
}