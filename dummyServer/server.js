const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Använd bara om man vill få ut ALLT
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
					"img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
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


// Login -> skicka in email och password
app.post("/login", async (req, res) => {
	const { email, pass } = req.body
    res.status(200).json({
        "message": "success login",
		"email": email,
		"password": pass
    });
})

// Register -> skicka in email, förnamn, efternamn och password
app.post("/register", async (req, res) => {
	const { email, firstname, surname, pass, pass_confirmed } = req.body
    res.status(201).json({
        "message": "Registration successfull",
		"email": email,
		"password": pass,
		"firstname": firstname,
		"surname": surname,
		"pass_confirmed": pass_confirmed
    })
}) 

// Products excludes own include a fake ID tag -> filter out sold_to 
app.get("/products/:productID", async (res) => {
    res.status(200).json({
        "message": "Success of products",
        "foods": [{
			"_id": "AAAA",
			"title": "Food title",
			"desc": "Lorem ipsum",
			"location": [45.123, 47.232],
			"free": false,
			"price": 20,
			"img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
			"expire": ["Tillagningsdatum", Date.now()],
			"tags": ["vegan", "middag", "hemmagjord", "soppa"],
			"sold_to": false,
		},
		{
			"_id": "BBBB",
			"title": "Another title",
			"desc": "Another description",
			"location": [12.345, 67.890],
			"free": true,
			"price": 0,
			"img": "https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg",
			"expire": ["Expiration date", Date.now()],
			"tags": ["fruit", "snack"],
			"sold_to": false,
		},
		{
			"_id": "CCCC",
			"title": "Third title",
			"desc": "Third description",
			"location": [98.765, 43.210],
			"free": false,
			"price": 10,
			"img": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
			"expire": ["Best before", Date.now()],
			"tags": ["dessert", "chocolate"],
			"sold_to": "2333333333333333",
		},
		{
			"_id": "DDDD",
			"title": "Fourth title",
			"desc": "Fourth description",
			"location": [23.456, 78.901],
			"free": true,
			"price": 0,
			"img": "fourth.jpg",
			"expire": ["Expiry date", Date.now()],
			"tags": ["beverage", "refreshment"],
			"sold_to": false,
		}
	 ]
    })
})

// Chat
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
					"img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
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
						},
						{
							"conversation_id": 123112,
							"time": Date.now(),
							"buyer": "11111111111",
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
						},
						{
							"conversation_id": 67890,
							"time": Date.now(),
							"buyer": "111111111111111111111111",
							"messages": [
								{
									"sender": "user2",
									"message": "Hi there",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "Hey",
									"timestamp": Date.now()
								},
								{
									"sender": "user2",
									"message": "How are you?",
									"timestamp": Date.now()
								},
								{
									"sender": "user1",
									"message": "I'm good, thanks!",
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

// Ny chat
app.post("/conversations/:productID/:userID", async (req, res) => {
    res.status(200).json({
        "message": "New chat started"
    })
})

// Lägg till en chat
app.put("/conversations/:productID/:userID", async (req, res) => {
    res.status(200).json({
        "message": "Update successfull"
    })
})


// Klicka på såld knapp
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
					"img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
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

// Profil -> visa inte sålda produkter
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
					"img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
					"expire": ["Tillagningsdatum", Date.now()],
					"tags": ["vegan", "middag", "hemmagjord", "soppa"],
					"sold_to": "222222222222222222222222",
            }, 
			{
				"_id": "DDDD",
				"title": "Fourth title",
				"desc": "Fourth description",
				"location": [23.456, 78.901],
				"free": true,
				"price": 0,
				"img": "fourth.jpg",
				"expire": ["Expiry date", Date.now()],
				"tags": ["beverage", "refreshment"],
				"sold_to": false,
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