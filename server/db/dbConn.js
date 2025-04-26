const mongoose = require('mongoose');

module.exports = dbConnect = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URL)
      console.log('Connection established with DB successfully');
   } catch (error) {
      console.log('DB Connection not established with error as : ', error.message);
      process.exit(1);
   }
}