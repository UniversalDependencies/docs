---
layout: base
title:  'Statistics of compound in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `compound`

This relation is universal.

95 nodes (0%) are attached to their parents as `compound`.

95 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07368421052632.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (61; 64% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (17; 18% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (9; 9% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (5; 5% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	tràigh	tràigh	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	mhòr	mòr	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	1	amod	_	_
3	mhòr	mòr	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	2	compound	_	_
4	mhòr	mòr	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	2	compound	_	_
5	an	an	ADP	Sp	_	6	case	_	_
6	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_
7	an-dè	an-dè	ADV	Rt	_	1	advmod	_	_
8	[?]	[?]	X	Xx	_	1	dep	_	_
9	air	air	ADP	Sp	_	11	case	_	_
10	a’	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	chladach	cladach	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	nmod	_	_
12	an-dè	an-dè	ADV	Rt	_	1	advmod	_	_

~~~


