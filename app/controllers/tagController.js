require("dotenv").config();
const Tag = require("../models/tag");


Tag.findById(3, (error, tag) => {
    if (error) {
        console.log(error);
    } else {
        console.log(tag.name);
    }
});