---
layout: base
title:  'Introduction'
permalink: sv/overview/introduction.html
---

# Introduction

The Swedish UD treebank is based on the Professional Prose section of Talbanken (Einarsson, 1976), originally annotated by a team led by Ulf Teleman at Lund University according to the MAMBA annotation scheme (Teleman, 1974). It consists of roughly 6,000 sentences and 97,000 tokens taken from a variety of genres, including text books, information brochures, and newspaper articles. The syntactic annotation is converted directly from the original MAMBA annotation, while the morphological annotation is based on the reannotation performed when incorporating Talbanken into the Swedish Treebank (Nivre and Megyesi, 2007). 

## Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence segmentation is retained from Talbanken. Tokenization was adapted to the SUC standard in 2008. |
| FORM | Identical to LDC2012T13 English Web Treebank form, except that `-LRB-` and `-RRB` have been restored to `(` and `)`. |
| LEMMA | Produced automatically by Stanford CoreNLP lemmatizer; limited human spot checking. |
| UPOSTAG | Converted automatically from XPOSTAG (`ENUniversalPOS.tsurgeon`); fairly careful human checking. |
| XPOSTAG | Automatic tagging with hand-correction by LDC annotators in LDC2012T13; occasional further corrections by UD annotators. |
| FEATS | Generated automatically by Stanford CoreNLP `UniversalDependenciesFeatureAnnotator`; limited human spot checking. |
| HEAD | Automatic conversion of LDC2012T13 parse followed by complete single annotation; limited dual annotation; considerable adjudication. |
| DEPREL | Automatic conversion of LDC2012T13 parse followed by complete single annotation; limited dual annotation; considerable adjudication. |
| DEPS | &mdash; (currently unused) |
| MISC | Information about token spacing generated automatically from original source files in LDC2012T13. |


## Acknowledgments

The new conversion has been performed by Joakim Nivre and Aaron Smith at Uppsala University. We thank everyone who has been involved in previous conversion efforts at Växjö University and Uppsala University, including Bengt Dahlqvist, Sofia Gustafson-Capkova, Johan Hall, Anna Sågvall Hein, Beáta Megyesi, Jens Nilsson, and Filip Salomonsson. Special thanks also to Lars Borin and Markus Forsberg at Språkbanken for help with the lemmatization.

## References

* Einarsson, Jan. 1976. Talbankens skriftspråkskonkordans. Lund University: Department of Scandinavian Languages.
* Joakim Nivre and Beáta Megyesi. 2007. 
  [Bootstrapping a Swedish treeebank using cross-corpus harmonization and annotation projection](http://tlt07.uib.no/papers/11.pdf). 
  In _Proceedings of the 6th International Workshop on Treebanks and Linguistic Theories_, pages 97-102.
* Teleman, Ulf. 1974. Manual för grammatisk beskrivning av talad och skriven svenska. Studentlitteratur.
