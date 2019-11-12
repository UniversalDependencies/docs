---
layout: base
title:  'Statistics of amod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `amod`

This relation is universal.

1089 nodes (5%) are attached to their parents as `amod`.

1086 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19926538108356.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1055; 97% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (27; 2% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	5.000	5.000	NUM	CD	NumType=Card	2	nummod	_	_
2	$	$	SYM	SYM	_	0	root	_	_
3	pro	pro	ADP	IN	_	4	case	_	_
4	Person	Person	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	8	det	_	_
7	erlaubte	erlaubt	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Person=3	8	amod	_	InflectionType=Weak
8	Maximum	Maximum	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	2	appos	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	Darunter	darunter	ADV	RB	Degree=Pos	2	advmod	_	_
2	ist	sein	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	5	det	_	_
4	ehemalige	ehemalig	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	5	amod	_	InflectionType=Weak
5	Klosterbereich	Klosterbereich	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
6	mit	mit	ADP	IN	_	8	case	_	_
7	der	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|Person=3	8	det	_	_
8	Stiftskirche	Stiftskirche	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	5	nmod	_	_
9	St.	St.	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	10	amod	_	Proper=True
10	Peter	Peter	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	appos	_	_
11	und	und	CCONJ	CC	_	12	cc	_	Proper=True
12	Paul	Paul	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 amod	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|Person=3	2	det	_	_
2	Älteren	Ältere	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur|Person=3	9	nsubj	_	InflectionType=Weak
3	werden	werden	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	9	aux	_	_
4	500	500	NUM	CD	NumType=Card	5	nummod	_	_
5	€	€	SYM	SYM	_	9	obj	_	_
6	von	von	ADP	APPR	_	8	case	_	_
7	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	8	det	_	_
8	Staat	Staat	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	9	obl	_	_
9	bekommen	bekommen	VERB	VB	_	0	root	_	SpaceAfter=No
10	,	,	PUNCT	,	_	20	punct	_	_
11	die	der	PRON	REL	Case=Acc|Gender=Masc|Number=Plur|Person=3	20	obj	_	_
12	sie	sie	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3	20	nsubj	_	_
13	bis	bis	ADP	IN	_	18	case	_	_
14	zu	zu	ADP	APPR	_	18	case	_	_
15	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	18	det	_	_
16	31	31	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	18	amod	_	SpaceAfter=No
17	.	.	PUNCT	.	_	16	punct	_	_
18	Dezember	Dezember	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	20	obl:tmod	_	_
19	2017	2017	NUM	CD	NumType=Card	18	nummod	_	_
20	ausgegeben	ausgeben	VERB	VBN	Tense=Past	5	acl:relcl	_	_
21	haben	haben	AUX	VB	_	20	aux	_	_
22	müssen	müssen	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	20	aux	_	SpaceAfter=No
23	.	.	PUNCT	.	_	9	punct	_	_

~~~


