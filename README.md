# React Native FlatList Blank Screen on Initial Load

This repository demonstrates a common issue in React Native where a FlatList component renders a blank screen initially when dealing with slow network requests or computationally expensive data processing. The issue occurs because the FlatList doesn't immediately display anything while fetching and processing data.  The solution involves improved state management and loading indicators.

## Bug
The `bug.js` file contains the buggy implementation.  The `FlatList` component renders a blank screen for 5 seconds before populating with data.

## Solution
The `bugSolution.js` file provides a fix to the problem by showing a loading indicator while the data is being fetched.