---
layout: base
title:  'Statistics of compound in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `compound`

This relation is universal.

177 nodes (0%) are attached to their parents as `compound`.

177 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16949152542373.

The following 9 pairs of parts of speech are connected with `compound`: <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (67; 38% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (44; 25% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (41; 23% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (9; 5% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (8; 5% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	ach	ach	CCONJ	Cc	_	3	cc	_	_
3	gheibh	faigh	VERB	V-f	Tense=Fut	1	conj	_	_
4	mi	mi	PRON	Pp1s	Number=Sing|Person=1	3	nsubj	_	_
5	fhìn	fhìn	PRON	Px	Reflex=Yes	4	compound	_	_
6	iad	iad	PRON	Pp3p	Number=Plur|Person=3	3	obj	_	_
7	a	a	PART	Uv	PartType=Voc	8	case:voc	_	_
8	[Name]	[Name]	PROPN	Nn-mv	Case=Voc|Gender=Masc	1	vocative	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	carson	carson	ADV	Uq	Mood=Int	3	advmod	_	_
2	nach	nach	PART	Qnr	PartType=Vb|Polarity=Neg|PronType=Rel	3	mark:prt	_	_
3	gabh	gabh	VERB	V-f--d	Tense=Fut	5	reparandum	_	_
4	thu	thu	PRON	Pp2s	Number=Sing|Person=2	3	nsubj	_	_
5	gearr	gearr	VERB	V-f--d	Tense=Fut	0	root	_	_
6	thu	thu	PRON	Pp2s	Number=Sing|Person=2	5	nsubj	_	_
7	am	an	DET	Tds	Number=Sing	8	det	_	_
8	pie	pie	NOUN	Xfe	Foreign=Yes	5	obj	_	_
9	agad	agad	ADP	Pr2s	Number=Sing|Person=2	8	obl	_	_
10	fhèin	fhèin	PRON	Px	Reflex=Yes	9	compound	_	SpaceAfter=No
11	?	?	PUNCT	Fg	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound	color:blue
1	Bha	bi	VERB	V-s	Tense=Past	0	root	_	_
2	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	cho	cho	ADV	Rg	_	4	advmod	_	_
4	deamhnaidh	deamhnaidh	ADJ	Ap	_	1	xcomp:pred	_	_
5	ris	ri	ADP	Sp	_	7	case	_	_
6	a’	an	DET	Tdsf	Gender=Fem|Number=Sing	7	det	_	_
7	chlach	clach	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	4	obl	_	_
8	fhèin	fhèin	PRON	Px	Reflex=Yes	7	compound	_	SpaceAfter=No
9	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


