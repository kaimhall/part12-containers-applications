module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true,
    	"jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
	"jest"
    ],
    "rules": {
    }
}
