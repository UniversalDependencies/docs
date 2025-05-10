---
layout: base
title:  'Statistics of compound in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `compound`

This relation is universal.

112 nodes (0%) are attached to their parents as `compound`.

112 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08035714285714.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (68; 61% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (19; 17% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (14; 13% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (9; 8% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Dà	dà	NUM	Mc	NumForm=Word|NumType=Card	2	nummod	_	_
2	bhliadhna	bliadhna	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	deug	deug	NUM	Mc	NumForm=Word|NumType=Card	2	compound	_	SpaceAfter=No
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
3	ma-thà	ma-thà	ADV	Rg	AdvType=Man	1	advmod	_	_
4	do	do	ADP	Sp	_	5	case	_	_
5	Yugoslavia	Yugoslavia	PROPN	Nt	NounType=Top	1	xcomp:pred	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	chanainn	canainn	VERB	V-h1s	Mood=Ind|Person=1|VerbForm=Fin	0	root	_	_
2	gur	is	AUX	Wpdia	ExtPos=AUX|Polarity=Aff|Tense=Pres	7	cop	_	_
3	an	an	ADP	Sp	_	2	fixed	_	_
4	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	fixed	_	_
5	air	air	ADP	Sp	_	7	case	_	_
6	a’	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	bhliadhna	bliadhna	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	1	ccomp	_	_
8	ochd	ochd	NUM	Mc	NumForm=Word|NumType=Card	9	nummod	_	_
9	ceud	ceud	NUM	Mc	NumForm=Word|NumType=Card	7	nmod:unmarked	_	_
10	deug	deug	NUM	Mc	NumForm=Word|NumType=Card	9	compound	_	_
11	dà	dà	NUM	Mc	NumForm=Word|NumType=Card	12	nummod	_	_
12	fhichead	fichead	NUM	Mc	NumForm=Word|NumType=Card	9	conj	_	_
13	's	is	CCONJ	Cc	_	15	cc	_	_
14	ochd	ochd	NUM	Mc	NumForm=Word|NumType=Card	15	nummod	_	_
15	deug	deug	NUM	Mc	NumForm=Word|NumType=Card	9	conj	_	_

~~~


