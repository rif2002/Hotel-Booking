import { Webhook } from "svix";
import User from "../models/User.js";
const clerkWebhooks=async(req, res)=>{
    try {

        //Creat svix instance with clerk webhook
        const whook=new Webhook(process.env.CLERK_WEBHOOKS_SECRET)

        //getting headers
        const headers={
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
        }

        await whook.verify(JSON.stringify(req.body),headers)

        //getting data from request body
        const {data,type}=req.body

        const userData={
            _id:data.id,
            email:data.email_address[0].email_address,
            username:data.first_name+ " " +data.last_name,
            image:data.image_url,
        }
        
        //switch case for diff events
        switch (type) {
            case "user.created":{
                await User.create(userData)
                break;
            }
                
            case "user.updated":{
                await User.findByIdAndUpdate(data.id,userData)
                break;
            }

             case "user.deleted":{
                await User.findByIdAndDelete(data.id)
                break;
            }
        
            default:
                break;
        }
        res.json({success:true, message:"Webhook Recieved"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
        
    }
}

export default clerkWebhooks;