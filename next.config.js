const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: [
            'timothyellowaydds.co',
            'timothyellowaydds.com',
            'assets.timothyellowaydds.co',
            'assets.timothyellowaydds.com',
            'dev-timothy-elloway.pantheonsite.io',
            'test-timothy-elloway.pantheonsite.io',
            'live-timothy-elloway.pantheonsite.io',
        ],
    },
};
