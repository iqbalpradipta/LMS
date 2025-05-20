package model

import "gorm.io/gorm"

type Material struct {
	gorm.Model
	Title    string `json:"title" form:"title" gorm:"not null"`
	Content  string `json:"content" form:"content" gorm:"not null"`

	CourseID uint    `json:"course_id" form:"course_id"`
	Course   Course  `json:"course" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

	Classes []Class `json:"classes" gorm:"many2many:class_materials;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`

	Assignments []Assignment `json:"assignments" gorm:"foreignKey:MaterialID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
