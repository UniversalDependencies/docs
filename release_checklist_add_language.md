---
layout: base
title:  'UD new language checklist'
udver:  '2'
---

This checklist describes the steps needed in order to add a new language or treebank to UD.
It is meant for the maintenance task force rather than individual treebank teams.
See [here](release_checklist.html) for the checklist for data contributors.

# How to add a language to UD

* Make sure the language name, ISO code, family and flag is listed in docs-automation in codes_and_flags.yaml.
* Create the language collection in the docs repository. Run addlanguage.sh langcode langname.
  * A [template for the language documentation page](https://github.com/UniversalDependencies/docs/blob/pages-source/_template/template-index.md) will be also created. How to force the contributors
    to fill it with contents? (Note that the page must also be renamed from template-index.md to index.md.)
* Create at least one treebank repository in that language (see the steps below).
* See the README.md file in docs-automation. Perform the steps necessary to regenerate the “accordion tables”
  of treebanks on the front page of Universal Dependencies.

# How to add a treebank to UD

* If this is the first UD treebank of its language, see above for how to add the language.
* Create a new Github repository called UD_${language}-${treebank} where ${language} is the
  English name of the language (if it consists of multiple words, replace spaces by underscores)
  and ${treebank} is an acronym or a short word identifying the treebank (only English letters,
  CamelCase, no digits or special characters). Example: "UD_Ancient_Greek-PROIEL".
* Populate README.md and LICENSE.txt with default values.
* Create two branches, "master" and "dev". Protect the master branch so that only the core group
  can push to it.
* Make the dev branch writable by the Contributors team (by default they cannot push to the repository
  at all).
* Clone the repository to Dan's local system and ask Filip to add it to the validation infrastructure.
