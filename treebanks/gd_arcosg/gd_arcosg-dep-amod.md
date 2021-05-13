---
layout: base
title:  'Statistics of amod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `amod`

This relation is universal.

1679 nodes (2%) are attached to their parents as `amod`.

1443 instances of `amod` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26206075044669.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1579; 94% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (54; 3% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (14; 1% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	‘s	's	CCONJ	Cc	_	3	cc	_	_
2	an	an	PART	Qq	PartType=Vb|PronType=Int	3	mark:prt	_	_
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 amod	color:blue
1	ò	ò	INTJ	I	_	3	discourse	_	_
2	uill	uill	INTJ	I	_	3	discourse	_	_
3	chuala	cluinn	VERB	V-s	Tense=Past	0	root	_	_
4	mi	mi	PRON	Pp1s	Number=Sing|Person=1	3	nsubj	_	_
5	[Name]	[Name]	PROPN	Nn-mn	Case=Nom|Gender=Masc	3	obj	_	_
6	[Name]	[Name]	PROPN	Nn-mg	Case=Gen|Gender=Masc	5	flat:name	_	_
7	Òig	òig	ADJ	Aq-smg	Case=Gen|Gender=Masc|Number=Sing	5	amod	_	_
8	Ruaidh	ruaidh	ADJ	Aq-smg	Case=Gen|Gender=Masc|Number=Sing	5	amod	_	_

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
5	an	an	ADP	Sp	_	6	case	_	_
6	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_

~~~


