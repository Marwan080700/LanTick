package routes

import (
	"Backend/handlers"
	"Backend/pkg/mysql"
	"Backend/repository"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group){
	r := repository.RepositoryUser(mysql.DB)
	h := handlers.UserHandler(r)


	e.GET("/users", h.FindUsers)
	e.GET("/user/:id", h.GetUser)
}