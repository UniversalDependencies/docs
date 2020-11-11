---
layout: base
title:  'Statistics of nummod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `nummod`

This relation is universal.

494 nodes (1%) are attached to their parents as `nummod`.

494 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17813765182186.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (444; 90% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (42; 9% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	‘s	's	CCONJ	Cc	_	3	cc	_	_
2	an	an	PART	Qq	Mood=Int|PartType=Vb|PronType=Int	3	mark:prt	_	_
3	robh	bi	VERB	V-s--d	Tense=Past	0	root	_	_
4	a	a	DET	Dq	_	6	det	_	_
5	h-uile	uile	DET	Dq	_	4	fixed	_	_
6	duine	duine	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
7	eile	eile	ADJ	Aq-smn	Case=Nom|Gender=Masc|Number=Sing	6	amod	_	_
8	air	air	PART	Sa	_	13	case	_	_
9	na	an	DET	Tdpf	Gender=Fem|Number=Plur	10	det	_	_
10	trì	trì	NUM	Mc	_	11	nummod	_	_
11	duilleagan	duilleag	NOUN	Ncpfn	Case=Nom|Gender=Fem|Number=Plur	13	obj	_	_
12	a	a	PART	Ug	PartType=Inf	13	mark:prt	_	_
13	dhèanamh	dèan	NOUN	Nv	VerbForm=Inf	3	xcomp:pred	_	SpaceAfter=No
14	?	?	PUNCT	Fg	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Chosg	cosg	VERB	V-s	Tense=Past	0	root	_	_
2	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	£	£	SYM	Xy	_	1	obj	_	SpaceAfter=No
4	7.9	7.9	NUM	Mn	_	5	nummod	_	_
5	m	m	NUM	Y	_	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Fi	_	1	punct	_	_
7	agus	agus	CCONJ	Cc	_	8	cc	_	_
8	thàinig	thig	VERB	V-s	Tense=Past	1	conj	_	_
9	£	£	SYM	Xy	_	8	nsubj	_	SpaceAfter=No
10	4.2	4.2	NUM	Mn	_	11	nummod	_	_
11	m	m	NUM	Y	_	9	nmod	_	_
12	de	de	ADP	Sp	_	13	case	_	_
13	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	11	obl	_	_
14	bho	bho	ADP	Sp	_	16	case	_	_
15	an	an	DET	Tds	Number=Sing	16	det	_	_
16	Roinn	Roinn	PROPN	Nt	_	11	obl	_	_
17	Eòrpa	Eòrpa	PROPN	Nt	_	16	flat	_	SpaceAfter=No
18	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	air	air	PART	Sa	_	7	case	_	_
4	ten	ten	NUM	Xfe	Foreign=Yes	6	nummod	_	_
5	thousand	thousand	NUM	Xfe	Foreign=Yes	4	flat	_	_
6	eile	eile	ADJ	Aq	_	7	obj	_	_
7	fhaighinn	faigh	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
8	air	air	ADP	Sp	_	10	case	_	_
9	an	an	DET	Dp3p	Number=Plur|Person=3|Poss=Yes	10	nmod:poss	_	_
10	son	son	ADP	Nf	_	7	obl	_	_

~~~


