---
layout: base
title:  'Statistics of appos in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `appos`

This relation is universal.

142 nodes (0%) are attached to their parents as `appos`.

142 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.87323943661972.

The following 21 pairs of parts of speech are connected with `appos`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (80; 56% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (11; 8% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	à	à	ADP	_	_	3	case	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	moins	moins	ADV	_	_	4	obl:mod	_	_
4	six	six	NUM	_	Number=Plur	5	nummod	_	_
5	blessés	blessé	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
6	légers	léger	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	_
7	des	un	DET	de	Definite=Ind|Number=Plur|PronType=Art	8	det	_	_
8	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	5	appos	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 appos	color:blue
1	soit	soit	CCONJ	_	_	4	cc	_	_
2	alors	alors	ADV	_	_	4	discourse	_	_
3	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	4	nsubj	_	_
4	tournez	tourner	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	à	à	ADP	_	_	4	dep	_	_
6	à	à	ADP	_	_	7	case	_	_
7	droite	droite	NOUN	_	Gender=Fem|Number=Sing	5	reparandum	_	_
8	juste	juste	ADV	_	_	11	advmod	_	_
9	après	après	ADP	_	_	11	case	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	arrêt	arrêt	NOUN	_	Gender=Masc|Number=Sing	4	obl:mod	_	_
12	euh	euh	INTJ	_	_	11	discourse	_	_
13	Hubert	Hubert	PROPN	_	_	11	appos	_	_
14	Dubedout	Dubedout	PROPN	_	_	13	flat	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Chaplin	Chaplin	PROPN	_	_	4	nsubj	_	_
2	grand	grand	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	seigneur	seigneur	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
4	explique	expliquer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	que	que	SCONJ	_	_	9	mark	_	_
6	euh	euh	INTJ	_	_	9	discourse	_	_
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	expl:subj	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	ccomp	_	_
10	qui	qui	PRON	_	_	11	nsubj	_	_
11	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl:cleft	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	baguette	baguette	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	_
14	et	et	CCONJ	_	_	19	cc	_	_
15	que	que	SCONJ	_	_	19	mark	_	_
16	donc	donc	ADV	_	_	19	advmod	_	_
17	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	expl:subj	_	_
18	y	y	PRON	_	Person=3|PronType=Prs	19	iobj	_	_
19	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	_
20	pas	pas	ADV	_	Polarity=Neg	19	advmod	_	_
21	de	de	ADP	_	_	22	case	_	_
22	vol	vol	NOUN	_	Gender=Masc|Number=Sing	19	obj	_	_
23	euh	euh	INTJ	_	_	22	discourse	_	_

~~~


