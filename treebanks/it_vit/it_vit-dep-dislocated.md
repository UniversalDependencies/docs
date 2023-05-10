---
layout: base
title:  'Statistics of dislocated in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `dislocated`

This relation is universal.

50 nodes (0%) are attached to their parents as `dislocated`.

34 instances of `dislocated` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.08.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (45; 90% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 dislocated	color:blue
1	Ma	ma	CCONJ	CC	_	9	cc	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	musica	musica	NOUN	S	Gender=Fem|Number=Sing	9	dislocated	_	_
4	italiana	italiano	ADJ	A	Gender=Fem|Number=Sing	3	amod	_	_
5	Caetano	Caetano	PROPN	SP	_	9	nsubj	_	_
6	come	come	PRON	PQ	PronType=Int	9	obl	_	_
7	l'	lo	PRON	PC	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	9	obj	_	SpaceAfter=No
8	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	scoperta	scoprire	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	?	?	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 dislocated	color:blue
1	Ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	guadagnato	guadagnare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	minuti	minuto	NOUN	S	Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	8	punct	_	_
5	prima	prima	ADV	B	_	8	advmod	_	_
6	ne	ne	PRON	PC	Clitic=Yes|PronType=Prs	8	iobj	_	_
7	avevo	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	persi	perdere	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	conj	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	12	punct	_	_
10	altri	altro	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	12	dislocated	_	_
11	li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	obj	_	_
12	perderò	perdere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	2	conj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dislocated	color:blue
1	Francesco	Francesco	PROPN	SP	_	5	dislocated	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	5	punct	_	_
3	chi	chi	PRON	PQ	PronType=Int	5	nsubj	_	_
4	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	conosce	conoscere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	FS	_	5	punct	_	_

~~~


