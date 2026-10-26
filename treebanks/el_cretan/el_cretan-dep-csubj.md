---
layout: base
title:  'Statistics of csubj in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `csubj`

This relation is universal.

8 nodes (0%) are attached to their parents as `csubj`.

5 instances of `csubj` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (6; 75% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Δεν	δεν	PART	PtNg	Polarity=Neg	2	advmod	_	_
2	έπρεπε	πρέπει	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
4	παιδί	παιδί	NOUN	NoCm	Case=Voc|Gender=Neut|Number=Sing	2	vocative	_	_
5	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	_
6	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
7	να	να	SCONJ	PtSj	_	9	mark	_	_
8	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
9	πεις	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	csubj	_	_
10	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	αδιανόητο	αδιανόητος	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
4	πως	πως	SCONJ	CjSb	_	6	mark	_	_
5	μου	εγώ	PRON	PnPe	Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
6	λες	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
7	να	να	SCONJ	PtSj	_	8	mark	_	_
8	'ρθω	έρχομαι	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Pass	6	ccomp	_	_
9	να	να	SCONJ	PtSj	_	11	mark	_	_
10	τηνε	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=2|PronType=Prs	11	obj	_	MGloss=her-euphonic|MSeg=την-ε
11	θάψω	θάβω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	8	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Comm

~~~


