---
layout: base
title:  'UD infrastructure'
udver:  '2'
---

# UD Infrastructure

* Building the UD website occurs on a virtual machine hosted by Filip Ginter in Turku (ud-docs.turkunlp.org)<!--195.148.30.244, physically hosted on csc.fi-->.
  After each push to the `docs` repository, a GitHub [webhook](https://github.com/UniversalDependencies/docs/settings/hooks)
  informs the ud-docs server that a new build is needed. The server has a custom installation of Jekyll which can take
  care of UD tree visualizations with Brat AnnoDoc. Rebuilding the website results in a push to a
  [separate repository](https://github.com/UniversalDependencies/universaldependencies.github.io), after which GitHub
  runs its own processing, and only then the changes are visible at the [UD website](https://universaldependencies.org/).
  The whole process normally takes only a few minutes. If the website is still unchanged after half an hour, there
  is likely a problem.
  * [http://ud-docs.turkunlp.org/health](http://ud-docs.turkunlp.org/health) shows the list of most recent builds and their logs.
  * It often helps to simply revert the commit that brought in something Jekyll cannot digest.
  * More complex issues may be resolved by admins of the ud-docs server (currently Filip and Dan).
  * The most serious cases (such as hardware failure) can be only solved by Filip.
  * Nevertheless, the system is now [documented](https://github.com/UniversalDependencies/docs-rebuild-bot/tree/master/docs-rebuild-hook)
    and it should be possible to set up a new incarnation anywhere by anyone.
* [On-line validation](online_validation_configuration.html) is currently installed on a virtual machine accessible
  through quest.ms.mff.cuni.cz (there is a GitHub webhook that pings quest every time somebody pushes to a treebank
  or to one of the other important repos). The validation server is maintained by Dan Zeman and relies on scripts in
  the docs-automation repository.
* [How to add language, add or rename treebank](how_to_add_language.html)
* [How to build a new UD release](how_to_build_release.html)


## Troubleshooting

### Automatic Links to Pages in Collections

The standard way of adding hypertext links in MarkDown is square brackets with text to be displayed, immediately
followed by round parentheses with the URL. This gets translated to the `a href` element in HTML. An extra feature
of the UD website is that pages in collections describing UPOS categories, morphological features and dependency
relations can be referenced without providing the URL, as described [here](https://universaldependencies.org/contributing/editing.html#links-to-documentation).
This should work both for hyperlinks in MarkDown and the `a` elements given without URL directly in HTML.
The problem is that sometimes this mechanism fails to pick up newly created pages in language-specific documentation
(for example, [Issue 1327](https://github.com/UniversalDependencies/docs/issues/1327)).

The link resolution happens client-side in
[`lib/annodoc/annodoc.js`](https://github.com/UniversalDependencies/universaldependencies.github.io/blob/master/lib/annodoc/annodoc.js#L1268)
using a listing in `lib/local/collections.js`. In the pages source `collections.js` contains no real listing; just
instructions for Jekyll how to build the listing from `site.collections` (which contains a collection of pages for each
UD language in `_config.yml`, and some extra collections for universal documentation). When Jekyll builds the site from
scratch, it will prepare the [target
`collections.js`](https://github.com/UniversalDependencies/universaldependencies.github.io/blob/master/lib/local/collections.js),
which contains the real listing. But Jekyll does not always rebuild everything from scratch. It often works
incrementally, focusing on pages that have been modified. When the building system detects a new file in pages source,
it should rebuild the whole site, including `collections.js`. At least in theory. Sometimes it does not. The cheapest
way to fix it is to touch the source `collections.js` by adding a deleting a character in a comment.

Another relevant point is that the listing pairs the URL with the `title` of each collection page (in the front matter
/ header of the MarkDown file). If the page does not have a correct title, auto-linking will not work. So, for example,
`Gender-spkr.md` has to carry `title: 'Gender[spkr]'`.

### When Running Locally

_(Very old notes about building the UD website.)_

Issue: when running locally, the system gives the error message
*cannot load such file -- `jekyll-redirect-from`*.

* Solution: install the ruby gem
  [`jekyll-redirect-from`](https://github.com/jekyll/jekyll-redirect-from),
  for example with `gem install jekyll-redirect-from`.

Issue: when running locally, the system gives the error message
*CodeRay::Scanners could not load plugin*.

* Solution: check that CodeRay is not running. The `_config.yml`
  option `kramdown: enable_coderay: false` should disable coderay.

If you have any trouble with the system, just ask Sampo
(sampo.pyysalo@gmail.com) or Filip (ginter@cs.utu.fi) or open an issue
at <http://github.com/universaldependencies/docs/issues>.
