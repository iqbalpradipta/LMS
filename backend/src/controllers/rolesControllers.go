package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/model"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/services"
)

type RoleController struct {
	Service *services.RoleService
}

func NewRoleController(service *services.RoleService) *RoleController {
	return &RoleController{
		Service: service,
	}
}

func (ctrl *RoleController) CreateRole(c *fiber.Ctx) error {
	role := new(model.Role)
	if err := c.BodyParser(role); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid Request",
		})
	}

	if err := ctrl.Service.CreateRole(role); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create role",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Success Create Role",
		"data": role,
	})
}

func (ctrl *RoleController) GetAllRoles(c *fiber.Ctx) error {
	roles, err := ctrl.Service.GetAllRoles()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get roles",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success Get All Roles",
		"data": roles,
	})
}

func (ctrl *RoleController) GetRoleByName(c *fiber.Ctx) error {
	name := c.Params("name")
	role, err := ctrl.Service.GetRoleByName(name)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get role",
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success Get Role",
		"data": role,
	})
}

func (ctrl *RoleController) DeleteRole(c *fiber.Ctx) error {
	name := c.Params("name")
	if err := ctrl.Service.DeleteRole(name); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete role",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success Delete Role",
	})
}