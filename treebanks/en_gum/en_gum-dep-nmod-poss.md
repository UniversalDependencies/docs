---
layout: base
title:  'Statistics of nmod:poss in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>.

1285 nodes (2%) are attached to their parents as `nmod:poss`.

1283 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70972762645914.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (985; 77% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (118; 9% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (99; 8% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (54; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	made	make	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	noises	noise	NOUN	NNS	Number=Plur	2	obj	_	_
4	with	with	ADP	IN	_	6	case	_	_
5	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	heels	heel	NOUN	NNS	Number=Plur	2	obl	_	_
7	but	but	CCONJ	CC	_	11	cc	_	_
8	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
9	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	cop	_	_
10	too	too	ADV	RB	_	11	advmod	_	_
11	loud	loud	ADJ	JJ	Degree=Pos	2	conj	_	_
12	so	so	SCONJ	IN	_	14	mark	_	_
13	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
14	stopped	stop	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	SpaceAfter=No
2	’s	's	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	best	good	ADJ	JJS	Degree=Sup	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	_
5	wash	wash	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	adults	adult	NOUN	NNS	Number=Plur	8	nmod:poss	_	SpaceAfter=No
7	’	's	PART	POS	_	6	case	_	_
8	overalls	overall	NOUN	NNS	Number=Plur	5	obj	_	_
9	alone	alone	ADV	RB	_	5	advmod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	especially	especially	ADV	RB	_	12	advmod	_	_
12	men	man	NOUN	NNS	Number=Plur	8	appos	_	SpaceAfter=No
13	’s	's	PART	POS	_	12	case	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod:poss	color:blue
1	One	One	NUM	CD	NumType=Card	0	root	_	_
2	of	of	ADP	IN	_	6	case	_	_
3	Norton	Norton	PROPN	NNP	Number=Sing	6	nmod:poss	_	SpaceAfter=No
4	's	's	PART	POS	_	3	case	_	_
5	undated	undated	ADJ	JJ	Degree=Pos	6	amod	_	_
6	proclamations	proclamation	NOUN	NNS	Number=Plur	1	nmod	_	_

~~~


