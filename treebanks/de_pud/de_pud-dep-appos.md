---
layout: base
title:  'Statistics of appos in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `appos`

This relation is universal.

265 nodes (1%) are attached to their parents as `appos`.

265 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.39622641509434.

The following 13 pairs of parts of speech are connected with `appos`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (135; 51% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (64; 24% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (39; 15% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (13; 5% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Weiss	Weiss	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	11	nsubj:pass	_	_
2	wurde	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	11	aux:pass	_	_
3	mit	mit	ADP	IN	_	5	case	_	_
4	den	der	DET	DT	Case=Dat|Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	Literaturpreisen	Literaturpreis	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	11	obl	_	_
6	der	der	DET	DT	Case=Gen|Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	Städte	Stadt	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
8	Köln	Köln	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing	7	appos	_	_
9	und	und	CCONJ	CC	_	10	cc	_	_
10	Bremen	Bremen	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing	8	conj	_	_
11	geehrt	ehren	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	Wieder	wieder	ADV	RB	Degree=Pos	2	advmod	_	_
2	zurück	zurück	ADV	RB	Degree=Pos	7	advmod	_	_
3	in	in	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Zug	Zug	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	2	punct	_	_
7	fahren	fahren	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
8	wir	wir	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
9	weiter	weit	ADV	RB	Degree=Pos	7	advmod	_	_
10	Richtung	Richtung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	_
11	Süden	Süden	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	10	appos	_	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 appos	color:blue
1	Ihr	ihr	DET	DTP$	Case=Nom|Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	3	det:poss	_	_
2	erster	erst	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	InflectionType=Mixed
3	König	König	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	Mojmír	Mojmír	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	I.	I.	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	5	appos	_	InflectionType=Weak|Proper=True
7	(	(	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	herrschte	herrschen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	parataxis	_	_
9	830	830	NUM	CD	NumType=Card	8	obl:tmod	_	_
10	-	-	NUM	_	NumType=Card	9	compound	_	_
11	846	846	NUM	_	NumType=Card	9	compound	_	SpaceAfter=No
12	)	)	PUNCT	)	_	8	punct	_	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


