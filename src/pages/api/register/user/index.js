
import { databaseConnect } from "@/lib/database-connect";
import User from '@/models/User';

// databaseConnect();

export default async(req, res) => {
    await databaseConnect();
    const { method } = req;
    console.log("start");
    console.log("req data===>", req.body);
    switch(method) {
        case 'POST' : 
        try {
            const user = await User.findOne({wallet : req.body.wallet});
            console.log("find Result ===>", user);
            if(!user)   User.create(req.body);
            else console.log("same wallet is exist!!!");
            res.status(200).json({success : true});

        } catch(err) {
            res.status(400).json({success: false});
        }
        break;
    }
    res.status(200).json({success : false});
}