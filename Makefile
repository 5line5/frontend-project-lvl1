install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx lint

publish:
	npm publish --dry-run
