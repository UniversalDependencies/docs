---
layout: base
title:  'Statistics of obl:agent in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="lt_hse-dep-obl.html">obl</a></tt>.

7 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.42857142857143.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-PRON.html">PRON</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	Paskutiniai	paskutinis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	En=last
2	žemyn	žemyn	ADV	RB	Degree=Pos	3	advmod	_	En=down
3	smingančio	smigti	VERB	VBNL	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	4	amod	_	En=fall
4	Tu-154	tu-154	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	En=Tu-154
5	kapitono	kapitonas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	En=capitain
6	padėjėjo	padėjėjas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	En=assistant
7	žodžiai	žodis	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	En=word
8	fiksuoti	fiksuoti	VERB	VBNH	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	En=fixate
9	lietuvišku	lietuviškas	ADJ	JJL	Case=Ins|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	En=Lithianian
10	prietaisu	prietaisas	NOUN	NN	Case=Ins|Gender=Masc|Number=Sing	8	obl:agent	_	En=device

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:agent	color:blue
1	Pasak	pasak	ADP	UH	_	4	case	_	En=according_to
2	jų	jie	PRON	PRP	Case=Gen|Number=Plur|Person=3	3	obl:agent	_	En=their
3	peršamo	piršti	VERB	VBNL	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	4	nmod	_	En=imposed
4	mentaliteto	mentalitetas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	9	parataxis	_	En=mentality|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	En=,
6	Rusijos	Rusija	PROPN	NNP	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	En=Russia
7	interesai	interesas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	En=interest
8	visada	visada	ADV	RB	Degree=Pos	9	advmod	_	En=always
9	priešiški	priešiškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	En=hostile
10	Lietuvos	Lietuva	PROPN	NNP	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	En=Lithuania
11	interesams	interesas	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	9	obj	_	En=interest|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	En=,
13	ir	ir	CCONJ	CC	_	15	cc	_	En=and
14	kitaip	kitaip	ADV	RB	Degree=Pos	15	advmod	_	En=otherwise
15	negali	galėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	En=cannot
16	būti	būti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	15	xcomp	_	En=be|SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	9	punct	_	En=.

~~~


