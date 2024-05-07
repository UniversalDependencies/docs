---
layout: base
title:  'Introduction'
permalink: gl/overview/introduction.html
---

# Introduction

There are three UD treebanks for Galician language: *Galician-TreeGal*, *Galician CTG* and *Galician-PUD*.

## Galician CTG

The Galician CTG treebank is based on the automatic parsing of the Galician Technical Corpus (http://sli.uvigo.gal/CTG) created at the University of Vigo by the the TALG NLP research group. Original corpus sentences were selected and shuffled at random, and divided in 60-20-20 splits for the train, dev and test files, respectively.

The bootstrap version of the CTG UD annotated corpus v. 0.1 is obtained by using FreeLing 4.0 parser with the Treeler library, and by adapting the POS and dependency relations tags to CoNLL-U Format. Next versions of the corpus will imply a thorough review of the results of this initial version.

The Galician UD treebank  v. 0.1 consists of 4003 sentences (138852 tokens) and covers mainly technical texts of the fields of medicine, sociology, ecology, economy and law.

## Galician-TreeGal

The Galician-TreeGal is a treebank for Galician language developed at LyS Group (Universidade da Coruña). The resource derives from a subset (called *xeral*, with generic news) of the XIADA corpus (v2.6), created at the Centro Ramón Piñeiro para a Investigación en Humanidades (http://corpus.cirp.es/xiada/).

All the information except the syntactic one was semi-automatically converted to UD from the original resource. The dependency labels were assigned using cross-lingual parsing techniques, and then manually corrected by a linguist (see the references for more information).

Galician-TreeGal v0.3 contains 1000 sentences of the *xeral* corpus (24219 tokens), and it is divided 80-10-10 splits (train-dev-test). 

## Galician-PUD

The Galician-PUD is the Galician version of the Parallel Universal Dependencies treebanks, developed at CiTIUS (Universidade de Santiago de Compostela), following the annotation criteria of Galician-TreeGal.

The sentences were manually translated by professionals. A first annotation was done by means of automatic NLP tools, and then it was reviewed by language experts (see the references for more information).


### References

More information about the Galician-TreeGal can be found at:

* Garcia, Marcos, 2016. *Universal Dependencies Guidelines for the Galician-TreeGal Treebank*. Technical Report, LyS Group, University of A Coruna.
* Garcia, Marcos, Carlos Gómez Rodríguez, and Miguel A. Alonso, 2018. *New treebank or repurposed? On the feasibility of cross-lingual parsing of Romance languages with Universal Dependencies*. Natural Language Engineering 24, 91-122.

More information about the Galician-PUD can be found at:

* Sánchez-Rodríguez, Xulia, Albina Sarymsakova, Laura Castro, and Marcos Garcia. 2024. *Increasing manually annotated resources for Galician: the Parallel Universal Dependencies Treebank*. In Proceedings of the 16th International Conference on Computational Processing of Portuguese, pages 587–592. Association for Computational Lingustics.
