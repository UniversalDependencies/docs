---
layout: base
title:  'Statistics of obl:tmod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-smod.html">obl:smod</a></tt>.

74 nodes (0%) are attached to their parents as `obl:tmod`.

56 instances of `obl:tmod` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22972972972973.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (44; 59% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (24; 32% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:tmod	color:blue
1	suidh	suidh	VERB	Vm-2s	Mood=Imp|Person=2	0	root	_	_
2	thall	thall	ADV	Rs	_	1	advmod	_	_
3	treiseag	treiseag	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	obl:tmod	_	_
4	bheag	beag	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
5	eile	eile	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 obl:tmod	color:blue
1	Na	an	ADP	Spp3sf	_	2	case	_	_
2	seasamh	seas	NOUN	Nv	VerbForm=Vnoun	0	root	_	_
3	anns	anns	ADP	Sp	_	5	case	_	_
4	an	an	DET	Tdsm	Gender=Masc|Number=Sing	5	det	_	_
5	doras	doras	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	Fi	_	8	punct	_	_
7	ag	ag	PART	Sa	_	8	case	_	_
8	èigheachd	èigh	NOUN	Nv	VerbForm=Vnoun	2	conj	_	SpaceAfter=No
9	...	...	PUNCT	Fb	_	10	punct	_	_
10	fad	fad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	2	obl:tmod	_	_
11	a’	an	DET	Tdsmg	Case=Gen|Gender=Masc|Number=Sing	12	det	_	_
12	latha	latha	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
13	?	?	PUNCT	Fg	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:tmod	color:blue
1	Chaidh	rach	VERB	V-s	Tense=Past	0	root	_	_
2	Donnchadh	Donnchadh	PROPN	Nn-mn	Case=Nom|Gender=Masc	15	obj	_	_
3	Dewer	Dewer	PROPN	Nn	_	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	Fi	_	5	punct	_	_
5	aois	aois	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	2	obl:tmod	_	_
6	seachd	seachd	NUM	Mc	_	7	nummod	_	_
7	bliadhna	bliadhna	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	deug	deug	NUM	Mc	_	7	nummod	_	_
9	thar	thar	ADP	Sp	_	10	case	_	_
10	fhichead	fhichead	NUM	Mc	_	7	obl	_	_
11	à	à	ADP	Sp	_	12	case	_	_
12	baile	baile	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	_
13	Schotts	Schotts	PROPN	Nt	_	12	nmod	_	_
14	a	a	PART	Ug	PartType=Inf	15	mark:prt	_	_
15	thoirt	toir	NOUN	Nv	VerbForm=Inf	1	xcomp	_	_
16	gu	gu	ADP	Sp	_	17	case	_	_
17	ospadal	ospadal	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	15	obl	_	_
18	a'	an	DET	Tds-g	Case=Gen|Number=Sing	19	det	_	_
19	Bhelford	Belford	PROPN	Nt	_	17	nmod	_	_
20	'sa	'sa	ADP	Spa-s	_	21	case	_	_
21	Ghearasdan	Gearasdan	PROPN	Nt	_	19	obl	_	SpaceAfter=No
22	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


