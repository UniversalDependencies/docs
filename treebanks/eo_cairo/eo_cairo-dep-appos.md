---
layout: base
title:  'Statistics of appos in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `appos`

This relation is universal.

3 nodes (2%) are attached to their parents as `appos`.

3 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (2; 67% instances), <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Nek	nek	CCONJ	_	_	2	cc	_	_
2	Peter	Peter	PROPN	_	_	7	nsubj:pass	_	_
3	Smith	Smith	PROPN	_	_	2	appos	_	_
4	nek	nek	CCONJ	_	_	5	cc	_	_
5	Mary	Mary	PROPN	_	_	2	conj	_	_
6	Brown	Brown	PROPN	_	_	5	appos	_	_
7	povus	povi	VERB	_	Mood=Sub|VerbForm=Fin	0	root	_	_
8	esti	esti	AUX	_	VerbForm=Inf	9	aux:pass	_	_
9	elektitaj	elekti	VERB	_	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Ŝi	ŝi	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	2	nsubj	_	_
2	kreskis	kreski	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	en	en	ADP	_	_	4	case	_	_
4	Parizo	Parizo	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	la	la	DET	_	_	7	det	_	_
7	ĉefurbo	ĉefurbo	NOUN	_	Case=Nom|Number=Sing	4	appos	_	_
8	de	de	ADP	_	_	9	case	_	_
9	Francio	Francio	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


