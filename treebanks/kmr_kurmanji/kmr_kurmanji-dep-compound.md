---
layout: base
title:  'Statistics of compound in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="kmr_mg-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="kmr_mg-dep-compound-redup.html">compound:redup</a></tt>.

6 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt> (2; 33% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="kmr_mg-pos-NUM.html">NUM</a></tt>-<tt><a href="kmr_mg-pos-NUM.html">NUM</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Heke	heke	SCONJ	cnjsub	_	6	mark	_	_
2	min	ez	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
3	işê	îş	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	6	obj	_	_
4	te	tu	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	3	nmod:poss	_	_
5	safî	safî	ADJ	adj	Degree=Pos	6	compound	_	_
6	kir	kirin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	advcl	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	6	punct	_	_
8	emelê	emel	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	12	nsubj	_	_
9	min	ez	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	_
10	bi	bi	ADP	pr	AdpType=Prep	11	case	_	_
11	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	12	nmod	_	_
12	mikafata	mikafat	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
13	min	ez	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	12	nmod:poss	_	_
14	e	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	SpaceAfter=No
15	.	.	PUNCT	sent	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Min	ez	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	dil	dil	NOUN	n	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	3	compound	_	_
3	kir	kirin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	ko	ku	SCONJ	cnjsub	_	12	mark	_	_
5	em	em	PRON	prn	Case=Nom|Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
6	bi	bi	ADP	pr	AdpType=Prep	7	case	_	_
7	hev	hev	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	12	nmod	_	_
8	re	re	ADP	post	AdpType=Post	7	case	_	_
9	guhdariya	guhdarî	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	12	obj	_	_
10	wê	ew	DET	det	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	11	det	_	_
11	xanimê	xanim	NOUN	n	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	9	nmod:poss	_	_
12	bikin	kirin	VERB	vblex	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	Di	di	ADP	pr	AdpType=Prep	2	case	_	_
2	647an	647	NUM	num	Case=Acc|Number=Plur|NumType=Card	7	nmod	_	_
3	Iran	îran	PROPN	np	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	cm	_	5	punct	_	_
5	Lîbya	Lîbya	PROPN	np	Case=Nom|Gender=Masc|Number=Sing	3	conj	_	_
6	hat	hatin	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	_
7	dagir kirin	dagir kirin	VERB	vblex	Typo=Yes|VerbForm=Inf	0	root	_	CorrectForm=dagirkirin
8	û	û	CCONJ	cnjcoo	_	13	cc	_	_
9	dagir	dagir	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	_
10	kirina	kirin	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	9	compound	_	_
11	Anatoliya	Anatoliya	PROPN	np	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	nmod:poss	_	_
12	jî	jî	PART	emph	_	13	advmod	_	_
13	dest pê kir	dest pê kirin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	7	punct	_	_

~~~


