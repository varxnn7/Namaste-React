const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/menu/:id", async (req, res) => {
  try {
    const restaurantId = req.params.id;

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.190473&lng=79.926989&restaurantId=${restaurantId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        Accept: "application/json",
        Referer: "https://www.swiggy.com/",
      },
    });

    const text = await response.text();

    if (!text) {
      return res.status(500).json({
        error: "Swiggy returned empty response",
      });
    }

    const data = JSON.parse(text);

    res.json(data);
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({
      error: "Failed to fetch menu",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});