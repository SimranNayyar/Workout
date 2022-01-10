

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://test_user:191074520@workoutlogger.uv4zb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect()
collection = client.db("WorkoutLogger").collection("workouts")



const insertWorkout = async (workout) => {
    let cursor = await collection.insertOne({
        "name": workout["name"],
        "length": workout["length"],
        "date": workout["date"]
    })
    return await getWorkoutHistory()
}


const getWorkoutHistory = async () => {

    let cursor = await collection.find({}).toArray()
    let workouts = []
    cursor.forEach(workout => {
        workouts.push({workout})
    })
    return workouts
}

module.exports = {
    insertWorkout,
    getWorkoutHistory
}
