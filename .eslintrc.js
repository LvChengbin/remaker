const path = require( 'path' );

module.exports = {
    extends : [
        'eslint:recommended'
    ],
    parserOptions : {
        sourceType : 'module',
        ecmaVersion : 2021
    },
    env : {
        es2020 : true,
        es6 : true,
        jest : true,
        node : true,
        browser : true
    },
    reportUnusedDisableDirectives : true,
    rules : {
        // Posible Errors
        'no-await-in-loop' : 'error',
        'no-console' : 'error',
        'no-extra-parens' : 'error',
        'no-loss-of-precision' : 'error',
        'no-promise-executor-return' : 'error',
        'no-template-curly-in-string' : 'error',
        'no-unreachable-loop' : 'error',
        'no-useless-backreference' : 'error',

        // Best Practices
        'block-scoped-var' : 'error',
        'class-methods-use-this' : 'off',
        'default-param-last' : 'error',
        'dot-notation' : 'error',
        'no-else-return' : 'error',
        'no-empty-function' : 'off',
        'no-eq-null' : 'error',
        'no-extend-native' : 'error',
        'no-multi-spaces' : 'error',
        'no-multi-str' : 'error',
        'no-return-await' : 'error',
        'no-self-compare' : 'error',
        'no-throw-literal' : 'error',
        'no-unused-expressions' : [ 'error', {
            allowShortCircuit : true,
            allowTernary : true,
            allowTaggedTemplates : true
        } ],
        'no-warning-comments' : [ 'error', { terms : [ '@todo', '@bug' ], location : 'start' } ],
        'vars-on-top' : 'error',
        'wrap-iife' : 'error',
        yoda : [ 'error', 'never', { exceptRange : false } ],

        // Variables
        'no-use-before-define' : [ 'error', { functions : false, classes : false } ],

        // Stylistic Issues
        'array-bracket-spacing' : [ 'error', 'always' ],
        'block-spacing' : [ 'error', 'always' ],
        'brace-style' : [ 'error', '1tbs', { allowSingleLine : true } ],
        'comma-spacing' : [ 'error', { before : false, after : true } ],
        'comma-style' : [ 'error', 'last' ],
        'computed-property-spacing' : [ 'error', 'always' ],
        'func-call-spacing' : [ 'error', 'never' ],
        'implicit-arrow-linebreak' : [ 'error', 'beside' ],
        'indent' : [ 'error', 4, {
            SwitchCase : 1,
            ignoredNodes : [
                'TemplateLiteral *',
                'FunctionExpression > .params[decorators.length > 0]',
                'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
            ]
        } ],
        'jsx-quotes' : [ 'error', 'prefer-double' ],
        'key-spacing' : [ 'error', { beforeColon : true, afterColon : true } ],
        'keyword-spacing' : [ 'error', {
            before : true,
            after : true,
            overrides : {
                if : { after : false },
                for : { after : false },
                while : { after : false },
                switch : { after : false },
                catch : { after : false } }
        } ],
        'linebreak-style' : [ 'error', 'unix' ],
        'lines-between-class-members' : [ 'error', 'always', {
            exceptAfterSingleLine : true
        } ],
        'no-multi-assign' : 'error',
        'no-multiple-empty-lines' : 'error',
        'no-tabs' : 'error',
        'no-trailing-spaces' : 'error',
        'no-undef' : 'error',
        'no-whitespace-before-property' : 'error',
        'object-curly-spacing' : [ 'error', 'always' ],
        'quotes' : [ 'error', 'single' ],
        'semi' : [ 'error', 'always', { omitLastInOneLineBlock : true } ],
        'space-before-blocks' : 'error',
        'space-before-function-paren' : [ 'error', {
            anonymous : 'never',
            named : 'never',
            asyncArrow : 'always'
        } ],
        'space-in-parens' : [ 'error', 'always' ],
        'space-infix-ops' : 'error',
        'space-unary-ops' : [ 'error', { words : true, nonwords : false } ],
        'spaced-comment' : [ 'error', 'always', { exceptions : [ '+', '-', '*' ] } ],
        'switch-colon-spacing' : [ 'error', { after : true, before : true } ],
        'template-tag-spacing' : [ 'error', 'never' ],
        'unicode-bom' : [ 'error', 'never' ],

        // EcmaScript 6
        'arrow-spacing' : [ 'error', { before : true, after : true } ],
        'rest-spread-spacing' : [ 'error', 'never' ],
        'symbol-description' : 'error'
    },
    overrides : [ {
        files : [ '*.ts', '*.tsx' ],
        parser : '@typescript-eslint/parser',
        plugins : [ '@typescript-eslint' ],
        extends : [
            'plugin:@typescript-eslint/recommended'
        ],
        parserOptions : {
            project : path.join( __dirname, 'tsconfig.json' ),
            sourceType : 'module',
            ecmaVersion : 2021,
            createDefaultProgram : true
        },
        settings : {
            react : {
                version : 'detect'
            }
        },
        rules : {
            'brace-style' : 'off',
            'comma-dangle' : 'off',
            'comma-spacing' : 'off',
            'default-param-last' : 'off',
            'dot-notation' : 'off',
            'func-call-spacing' : 'off',
            'keyword-spacing' : 'off',
            'lines-between-class-members' : 'off',
            'no-dupe-class-members' : 'off',
            'no-duplicate-imports' : 'off',
            'no-extra-parens' : 'off',
            'no-redeclare' : 'off',
            'no-throw-literal' : 'off',
            'no-unused-expressions' : 'off',
            'no-unused-vars' : 'off',
            'no-use-before-define' : 'off',
            'no-extra-semi' : 'off',
            'semi' : 'off',
            '@typescript-eslint/array-type' : [ 'error', { default : 'array', readonly : 'array' } ],
            '@typescript-eslint/ban-types' : [ 'error', {
                extendDefaults : true,
                types : {
                    Function : false,
                    Object : false
                }
            } ],
            '@typescript-eslint/explicit-function-return-type' : 'off',
            '@typescript-eslint/explicit-module-boundary-types' : 'off',
            '@typescript-eslint/member-delimiter-style' : [ 'error', {
                multiline : { delimiter : 'semi', requireLast : true },
                singleline : { delimiter : 'semi', requireLast : false }
            } ],
            '@typescript-eslint/member-ordering' : [ 'error', {
                default : [ 'field', 'signature', 'constructor', 'method' ],
                classes : [
                    'private-static-field',
                    'public-static-field',
                    'private-static-method',
                    'public-static-method',
                    'private-instance-field',
                    'public-instance-field',
                    'constructor',
                    'private-instance-method',
                    'public-instance-method'
                ]
            } ],
            '@typescript-eslint/naming-convention' : [ 'error', {
                format : [ 'camelCase', 'PascalCase', 'UPPER_CASE' ],
                selector : [ 'variable', 'function' ]
            } ],
            '@typescript-eslint/no-confusing-non-null-assertion' : [ 'error' ],
            '@typescript-eslint/no-confusing-void-expression' : [ 'error' ],
            '@typescript-eslint/no-dynamic-delete' : [ 'error' ],
            '@typescript-eslint/no-empty-interface' : [ 'error', { allowSingleExtends : true } ],
            '@typescript-eslint/no-empty-function' : 'off',
            '@typescript-eslint/no-implicit-any-catch' : [ 'error' ],
            '@typescript-eslint/no-require-imports' : [ 'error' ],
            '@typescript-eslint/no-unnecessary-boolean-literal-compare' : [ 'error' ],
            '@typescript-eslint/no-unnecessary-condition' : 'off',
            '@typescript-eslint/no-unnecessary-qualifier' : [ 'error' ],
            '@typescript-eslint/no-unnecessary-type-constraint' : [ 'error' ],
            '@typescript-eslint/prefer-nullish-coalescing' : [ 'error' ],
            '@typescript-eslint/prefer-optional-chain' : [ 'error' ],
            '@typescript-eslint/prefer-reduce-type-parameter' : [ 'error' ],
            '@typescript-eslint/prefer-string-starts-ends-with' : [ 'error' ],
            '@typescript-eslint/prefer-ts-expect-error' : [ 'error' ],
            '@typescript-eslint/promise-function-async' : [ 'error' ],
            '@typescript-eslint/semi' : [ 'error', 'always', { omitLastInOneLineBlock : true } ],
            '@typescript-eslint/switch-exhaustiveness-check' : [ 'error' ],
            '@typescript-eslint/type-annotation-spacing' : [ 'error', {
                before : false,
                after : true,
                overrides : {
                    arrow : { before : true, after : true }
                }
            } ],
            '@typescript-eslint/unified-signatures' : 'off',
            '@typescript-eslint/brace-style' : [ 'error', '1tbs', { allowSingleLine : true } ],
            '@typescript-eslint/comma-dangle' : [ 'error' ],
            '@typescript-eslint/comma-spacing' : [ 'error', { before : false, after : true } ],
            '@typescript-eslint/default-param-last' : [ 'error' ],
            '@typescript-eslint/dot-notation' : [ 'error' ],
            '@typescript-eslint/func-call-spacing' : [ 'error', 'never' ],
            '@typescript-eslint/keyword-spacing' : [ 'error', {
                before : true,
                after : true,
                overrides : {
                    if : { after : false },
                    for : { after : false },
                    while : { after : false },
                    switch : { after : false },
                    catch : { after : false }
                }
            } ],
            '@typescript-eslint/lines-between-class-members' : [ 'error', 'always', {
                exceptAfterSingleLine : true
            } ],
            '@typescript-eslint/no-dupe-class-members' : [ 'error' ],
            '@typescript-eslint/no-duplicate-imports' : [ 'error' ],
            '@typescript-eslint/no-extra-semi' : 'off',
            '@typescript-eslint/no-explicit-any' : [ 'error' ],
            '@typescript-eslint/no-unused-vars' : [ 'error' ],
            '@typescript-eslint/no-redeclare' : [ 'error' ],
            '@typescript-eslint/no-throw-literal' : [ 'error' ],
            '@typescript-eslint/no-unused-expressions' : [ 'error', {
                allowShortCircuit : true,
                allowTernary : true,
                allowTaggedTemplates : true
            } ],
            '@typescript-eslint/no-use-before-define' : [ 'error', { functions : false, classes : false } ]
        }
    }, {
        files : [ '*.tsx', '*.jsx' ],
        plugins : [ 'react' ],
        rules : {
            'react/boolean-prop-naming' : 'error',
            'react/button-has-type' : 'error',
            'react/default-props-match-prop-types' : 'error',
            'react/display-name' : 'error',
            'react/forbid-component-props' : [ 'error', { forbid : [ 'style' ] } ],
            'react/forbid-foreign-prop-types' : 'error',
            'react/function-component-definition' : [ 'error', {
                namedComponents : 'function-declaration'
            } ],
            'react/jsx-child-element-spacing' : 'error',
            'react/jsx-closing-bracket-location' : 'error',
            'react/jsx-closing-tag-location' : 'error',
            'react/jsx-curly-newline' : 'error',
            'react/jsx-curly-spacing' : [ 'error', { when : 'never' } ],
            'react/jsx-equals-spacing' : [ 'error', 'never' ],
            'react/jsx-filename-extension' : [ 'error', { allow : 'as-needed', extensions : [ '.jsx', '.tsx' ] } ],
            'react/jsx-fragments' : 'error',
            'react/jsx-handler-names' : 'error',
            'react/jsx-indent-props' : 'error', // 4 spaces
            'react/jsx-indent' : 'error', // 4 spaces
            'react/jsx-key' : [ 'error', { checkKeyMustBeforeSpread : true } ],
            'react/jsx-no-comment-textnodes' : 'error',
            'react/jsx-no-constructed-context-values' : 'error',
            'react/jsx-no-duplicate-props' : 'error',
            'react/jsx-no-script-url' : 'error',
            'react/jsx-no-target-blank' : 'error',
            'react/jsx-no-undef' : 'error',
            'react/jsx-no-useless-fragment' : 'error',
            'react/jsx-pascal-case' : 'error',
            'react/jsx-props-no-multi-spaces' : 'error',
            'react/jsx-tag-spacing' : [ 'error', { beforeSelfClosing : 'always' } ],
            'react/jsx-uses-vars' : 'error',
            'react/jsx-wrap-multilines' : 'error',
            'react/no-array-index-key' : 'error',
            'react/no-danger-with-children' : 'error',
            'react/no-deprecated' : 'error',
            'react/no-string-refs' : 'error',
            'react/no-this-in-sfc' : 'error',
            'react/no-unescaped-entities' : 'error',
            'react/no-unknown-property' : 'error',
            'react/no-unused-prop-types' : 'error',
            'react/prefer-read-only-props' : 'error',
            'react/prefer-stateless-function' : 'error',
            'react/prop-types' : 'error',
            'react/self-closing-comp' : 'error',
            'react/style-prop-object' : 'error',
            'react/void-dom-elements-no-children' : 'error'
        }
    }, {
        // fules for testing files
        files : [ '*.spec.ts', '*.spec.js', '*.spec.tsx', '*.spec.jsx', '*.dt.ts' ],
        rules : {
            'no-delete-var' : 'off',
            '@typescript-eslint/no-floating-promises' : 'off',
            '@typescript-eslint/explicit-function-return-type' : 'off',
            '@typescript-eslint/no-non-null-assertion' : 'off'
        }
    }, {
        files : [ '*.d.ts' ],
        rules : {
            'spaced-comment' : 'off',
            'constructor-super' : 'off',
            '@typescript-eslint/no-unused-vars' : 'off',
            '@typescript-eslint/no-explicit-any' : 'off',
            '@typescript-eslint/naming-convention' : 'off'
        }
    } ]
};
