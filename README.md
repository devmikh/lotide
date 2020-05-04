# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @devmikh/lotide`

**Require it:**

`const _ = require('@devmikh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: assert two arrays are equal
* `assertEqual(actual, expected)`: assert two values are equal
* `assertObjectsEqual(actual, expected)`: assert two objects are equal
* `countLetters(string)`: returns a count of each of the letters in the passed string
* `countOnly(allItems, itemsToCount)`: returns a count for a specific subset of passed items
* `eqArrays(arr1, arr2)`: compares two arrays and returns a boolean
* `eqObjects(object1, object2)`: compares two objects and returns a boolean
* `findKey(object, callback)`: scans the object and returns the first key for which the callback returns a truthy value
* `findKeyByValue(object, value)`: scans the object and returns the first key which contains the given value
* `flatten(array)`: takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array
* `head(array`): returns the first item in the array
* `letterPositions(string)`: returns all the indices in the string where each character is found
* `map(array, callback)`: returns a new array based on the results of the callback function
* `middle(array)`: takes in an array and returns the middle-most element(s) of the given array
* `tail(array)`: returns everything except for the first item (head) of the provided array
* `takeUntil(array, callback)`: keeps collecting items from a provided array until the callback provided returns a truthy value
* `without(source, itemToRemove)`: returns a subset of a given array, removing unwanted elements