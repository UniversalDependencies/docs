---
layout: base
title:  'Statistics of compound:prt in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-compound.html">compound</a></tt>.

380 nodes (0%) are attached to their parents as `compound:prt`.

378 instances of `compound:prt` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29473684210526.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (357; 94% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (11; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Get	get	VERB	VB	VerbForm=Inf	0	root	_	_
2	in	in	ADP	IN	_	1	compound:prt	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Stir	stir	VERB	VB	VerbForm=Inf	0	root	_	_
2	together	together	ADV	RB	_	1	compound:prt	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	flour	flour	NOUN	NN	Number=Sing	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	sugar	sugar	NOUN	NN	Number=Sing	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	baking	bake	NOUN	NN	Number=Sing	9	compound	_	_
9	powder	powder	NOUN	NN	Number=Sing	4	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	baking	bake	NOUN	NN	Number=Sing	12	compound	_	_
12	soda	soda	NOUN	NN	Number=Sing	4	conj	_	_
13	and	and	CCONJ	CC	_	14	cc	_	_
14	salt	salt	NOUN	NN	Number=Sing	4	conj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Filter	VV	NOUN	NN	Number=Sing	0	root	_	_
2	out	out	ADP	RP	_	1	compound:prt	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	_
4	remaining	remain	VERB	VBG	VerbForm=Ger	7	amod	_	_
5	Skittle	skittle	PROPN	NNP	Number=Sing	7	compound	_	_
6	"	"	PUNCT	``	_	7	punct	_	SpaceAfter=No
7	insides	inside	NOUN	NNS	Number=Plur	1	obj	_	SpaceAfter=No
8	"	"	PUNCT	''	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


