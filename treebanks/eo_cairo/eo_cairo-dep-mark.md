---
layout: base
title:  'Statistics of mark in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `mark`

This relation is universal.

5 nodes (3%) are attached to their parents as `mark`.

5 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 2 pairs of parts of speech are connected with `mark`: <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-SCONJ.html">SCONJ</a></tt> (4; 80% instances), <tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_cairo-pos-SCONJ.html">SCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	pensas	pensi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	ke	ke	SCONJ	_	_	5	mark	_	_
5	pluvas	pluvi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
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


