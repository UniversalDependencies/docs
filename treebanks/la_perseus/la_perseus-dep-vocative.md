---
layout: base
title:  'Statistics of vocative in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `vocative`

This relation is universal.

99 nodes (0%) are attached to their parents as `vocative`.

51 instances of `vocative` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.60606060606061.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (68; 69% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (14; 14% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (9; 9% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	nympha	nympha	NOUN	n-s---fv-	Case=Voc|Gender=Fem|Number=Sing	3	vocative	_	SpaceAfter=No|LId=nympha1
2	,	,	PUNCT	u--------	_	1	punct	_	LId=comma1
3	mane	maneo	VERB	v2spma---	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=maneo1
4	!	!	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Nescis	nescio	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=nescio1
2	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
3	temeraria	temerarius	ADJ	a-s---fv-	Case=Voc|Gender=Fem|Number=Sing	1	vocative	_	SpaceAfter=No|LId=temerarius1
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	nescis	nescio	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LId=nescio1
6	quem	qui	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	7	obj	_	LId=qui1
7	fugias	fugio	VERB	v2spsa---	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	_	SpaceAfter=No|LId=fugio1
8	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
9	que	que	CCONJ	c--------	_	1	cc	_	LId=que1
10	ideo	ideo	ADV	d--------	_	11	advmod	_	LId=ideo1
11	fugis	fugio	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No|LId=fugio1
12	.	.	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	Non	non	ADV	d--------	_	4	advmod	_	LId=non1
2	mehercules	Hercules	INTJ	e--------	_	4	vocative	_	LId=Hercules1
3	illum	ille	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	8	nsubj	_	LId=ille1
4	puto	puto	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=puto1
5	in	in	ADP	r--------	_	6	case	_	LId=in1
6	domo	domus	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	obl	_	LId=domus1
7	canem	canis	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	LId=canis1
8	reliquisse	relinquo	VERB	v--rna---	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	4	ccomp	_	SpaceAfter=No|LId=relinquo1
9	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


