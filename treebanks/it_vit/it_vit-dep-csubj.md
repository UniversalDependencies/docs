---
layout: base
title:  'Statistics of csubj in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `csubj`

This relation is universal.

101 nodes (0%) are attached to their parents as `csubj`.

52 instances of `csubj` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.5049504950495.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (42; 42% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (30; 30% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (20; 20% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
2	che	che	DET	DQ	Gender=Masc|Number=Sing|PronType=Int	3	det	_	_
3	senso	senso	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
4	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	parlare	parlare	VERB	V	VerbForm=Inf	4	csubj	_	_
6	di	di	ADP	E	_	7	case	_	_
7	media	media	NOUN	S	Gender=Masc	5	obl	_	_
8	di	di	ADP	E	_	9	case	_	_
9	radioattività	radioattività	NOUN	S	Gender=Fem	5	obl	_	_
10	su	su	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	territorio	territorio	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	_
13	nazionale	nazionale	ADJ	A	Number=Sing	12	amod	_	SpaceAfter=No
14	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	Bruxelles	Bruxelles	PROPN	SP	_	0	root	_	_
2	a	a	ADP	E	_	4	case	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	Italia	Italia	PROPN	SP	_	1	nmod	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	1	punct	_	_
6	urgente	urgente	ADJ	A	Number=Sing	1	parataxis	_	_
7	ridurre	ridurre	VERB	V	VerbForm=Inf	6	csubj	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	deficit	deficit	NOUN	S	Gender=Masc	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 csubj	color:blue
1	Navigare	navigare	VERB	V	VerbForm=Inf	9	csubj	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	3	punct	_	_
3	navigare	navigare	VERB	V	VerbForm=Inf	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	9	punct	_	_
5	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
7	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det:poss	_	_
8	unico	unico	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
9	pensiero	pensiero	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	_	_

~~~


