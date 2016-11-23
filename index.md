---
layout: base
title:  'Universal Dependencies'
udver: '2'
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

* [Executive summary of changes from v1 to v2](v2/summary.html)

<small>
This is the online documentation for Universal Dependencies, version 2 (2016-12-01).
Pages marked "not v2 compliant" are still undergoing revision. 
(The guidelines for v1 can be found ??somewhere??.)
</small>


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

# Stay up to date

If you want to receive news about Universal Dependencies, you can subscribe to
the [UD mailing list](http://stp.lingfil.uu.se/mailman/listinfo/ud).

New: A draft of [UD v2](v2/index.html) is now available.
<!--See also the [list of open issues](issues.html)
and what was decided about them at the [Uppsala meeting](2015-08-23-uppsala/index.html).
New: preparing [v2](v2/index.html).-->
<!--; report from the [Prague meeting](2016-09-05--06-prague/index.html).-->

# Contribute to UD

If you want to add a new language/treebank, please read the [instructions](language_metadata.html) for adding a new language and encoding its metadata.

If you want to make a release of an existing treebank, please follow the steps in the [release checklist](release_checklist.html) and
make sure your data shows as validating in the [format validation runs](validation.html).
Check the [content validation](svalidation.html) for any suspicious patterns in the data;
there are direct links to our treebank search that you can use to browse the suspicious data points.
Check that the [list of contributors](contributors.html) is correct; this is gathered from the [metadata](language_metadata.html) in the READMEs. General instructions for contributing to the online documentation can be found [here](contributing.html).

# Tools and additional documentation

There is a separate [page about tools](tools.html) that are available for work with UD data.

Direct links to the experimental language family documentation:

* [Slavic language family documentation](slavic.html)
* [Uralic language family documentation](uralic.html)
