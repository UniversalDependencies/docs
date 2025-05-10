---
layout: base
title:  'UD Guidelines (Universal Dependencies)'
shortdef: 'guidelines'
udver: '2'
---

# UD Guidelines

This is the online documentation of UD guidelines v2 (launched 2016-12-01 with subsequent revisions).

* Basic principles
  * [Tokenization and word segmentation](u/overview/tokenization.html)
  * [Morphology](u/overview/morphology.html)
  * [Syntax](u/overview/syntax.html)
  * [Enhanced dependencies](u/overview/enhanced-syntax.html)
  * [CoNLL-U format](format.html) and its [extensions](ext-format.html)
  * [Typos and other errors in underlying text](u/overview/typos.html)
* Annotation guidelines
  * [Nominals](u/overview/nominal-syntax.html)
  * [Simple clauses](u/overview/simple-syntax.html)
  * [Complex clauses](u/overview/complex-syntax.html)
  * [Comparative constructions](u/overview/comparatives.html)
  * [Other constructions](u/overview/specific-syntax.html)
* Documentation of tags, features and relations
  * [POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Features](u/feat/index.html) ([single document](u/feat/all.html))
    * [Layered features](u/overview/feat-layers.html)
    * [Features in data](survey-feats.html) (list of **all** features and values used in treebanks, including those that are **not defined** by the universal guidelines)
  * [Syntactic relations](u/dep/index.html) ([single document](u/dep/all.html))
    * [Relations in data](survey-deprel.html) (list of **all** basic relation subtypes that are used in treebanks)
  * [Conversion from other tagsets to UD tags and features](tagset-conversion/index.html)
  * [MISC attributes](misc.html)
    * [MISC attributes in data](survey-misc.html) (list of MISC attributes that are used in treebanks; for attributes that have many different values, such as `Translit`, the list of values is truncated)
* [Foreign expressions and code-switching](foreign.html)
* [Guidelines change history](changes.html)
* Incubator for [Construction-Oriented Documentation](/workgroups/newdoc/index.html) (it will be moved here when it is mature enough)

# Language-specific Guidelines

<!-- Re-generate: docs-automation\list_lang_spec_docs.pl > docs\_includes\lang_spec_docs.html -->
{% include lang_spec_docs.html %}
