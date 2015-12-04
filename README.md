[![Code Climate](https://codeclimate.com/github/jbavari/the-force/badges/gpa.svg)](https://codeclimate.com/github/jbavari/the-force)

[![Test Coverage](https://codeclimate.com/github/jbavari/the-force/badges/coverage.svg)](https://codeclimate.com/github/jbavari/the-force/coverage)

# Installation

`npm install the-force`

Add script to your page:

`<script src="node_modules/force.js">`

NOTE: This currently only works with Safari 9+.

## Bootstrap to button

`TheForce.beWith('button-id').alter('boxShadow');`

## Make the button glow 

As more pressure is applied to the touch pad, it will alter the effect:

`TheForce.beWith('button-id').alter('boxShadow', 'green');`

# Compile the ES5 file

`npm run compile`
