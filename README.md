# Tracking Bit Components - Movie App Example

This repository was exported as [Bit](https://docs.bitsrc.io/docs/about-bit.html) components.

This is how we did it:

```bash
$ bit init
successfully initialized a bit workspace.
$ npm install
```

The [bit init](https://docs.bitsrc.io/docs/cli-init.html) command has initialized a [local Bit scope](https://docs.bitsrc.io/docs/what-is-bit.html#what-is-a-scope-collection) and created a [bit.json](https://docs.bitsrc.io/docs/conf-bit-json.html) file.

Next, we want to [track](https://docs.bitsrc.io/docs/isolating-and-tracking-components.html) the project's components as Bit components, and let Bit know which files are the test files.

```bash
$ bit add src/components/* -t 'src/components/{PARENT}/*.spec.js'
tracking 8 new components
```

After tracking, [checking the status](https://docs.bitsrc.io/docs/cli-status.html) will prompt the following result:

```bash
$ bit status
new components
(use "bit tag --all [version]" to lock a version with all your changes)

     > hero ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/hero/Hero.js -> src/global.css

     > hero-button ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/hero-button/HeroButton.js -> src/global.css

     > item ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/item/Item.js -> src/global.css

     > list-toggle ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/list-toggle/ListToggle.js -> src/global.css

     > logo ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/logo/index.js -> src/global.css

     > navigation ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/navigation/Navigation.js -> src/global.css

     > title-list ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/title-list/TitleList.js -> src/global.css

     > user-profile ...  missing dependencies
       untracked file dependencies (use "bit add <file>" to track untracked files as components):
          src/components/user-profile/UserProfile.js -> src/global.css
```

Bit warns us that all the components has an [untracked file dependency](https://docs.bitsrc.io/docs/isolating-and-tracking-components.html#tracking-a-component-with-dependencies) - this means that the component requires another file that is not tracked by Bit. We can either track the file as part of the existing component, or decide to track a new component, which is what we would do:

```bash
$ bit add src/global.css --id style/global
tracking component style/global:
added src/global.css
```

If we [check the status](https://docs.bitsrc.io/docs/cli-status.html), we can see all is well:

```bash
$ bit status
new components
(use "bit tag --all [version]" to lock a version with all your changes)

     > hero ... ok
     > hero-button ... ok
     > item ... ok
     > list-toggle ... ok
     > logo ... ok
     > navigation ... ok
     > title-list ... ok
     > user-profile ... ok
     > style/global ... ok
```

Next, we'll import a [build environment](https://docs.bitsrc.io/docs/building-components.html#defining-a-default-compiler-for-your-project) and a [test environment](https://docs.bitsrc.io/docs/testing-components.html#defining-a-tester-for-your-project), so the components will be built and tested properly:

```bash
$ bit import bit.envs/compilers/react --compiler
the following component environments were installed
- bit.envs/compilers/react@0.0.14

$ bit import bit.envs/testers/mocha --tester
the following component environments were installed
- bit.envs/testers/mocha@0.0.14
```

Now let's test the components!

```bash
$ bit test
```

We can see all the tests  are ‘passed’. Sounds like a good time to [tag](https://docs.bitsrc.io/docs/versioning-tracked-components.html) and [export](https://docs.bitsrc.io/docs/cli-export.html) the components to your [scope on bitsrc.io](https://bitsrc.io).

```bash
$ bit tag --all 1.0.0
...9 components tagged | 9 added, 0 changed, 0 auto-tagged
added components:  style/global@1.0.0, hero-button@1.0.0, hero@1.0.0, list-toggle@1.0.0, item@1.0.0, logo@1.0.0, navigation@1.0.0, title-list@1.0.0, user-profile@1.0.0

$ bit export <UserName>.movie-app-example
exported 9 components to scope bit.movie-app-example
```

That's it, it's now possible to consume the components from any other project as individual components!
Check out your [scope on bitsrc.io](https://bitsrc.io/).
