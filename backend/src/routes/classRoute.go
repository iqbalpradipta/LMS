package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/controllers"
)

func ClassRoute(route fiber.Router, controller *controllers.ClassController) {
	class := route.Group("/class")
	class.Post("/", controller.CreateClass)
	class.Get("/", controller.GetAllClass)
	class.Get("/:id", controller.GetClassById)
	// class.Put("/:id", controller.Updateclass)
	// class.Delete("/:id", controller.Deleteclass)
}