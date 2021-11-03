---
layout: base
title:  'Statistics of amod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `amod`

This relation is universal.

1001 nodes (2%) are attached to their parents as `amod`.

505 instances of `amod` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3046953046953.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (927; 93% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (38; 4% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (17; 2% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (7; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	m'	le	PRON	_	Number=Sing|Person=1|PronType=Prs	4	iobj	_	SpaceAfter=No
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	sorti	sortir	VERB	ETRE	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	advmod	_	ExtPos=ADV|Idiom=Yes
6	petit	petit	ADJ	_	Gender=Masc|Number=Sing	5	fixed	_	InIdiom=Yes
7	peu	peu	NOUN	_	_	5	fixed	_	InIdiom=Yes
8	de	de	ADP	_	_	11	case	_	_
9	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	11	det	_	_
10	petit	petit	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	_
11	cocon	cocon	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	_
12	de	de	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	septième	septième	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	donc	donc	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	1	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	SpaceAfter=No
6	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	connu	connaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	Algérie	Algérie	PROPN	_	_	7	obj	_	_
10	heureuse	heureux	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 amod	color:blue
1	alors	alors	ADV	_	_	3	advmod	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
3	marche	marcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	_
6	marche	marcher	VERB	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	reparandum	_	_
7	pour	pour	ADP	_	_	10	case	_	_
8	tous	tout	ADJ	_	Gender=Masc|Number=Plur	10	amod	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	deux	deux	PRON	_	Number=Plur|Person=3	6	obl:mod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	hein	hein	INTJ	_	_	10	discourse	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


