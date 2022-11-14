---
layout: base
title:  'Statistics of ccomp in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `ccomp`

This relation is universal.

324 nodes (1%) are attached to their parents as `ccomp`.

212 instances of `ccomp` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.21913580246914.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (318; 98% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	ipsa	ipse	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	LId=ipse1
2	canas	cano	VERB	v2spsa---	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	LId=cano1
3	oro	oro	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=oro1
4	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1
5	'	'	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 ccomp	color:blue
1	tum	tum	ADV	d--------	_	15	advmod	_	LId=tum1
2	tibi	tu	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	6	obj	_	LId=tu1
3	si	si	SCONJ	c--------	_	6	mark	_	LId=si1
4	qua	aliquis	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	nmod	_	LId=aliquis1
5	mei	ego	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	LId=ego1
6	veniet	venio	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	15	advcl	_	LId=venio1
7	non	non	ADV	d--------	_	8	advmod	_	LId=non1
8	immemor	immemor	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	amod	_	LId=immemor1
9	hora	hora	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No|LId=hora1
10	,	,	PUNCT	u--------	_	6	punct	_	LId=comma1
11	vivere	vivo	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	15	ccomp	_	LId=vivo1
12	me	ego	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	11	nsubj	_	LId=ego1
13	duro	durus	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	14	amod	_	LId=durus1
14	sidere	sidus	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	11	obl	_	LId=sidus1
15	certus	certus	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	LId=certus1
16	eris	sum	AUX	v2sfia---	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	15	cop	_	SpaceAfter=No|LId=sum1
17	.	.	PUNCT	u--------	_	15	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 ccomp	color:blue
1	magis	magis	ADV	d--------	_	15	advmod	_	LId=magis1
2	quid	quis	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	LId=quis1
3	se	sui	PRON	p-p---mb-	Case=Abl|Gender=Masc|Number=Plur	4	obj	_	LId=sui1
4	dignum	dignus	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	15	obj	_	LId=dignus1
5	foret	sum	AUX	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	SpaceAfter=No|LId=sum1
6	,	,	PUNCT	u--------	_	13	punct	_	LId=comma1
7	quam	quam	ADV	d--------	_	13	mark	_	LId=quam1
8	quid	quis	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing	13	nsubj	_	LId=quis1
9	in	in	ADP	r--------	_	10	case	_	LId=in1
10	illos	ille	PRON	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur	12	obl	_	LId=ille1
11	iure	jus	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	12	obl	_	LId=jus1
12	fieri	fio	VERB	v--pnp---	Tense=Pres|VerbForm=Inf|Voice=Pass	13	xcomp	_	LId=fio1
13	posset	possum	VERB	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No|LId=possum1
14	,	,	PUNCT	u--------	_	13	punct	_	LId=comma1
15	quaerebant	quaero	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=quaero1
16	.	.	PUNCT	u--------	_	15	punct	_	LId=punc1

~~~


