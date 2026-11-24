---
layout: base
title:  'Statistics of iobj in UD_Greek-Griko'
udver: '2'
---

## Treebank Statistics: UD_Greek-Griko: Relations: `iobj`

This relation is universal.

30 nodes (2%) are attached to their parents as `iobj`.

26 instances of `iobj` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-PRON.html">PRON</a></tt> (28; 93% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-NOUN.html">NOUN</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	ti	tis	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	2	det	_	_
2	fato	fato	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	_
3	ti'	evò	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	iobj	_	_
4	dìome	dinno	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
5	?	?	PUNCT	_	_	4	punct	_	_
6	ìpane	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 iobj	color:blue
1	E	o	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	gioveni	giòveno	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	8	iobj	_	_
3	pu	pu	PRON	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Rel	4	obj	_	_
4	iche	echo	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
5	'cessu	ecessu	ADV	_	_	4	advmod	_	_
6	,	,	PUNCT	_	_	2	punct	_	_
7	o'	evò	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	8	expl	_	_
8	dispiàcefse	dispiacèo	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	,	,	PUNCT	_	_	11	punct	_	_
10	c'	ce	CCONJ	_	_	11	cc	_	_
11	ìpane	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	conj	_	_
12	:	:	PUNCT	_	_	11	punct	_	_
13	oh	oh	INTJ	_	_	18	discourse	_	_
14	,	,	PUNCT	_	_	13	punct	_	_
15	màscia	màscia	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	18	vocative	_	_
16	,	,	PUNCT	_	_	15	punct	_	_
17	ti	ti	ADV	_	PronType=Int	18	advmod	_	_
18	èkames	kanno	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	11	ccomp	_	_
19	àscima	àscima	ADV	_	_	18	advmod	_	_
20	.	.	PUNCT	_	_	8	punct	_	_

~~~


