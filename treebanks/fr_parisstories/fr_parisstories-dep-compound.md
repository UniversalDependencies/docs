---
layout: base
title:  'Statistics of compound in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `compound`

This relation is universal.

14 nodes (0%) are attached to their parents as `compound`.

14 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07142857142857.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (5; 36% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (3; 21% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (3; 21% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	dans	dans	ADP	_	_	3	case	_	AlignBegin=84155|AlignEnd=84447
2	ses	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	3	det	_	AlignBegin=84447|AlignEnd=84739
3	albums	album	NOUN	_	Gender=Masc|Number=Plur	0	root	_	AlignBegin=84739|AlignEnd=85032
4	photos	photo	NOUN	_	Gender=Fem|Number=Plur	3	compound	_	AlignBegin=85032|AlignEnd=85324|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	AlignBegin=84250|AlignEnd=84250

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 compound	color:blue
1	et	et	CCONJ	_	_	10	cc	_	_
2	donc	donc	ADV	_	_	10	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
5	deux	deux	NUM	_	_	6	nummod	_	_
6	premières	premier	ADJ	_	Gender=Fem|Number=Plur	7	amod	_	_
7	semaines	semaine	NOUN	_	Gender=Fem|Number=Plur	10	obl:mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	commence	commencer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
11	à	à	ADP	_	_	12	mark	_	_
12	aller	aller	VERB	_	VerbForm=Inf	10	xcomp	_	Subject=SubjRaising
13	à	à	ADP	_	_	15	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	salle	salle	NOUN	_	Gender=Fem|Number=Sing	12	obl:arg	_	_
16	de	de	ADP	_	_	15	compound	_	_
17	sport	sport	NOUN	_	Gender=Masc|Number=Sing	16	compound	_	SpaceAfter=No
18	,	,	PUNCT	_	_	22	punct	_	_
19	donc	donc	ADV	_	_	22	discourse	_	SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	_	_
21	à	à	ADP	_	_	22	mark	_	_
22	prendre	prendre	VERB	_	VerbForm=Inf	12	conj	_	Subject=SubjRaising
23	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	24	det	_	_
24	marques	marque	NOUN	_	Gender=Fem|Number=Plur	22	obj	_	_
25	etc	etc	ADV	_	_	24	conj	_	SpaceAfter=No|wordform=etcétéra
26	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 compound	color:blue
1	et	et	CCONJ	_	_	10	cc	_	_
2	donc	donc	ADV	_	_	10	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
5	deux	deux	NUM	_	_	6	nummod	_	_
6	premières	premier	ADJ	_	Gender=Fem|Number=Plur	7	amod	_	_
7	semaines	semaine	NOUN	_	Gender=Fem|Number=Plur	10	obl:mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	commence	commencer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
11	à	à	ADP	_	_	12	mark	_	_
12	aller	aller	VERB	_	VerbForm=Inf	10	xcomp	_	Subject=SubjRaising
13	à	à	ADP	_	_	15	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	salle	salle	NOUN	_	Gender=Fem|Number=Sing	12	obl:arg	_	_
16	de	de	ADP	_	_	15	compound	_	_
17	sport	sport	NOUN	_	Gender=Masc|Number=Sing	16	compound	_	SpaceAfter=No
18	,	,	PUNCT	_	_	22	punct	_	_
19	donc	donc	ADV	_	_	22	discourse	_	SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	_	_
21	à	à	ADP	_	_	22	mark	_	_
22	prendre	prendre	VERB	_	VerbForm=Inf	12	conj	_	Subject=SubjRaising
23	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	24	det	_	_
24	marques	marque	NOUN	_	Gender=Fem|Number=Plur	22	obj	_	_
25	etc	etc	ADV	_	_	24	conj	_	SpaceAfter=No|wordform=etcétéra
26	.	.	PUNCT	_	_	10	punct	_	_

~~~


