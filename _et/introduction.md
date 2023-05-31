---
layout: base
title:  'Introduction'
permalink: et/overview/introduction.html
---

# Introduction

The Estonian UD treebank is based on the [Estonian Dependency Treebank] (https://github.com/EstSyntax/) (EDT), created at the University of Tartu. The treebank consists of 234 351 tokens (punctuation included) and covers 3 different genres, namely newspaper texts, fiction and scientific texts.
The morphological and syntactic annotation of the Estonian UD treebank is created through automatic conversion of EDT data and as such, can contain errors. 

Also, the previous release of Estonian UD Treebank which based on HamleDT 3.0 has been reannotated and included with the same tree identifiers to the treebank.

In the current version of Estonian UD, there are some constructions which annotations do not conform the UD guidelines, namely:

1. Names are right-headed.
It concerns person names (e.g. Mari Sepp) as only the rightmost token conjugates (e.g. allative Mari Sepale)

2. Apposition dependencies can be right-headed. 
It concerns structures like kohvik Kultas 'cafe Kultas' as here only the rightmost tokens conjugates (e.g. inessive kohvik Kultases)

3. A word can be marked as 'AUX' but not aux or auxpass.
If a word is marked as the auxiliary POS, it should be marked as either aux or auxpass dependency.
However, in current version of Estonian UD word ei 'not' as a part of negative form of a verb has auxiliry POS, but dependency relation label 'neg'.

## Acknowledgments

We wish to thank all of the contributors to the original EDT annotation effort, especially Eleri Aedmaa, Riin Kirt and Dage Särg. Also, we wish to thank the authors of the previous treebank version for their effort.

## References

* Kadri Muischnek, Kaili Müürisep, Tiina Puolakainen, Eleri Aedmaa, Riin Kirt, Dage Särg.
  2014.
  [Estonian Dependency Treebank and its annotation scheme](http://tlt13.sfs.uni-tuebingen.de/tlt13-proceedings.pdf).
  In: *Proceedings of the 13th Workshop on Treebanks and Linguistic Theories (TLT13),*
  pp. 285–291, ISBN 978-3-9809183-9-8, Tübingen, Germany.

* Kadri Muischnek, Kaili Müürisep and Tiina Puolakainen 2016. *Estonian Dependency Treebank: from Constraint Grammar tagset to Universal Dependencies*. - Proceedings of LREC 2016.
