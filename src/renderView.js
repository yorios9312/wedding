/**
 * Copyright (c) 2016, Lee Byron. Manuela is kindly borrowing and modifying this code with permission lol
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { renderFile } = require('ejs');

function renderView(view, data) {
  return new Promise((resolve, reject) => renderFile(
    __dirname + '/../views/' + view,
    data,
    (error, result) => error ? reject(error) : resolve(result)
  ))
}

module.exports = renderView
