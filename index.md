---
layout: base
title:  'Universal Dependencies'
---

# Universal Dependencies

[Introduction to Universal Dependencies](introduction.html)

* [Tokenization](u/overview/tokenization.html)
* Morphology
  * [General principles](u/overview/morphology.html)
  * [Universal POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Universal features](u/feat/index.html) ([single document](u/feat/all.html))
  * [Language-specific features](ext-feat-index.html)
  * [Conversion from other tagsets](tagset-conversion/index.html)
* Syntax
  * [General principles](u/overview/syntax.html)
  * [Specific constructions](u/overview/specific-syntax.html)
  * [Universal dependency relations](u/dep/index.html) ([single document](u/dep/all.html))
  * [Language-specific relations](ext-dep-index.html)

* [CoNLL-U format](format.html)

<small>
This is the online documentation for Universal
Dependencies, version 1 (2014-10-01).  We intend to treat version 1 as
stable for at least the next year, but we may subsequently make
further revisions based on experiences using it to treebank a range of
languages. If you plan to use the scheme yourself, please get in touch
so that we can avoid problems with conflicting versions.
</small>


# UD Treebanks

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance.html %}
</div>



# Download

The data is released through LINDAT/CLARIN.

* Version 1.2 treebanks <a href="http://hdl.handle.net/11234/1-1548">http://hdl.handle.net/11234/1-1548</a>. Released Nov 15, 2015.
* Version 1.1 treebanks are archived at http://hdl.handle.net/11234/LRT-1478. Released May 15, 2015.
* Version 1.0 treebanks are archived at http://hdl.handle.net/11234/1-1464. Released Jan 15, 2015.
* The next release (v1.3) is scheduled for May 15, 2016. We intend to have regular treebank releases every six months.

# Query online

You can query the UD treebanks on-line using

* [SETS treebank search](http://bionlp-www.utu.fi/dep_search)
  maintained by the University of Turku, or
* [PML Tree Query](http://lindat.mff.cuni.cz/services/pmltq/)
  maintained by the Charles University in Prague.

# Stay up to date

If you want to receive news about Universal Dependencies, you can subscribe to
the [UD mailing list](http://stp.lingfil.uu.se/mailman/listinfo/ud).

See also the [list of open issues](issues.html)
and what was decided about them at the [Uppsala meeting](uppsala.html).

# Contribute

[How to contribute](contributing.html).
Also please read the [instructions](language_metadata.html) for adding a new language and encoding its metadata.
Follow the steps in the [release checklist](release_checklist.html) and
make sure your data shows as validating in the [automatic validation runs](validation.html).
See [svalidation](svalidation.html) for any suspicious patterns in the data;
there are direct links to our treebank search that you can use to browse the suspicious data points.
Check the [list of contributors](contributors.html) is correct—this is gathered from the [metadata](language_metadata.html) in the readme.

There is a separate [page about tools](tools.html) that are available for work with UD data.
