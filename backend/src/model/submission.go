package model

import (
	"time"

	"gorm.io/gorm"
)

type Submission struct {
	gorm.Model
	AssignmentID uint       `json:"assignment_id" form:"assignment_id"`
	Assignment   Assignment `json:"assignment" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	UserID uint `json:"user_id" form:"user_id"`
	User   User `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	SubmittedAt time.Time `json:"submitted_at" form:"submitted_at" gorm:"not null"`
}
