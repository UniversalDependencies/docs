---
layout: base
title:  'Universal Dependencies'
udver: '2'
---

# Universal Dependencies

[Executive summary of changes from v1 to v2](v2/summary.html)

* [Tokenization and word segmentation](u/overview/tokenization.html)
* Morphology
  * [General principles](u/overview/morphology.html)
  * [Universal POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Universal features](u/feat/index.html) ([single document](u/feat/all.html))
  * [Language-specific features](ext-feat-index.html)
  * [Conversion from other tagsets](tagset-conversion/index.html)
* Syntax
  * [General principles](u/overview/syntax.html)
  * [Basic dependencies](u/overview/specific-syntax.html)
  * [Enhanced dependencies](u/overview/enhanced-syntax.html)
  * [Universal dependency relations](u/dep/index.html) ([single document](u/dep/all.html))
  * [Language-specific relations](ext-dep-index.html)

* [CoNLL-U format](format.html)

<small>
This is the online documentation for Universal Dependencies, version 2 (2016-12-01). 
</small>

<strong>Warning:</strong> The universal guidelines have now been upgraded to v2, 
but the treebanks listed below still conform to v1. 
If you need to consult the v1 guidelines, they can be found [here](docsv1/index.html).

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

<small>Disclaimer: Our use of flags to symbolise languages is only intended as a visual enhancement of the website and should not be interpreted as a political statement in any way.</small>

# Download

The data is released through LINDAT/CLARIN.

* Version 1.4 treebanks are available at <a href="http://hdl.handle.net/11234/1-1827">http://hdl.handle.net/11234/1-1827</a>. 64 treebanks, 47 languages, released November 15, 2016.
* Version 1.3 treebanks are archived at http://hdl.handle.net/11234/1-1699. 54 treebanks, 40 languages, released May 15, 2016.
* Version 1.2 treebanks are archived at http://hdl.handle.net/11234/1-1548. 37 treebanks, 33 languages, released Nov 15, 2015.
* Version 1.1 treebanks are archived at http://hdl.handle.net/11234/LRT-1478. 19 treebanks, 18 languages, released May 15, 2015.
* Version 1.0 treebanks are archived at http://hdl.handle.net/11234/1-1464. 10 treebanks, 10 languages, released Jan 15, 2015.
<!--* The next release (v1.4) is scheduled for Nov 15, 2016. -->
* In general, we intend to have regular treebank releases every six months. However, the next release will be brought forward to facilitate uses of Version 2.0 in one of the CoNLL 2017 Shared Tasks. The release will probably be in February 2017.

# Query online

You can query the UD treebanks on-line using

* [SETS treebank search](http://bionlp-www.utu.fi/dep_search)
  maintained by the University of Turku, or
* [PML Tree Query](http://lindat.mff.cuni.cz/services/pmltq/)
  maintained by the Charles University in Prague.

# Language family documentation (experimental)

* [Slavic language family documentation](slavic.html)
* [Uralic language family documentation](uralic.html)
