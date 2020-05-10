---
layout: base
title:  'Statistics of list in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `list`

This relation is universal.

49 nodes (0%) are attached to their parents as `list`.

49 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.83673469387755.

The following 4 pairs of parts of speech are connected with `list`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (33; 67% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (13; 27% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (2; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	A-1	A-1	PROPN	NNP	Number=Sing	0	root	_	Entity=(organization-65)
2	2470	2470	NUM	CD	NumType=Card	3	nummod	_	Entity=(place-66
3	Lemoine	Lemoine	PROPN	NNP	Number=Sing	4	compound	_	_
4	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	_	Entity=place-66)|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	tel	Tel	NOUN	NN	Number=Sing	8	nsubj	_	SpaceAfter=No
7	:	:	PUNCT	:	_	6	punct	_	_
8	1	1	NUM	CD	NumType=Card	1	list	_	_
9	201	201	NUM	CD	NumType=Card	8	flat	_	_
10	944-3737	944-3737	NUM	CD	NumType=Card	8	flat	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 list	color:blue
1	A-1	A-1	PROPN	NNP	Number=Sing	0	root	_	Entity=(organization-65)
2	2470	2470	NUM	CD	NumType=Card	3	nummod	_	Entity=(place-66
3	Lemoine	Lemoine	PROPN	NNP	Number=Sing	4	compound	_	_
4	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	_	Entity=place-66)|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	tel	Tel	NOUN	NN	Number=Sing	8	nsubj	_	SpaceAfter=No
7	:	:	PUNCT	:	_	6	punct	_	_
8	1	1	NUM	CD	NumType=Card	1	list	_	_
9	201	201	NUM	CD	NumType=Card	8	flat	_	_
10	944-3737	944-3737	NUM	CD	NumType=Card	8	flat	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	Michiel	Michiel	PROPN	NNP	Number=Sing	0	root	_	Entity=(person-4
2	Cock	Cock	PROPN	NNP	Number=Sing	1	flat	_	Entity=person-4)
3	m.p.cock@vu.nl	m.p.cock@vu.nl	PROPN	NNP	Number=Sing	1	list	_	Entity=(abstract-5)
4	Vrije	Vrije	X	FW	_	1	list	_	Entity=(organization-6
5	Universiteit	Universiteit	X	FW	_	4	flat	_	_
6	Amsterdam	Amsterdam	PROPN	NNP	Number=Sing	4	flat	_	Entity=(place-7|SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	Entity=(place-8
9	Netherlands	Netherlands	PROPN	NNPS	Number=Plur	1	list	_	Entity=organization-6)place-7)place-8)

~~~


