---
layout: base
title:  'Introduction'
permalink: gl/overview/introduction.html
---

# Introduction

There are two UD treebanks for Galician language: *Galician UD* and *Galician-TreeGal*.

## Galician UD

The Galician UD treebank is based on the automatic parsing of the Galician Technical Corpus (http://sli.uvigo.gal/CTG) created at the University of Vigo by the the TALG NLP research group. Original corpus sentences were selected and shuffled at random, and divided in 60-20-20 splits for the train, dev and test files, respectively.

The bootstrap version of the CTG UD annotated corpus v. 0.1 is obtained by using FreeLing 4.0 parser with the Treeler library, and by adapting the POS and dependency relations tags to CoNLL-U Format. Next versions of the corpus will imply a thorough review of the results of this initial version.

The Galician UD treebank  v. 0.1 consists of 4003 sentences (138852 tokens) and covers mainly technical texts of the fields of medicine, sociology, ecology, economy and law.

## Galician-TreeGal

The Galician-TreeGal is a treebank for Galician language developed at LyS Group (Universidade da Coruña). The resource derives from a subset (called *xeral*, with generic news) of the XIADA corpus (v2.6), created at the Centro Ramón Piñeiro para a Investigación en Humanidades (http://corpus.cirp.es/xiada/).

All the information except the syntactic one was semi-automatically converted to UD from the original resource. The dependency labels were assigned using cross-lingual parsing techniques, and then manually corrected by a linguist (see the references for more information).

Galician-TreeGal v0.3 contains 1000 sentences of the *xeral* corpus (24219 tokens), and it is divided 80-10-10 splits (train-dev-test). 

### References

More information about the Galician-TreeGal can be found at:

* Garcia, Marcos, 2016. *Universal Dependencies Guidelines for the Galician-TreeGal Treebank*. Technical Report, LyS Group, University of A Coruna.
