---
layout: base
title:  'Statistics of obl:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-obl.html">obl</a></tt>.

41 nodes (0%) are attached to their parents as `obl:agent`.

39 instances of `obl:agent` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8780487804878.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (21; 51% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (8; 20% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (5; 12% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (4; 10% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl:agent	color:blue
1	Fe	fe	PART	aff	_	3	advmod	_	SpaceAfter=No
2	'i	ei	PRON	dep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	sefydlwyd	sefydlu	VERB	verb	Mood=Ind|Person=0|Tense=Past	0	root	_	_
4	yn	yn	ADP	prep	_	5	case	_	_
5	1922	1922	NUM	num	_	3	obl	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	Syr	syr	NOUN	noun	Gender=Masc|Number=Sing	3	obl:agent	_	_
8	Ifan	Ifan	PROPN	person	_	7	flat	_	_
9	ab	ab	NOUN	noun	Gender=Masc|Number=Sing	8	flat:name	_	_
10	Owen	Owen	PROPN	person	_	9	flat:name	_	_
11	Edwards	Edwards	PROPN	person	_	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:agent	color:blue
1	nid	ni	PART	neg	_	4	advmod	_	_
2	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	SpaceAfter=No
3	'n	yn	PART	pred	_	4	case:pred	_	_
4	rhywbeth	rhywbeth	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
5	newydd	newydd	ADJ	pos	Degree=Pos	4	amod	_	_
6	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	4	acl	_	_
7	yn	yn	AUX	impf	_	8	aux	_	_
8	cael	cael	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
9	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	dargedu	targedu	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	8	ccomp	_	_
11	gan	gan	ADP	prep	_	12	case	_	_
12	hacwyr	hacwyr	NOUN	noun	Gender=Masc|Number=Sing	10	obl:agent	_	_
13	bob	pob	ADJ	pos	Degree=Pos|Mutation=SM	14	amod	_	_
14	dydd	dydd	NOUN	noun	Gender=Masc|Number=Sing	10	advcl	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

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
5	oedd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Imp	0	root	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	Riley	Riley	PROPN	person	Gender=Masc|Number=Sing	5	obl:agent	_	_
8	storiau	stori	NOUN	noun	Gender=Masc|Number=Plur	5	nsubj	_	_
9	difyr	difyr	ADJ	pos	Degree=Pos	8	amod	_	_
10	oedd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Imp	8	acl	_	_
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


