---
layout: base
title:  'Statistics of nmod:poss in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-nmod.html">nmod</a></tt>.

325 nodes (1%) are attached to their parents as `nmod:poss`.

325 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.00923076923077.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (314; 97% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (10; 3% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	slaod	slaod	VERB	Vm-2s	Mood=Imp|Person=2	0	root	_	_
2	a-steach	a-steach	ADV	Rs	_	1	advmod	_	_
3	do	do	DET	Dp2s	Number=Sing|Person=2	4	nmod:poss	_	_
4	shèithear	sèithear	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	obj	_	_
5	ceart	ceart	ADV	Rg	_	6	advmod	_	_
6	faisg	faisg	ADJ	Ap	_	9	advmod	_	_
7	air	air	ADP	Sp	_	9	case	_	_
8	a’	an	DET	Tdsm	Gender=Masc|Number=Sing	9	det	_	_
9	bhòrd	bòrd	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	‘s	‘s	CCONJ	Cc	_	5	cc	_	_
2	dè	dè	PRON	Uq	Mood=Int	5	nsubj	_	_
3	mu	mu	ADP	Sp	_	5	case	_	_
4	do	do	DET	Dp2s	Number=Sing|Person=2	5	nmod:poss	_	_
5	dheidhinn-sa	deidhinn-sa	ADP	Nf---e	_	0	root	_	_
6	a	a	PART	Uv	PartType=Voc	7	case:voc	_	_
7	[Name]	[Name]	PROPN	Nn-mv	Case=Voc|Gender=Masc	5	vocative	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nmod:poss	color:blue
1	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	mi	mi	PRON	Pp1s	Number=Sing|Person=1	1	nsubj	_	_
3	a’	ag	PART	Sa	_	4	case	_	_
4	smaointinn	smaoinich	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
5	gur	is	AUX	Wpdia	_	7	cop	_	_
6	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	5	fixed	_	_
7	[Name]	[Name]	PROPN	Nn-fn	Case=Nom|Gender=Fem	12	reparandum	_	_
8	[Name]	[Name]	PROPN	Nn	_	7	flat	_	_
9	gur	is	AUX	Wpdia	_	12	cop	_	_
10	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	9	fixed	_	_
11	a	a	DET	Dp3sf	Gender=Fem|Number=Sing|Person=3	12	nmod:poss	_	_
12	h-uncle	uncle	X	Xfe	Foreign=Yes	4	ccomp	_	_
13	[Name]	[Name]	PROPN	Nn-mn	Case=Nom|Gender=Masc	12	appos	_	_
14	[Name]	[Name]	PROPN	Nn	_	13	flat	_	_
15	[Name]	[Name]	PROPN	Nn	_	13	flat	_	_

~~~


