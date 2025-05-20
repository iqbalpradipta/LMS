package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/config/db"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/migration"
)

func main() {
	// This is a simple Go program that prints "Hello, World!" to the console.
	app := fiber.New()

	db := db.DBInit()
	if err := migration.Migration(db); err != nil {
		fmt.Println("Error migrating database:", err)
		return
	}

	app.Listen(":8000")
}