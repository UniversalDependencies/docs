---
layout: base
title:  'Statistics of discourse in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-INTJ.html">INTJ</a></tt> (3; 43% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 discourse	color:blue
1	"	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	Kita	kita	PRON	PRP	Clusivity=In|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	pengen	pengen	X	FW	Foreign=Yes	4	obl	_	_
4	menunjukkan	tunjuk	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	kayak-kayaknya	kayak	X	FW	Foreign=Yes	12	obl	_	_
6	nih	nih	INTJ	UH	_	12	discourse	_	_
7	kalau	kalau	SCONJ	IN	_	9	mark	_	_
8	besok	besok	NOUN	NN	Number=Sing	9	obl	_	_
9	susah	susah	ADJ	JJ	_	12	advcl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	kita	kita	PRON	PRP	Clusivity=In|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
12	mau	mau	VERB	VB	Mood=Ind|Voice=Act	4	ccomp	_	_
13	minjam	minjam	VERB	VB	Mood=Ind|Voice=Act	12	xcomp	_	_
14	ke	ke	ADP	IN	_	15	case	_	_
15	Bank	Bank	PROPN	NNP	_	13	obl	_	_
16	Dunia	Dunia	PROPN	NNP	_	15	flat:name	_	SpaceAfter=No
17	,	,	PUNCT	,	_	4	punct	_	SpaceAfter=No
18	"	"	PUNCT	''	_	4	punct	_	_
19	tutur	tutur	VERB	VB	Mood=Ind|Voice=Act	4	advcl	_	_
20	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	19	nsubj	_	_
21	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse	color:blue
1	"	"	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Ini	ini	PRON	PRP	PronType=Dem	3	obl	_	_
3	edan	edan	ADJ	JJ	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	edan	edan	ADJ	JJ	_	3	discourse	_	SpaceAfter=No
6	,	,	PUNCT	,	_	3	punct	_	_
7	edan	edan	ADJ	JJ	_	3	discourse	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	SpaceAfter=No
9	"	"	PUNCT	''	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	"	"	PUNCT	``	_	6	punct	_	SpaceAfter=No
2	Ok	Ok	INTJ	UH	_	6	discourse	_	SpaceAfter=No
3	,	,	PUNCT	,	_	6	punct	_	_
4	ini	ini	PRON	PRP	PronType=Dem	6	nsubj	_	_
5	semata-mata	mata	ADV	RB	_	6	advmod	_	_
6	kekeliruan	keliru	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	SpaceAfter=No
8	"	"	PUNCT	''	_	6	punct	_	_
9	kata	kata	VERB	VB	Mood=Ind|Voice=Act	6	parataxis	_	_
10	nya	nya	PRON	PRP	Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


