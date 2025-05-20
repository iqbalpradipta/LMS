package model

import "gorm.io/gorm"

type Class struct {
	gorm.Model
	Name   string `json:"name" gorm:"not null"`
	Major  string `json:"major" gorm:"not null"`

	ClassUsers []ClassUser `json:"class_users" gorm:"foreignKey:ClassID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Chats      []Chat      `json:"chats" gorm:"foreignKey:ClassID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Courses    []Course    `json:"courses" gorm:"foreignKey:ClassID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`

	Materials  []Material  `json:"materials" gorm:"many2many:class_materials;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
