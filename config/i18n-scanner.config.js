var fs = require('fs');
var chalk = require('chalk');

module.exports = {
    input : [
    '!components/**/index.{js,jsx}'
    ],
    options: {
        debug: false,
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx']
        },
        trans: {
            component: 'Trans',
            extensions: ['.js', '.jsx'],
            fallbackKey: (ns, value) => {
                return value;
            },
            acorn: {
                ecmaVersion: 10, // defaults to 10
                sourceType: 'module', // defaults to 'module'
                // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
            }
        },
        lngs: ['de','si', 'en', 'ru'],
        ns: [
            'locale',
            'resource'
        ],
        defaultNs: 'resource',
        //fallbackKey : true,
        defaultValue: function(lng, ns, key) {
          //if (lng === 'en' || ) {
              // Return key as the default value for English language
              return key;
          //}
          // Return the string '__NOT_TRANSLATED__' for other languages
          //return '__NOT_TRANSLATED__';
        },
        resource: {
            loadPath: 'src/translations/{{lng}}/{{ns}}.json',
            savePath: 'src/translations/{{lng}}/{{ns}}.json'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        "use strict";
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
            parser.set(key, Object.assign({}, options, {
                nsSeparator: false,
                keySeparator: false
            }));
            ++count;
        });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    }
};
