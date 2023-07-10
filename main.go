package main

import (
	"Backend/database"
	"Backend/pkg/mysql"
	"Backend/routes"

	"github.com/labstack/echo/v4"
)

func main(){
	e := echo.New()

	e.Static("/uploads", "./uploads")

	mysql.DatabaseInit()
	database.RunMigration()

	// routes
	routes.RouteInit(e.Group("/api/v1"))

	e.Logger.Fatal(e.Start("localhost:5000"))
}