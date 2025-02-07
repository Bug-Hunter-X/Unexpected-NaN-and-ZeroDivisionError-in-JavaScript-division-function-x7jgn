# JavaScript Division Function Bug

This repository demonstrates a common yet subtle bug in JavaScript related to handling NaN and zero values during division. The `foo` function intends to handle cases where either input is zero, however, it fails to correctly manage NaN values.

## Bug Description

The `bug.js` file contains a function that performs division. The function attempts to handle cases where either input is zero. However, this simple check is insufficient. When NaN is input as a parameter, the function returns NaN without explicitly handling it. In addition, if either input is zero, it does not return NaN but instead incorrectly returns zero.

## Solution

The `bugSolution.js` file provides a corrected version of the function that explicitly handles NaN and zero division errors, providing more robust and reliable results.

## How to Run

1. Clone the repository.
2. Run `node bug.js` to see the original buggy behavior.
3. Run `node bugSolution.js` to see the corrected behavior.