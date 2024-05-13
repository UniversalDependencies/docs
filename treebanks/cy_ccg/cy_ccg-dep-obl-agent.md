---
layout: base
title:  'Statistics of obl:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-obl.html">obl</a></tt>.

31 nodes (0%) are attached to their parents as `obl:agent`.

30 instances of `obl:agent` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.35483870967742.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (20; 65% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (8; 26% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 3% instances).


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
5	1922	1922	NUM	num	NumForm=Digit|NumType=Card	3	obl	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	Syr	syr	NOUN	noun	Gender=Masc|Number=Sing	3	obl:agent	_	_
8	Ifan	Ifan	PROPN	person	_	7	flat	_	_
9	ab	ap	NOUN	noun	Gender=Masc|Number=Sing	8	flat:name	_	_
10	Owen	Owen	PROPN	person	_	8	flat:name	_	_
11	Edwards	Edwards	PROPN	person	_	8	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 obl:agent	color:blue
1	Agorwyd	agor	VERB	verb	Mood=Ind|Person=0|Tense=Past|VerbForm=Fin	0	root	_	_
2	y	y	DET	art	_	3	det	_	_
3	llwybr	llwybr	NOUN	noun	Gender=Masc|Number=Sing	1	obj	_	_
4	yn	yn	PART	pred	_	5	case:pred	_	_
5	swyddogol	swyddogol	ADJ	pos	Degree=Pos	1	advmod	_	_
6	yn	yn	ADP	prep	_	7	case	_	_
7	1892	1892	NUM	num	NumForm=Digit|NumType=Card	1	obl	_	_
8	gan	gan	ADP	prep	_	9	case	_	_
9	William	William	PROPN	person	Gender=Masc|Number=Sing	1	obl:agent	_	_
10	Gladstone	Gladstone	PROPN	person	_	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	punct	_	14	punct	_	_
12	y	y	DET	art	_	14	det	_	_
13	Prif	prif	ADJ	pos	Degree=Pos	14	amod	_	_
14	Weinidog	gweinidog	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	9	appos	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

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


