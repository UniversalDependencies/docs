---
layout: base
title:  'Statistics of appos in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `appos`

This relation is universal.

265 nodes (1%) are attached to their parents as `appos`.

265 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40377358490566.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (135; 51% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (66; 25% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (41; 15% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (13; 5% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Weiss	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj:pass	_	_
2	wurde	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	11	aux:pass	_	_
3	mit	_	ADP	IN	_	5	case	_	_
4	den	_	DET	DT	Case=Dat|Definite=Def|Gender=Masc|Number=Plur|Person=3	5	det	_	_
5	Literaturpreisen	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur|Person=3	11	obl	_	_
6	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Plur|Person=3	7	det	_	_
7	Städte	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur|Person=3	5	nmod	_	_
8	Köln	_	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	7	appos	_	_
9	und	_	CCONJ	CC	_	10	cc	_	_
10	Bremen	_	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	8	conj	_	_
11	geehrt	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	Wieder	_	ADV	RB	Degree=Pos	2	advmod	_	_
2	zurück	_	ADV	RB	Degree=Pos	7	advmod	_	_
3	in	in	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	5	det	_	_
5	Zug	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	2	obl	_	SpaceAfter=No
6	,	_	PUNCT	,	_	2	punct	_	_
7	fahren	_	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
8	wir	_	PRON	PRP	Case=Nom|Number=Plur|Person=1	7	nsubj	_	_
9	weiter	_	ADV	RB	Degree=Pos	7	advmod	_	_
10	Richtung	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	7	advmod	_	_
11	Süden	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	appos	_	SpaceAfter=No
12	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 appos	color:blue
1	Ihr	_	PRON	DTP$	Case=Nom|Gender=Masc|Number=Sing|Person=3|Person[psor]=3|PronType=Prs	3	nmod:poss	_	_
2	erster	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	3	amod	_	InflectionType=Mixed
3	König	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
4	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	Mojmír	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	I.	_	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	appos	_	InflectionType=Weak|Proper=True
7	(	_	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	herrschte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	parataxis	_	_
9	830	_	NUM	CD	NumType=Card	8	obl:tmod	_	_
10	-	_	NUM	_	NumType=Card	9	compound	_	_
11	846	_	NUM	_	NumType=Card	9	compound	_	SpaceAfter=No
12	)	_	PUNCT	)	_	8	punct	_	SpaceAfter=No
13	.	_	PUNCT	.	_	5	punct	_	_

~~~


