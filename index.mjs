import fs from "fs/promises";

export const downloadImage = async (username, password, originalImage) => {
  // 1. Login
  // POST https://www.pictorem.com/myaccount.html
  // Save cookies for next requests
  //
  // 2. Upload original image (with cookies)
  // Page: https://www.pictorem.com/checkprintwall.html
  //
  // POST https://www.pictorem.com/frontend/checkprintwall
  // JSON response: {"err":0,"source":"lenna.png","hash":"10642d5e21fd1d9b8ee5c30a4ff73d6b"}
  //
  // 3. Load page using response hash (with cookies):
  // Page: https://www.pictorem.com/genimage.html?canvas=&checkwall=10642d5e21fd1d9b8ee5c30a4ff73d6b&cartid=&frametype=&canvaswidth=48&backtheme=52
  // Extract image link from HTML: https://www.pictorem.com/uploads/wallimage/N4H6DMIQPQ.jpg
  //
  // 4. Download image and return as buffer
  const newImage = originalImage;

  return newImage;
};

const originalImage = await fs.readFile("lenna.png");
const image = await downloadImage("username", "password", originalImage);
await fs.writeFile("newImage.jpg", image);
