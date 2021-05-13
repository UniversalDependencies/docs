---
layout: base
title:  'Statistics of acl:relcl in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-acl.html">acl</a></tt>.

417 nodes (1%) are attached to their parents as `acl:relcl`.

417 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.73621103117506.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (320; 77% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (28; 7% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (24; 6% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (13; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (12; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Offeryn	offeryn	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
2	cerdd	cerdd	NOUN	noun	Gender=Fem|Number=Sing	1	nmod	_	_
3	gyda	gyda	ADP	prep	_	4	case	_	_
4	thannau	tant	NOUN	noun	Gender=Fem|Mutation=AM|Number=Plur	1	nmod	_	_
5	a	a	PRON	rel	PronType=Rel	6	obj	_	_
6	genir	canu	VERB	verb	Mood=Ind|Mutation=SM|Person=0|Tense=Fut|VerbForm=Fin	4	acl:relcl	_	_
7	â	â	ADP	prep	_	9	case	_	SpaceAfter=No
8	'r	y	DET	art	_	9	det	_	_
9	bysedd	bys	NOUN	noun	Gender=Masc|Number=Plur	6	obl	_	_
10	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
11	telyn	telyn	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	11	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl:relcl	color:blue
1	Pwy	pwy	PRON	intr	PronType=Int	0	root	_	_
2	sy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=FinRel	1	acl:relcl	_	SpaceAfter=No
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
1	Maen	bod	VERB	verb	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	nhw	hwy	PRON	indep	Number=Plur|Person=3|PronType=Prs	1	nsubj	_	SpaceAfter=No
3	'n	yn	AUX	impf	_	4	aux	_	_
4	gallu	gallu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
5	darparu	darparu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	4	xcomp	_	_
6	gwasanaeth	gwasanaeth	NOUN	noun	Gender=Masc|Number=Sing	5	obj	_	_
7	pwrpasol	pwrpasol	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
8	sy	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=FinRel	10	aux	_	SpaceAfter=No
9	'n	yn	PART	pred	_	10	case:pred	_	_
10	ateb	ateb	NOUN	noun	Gender=Masc|Number=Sing	6	acl:relcl	_	_
11	eich	chi	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
12	gofynion	gofyn	NOUN	noun	Gender=Masc|Number=Plur	10	nmod	_	_
13	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	12	nmod:redup	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


