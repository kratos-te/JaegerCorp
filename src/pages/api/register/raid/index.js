import { databaseConnect } from "@/lib/database-connect";
import Raid from '@/models/Raid';

// databaseConnect();

export default async(req, res) => {
    await databaseConnect();
    const { method } = req;
    console.log("start");
    console.log("req data===>", req.body);
    let raidRequire = [];
    const {requirement} = req.body;
    for(let i = 0; i < requirement.length; i++) {
        if(requirement[i].select)  raidRequire.push(requirement[i].title);
    }
    console.log("raidRequire ===>", raidRequire);
    switch(method) {
        case 'POST' : 
        try {
            // const user = await User.findOne({wallet : req.body.wallet});
            // console.log("find Result ===>", user);
            // if(!user)   User.create(req.body);
            // else console.log("same wallet is exist!!!");
            const newRaid = {
                name : req.body.name,
                discordID : req.body.discordID,
                raiderNumber : req.body.raiderNumber,
                requirement : raidRequire,
                raidURL : req.body.raidURL,
                creater : req.body.creater
            };
            const saveRes = await Raid.create(newRaid);
            console.log("response ===>", saveRes);
            res.status(200).json({success : true});

        } catch(err) {
            res.status(400).json({success: false});
        }
        break;
    }
    res.status(200).json({success : false});
}

