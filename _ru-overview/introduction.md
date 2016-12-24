---
layout: base
title:  'Introduction'
permalink: ru/overview/introduction.html
---


# Introduction

The Czech UD treebank is based on the [Prague Dependency Treebank 3.0](http://ufal.mff.cuni.cz/pdt3.0) (PDT),
created at the Charles University in Prague.
The treebank consists of 87,913 sentences (1.5 M tokens) and its domain is mainly newswire, reaching also to business and popular scientific articles from the 1990s.
The treebank is licensed under the terms of [CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
and its original (non-UD) version can be downloaded from
[http://hdl.handle.net/11858/00-097C-0000-0023-1AAF-3](http://hdl.handle.net/11858/00-097C-0000-0023-1AAF-3).

The morphological and syntactic annotation of the Czech UD treebank is created through a conversion of PDT data.
The conversion procedure has been designed by Dan Zeman.

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

We wish to thank all of the contributors to the original PDT annotation effort, including
Eduard Bejček, Eva Hajičová, Jan Hajič, Pavlína Jínová, Václava Kettnerová, Veronika Kolářová,
Marie Mikulová, Jiří Mírovský, Anna Nedoluzhko, Jarmila Panevová, Lucie Poláková, Magda Ševčíková,
Jan Štěpánek, and Šárka Zikánová.

## References

* Eduard Bejček, Eva Hajičová, Jan Hajič, Pavlína Jínová, Václava Kettnerová, Veronika Kolářová,
  Marie Mikulová, Jiří Mírovský, Anna Nedoluzhko, Jarmila Panevová, Lucie Poláková, Magda Ševčíková,
  Jan Štěpánek, and Šárka Zikánová. 2013.
  Prague Dependency Treebank 3.0, LINDAT/CLARIN digital library at Institute of Formal and Applied Linguistics, Charles University in Prague, 
  [http://hdl.handle.net/11858/00-097C-0000-0023-1AAF-3](http://hdl.handle.net/11858/00-097C-0000-0023-1AAF-3).
* Eduard Bejček, Jarmila Panevová, Jan Popelka, Pavel Straňák, Magda Ševčíková, Jan Štěpánek, and Zdeněk Žabokrtský. 2012.
  [Prague Dependency Treebank 2.5 – a revisited version of PDT 2.0](http://ufal.mff.cuni.cz/pdt3.0/doc/03_COLING_2012.pdf).
  In: *Proceedings of the 24th International Conference on Computational Linguistics (Coling 2012),* Coling 2012 Organizing Committee, Mumbai, India, pp. 231-246.

