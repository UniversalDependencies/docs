---
layout: base
title:  'Statistics of nsubj:pass in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="eo_cairo-dep-nsubj.html">nsubj</a></tt>.

2 nodes (1%) are attached to their parents as `nsubj:pass`.

2 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Ĉi	ĉi	PART	_	_	2	advmod	_	_
2	tiu	tiu	DET	_	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
3	letero	letero	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
4	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	de	de	ADP	_	_	6	case	_	_
6	Petro	Petro	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
7	kaj	kaj	CCONJ	_	_	10	cc	_	_
8	ĝi	ĝi	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	10	nsubj:pass	_	_
9	estis	esti	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	transdonita	transdoni	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	parataxis	_	_
11	hieraŭ	hieraŭ	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
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


