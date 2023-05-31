---
layout: base
title:  'Statistics of iobj:agent in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `iobj:agent`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-iobj.html">iobj</a></tt>.

1 nodes (0%) are attached to their parents as `iobj:agent`.

1 instances of `iobj:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `iobj:agent`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 iobj:agent	color:blue
1	et	et	CCONJ	_	_	7	cc	_	AlignBegin=80715|AlignEnd=80880
2	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	AlignBegin=80880|AlignEnd=81045
3	pêche	pêche	NOUN	_	Gender=Fem|Number=Sing	7	dislocated	_	AlignBegin=81045|AlignEnd=81210|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=81210|AlignEnd=81210
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	nsubj	_	AlignBegin=81210|AlignEnd=81337
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	AlignBegin=81337|AlignEnd=81464
7	essayé	essayer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	AlignBegin=81464|AlignEnd=81590
8	de	de	ADP	_	_	11	mark	_	AlignBegin=81590|AlignEnd=81717
9	lui	lui	PRON	_	_	11	iobj:agent	_	AlignBegin=81717|AlignEnd=81844
10	faire	faire	AUX	_	VerbForm=Inf	11	aux:caus	_	AlignBegin=81844|AlignEnd=81971|Subject=SubjRaising
11	manger	manger	VERB	_	VerbForm=Inf	7	xcomp	_	AlignBegin=81971|AlignEnd=82097|Subject=ObjRaising
12	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	AlignBegin=82097|AlignEnd=82224
13	pêche	pêche	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	AlignBegin=82224|AlignEnd=82351|SpaceAfter=No
14	.	.	PUNCT	_	_	7	punct	_	AlignBegin=82351|AlignEnd=82351

~~~


