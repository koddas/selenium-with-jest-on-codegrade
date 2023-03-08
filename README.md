# Running Selenium with Jest on CodeGrade

A simple guide on how to set up your predefined Selenium unit tests on CodeGrade.

## Running Selenium with Jest

This first part describes how to set up Selenium with Jest on your local machine for testing and test development purposes. This should work equally well on Linux and macOS. Will it work on Windows? Maybe, probably.

### Setting up the test environment

This is dead simple. Run the npm installer and everything you need will be installed.

```bash
$ npm install
```

### Writing tests

Running Selenium with Jest can be a bit tricky. Selenium is inherently asynchronous, whereas Jest is not. Be sure to prepend all asynchronous Selenium calls (basically all calls) with an *async*, or the test cases will fail. Some very simple test examples are available in [selenium.test.js](selenium.test.js) and [simple.test.js](simple.test.js). 

### Running the tests

Running the tests is as simple as installing them. However, please note that you'll have to change the *baseURL* and *fileUnderTest* variables in [selenium.test.js](selenium.test.js) if you want to run it locally. Rum the tests from the terminal like so:

```bash
$ npm test
```


## Running on CodeGrade

Running on CodeGrade is a bit harder than running on your local machine. First of all, you'll need to set up a headless web browser (thanks to @DevinHillenius for pointing this out) to run the tests. This alone is certainly a source of many a headache.

### Setting up the CodeGrade environment

The CodeGrade setup consists of four fixtures:

- **[jest.config.js](jest.config.js)**, a very basic Jest config file, required by CodeGrade's Jest installation to run at all.
- **[run.sh](run.sh)**, a very simple script used to invoke the headless browser where needed.
- **[setup.sh](setup.sh)**, a script that installs the headless browser, the needed npm packages an initalizes Jest.
- **[setup_student.sh](setup_student.sh)**, moves the config file and all test files (i.e., all files named __*test.js__) to a directory where Jest will find them in the next stage.

This setup also contains two example test files, plus an example HTML file:

- **[index.html](index.html)**, a very basic HTML file, used to demonstrate/test the tests described below.
- **[simple.test.js](simple.test.js)**, contains two very basic unit tests to test the setup.
- **[selenium.test.js](selenium.test.js)**, contains the same tests as above, but also two rather basic Selenium-based unit tests.

Once you've created a new assignment, upload the fixtures and any test files you want to run on your students' files. Then, proceed to write the following in *Global setup script*:

```
$FIXTURES/setup.sh
```

You'll also need to set up the tests and Jest for each student. Do this by writing the following in *Per-student setup script*:

```
$FIXTURES/setup_student.sh
```

That ought to be it.

### Running the tests

Now you'll want to add some tests to actually test your students' code. Do this by attaching a unit test to your assignment. Under *Program to test*, write the following:

```
run.sh cg-jest run tests/<name_of_test_file.js>
```

This will run a single unit test file, which is useful if your tests are weighed differently. Thus, if you'd like to try the [selenium.test.js](selenium.test.js) described above, simply write

```
run.sh cg-jest run tests/selenium.test.js
```

If you'd rather run all test files at once, just write

```
run.sh cg-jest run tests/
```

You can now test your tests by submitting the **index.html** file descibed above and start the AutoTest configuration. Enjoy!
