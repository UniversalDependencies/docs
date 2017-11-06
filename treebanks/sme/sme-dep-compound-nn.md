---
layout: base
title:  'Statistics of compound:nn in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="sme-dep-compound.html">compound</a></tt>.

9 nodes (0%) are attached to their parents as `compound:nn`.

9 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:nn`: <tt><a href="sme-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="sme-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme-pos-PROPN.html">PROPN</a></tt> (4; 44% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:nn	color:blue
1	Ávvir	ávvir	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	ii	ii	VERB	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	3	aux:neg	_	_
3	ožžon	oažžut	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	rektor	rektor	NOUN	N	Case=Nom|Number=Sing	5	compound:nn	_	_
5	Mats	Mats	PROPN	N	_	3	obj	_	_
6	Steinfjella	Steinfjell	PROPN	N	Case=Acc|Number=Sing	5	flat	_	_
7	jearahallamii	jearahallan	NOUN	N	Case=Ill|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:nn	color:blue
1	Dát	dát	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	4	nsubj	_	_
2	ledje	leat	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	Jáhkoba	Jáhkob	PROPN	N	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	bártnit	bárdni	NOUN	N	Case=Nom|Number=Plur	0	root	_	_
5	guđet	guhte	PRON	Pron	Case=Nom|Number=Plur|PronType=Rel	6	nsubj	_	_
6	riegádedje	riegádit	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
7	sutnje	son	PRON	Pron	Case=Ill|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
8	Paddan	Paddan	PROPN	N	Case=Nom|Number=Sing	9	compound:nn	_	_
9	Aramis	Aram	PROPN	N	Case=Loc|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


