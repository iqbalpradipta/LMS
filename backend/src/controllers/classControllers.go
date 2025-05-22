package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/model"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/services"
)

type ClassController struct {
	Service *services.ClassService
}

func NewClassController(service *services.ClassService) *ClassController {
	return &ClassController{
		Service: service,
	}
}

func (ctrl *ClassController) CreateClass(c *fiber.Ctx) error {
	class := new(model.Class)
	if err := c.BodyParser(class); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid Request",
		})
	}

	if err := ctrl.Service.CreateClass(class); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create Class",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"messages": "Success Create Class",
		"data": class,
	})
}

func (ctrl *ClassController) GetAllClass(c *fiber.Ctx) error {
	var class []model.Class

	class, err := ctrl.Service.GetAllClass(); if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get class",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success Get All class",
		"data": class,
	})
}

func (ctrl *ClassController) GetClassById(c *fiber.Ctx) error {
	var class *model.Class
	id := c.Params("id")
	idConv, _ := strconv.Atoi(id)

	class, err := ctrl.Service.GetClassById(idConv); if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get Class id",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success Get Class By Id",
		"data": class,
	})
}