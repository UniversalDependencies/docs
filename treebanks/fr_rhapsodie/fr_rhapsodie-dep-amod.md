---
layout: base
title:  'Statistics of amod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `amod`

This relation is universal.

1015 nodes (2%) are attached to their parents as `amod`.

510 instances of `amod` (50%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32216748768473.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (939; 93% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (39; 4% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (16; 2% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	m'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	iobj	_	SpaceAfter=No
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
4	sorti	sortir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	un	un	DET	_	Definite=Ind|ExtPos=ADV|Gender=Masc|Number=Sing|PronType=Art	4	advmod	_	Idiom=Yes
6	petit	petit	ADJ	_	Gender=Masc|Number=Sing	5	fixed	_	InIdiom=Yes
7	peu	peu	NOUN	_	_	5	fixed	_	InIdiom=Yes
8	de	de	ADP	_	_	11	case	_	_
9	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	_
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
5	j'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	SpaceAfter=No
6	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux:tense	_	_
7	connu	connaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	Algérie	Algérie	PROPN	_	_	7	obj	_	_
10	heureuse	heureux	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	tout	tout	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	cela	cela	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	grâce	grâce	ADV	_	_	3	advmod	_	_
5	à	à	ADP	_	_	7	case	_	_
6	notre	son	DET	_	Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	_
7	boule	boule	NOUN	_	Gender=Fem|Number=Sing	4	obl:arg	_	_
8	de	de	ADP	_	_	9	case	_	_
9	lavage	lavage	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	Maître	Maître	PROPN	_	Gender=Masc|Number=Sing	3	vocative	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


