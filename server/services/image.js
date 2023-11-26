const db = require('./db');

const image2 = async (req, res) => {
    // console.log('gg')
    const {imageNo} = req.body;
    try {
        if(imageNo){
           
            db.run()
            const image = await db.fetchimg(imageNo)
            // console.log(image);
            
            res.status(200).json(image);
            db.terminate()
        }
    }
    catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    image2
}
