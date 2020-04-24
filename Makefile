install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm link

unlink:
	npm unlink

lint:
	npx eslint .