---
layout: base
title:  'Statistics of xcomp in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="gv_cadhan-dep-xcomp-pred.html">xcomp:pred</a></tt>.

780 nodes (4%) are attached to their parents as `xcomp`.

780 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.94102564102564.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (704; 90% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (52; 7% instances), <tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	T'	bee	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	ad	ad	PRON	_	Number=Plur|Person=3	1	nsubj	_	_
3	faagail	faagail	NOUN	_	_	1	xcomp	_	_
4	bee	bee	NOUN	_	_	3	obj	_	_
5	ec	ec	ADP	_	_	6	case	_	_
6	oaieyn	oaie	NOUN	_	_	3	obl	_	_
7	ny	yn	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	merriu	marroo	NOUN	_	_	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	‘	‘	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Nagh	nagh	PART	_	PartType=Vb|Polarity=Neg	3	mark	_	_
3	vod	fod	VERB	_	Form=Ecl|Mood=Ind|Tense=Fut	0	root	_	_
4	shin	shin	PRON	_	Number=Plur|Person=1	3	nsubj	_	_
5	cur	cur	NOUN	_	_	3	xcomp	_	_
6	eab	eab	NOUN	_	_	5	obj	_	_
7	er	er	ADP	_	_	8	case	_	_
8	ratçhal	ratçhal	NOUN	_	_	5	xcomp	_	_
9	roish	roish	ADP	_	_	10	case	_	_
10	shin	shin	PRON	_	Number=Plur|Person=1	8	obl	_	_
11	,	,	PUNCT	_	_	12	punct	_	_
12	Yishag	jishag	NOUN	_	Form=Len	3	vocative	_	SpaceAfter=No
13	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Va	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	cabdil	cabdil	NOUN	_	_	1	nsubj	_	_
3	ayns	ayns	ADP	_	_	5	case	_	_
4	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	lioar	lioar	NOUN	_	_	2	nmod	_	_
6	shen	shen	DET	_	_	5	det	_	_
7	enmysit	enmysit	ADJ	_	_	1	xcomp:pred	_	_
8	"	"	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	Aigh	aigh	NOUN	_	_	7	xcomp	_	_
10	ny	yn	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	Yernee	Yernagh	PROPN	_	_	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	SpaceAfter=No
13	"	"	PUNCT	_	_	9	punct	_	_

~~~


