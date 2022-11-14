---
layout: base
title:  'Statistics of appos in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `appos`

This relation is universal.

30 nodes (0%) are attached to their parents as `appos`.

30 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.96666666666667.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (11; 37% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (6; 20% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (3; 10% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 appos	color:blue
1	Venit	venio	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=venio1
2	et	et	CCONJ	c--------	_	1	cc	_	LId=et1
3	ad	ad	ADP	r--------	_	4	case	_	LId=ad1
4	ripas	ripa	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No|LId=ripa1
5	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
6	ubi	ubi	ADV	d--------	_	7	advmod	_	LId=ubi1
7	ludere	ludo	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	LId=ludo1
8	saepe	saepe	ADV	d--------	_	9	advmod	_	LId=saepe1
9	solebat	soleo	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	SpaceAfter=No|LId=soleo1
10	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
11	Inachidas	Inachis	ADJ	a-p---fa-	Case=Acc|Gender=Fem|Number=Plur	12	amod	_	LId=Inachis1
12	ripas	ripa	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	4	appos	_	SpaceAfter=No|LId=ripa1
13	;	;	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 appos	color:blue
1	poena	poena	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	LId=poena1
2	placet	placeo	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=placeo1
3	diversa	diverto	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	nmod	_	SpaceAfter=No|LId=diverto1
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	genus	genus	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	LId=genus1
6	mortale	mortalis	ADJ	a-s---na-	Case=Acc|Gender=Neut|Number=Sing	5	amod	_	LId=mortalis1
7	sub	sub	ADP	r--------	_	8	case	_	LId=sub1
8	undis	unda	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	9	obl	_	LId=unda1
9	perdere	perdo	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	10	csubj	_	LId=perdo1
10	et	et	CCONJ	c--------	_	1	appos	_	LId=et1
11	ex	ex	ADP	r--------	_	15	case	_	LId=ex1
12	omni	omnis	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	15	amod	_	LId=omnis1
13	nimbos	nimbus	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	14	obj	_	LId=nimbus1
14	demittere	demitto	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	10	csubj	_	LId=demitto1
15	caelo	caelum	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	14	obl	_	SpaceAfter=No|LId=caelum1
16	.	.	PUNCT	u--------	_	2	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Et	et	CCONJ	c--------	_	10	cc	_	LId=et1
2	ego	ego	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No|LId=ego1
3	,	,	PUNCT	u--------	_	4	punct	_	LId=comma1
4	homo	homo	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	LId=homo1
5	dipundiarius	dipundarius	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No|LId=dipundarius1
6	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
7	sestertium	sestertius	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	LId=sestertius1
8	centies	centiens	ADV	d--------	_	9	obj	_	LId=centiens1
9	accipere	accipio	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	10	xcomp	_	LId=accipio1
10	potui	possum	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=possum1
11	.	.	PUNCT	u--------	_	10	punct	_	LId=punc1

~~~


