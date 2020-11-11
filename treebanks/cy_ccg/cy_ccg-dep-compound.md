---
layout: base
title:  'Statistics of compound in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="cy_ccg-dep-compound-redup.html">compound:redup</a></tt>.

6 nodes (0%) are attached to their parents as `compound`.

4 instances of `compound` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	gosodwr	gosodwr	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	yn	yn	AUX	impf	_	4	aux	_	_
4	rhoi	rhoi	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
5	siawns	siawns	NOUN	noun	Gender=Fem|Number=Sing	4	obj	_	_
6	i	i	ADP	prep	_	7	case	_	_
7	di	ti	PRON	indep	Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
8	lawrlwytho	lawrlwytho	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	4	advcl	_	_
9	updates	updates	NOUN	noun	Gender=Masc|Number=Sing	8	obj	_	_
10	a	a	CCONJ	cconj	_	11	cc	_	_
11	galluogi	galluogi	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	8	conj	_	_
12	MP3	MP3	NOUN	noun	Gender=Masc|Number=Sing	11	obj	_	_
13	codecs	codecs	NOUN	noun	Gender=Masc|Number=Sing	12	compound	_	_
14	i	i	ADP	prep	_	15	mark	_	_
15	gael	cael	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	11	ccomp	_	_
16	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	17	obj	_	_
17	osod	gosod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	15	ccomp	_	SpaceAfter=No
18	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 26 compound	color:blue
1	Un	un	NUM	num	_	2	nummod	_	_
2	peth	peth	NOUN	noun	Gender=Masc|Number=Sing	16	nsubj	_	_
3	sydd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Relative=Rel|Tense=Pres	2	acl:relcl	_	_
4	wedi	wedi	AUX	ante	_	5	aux	_	_
5	codi	codi	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	3	xcomp	_	_
6	unwaith	unwaith	ADV	adv	_	5	advmod	_	_
7	eto	eto	ADV	adv	_	5	advmod	_	_
8	yn	yn	ADP	prep	_	9	case	_	_
9	ystod	ystod	NOUN	noun	Gender=Fem|Number=Sing	5	obl	_	_
10	etholiad	etholiad	NOUN	noun	Gender=Masc|Number=Sing	9	nmod	_	_
11	arweinyddol	arweinyddol	ADJ	pos	Degree=Pos	10	amod	_	_
12	Plaid	plaid	NOUN	noun	Gender=Fem|Number=Sing	10	nmod	_	_
13	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	12	flat:name	_	_
14	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	cop	_	SpaceAfter=No
15	'r	y	DET	art	_	16	det	_	_
16	cwestiwn	cwestiwn	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
17	am	am	ADP	prep	_	18	case	_	_
18	le	lle	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	16	nmod	_	SpaceAfter=No
19	'r	y	DET	art	_	20	det	_	_
20	Blaid	plaid	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	18	nmod	_	_
21	ar	ar	ADP	prep	_	23	case	_	_
22	y	y	DET	art	_	23	det	_	_
23	sbectrwm	sbectrwm	NOUN	noun	Gender=Masc|Number=Sing	18	nmod	_	_
24	dde	de	ADJ	pos	Degree=Pos|Mutation=SM	23	amod	_	SpaceAfter=No
25	-	-	PUNCT	punct	_	24	punct	_	SpaceAfter=No
26	chwith	chwith	ADJ	pos	Degree=Pos	24	compound	_	SpaceAfter=No
27	.	.	PUNCT	punct	_	16	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	Ganwch	canu	VERB	verb	Mood=Ind|Mutation=SM|Number=Plur|Person=2|Tense=Fut	0	root	_	_
2	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	1	nsubj	_	_
3	yn	yn	ADP	prep	_	5	case	_	_
4	y	y	DET	art	_	5	det	_	_
5	cyngerdd	cyngerdd	NOUN	noun	Gender=Masc|Number=Sing	1	obl	_	_
6	nos	nos	NOUN	noun	Gender=Fem|Number=Sing	7	compound	_	_
7	yfory	yfory	ADV	adv	_	1	advmod	_	SpaceAfter=No
8	?	?	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


