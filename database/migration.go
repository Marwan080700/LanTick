package database

import (
	"Backend/models"
	"Backend/pkg/mysql"
	"fmt"
)

func RunMigration() {
	err := mysql.DB.AutoMigrate(
		&models.User{},
		&models.Station{},
		&models.Profile{},
		&models.Ticket{},
		&models.Transaction{},
	)

	if err != nil{
		fmt.Println("gagalnya disini coy")
		panic(err)
	}

	fmt.Println("Migration Successfully")
}