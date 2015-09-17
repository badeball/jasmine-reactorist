JASMINE := ./node_modules/.bin/jasmine
ESLINT := ./node_modules/.bin/eslint

all: lint test

lint:
	@$(ESLINT) .

test:
	@$(JASMINE) JASMINE_CONFIG_PATH=test/jasmine.json

.PHONY: lint test
