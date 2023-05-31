---
layout: base
title:  'Statistics of amod in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `amod`

This relation is universal.

27 nodes (7%) are attached to their parents as `amod`.

18 instances of `amod` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14814814814815.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt> (13; 48% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-PART.html">PART</a></tt> (6; 22% instances), <tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipsgg-pos-PART.html">PART</a></tt> (2; 7% instances), <tt><a href="sga_dipsgg-pos-PRON.html">PRON</a></tt>-<tt><a href="sga_dipsgg-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="sga_dipsgg-pos-ADP.html">ADP</a></tt>-<tt><a href="sga_dipsgg-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="sga_dipsgg-pos-PART.html">PART</a></tt>-<tt><a href="sga_dipsgg-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	mar	már	ADJ	_	Degree=Pos|Prefix=Yes	2	amod	_	_
2	uar	úar	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
3	dom	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=1|PronType=Prs	2	obl:prep	_	SpaceAfter=No
4	·–	·–	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	in	in	DET	_	Case=Dat|Gender=Fem|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	méit	méit	NOUN	_	Case=Dat|Number=Sing	0	root	_	SpaceAfter=No
3	so	so	PART	_	PronType=Dem	2	amod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	ní	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbType=Cop	3	nsubj	_	_
2	ǽr	ér	PART	_	Prefix=Yes	3	amod	_	SpaceAfter=No
3	mall	mall	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	roscríbad	scríbaid	VERB	_	Mood=Ind|Number=Sing|PartType=Aug|Person=3|Tense=Past|Voice=Pass	3	acl:relcl	_	_
5	in	in	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	6	det	_	SpaceAfter=No
6	letráim	letraim	NOUN	_	Case=Nom|Number=Sing	4	obj	_	SpaceAfter=No
7	so	so	PART	_	PronType=Dem	6	amod	_	_

~~~


