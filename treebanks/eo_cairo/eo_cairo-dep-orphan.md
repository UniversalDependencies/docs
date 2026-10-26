---
layout: base
title:  'Statistics of orphan in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `orphan`

This relation is universal.

3 nodes (2%) are attached to their parents as `orphan`.

3 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 orphan	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	Li	li	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	2	nsubj	_	_
2	aĉetis	aĉeti	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	aŭton	aŭto	NOUN	_	Case=Acc|Number=Sing	2	obj	_	_
4	sed	sed	SCONJ	_	_	6	mark	_	_
5	lia	li	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	frato	frato	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
7	nur	nur	ADV	_	_	8	advmod	_	_
8	biciklon	biciklo	NOUN	_	Case=Acc|Number=Sing	6	orphan	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


