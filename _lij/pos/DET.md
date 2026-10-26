---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

### Definition

Determiners typically modify a noun or noun phrase and help identify or quantify its referent. Ligurian determiners include articles, demonstrative, exclamative, interrogative, relative, indefinite, negative and total determiners, as well as attributive possessives.

Attributive possessives are tagged `DET`, as in _mæ moæ_ “my mother”; possessives used pronominally are tagged [PRON](). Both receive `Poss=Yes`.

### Partitive articles

The partitive articles _de_, _da_, _do_, _di_, and _d’_ are analysed as single `DET` words with lemma _do_. They receive `Definite=Ind|PronType=Art` and agree in [Gender]() and [Number]() with the noun. Unlike preposition-article contractions, they are not split into separate syntactic words.

In _ghe saià di aggiutti_ “there will be some help”, _di_ is a partitive article:

~~~ conllu
1	ghe	ghe	PRON	_	_	2	expl	_	Gloss=there
2	saià	ëse	VERB	_	_	0	root	_	Gloss=will-be
3	di	do	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	4	det	_	Gloss=some
4	aggiutti	aggiutto	NOUN	_	_	2	nsubj	_	Gloss=help

~~~

The same surface forms receive different analyses in other contexts:

* the preposition _de_ “of, about” is [ADP](), as in _parlâ de Zena_ “to talk about Genoa”;
* a preposition-article contraction is split into an `ADP` and a definite `DET`, as in _a pòrta do giardin_ “the garden gate”, where _do_ = _de_ + _o_.
