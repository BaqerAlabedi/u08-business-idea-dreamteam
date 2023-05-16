const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products/:userID", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "user":
            {
                "_id": "645b7cc3424d43eee1ea75ff",
                "first_name": "Cattis",
                "surname": "Gustafsson",
                "email": "cattis@hejdev.se",
				"address": "Arenavägen 63",
				"img": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				"foods": [{
					"_id": "AAAA",
					"title": "Food title",
					"desc": "Lorem ipsum",
					"location": [45.123, 47.232],
					"free": false,
					"price": 20,
					"img": "food.jpg",
					"expire": ["Tillagningsdatum", Date.now()],
					"tags": ["vegan", "middag", "hemmagjord", "soppa"],
					"sold_to": "222222222222222222222222",
					"conversation": [
						{
							"conversation_id": 12345,
							"time": Date.now(),
							"buyer": "222222222222222222222222",
							"messages": [
								{
									"sender": "user1",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								},
								{
									"sender": "user2",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								}
							]
						}
					]
            }
        ]
    }})
})



app.get("/users", async (req, res) => {
    res.status(200).json({
        "message": "success login",
    });
})

app.post("/users", async (req, res) => {
    res.status(201).json({
        "message": "Registration successfull"
    })
}) 

app.get("/products/:productID", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "foods": {
			"_id": "AAAA",
			"title": "Food title",
			"desc": "Lorem ipsum",
			"location": [45.123, 47.232],
			"free": false,
			"price": 20,
			"img": "food.jpg",
			"expire": ["Tillagningsdatum", Date.now()],
			"tags": ["vegan", "middag", "hemmagjord", "soppa"],
			"sold_to": "222222222222222222222222",
			"conversation": [
				{
					"conversation_id": 12345,
					"time": Date.now(),
					"buyer": "222222222222222222222222",
					"messages": [
						{
							"sender": "user1",
							"message": "Hello World",
							"timestamp": Date.now()
						},
						{
							"sender": "user1",
							"message": "Hello",
							"timestamp": Date.now()
						},
						{
							"sender": "user2",
							"message": "Hello World",
							"timestamp": Date.now()
						},
						{
							"sender": "user1",
							"message": "Hello",
							"timestamp": Date.now()
						}
					]
				}
			]
	}
    })
})

// Chatten

app.get("/conversations/:productID/:userID", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "user":
            {
                "_id": "645b7cc3424d43eee1ea75ff",
                "first_name": "Cattis",
                "surname": "Gustafsson",
				"foods": [{
					"_id": "AAAA",
					"title": "Food title",
					"location": [45.123, 47.232],
					"free": false,
					"price": 20,
					"img": "food.jpg",
					"expire": ["Tillagningsdatum", Date.now()],
					"tags": ["vegan", "middag", "hemmagjord", "soppa"],
					"sold_to": "222222222222222222222222",
					"conversation": [
						{
							"conversation_id": 12345,
							"time": Date.now(),
							"buyer": "222222222222222222222222",
							"messages": [
								{
									"sender": "user1",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								},
								{
									"sender": "user2",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								}
							]
						}
					]
            }
        ]
    }
    })
})

app.post("/conversations/:productID/:userID", async (req, res) => {
    res.status(200).json({
        "message": "New chat started"
    })
})

app.put("/conversations/:productID/:userID", async (req, res) => {
    res.status(200).json({
        "message": "Update successfull"
    })
})

app.put("/conversations/:productID", async (req, res) => {
    res.status(200).json({
        "message": "The product is now sold"
    })
})

// Konversationer
app.get("/conversations/:userID", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "user":
            {
                "_id": "645b7cc3424d43eee1ea75ff",
                "first_name": "Cattis",
                "surname": "Gustafsson",
				"foods": [{
					"_id": "AAAA",
					"title": "Food title",
					"location": [45.123, 47.232],
					"free": false,
					"price": 20,
					"img": "food.jpg",
					"expire": ["Tillagningsdatum", Date.now()],
					"tags": ["vegan", "middag", "hemmagjord", "soppa"],
					"sold_to": "222222222222222222222222",
					"conversation": [
						{
							"conversation_id": 12345,
							"time": Date.now(),
							"buyer": "222222222222222222222222",
							"messages": [
								{
									"sender": "user1",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								},
								{
									"sender": "user2",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								}
							]
						}
					]
            }
        ]
    }
    })
})

// Profil
app.get("/users/:userID", async (req, res) => {
    res.status(200).json({
        "message": "success",
        "user":
            {
                "_id": "645b7cc3424d43eee1ea75ff",
                "first_name": "Cattis",
                "surname": "Gustafsson",
                "email": "cattis@hejdev.se",
				"address": "Arenavägen 63",
				"img": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				"foods": [{
					"_id": "AAAA",
					"title": "Food title",
					"desc": "Lorem ipsum",
					"location": [45.123, 47.232],
					"free": false,
					"price": 20,
					"img": "food.jpg",
					"expire": ["Tillagningsdatum", Date.now()],
					"tags": ["vegan", "middag", "hemmagjord", "soppa"],
					"sold_to": "222222222222222222222222",
					"conversation": [
						{
							"conversation_id": 12345,
							"time": Date.now(),
							"buyer": "222222222222222222222222",
							"messages": [
								{
									"sender": "user1",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								},
								{
									"sender": "user2",
									"message": "Hello World",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hello",
									"timestamp": Date.now()
								}
							]
						}
					]
            }
        ]
    }})
})

// Edit profil
app.put("/users/:userID", async (req, res) => {
    res.status(200).json({
        "message": "success",
    })
})

app.delete("/users/:userID", async (req, res) => {
    res.status(200).json({
        "message": "delete success",
    })
})

// Edit product
app.put("/products/:productID", async (req, res) => {
    res.status(200).json({
        "message": "success",
    })
})

app.delete("/products/:productID", async (req, res) => {
    res.status(200).json({
        "message": "delete success",
    })
})

// New product
app.post("/products/:productID", async (req, res) => {
    res.status(200).json({
        "message": "Product created",
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})