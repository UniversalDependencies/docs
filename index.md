---
layout: base
title:  'Universal Dependencies'
udver: '2'
---

# Universal Dependencies

Universal Dependencies (UD) is a framework for cross-linguistically consistent grammatical annotation
and an open community effort with over 200 contributors producing almost 100 treebanks in over 50 languages.

* [Short introduction to Universal Dependencies](introduction.html)
* More information on UD:
  * [How to contribute to UD](contribute.html)
  * [Tools for working with UD](tools.html)
  * [Discussion on UD](discussion.html)
  * [UD-related events](events.html)
* Query UD treebanks online:
  * [SETS treebank search](http://bionlp-www.utu.fi/dep_search) maintained by the University of Turku
  * [PML Tree Query](http://lindat.mff.cuni.cz/services/pmltq/) maintained by the Charles University in Prague

If you want to receive news about Universal Dependencies, you can subscribe to the
[UD mailing list](http://stp.lingfil.uu.se/mailman/listinfo/ud).

## UD Guidelines

* Basic principles
  * [Tokenization and word segmentation](u/overview/tokenization.html)
  * [Morphology](u/overview/morphology.html)
  * [Syntax](u/overview/syntax.html)
  * [Enhanced dependencies](u/overview/enhanced-syntax.html)
  * [CoNLL-U format](format.html)
* Annotation guidelines
  * [Nominals](u/overview/nominal-syntax.html)
  * [Simple clauses](u/overview/simple-syntax.html)
  * [Complex clauses](u/overview/complex-syntax.html)
  * [Other constructions](u/overview/specific-syntax.html)
* Documentation of tags, features and relations
  * [POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Features](u/feat/index.html) ([single document](u/feat/all.html))
    * [Language-specific features](ext-feat-index.html)
  * [Syntactic relations](u/dep/index.html) ([single document](u/dep/all.html))
    * [Relation subtypes](ext-dep-index.html)
  * [Conversion from other tagsets to UD tags and features](tagset-conversion/index.html)

<small>
This is the online documentation of UD v2 (2016-12-01). For earlier versions,
see [archived v1 guidelines](docsv1/index.html)
and [changes from v1 to v2](v2/summary.html).
</small>

## Current UD Languages

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance.html %}
</div>

### Upcoming UD Languages

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance_empty.html %}
</div>

<small>Disclaimer: Our use of flags to symbolise languages is only intended as a visual enhancement of the website and should not be interpreted as a political statement in any way.</small>

<a name="download"></a>

# Download

The data is released through LINDAT/CLARIN.

* Version 2.0 treebanks are available at <a href="http://hdl.handle.net/11234/1-1983">http://hdl.handle.net/11234/1-1983</a>. 70 treebanks, 50 languages, released March 1, 2017.
  * Test data 2.0 are available at <a href="http://hdl.handle.net/11234/1-2184">http://hdl.handle.net/11234/1-2184</a>, released May 18, 2017.
* Version 1.4 treebanks are archived at http://hdl.handle.net/11234/1-1827. 64 treebanks, 47 languages, released November 15, 2016.
* Version 1.3 treebanks are archived at http://hdl.handle.net/11234/1-1699. 54 treebanks, 40 languages, released May 15, 2016.
* Version 1.2 treebanks are archived at http://hdl.handle.net/11234/1-1548. 37 treebanks, 33 languages, released Nov 15, 2015.
* Version 1.1 treebanks are archived at http://hdl.handle.net/11234/LRT-1478. 19 treebanks, 18 languages, released May 15, 2015.
* Version 1.0 treebanks are archived at http://hdl.handle.net/11234/1-1464. 10 treebanks, 10 languages, released Jan 15, 2015.
* In general, we intend to have regular treebank releases every six months. The v2.0 release was brought forward because of its usage in the [CoNLL 2017 Multilingual Parsing Shared Task](http://universaldependencies.org/conll17/).
* The next release (v2.1) is scheduled for Nov 15, 2017.

