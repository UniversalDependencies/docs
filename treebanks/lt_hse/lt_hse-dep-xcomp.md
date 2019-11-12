---
layout: base
title:  'Statistics of xcomp in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `xcomp`

This relation is universal.

110 nodes (2%) are attached to their parents as `xcomp`.

104 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (92; 84% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (12; 11% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="lt_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Taip	taip	PART	UH	_	0	root	_	En=so
2	nėra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	En=be|SpaceAfter=No
3	:	:	PUNCT	PUNCT	_	6	punct	_	En=:
4	mes	mes	PRON	PRP	Case=Nom|Number=Plur|Person=1	6	nsubj	_	En=we
5	tik	tik	ADV	RB	Degree=Pos	6	advmod	_	En=only
6	draudžiame	drausti	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	En=friend
7	drausti	drausti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	6	xcomp	_	En=friend|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	En=,
9	draudžiame	drausti	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	En=friend
10	prievartauti	prievartauti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	9	xcomp	_	En=coerce|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	En=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Tuo	tuo	SCONJ	UH	_	5	advmod	_	En=meanwhile
2	tarpu	tarpu	SCONJ	UH	_	1	fixed	_	En=while
3	nepriklausomybė	nepriklausomybė	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Polarity=Neg	5	nsubj	_	En=independence
4	nėra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	En=be
5	tikslas	tikslas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	En=target
6	sau	savęs	PRON	PRP	Case=Dat	5	nmod	_	En=oneself|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	En=,
8	o	o	CCONJ	CC	_	9	cc	_	En=and
9	būdas	būdas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	En=way
10	užtikrinti	užtikrinti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	9	xcomp	_	En=safeguard
11	tautos	tauta	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	En=nation
12	gerovę	gerovė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	En=well-being|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Nesunku	nesunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Neg	0	root	_	En=not_difficult
2	pastebėti	pastebėti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	1	xcomp	_	En=notice|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
4	kad	kad	SCONJ	UH	_	8	mark	_	En=that
5	šioje	šis	DET	DT	Case=Loc|Gender=Fem|Number=Sing	6	det	_	En=this
6	bėdoje	bėda	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	8	obl	_	En=adversity
7	nesame	būti	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	En=be
8	vieniši	vienišas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	2	ccomp	_	En=alone|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	En=.

~~~


