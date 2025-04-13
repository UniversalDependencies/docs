---
layout: base
title:  'Statistics of amod in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `amod`

This relation is universal.

2436 nodes (3%) are attached to their parents as `amod`.

1550 instances of `amod` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14244663382594.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (2352; 97% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (46; 2% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (21; 1% instances), <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="pt_dantestocks-pos-X.html">X</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	fundo	fundo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	duplo	duplo	ADJ	_	Gender=Masc|Number=Sing	1	amod	_	_
3	ALSC3	ALSC3	PROPN	_	_	1	parataxis	_	_
4	,	,	PUNCT	_	_	5	punct	_	_
5	OCOI	OCOI	PROPN	_	_	3	conj	_	_
6	DAYC4	DAYC4	PROPN	_	_	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	LLIS3	LLIS3	PROPN	_	_	3	conj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	EMBR3	EMBR3	PROPN	_	_	3	conj	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	#csna3	#csna3	PROPN	_	_	0	root	_	_
2	semanal	semanal	ADJ	_	Number=Sing	1	amod	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	mensagem	mensagem	NOUN	_	Gender=Fem|Number=Sing	1	parataxis	_	SpaceAfter=No
5	:	:	PUNCT	_	_	6	punct	_	_
6	950998	950998	NUM	_	NumType=Card	4	nmod	_	SpaceAfter=No
7	)	)	PUNCT	_	_	4	punct	_	_
8	http://t.co/suRkLOSBUz	http://t.co/suRkLOSBUz	SYM	_	_	1	parataxis	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	#GGBR4	#GGBR4	X	_	_	2	parataxis	_	_
2	Vale	valer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ficar	ficar	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	de	de	ADP	_	_	5	case	_	_
5	olho	olho	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
6	comparando	comparar	VERB	_	VerbForm=Ger	3	advcl	_	_
7	sempre	sempre	ADV	_	_	6	advmod	_	_
8	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	6	obj	_	_
9	semanal	semanal	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


