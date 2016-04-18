---
layout: base
title:  'Introduction'
permalink: en/overview/introduction.html
---

# Introduction

This is a gold standard Universal Dependencies corpus for English,
built over the source texts of the Linguistic Data Consortium English Web Treebank
[LDC2012T13](https://catalog.ldc.upenn.edu/LDC2012T13).

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

## References

English Web Treebank [LDC2012T13](https://catalog.ldc.upenn.edu/LDC2012T13).

Justin Mott, Ann Bies, John Laury, and Colin Warner. 2012. [Bracketing Webtext: An Addendum to Penn Treebank II Guidelines](https://catalog.ldc.upenn.edu/docs/LDC2012T13/WebtextTBAnnotationGuidelines.pdf). MS, LDC.



