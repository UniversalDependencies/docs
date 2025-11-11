---
layout: base
title:  'Statistics of orphan in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `orphan`

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

6 instances of `orphan` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (2; 20% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 10% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 10% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 orphan	color:blue
1	Alle	alle	DET	PIDAT	Case=Nom|Number=Plur|PronType=Tot	2	det	_	_
2	Schulen	Schule	NOUN	NN	Gender=Fem|Number=Plur	0	root	_	_
3	an	an	ADP	APPR	AdpType=Prep|Case=Acc	5	case	_	_
4	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Netz	Netz	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	2	orphan	_	_
6	und	und	CCONJ	KON	_	8	cc	_	_
7	jedem	jeder	DET	PIAT	Case=Dat|Gender=Masc|Number=Sing|PronType=Tot	8	det	_	_
8	Schüler	Schüler	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	_
9	einen	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	10	det	_	_
10	Laptop	Laptop	NOUN	NN	Gender=Masc|Number=Sing	8	orphan	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 orphan	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	Anwenderzahlen	Anwenderzahl	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
3	liegen	liegen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	nach	nach	ADV	ADV	_	3	advmod	_	_
5	wie	wie	CCONJ	KOKOM	ConjType=Comp	6	mark	_	_
6	vor	vor	ADV	ADV	_	4	advcl	_	_
7	unter	unter	ADP	APPR	AdpType=Prep|Case=Dat	9	case	_	_
8	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	100.000-Marke	100.000-Marke	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	3	obl	_	_
10	,	,	PUNCT	$,	PunctType=Comm	16	punct	_	_
11	während	während	SCONJ	KOUS	_	16	mark	_	_
12	T-Online	T-Online	PROPN	NE	Case=Nom|Number=Sing	16	nsubj	_	_
13	1,7	1,7	NUM	CARD	Number=Plur|NumType=Card	14	nummod	_	_
14	Millionen	Million	NOUN	NN	Gender=Fem|Number=Plur	15	nummod	_	_
15	Teilnehmer	Teilnehmer	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	16	obj	_	_
16	zählt	zählen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
17	,	,	PUNCT	$,	PunctType=Comm	16	punct	_	_
18	AOL	AOL	PROPN	NE	Case=Nom|Number=Sing	16	conj	_	_
19	400.000	400.000	NUM	CARD	Number=Plur|NumType=Card	18	orphan	_	_
20	und	und	CCONJ	KON	_	21	cc	_	_
21	CompuServe	CompuServe	PROPN	NE	_	16	conj	_	_
22	280.000	280.000	NUM	CARD	Number=Plur|NumType=Card	21	orphan	_	_
23	.	.	PUNCT	$.	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 13 orphan	color:blue
1	Gespräche	Gespräch	NOUN	NN	Gender=Neut|Number=Plur	5	nsubj	_	_
2	in	in	ADP	APPR	AdpType=Prep|Case=Dat	4	case	_	_
3	diesem	dieser	DET	PDAT	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	Bereich	Bereich	NOUN	NN	Gender=Masc|Number=Sing	1	nmod	_	_
5	kosten	kosten	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	danach	danach	ADV	PROAV	_	5	advmod	_	_
7	tagsüber	tagsüber	ADV	ADV	_	5	advmod	_	_
8	18	18	NUM	CARD	Number=Plur|NumType=Card	9	nummod	_	_
9	Pfennige	Pfennig	NOUN	NN	Gender=Masc|Number=Plur	5	obj	_	_
10	pro	pro	ADP	APPR	AdpType=Prep|Case=Dat	11	case	_	_
11	Minute	Minute	NOUN	NN	Gender=Fem|Number=Sing	9	nmod	_	_
12	,	,	PUNCT	$,	PunctType=Comm	13	punct	_	_
13	abends	abends	ADV	ADV	_	19	orphan	_	_
14	und	und	CCONJ	KON	_	17	cc	_	_
15	an	an	ADP	APPR	AdpType=Prep|Case=Dat	17	case	_	_
16	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	17	det	_	_
17	Wochenende	Wochenende	NOUN	NN	Gender=Neut|Number=Sing	13	conj	_	_
18	10	10	NUM	CARD	Number=Plur|NumType=Card	19	nummod	_	_
19	Pfennige	Pfennig	NOUN	NN	Gender=Masc|Number=Plur	5	conj	_	_
20	.	.	PUNCT	$.	PunctType=Peri	5	punct	_	_

~~~


