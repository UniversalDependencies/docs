---
layout: base
title:  'Statistics of nsubj in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `nsubj`

This relation is universal.

2478 nodes (12%) are attached to their parents as `nsubj`.

2475 instances of `nsubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15738498789346.

The following 13 pairs of parts of speech are connected with `nsubj`: <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (1693; 68% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (648; 26% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (67; 3% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (22; 1% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj	color:blue
1	Ta	bee	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	queig	queig	NUM	_	_	3	nummod	_	_
3	booaghyn	booa	NOUN	_	_	1	nsubj	_	_
4	jeig	jeig	NOUN	_	_	2	compound	_	_
5	ec	ec	ADP	_	_	6	case	_	_
6	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 nsubj	color:blue
1	“	“	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Dy	dy	PART	_	PartType=Ad	3	mark	_	_
3	jarroo	jarroo	ADJ	_	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	s'	she	AUX	_	_	6	cop	_	_
6	yindyssagh	yindyssagh	ADJ	_	_	0	root	_	_
7	er	er	ADP	_	_	8	case	_	_
8	fud	fud	NOUN	_	_	6	obl	_	_
9	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	ennym	ennym	NOUN	_	_	6	nsubj	_	_
11	shen	shen	DET	_	_	10	det	_	SpaceAfter=No
12	”	”	PUNCT	_	_	6	punct	_	_
13	as	as	VERB	_	Mood=Ind|Tense=Past	6	parataxis	_	_
14	Cú	Cú	PROPN	_	_	13	nsubj	_	_
15	Chulainn	Chulainn	PROPN	_	_	14	flat	_	_

~~~


