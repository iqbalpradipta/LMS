package model

import "gorm.io/gorm"

type Chat struct {
	gorm.Model
	UserID  uint  `json:"user_id"`
	User    User  `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	ClassID uint  `json:"class_id"`
	Class   Class `json:"class" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	Message string `json:"message" gorm:"not null"`
}
