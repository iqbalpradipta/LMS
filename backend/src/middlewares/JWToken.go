package middlewares

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func GenerateJWT(id int, email string) (string, error) {
	claims := jwt.MapClaims{
		"user_id": id,
		"email": email,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
		// Tolong ingetin mau gua tambahin roles
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(SECRETKEY)
}