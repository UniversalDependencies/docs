---
layout: base
title:  'Statistics of obj in UD_Greek-Griko'
udver: '2'
---

## Treebank Statistics: UD_Greek-Griko: Relations: `obj`

This relation is universal.

104 nodes (8%) are attached to their parents as `obj`.

61 instances of `obj` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68269230769231.

The following 4 pairs of parts of speech are connected with `obj`: <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-NOUN.html">NOUN</a></tt> (53; 51% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-PRON.html">PRON</a></tt> (48; 46% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obj	color:blue
1	ti	tis	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	2	det	_	_
2	fato	fato	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	_
3	ti'	evò	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	iobj	_	_
4	dìome	dinno	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
5	?	?	PUNCT	_	_	4	punct	_	_
6	ìpane	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	ce	ce	CCONJ	_	_	2	cc	_	_
2	pes	leo	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	_	_
3	to	evò	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
4	!	!	PUNCT	_	_	2	punct	_	_
5	ipe	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	cini	cino	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	nsubj	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obj	color:blue
1	Cini	cino	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	9	nsubj	_	_
2	,	,	PUNCT	_	_	4	punct	_	_
3	ka	ka	SCONJ	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	4	nsubj	_	_
4	akàpigghe	akapò	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
5	panta	panta	ADV	_	_	4	advmod	_	_
6	to	o	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Kkristò	Kristò	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	_
8	,	,	PUNCT	_	_	4	punct	_	_
9	anćìgnase	ancignò	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	na	na	SCONJ	_	_	12	mark	_	_
11	tto	ivò	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
12	pprakalìsi	prakalò	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	xcomp	_	_
13	će	ce	CCONJ	_	_	14	cc	_	_
14	ipe	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	conj	_	_
15	:	:	PUNCT	_	_	9	punct	_	_

~~~


