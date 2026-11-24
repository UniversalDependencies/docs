---
layout: base
title:  'Statistics of csubj in UD_Greek-Griko'
udver: '2'
---

## Treebank Statistics: UD_Greek-Griko: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="el_griko-pos-ADV.html">ADV</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Kristè	Kristò	PROPN	_	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	_
3	mu	mu	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	pè	leo	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	mmu	ivò	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	iobj	_	_
7	'sù	ivò	PRON	_	Case=Voc|Number=Sing|Person=2|PronType=Prs	5	vocative	_	_
8	pos	pos	ADV	_	PronType=Int	5	ccomp	_	_
9	è	ime	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
10	pp'	pu	SCONJ	_	_	12	mark	_	_
11	ènna	ènna	AUX	_	VerbType=Mod	12	aux	_	_
12	kamo	kanno	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	csubj	_	_
13	maneχèḍḍa	manechuddhi	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	12	xcomp	_	_
14	mu	mu	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	13	nmod	_	_
15	!	!	PUNCT	_	_	5	punct	_	_
16	"	"	PUNCT	_	_	5	punct	_	_
17	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	cinì	cino	PRON	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	iobj	_	_
2	tis	ivò	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	fènato	fènome	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
4	àscimo	àscimo	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	3	xcomp	_	_
5	na	na	SCONJ	_	_	6	mark	_	_
6	pì	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
7	ton	o	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	deskòrso	deskorso	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
9	pu	pu	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	11	obj	_	_
10	iche	echo	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	aux	_	_
11	kàmonta	kanno	VERB	_	Aspect=Perf|VerbForm=Conv|Voice=Act	8	acl:relcl	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


