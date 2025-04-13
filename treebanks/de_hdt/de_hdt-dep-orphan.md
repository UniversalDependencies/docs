---
layout: base
title:  'Statistics of orphan in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `orphan`

This relation is universal.

9 nodes (0%) are attached to their parents as `orphan`.

6 instances of `orphan` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (4; 44% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (2; 22% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 11% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 11% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 11% instances).


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
2	Anwenderzahlen	Zahl	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
3	liegen	liegen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	nach	nach	ADV	ADV	_	3	advmod	_	_
5	wie	wie	CCONJ	KOKOM	ConjType=Comp	6	mark	_	_
6	vor	vor	ADV	ADV	_	4	advcl	_	_
7	unter	unter	ADP	APPR	AdpType=Prep|Case=Dat	9	case	_	_
8	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	100.000-Marke	Marke	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	3	obl	_	_
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 orphan	color:blue
1	"	"	PUNCT	$(	PunctType=Brck	6	punct	_	_
2	Mit	Mit	ADP	APPR	AdpType=Prep|Case=Dat	5	case	_	_
3	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	einen	ein	DET	ADJA	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	5	det	_	_
5	Hand	Hand	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	_
6	hält	halten	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
8	technisches	technisch	ADJ	ADJA	Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	Gerät	Gerät	NOUN	NN	Gender=Neut|Number=Sing	6	obj	_	_
10	an	an	ADP	APPR	AdpType=Prep|Case=Acc	13	case	_	_
11	den	der	DET	ART	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	hämmernden	hämmern	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	Puls	Puls	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	_
14	des	der	DET	ART	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	Zeitgeistes	Zeitgeist	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
16	,	,	PUNCT	$,	PunctType=Comm	22	punct	_	_
17	mit	mit	ADP	APPR	AdpType=Prep|Case=Dat	19	case	_	_
18	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	anderen	anderer	DET	PIS	Case=Dat|Gender=Fem|Number=Sing|PronType=Ind	22	orphan	_	_
20	einen	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	22	det	_	_
21	weichen	weich	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	22	amod	_	_
22	Bleistift	Bleistift	NOUN	NN	Gender=Masc|Number=Sing	9	conj	_	_
23	.	.	PUNCT	$.	PunctType=Peri	6	punct	_	_
24	"	"	PUNCT	$(	PunctType=Brck	6	punct	_	_

~~~


