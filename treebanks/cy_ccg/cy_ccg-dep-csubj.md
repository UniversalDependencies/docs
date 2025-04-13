---
layout: base
title:  'Statistics of csubj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `csubj`

This relation is universal.

41 nodes (0%) are attached to their parents as `csubj`.

21 instances of `csubj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.17073170731707.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (22; 54% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 15% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 12% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Piti	piti	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
2	ydi	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	_
3	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	csubj	_	_
4	y	y	DET	art	_	5	det	_	_
5	bobl	pobl	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	3	nsubj	_	_
6	ddylai	dylu	VERB	verb	Mood=Cnd|Mutation=SM|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	acl:relcl	_	_
7	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
8	yn	yn	AUX	impf	_	9	aux	_	_
9	gwrando	gwrando	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
10	ar	ar	ADP	prep	_	11	case	_	_
11	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	9	obl	_	_
12	ddim	dim	PART	neg	Mutation=SM	9	advmod	_	_
13	yma	yma	ADV	adv	_	9	advmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	paratoi	paratoi	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	csubj	_	_
3	myfyrwyr	myfyriwr	NOUN	noun	Gender=Masc|Number=Plur	2	obj	_	_
4	fel	fel	ADP	prep	_	5	mark	_	_
5	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	acl	_	_
6	gan	gan	ADP	iprep	_	7	case	_	_
7	hwy	hwy	PRON	indep	Number=Plur|Person=3|PronType=Prs	5	obl	_	_
8	gyfleoedd	cyfle	NOUN	noun	Gender=Masc|Mutation=SM|Number=Plur	5	nsubj	_	_
9	cyflogadwyedd	cyflogadwyedd	NOUN	noun	Gender=Masc|Number=Sing	8	nmod	_	_
10	rhagorol	rhagorol	ADJ	pos	Degree=Pos	9	amod	_	_
11	yn	yn	PART	pred	_	12	case:pred	_	_
12	rhan	rhan	NOUN	noun	Gender=Fem|Number=Sing	8	acl	_	_
13	ganolog	canolog	ADJ	pos	Degree=Pos|Mutation=SM	12	amod	_	_
14	o	o	ADP	prep	_	16	case	_	SpaceAfter=No
15	'n	ni	PRON	dep	Number=Plur|Person=1|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	cyrsiau	cwrs	NOUN	noun	Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No
17	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 csubj	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
2	cynllunio	cynllunio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	10	csubj	_	_
3	eich	chi	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	taith	taith	NOUN	noun	Gender=Fem|Number=Sing	2	obj	_	_
5	i	i	ADP	prep	_	8	case	_	_
6	fyny	fyny	ADV	adv	_	5	fixed	_	SpaceAfter=No
7	'r	y	DET	art	_	8	det	_	_
8	Wyddfa	Wyddfa	PROPN	place	Gender=Fem|Number=Sing	4	nmod	_	_
9	yn	yn	PART	pred	_	10	case:pred	_	_
10	bwysig	pwysig	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
11	iawn	iawn	ADV	adv	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	10	punct	_	SpacesAfter=\n

~~~


