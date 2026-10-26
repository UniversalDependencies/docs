---
layout: relation
title: 'advcl:relcl'
shortdef: 'adverbial relative clause'
udver: '2'
---

The `advcl:relcl` relation is used for relatives modifying a whole clause, free relatives headed by a relative adverb such as _donde_ “where”, and finite relative clauses in copular clefts.

~~~ conllu
1	a	o	PRON	_	_	2	nsubj	_	Gloss=she
2	stà	stâ	VERB	_	_	0	root	_	Gloss=lives
3	de	de	ADP	_	_	4	case	_	Gloss=at
4	casa	casa	NOUN	_	_	2	obl	_	Gloss=home
5	dond’	donde	ADV	_	_	2	advmod	_	Gloss=where|SpaceAfter=No
6	a	o	PRON	_	_	7	nsubj	_	Gloss=she
7	travaggia	travaggiâ	VERB	_	_	5	advcl:relcl	_	Gloss=works

~~~

Here _dond’_ “where” functions as a locative expression in the main clause, and _a travaggia_ “she works” is the relative clause modifying it.

In the cleft below, _pe quello_ “for that reason” is the focus: the pronoun _quello_ heads the copular clause, and _che_ is a subordinator ([mark]()).

~~~ conllu
1	l’	l'	PART	_	_	4	dep	_	SpaceAfter=No
2	é	ëse	AUX	_	_	4	cop	_	Gloss=is
3	pe	pe	ADP	_	_	4	case	_	Gloss=for
4	quello	quello	PRON	_	_	0	root	_	Gloss=that
5	che	che	SCONJ	_	_	7	mark	_	Gloss=that
6	son	ëse	AUX	_	_	7	aux	_	Gloss=I-have
7	vegnuo	vegnî	VERB	_	_	4	advcl:relcl	_	Gloss=come

~~~

<a id="locative-predicate"></a>

In _son tutti lì che te çercan_ “they are all there looking for you”, the clause _che te çercan_, by contrast, expresses an accompanying activity and takes [advcl](). The locative predicate _lì_ “there” heads the clause, with _son_ “(they) are” attached as [cop]().

~~~ conllu
1	son	ëse	AUX	_	_	3	cop	_	Gloss=They-are
2	tutti	tutto	PRON	_	_	3	nsubj	_	Gloss=all
3	lì	lì	ADV	_	_	0	root	_	Gloss=there
4	che	che	SCONJ	_	_	6	mark	_	Gloss=who
5	te	te	PRON	_	_	6	obj	_	Gloss=you
6	çercan	çercâ	VERB	_	_	3	advcl	_	Gloss=are-looking-for

~~~

In interrogative complements such as _no sò dond’o stà de casa_ “I do not know where he lives”, the subordinate predicate takes [ccomp]() and the interrogative word attaches inside its clause.
