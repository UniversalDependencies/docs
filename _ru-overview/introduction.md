---
layout: base
title:  'Introduction'
permalink: ru/overview/introduction.html
---


# Introduction

The Russian UD treebank is based on the [RUS_Treebank](http://corpus-i.compling.net/res01/rtb.php) (RTB)
The treebank consists of 1357119 sentences

The morphological and syntactic annotation of the Russian UD treebank is created through a conversion of RTB data.
The conversion procedure has been designed by the Higher School of Economics team, governed by Olga Lyashevskaya.

## Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence segmentation and (surface) tokenization was automatically done and then hand-corrected; see [PDT documentation](http://ufal.mff.cuni.cz/pdt2.0/doc/pdt-guide/en/html/ch02.html). Splitting of fused tokens into syntactic words was done automatically during PDT-to-UD conversion. |
| FORM | Identical to Prague Dependency Treebank 3.0 form. |
| LEMMA | Manual selection from possibilities provided by morphological analysis: two annotators and then an arbiter. PDT-to-UD conversion stripped from lemmas the ID numbers distinguishing homonyms, semantic tags and comments; this information is preserved as attributes in the MISC column. |
| UPOSTAG | Converted automatically from XPOSTAG (via [Interset](https://ufal.mff.cuni.cz/interset)), from the semantic tags in PDT lemma, and occasionally from other information available in the treebank; human checking of patterns revealed by automatic consistency tests. |
| XPOSTAG | Manual selection from possibilities provided by morphological analysis: two annotators and then an arbiter. |
| FEATS | Converted automatically from XPOSTAG (via Interset), from the semantic tags in PDT lemma, and occasionally from other information available in the treebank; human checking of patterns revealed by automatic consistency tests. |
| HEAD | Original PDT annotation is manual, done by two independent annotators and then an arbiter. Automatic conversion to UD; human checking of patterns revealed by automatic consistency tests. |
| DEPREL | Original PDT annotation is manual, done by two independent annotators and then an arbiter. Automatic conversion to UD; human checking of patterns revealed by automatic consistency tests. |
| DEPS | &mdash; (currently unused) |
| MISC | Information about token spacing taken from PDT annotation. Lemma / word sense IDs, semantic tags and comments on meaning moved here from the PDT lemma. |

## Acknowledgments

We wish to thank all of the contributors to the original RTB annotation effort, including
Daniel Zeman, Olga Lyashevskaya, Kira Droganova, Svatlana Toldova, Andrey Kutuzov, Maria Alexeeva, Tatiana Gavrilova, Nina Mustafina, and Elena Shakurova.

  

