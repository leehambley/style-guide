dist:
	grunt build
	cd docs/; jekyll build
	aws s3 cp --recursive --acl public-read docs/_site s3://harrow-alpha-styleguide

clean:
	@-rm -rf docs/_site
	@-rm -rf dist/
