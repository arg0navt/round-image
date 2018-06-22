package main

import (
	"fmt"
	"os"
	"image"
	"image/jpeg"
)

func main() {
	var img = os.Open("../src/DfhZxS.jpg")
	defer img.Close()
	var decodeImg = img.Decode(img)
	fmt.println(decodeImg)
}