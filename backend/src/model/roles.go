package model

import "gorm.io/gorm"

type Role struct {
	gorm.Model
	Name  string `json:"name" gorm:"not null;unique"`
	
	Users []User `json:"users" gorm:"foreignKey:RoleID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}