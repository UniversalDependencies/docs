---
layout: base
title:  'Statistics of xcomp:pred in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="gv_cadhan-dep-xcomp.html">xcomp</a></tt>.

865 nodes (4%) are attached to their parents as `xcomp:pred`.

864 instances of `xcomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40462427745665.

The following 11 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (288; 33% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (278; 32% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (241; 28% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 xcomp:pred	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp:pred	color:blue
1	T'	bee	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	ny	ny	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	nmod:poss	_	_
4	ghooinney	dooinney	NOUN	_	Form=Len	1	xcomp:pred	_	_
5	lieh-hooillagh	lieh-hooillagh	ADJ	_	_	4	amod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp:pred	color:blue
1	S'	she	AUX	_	_	2	cop	_	_
2	treisht	treisht	NOUN	_	_	0	root	_	_
3	lesh	lesh	ADP	_	_	4	case	_	_
4	mee	mee	PRON	_	Number=Sing|Person=1	2	obl	_	_
5	dy	dy	PART	_	PartType=Cmpl	6	mark	_	_
6	vel	bee	VERB	_	Form=Ecl|Mood=Ind|Tense=Pres	2	csubj:cop	_	_
7	shiu	shiu	PRON	_	Number=Plur|Person=2	6	nsubj	_	_
8	braew	braew	ADJ	_	_	6	xcomp:pred	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


