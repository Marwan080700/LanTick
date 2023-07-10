package routes

import (
	"github.com/labstack/echo/v4"
)

func RouteInit(e *echo.Group){
	UserRoutes(e)
	StationRoutes(e)
	AuthRoutes(e)
	ProfileRoute(e)
	TicketRoutes(e)
	TransactionRoutes(e)
}