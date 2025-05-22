package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/controllers"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/services"
	"gorm.io/gorm"
)

func Routes(app *fiber.App, db *gorm.DB){
	api := app.Group("/api/v1")

	userService := services.NewUserService(db)
	userController := controllers.NewUserController(userService)

	roleService := services.NewRoleService(db)
	roleController := controllers.NewRoleController(roleService)

	classService := services.NewClassService(db)
	classController := controllers.NewClassController(classService)

	UserRoute(api, userController)
	RoleRoute(api, roleController)
	ClassRoute(api, classController)
}