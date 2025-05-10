---
layout: base
title:  'Statistics of aux in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="eo_cairo-dep-aux-pass.html">aux:pass</a></tt>.

2 nodes (1%) are attached to their parents as `aux`.

2 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-AUX.html">AUX</a></tt> (1; 50% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-AUX.html">AUX</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Ŝi	ŝi	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	devus	devi	VERB	_	Mood=Sub|VerbForm=Fin	0	root	_	_
3	esti	esti	AUX	_	VerbForm=Inf	4	aux	_	_
4	faranta	faranta	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	2	xcomp	_	_
5	sian	si	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	hararon	hararo	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
7	sed	sed	SCONJ	_	_	11	mark	_	_
8	ial	ial	ADV	_	_	11	advmod	_	_
9	ŝi	ŝi	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	11	nsubj	_	_
10	ne	ne	ADV	_	_	11	advmod	_	_
11	farus	fari	VERB	_	Mood=Sub|VerbForm=Fin	4	advcl	_	_
12	tiun	tiu	DET	_	Case=Acc|Number=Sing	13	det	_	_
13	tagon	tago	NOUN	_	Case=Acc|Number=Sing	11	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


