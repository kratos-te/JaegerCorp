/* eslint-disable import/no-anonymous-default-export */


import { databaseConnect } from "@/lib/database-connect";
import User from '@/models/User';

// databaseConnect();

export default async(req, res) => {
    await databaseConnect();
    const { method } = req;
    const { id } = req.query;
    console.log("id ===>", id);
    switch(method) {
        case 'POST' : 
        // const user = await User.findOne({wallet : req.body.wallet});
        // console.log("find Result ===>", user);
        // if(!user)   User.create(req.body);
        // else console.log("same wallet is exist!!!");
            res.status(400).json({success : false});
            break;
        case 'GET' :
            const data = await User.findOne({wallet : id});
            console.log("raid data ====>", data);
            res.status(200).json(data);
            break;
    }
    res.status(200).json({success : false});
}