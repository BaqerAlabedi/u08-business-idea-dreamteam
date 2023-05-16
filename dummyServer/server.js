const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/books", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "books": [
            {
                "_id": "645b7cc3424d43eee1ea75ff",
                "title": "Blue room",
                "author": "Sebbe",
                "publisher": "Lindcode Books",
                "read": true,
                "__v": 0
            },
            {
                "_id": "645b7ce0424d43eee1ea7601",
                "title": "Red room",
                "author": "Mr Lindgren",
                "publisher": "Lindcode Books",
                "read": true,
                "__v": 0
            },
            {
                "_id": "645b7ce0424d43eee1ea7602",
                "title": "Yellow room",
                "author": "Mr Tomas",
                "publisher": "Lindcode Books (tm)",
                "read": false,
                "__v": 0
            }
        ]
    })
})

app.get("/books/645b7cc3424d43eee1ea75ff", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "book": {
            "_id": "645b7cc3424d43eee1ea75ff",
            "title": "Blue room",
            "author": "Sebbe",
            "publisher": "Lindcode Books",
            "read": true,
            "__v": 0
        }
    });
})

app.post("/books", async (req, res) => {
    res.status(201).json({
        "message": "New book record created"
    })
})

app.put("/books/645b7cc3424d43eee1ea75ff", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "book": {
            "_id": "645b7cc3424d43eee1ea75ff",
            "title": "Yellow room",
            "author": "Sebbe",
            "publisher": "Lindcode Books",
            "read": false,
            "__v": 0
        }
    })
})

app.delete("/books/645b7cc3424d43eee1ea75ff", async (req, res) => {
    res.status(200).json({
        "message": "Deleted Successfully"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})