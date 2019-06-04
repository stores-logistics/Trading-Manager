import { Router } from 'express'
import { connect } from '../database'
import { ObjectID } from 'mongodb'
const router = Router();
// /tasks
const collection = 'trading'
        
router.get('/', async (req, res) => {
    const db = req.app.locals.database;
    try {
        const result = await db.collection(collection).find({}).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
})

router.get('/store/:id', async (req, res) => {
    const { id } = req.params;
    const db = req.app.locals.database;
    try{
    const result = await db.collection(collection).find({store_id : id }).toArray();
    // console.log(result);
    res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.toString() });
    }
})

router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const db = req.app.locals.database;
    try{
        const result = await db.collection(collection).find({user_id : id }).toArray();
        res.json(result)
    // console.log(result);
    }
    catch (error) { 
        res.status(500).json({ error: error.toString() });
    }
})

router.post('/', async (req, res) => {
    const db = await connect();
    const {timestamp, store_id, user_id, product_id,price} = req.body;
    const trading = {
        timestamp: timestamp,
        store_id: store_id,
        user_id: user_id,
        product_id: product_id,
        price: price,
    }
    const result = await db.collection(collection).insertOne(trading);
    console.log(result['ops'][0]);
    res.send(result["ops"][0]);
})



router.put('    ', async (req, res) => {
    const db = await connect();
    const id = req.params
    const {timestamp, store_id, user_id, product_id,price} = req.body;
    const trading = {
        timestamp: timestamp,
        store_id: store_id,
        user_id: user_id,
        product_id: product_id,
        price: price,
    }
    const result = await db.collection(collection).insert(trading);
    res.send(result);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection(collection).findOne({ _id: ObjectID(id) });
    res.json(result)
})

router.delete('/:id', async (req, res) => {
    const { id } = await req.params;
    const db = await connect();
    const result = await db.collection(collection).remove({ _id: ObjectID(id) })
    res.json({
        message: `The object ${id} was deleted`,
        result: result
    })
});


export default router;



