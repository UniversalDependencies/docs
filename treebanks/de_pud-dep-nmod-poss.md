---
layout: base
title:  'Statistics of nmod:poss in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="de_pud-dep-nmod-gmod.html">nmod:gmod</a></tt>.

272 nodes (1%) are attached to their parents as `nmod:poss`.

271 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45588235294118.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (229; 84% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (25; 9% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (7; 3% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Das	_	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|Person=3	2	obj	_	_
2	brauchen	_	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
3	wir	_	PRON	PRP	Case=Nom|Number=Plur|Person=1	2	nsubj	_	_
4	in	_	ADP	IN	_	6	case	_	_
5	unserem	_	PRON	DTP$	Case=Dat|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1|PronType=Prs	6	nmod:poss	_	_
6	Land	_	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	obl	_	_
7	nicht	_	ADV	RB	Degree=Pos|Polarity=Neg	2	advmod	_	SpaceAfter=No
8	,	_	PUNCT	,	_	9	punct	_	_
9	Leute	_	NOUN	NN	Case=Nom|Number=Plur|Person=3	2	vocative	_	SpaceAfter=No
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Und	_	CCONJ	CC	_	3	cc	_	_
2	was	_	PRON	WP	Case=Nom|Person=3	3	nsubj	_	_
3	ist	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	mit	_	ADP	IN	_	6	case	_	_
5	Australiens	_	PROPN	NNP	Case=Gen|Gender=Neut|Number=Sing|Person=3	6	nmod:poss	_	_
6	Position	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	3	obl	_	SpaceAfter=No
7	?	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Diese	_	DET	DT	Case=Nom|Definite=Def|Number=Plur|Person=3	11	nsubj	_	_
2	waren	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	11	aux	_	_
3	bis	_	ADP	IN	_	6	case	_	_
4	nach	_	ADP	IN	_	6	case	_	_
5	Smith'	_	NOUN	''	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
6	Tod	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	11	obl	_	_
7	fast	_	ADV	RB	Degree=Pos	8	advmod	_	_
8	vollkommen	_	ADV	RB	Degree=Pos	11	advmod	_	_
9	in	_	ADP	IN	_	10	case	_	_
10	Vergessenheit	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	11	obl	_	_
11	geraten	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


