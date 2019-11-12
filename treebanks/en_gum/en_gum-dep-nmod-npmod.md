---
layout: base
title:  'Statistics of nmod:npmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>.

101 nodes (0%) are attached to their parents as `nmod:npmod`.

76 instances of `nmod:npmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.84158415841584.

The following 20 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (42; 42% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (31; 31% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nmod:npmod	color:blue
1	1	1	NUM	CD	NumType=Card	2	nummod	_	_
2	tablespoon	tablespoon	NOUN	NN	Number=Sing	9	nmod:npmod	_	_
3	(	(	PUNCT	-LRB-	_	5	punct	_	SpaceAfter=No
4	15	@card@	NUM	CD	NumType=Card	5	nummod	_	_
5	ml	ml	NOUN	NNS	Number=Plur	2	appos	_	SpaceAfter=No
6	)	)	PUNCT	-RRB-	_	5	punct	_	_
7	apple	apple	NOUN	NN	Number=Sing	8	compound	_	_
8	cider	cider	NOUN	NN	Number=Sing	9	compound	_	_
9	vinegar	vinegar	NOUN	NN	Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:npmod	color:blue
1	A	a	DET	DT	Definite=Ind|PronType=Art	2	det	_	_
2	day	day	NOUN	NN	Number=Sing	3	nmod:npmod	_	_
3	after	after	ADV	IN	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
6	counted	count	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	how	how	SCONJ	WRB	PronType=Int	8	mark	_	_
8	many	many	ADJ	JJ	Degree=Pos	9	amod	_	_
9	spores	spore	NOUN	NNS	Number=Plur	6	obj	_	_
10	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	12	aux	_	_
11	still	still	ADV	RB	_	12	advmod	_	_
12	alive	alive	ADJ	JJ	Degree=Pos	9	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:npmod	color:blue
1	There	there	PRON	EX	_	2	expl	_	_
2	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	also	also	ADV	RB	_	2	advmod	_	_
4	attractions	attraction	NOUN	NNS	Number=Plur	2	nsubj	_	_
5	on	on	ADP	IN	_	7	case	_	_
6	Coron	Coron	PROPN	NNP	Number=Sing	4	nmod	_	_
7	Island	Island	PROPN	NNP	Number=Sing	6	flat	_	_
8	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nmod:npmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


