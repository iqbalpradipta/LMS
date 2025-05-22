package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/config/db"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/routes"

	// "github.com/iqbalpradipta/lms/tree/main/backend/src/controllers"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/migration"
	// "github.com/iqbalpradipta/lms/tree/main/backend/src/routes"
	// "github.com/iqbalpradipta/lms/tree/main/backend/src/services"
)

func main() {
	app := fiber.New()

	db := db.DBInit()
	if err := migration.Migration(db); err != nil {
		fmt.Println("Error migrating database:", err)
		return
	}

	routes.Routes(app, db)

	app.Listen(":8000")
}