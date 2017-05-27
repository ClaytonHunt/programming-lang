module.exports = {
    run: (tokens) => {
        "use strict";
        let i = 0;

        while(i < tokens.length) {
            if(tokens[i]) {
                if(tokens[i+1].startsWith('STRING:')) {
                    console.log(tokens[i+1].substring(7));
                    i += 2;
                }
            } else {
                i += 1;
            }
        }
    }
};