

import { databaseConnect } from "@/lib/database-connect";
import Raid from '@/models/Raid';

// databaseConnect();

export default async(req, res) => {
    await databaseConnect();
    const { method } = req;
    const { id } = req.query;
    switch(method) {
        case 'POST' : 
        // const user = await User.findOne({wallet : req.body.wallet});
        // console.log("find Result ===>", user);
        // if(!user)   User.create(req.body);
        // else console.log("same wallet is exist!!!");
            res.status(400).json({success : false});
            break;
        case 'GET' :
            const data = await Raid.findById(id);
            console.log("raid data ====>", data);
            res.status(200).json(data);
            break;
        case 'PUT' : 
            console.log("put ===>")
            console.log("data ===>", req.body);
            const data1 = await Raid.findOneAndUpdate({ _id : id }, {member : req.body, creater : "123"});
            console.log("raid data ====>", data1);
            res.status(200).json({ success : true});
            break;
    }
    res.status(200).json({success : false});
}