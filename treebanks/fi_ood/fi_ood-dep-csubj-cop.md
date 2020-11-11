---
layout: base
title:  'Statistics of csubj:cop in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-csubj.html">csubj</a></tt>.

21 nodes (0%) are attached to their parents as `csubj:cop`.

21 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.04761904761905.

The following 3 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (10; 48% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (8; 38% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (3; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj:cop	color:blue
1	Mukava	mukava	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
2	lähteä	lähteä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	1	csubj:cop	_	_
3	tauolle	tauko	NOUN	_	Case=All|Number=Sing	2	obl	_	_
4	tällaisen	tällainen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Lainen|Number=Sing	6	amod	_	_
5	”	”	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	taistelun	taistelu	NOUN	_	Case=Gen|Derivation=U|Number=Sing	2	obl	_	SpaceAfter=No
7	”	”	PUNCT	_	_	6	punct	_	_
8	jälkeen	jälkeen	ADP	_	AdpType=Post	6	case	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj:cop	color:blue
1	Noradrenalina	Noradrenalina	PROPN	_	Case=Nom|Number=Sing	2	nsubj	_	Gen=Lääke
2	jatkuu	jatkua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SENSE=0|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	tavoitteena	tavoite	NOUN	_	Case=Ess|Number=Sing	2	parataxis	_	_
5	olisi	olla	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	cop	_	SENSE=0
6	purkaa	purkaa	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	csubj:cop	_	SENSE=0
7	infuusio	infuusio	NOUN	_	Case=Nom|Number=Sing	6	obj	_	Gen=tiputus|SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:cop	color:blue
1	On	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	ehkä	ehkä	ADV	_	_	3	advmod	_	_
3	parasta	hyvä	ADJ	_	Case=Par|Degree=Sup|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	että	että	SCONJ	_	_	6	mark	_	_
6	kämppiksellä	kämppis	NOUN	_	Case=Ade|Number=Sing	3	csubj:cop	_	_
7	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop:own	_	_
8	oma	oma	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	9	amod	_	_
9	auto	auto	NOUN	_	Case=Nom|Number=Sing	6	nsubj:cop	_	_
10	täällä	täällä	ADV	_	_	6	advmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


