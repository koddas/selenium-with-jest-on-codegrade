#!/bin/sh

# Installs Jest as per https://help.codegrade.com/user-reference/autotest-general/unit-test
cg-jest install

# Installs Firefox and a headless X window manager
sudo apt install firefox xvfb

# Installs the neccessary javascript libraries
npm install -g selenium-webdriver geckodriver

# Makes the run script executable
chmod +x $FIXTURES/run.sh
