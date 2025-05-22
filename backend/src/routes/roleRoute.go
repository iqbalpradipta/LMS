package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/controllers"
)

func RoleRoute(route fiber.Router, controller *controllers.RoleController) {
	role := route.Group("/role")
	role.Post("/", controller.CreateRole)
	role.Get("/", controller.GetAllRoles)
	role.Get("/:name", controller.GetRoleByName)
	// role.Put("/:id", controller.UpdateRole)
	role.Delete("/:id", controller.DeleteRole)
}