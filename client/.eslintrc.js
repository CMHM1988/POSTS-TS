module.exports = {
   "env": {
      "browser": true,
      "es6": true
   },
   "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
   },
   "parserOptions": {
      "ecmaFeatures": {
         "jsx": true,
         "experimentalObjectRestSpread": true
      },
      "ecmaVersion": 2020,
      "sourceType": "module"
   },
   plugins: [
      "react",
      "react-hooks"
   ],
   extends: [
      "eslint:recommended",
      "plugin:react/recommended"
   ],
   settings: {
      react: {
         pragma: "React", // FWIW, I tried without as well.
         version: "detect" // Tried with explicit version number as well.
      }
   },
   "rules": {
      "no-eval": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "max-len": ["error", { "code": 120 }],
      "capitalized-comments": [
         "error",
         "always",
         {
            "line": {
               "ignorePattern": "pragma|ignored"
            },
            "block": {
               "ignoreInlineComments": true,
               "ignorePattern": "ignored"
            }
         }
      ],
      "react/jsx-filename-extension": [1, {
         extensions: [
            ".js",
            ".jsx"
         ]
      }],
      "react/jsx-indent": [
         "error",
         3
      ],
      "react/jsx-indent-props": [
         "error",
         3
      ],
      "linebreak-style": 0,
      // Enable additional rules
      "quotes": [
         "error",
         "double",
         {
            "allowTemplateLiterals": true
         }
      ],
      "semi": ["error", "always"],

      // Override default options for rules from base configurations
      "comma-dangle": ["error", "never"],
      "no-cond-assign": ["error", "always"],

      // Disable rules from base configurations
      "no-console": "off",
      "eol-last": ["error", "always"],

      indent: [
         "error",
         3,
         {
            "SwitchCase": 1,
            "outerIIFEBody": 0,
            "ObjectExpression": 1,
            "FunctionDeclaration": {"body": 1, "parameters": 2},
            "ArrayExpression": 1
         }
      ]
   }
};
