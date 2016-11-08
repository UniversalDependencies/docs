---
layout: base
title:  'Introduction'
permalink: sv/overview/introduction.html
---

# Introduction

UD currently contains two treebanks for Swedish:

* UD Swedish is a conversion of the Professional Prose originally annotated by a team led by Ulf Teleman at Lund University.
* UD Swedish-LinES is the Swedish part of the English-Swedish LinES parallel treebank.

Below we give a brief description of each treebank. More information can be found in the respective README files.

## UD Swedish

UD Swedish is based on the Professional Prose section of Talbanken (Einarsson, 1976), originally annotated by a team led by Ulf Teleman at Lund University according to the MAMBA annotation scheme (Teleman, 1974). It consists of roughly 6,000 sentences and 97,000 tokens taken from a variety of genres, including text books, information brochures, and newspaper articles. The syntactic annotation is converted directly from the original MAMBA annotation, while the morphological annotation is based on the reannotation performed when incorporating Talbanken into the Swedish Treebank (Nivre and Megyesi, 2007). This reannotation, which also involved minor tokenization changes, followed the guidelines of the Stockholm-Umeå Corpus (SUC) 2.0.

### Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence segmentation from Talbanken; tokenization modified to SUC standard for Swedish Treebank. |
| FORM | Identical to Talbanken except for minor tokenization changes mentioned above. |
| LEMMA | Produced automatically by the Swedish Language Bank using SALDO; fairly careful human checking. |
| UPOSTAG | Converted automatically from XPOSTAG + original Talbanken tags; fairly careful human checking. |
| XPOSTAG | Produced automatically by a tagger trained on SUC; complete manual validation for Swedish Treebank. |
| FEATS | Converted automatically from XPOSTAG + original Talbanken tags; fairly careful human checking. |
| HEAD | Automatic conversion of Talbanken; fairly careful human checking. |
| DEPREL | Automatic conversion of Talbanken; fairly careful human checking. |
| DEPS | &mdash; (currently unused) |
| MISC | &mdash; (currently unused) |


### Acknowledgments 

The new conversion has been performed by Joakim Nivre and Aaron Smith at Uppsala University. We thank everyone who has been involved in previous conversion efforts at Växjö University and Uppsala University, including Bengt Dahlqvist, Sofia Gustafson-Capkova, Johan Hall, Anna Sågvall Hein, Beáta Megyesi, Jens Nilsson, and Filip Salomonsson. Special thanks also to Lars Borin and Markus Forsberg at the Swedish Language Bank for help with the lemmatization.

### References

* Einarsson, Jan. 1976. Talbankens skriftspråkskonkordans. Lund University: Department of Scandinavian Languages.
* Joakim Nivre and Beáta Megyesi. 2007. 
  [Bootstrapping a Swedish treeebank using cross-corpus harmonization and annotation projection](http://tlt07.uib.no/papers/11.pdf). 
  In _Proceedings of the 6th International Workshop on Treebanks and Linguistic Theories_, pages 97-102.
* Teleman, Ulf. 1974. Manual för grammatisk beskrivning av talad och skriven svenska. Studentlitteratur.

## UD Swedish-LinES

(This section is currently being updated.)
UD Swedish-LinES is the Swedish half of the LinES parallel treebank (Ahrenberg 2007; Ahrenberg 2015)


### Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence segmentation agrees with UD English_LinES. Tokenization is made to follow UD-standards. |
| FORM | Identical to Talbanken except for minor tokenization changes mentioned above. |
| LEMMA | tba |
| UPOSTAG | Converted automatically from original LinES tags; fairly careful human checking. |
| XPOSTAG | The original LinES tags; manually checked|
| FEATS | &mdash; (currently unused) |
| HEAD | Automatic conversion from original LinES; fairly careful human checking. |
| DEPREL | Automatic conversion of original LinES; fairly careful human checking. |
| DEPS | &mdash; (currently unused) |
| MISC | &mdash; (currently unused) |


### Acknowledgments

### References
