---
layout: base
title:  'Statistics of nmod:poss in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>.

2096 nodes (2%) are attached to their parents as `nmod:poss`.

2093 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69751908396947.

The following 14 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1606; 77% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (192; 9% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (169; 8% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (76; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (24; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	His	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	_	Entity=(abstract-33(person-3)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	_	Entity=(abstract-13)abstract-33)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	_	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
8	to	to	ADP	IN	_	10	case	_	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(event-34
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	_	Entity=event-34)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod:poss	color:blue
1	One	One	NUM	CD	NumType=Card	0	root	_	Entity=(object-105
2	of	of	ADP	IN	_	6	case	_	_
3	Norton	Norton	PROPN	NNP	Number=Sing	6	nmod:poss	_	Entity=(person-1|SpaceAfter=No
4	's	's	PART	POS	_	3	case	_	Entity=person-1)
5	undated	undated	ADJ	JJ	Degree=Pos|Polarity=Neg	6	amod	_	_
6	proclamations	proclamation	NOUN	NNS	Number=Plur	1	nmod	_	Entity=object-105)

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Entity=(abstract-14)|SpaceAfter=No
2	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	best	good	ADJ	JJS	Degree=Sup	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	Entity=(abstract-14
5	wash	wash	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	adults	adult	NOUN	NNS	Number=Plur	8	nmod:poss	_	Entity=(object-1|SpaceAfter=No
7	’	's	PART	POS	_	6	case	_	_
8	overalls	overall	NOUN	NNS	Number=Plur	5	obj	_	Entity=object-1)
9	alone	alone	ADV	RB	_	5	advmod	_	Entity=abstract-14)|SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	especially	especially	ADV	RB	_	12	advmod	_	_
12	men	man	NOUN	NNS	Number=Plur	8	appos	_	SpaceAfter=No
13	’s	's	PART	POS	_	12	case	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


