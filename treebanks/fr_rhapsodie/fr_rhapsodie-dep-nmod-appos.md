---
layout: base
title:  'Statistics of nmod:appos in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nmod.html">nmod</a></tt>.

120 nodes (0%) are attached to their parents as `nmod:appos`.

120 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59166666666667.

The following 5 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (100; 83% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (11; 9% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:appos	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	foire	foire	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	d'	de	ADP	_	_	4	case	_	SpaceAfter=No
4	empoigne	empoigne	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	à	à	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	procès	procès	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
8	Colonna	Colonna	PROPN	_	_	7	nmod:appos	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod:appos	color:blue
1	à	à	ADP	_	_	3	case	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	moins	moins	ADV	_	_	4	obl:mod	_	_
4	six	six	NUM	_	Number=Plur	5	nummod	_	_
5	blessés	blessé	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
6	légers	léger	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	_
7	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	8	det	_	_
8	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	5	nmod:appos	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 nmod:appos	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	SpaceAfter=No
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	reparandum	_	_
5	l~	l~	X	_	_	4	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	_
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	reparandum	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	À	À	ADP	_	_	13	case	_	Title=Yes
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	InTitle=Yes
13	sud	sud	NOUN	_	Gender=Masc|Number=Sing	0	root	_	InTitle=Yes
14	de	de	ADP	_	_	16	case	_	InTitle=Yes
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	InTitle=Yes
16	frontière	frontière	NOUN	_	Gender=Fem|Number=Sing	13	nmod	_	InTitle=Yes
17	à	à	ADP	_	_	19	case	_	InTitle=Yes
18	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	InTitle=Yes|SpaceAfter=No
19	ouest	ouest	NOUN	_	Gender=Masc|Number=Sing	13	conj	_	InTitle=Yes
20	de	de	ADP	_	_	22	case	_	InTitle=Yes
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	InTitle=Yes
22	soleil	soleil	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	InTitle=Yes
23	page	page	NOUN	_	Gender=Fem|Number=Sing	13	obl:mod	_	_
24	cent	cent	NUM	_	Number=Plur	23	nmod:appos	_	_
25	quatre-vingt-onze	quatre-vingt-onze	NUM	_	Number=Plur	24	flat	_	SpaceAfter=No
26	.	.	PUNCT	_	_	13	punct	_	_

~~~


