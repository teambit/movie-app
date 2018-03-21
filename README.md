# Tracking Bit Components - Movie App Example

This repository was exported as [Bit](https://docs.bitsrc.io/docs/what-is-bit.html) components.

This is how we did it:

```bash
$ bit init
successfully initialized an empty bit scope.
```

The [bit init](https://docs.bitsrc.io/docs/cli-init.html) command has intialized a [local Bit scope](https://docs.bitsrc.io/docs/what-is-bit.html#what-is-a-scope-collection) and created a [bit.json](https://docs.bitsrc.io/docs/conf-bit-json.html) file.

Next, we wanted to [track](https://docs.bitsrc.io/docs/isolating-and-tracking-components.html) the all the components as Bit components, and let Bit know which files are the test files.

```bash
$ bit add src/components/* -t 'src/components/{PARENT}/*.spec.js'
tracking 8 new components
```

After tracking, [checking the status](https://docs.bitsrc.io/docs/cli-status.html) will prompt the following result:

```bash
$ bit status
new components
     > components/hero... missing dependencies
       untracked file dependencies: src/global.css

     > components/hero-button... missing dependencies
       untracked file dependencies: src/global.css

     > components/item... missing dependencies
       untracked file dependencies: src/global.css

     > components/list-toggle... missing dependencies
       untracked file dependencies: src/global.css

     > components/logo... missing dependencies
       untracked file dependencies: src/global.css

     > components/navigation... missing dependencies
       untracked file dependencies: src/global.css

     > components/title-list... missing dependencies
       untracked file dependencies: src/global.css

     > components/user-profile... missing dependencies
       untracked file dependencies: src/global.css



no modified components


no staged components


no auto-tag pending components


no deleted components
```

Bit warns us that the all the components has an [untracked file dependency](https://docs.bitsrc.io/docs/isolating-and-tracking-components.html#tracking-a-component-with-dependencies) - this means that the component requires another file that is not tracked by Bit. We can either track the file as part of the existing component, or decide to track a new component, which is what we would do:

```bash
$ bit add src/global.css --id style/global
tracking component style/global:
added src/global.css
```

If we [check the status](https://docs.bitsrc.io/docs/cli-status.html), we can see all is well:

```bash
$ bit status
new components
     > components/hero... ok
     > components/hero-button... ok
     > components/item... ok
     > components/list-toggle... ok
     > components/logo... ok
     > components/navigation... ok
     > components/title-list... ok
     > components/user-profile... ok
     > style/global... ok


no modified components


no staged components


no auto-tag pending components


no deleted components
```

Next, we'll import a [build environment](https://docs.bitsrc.io/docs/building-components.html#defining-a-default-compiler-for-your-project) and a [test environment](https://docs.bitsrc.io/docs/testing-components.html#defining-a-tester-for-your-project), so the components will be built and tested properly:

```bash
$ bit import bit.envs/bundlers/webpack-css-modules --compiler
the following component environments were installed
- bit.envs/bundlers/webpack-css-modules@0.0.4

$ bit import bit.envs/testers/karma-mocha --tester
the following component environments were installed
- bit.envs/testers/testers/karma-mocha@0.0.8
```

Now let's test the components!

```bash
$ bit test
components/hero
tests passed
file: /Users/tomlandau/Documents/Code/movie-app/dist/src/components/hero/Hero.spec.js
total duration - 99ms

✔   Hero Should render - 1ms
✔   Hero Should contain a logo - 77ms
✔   Hero Should render an overlay - 11ms

components/hero-button
tests passed
file: /Users/tomlandau/Documents/Code/movie-app/dist/src/components/hero-button/HeroButton.spec.js
total duration - 54ms

✔   #HeroButton Should render - 1ms
✔   #HeroButton Should contain text REACT SF - 45ms

tests are not defined for component: components/item
tests are not defined for component: components/list-toggle
tests are not defined for component: components/logo
components/navigation
tests passed
file: /Users/tomlandau/Documents/Code/movie-app/dist/src/components/navigation/Navigation.spec.js
total duration - 82ms

✔   #Navigation Should render - 59ms
✔   #Navigation Should contain list size of 4 - 14ms

tests are not defined for component: components/title-list
components/user-profile
tests passed
file: /Users/tomlandau/Documents/Code/movie-app/dist/src/components/user-profile/UserProfile.spec.js
total duration - 62ms

✔   #UserProfile Should render - 2ms
✔   #UserProfile Should contain default prop name of Jack Oliver - 53ms

tests are not defined for component: style/global
  ┌───────────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
  │                                 Component ID                                  │                  Specs Results                  │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                                components/hero                                │                     passed                      │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                            components/hero-button                             │                     passed                      │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                                components/item                                │              tests are not defined              │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                            components/list-toggle                             │              tests are not defined              │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                                components/logo                                │              tests are not defined              │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                             components/navigation                             │                     passed                      │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                             components/title-list                             │              tests are not defined              │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                            components/user-profile                            │                     passed                      │
  ├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
  │                                 style/global                                  │              tests are not defined              │
  └───────────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

We can see all the tests are passing. Sounds like a good time to [tag](https://docs.bitsrc.io/docs/versioning-tracked-components.html) and [export](https://docs.bitsrc.io/docs/cli-export.html) the components to a [scope on bitsrc.io](https://bitsrc.io/bit/movie-app-example).

```bash
$ bit tag --all 1.0.0
9 components tagged | 9 added, 0 changed, 0 auto-tagged
added components:  components/hero@1.0.0, components/hero-button@1.0.0, components/item@1.0.0, components/list-toggle@1.0.0, components/logo@1.0.0, components/navigation@1.0.0, components/title-list@1.0.0, components/user-profile@1.0.0, style/global@1.0.0

$ bit export bit.movie-app-example
exported 9 components to scope bit.movie-app-example
```

That's it, it's now possible to consume the components from any other project as individual components!
Check out the [scope on bitsrc.io](https://bitsrc.io/bit/movie-app-example).
