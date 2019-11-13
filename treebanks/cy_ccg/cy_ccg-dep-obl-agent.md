---
layout: base
title:  'Statistics of obl:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-obl.html">obl</a></tt>.

28 nodes (0%) are attached to their parents as `obl:agent`.

27 instances of `obl:agent` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.32142857142857.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (15; 54% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 21% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (4; 14% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 4% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	geiriau	gair	NOUN	noun	Gender=Masc|Number=Plur	1	nsubj	_	_
4	wedi	wedi	AUX	ante	_	6	aux	_	_
5	eu	eu	PRON	dep	Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	ysgrifennu	ysgrifennu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
7	gan	gan	ADP	prep	_	8	case	_	_
8	John	John	PROPN	person	_	6	obl:agent	_	_
9	Howel	Howel	PROPN	person	Gender=Masc|Number=Sing	8	flat:name	_	_
10	(	(	PUNCT	punct	_	11	punct	_	SpaceAfter=No
11	1774	1774	NUM	num	Number=Sing	9	nmod	_	SpaceAfter=No
12	-	-	PUNCT	punct	_	13	punct	_	SpaceAfter=No
13	1830	1830	NUM	num	Number=Sing	11	nmod	_	SpaceAfter=No
14	)	)	PUNCT	punct	_	11	punct	_	_
15	sef	sef	CCONJ	cconj	_	16	cc	_	_
16	bardd	bardd	NOUN	noun	Gender=Masc|Number=Sing	8	appos	_	_
17	a	a	CCONJ	cconj	_	18	cc	_	_
18	golygydd	golygydd	NOUN	noun	Gender=Masc|Number=Sing	16	conj	_	_
19	llenyddol	llenyddol	ADJ	pos	Degree=Pos	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


