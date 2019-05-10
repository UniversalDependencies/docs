---
layout: base
title:  'Statistics of flat in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="sl_ssj-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="sl_ssj-dep-flat-name.html">flat:name</a></tt>.

43 nodes (0%) are attached to their parents as `flat`.

43 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13953488372093.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (32; 74% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (5; 12% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (4; 9% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Lastnik	lastnik	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Dep=4|Rel=Sb
2	iz	iz	ADP	Sg	Case=Gen	3	case	_	Dep=3|Rel=Atr
3	Ljubljane	Ljubljana	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
4	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
5	za	za	ADP	Sa	Case=Acc	9	case	_	Dep=9|Rel=Atr
6	približno	približno	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=Atr
7	300	300	NUM	Mdc	NumForm=Digit|NumType=Card	9	nummod	_	Dep=8|Rel=Atr
8	tisoč	tisoč	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	7	flat	_	Dep=9|Rel=Atr
9	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	xcomp	_	Dep=4|Rel=Obj
10	škode	škoda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No|Dep=9|Rel=Atr
11	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	M.	M.	X	Y	Abbr=Yes	0	root	_	Dep=0|Rel=Root
2	V.	V.	X	Y	Abbr=Yes	1	flat	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Zakaj	zakaj	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=Conj
2	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
3	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	4	expl	_	Dep=4|Rel=PPart
4	premislila	premisliti	VERB	Vmep-dm	Aspect=Perf|Gender=Masc|Number=Dual|VerbForm=Part	12	ccomp	_	Dep=12|Rel=Obj
5	in	in	CCONJ	Cc	_	6	cc	_	Dep=6|Rel=Conj
6	hotela	hoteti	VERB	Vmpp-dm	Aspect=Imp|Gender=Masc|Number=Dual|VerbForm=Part	4	conj	_	Dep=0|Rel=Root
7	Damijana	Damijan	PROPN	Npmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	9	obj	_	Dep=9|Rel=Obj
8	R.	R.	X	Y	Abbr=Yes	7	flat	_	Dep=0|Rel=Root
9	oropati	oropati	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	xcomp	_	SpaceAfter=No|Dep=6|Rel=Atr
10	,	,	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root
11	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	12	aux	_	Dep=12|Rel=PPart
12	pokazala	pokazati	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
13	preiskava	preiskava	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	SpaceAfter=No|Dep=12|Rel=Sb
14	.	.	PUNCT	Z	_	12	punct	_	Dep=0|Rel=Root

~~~


