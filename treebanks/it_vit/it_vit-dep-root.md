---
layout: base
title:  'Statistics of root in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `root`

This relation is universal.

10087 nodes (4%) are attached to their parents as `root`.

10087 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.7894319421037.

The following 11 pairs of parts of speech are connected with `root`: -<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (6815; 68% instances), -<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (2113; 21% instances), -<tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (514; 5% instances), -<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (283; 3% instances), -<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (195; 2% instances), -<tt><a href="it_vit-pos-ADV.html">ADV</a></tt> (99; 1% instances), -<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (36; 0% instances), -<tt><a href="it_vit-pos-X.html">X</a></tt> (13; 0% instances), -<tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt> (10; 0% instances), -<tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), -<tt><a href="it_vit-pos-ADP.html">ADP</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	acqua	acqua	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
4	calda	caldo	ADJ	A	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	10	punct	_	_
6	più	più	ADV	B	_	10	advmod	_	_
7	o	o	CCONJ	CC	_	8	cc	_	_
8	meno	meno	ADV	B	_	6	conj	_	_
9	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl	_	_
10	veste	vestire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	come	come	ADP	E	_	4	case	_	_
3	un'	uno	NUM	N	Gender=Fem|Number=Sing|NumType=Card	4	nummod	_	SpaceAfter=No
4	energia	energia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	PronType=Rel	7	nsubj	_	_
6	sta	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	crescendo	crescere	VERB	V	VerbForm=Ger	4	acl:relcl	_	_
8	complessivamente	complessivamente	ADV	B	_	7	advmod	_	SpaceAfter=No
9	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	Bè	bè	INTJ	I	_	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FC	_	1	punct	_	_
3	dice	dire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
4	Nauges	Nauges	PROPN	SP	_	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	FC	_	3	punct	_	_
6	sarebbe	essere	AUX	VA	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	molto	molto	ADV	B	_	8	advmod	_	_
8	più	più	DET	DI	PronType=Ind	9	det	_	_
9	conveniente	conveniente	ADJ	A	Number=Sing	0	root	_	_
10	licenziare	licenziare	VERB	V	VerbForm=Inf	9	ccomp	_	_
11	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	manager	manager	NOUN	S	Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	9	punct	_	_

~~~


