const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

// Define your MongoDB connection URI (replace with your actual URI)
const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://sophiagorgonio:${password}@cluster0.ujvphtv.mongodb.net/Cluster`;

// Connect to MongoDB
async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
connect();

// Define a Mongoose schema and model (replace with your own schema and model)
const Schema = new mongoose.Schema({
  // Define your schema fields here
  id: Number,
  quantity: Number,
  price: Number,
});

const Model = mongoose.model("items", Schema);

// Define a new route to fetch and return data
app.get("/cart", async (req, res) => {
  try {
    // Query the database to retrieve data (fetch all documents)
    const data = await Model.find();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

// Define a new route to handle POST requests and add data to the database
app.post("/cart", async (req, res) => {
  try {
    // Retrieve the id and quantity from the request body
    const { id, quantity, price } = req.body;

    // Create a new document using the Mongoose model
    const newItem = new Model({ id, quantity, price });

    // Save the new document to the database
    const result = await newItem.save();

    // Send a success response with the newly added item
    res.status(201).json(result);
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "An error occurred while adding data" });
  }
});

// Define a new route to handle DELETE requests and remove data from the database
app.delete("/cart/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    // Delete the document with the specified ID
    const result = await Model.deleteOne({ _id: itemId });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "An error occurred while deleting data" });
  }
});

// Start the Express server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
