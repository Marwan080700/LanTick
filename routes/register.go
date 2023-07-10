package routes

import (
	"Backend/handlers"
	"Backend/pkg/mysql"
	"Backend/repository"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	r := repository.MakeRepository(mysql.DB)
	h := handlers.HandlerAuth(r)

	e.POST("/register", h.Register)
	e.POST("/login", h.Login)
}
