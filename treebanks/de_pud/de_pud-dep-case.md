---
layout: base
title:  'Statistics of case in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `case`

This relation is universal.

2053 nodes (10%) are attached to their parents as `case`.

2043 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97077447637604.

The following 14 pairs of parts of speech are connected with `case`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (1559; 76% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (339; 17% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (60; 3% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (31; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (14; 1% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (14; 1% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (12; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-SCONJ.html">SCONJ</a></tt> (11; 1% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	Er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	arbeitete	arbeiten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	ein	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|Person=3	4	det	_	_
4	Jahrzent	Jahrzent	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	2	obl:tmod	_	_
5	für	für	ADP	IN	_	7	case	_	_
6	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	7	det	_	_
7	BBC	BBC	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Und	und	CCONJ	CC	_	3	cc	_	_
2	was	was	PRON	WP	Case=Nom|Person=3	3	nsubj	_	_
3	ist	sein	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	mit	mit	ADP	IN	_	6	case	_	_
5	den	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Plur|Person=3	6	det	_	_
6	Parteien	Partei	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	3	obl	_	_
7	in	in	ADP	IN	_	8	case	_	_
8	was	was	PRON	WP	Case=Dat|Person=3	3	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	in	in	ADP	IN	_	12	case	_	_
11	historischen	historisch	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur|Person=3	12	amod	_	InflectionType=Strong
12	Rechten	Recht	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	8	conj	_	SpaceAfter=No
13	?	?	PUNCT	.	_	3	punct	_	_

~~~


