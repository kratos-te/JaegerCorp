

import { databaseConnect } from "@/lib/database-connect";
import Raid from '@/models/Raid';

// databaseConnect();

export default async(req, res) => {
    await databaseConnect();
    const { method } = req;
    switch(method) {
        case 'POST' : 
        // const user = await User.findOne({wallet : req.body.wallet});
        // console.log("find Result ===>", user);
        // if(!user)   User.create(req.body);
        // else console.log("same wallet is exist!!!");
            res.status(400).json({success : false});
            break;
        case 'GET' :
            const data = await Raid.find({});
            console.log("raid data ====>", data);
            res.status(200).json(data);
            break;
    }
    res.status(200).json({success : false});
}