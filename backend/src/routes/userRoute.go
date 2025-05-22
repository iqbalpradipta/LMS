package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/controllers"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/middlewares"
)

func UserRoute(route fiber.Router, controller *controllers.UserController) {
	user := route.Group("/user")
	user.Post("/register", controller.CreateUser)
	user.Post("/login", controller.Login)
	user.Get("/", middlewares.JWTAuthentication ,controller.GetAllUsers)
	user.Get("/:id", controller.GetUserById)
	user.Put("/:id", controller.UpdateUser)
	user.Delete("/:id", controller.DeleteUser)
}