---
layout: base
title:  'UD tools'
---

# Universal Dependencies tools

This page collects links to and minimal instructions for tools related to Universal Dependencies.

If you would like to have your tool added to this page, please write the
[UD mailing list](http://stp.lingfil.uu.se/mailman/listinfo/ud).

**Listing**

* [Tools maintained by the UD project](#ud-maintained-tools)
  * Annotation statistics
  * Consistency checking
  * Data validation
  * Format conversion
* [Third-party tools](#third-party-tools)
  * [brat rapid annotation tool](#brat-rapid-annotation-tool)
  * Tool 2
  * Tool 3

## UD-maintained tools

The Universal Dependencies project maintains a number of core tools for working with UD data.
These tools are available from <https://github.com/universaldependencies/tools> and briefly
described below.

### Annotation statistics

(Description TODO)

### Consistency checking

(Description TODO)

### Data validation

(Description TODO)

### Format conversion

(Description TODO)

## Third-party tools

### brat rapid annotation tool

<img style="width: 40%; float:right" src="http://universaldependencies.org/img/brat.png"/>
**brat** is a browser-based tool for text annotation. The brat visualization component is used in the [UD documentation system](https://spyysalo.github.io/annodoc/) and the tool can be easily configured for UD annotation (TODO: link instructions).

* Category: manual annotation tool
* Platform: any (browser-based)
* Implementation: Python (server), JavaScript (client)
* License: MIT (open source)
* Homepage: <http://brat.nlplab.org/>
* References: [Stenetorp et al. (2012)](http://anthology.aclweb.org/E/E12/E12-2021.pdf)

### Treex

**Treex** is a modular natural language processing framework. It reads and writes data in many formats (including CoNLL-U) and provides API for dependency tree manipulation. Many treebanks have been harmonized in [HamleDT](http://ufal.mff.cuni.cz/hamledt) and then converted to UD using Treex.

* Category: treebank processing framework
* Platform: tested mainly on Linux
* Implementation: Perl
* License: Perl
* Homepage: <http://ufal.mff.cuni.cz/treex>
* References: [Popel and Žabokrtský (2010)](http://ufal.mff.cuni.cz/~popel/papers/2010_icetal.pdf)

### Tool 3

(Description TODO)
