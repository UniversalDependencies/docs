---
layout: base
title:  'Statistics of flat in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="fr_parisstories-dep-flat-name.html">flat:name</a></tt>.

37 nodes (0%) are attached to their parents as `flat`.

37 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16216216216216.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (24; 65% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (7; 19% instances), <tt><a href="fr_parisstories-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (5; 14% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	plus	plus	ADV	_	_	3	advmod	_	_
5	si	si	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	France	France	PROPN	_	_	3	ccomp	_	_
9	Inter	Inter	PROPN	_	_	8	flat	_	_
10	ou	ou	CCONJ	_	_	11	cc	_	_
11	RMC	RMC	PROPN	_	_	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	en	en	ADP	_	_	4	case	_	_
4	deux	deux	NUM	_	Number=Plur	2	obl:arg	_	_
5	mille	mille	NUM	_	Number=Plur	4	flat	_	_
6	dix-sept	dix-sept	NUM	_	Number=Plur	4	flat	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 flat	color:blue
1	euh	euh	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
4	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	pris	prendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	temps	temps	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	pour	pour	ADP	_	_	11	case	_	_
9	tout	tout	ADV	_	_	11	advmod	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	monde	monde	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	et	et	CCONJ	_	_	11	discourse	_	_
14	cetera	cetera	ADV	_	_	13	flat	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	ensuite	ensuite	ADV	_	_	18	advmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	16	punct	_	_
18	arrivent	arriver	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
19	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	21	det	_	_
20	autres	autre	ADJ	_	Number=Plur	21	amod	_	_
21	joueurs	joueur	NOUN	_	Gender=Masc|Number=Plur	18	nsubj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	18	punct	_	_

~~~


