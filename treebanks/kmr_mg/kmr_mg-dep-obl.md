---
layout: base
title:  'Statistics of obl in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="kmr_mg-dep-obl-dat.html">obl:dat</a></tt>.

18 nodes (0%) are attached to their parents as `obl`.

17 instances of `obl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66666666666667.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (7; 39% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt> (6; 33% instances), <tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (3; 17% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="kmr_mg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl	color:blue
1	Li	li	ADP	pr	AdpType=Prep	2	case	_	_
2	Kurdistana	Kurdistan	PROPN	np	Case=Con|Definite=Def|Gender=Fem|Number=Sing	11	nmod	_	_
3	başûr	başûr	ADJ	adj	Degree=Pos	2	amod	_	_
4	bi	bi	ADP	pr	AdpType=Prep	5	case	_	_
5	navê	nav	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	11	nmod	_	_
6	Mam	mam	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nmod:poss	_	_
7	Azad	azad	ADJ	adj	Degree=Pos	6	flat	_	_
8	tê	hatin	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
9	bi	bi	ADP	pr	AdpType=Prep	10	case	_	_
10	nav	nav	NOUN	n	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	obl	_	_
11	kirin	navkirin	VERB	vblex	VerbForm=Inf	0	root	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 obl	color:blue
1	Ode	ode	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	_
2	weke	weke	ADP	pr	AdpType=Prep	3	case	_	_
3	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	0	root	_	_
4	bû	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	12	punct	_	_
6	tu	tu	DET	det	Polarity=Neg|PronType=Ind	7	det	_	_
7	tişt	tişt	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	nsubj	_	_
8	li	li	ADP	pr	AdpType=Prep	9	case	_	_
9	ew	ew	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|PronType=Dem	12	obl	_	_
10	ne	ne	ADV	adv	Polarity=Neg	12	advmod	_	_
11	hati bû	hatin	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	12	aux	_	_
12	guhartin	guhartin	VERB	vblex	VerbForm=Inf	3	conj	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obl	color:blue
1	Bi	bi	ADP	pr	AdpType=Prep	3	case	_	_
2	vê	ev	DET	prn	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	fermandariya	fermandarî	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	_
4	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	3	nmod:poss	_	_
5	di	di	ADP	pr	AdpType=Prep	6	case	_	_
6	artêşê	artêş	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	_
7	de	de	ADP	post	AdpType=Post	6	case	_	_
8	navdar	navdar	ADJ	adj	Degree=Pos	0	root	_	_
9	dibe	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	,	,	PUNCT	cm	_	12	punct	_	_
11	xelatê	xelat	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	12	obj	_	_
12	werdigire	wergirtin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	8	punct	_	_

~~~


