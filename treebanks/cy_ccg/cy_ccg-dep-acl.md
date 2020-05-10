---
layout: base
title:  'Statistics of acl in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cy_ccg-dep-acl-relcl.html">acl:relcl</a></tt>.

531 nodes (2%) are attached to their parents as `acl`.

511 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96045197740113.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (446; 84% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (48; 9% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (15; 3% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	5	case	_	_
5	ti	ti	PRON	indep	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	ddod	dod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	3	acl	_	_
7	cyn	cyn	ADP	prep	_	8	case	_	_
8	yfory	yfory	ADV	adv	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	gan	gan	ADP	prep	_	4	case	_	_
3	y	y	DET	art	_	4	det	_	_
4	ddinas	dinas	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	obl	_	_
5	stryd	stryd	NOUN	noun	Gender=Fem|Number=Sing	1	nsubj	_	_
6	fawr	mawr	ADJ	pos	Degree=Pos|Mutation=SM	5	amod	_	_
7	hir	hir	ADJ	pos	Degree=Pos	5	amod	_	_
8	lle	lle	ADV	adv	_	9	advmod	_	_
9	mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	acl	_	_
10	nifer	nifer	NOUN	noun	Gender=Masc|Number=Sing	9	nsubj	_	_
11	o	o	ADP	prep	_	12	case	_	_
12	siopau	siop	NOUN	noun	Gender=Masc|Number=Plur	10	nmod	_	_
13	bach	bach	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	2018	2018	NUM	num	_	1	nsubj	_	_
3	wedi	wedi	AUX	ante	_	6	aux	_	_
4	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	6	cop	_	_
5	yn	yn	PART	pred	_	6	case:pred	_	_
6	flwyddyn	blwyddyn	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	xcomp	_	_
7	gyda	gyda	ADP	prep	_	8	case	_	_
8	mwy	mawr	ADJ	cmp	Degree=Cmp	6	acl	_	_
9	na	na	ADP	prep	_	11	case	_	SpaceAfter=No
10	'i	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	siâr	siâr	NOUN	noun	Gender=Masc|Number=Sing	8	obl	_	_
12	o	o	ADP	prep	_	13	case	_	_
13	bontydd	pont	NOUN	noun	Gender=Fem|Mutation=SM|Number=Plur	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


