---
layout: base
title:  'Statistics of nmod:npmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>.

105 nodes (0%) are attached to their parents as `nmod:npmod`.

77 instances of `nmod:npmod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65714285714286.

The following 20 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (42; 40% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (31; 30% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nmod:npmod	color:blue
1	1	1	NUM	CD	NumType=Card	2	nummod	_	Discourse=ROOT:19|Entity=(substance-19
2	tablespoon	tablespoon	NOUN	NN	Number=Sing	9	nmod:npmod	_	_
3	(	(	PUNCT	-LRB-	_	5	punct	_	Discourse=restatement:20->19|SpaceAfter=No
4	15	15	NUM	CD	NumType=Card	5	nummod	_	Entity=(substance-19
5	ml	ml	NOUN	NNS	Number=Plur	2	appos	_	Entity=substance-19)|SpaceAfter=No
6	)	)	PUNCT	-RRB-	_	5	punct	_	_
7	apple	apple	NOUN	NN	Number=Sing	8	compound	_	Discourse=same-unit:21->19|Entity=(substance-20(plant-21)
8	cider	cider	NOUN	NN	Number=Sing	9	compound	_	Entity=substance-20)
9	vinegar	vinegar	NOUN	NN	Number=Sing	0	root	_	Entity=substance-19)

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:npmod	color:blue
1	A	a	DET	DT	Definite=Ind|PronType=Art	2	det	_	Discourse=sequence:121->118|Entity=(time-167
2	day	day	NOUN	NN	Number=Sing	3	nmod:npmod	_	Entity=time-167)
3	after	after	ADV	IN	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	Entity=(person-18)
6	counted	count	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	how	how	SCONJ	WRB	PronType=Int	8	mark	_	Entity=(plant-168
8	many	many	ADJ	JJ	Degree=Pos	9	amod	_	_
9	spores	spore	NOUN	NNS	Number=Plur	6	obj	_	Entity=plant-168)
10	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	12	aux	_	_
11	still	still	ADV	RB	_	12	advmod	_	_
12	alive	alive	ADJ	JJ	Degree=Pos	9	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	F-E	F-E	PROPN	NNP	Number=Sing	2	nsubj	_	Discourse=elaboration:99->95|Entity=(abstract-153)
2	focuses	focus	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	attention	attention	NOUN	NN	Number=Sing	2	obj	_	Entity=(abstract-154)
4	on	on	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	Entity=(abstract-123
6	message	message	NOUN	NN	Number=Sing	2	obl	_	_
7	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nmod:npmod	_	Entity=abstract-123)|SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	in	in	ADP	IN	_	11	case	_	_
10	both	both	CCONJ	DT	_	11	cc:preconj	_	Entity=(abstract-134
11	form	form	NOUN	NN	Number=Sing	2	obl	_	Entity=(abstract-128)
12	and	and	CCONJ	CC	_	13	cc	_	_
13	content	content	NOUN	NN	Number=Sing	11	conj	_	Entity=(abstract-125)abstract-134)|SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


