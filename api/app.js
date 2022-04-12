const { use } = require("chai");

require ('express',
        'path'     
        )
const pathToIndex = '../client/index.html';
const app = express();
path.resolve(__dirname, '../client/index.html' ),

app.use('/*', (req, res ) => {
    sendFile(res, pathToIndex)
})

use()
module.exports = app;