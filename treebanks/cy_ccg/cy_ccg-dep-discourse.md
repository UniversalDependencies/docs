---
layout: base
title:  'Statistics of discourse in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.6.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Gyfeillion	cyfaill	NOUN	noun	Gender=Masc|Mutation=SM|Number=Plur	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	3	punct	_	_
3	rwyf	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	wedi	wedi	AUX	ante	_	5	aux	_	_
5	gweithio	gweithio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	3	xcomp	_	_
6	i	i	ADP	prep	_	7	case	_	_
7	Lywodraeth	llywodraeth	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	5	obl	_	_
8	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
9	!	!	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 3 discourse	color:blue
1	Ar	ar	ADP	prep	_	3	case	_	_
2	y	y	DET	art	_	3	det	_	_
3	llaw	llaw	NOUN	noun	Gender=Masc|Number=Sing	18	discourse	_	_
4	arall	arall	ADJ	pos	Degree=Pos	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	18	punct	_	_
6	mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	_
7	Arberth	Arberth	PROPN	place	Gender=Masc|Number=Sing	18	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	10	punct	_	_
9	a	a	PRON	rel	PronType=Rel	10	nsubj	_	_
10	gafodd	cael	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	acl:relcl	_	_
11	bum	pum	NUM	num	Mutation=SM	12	nummod	_	_
12	mlynedd	blwyddyn	NOUN	noun	Gender=Fem|Mutation=NM|Number=Plur	10	obj	_	_
13	o	o	ADP	prep	_	14	case	_	_
14	gymorth	cymorth	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	12	nmod	_	_
15	ardrethi	ardreth	NOUN	noun	Gender=Fem|Number=Plur	14	nmod	_	SpaceAfter=No
16	,	,	PUNCT	punct	_	18	punct	_	_
17	yn	yn	PART	pred	_	18	case:pred	_	_
18	ganolfan	canolfan	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
19	brysur	prysur	ADJ	pos	Degree=Pos|Mutation=SM	18	amod	_	SpaceAfter=No
20	,	,	PUNCT	punct	_	21	punct	_	_
21	ffyniannus	ffyniannus	ADJ	pos	Degree=Pos	19	conj	_	_
22	a	a	CCONJ	cconj	_	23	cc	_	_
23	llwyddiannus	llwyddiannus	ADJ	pos	Degree=Pos	19	conj	_	SpaceAfter=No
24	.	.	PUNCT	punct	_	18	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	Dyma	dyma	ADV	adv	_	2	advmod	_	_
2	ni	ni	PRON	indep	Number=Plur|Person=1|PronType=Prs	4	discourse	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	4	punct	_	_
4	mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	paratoadau	paratoad	NOUN	noun	Gender=Masc|Number=Plur	4	nsubj	_	_
6	ar	ar	ADP	prep	_	7	case	_	_
7	gyfer	cyfer	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	5	nmod	_	_
8	y	y	DET	art	_	9	det	_	_
9	Nadolig	Nadolig	NOUN	noun	Gender=Masc|Number=Sing	7	nmod	_	_
10	wedi	wedi	AUX	ante	_	12	aux	_	_
11	hen	hen	ADJ	pos	Degree=Pos	12	advmod	_	_
12	ddechrau	dechrau	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	4	xcomp	_	SpaceAfter=No
13	,	,	PUNCT	punct	_	16	punct	_	_
14	ac	a	CCONJ	cconj	_	16	cc	_	_
15	yr	y	PART	aff	_	16	advmod	_	_
16	ydym	bod	VERB	verb	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	_
17	yn	yn	AUX	impf	_	18	aux	_	_
18	dechrau	dechrau	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	16	xcomp	_	_
19	agosáu	agosáu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	18	xcomp	_	_
20	at	at	ADP	prep	_	21	case	_	_
21	derfyn	terfyn	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	19	obl	_	_
22	ein	ni	PRON	dep	Number=Plur|Person=1|Poss=Yes|PronType=Prs	23	nmod:poss	_	_
23	hamser	amser	NOUN	noun	Gender=Masc|Mutation=AM|Number=Sing	21	nmod	_	_
24	fel	fel	ADP	prep	_	25	case	_	_
25	llysgenhadon	llysgennad	NOUN	noun	Gender=Masc|Number=Plur	21	nmod	_	_
26	i	i	ADP	prep	_	28	case	_	SpaceAfter=No
27	'r	y	DET	art	_	28	det	_	_
28	Coleg	coleg	NOUN	noun	Gender=Masc|Number=Sing	25	nmod	_	_
29	Cymraeg	Cymraeg	ADJ	pos	Degree=Pos	28	amod	_	SpaceAfter=No
30	.	.	PUNCT	punct	_	16	punct	_	SpacesAfter=\n

~~~


