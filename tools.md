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
  * [Treex](#treex)
  * [Tred](#tred)
  * [UDPipe](#udpipe)
  * [DgAnnotator](#DgAnnotator)

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

### Tred

<img style="float:right" src="http://universaldependencies.org/img/tred.png"/>
**Tred** (Tree Editor) is a graph visualization and manipulation program written in Perl. It was the main tool used to annotate the Prague treebanks. It supports macros (in Perl) to automate frequently repeated operations. There are extensions for various annotation layers such as MWEs or coreference. It cannot read directly the CoNLL-U format. However, it is quite powerful in combination with [Treex](#treex), which can also convert the files from and to CoNLL-U.

* Category: manual annotation tool
* Platform: Windows, Linux, OS X
* Implementation: Perl
* License: GPL (open source)
* Homepage: <http://ufal.mff.cuni.cz/tred/>
* References: Petr Pajas, Peter Fabian

### UDPipe

**UDPipe** is an upcoming trainable pipeline for tokenization, tagging, lemmatization and parsing of CoNLL-U files. UDPipe is language-agnostic and can be trained given only annotated data in CoNLL-U format. (Nevertheless, to train the tokenizer, either the `SpaceAfter` feature must be present, or at least some plain text must be available; also morphological analyzer and lemmatizer can be improved if morphological dictionary is provided.) Trained models will be provided for all UD treebanks (maybe except for Japanese where there are licencing issues). UDPipe will be available as a binary, as a library for C++, Python, Perl, Java, C#, and as a web service.

* Category: trainable tokenizer, tagger, lemmatizer and parser
* Platform: Linux, Windows, OS X
* Implementation: C++; language bindings for Python, Perl, Java and C#
* License: MPL 2.0 (open source)
* Homepage: <http://ufal.mff.cuni.cz/udpipe>
* References: Milan Straka, Jan Hajič and Jana Straková 2016. UDPipe: Trainable Pipeline for Processing CoNLL-U Files Performing Tokenization, Morphological Analysis, POS Tagging and Parsing. To appear at LREC 2016.

### DgAnnotator

<img style="float:right" src="http://universaldependencies.org/img/dga.png"/>
**DgAnnotator** (Dependency Graph Annotator) is a visual tool for annotating text with syntactic information, in particular creating a dependency tree. The tool reads and produces annotated documents in both XML, CoNLL-X and CoNLL-U tab separated format. Additional features: shows the differences, highlighted in red, between two different dependency trees on the same corpus; generates PNG snapshots of trees; performs PoS tagging and parsing connecting to a network service; panning and zooming.

* Category: manual annotation tool
* Platform: Windows, Linux, OS X
* Implementation: Java
* License: GPL (open source)
* Homepage: <http://medialab.di.unipi.it/Project/QA/Parser/DgAnnotator/>
* References: Giuseppe Attardi
