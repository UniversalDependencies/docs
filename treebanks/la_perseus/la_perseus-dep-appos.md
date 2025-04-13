---
layout: base
title:  'Statistics of appos in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `appos`

This relation is universal.

46 nodes (0%) are attached to their parents as `appos`.

46 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.54347826086957.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (32; 70% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Cui	qui	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	4	obl	_	LId=qui1
2	fidus	fidus	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	LId=fidus1
3	Achates	Achates	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	LId=Achates2
4	it	eo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=eo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	comes	comes	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No|LId=comes1
6	,	,	PUNCT	u--------	_	11	punct	_	LId=comma1
7	et	et	CCONJ	c--------	_	11	cc	_	LId=et1
8	paribus	par	ADJ	a-p---fb-	Case=Abl|Gender=Fem|Number=Plur	9	amod	_	LId=par1
9	curis	cura	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	11	obl	_	LId=cura1
10	vestigia	vestigium	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	11	obj	_	LId=vestigium1
11	figit	figo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	LId=figo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 appos	color:blue
1	Venit	venio	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=venio1|TraditionalMood=Indicativus|TraditionalTense=Praesens
2	et	et	CCONJ	c--------	_	1	cc	_	LId=et1
3	ad	ad	ADP	r--------	_	4	case	_	LId=ad1
4	ripas	ripa	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No|LId=ripa1
5	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
6	ubi	ubi	ADV	d--------	AdvType=Loc	7	advmod:lmod	_	LId=ubi1
7	ludere	ludo	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	9	xcomp	_	LId=ludo1|TraditionalMood=Infinitivus|TraditionalTense=Praesens
8	saepe	saepe	ADV	d--------	AdvType=Tim	9	advmod:tmod	_	LId=saepe1
9	solebat	soleo	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	LId=soleo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
10	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
11	Inachidas	Inachis	ADJ	a-p---fa-	Case=Acc|Gender=Fem|Number=Plur	12	amod	_	LId=Inachis1
12	ripas	ripa	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	4	appos	_	SpaceAfter=No|LId=ripa1
13	;	;	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Et	et	CCONJ	c--------	_	10	cc	_	LId=et1
2	ego	ego	PRON	p-s---mn-	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	SpaceAfter=No|LId=ego1
3	,	,	PUNCT	u--------	_	4	punct	_	LId=comma1
4	homo	homo	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	LId=homo1
5	dipundiarius	dipundarius	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No|LId=dipundarius1
6	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
7	sestertium	sestertius	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	LId=sestertius1
8	centies	centiens	ADV	d--------	_	9	obj	_	LId=centiens1
9	accipere	accipio	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	_	LId=accipio1|TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	potui	possum	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=possum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
11	.	.	PUNCT	u--------	_	10	punct	_	LId=punc1

~~~


