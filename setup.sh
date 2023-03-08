#!/bin/sh

# Installs Jest as per https://help.codegrade.com/user-reference/autotest-general/unit-test
cg-jest install

# Updates the Ubuntu repo settings
sudo apt update

# Installs Firefox and a headless X window manager
sudo apt install firefox xvfb

# Installs the neccessary javascript libraries
npm install -g selenium-webdriver@4.0.0-beta.2 geckodriver

# Makes the run script executable
chmod +x $FIXTURES/run.sh
