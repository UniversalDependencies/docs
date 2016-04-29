---
layout: base
title:  'Introduction'
permalink: ar/overview/introduction.html
---

# Introduction

The Arabic UD treebank is based on the
[Prague Arabic Dependency Treebank](http://ufal.mff.cuni.cz/padt/) (PADT),
created at the Charles University in Prague.
The treebank consists of 7,664 sentences (282,384 tokens) and its domain is mainly newswire.
The annotation is licensed under the terms of
[CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
and its original (non-UD) version can be downloaded from
[http://hdl.handle.net/11858/00-097C-0000-0001-4872-3](http://hdl.handle.net/11858/00-097C-0000-0001-4872-3).

The morphological and syntactic annotation of the Arabic UD treebank is created through
conversion of PADT data. The conversion procedure has been designed by Dan Zeman.
The main coordinator of the original PADT project was Otakar Smrž.

## Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence-level units in PADT often correspond to entire paragraphs and they were obtained automatically. Low-level tokenization (whitespace and punctuation) was done automatically and then hand-corrected. Splitting of fused tokens into syntactic words in Arabic is part of morphological analysis. [ElixirFM](http://elixir-fm.sf.net/) was used to provide context-independent options, then these results were disambiguated manually. |
| FORM | The unvocalized surface form is used. Fully vocalized counterpart can be found in the MISC column as Vform attribute. |
| LEMMA | Plausible analyses provided by ElixirFM, manual disambiguation. Lemmas are vocalized. Part of the selection of lemmas was also word sense disambiguation of the lexemes, providing English equivalents (see the Gloss attribute of the MISC column). |
| UPOSTAG | Converted automatically from XPOSTAG (via [Interset](https://ufal.mff.cuni.cz/interset)); human checking of patterns revealed by automatic consistency tests. |
| XPOSTAG | Manual selection from possibilities provided by ElixirFM. |
| FEATS | Converted automatically from XPOSTAG (via Interset); human checking of patterns revealed by automatic consistency tests. |
| HEAD | Original PADT annotation is manual. Automatic conversion to UD; human checking of patterns revealed by automatic consistency tests. |
| DEPREL | Original PDT annotation is manual. Automatic conversion to UD; human checking of patterns revealed by automatic consistency tests. |
| DEPS | &mdash; (currently unused) |
| MISC | Information about token spacing taken from PADT annotation. Additional word attributes provided by morphological analysis (i.e. ElixirFM rules + manual disambiguation): Vform (fully vocalized Arabic form), Translit (Latin transliteration of word form), LTranslit (Latin transliteration of lemma), Root (word root), Gloss (English translation of lemma). |

## Acknowledgments

We wish to thank all of the contributors to the original PADT annotation effort, including
Otakar Smrž, Jan Hajič, Petr Zemánek, Petr Pajas, Jan Šnaidauf, Emanuel Beška, Jakub Kráčmar,
and Kamila Hassanová.

Further corrections of additional data (not part of PADT release 1.0) were done by
Shadi Saleh and Zdeněk Žabokrtský.

## References

* Jan Hajič, Otakar Smrž, Petr Zemánek, Petr Pajas, Jan Šnaidauf, Emanuel Beška, Jakub Kráčmar,
  Kamila Hassanová. 2009.
  Prague Arabic Dependency Treebank 1.0, LINDAT/CLARIN digital library at
  Institute of Formal and Applied Linguistics, Charles University in Prague,
  [http://hdl.handle.net/11858/00-097C-0000-0001-4872-3](http://hdl.handle.net/11858/00-097C-0000-0001-4872-3).
* Otakar Smrž, Viktor Bielický, Iveta Kouřilová, Jakub Kráčmar, Jan Hajič, Petr Zemánek. 2008.
  Prague Arabic Dependency Treebank: A Word on the Million Words.
  In: Proceedings of the Workshop on Arabic and Local Languages (LREC 2008), pp. 16–23.
  Marrakech, Morocco.
