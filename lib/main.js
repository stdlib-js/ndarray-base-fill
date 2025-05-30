/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isScalarMostlySafeCompatible = require( '@stdlib/ndarray-base-assert-is-scalar-mostly-safe-compatible' ); // eslint-disable-line id-length
var broadcastScalar = require( '@stdlib/ndarray-base-broadcast-scalar' );
var getDtype = require( '@stdlib/ndarray-base-dtype' );
var getShape = require( '@stdlib/ndarray-base-shape' );
var getOrder = require( '@stdlib/ndarray-base-order' );
var assign = require( '@stdlib/ndarray-base-assign' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Fills an input ndarray with a specified value.
*
* @param {ndarrayLike} x - ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {*} value - scalar value
* @throws {TypeError} second argument cannot be safely cast to the input array data type
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create the input ndarray-like object:
* var x = {
*     'dtype': 'float64',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major'
* };
*
* fill( x, 10.0 );
*
* console.log( x.data );
* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/
function fill( x, value ) {
	var dt;
	var v;

	dt = getDtype( x );

	// Safe casts are always allowed and allow same kind casts (i.e., downcasts) only when the output data type is floating-point...
	if ( !isScalarMostlySafeCompatible( value, dt ) ) {
		throw new TypeError( format( 'invalid argument. The second argument cannot be safely cast to the input array data type. Data type: %s. Value: `%s`.', dt, value ) );
	}
	// Broadcast the fill value to an ndarray of same shape and data type as the input ndarray:
	v = broadcastScalar( value, dt, getShape( x ), getOrder( x ) );

	// Assign the fill value to each element of the input ndarray:
	assign( [ v, x ] ); // TODO: consider replacing with ndarray/base/assign-scalar in order to avoid zero-dimensional ndarray creation and subsequent broadcasting
}


// EXPORTS //

module.exports = fill;
