---
layout: base
title:  'Statistics of mark in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `mark`

This relation is universal.
There are 1 language-specific subtypes of `mark`: <tt><a href="gd_arcosg-dep-mark-prt.html">mark:prt</a></tt>.

488 nodes (1%) are attached to their parents as `mark`.

482 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95696721311475.

The following 16 pairs of parts of speech are connected with `mark`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (423; 87% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt> (17; 3% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (13; 3% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-CCONJ.html">CCONJ</a></tt> (10; 2% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	so	so	SCONJ	Xfe	Foreign=Yes	2	mark	_	_
2	dèan	dèan	VERB	V-f	Tense=Fut	0	root	_	_
3	mi	mi	PRON	Pp1s	Number=Sing|Person=1	2	nsubj	_	_
4	aonan	aonan	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	3	obj	_	_
5	airson	airson	ADP	Nf	_	4	fixed	_	_
6	a-nochd	a-nochd	ADV	Rt	_	2	advmod	_	_
7	agus	agus	CCONJ	Cc	_	2	cc	_	_
8	aonan	aonan	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	_
9	a-màireach	a-màireach	ADV	Rt	_	8	advmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mark	color:blue
1	Teich	teich	VERB	Vm-2s	Mood=Imp|Person=2	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Fi	_	1	punct	_	_
3	a	a	PART	Uv	PartType=Voc	4	case:voc	_	_
4	dhuine	duine	NOUN	Ncsmv	Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Fi	_	4	punct	_	_
6	na	na	PART	Qnm	Mood=Imp|PartType=Vb|Polarity=Neg	7	mark:prt	_	_
7	strùc	strùc	VERB	Vm	Mood=Imp	1	parataxis	_	_
8	annamsa	annamsa	ADP	Pr1s--e	Number=Sing|Person=1|PronType=Emp	7	mark	_	_
9	tuilleadh	tuilleadh	ADV	Rt	_	7	advmod	_	SpaceAfter=No
10	...	...	PUNCT	Fb	_	11	punct	_	_
11	bheil	bi	VERB	V-p--d	Tense=Pres	1	parataxis	_	_
12	thu	thu	PRON	Pp2s	Number=Sing|Person=2	11	nsubj	_	_
13	'	ag	PART	Sa	_	14	case	_	SpaceAfter=No
14	dol	rach	NOUN	Nv	VerbForm=Vnoun	11	xcomp:pred	_	_
15	a	a	PART	Ug	PartType=Inf	16	mark:prt	_	_
16	shuidhe	suidh	NOUN	Nv	VerbForm=Inf	14	xcomp	_	_
17	an	an	ADV	Rs	_	16	advmod	_	_
18	sin	sin	ADV	Rs	_	17	fixed	_	_
19	fad	fad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	16	obl:tmod	_	_
20	an	an	DET	Tdsmg	Case=Gen|Gender=Masc|Number=Sing	21	det	_	_
21	latha	latha	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
22	?	?	PUNCT	Fg	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mark	color:blue
1	cha	cha	PART	Qn	PartType=Cmpl|Polarity=Neg	3	mark:prt	_	_
2	do	do	PART	Q--s	Tense=Past	3	mark:prt	_	_
3	dh’fheumadh	feum	VERB	V-h--d	Mood=Cnd	0	root	_	_
4	iad	iad	PRON	Pp3p	Number=Plur|Person=3	3	nsubj	_	_
5	barrachd	barrachd	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	7	obj	_	_
6	a	a	PART	Ug	PartType=Inf	7	mark:prt	_	_
7	dhèanamh	dèan	NOUN	Nv	VerbForm=Inf	3	xcomp	_	_
8	so	so	SCONJ	Xfe	Foreign=Yes	7	mark	_	_
9	tha	bi	VERB	V-p	Tense=Pres	3	ccomp	_	_
10	an	an	DET	Tdsm	Gender=Masc|Number=Sing	11	det	_	_
11	rud	rud	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_

~~~


