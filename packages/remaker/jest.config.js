/******************************************************************
 * Copyright (C) 2022 LvChengbin
 *
 * File: remaker/jest.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/26/2022
 * Description:
 ******************************************************************/

const { name } = require( './package.json' );

module.exports = {
    ...require( '../../jest.base.config.js' ),
    rootDir : __dirname,
    displayName : name,
    id : name
};
