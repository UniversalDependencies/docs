---
layout: base
title:  'Statistics of conj in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `conj`

This relation is universal.

8 nodes (5%) are attached to their parents as `conj`.

8 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.625.

The following 5 pairs of parts of speech are connected with `conj`: <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (2; 25% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (2; 25% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt> (2; 25% instances), <tt><a href="eo_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_cairo-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	Maria	Maria	PROPN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	gajnis	gajni	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	bronzon	bronzo	NOUN	_	Case=Acc|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Petro	Petro	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
6	arĝenton	arĝento	NOUN	_	Case=Acc|Number=Sing	5	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	kaj	kaj	CCONJ	_	_	9	cc	_	_
9	Jane	Jane	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
10	oron	oro	NOUN	_	Case=Acc|Number=Sing	9	orphan	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Li	li	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	provis	provi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	ĉesi	ĉesi	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	fumi	fumi	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	kaj	_	CCONJ	_	_	6	cc	_	_
6	trinki	trinki	VERB	_	VerbForm=Inf	4	conj	_	SpaceAfter=No
7	.	_	PUNCT	_	_	2	punct	_	_

~~~


