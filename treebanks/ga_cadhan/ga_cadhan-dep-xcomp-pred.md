---
layout: base
title:  'Statistics of xcomp:pred in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-xcomp.html">xcomp</a></tt>.

106 nodes (3%) are attached to their parents as `xcomp:pred`.

106 instances of `xcomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.14150943396226.

The following 9 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (35; 33% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (30; 28% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (23; 22% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (6; 6% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (3; 3% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp:pred	color:blue
1	Ní	ní	PART	_	PartType=Vb|Polarity=Neg	2	advmod	_	_
2	raibh	bí	VERB	_	Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
3	truaigh	trua	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
4	ar	ar	ADP	_	_	3	nmod	_	_
5	bith	bith	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	fixed	_	_
6	agam	ag	ADP	_	Number=Sing|Person=1	2	xcomp:pred	_	_
7	dhi	de	ADP	_	Form=Len|Gender=Fem|Number=Sing|Person=3	2	obl:prep	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp:pred	color:blue
1	Bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	canna	canna	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
3	mór	mór	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
4	leanna	leann	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	taobh	taobh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
6	thiar	thiar	ADV	_	_	5	advmod	_	_
7	dhíom	de	ADP	_	Form=Len|Number=Sing|Person=1	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp:pred	color:blue
1	Tá	bí	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	féin	féin	PRON	_	Reflex=Yes	2	nmod	_	_
4	sásta	sásta	ADJ	_	Degree=Pos	1	xcomp:pred	_	_
5	léithi	le	ADP	_	Gender=Fem|Number=Sing|Person=3	4	obl:prep	_	_
6	freisin	freisin	ADV	_	_	1	advmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


