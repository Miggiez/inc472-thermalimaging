
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');
const uri = "mongodb+srv://senior:happy@main.tzwqxzo.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("cropped").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch(err){
    console.error(`Something went wrong trying to find one document: ${err}\n`)
  }
}

function terminate(){
  // Ensures that the client will close when you finish/error
  client.close();
}

async function fetchimg(imageNo) {
  const dbName = "Cropped";
  const collectionName = "image";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  
  try {
    const findOneQuery = {"imageNo" : imageNo};
    if(imageNo){
      const imagefile = await collection.findOne(findOneQuery) ; 
      if(imagefile){
        return(imagefile)
      }
      else{
        res.status(500).json({ message: 'error: imagefile doesn\'t exists'});
      }
    }
    else {
      res.status(500).json({ message: 'error: imagename is null' });
    }
  }
  catch(err){
    console.error(`Something went wrong trying to find one document: ${err}\n`)
  }
}
async function upload(imagepath){
  const dbName = "Cropped";
  const collectionName = "image";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  
  const imageBuffer = fs.readFileSync(imagepath);
  const base64Image = imageBuffer.toString('base64');
  collection.insertOne({ image: base64Image, imageNo: "1" });
}


module.exports = {
  fetchimg,
  run,
  terminate,
  upload
}
