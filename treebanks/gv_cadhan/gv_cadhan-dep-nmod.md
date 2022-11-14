---
layout: base
title:  'Statistics of nmod in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="gv_cadhan-dep-nmod-poss.html">nmod:poss</a></tt>.

895 nodes (4%) are attached to their parents as `nmod`.

892 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01564245810056.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (458; 51% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (241; 27% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (85; 9% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (83; 9% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="gv_cadhan-pos-NUM.html">NUM</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	She	she	AUX	_	_	2	cop	_	_
2	dooinney-ooasle	dooinney-ooasle	NOUN	_	_	0	root	_	_
3	va	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	2	csubj:cleft	_	_
4	'n	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	ayr	ayr	NOUN	_	_	3	nsubj	_	_
6	ec	ec	ADP	_	_	7	case	_	_
7	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	5	nmod	_	_
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nmod	color:blue
1	She	she	AUX	_	_	3	cop	_	_
2	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	Vritaan	Britaan	PROPN	_	Form=Len	0	root	_	_
4	y	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	lieh-innys	lieh-innys	NOUN	_	_	3	nsubj	_	_
6	smoo	mooar	ADJ	_	Degree=Cmp,Sup	5	amod	_	_
7	ayns	ayns	ADP	_	_	9	case	_	_
8	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Rank	Frank	PROPN	_	Form=Len	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


