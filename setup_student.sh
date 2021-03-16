#!/bin/sh

# Moves the Jest config file to the student's directory
cp $FIXTURES/jest.config.js .

# Moves the test files to the student's directory
mkdir tests
cp $FIXTURES/*test.js tests
