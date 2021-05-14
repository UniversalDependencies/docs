---
layout: relation
title: 'oblique'
shortdef: 'oblique'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct to a verb, adverb, adjective or verbal noun.

In the Gaelic treebank the `obl` relation is almost always marked with an adposition connected to it with the `case` relation.
The subtypes `obl:smod` and `obl:tmod` are for expressions of space and time respectively which are not marked with an adposition.

### Examples

#### With a verb

_Chaidh àireamh cinn-chuspair nam bàrd an <b>teircead</b>_ 'The number of subjects went into scarcity.' (fp02_021)

~~~ conllu
1	Chaidh	rach	VERB	V-s	Tense=Past	0	root	_	_
2	àireamh	àireamh	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	cinn-chuspair	cinn-chuspair	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	2	nmod	_	_
4	nam	an	DET	Tdpmg	Case=Gen|Gender=Masc|Number=Plur	5	det	_	_
5	bàrd	bàrd	NOUN	Ncpmg	Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
6	an	an	ADP	Sp	_	7	case	_	_
7	teircead	teircead	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No

~~~

#### With a verbal noun

_Bha ealain a’ bhàird a' toirt cothrom do 'n <b>luchd-éisteachd</b>_ 'The works of art of the poets were giving an opportunity to listeners' (fp02_010)

~~~ conllu
1	Bha	bi	VERB	V-s	Tense=Past	0	root	_	_
2	ealain	ealan	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	1	nsubj	_	_
3	a’	an	DET	Tdsmg	Case=Gen|Gender=Masc|Number=Sing	4	det	_	_
4	bhàird	bàrd	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	a'	ag	PART	Sa	_	6	case	_	_
6	toirt	toir	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
7	cothrom	cothrom	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	6	obj	_	_
8	do	do	ADP	Sp	_	10	case	_	_
9	'n	an	DET	Tdsm	Gender=Masc|Number=Sing	10	det	_	_
10	luchd-éisteachd	neach-éisteachd	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->
