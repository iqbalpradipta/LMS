package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/middlewares"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/model"
	"github.com/iqbalpradipta/lms/tree/main/backend/src/services"
	"golang.org/x/crypto/bcrypt"
)

type UserController struct {
	Service *services.UserService
}

func NewUserController(service *services.UserService) *UserController {
	return &UserController{
		Service: service,
	}
}

func (ctrl *UserController) CreateUser(c *fiber.Ctx) error {
	user := new(model.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request payload",
		})
	}
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash password",
		})
	}
	user.Password = string(hashPassword)
	if err = ctrl.Service.CreateUser(user); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create user",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"Message": "Success Create User",
		"data": user,
	})
}

func (ctrl *UserController) GetAllUsers(c *fiber.Ctx) error {
	users, err := ctrl.Service.GetAllUsers(); if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get users",
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message" : "Success Get All Users",
		"data": users,
	})
}

func (ctrl *UserController) GetUserById(c *fiber.Ctx) error {
	id := c.Params("id")
	idConv, _ := strconv.Atoi(id)
	user, err := ctrl.Service.GetUserById(idConv); if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get User by ID",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Success Get User By ID",
		"data": user,
	})
}

func (ctrl *UserController) UpdateUser(c *fiber.Ctx) error {
	id := c.Params("id")
	idConv, _ := strconv.Atoi(id)

	user := new(model.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request Input",
		})
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash Password",
		})
	}

	// Cari user untuk cari data yang ada
	userData, err := ctrl.Service.GetUserById(idConv)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "User Not found",
		})
	}

	if user.Name == "" {
		user.Name = userData.Name
	}

	if user.Email == "" {
		user.Email = userData.Email
	}

	if user.Password == "" {
		user.Password = userData.Password
	} else {
		user.Password = string(hashPassword)
	}

	if err = ctrl.Service.UpdateUser(idConv, user); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update user",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Success Update User",
		"data": user,
	})
	
}

func (ctrl *UserController) DeleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	idConv, _ := strconv.Atoi(id)

	if err := ctrl.Service.DeleteUser(idConv); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete user",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Success Delete User",
	})
	
}

func (ctrl *UserController) Login(c *fiber.Ctx) error {
	var req model.LoginUser
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request payload",
		})
	}

	user, err := ctrl.Service.GetUserEmail(req.Email)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid email or password",
		})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid email or password",
		})
	}

	token, err := middlewares.GenerateJWT(int(user.ID), user.Email); if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to generate token JWT",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Login successful",
		"token": token,
	})
}