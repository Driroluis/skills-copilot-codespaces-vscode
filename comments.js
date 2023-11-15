Synthesizing 9/10 solutions (Duplicates hidden) 

Suggestion 1

// Create web server for comment 
//======================================

// Import module 
 
const express = require('express'); 
const router = express.Router(); 
const comentController = require("../controllers/comment");

// Handle request 
router. get( '/' , commentControlter. comment_list) ; 
router. get( ' /create' , commentController.comment_create_ge );
router.post( ' /create' , commentController.comment_create_ge );
router. get(  '/id/delete', commentControtter. comment_delet);