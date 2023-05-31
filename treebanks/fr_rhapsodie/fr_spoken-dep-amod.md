---
layout: base
title:  'Statistics of amod in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `amod`

This relation is universal.

985 nodes (3%) are attached to their parents as `amod`.

511 instances of `amod` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2497461928934.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (912; 93% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (37; 4% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (17; 2% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (7; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	m'	lui	PRON	_	_	4	iobj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	sorti	sortir	VERB	ETRE	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	advmod	_	ExtPos=ADV|PhraseType=Idiom
6	petit	petit	ADJ	_	Gender=Masc|Number=Sing	5	fixed	_	InIdiom=Yes
7	peu	peu	NOUN	_	_	5	fixed	_	InIdiom=Yes
8	de	de	ADP	_	_	11	case	_	_
9	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	11	det	_	_
10	petit	petit	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	_
11	cocon	cocon	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	_
12	de	de	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	septième	septième	NOUN	_	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	donc	donc	ADV	_	_	5	advmod	_	_
2	euh	euh	INTJ	_	_	1	discourse	_	_
3	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	connu	connaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	Algérie	Algérie	PROPN	_	_	5	obj	_	_
8	heureuse	heureux	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 amod	color:blue
1	alors	alors	ADV	_	_	3	advmod	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
3	marche	marcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
5	marche	marcher	VERB	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	reparandum	_	_
6	pour	pour	ADP	_	_	9	case	_	_
7	tous	tout	ADJ	_	Gender=Masc|Number=Plur	9	amod	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	deux	deux	PRON	_	_	5	obl:mod	_	_
10	hein	hein	INTJ	_	_	9	discourse	_	_

~~~


