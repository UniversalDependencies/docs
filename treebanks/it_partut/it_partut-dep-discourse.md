---
layout: base
title:  'Statistics of discourse in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.2.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADV.html">ADV</a></tt> (2; 40% instances), <tt><a href="it_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Sì	sì	ADV	B	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	onorevole	onorevole	NOUN	S	Number=Sing	6	vocative	_	_
4	Evans	Evans	PROPN	SP	_	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	ritengo	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	che	che	SCONJ	CS	_	18	mark	_	_
8	un'	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	iniziativa	iniziativa	NOUN	S	Gender=Fem|Number=Sing	18	nsubj	_	_
10	di	di	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	tipo	tipo	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	_
13	che	che	PRON	PR	PronType=Rel	15	nsubj	_	_
14	lei	lei	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	obj	_	_
15	propone	proporre	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	acl:relcl	_	_
16	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	_
17	assolutamente	assolutamente	ADV	B	_	18	advmod	_	_
18	opportuna	opportuno	ADJ	A	Gender=Fem|Number=Sing	6	ccomp	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 discourse	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	divario	divario	NOUN	S	Gender=Masc|Number=Sing	11	discourse	_	_
3	di	di	ADP	E	_	4	case	_	_
4	genere	genere	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
5	in	in	ADP	E	_	7	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	settore	settore	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
8	agricolo	agricolo	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	_
9	africano	africano	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	2	punct	_	_
11	ecco	ecco	ADV	B	_	0	root	_	_
12	perché	perché	SCONJ	CS	_	13	mark	_	_
13	bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
14	chiuder	chiudere	VERB	V	VerbForm=Inf	13	xcomp	_	_
15	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
16	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 discourse	color:blue
1	Lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	sappiamo	sapere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	giusto	giusto	ADJ	A	Gender=Masc|Number=Sing	2	discourse	_	SpaceAfter=No
6	?	?	PUNCT	FS	_	2	punct	_	_

~~~


