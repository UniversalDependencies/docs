---
layout: base
title:  'Statistics of appos in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `appos`

This relation is universal.

30 nodes (0%) are attached to their parents as `appos`.

30 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.96666666666667.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (11; 37% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-CCONJ.html">CCONJ</a></tt> (6; 20% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-PRON.html">PRON</a></tt> (3; 10% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la-pos-ADV.html">ADV</a></tt>-<tt><a href="la-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 appos	color:blue
1	Venit	venio1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	et	et1	CCONJ	c--------	_	1	cc	_	_
3	ad	ad1	ADP	r--------	_	4	case	_	_
4	ripas	ripa1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No
5	,	comma1	PUNCT	u--------	_	9	punct	_	_
6	ubi	ubi1	ADV	d--------	_	7	advmod	_	_
7	ludere	ludo1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	_
8	saepe	saepe1	ADV	d--------	_	9	advmod	_	_
9	solebat	soleo1	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	SpaceAfter=No
10	,	comma1	PUNCT	u--------	_	4	punct	_	_
11	Inachidas	Inachis1	ADJ	a-p---fa-	Case=Acc|Gender=Fem|Number=Plur	12	amod	_	_
12	ripas	ripa1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	4	appos	_	SpaceAfter=No
13	;	punc1	PUNCT	u--------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 appos	color:blue
1	poena	poena1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	placet	placeo1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	diversa	diverto1	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	nmod	_	SpaceAfter=No
4	,	comma1	PUNCT	u--------	_	1	punct	_	_
5	genus	genus1	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
6	mortale	mortalis1	ADJ	a-s---na-	Case=Acc|Gender=Neut|Number=Sing	5	amod	_	_
7	sub	sub1	ADP	r--------	_	8	case	_	_
8	undis	unda1	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	9	obl	_	_
9	perdere	perdo1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	10	csubj	_	_
10	et	et1	CCONJ	c--------	_	1	appos	_	_
11	ex	ex1	ADP	r--------	_	15	case	_	_
12	omni	omnis1	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	15	amod	_	_
13	nimbos	nimbus1	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	14	obj	_	_
14	demittere	demitto1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	10	csubj	_	_
15	caelo	caelum1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	14	obl	_	SpaceAfter=No
16	.	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Et	et1	CCONJ	c--------	_	10	cc	_	_
2	ego	ego1	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
3	,	comma1	PUNCT	u--------	_	2	punct	_	_
4	homo	homo1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
5	dipundiarius	dipundarius1	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
6	,	comma1	PUNCT	u--------	_	2	punct	_	_
7	sestertium	sestertius1	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	_
8	centies	centiens1	ADV	d--------	_	9	obj	_	_
9	accipere	accipio1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	10	xcomp	_	_
10	potui	possum1	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	punc1	PUNCT	u--------	_	10	punct	_	_

~~~


