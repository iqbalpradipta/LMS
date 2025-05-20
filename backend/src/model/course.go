package model

import "gorm.io/gorm"

type Course struct {
	gorm.Model
	Name   string `json:"name" form:"name" gorm:"not null"`
	UserID uint   `json:"user_id" form:"user_id"`
	User   User   `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	ClassID uint   `json:"class_id" form:"class_id"`
	Class   Class  `json:"class" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	Materials []Material `json:"materials" gorm:"foreignKey:CourseID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
