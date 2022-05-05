const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI,
            {
                useFindAndModify: false,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
              }
        )

        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb