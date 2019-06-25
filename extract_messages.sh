#!/bin/bash
./node_modules/.bin/extract-messages -l=en,de,es,ja,pt -o ./src/translations -d en --flat true 'src/**/!(*.test|FormattedMessage).js'
