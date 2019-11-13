---
layout: base
title:  'Statistics of acl:relcl in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-acl.html">acl</a></tt>.

197 nodes (1%) are attached to their parents as `acl:relcl`.

197 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.75634517766497.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (156; 79% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (12; 6% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (8; 4% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl:relcl	color:blue
1	Fy	fy	PRON	dep	Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	mrawd	brawd	NOUN	noun	Gender=Masc|Mutation=NM|Number=Sing	5	nsubj	_	_
3	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	SpaceAfter=No
4	'r	y	DET	art	_	5	det	_	_
5	dyn	dyn	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
6	sy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Relative=Rel|Tense=Pres	5	acl:relcl	_	SpaceAfter=No
7	'n	yn	AUX	impf	_	8	aux	_	_
8	canu	canu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl:relcl	color:blue
1	Pwy	pwy	PRON	intr	PronType=Int	0	root	_	_
2	sy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Relative=Rel|Tense=Pres	1	acl:relcl	_	SpaceAfter=No
3	'n	yn	AUX	impf	_	4	aux	_	_
4	canu	canu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	SpaceAfter=No
5	?	?	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Maen	bod	VERB	verb	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
2	nwh	nwh	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
3	'n	yn	AUX	impf	_	4	aux	_	_
4	gallu	gallu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
5	darparu	darparu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	4	xcomp	_	_
6	gwasanaeth	gwasanaeth	NOUN	noun	Gender=Masc|Number=Sing	5	obj	_	_
7	pwrpasol	pwrpasol	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
8	sy	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Relative=Rel|Tense=Pres	10	aux	_	SpaceAfter=No
9	'n	yn	PART	pred	_	10	case:pred	_	_
10	ateb	ateb	NOUN	noun	Gender=Masc|Number=Sing	6	acl:relcl	_	_
11	eich	eich	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
12	gofynion	gofyn	NOUN	noun	Gender=Masc|Number=Plur	10	nmod	_	_
13	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


