---
layout: base
title:  'Statistics of cc in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `cc`

This relation is universal.

8 nodes (5%) are attached to their parents as `cc`.

8 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 3 pairs of parts of speech are connected with `cc`: <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-CCONJ.html">CCONJ</a></tt> (4; 50% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-CCONJ.html">CCONJ</a></tt> (3; 38% instances), <tt><a href="eo_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_cairo-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Li	li	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	provis	provi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	ĉesi	ĉesi	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	fumi	fumi	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	kaj	_	CCONJ	_	_	6	cc	_	_
6	trinki	trinki	VERB	_	VerbForm=Inf	4	conj	_	SpaceAfter=No
7	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Ĉu	ĉu	PART	_	_	7	advmod	_	_
2	Iguazu	Iguazu	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
3	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
4	granda	granda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	aŭ	aŭ	CCONJ	_	_	6	cc	_	_
6	malgranda	malgranda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	lando	lando	NOUN	_	_	0	root	_	SpaceAfter=No
8	?	?	PUNCT	_	_	7	punct	_	_

~~~


