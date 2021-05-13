---
layout: base
title:  'Statistics of xcomp:pred in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="gv_cadhan-dep-xcomp.html">xcomp</a></tt>.

852 nodes (4%) are attached to their parents as `xcomp:pred`.

851 instances of `xcomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40023474178404.

The following 11 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (282; 33% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (271; 32% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (241; 28% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="gv_cadhan-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp:pred	color:blue
1	Va	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	er	er	ADP	_	_	4	case	_	_
4	mee	mee	PRON	_	Number=Sing|Person=1	1	xcomp:pred	_	_
5	tughtey	tughtey	NOUN	_	_	1	xcomp	_	_
6	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp:pred	color:blue
1	Ta	bee	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	'n	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	lioar	lioar	NOUN	_	_	1	nsubj	_	_
4	ass	ass	ADP	_	_	5	case	_	_
5	clou	clou	NOUN	_	_	1	xcomp:pred	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 xcomp:pred	color:blue
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


