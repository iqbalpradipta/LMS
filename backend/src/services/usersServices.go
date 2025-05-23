package services

import (
	"github.com/iqbalpradipta/lms/tree/main/backend/src/model"
	"gorm.io/gorm"
)

type UserService struct {
	DB *gorm.DB
}

func NewUserService(db *gorm.DB) *UserService {
	return &UserService{
		DB: db,
	}
}

func (s *UserService) CreateUser(user *model.User) error {
	if err := s.DB.Preload("Role").Create(user).Error; err != nil {
		return err
	}
	return nil
}

func (s *UserService) GetAllUsers() ([]model.User, error) {
	var users []model.User

	err := s.DB.Preload("Role").Find(&users).Error;
	return users, err
}

func (s *UserService) GetUserById(id int) (*model.User, error) {
	var user model.User

	err := s.DB.Preload("Role").First(&user, id).Error
	return &user, err
}

func (s *UserService) UpdateUser(id int, data *model.User) error {
	var user model.User

	if err := s.DB.First(&user, id).Error; err != nil {
		return err
	}

	user.Name = data.Name
	user.Email = data.Email
	user.Password = data.Password
	user.RoleID = data.RoleID
	
	return s.DB.Preload("Role").Save(&user).Error
}

func (s *UserService) DeleteUser(id int) error {
	return s.DB.Delete(&model.User{}, id).Error
}

func (s *UserService) GetUserEmail(email string) (*model.User, error) {
	var user model.User

	err := s.DB.First(&user, "email = ?", email).Error
	return &user, err
}
