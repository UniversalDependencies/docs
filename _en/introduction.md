---
layout: base
title:  'Introduction'
permalink: en/overview/introduction.html
---

# Introduction

There are now 3 English treebanks in UD. The descriptions here are biased towards the original UD\_English treebank, but this should be improved over time.

# English Web Treebank (UD\_English)

This is a gold standard Universal Dependencies corpus for English,
built over the source texts of the Linguistic Data Consortium English Web Treebank
[LDC2012T13](https://catalog.ldc.upenn.edu/LDC2012T13).

Links: [Github repository](https://github.com/UniversalDependencies/UD_English); [Current readme](https://github.com/UniversalDependencies/UD_English/blob/master/README.txt).

The corpus comprises 254,830 words and 16,622 sentences, taken from five genres of web media:
weblogs, newsgroups, emails, reviews, and Yahoo! answers. See 
[the LDC2012T13 documentation](https://catalog.ldc.upenn.edu/docs/LDC2012T13/)
for more details on the sources of the sentences.  The trees were automatically converted into Stanford
Dependencies and then hand-corrected to Universal Dependencies.  All the dependency annotations
have been single-annotated, a limited portion of them have been double-annotated, and subsequent correction has been done to improve consistency. Other aspects of the treebank, such as Universal POS and features, has mainly been done automatically, with very limited hand-correction.

## Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence and token division was automatically done and then hand-corrected by LDC annotators; see Mott et al. (2012). |
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

Annotation of the Universal Dependencies English Web Treebank was carried out by
(in order of size of contribution):
Natalia Silveira,
Timothy Dozat,
Miriam Connor,
Marie-Catherine de Marneffe,
Samuel Bowman,
Hanzhi Zhu,
Daniel Galbraith,
Christopher Manning, and
John Bauer.

Creation of the CoNLL-U files, including calculating UPOS, feature, and lemma information
was primarily done by
Sebastian Schuster and
Natalia Silveira.

The construction of the Universal Dependencies English Web Treebank was partially funded
by a gift from Google, Inc., which we gratefully acknowledge.


# Treebank of Learner English (TLE) (UD\_English-ESL)

Manual POS tag and dependency annotations for 5,124 English as a Second
Language (ESL) sentences. The sentences are drawn from the Cambridge Learner
Corpus First Certificate in English (FCE) dataset. 

Links: [Github repository](https://github.com/UniversalDependencies/UD_English-ESL); [Current readme](https://github.com/UniversalDependencies/UD_English-ESL/blob/master/README.txt).

# LinES Parallel Treebank 1.0 (UD\_English-LinES)

This treebank is the English half of the LinES Parallel Treebank 1.0
with the original dependency annotation first automatically converted
into Universal Dependencies and then partially reviewed. LinES
contains segments from seven different sources, three of which are
part of the Linköping Translation Corpus Corpus (Merkel, 1999). The
treebank was first developed in the project 'Micro- and macro-level
analysis of translations' funded by the Swedish Research Council
(Ahrenberg, 2007).

Links: [Github repository](https://github.com/UniversalDependencies/UD_English-LinES); [Current readme](https://github.com/UniversalDependencies/UD_English-LinES/blob/master/README.txt).



# References

English Web Treebank [LDC2012T13](https://catalog.ldc.upenn.edu/LDC2012T13).

Justin Mott, Ann Bies, John Laury, and Colin Warner. 2012. [Bracketing Webtext: An Addendum to Penn Treebank II Guidelines](https://catalog.ldc.upenn.edu/docs/LDC2012T13/WebtextTBAnnotationGuidelines.pdf). MS, LDC.



