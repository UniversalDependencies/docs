---
layout: base
title:  'UD infrastructure'
udver:  '2'
---

# UD Infrastructure

* Building the UD website occurs on a virtual machine hosted by Filip Ginter in Turku (ud-docs.turkunlp.org). After
  each push to the `docs` repository, a GitHub [webhook](https://github.com/organizations/UniversalDependencies/settings/hooks)
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
