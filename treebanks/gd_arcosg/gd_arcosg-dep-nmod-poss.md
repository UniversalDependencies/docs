---
layout: base
title:  'Statistics of nmod:poss in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-nmod.html">nmod</a></tt>.

716 nodes (1%) are attached to their parents as `nmod:poss`.

714 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02932960893855.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (470; 66% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (214; 30% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (23; 3% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	slaod	slaod	VERB	Vm-2s	Mood=Imp|Person=2	0	root	_	_
2	a-steach	a-steach	ADV	Rs	_	1	advmod	_	_
3	do	do	DET	Dp2s	Number=Sing|Person=2|Poss=Yes	4	nmod:poss	_	_
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
1	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	thusa	thu	PRON	Pp2s--e	Form=Emp|Number=Sing|Person=2	1	nsubj	_	_
3	nad	nad	ADP	Sp	_	5	case	_	_
4	do	do	PRON	Dp2s	Number=Sing|Person=2|Poss=Yes	5	nmod:poss	_	_
5	ghille	gille	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
6	mhòr	mòr	ADJ	Aq-smd	Case=Dat|Gender=Masc|Number=Sing	5	amod	_	_
7	a-neist	a-neist	ADV	Rt	_	5	advmod	_	_
8	a	a	PART	Uv	PartType=Voc	9	case:voc	_	_
9	[Name]	[Name]	PROPN	Nn-mv	Case=Voc|Gender=Masc	1	vocative	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	‘s	's	CCONJ	Cc	_	5	cc	_	_
2	dè	dè	PRON	Uq	PronType=Int	5	nsubj	_	_
3	mu	mu	ADP	Sp	_	5	case	_	_
4	do	do	DET	Dp2s	Number=Sing|Person=2|Poss=Yes	5	nmod:poss	_	_
5	dheidhinn-sa	deidhinn-sa	ADP	Nf---e	_	0	root	_	_
6	a	a	PART	Uv	PartType=Voc	7	case:voc	_	_
7	[Name]	[Name]	PROPN	Nn-mv	Case=Voc|Gender=Masc	5	vocative	_	_

~~~


