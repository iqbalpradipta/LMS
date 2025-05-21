package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/controllers"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/middlewares"
)

func Routes(app *fiber.App, userControll *controllers.UserController) {
	api := app.Group("/api/v1")

	user := api.Group("/user")
	user.Post("/register", userControll.CreateUser)
	user.Post("/login", userControll.Login)
	user.Get("/", middlewares.JWTAuthentication ,userControll.GetAllUsers)
	user.Get("/:id", userControll.GetUserById)
	user.Put("/:id", userControll.UpdateUser)
	user.Delete("/:id", userControll.DeleteUser)
}