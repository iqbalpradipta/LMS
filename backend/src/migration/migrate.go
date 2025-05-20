package migration

import (
	"github.com/iqbalpradipta/lms/tree/main/backend/src/model"
	"gorm.io/gorm"
)

func Migration(db *gorm.DB) error {
	return db.AutoMigrate(
		&model.User{},
		&model.Role{},
		&model.Class{},
		&model.Chat{},
		&model.Assignment{},
		&model.ClassUser{},
		&model.Course{},
		&model.Material{},
		&model.Submission{},
	)
}