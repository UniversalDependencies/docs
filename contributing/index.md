---
layout: base
title:  'Contributing to UD'
udver: '2'
redirect_from: "/contribute.html"
---

# How to contribute to UD

### Current Data

* **Obtaining data:** The latest official version of UD treebanks can be [downloaded](download.html) from LINDAT/CLARIN.
  If you prefer to access treebanks via GitHub repositories, make sure you work with the **master** branch, which corresponds to the latest official release.

### Documentation and Discussion

* **Feedback and discussion:** The [issue tracker](https://github.com/universaldependencies/docs/issues) provides a forum for discussion of UD guidelines or treebanks.
  Any issues related to documentation and guidelines, even specific to one language, belong to the issue tracker of the docs repository.
  Issue trackers of individual treebank repositories should be used only to report bugs in those treebanks.
  You can also send an e-mail to the [UD mailing list](https://lists.uu.se/sympa/info/lingfil-ud); however, the list is primarily meant for announcements for data maintainers.

* **Editing documentation**
  - [How to edit documentation](/contributing/editing.html)
    - [Embedded visualization of dependencies](/contributing/visualization.html)
    - [Things to avoid](/contributing/editing.html#things-to-avoid)
  - [Language-specific documentation requirements](/contributing/language_specific.html)

* **Annotation guidelines**
  - [Guidelines change history](/changes.html)
  - [Current guidelines](/guidelines.html) (universal + language-specific)

### Contributing Data

* **New contributions:** If you want to start a treebank or contribute to a release, please see:

   - [Advice on how to start a new treebank](/contributing/how_to_start.html)
   - [Adding new language or treebank to UD](/contributing/adding_language_treebank.html)
   - [Treebank repository and files](/contributing/repository_files.html)
   - [Licensing the data](/contributing/licensing.html)
   - [Validation](/contributing/validation.html)
     - [Validation levels](/contributing/validation-rules.html)
   - More metadata. At present, the suggestions under this bullet are just proposals, not finalized guidelines. They may change any time!
     - [Better annotation of genres](/contributing/genres.html)
     - [Parallel treebanks](/contributing/parallel.html)

* **Data corrections:** If you do not want to commit to maintaining a treebank but you want to help fix
  a particular bug in the data, you can submit a pull request against the **dev** branch of its GitHub repository.
  _The master branch should not be modified as it is built automatically by the release pipeline._
  Some UD treebanks are converted from a non-UD original and bugs must be fixed upstream in the original
  data or in the conversion procedure. Pull requests in the UD repository cannot be used but you can report
  the bug by creating an issue in the issue tracker of the treebank repository. To learn about the preferred way
  of fixing the treebank, look for “Contributing: here” or “Contributing: elsewhere” in the treebank's README.

  - [Correcting errors in treebanks](/contributing/correcting.html)

* **Data validation:** Every treebank must comply with general and language-specific validation rules in order to be included in the official release.
  The [on-line validation report](http://quest.ms.mff.cuni.cz/udvalidator/) provides a dashboard with treebank statuses.
  The [tools repository](https://github.com/UniversalDependencies/tools/) can be cloned and for running validation locally (note that data in this repository
  is automatically updated based on the [language-specific lists](/contributing/language_specific.html#language-specific-lists-for-the-validator)).

# Email list

Please consider subscribing to the [UD mailing list](https://lists.uu.se/sympa/info/lingfil-ud),
<strong>especially if you are going to contribute data.</strong>
Important announcements for the data providers are circulated through this list.

# For the Maintenance Crew

Documentation of the infrastructure is [here](/infrastructure/index.html).
