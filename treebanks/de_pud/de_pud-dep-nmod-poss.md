---
layout: base
title:  'Statistics of nmod:poss in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-nmod.html">nmod</a></tt>.

271 nodes (1%) are attached to their parents as `nmod:poss`.

270 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45018450184502.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (228; 84% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (25; 9% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (7; 3% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Das	der	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|Person=3	2	obj	_	_
2	brauchen	brauchen	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
3	wir	wir	PRON	PRP	Case=Nom|Number=Plur|Person=1	2	nsubj	_	_
4	in	in	ADP	IN	_	6	case	_	_
5	unserem	unser	PRON	DTP$	Case=Dat|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1|PronType=Prs	6	nmod:poss	_	_
6	Land	Land	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	obl	_	_
7	nicht	nicht	ADV	RB	Degree=Pos|Polarity=Neg	2	advmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	_
9	Leute	Leute	NOUN	NN	Case=Nom|Number=Plur|Person=3	2	vocative	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Und	und	CCONJ	CC	_	3	cc	_	_
2	was	was	PRON	WP	Case=Nom|Person=3	3	nsubj	_	_
3	ist	sein	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	mit	mit	ADP	IN	_	6	case	_	_
5	Australiens	Australien	PROPN	NNP	Case=Gen|Gender=Neut|Number=Sing|Person=3	6	nmod:poss	_	_
6	Position	Position	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	3	obl	_	SpaceAfter=No
7	?	?	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Diese	dies	DET	DT	Case=Nom|Definite=Def|Number=Plur|Person=3	11	nsubj	_	_
2	waren	sein	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	11	aux	_	_
3	bis	bis	ADP	IN	_	6	case	_	_
4	nach	nach	ADP	IN	_	6	case	_	_
5	Smith'	Smith	NOUN	''	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
6	Tod	Tod	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	11	obl	_	_
7	fast	fast	ADV	RB	Degree=Pos	8	advmod	_	_
8	vollkommen	vollkommen	ADV	RB	Degree=Pos	11	advmod	_	_
9	in	in	ADP	IN	_	10	case	_	_
10	Vergessenheit	Vergessenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	11	obl	_	_
11	geraten	geraten	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


