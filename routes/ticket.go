package routes

import (
	"Backend/handlers"
	"Backend/pkg/mysql"
	"Backend/repository"

	"github.com/labstack/echo/v4"
)

func TicketRoutes(e *echo.Group){
	repoTicket := repository.RepositoryTicket(mysql.DB)
	h := handlers.TicketHandler(repoTicket)

	e.POST("/ticket", h.CreateTicket)
	e.GET("/tickets", h.FindTickets)
	e.GET("/ticket/:id", h.GetTicket)
	e.GET("/ticket", h.SearchTickets)
}