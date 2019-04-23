install:
	npm install

docs:
	mkdir -p docs
	npx documentation build src/index.js -f md > docs/README.md

build:
	npm run build

test:
	npm run test

lint:
	npx eslint .

.PHONY: test docs
