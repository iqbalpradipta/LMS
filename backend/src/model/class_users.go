package model

type ClassUser struct {
	ClassID uint  `json:"class_id" gorm:"not null"`
	UserID  uint  `json:"user_id" gorm:"not null"`
	Class   Class `json:"class" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	User    User  `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
