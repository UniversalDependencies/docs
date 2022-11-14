---
layout: base
title:  'Statistics of compound in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `compound`

This relation is universal.

89 nodes (0%) are attached to their parents as `compound`.

89 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08988764044944.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (85; 96% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	Sì	sì	INTJ	I	Polarity=Pos	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	signor	signore	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	Presidente	presidente	NOUN	S	Number=Sing	3	compound	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	FALANGA	Falanga	PROPN	SP	_	0	root	_	_
2	(	(	PUNCT	FB	_	3	punct	_	SpaceAfter=No
3	FI	FI	PROPN	SP	_	1	dep	_	SpaceAfter=No
4	-	-	PUNCT	FF	_	3	punct	_	SpaceAfter=No
5	PdL	PdL	PROPN	SP	_	3	compound	_	_
6	XVII	diciassettesimo	ADJ	NO	Number=Sing|NumType=Ord	3	amod	_	SpaceAfter=No
7	)	)	PUNCT	FB	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 compound	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	ordine	ordine	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	_
3	di	di	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	giorno	giorno	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	reca	recare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	discussione	discussione	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	_
9	di	di	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	documento	documento	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	_
12	LVII	LVII	ADJ	A	Number=Sing|NumType=Ord	11	amod	_	SpaceAfter=No
13	-	-	PUNCT	FF	_	12	punct	_	_
14	bis	bis	NOUN	S	Gender=Masc	12	compound	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	11	punct	_	_
16	n.	numero	NOUN	S	Gender=Masc	11	nmod	_	_
17	1	1	NUM	N	NumType=Card	16	nummod	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	6	punct	_	_

~~~


