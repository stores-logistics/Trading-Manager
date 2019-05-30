import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.json('Working...')
})
router.get('/delete_all', async (req, res) => {
    const db = req.app.locals.database;
    const result =  await db.collection("trading").remove({})
    res.json(result)
})

export default router; 

