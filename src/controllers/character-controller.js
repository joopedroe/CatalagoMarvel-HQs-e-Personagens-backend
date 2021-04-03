const Character =require('../models/Characters')

module.exports =
{
    
    async add_character(req, res){
        const { id, name, description, imageURL, type_image, id_user} = req.body;
        console.log(id)
        const character = await Character.create({
            id:id,
            name:name,
            description:description,
            imageURL:imageURL,
            type_image:type_image, 
            id_user:id_user

        })
        return res.json(character);
    },
    
};