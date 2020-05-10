---
layout: base
title:  'Statistics of amod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `amod`

This relation is universal.

1046 nodes (2%) are attached to their parents as `amod`.

893 instances of `amod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29158699808795.

The following 15 pairs of parts of speech are connected with `amod`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (992; 95% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	‘s	‘s	CCONJ	Cc	_	3	cc	_	_
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 amod	color:blue
1	Cha	cha	PART	Qn	PartType=Cmpl|Polarity=Neg	2	mark:prt	_	_
2	chreid	creid	VERB	V-f--d	Tense=Fut	0	root	_	_
3	iadsan	iad	PRON	Pp3p--e	Number=Plur|Person=3|PronType=Emp	2	nsubj	_	_
4	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	2	obj	_	_
5	nach	nach	PART	Qn	PartType=Cmpl|Polarity=Neg	7	mark:prt	_	_
6	do	do	PART	Q--s	Tense=Past	7	mark:prt	_	_
7	chuir	cuir	VERB	V-s	Tense=Past	2	ccomp	_	_
8	eòlas	eòlas	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
9	air	air	ADP	Sp	_	10	case	_	_
10	Clachan	Clachan	PROPN	Nt	_	8	obl	_	_
11	fuara	fuara	ADJ	Aq-pfd	Case=Dat|Gender=Fem|Number=Plur	10	amod	_	_
12	Trianaoin	Trianaoin	PROPN	Nt	_	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	Fe	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 amod	color:blue
1	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	a	a	PART	Uo	PartType=Num	3	mark:prt	_	_
3	dhà	dhà	PRON	Pn	_	1	nsubj	_	_
4	eile	eile	ADJ	Aq	_	1	amod	_	_
5	ann	ann	ADP	Pr3sm	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_

~~~


