---
layout: base
title:  'UD infrastructure'
udver:  '2'
---

# UD Infrastructure

* TBA: Building the UD website. (docs repo has webhook leading to the epsilon server in Turku, there is a custom installation of Jekyll which can take care of UD tree visualizations with Brat AnnoDoc. Sometimes it crashes and the only person who can heal it is Filip Ginter. But often it helps to simply revert the commit that brought in something Jekyll cannot digest. Here the [logs](http://epsilon-it.utu.fi/ud-docs-build-log.txt) can be of some help.)
* TBA: On-line validation is currently installed on a virtual machine accessible through quest.ms.mff.cuni.cz (there is a GitHub webhook that pings quest every time somebody pushes to a treebank or to one of the other important repos). The validation server is maintained by Dan Zeman and relies on scripts in the docs-automation repository.
* [How to add language, add or rename treebank](how_to_add_language.html)
* [How to build a new UD release](how_to_build_release.html)
