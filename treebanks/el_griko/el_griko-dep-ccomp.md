---
layout: base
title:  'Statistics of ccomp in UD_Greek-Griko'
udver: '2'
---

## Treebank Statistics: UD_Greek-Griko: Relations: `ccomp`

This relation is universal.

39 nodes (3%) are attached to their parents as `ccomp`.

28 instances of `ccomp` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.82051282051282.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (34; 87% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-INTJ.html">INTJ</a></tt> (2; 5% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 ccomp	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 ccomp	color:blue
1	Ce	ce	DET	_	Foreign=Yes|PronType=Int	2	det	_	_
2	cosa	cosa	ADV	_	Foreign=Yes|PronType=Int	4	ccomp	_	_
3	?!	?!	PUNCT	_	_	2	punct	_	_
4	Ipe	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	aderfò	aderfò	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
6	,	,	PUNCT	_	_	9	punct	_	_
7	m'	me	ADP	_	_	9	case	_	_
8	in	o	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	aria	aria	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	ìpane	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	Oh	oh	INTJ	_	_	1	ccomp	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	ti	ti	ADV	_	PronType=Int	7	advmod	_	_
6	en	ime	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	òria	òrio	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	3	conj	_	_
8	isi	ciso	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	kiatera	kiatera	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
10	!	!	PUNCT	_	_	3	punct	_	_

~~~


