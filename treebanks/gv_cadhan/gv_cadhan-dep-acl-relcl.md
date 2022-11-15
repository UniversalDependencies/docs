---
layout: base
title:  'Statistics of acl:relcl in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="gv_cadhan-dep-acl.html">acl</a></tt>.

120 nodes (1%) are attached to their parents as `acl:relcl`.

120 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86666666666667.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (71; 59% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (43; 36% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (6; 5% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Dennee	ennee	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
2	mee	mee	PRON	_	Number=Sing|Person=1	1	nsubj	_	_
3	my	my	DET	_	Number=Sing|Person=1|Poss=Yes	4	nmod:poss	_	_
4	aegid	aegid	NOUN	_	_	1	obj	_	_
5	er	er	ADP	_	_	6	case	_	_
6	coontey	coontey	NOUN	_	_	1	obl	_	_
7	'n	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	veggan	beggan	NOUN	_	Form=Len	6	nmod	_	_
9	cooinaghtyn	cooinaghtyn	NOUN	_	_	8	nmod	_	_
10	v'	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	8	acl:relcl	_	_
11	ec	ec	ADP	_	_	12	case	_	_
12	mee	mee	PRON	_	Number=Sing|Person=1	10	xcomp:pred	_	_
13	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl:relcl	color:blue
1	As	as	CCONJ	_	_	2	cc	_	_
2	jir	abbyr	VERB	_	Mood=Ind|Tense=Fut	0	root	_	_
3	fer	fer	NOUN	_	_	2	nsubj	_	_
4	rish	rish	ADP	_	_	5	case	_	_
5	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	2	obl	_	_
6	,	,	PUNCT	_	_	7	punct	_	_
7	Cre	cre	PRON	_	_	2	parataxis	_	_
8	ny	yn	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	lhottyn	lhott	NOUN	_	_	7	nmod	_	_
10	ad	ad	PRON	_	Number=Plur|Person=3	7	nsubj	_	_
11	shoh	shoh	DET	_	_	10	det	_	_
12	t'	bee	VERB	_	Mood=Ind|Tense=Pres	10	acl:relcl	_	_
13	ayns	ayns	ADP	_	_	15	case	_	_
14	dty	dty	DET	_	Number=Sing|Person=2|Poss=Yes	15	nmod:poss	_	_
15	laueyn	laue	NOUN	_	_	12	xcomp:pred	_	SpaceAfter=No
16	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	She	she	AUX	_	_	3	cop	_	_
2	'n	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	Nile	Nile	PROPN	_	_	0	root	_	_
4	ta	bee	VERB	_	Mood=Ind|Tense=Pres	3	acl:relcl	_	_
5	cur	cur	NOUN	_	_	4	xcomp	_	_
6	ushtey	ushtey	NOUN	_	_	5	obj	_	_
7	da	da	ADP	_	_	9	case	_	_
8	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Ejypt	Ejypt	PROPN	_	_	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


