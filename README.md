# [Harrow.io Style Guide](http://github.com/leehambley/style-guide/)
This is inspired by [Bootstrap](http://getbootstrap.com/) and is meant to be a
starting point and collection of base styles to be used by all Harrow web
projects.

## Build Process

### Reusable Assets

The `./dist/` directory is maintained by Grunt, which can be installed thusly:

    $ npm install
    $ grunt

Changes to assets and resources will be displayed in the controlling terminal,
and will be always kept copied to `dist/`.

### Jekyll Style Guide

The styleguide is build with Jekyll, you shouldn't start the Jekyll server
manually, but rather via Guard, where LiveReload is also included

## Documentation

Documentation is a [Jekyll](http://jekyllrb.com) site that is publicly hosted
at <http://prismskylabs.github.io/style-guide>. The styleguide may also be run
locally by starting Grunt and Guard side by side.

## Quick Start

Open your favorite terminak multiplexor, and start two shells:

 $ npm install      $ cd docs/
 $ grunt            $ bundle install
                    $ bundle exec guard

See below for the relationship between the components.

## Grunt

1. Grunt runs from the root directory, install it with `npm install`, and then
   simply run `grunt [default]`.
2. Grunt builds and maintains the `./dist/` directory.
3. Grunt also watches the `./dist/sass/` directory, and uses that to touch
   `./docs/styles`, this is in Grunt task `touch:docsStyles`, available on the
   CLI, and triggered based on a watch defined in Gruntfile.js.

## Guard

Guard is used to run Jekyll via guard-jekyll-plus, whilst also running
LiveReload. If you don't want to use LiveReload, simply:

    $ cd docs/
    $ bundle install
    $ jekyll serve

To use LiveReload, you must use `bundle exec guard` in the `./docs` directory,
this starts both Jekyll and LiveReload servers.
