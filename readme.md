# alexjgustafson.tech 
Brochure site update June 2025 using Jigsaw, a PHP static site generator.

---

# Development

## Adding Content

You can write your content using a [variety of file types](http://jigsaw.tighten.co/docs/content-other-file-types/). By default, this starter template expects your content to be located in the `source/docs` folder. If you change this, be sure to update the URL references in `navigation.php`.

The first section of each content page contains a YAML header that specifies how it should be rendered. The `title` attribute is used to dynamically generate HTML `title` and OpenGraph tags for each page. The `extends` attribute defines which parent Blade layout this content file will render with (e.g. `_layouts.documentation` will render with `source/_layouts/documentation.blade.php`), and the `section` attribute defines the Blade "section" that expects this content to be placed into it.

```yaml
---
title: Navigation
description: Building a navigation menu for your site
extends: _layouts.documentation
section: content
---
```

[Read more about Jigsaw layouts.](https://jigsaw.tighten.co/docs/content-blade/)

## Adding Assets

Any assets that need to be compiled (such as JavaScript, Less, or Sass files) can be added to the `source/_assets/` directory, and Laravel Mix will process them when running `npm run dev` or `npm run prod`. The processed assets will be stored in `/source/assets/build/` (note there is no underscore on this second `assets` directory).

Then, when Jigsaw builds your site, the entire `/source/assets/` directory containing your built files (and any other directories containing static assets, such as images or fonts, that you choose to store there) will be copied to the destination build folders (`build_local`, on your local machine).

Files that don't require processing (such as images and fonts) can be added directly to `/source/assets/`.

[Read more about compiling assets in Jigsaw using Laravel Mix.](http://jigsaw.tighten.co/docs/compiling-assets/)

## Building Your Site

Now that you’ve edited your configuration variables and know how to customize your styles and content, let’s build the site.

```bash
# build static files with Jigsaw
./vendor/bin/jigsaw build

# compile assets with Laravel Mix
# options: dev, prod
npm run dev
```

---

# Deploy to Github Pages
https://jigsaw.tighten.com/docs/deploying-your-site/

> GitHub Pages is a free service for hosting static sites offered by GitHub. To get started, first read through the documentation to get an understanding of how the service works.
>
> The approach we use at Tighten for deploying Jigsaw sites to GitHub pages looks like this:
>
> Build your site for production
> 
> `npm run prod`
> 
> Commit the build_production folder to your repository
> 
> `git add build_production && git commit -m "Build for deploy"`
> 
> Use git subtree push to push just the build_production folder to your gh-pages branch
> 
> `git subtree push --prefix build_production origin gh-pages`

---

# Initial Jigsaw Setup

[Jigsaw documentation](http://jigsaw.tighten.co/docs/site-variables/) to learn more.

This project was started from the Docs template provided by Jigsaw.

Example: http://jigsaw-docs-template.tighten.co/)

It was pre-configured with:

- Responsive navigation bar
- Sidebar navigation menu
- [Tailwind CSS](https://tailwindcss.com/), a utility CSS framework that allows you to customize your design without touching a line of CSS
- [Purgecss](https://www.purgecss.com/) to remove unused selectors from your CSS, resulting in smaller CSS files
- Syntax highlighting using [highlight.js](https://highlightjs.org/)
- A script that automatically generates a `sitemap.xml` file
- A search bar powered by [Algolia DocSearch](https://community.algolia.com/docsearch/), and instructions on how to get started with their free indexing service
- A custom 404 page
