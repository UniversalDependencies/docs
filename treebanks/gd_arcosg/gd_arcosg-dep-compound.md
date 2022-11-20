---
layout: base
title:  'Statistics of compound in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `compound`

This relation is universal.

111 nodes (0%) are attached to their parents as `compound`.

111 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07207207207207.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (67; 60% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (19; 17% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (13; 12% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (9; 8% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Dà	dà	NUM	Mc	_	2	nummod	_	_
2	bhliadhna	bliadhna	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	deug	deug	NUM	Mc	_	2	compound	_	SpaceAfter=No
4	.	.	PUNCT	Fe	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	sadadh	sadadh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	a-steach	a-steach	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	compound	_	_
3	ma-thà	ma-thà	ADV	Rg	_	1	advmod	_	_
4	do	do	ADP	Sp	_	5	case	_	_
5	Yugoslavia	Yugoslavia	PROPN	Nt	_	1	xcomp:pred	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	Tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	dùil	dùil	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	gum	gum	PART	Qa	PartType=Cmpl	4	mark:prt	_	_
4	mol	mol	VERB	V-f--d	Tense=Fut	1	ccomp	_	_
5	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
6	gearradh	gearradh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	4	obj	_	_
7	de	de	ADP	Sp	_	11	case	_	_
8	ma	ma	ADV	Rg	_	11	advmod	_	_
9	naoi	naoi	NUM	Mc	_	11	nummod	_	_
10	deug	deug	NUM	Mc	_	9	compound	_	_
11	not	not	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	6	nmod	_	_
12	anns	an	ADP	Sp	_	14	case	_	_
13	an	an	ADP	Sp	_	12	fixed	_	_
14	bhliadhna	bliadhna	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	6	nmod	_	_
15	thar	thar	ADP	Sp	_	18	case	_	_
16	nan	an	DET	Tdpfg	Case=Gen|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	18	det	_	_
17	còig	còig	NUM	Mc	_	18	nummod	_	_
18	bliadhna	bliadhna	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	_
19	ro	ro	ADP	Sp	_	20	case	_	_
20	sinn	sinn	PRON	Pp1p	Number=Plur|Person=1	18	nmod	_	_
21	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


