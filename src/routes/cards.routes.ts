import { Router } from 'express';

const router: Router = Router();

router.route('/')
    .get((req, res) => {
        res.status(200).json({ message: __dirname + 'api/cards' });
    });

export = router;
