---
layout: base
title:  'Statistics of obl:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-obl.html">obl</a></tt>.

28 nodes (0%) are attached to their parents as `obl:agent`.

27 instances of `obl:agent` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.03571428571429.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (18; 64% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (7; 25% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl:agent	color:blue
1	Fe	fe	PART	aff	_	3	advmod	_	SpaceAfter=No
2	'i	hi	PRON	dep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	sefydlwyd	sefydlu	VERB	verb	Mood=Ind|Person=0|Tense=Past|VerbForm=Fin	0	root	_	_
4	yn	yn	ADP	prep	_	5	case	_	_
5	1922	1922	NUM	num	_	3	obl	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	Syr	syr	NOUN	noun	Gender=Masc|Number=Sing	3	obl:agent	_	_
8	Ifan	Ifan	PROPN	person	_	7	flat	_	_
9	ab	ap	NOUN	noun	Gender=Masc|Number=Sing	8	flat:name	_	_
10	Owen	Owen	PROPN	person	_	8	flat:name	_	_
11	Edwards	Edwards	PROPN	person	_	8	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Rhwng	rhwng	ADP	prep	_	3	case	_	_
2	pob	pob	ADJ	pos	Degree=Pos	3	amod	_	_
3	cân	cân	NOUN	noun	Gender=Masc|Number=Sing	5	obl	_	_
4	yr	y	PART	aff	_	5	advmod	_	_
5	oedd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	Riley	Riley	PROPN	person	Gender=Masc|Number=Sing	5	obl:agent	_	_
8	storiau	stori	NOUN	noun	Gender=Masc|Number=Plur	5	nsubj	_	_
9	difyr	difyr	ADJ	pos	Degree=Pos	8	amod	_	_
10	oedd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	acl	_	_
11	yn	yn	AUX	impf	_	12	aux	_	_
12	rhoi	rhoi	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	10	xcomp	_	_
13	cefndir	cefndir	NOUN	noun	Gender=Masc|Number=Sing	12	obj	_	_
14	a	a	CCONJ	cconj	_	15	cc	_	_
15	chyd-destun	cyd-destun	NOUN	noun	Gender=Fem|Mutation=AM|Number=Sing	13	conj	_	_
16	i	i	ADP	prep	_	18	case	_	SpaceAfter=No
17	'r	y	DET	art	_	18	det	_	_
18	caneuon	cân	NOUN	noun	Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=No
19	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	Byddai	bod	AUX	aux	Mood=Cnd|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	well	da	ADJ	cmp	Degree=Cmp	0	root	_	_
4	gan	gan	ADP	prep	_	5	case	_	_
5	Blaid	plaid	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	3	obl:agent	_	_
6	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	5	nmod	_	_
7	beidio	peidio	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	3	ccomp	_	_
8	â	â	ADP	prep	_	9	case	_	_
9	thrafod	trafod	NOUN	noun	Gender=Masc|Mutation=AM|Number=Sing	7	obl	_	_
10	o	o	ADP	prep	_	11	case	_	_
11	gwbl	cwbl	ADJ	pos	Degree=Pos|Mutation=SM	7	advmod	_	SpaceAfter=No
12	,	,	PUNCT	punct	_	15	punct	_	_
13	am	am	ADP	prep	_	15	case	_	_
14	y	y	DET	art	_	15	det	_	_
15	rheswm	rheswm	NOUN	noun	Gender=Masc|Number=Sing	7	obl	_	_
16	eu	hwy	PRON	dep	Number=Plur|Person=3|PronType=Prs	17	nsubj	_	_
17	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	15	acl	_	_
18	nhw	hwy	PRON	indep	Number=Plur|Person=3|PronType=Prs	17	nmod:redup	_	SpaceAfter=No
19	'n	yn	AUX	impf	_	20	aux	_	_
20	gwybod	gwybod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	17	xcomp	_	_
21	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	20	ccomp	_	_
22	sgitsoffrenia	sgitsoffrenia	NOUN	noun	Gender=Fem|Number=Sing	21	nsubj	_	_
23	tros	tros	ADP	prep	_	25	case	_	_
24	y	y	DET	art	_	25	det	_	_
25	pwnc	pwnc	NOUN	noun	Gender=Masc|Number=Sing	22	nmod	_	_
26	o	o	ADP	prep	_	29	case	_	_
27	fewn	mewn	ADP	prep	Mutation=SM	26	fixed	_	_
28	y	y	DET	art	_	29	det	_	_
29	Blaid	plaid	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	25	nmod	_	SpaceAfter=No
30	,	,	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


