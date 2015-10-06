JASMINE := ./node_modules/.bin/jasmine
ESLINT := ./node_modules/.bin/eslint
ISTANBUL := ./node_modules/.bin/istanbul

all: lint test

ci: lint test-cover

lint:
	@$(ESLINT) .

test:
	@$(JASMINE) JASMINE_CONFIG_PATH=test/jasmine.json

test-cover:
	@$(ISTANBUL) cover --report lcov $(JASMINE) JASMINE_CONFIG_PATH=test/jasmine.json

.PHONY: lint test test-cover
