---
layout: base
title:  'Statistics of compound in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `compound`

This relation is universal.

13 nodes (0%) are attached to their parents as `compound`.

13 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 31% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (3; 23% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (3; 23% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (3; 23% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	nsubj	_	_
2	faisait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	des	des	DET	_	Definite=Ind|Number=Plur|PronType=Art	4	det	_	_
4	shootings	shootings	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	_
5	photos	photo	NOUN	_	Gender=Fem|Number=Plur	4	compound	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

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
9	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	commence	commencer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
11	à	à	ADP	_	_	12	mark	_	_
12	aller	aller	VERB	_	VerbForm=Inf	10	xcomp	_	_
13	à	à	ADP	_	_	15	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	salle	salle	NOUN	_	Gender=Fem|Number=Sing	12	obl:arg	_	_
16	de	de	ADP	_	_	15	compound	_	_
17	sport	sport	NOUN	_	Gender=Masc|Number=Sing	16	compound	_	SpaceAfter=No
18	,	,	PUNCT	_	_	22	punct	_	_
19	donc	donc	ADV	_	_	22	discourse	_	SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	_	_
21	à	à	ADP	_	_	22	mark	_	_
22	prendre	prendre	VERB	_	VerbForm=Inf	12	conj	_	_
23	mes	son	DET	_	Number[psor]=Plur|Person[psor]=1|PronType=Prs	24	det	_	_
24	marques	marque	NOUN	_	Gender=Fem|Number=Plur	22	obj	_	_
25	etcétéra	etcétéra	ADV	_	_	24	discourse	_	SpaceAfter=No
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
9	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	commence	commencer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
11	à	à	ADP	_	_	12	mark	_	_
12	aller	aller	VERB	_	VerbForm=Inf	10	xcomp	_	_
13	à	à	ADP	_	_	15	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	salle	salle	NOUN	_	Gender=Fem|Number=Sing	12	obl:arg	_	_
16	de	de	ADP	_	_	15	compound	_	_
17	sport	sport	NOUN	_	Gender=Masc|Number=Sing	16	compound	_	SpaceAfter=No
18	,	,	PUNCT	_	_	22	punct	_	_
19	donc	donc	ADV	_	_	22	discourse	_	SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	_	_
21	à	à	ADP	_	_	22	mark	_	_
22	prendre	prendre	VERB	_	VerbForm=Inf	12	conj	_	_
23	mes	son	DET	_	Number[psor]=Plur|Person[psor]=1|PronType=Prs	24	det	_	_
24	marques	marque	NOUN	_	Gender=Fem|Number=Plur	22	obj	_	_
25	etcétéra	etcétéra	ADV	_	_	24	discourse	_	SpaceAfter=No
26	.	.	PUNCT	_	_	10	punct	_	_

~~~


