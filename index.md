---
layout: base
title:  'Universal Dependencies'
udver: '2'
---

# Universal Dependencies v2

[Executive summary of changes from v1 to v2](v2/summary.html)

* [Tokenization and word segmentation](u/overview/tokenization.html)
* Morphology
  * [General principles](u/overview/morphology.html)
  * [Universal POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Universal features](u/feat/index.html) ([single document](u/feat/all.html))
  * [Language-specific features](ext-feat-index.html)
  * [Conversion from other tagsets](tagset-conversion/index.html)
* Syntax
  * [General principles](u/overview/syntax.html) (content words, function words, dependency relation taxonomy)
  * Basic dependencies
    * [Simple clauses](u/overview/simple-syntax.html)
    * [Nominals](u/overview/nominal-syntax.html)
    * [Complex clauses](u/overview/complex-syntax.html)
    * [Other constructions](u/overview/specific-syntax.html) (coordination, ellipsis, MWEs, comparatives, parataxis, punctuation)
  * [Enhanced dependencies](u/overview/enhanced-syntax.html)
  * [Universal dependency relations](u/dep/index.html) ([single document](u/dep/all.html))
  * [Language-specific relations](ext-dep-index.html)

* [CoNLL-U format](format.html)

<small>
This is the online documentation for Universal Dependencies, version 2 (2016-12-01).
<strong><font color="red">Note:</font></strong> An archived version of the v1 guidelines
is available [here](docsv1/index.html).
</small>

# UD-related events in 2017

  * [CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies](http://universaldependencies.org/conll17/)
  * [EACL 2017 Tutorial on Universal Dependencies](http://universaldependencies.org/eacl17tutorial/)
  * [NoDaLiDa Workshop on Universal Dependencies (UDW 2017)](http://universaldependencies.org/udw17/)

# Want to know more about UD?

  * [Short introduction to Universal Dependencies](introduction.html)
  * [How to contribute to UD](contribute.html)
  * [Tools for working with UD](tools.html)

If you want to receive news about Universal Dependencies, you can subscribe to
the [UD mailing list](http://stp.lingfil.uu.se/mailman/listinfo/ud).

# UD Treebanks

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance.html %}
</div>

<h2 style="margin-top: 15px">Upcoming UD Treebanks</h2>

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance_empty.html %}
</div>

<small>Disclaimer: Our use of flags to symbolise languages is only intended as a visual enhancement of the website and should not be interpreted as a political statement in any way.</small>

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

# Query online

You can query the UD treebanks on-line using

* [SETS treebank search](http://bionlp-www.utu.fi/dep_search)
  maintained by the University of Turku, or
* [PML Tree Query](http://lindat.mff.cuni.cz/services/pmltq/)
  maintained by the Charles University in Prague.

# Language family documentation (experimental)

* [Slavic language family documentation](slavic.html)
* [Uralic language family documentation](uralic.html)
