---
layout: base
title:  'Statistics of nmod:appos in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nmod.html">nmod</a></tt>.

121 nodes (0%) are attached to their parents as `nmod:appos`.

121 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58677685950413.

The following 5 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (100; 83% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (11; 9% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (5; 4% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances).


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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:appos	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	nsubj	_	_
2	jouait	jouer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	trois	trois	NUM	_	Number=Plur	4	nummod	_	_
4	matchs	match	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	_
5	en	en	ADP	_	_	6	case	_	_
6	retard	retard	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
7	dans	dans	ADP	_	_	10	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	vingtième	vingtième	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
10	journée	journée	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
11	de	de	ADP	_	_	12	case	_	_
12	ligue	ligue	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
13	un	un	NUM	_	Number=Sing	12	nmod:appos	_	_
14	hier	hier	ADV	_	_	2	advmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


