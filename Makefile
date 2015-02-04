BIN = ./node_modules/.bin

.PHONY: bootstrap start;

start: bootstrap
	@mkdir -p dist
	@$(BIN)/watchify app/index.js -o dist/todomvc.js -v
	@which open > /dev/null && open app/index.html

bootstrap: package.json
	@npm install