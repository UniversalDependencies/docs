---
layout: base
title:  'Statistics of fixed in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `fixed`

This relation is universal.

2 nodes (0%) are attached to their parents as `fixed`.

2 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="tr_tuecl-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Ne	ne	CCONJ	_	_	3	cc	_	_
2	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	8	nsubj	_	_
3	Smith	Smith	PROPN	_	Case=Nom|Number=Sing	2	flat	_	_
4	ne	ne	CCONJ	_	_	6	cc	_	_
5	de	de	ADV	_	_	4	fixed	_	_
6	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
7	Brown	Brown	PROPN	_	Case=Nom|Number=Sing	6	flat	_	_
8	seçilebilir	seç	VERB	_	Aspect=Imp|Evident=Fh|Mood=Pot|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	kendi	kendi	PRON	_	Case=Nom|Number=Sing|Person=3|Reflex=Yes	4	obl	_	_
3	kendine	kendi	PRON	_	Case=Dat|Number=Sing|Person=3|Reflex=Yes	2	fixed	_	_
4	olmayı	ol	AUX	_	Case=Acc|Number=Sing|VerbForm=Vnoun	5	ccomp	_	_
5	seviyor	sev	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


