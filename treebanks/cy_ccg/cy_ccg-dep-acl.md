---
layout: base
title:  'Statistics of acl in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cy_ccg-dep-acl-relcl.html">acl:relcl</a></tt>.

705 nodes (2%) are attached to their parents as `acl`.

681 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8936170212766.

The following 15 pairs of parts of speech are connected with `acl`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (570; 81% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (75; 11% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (21; 3% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	Ond	ond	CCONJ	cconj	_	3	cc	_	_
2	nid	ni	PART	neg	_	3	advmod	_	_
3	oes	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	3	nsubj	_	_
5	i	i	ADP	iprep	_	6	case	_	_
6	e	e	PRON	indep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
7	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	4	acl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	Faint	maint	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
2	o	o	ADP	prep	_	4	case	_	SpaceAfter=No
3	'r	y	DET	art	_	4	det	_	_
4	rhain	rhain	PRON	dem	Number=Plur|PronType=Dem	1	nmod	_	_
5	allwch	gallu	VERB	verb	Mood=Ind|Mutation=SM|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	1	acl	_	_
6	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	5	nsubj	_	_
7	eu	hwy	PRON	dep	Number=Plur|Person=3|PronType=Prs	8	obj	_	_
8	darganfod	darganfod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	xcomp	_	SpaceAfter=No
9	?	?	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	2018	2018	NUM	num	_	1	nsubj	_	_
3	wedi	wedi	AUX	ante	_	6	aux	_	_
4	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	6	cop	_	_
5	yn	yn	PART	pred	_	6	case:pred	_	_
6	flwyddyn	blwyddyn	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	xcomp	_	_
7	gyda	gyda	ADP	prep	_	8	case	_	_
8	mwy	mawr	ADJ	cmp	Degree=Cmp	6	acl	_	_
9	na	na	ADP	prep	_	11	case	_	SpaceAfter=No
10	'i	ef	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	siâr	siâr	NOUN	noun	Gender=Masc|Number=Sing	8	obl	_	_
12	o	o	ADP	prep	_	13	case	_	_
13	bontydd	pont	NOUN	noun	Gender=Fem|Mutation=SM|Number=Plur	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


