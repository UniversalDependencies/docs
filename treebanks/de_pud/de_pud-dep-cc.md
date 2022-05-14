---
layout: base
title:  'Statistics of cc in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="de_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

723 nodes (3%) are attached to their parents as `cc`.

715 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18118948824343.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (309; 43% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (270; 37% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (70; 10% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (42; 6% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (13; 2% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Manchmal	manchmal	ADV	RB	Degree=Pos	6	advmod	_	_
2	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
3	das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	6	nsubj	_	_
4	wie	wie	CCONJ	CC	_	6	cc	_	_
5	eine	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Person=3	6	det	_	_
6	Superkraft	Superkraft	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cc	color:blue
1	Was	was	PRON	WP	Case=Acc|Person=3	3	obj	_	_
2	sie	sie	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
3	sagt	sagen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	und	und	CCONJ	CC	_	7	cc	_	_
5	was	was	PRON	WP	Case=Acc|Person=3	7	obj	_	_
6	sie	sie	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
7	tut	tun	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	_
8	-	-	PUNCT	-	_	12	punct	_	_
9	eigentlich	eigentlich	ADV	RB	Degree=Pos	12	advmod	_	_
10	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
11	es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	12	nsubj	_	_
12	unglaublich	unglaublich	ADJ	JJ	Degree=Pos	3	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	2	det	_	_
2	Stadtstaat	Stadtstaat	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
3	entwickelte	entwickeln	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	sich	er|es|sie	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Rcp	3	obj	_	_
5	zu	zu	ADP	APPR	_	8	case	_	_
6	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|Person=3	8	det	_	_
7	selben	selb	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Person=3	8	amod	_	InflectionType=Weak
8	Zeit	Zeit	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	3	obl	_	_
9	wie	wie	CCONJ	CC	_	10	cc	_	_
10	Sukhothai	Sukhothai	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	3	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


