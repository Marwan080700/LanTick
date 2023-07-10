package routes

import (
	"Backend/handlers"
	"Backend/pkg/middleware"
	"Backend/pkg/mysql"
	"Backend/repository"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group){
	repoTransaction := repository.RepositoryTransaction(mysql.DB)
	h := handlers.HandlerTransaction(repoTransaction)

	e.GET("/transactions", h.FindTransactions)
	e.GET("/transaction/:id", h.GetTransaction)
	e.POST("/transaction", middleware.UploadFile(h.CreateTransaction))
}