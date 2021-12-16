---
layout: feature
title: 'ExtPos'
shortdef: 'external POS'
udver: '2'
---

This feature indicates, for the head of a [fixed expression](https://universaldependencies.org/en/dep/fixed.html), the
effective UPOS of the full expression when it differs from the UPOS of
the word itself. 

`ExtPos` is used in the [SUD](https://surfacesyntacticud.github.io/)
framework and appears in the MISC column of some UD treebanks. Its
inclusion in FEATS is currently specific to some treebanks, and only
heads of the `fixed` relation, though in the future it may be
broadened.

Uses in the Bosque treebank need to be double-checked, many cases of
non-fixed relations should not use this feature.

### <a name="PROPN">`PROPN`</a>: proper noun

#### Examples

* _<b>Fulano de Tal</b>_


### <a name="AUX">`AUX`</a>: verbal phrase expression

#### Examples

* _<b>vir a ter</b>_


### <a name="NOUN">`NOUN`</a>: noun-noun expression

#### Examples

* _<b>ponto fraco</b>_


### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _<b>sem que</b>_


### <a name="ADV">`ADV`</a>: adverbial expression

#### Examples

* _<b>cerca de</b>_


### <a name="ADP">`ADP`</a>: adposition-like expression

#### Examples

* _<b>apesar de</b>_


### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _<b>no entanto</b>_


### <a name="INTJ">`INTJ`</a>: interjection expression

#### Examples

* _como <b>é que</b>_


### <a name="ADJ">`ADJ`</a>: adjectival expression

#### Examples

* _<b>além</b>-Pirinéus_


### <a name="NUM">`NUM`</a>: numbers

#### Examples

* _<b>meia duzia</b>_
<!-- Interlanguage links updated St lis 3 20:58:21 CET 2021 -->
