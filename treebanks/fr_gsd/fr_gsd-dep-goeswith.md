---
layout: base
title:  'Statistics of goeswith in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `goeswith`

This relation is universal.

31 nodes (0%) are attached to their parents as `goeswith`.

31 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03225806451613.

The following 17 pairs of parts of speech are connected with `goeswith`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (5; 16% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	Nous	il	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	wordform=nous
2	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	testé	tester	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	restaurant	restaurant	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	week	weekend	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	EXTPOS=NOUN|Type=MWE|wordform=week-end
8	end	end	NOUN	_	Gender=Fem|Number=Sing	7	goeswith	_	SpaceAfter=No|wordform=_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 goeswith	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=il
2	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	belle	beau	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
5	variété	variété	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
6	d'	de	ADP	_	_	7	case	_	SpaceAfter=No
7	espèces	espèce	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	18	punct	_	_
9	et	et	CCONJ	_	_	18	cc	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	voyage	voyage	NOUN	_	Gender=Masc|Number=Sing	18	nsubj	_	_
12	dans	dans	ADP	_	_	15	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
14	petit	petit	ADJ	_	Gender=Masc|Number=Sing	15	amod	_	_
15	sous	sous	ADP	_	_	11	nmod	_	EXTPOS=NOUN|Type=MWE|wordform=sous-marin
16	marin	marin	NOUN	_	Gender=Masc|Number=Sing	15	goeswith	_	wordform=_
17	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	_
18	parfait	parfait	ADJ	_	Gender=Masc|Number=Sing	2	conj	_	_
19	à	à	ADP	_	_	21	case	_	_
20	2-3	2-3	NUM	_	_	21	nummod	_	_
21	personnes	personne	NOUN	_	Gender=Fem|Number=Plur	18	obl:arg	_	SpaceAfter=No
22	,	,	PUNCT	_	_	28	punct	_	_
23	et	et	CCONJ	_	_	28	cc	_	_
24	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	28	nsubj:pass	_	SpaceAfter=No
25	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	aux:pass	_	_
26	très	très	ADV	_	_	27	advmod	_	_
27	bien	bien	ADV	_	_	28	advmod	_	_
28	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	conj	_	SpaceAfter=No
29	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Pas	pas	ADV	_	Polarity=Neg	0	root	_	wordform=pas
2	de	de	ADP	_	_	3	case	_	_
3	sèche	sécher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	obl:arg	_	EXTPOS=NOUN|Type=MWE|wordform=sèche-cheveux
4	cheveux	cheveu	NOUN	_	Gender=Masc|Number=Plur	3	goeswith	_	wordform=_
5	ni	ni	CCONJ	_	_	7	cc	_	_
6	de	de	ADP	_	_	7	case	_	_
7	prise	prise	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	_
8	rasoir	rasoir	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
9	dans	dans	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	salle	salle	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bains	bain	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


