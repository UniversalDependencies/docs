---
layout: base
title:  'Statistics of amod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `amod`

This relation is universal.

1078 nodes (5%) are attached to their parents as `amod`.

1075 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20222634508349.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1041; 97% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (27; 3% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 amod	color:blue
1	Winstone	Winstone	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj:pass	_	_
2	wurde	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	17	aux:pass	_	_
3	an	an	ADP	APPR	_	6	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	6	det	_	_
5	4.	4.	NOUN	.	Case=Dat|Gender=Masc|Number=Sing|Person=3	6	amod	_	_
6	Oktober	Oktober	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	obl:tmod	_	_
7	1988	1988	NUM	CD	NumType=Card	6	nummod	_	_
8	und	und	CCONJ	CC	_	13	cc	_	_
9	erneut	erneut	ADV	RB	Degree=Pos	13	advmod	_	_
10	an	an	ADP	APPR	_	13	case	_	_
11	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	13	det	_	_
12	19.	19.	NOUN	.	Case=Dat|Gender=Masc|Number=Sing|Person=3	13	amod	_	_
13	März	März	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	obl:tmod	_	_
14	1993	1993	NUM	CD	NumType=Card	13	nummod	_	_
15	für	für	ADP	IN	_	16	case	_	_
16	bankrott	bankrott	ADV	RB	Degree=Pos	17	obl	_	_
17	erklärt	erklären	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
18	.	.	PUNCT	.	_	17	punct	_	_

~~~


