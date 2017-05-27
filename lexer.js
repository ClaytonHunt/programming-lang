const tokenType = {
    // Absolutely nothing
    empty: 'EMPTY',

    // A token. For example, () = ,
    token: 'TOKEN',

    // First character is a letter, any proceeding characters are letters or numbers.
    identifier: 'IDENTIFIER',

    // A number
    integerLiteral: 'INTEGER LITERAL',

    // Anything enclosed in double quotes. "Hello" "1"
    stringLiteral: 'STRING LITERAL'
};

const Token = function(token, type) {
    "use strict";

    this.getType = () => {
        return token;
    };

    this.getToken = () => {
        return type;
    };

    return this;
};

const TokenData = function(pattern, type) {
    "use strict";

    this.getPattern = function() {
        return pattern;
    };

    this.getType = function() {
        return type;
    };

    return this;
};

module.exports = (data) => {
    "use strict";

    let pushBack = false;
    let lastToken = null;
    let tokenDatas = [];

    tokenDatas.push(new TokenData(/^[a-zA-Z][a-zA-Z0-9]*/, tokenType.identifier));
    tokenDatas.push(new TokenData(/^(-)?[0-9]+/, tokenType.integerLiteral));
    tokenDatas.push(new TokenData(/^".*"/, tokenType.stringLiteral));

    for(let t in ["^=", "^\\(", "^\\)", "^\\.", "^\\,"]) {
        tokenDatas.push(new TokenData(new RegExp(t), tokenType.token));
    }

    this.nextToken = () => {
        data = data.trim();

        if(pushBack) {
            pushBack = false;
            return lastToken;
        }

        if(data.length === 0) {
            return lastToken = new Token('', tokenType.empty);
        }

        for(let i = 0; i < tokenDatas.length; i++) {
            let td = tokenDatas[i];

            if(td.getPattern().test(data)) {
                let token = td.getPattern().exec(data);
                data = data.substring(token[0].length).trim();

                if(td.getType() === tokenType.stringLiteral) {
                    return lastToken = new Token(token[0].substring(1, token[0].length - 1), tokenType.stringLiteral);
                } else {
                    return lastToken = new Token(token[0], td.getType());
                }
            }
        }

        throw new Error(`Could not parse ${data}`);
    };

    this.hasNextToken = function() {
        return !(data.length === 0);
    };

    this.pushBack = function() {
        if(lastToken != null) {
            pushBack = true;
        }
    };
    // run: (data) => {
    //     let tokens = [];
    //     let token = '';
    //     let state = 0;
    //     let string = '';
    //
    //     for(let i = 0; i < data.length; i++) {
    //         token += data[i];
    //         if(token === ' ' && state === 0) {
    //             token = '';
    //         } else if(token === '\n') {
    //             token = '';
    //         } else if(token === 'PRINT') {
    //             tokens.push(`PRINT`);
    //             token = '';
    //         } else if(token === '"') {
    //             if(state === 0) {
    //                 state = 1;
    //             } else if(state === 1) {
    //                 tokens.push(`STRING:${string}`);
    //                 string = '';
    //                 state = 0;
    //                 token = '';
    //             }
    //         } else if(state === 1) {
    //             string += data[i];
    //             token = '';
    //         }
    //     }
    //
    //     // console.log(tokens);
    //     return tokens;
    // }

    return this;
};