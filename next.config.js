const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: [
            'timothyellowayddsinc.co',
            'timothyellowayddsinc.com',
            'assets.timothyellowayddsinc.co',
            'assets.timothyellowayddsinc.com',
            'content.timothyellowayddsinc.com',
            'dev-timothy-elloway.pantheonsite.io',
            'test-timothy-elloway.pantheonsite.io',
            'live-timothy-elloway.pantheonsite.io',
        ],
    },
};
