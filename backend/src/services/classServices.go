package services

import (
	"github.com/iqbalpradipta/lms/tree/main/backend/src/model"
	"gorm.io/gorm"
)

type ClassService struct {
	DB *gorm.DB
}

func NewClassService(db *gorm.DB) *ClassService {
	return &ClassService{
		DB: db,
	}
}

func (s *ClassService) CreateClass(class *model.Class) error {
	if err := s.DB.Create(class).Error; err != nil {
		return err
	}

	return nil
}

func (s *ClassService) GetAllClass() ([]model.Class, error){
	var class []model.Class

	err := s.DB.Find(&class).Error; if err != nil {
		return nil, err
	}

	return class, nil
}

func (s *ClassService) GetClassById(id int) (*model.Class, error) {
	var class model.Class

	err := s.DB.First(&class, id).Error; if err != nil {
		return nil, err
	}

	return &class, nil
}