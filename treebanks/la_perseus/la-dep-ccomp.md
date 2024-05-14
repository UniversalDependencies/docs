---
layout: base
title:  'Statistics of ccomp in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `ccomp`

This relation is universal.

323 nodes (1%) are attached to their parents as `ccomp`.

212 instances of `ccomp` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.21981424148607.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (318; 98% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la-pos-ADV.html">ADV</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 ccomp	color:blue
1	Hanc	hic1	PRON	p-s---fa-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
2	si	si1	SCONJ	c--------	_	4	mark	_	_
3	nostri	noster	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	transirent	transeo1	VERB	v3pisa---	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	ccomp	_	_
5	hostes	hostis1	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
6	expectabant	exspecto1	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	;	punc1	PUNCT	u--------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 ccomp	color:blue
1	tum	tum1	ADV	d--------	_	15	advmod	_	_
2	tibi	tu1	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	6	obj	_	_
3	si	si1	SCONJ	c--------	_	6	mark	_	_
4	qua	aliquis1	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	nmod	_	_
5	mei	ego1	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	_
6	veniet	venio1	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	15	advcl	_	_
7	non	non1	ADV	d--------	_	8	advmod	_	_
8	immemor	immemor1	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	amod	_	_
9	hora	hora1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
10	,	comma1	PUNCT	u--------	_	3	punct	_	_
11	vivere	vivo1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	15	ccomp	_	_
12	me	ego1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	11	nsubj	_	_
13	duro	durus1	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	14	amod	_	_
14	sidere	sidus1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	11	advmod	_	_
15	certus	certus1	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
16	eris	sum1	VERB	v2sfia---	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	15	cop	_	SpaceAfter=No
17	.	punc1	PUNCT	u--------	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 ccomp	color:blue
1	magis	magis1	ADV	d--------	_	15	advmod	_	_
2	quid	quis1	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
3	se	sui1	PRON	p-p---mb-	Case=Abl|Gender=Masc|Number=Plur	4	obj	_	_
4	dignum	dignus1	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	15	obj	_	_
5	foret	sum1	VERB	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	SpaceAfter=No
6	,	comma1	PUNCT	u--------	_	13	punct	_	_
7	quam	quam1	ADV	d--------	_	13	mark	_	_
8	quid	quis1	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing	13	nsubj	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	illos	ille1	PRON	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur	12	obl	_	_
11	iure	jus1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	12	advmod	_	_
12	fieri	fio1	VERB	v--pnp---	Tense=Pres|VerbForm=Inf|Voice=Pass	13	xcomp	_	_
13	posset	possum1	VERB	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No
14	,	comma1	PUNCT	u--------	_	7	punct	_	_
15	quaerebant	quaero1	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
16	.	punc1	PUNCT	u--------	_	15	punct	_	_

~~~


