/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: kickoff/jest.base.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/25/2021
 * Description:
 ******************************************************************/

module.exports = {

    cacheDirectory : `${__dirname}/.jest-cache`,
    preset : 'ts-jest',
    setupFilesAfterEnv : [],
    testMatch : [
        '**/test/**/*.spec.[tj]s?(x)',
        '**/test/**/*.dt.ts'
    ],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider : 'v8',

    // A list of reporter names that jest uses when writing coverage reports
    coverageReporters : [
        'json',
        'text-summary',
        'text',
        'lcov',
        'clover'
    ],
    collectCoverageFrom : [
        '**/src/**/*.{js,ts,jsx,tsx}',
        '**/scripts/**/*.{js,ts,jsx,tsx}',
        '!**/*.d.ts'
    ],
    testEnvironment : 'node',
    transform : {
        '^.+\\.tsx?$' : [
            'ts-jest',
            {
                isolatedModules : true
            }
        ]
    },
    transformIgnorePatterns : [
        '\\.pnp\\.[^\\/]+$'
    ],
    moduleNameMapper : {}
};
