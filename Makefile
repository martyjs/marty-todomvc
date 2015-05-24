BIN = ./node_modules/.bin

.PHONY: bootstrap start;

start: bootstrap
	@mkdir -p dist
	@which open > /dev/null && open app/index.html
	@$(BIN)/watchify app/main.js -o dist/todomvc.js -v

bootstrap: package.json
	@npm install