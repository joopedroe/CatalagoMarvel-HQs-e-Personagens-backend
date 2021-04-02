const Comic =require('../models/Comic')

module.exports =
{
    
    async add_comic(req, res){
        const { id, title, description, imageURL, type_image, id_user} = req.body;
        console.log(id)
        const comic = await Comic.create({
            id:id,
            title:title,
            description:description,
            imageURL:imageURL,
            type_image:type_image, 
            id_user:id_user

        })
        return res.json(comic);
    },
    
    
};