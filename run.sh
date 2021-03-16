#!/bin/sh

# Since Selenium will run Firefox, we need to run it in an X environent.
xvfb-run "$@"
