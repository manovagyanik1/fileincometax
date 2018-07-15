let express = require( "express" );
let router = express.Router();

/* GET home page. */
router.get( "/*", ( req, res, next ) => {
    res.render( "index", { appName: "fileIncomeTaxOnline", messenger: "https://m.me/fileincometaxonline" } );
} );

module.exports = router;
