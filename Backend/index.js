const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the express app
const app = express();
const jwt = require('jsonwebtoken');
// Use middleware
app.use(cors());
app.use(express.json());
const DB= "mongodb+srv://mukesh:mukesh1234@students.vcdah.mongodb.net/?retryWrites=true&w=majority&appName=students";
// Connect to MongoDB
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Error connecting to MongoDB:", err));


// Mongoose Schema for students (including the result field)
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  result: { type: String, enum: ['Pass', 'Fail'], required: true }  // Add result field with enum values
});

const studentsModel = mongoose.model('Student', studentSchema);

// GET all students
app.get("/", (req, res) => {
  studentsModel.find({})
    .then(students => res.json(students))
    .catch(err => res.status(500).json({ message: "Error fetching students", error: err }));
});

// GET a single student by ID
app.get('/students/:id', (req, res) => {
  studentsModel.findById(req.params.id)
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(student);
    })
    .catch(err => res.status(500).json({ message: "Error fetching student", error: err }));
});

// POST to create a new student
app.post("/New", (req, res) => {
  const { name, email, age, result } = req.body;  // Include result in the request body

  // Ensure all fields are provided
  if (!name || !email || !age || !result) {
    return res.status(400).json({ message: "All fields (name, email, age, result) are required" });
  }

  // Create a new student
  studentsModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.status(500).json({ message: "Error creating student", error: err }));
});

// PUT to update a student by ID
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, age, result } = req.body;  // Include result in the request body

  // Ensure all fields are provided
  if (!name || !email || !age || !result) {
    return res.status(400).json({ message: "All fields (name, email, age, result) are required" });
  }

  // Find and update the student
  studentsModel.findByIdAndUpdate(id, { name, email, age, result }, { new: true, runValidators: true })
    .then(updatedStudent => {
      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(updatedStudent);
    })
    .catch(err => res.status(500).json({ message: "Error updating student", error: err }));
});

// DELETE to remove a student by ID
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;

  // Delete the student by ID
  studentsModel.findByIdAndDelete(id)
    .then(deletedStudent => {
      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json({ message: "Student deleted successfully" });
    })
    .catch(err => res.status(500).json({ message: "Error deleting student", error: err }));
});


// GET students by result (Pass/Fail)
app.get("/results", (req, res) => {
    studentsModel.aggregate([
      {
        $group: {
          _id: "$result",   // Group by result (Pass/Fail)
          students: {
            $push: {
              name: "$name",
              email: "$email",
              age: "$age"
            }
          }
        }
      }
    ])
    
      .then(result => res.json(result))
      .catch(err => res.status(500).json({ message: "Error fetching students results", error: err }));
  });
  




// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
