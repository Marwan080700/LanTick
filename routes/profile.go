package routes

import (
	"Backend/handlers"
	"Backend/pkg/mysql"
	"Backend/repository"

	"github.com/labstack/echo/v4"
)

func ProfileRoute(e *echo.Group) {
	reporoute := repository.ProfileRepository(mysql.DB)
	h := handlers.ProfileHandler(reporoute)

	e.GET("/profile/:id", h.GetProfile)
}