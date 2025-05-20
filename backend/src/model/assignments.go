package model

import (
	"time"

	"gorm.io/gorm"
)

type Assignment struct {
	gorm.Model
	Title       string    `json:"title" form:"title" gorm:"not null"`
	Description string    `json:"description" form:"description" gorm:"not null"`
	Deadline    time.Time `json:"deadline" form:"deadline" gorm:"not null"`

	MaterialID uint     `json:"material_id" form:"material_id"`
	Material   Material `json:"material" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	UserID uint `json:"user_id" form:"user_id"`
	User   User `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	Submissions []Submission `json:"submissions" gorm:"foreignKey:AssignmentID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
