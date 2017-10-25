# broken-hr
Evidence of broken rendering of JS in HR

### Problem

Even with a simple function, written in Javascript th Hackerrank (HR) behaved erratically. The I **tried both in-browser and NodeJS and my implementation was indeed intact**, whereas the HR **showed all tests failing**, which simply was not right. Detailed [screen-print into PDF with allegedly 'failed' tests is here](docs/hackerrank-javascript-error.pdf).

#### Code

The code and test in Jasmine is [here](tests/specs/oddnumbers_spec.js).

#### Running the code

You can checkout the code and having your `NodeJS` setup just ented the **root directory** to run:

```bash
npm install
npm start
```
or you can use alternative (which is what the `CircleCI` does for you - please see below)

```bash
npm install
npm test
```
#### Running in the CI inside the NodeJS container

**To avoid and potential configuration problems with environment setup, etc. I created as simple pipeline** with `CircleCI` and the project is building in the default `NodeJS` `container` that the `CI` spins of using only the dependencies managend by `package.json` (you can see [file here](package.json))

* CI Build current status & [details](https://circleci.com/gh/codebloke/broken-hr)
* CI [configuration file](.circleci/config.yml)
