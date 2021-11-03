---
layout: base
title:  'Statistics of nummod in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nummod`

This relation is universal.

113 nodes (0%) are attached to their parents as `nummod`.

109 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15929203539823.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (109; 96% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	soixante-quinze	soixante-quinze	NUM	_	Number=Plur	5	nummod	_	_
5	grammes	gramme	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
6	de	de	ADP	_	_	7	case	_	_
7	beurre	beurre	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No
3	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
4	donc	donc	ADV	_	_	3	advmod	_	_
5	euh	euh	INTJ	_	_	10	discourse	_	_
6	trois	trois	NUM	_	Number=Plur	7	nummod	_	_
7	mille	mille	NUM	_	Number=Plur	8	nummod	_	_
8	kilomètres	kilomètre	NOUN	_	Gender=Masc|Number=Plur	10	obj	_	_
9	à	à	ADP	_	_	10	mark	_	_
10	faire	faire	VERB	_	VerbForm=Inf	3	ccomp	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
13	crois	croire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	discourse	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	16	nsubj	_	_
16	suis	être	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	reparandum	_	_
17	plus	plus	ADV	_	_	16	advmod	_	_
18	très	très	ADV	_	_	19	advmod	_	_
19	sûr	sûr	ADJ	_	Gender=Masc|Number=Sing	16	xcomp	_	SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


