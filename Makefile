install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --access public

link:
	npm link

unlink:
	npm unlink

lint:
	npx eslint .