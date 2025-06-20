---
layout: base
title:  'UD infrastructure'
udver:  '2'
---

# UD Infrastructure

* TBA: Building the UD website. (docs repo has webhook leading to the epsilon server in Turku, there is a custom installation of Jekyll which can take care of UD tree visualizations with Brat AnnoDoc. Sometimes it crashes and the only person who can heal it is Filip Ginter. But often it helps to simply revert the commit that brought in something Jekyll cannot digest. Here the [logs](http://epsilon-it.utu.fi/ud-docs-build-log.txt) can be of some help.)
* [On-line validation](online_validation_configuration.html) is currently installed on a virtual machine accessible through quest.ms.mff.cuni.cz (there is a GitHub webhook that pings quest every time somebody pushes to a treebank or to one of the other important repos). The validation server is maintained by Dan Zeman and relies on scripts in the docs-automation repository.
* [How to add language, add or rename treebank](how_to_add_language.html)
* [How to build a new UD release](how_to_build_release.html)


## Troubleshooting

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
