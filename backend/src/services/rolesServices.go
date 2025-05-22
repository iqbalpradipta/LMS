package services

import (
	"github.com/iqbalpradipta/lms/tree/main/backend/src/model"
	"gorm.io/gorm"
)

type RoleService struct {
	DB *gorm.DB
}

func NewRoleService(db *gorm.DB) *RoleService {
	return &RoleService{
		DB: db,
	}
}

func (s *RoleService) CreateRole(role *model.Role) error {
	if err := s.DB.Create(role).Error; err != nil {
		return err
	}

	return nil
}

func (s *RoleService) GetAllRoles() ([]model.Role, error)  {
	var roles []model.Role
	err := s.DB.Preload("Users").Find(&roles).Error
	if err != nil {
		return nil, err
	}

	return roles, nil
}

func (s *RoleService) GetRoleByName(name string) (*model.Role, error) {
	var role model.Role
	err := s.DB.Preload("Users").First(&role, "name = ?", name).Error
	if err != nil {
		return nil, err
	}
	return &role, nil
}

func (s *RoleService) DeleteRole(name string) error {
	var role model.Role
	err := s.DB.Delete(&role, "name = ?", name).Error; if err != nil {
		return err
	}

	return nil
}