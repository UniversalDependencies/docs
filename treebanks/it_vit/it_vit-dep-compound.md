---
layout: base
title:  'Statistics of compound in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `compound`

This relation is universal.

956 nodes (0%) are attached to their parents as `compound`.

956 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06380753138075.

The following 12 pairs of parts of speech are connected with `compound`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (894; 94% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (26; 3% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (12; 1% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound	color:blue
1	Che	che	DET	DQ	PronType=Int	2	det	_	_
2	cosa	cosa	PRON	PQ	Number=Sing|PronType=Int	3	obj	_	_
3	farà	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	con	con	ADP	E	_	7	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	work	work	NOUN	S	Gender=Masc	3	obl	_	_
8	station	station	NOUN	S	Gender=Masc	7	compound	_	_
9	l'	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	impiegato	impiegato	NOUN	S	Gender=Masc|Number=Sing	3	nsubj	_	_
11	di	di	ADP	E	_	13	case	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	1990	1990	NUM	N	NumType=Card	10	nmod	_	SpaceAfter=No
14	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Polemica	polemica	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	Fiat	Fiat	PROPN	SP	_	1	nmod	_	_
3	sindacati	sindacato	NOUN	S	Gender=Masc|Number=Plur	2	compound	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Uno	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	sportello	sportello	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	self	self	X	SW	Foreign=Yes	2	compound	_	_
4	service	service	X	SW	Foreign=Yes	3	flat:foreign	_	_
5	per	per	ADP	E	_	7	case	_	_
6	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	pensionati	pensionato	NOUN	S	Gender=Masc|Number=Plur	2	nmod	_	_
8	romani	romano	ADJ	A	Gender=Masc|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


