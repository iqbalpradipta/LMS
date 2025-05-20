package db

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func DBInit() *gorm.DB {
	dsn := "root:admin@tcp(127.0.0.1:3306)/db_lms?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	
	return db
}