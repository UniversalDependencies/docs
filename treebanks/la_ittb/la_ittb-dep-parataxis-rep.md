---
layout: base
title:  'Statistics of parataxis:rep in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `parataxis:rep`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-parataxis.html">parataxis</a></tt>.

2 nodes (0%) are attached to their parents as `parataxis:rep`.

2 instances of `parataxis:rep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 31.

The following 1 pairs of parts of speech are connected with `parataxis:rep`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 22 parataxis:rep	color:blue
1	apostolus	apostolus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	dicit	dico	VERB	N3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	4	punct	_	_
4	hebr.	hebr.	ADV	5	Abbr=Yes	2	advmod	_	_
5	2-11	2-11	NUM	G5	NumForm=Reference	4	nummod	_	_
6	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	22	nsubj	_	_
7	sanctificat	sanctifico	VERB	J3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	10	punct	_	_
9	scilicet	scilicet	CCONJ	O4	VerbForm=Fin	10	cc	_	_
10	christus	christus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	6	conj:expl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	et	et	CCONJ	O4	_	13	cc	_	_
13	qui	qui	PRON	F1|grn1|casJ|gen1	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	6	conj	_	_
14	sanctificantur	sanctifico	VERB	J3|modJ|tem1|gen9	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	acl:relcl	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	17	punct	_	_
16	scilicet	scilicet	CCONJ	O4	VerbForm=Fin	17	cc	_	_
17	fideles	fidelis	NOUN	C1|grn1|casJ|gen1	Case=Nom|Gender=Masc|Number=Plur	13	conj:expl	_	_
18	christi	christus	ADJ	B1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	6	punct	_	_
20	ex	ex	ADP	S4|vgr2	AdpType=Prep	21	case	_	_
21	uno	unus	NUM	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|Number=Sing|NumType=Card	22	obl	_	_
22	omnes	omnis	NOUN	C1|grn1|casM|gen1	Case=Acc|Gender=Masc|Number=Plur	2	parataxis:rep	_	SpaceAfter=No
23	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


