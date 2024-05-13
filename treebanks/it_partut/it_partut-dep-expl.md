---
layout: base
title:  'Statistics of expl in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_partut-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_partut-dep-expl-pass.html">expl:pass</a></tt>.

288 nodes (1%) are attached to their parents as `expl`.

201 instances of `expl` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20138888888889.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (287; 100% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	qui	qui	ADV	B	_	4	advmod	_	_
3	c'	ci	PRON	PC	Clitic=Yes|PronType=Prs	4	expl	_	SpaceAfter=No
4	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	fungo	fungo	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	_
7	vecchio	vecchio	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	_
8	come	come	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	mondo	mondo	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 expl	color:blue
1	NEW	New	PROPN	SP	_	12	nmod	_	_
2	YORK	York	PROPN	SP	_	1	flat:name	_	_
3	-	-	PUNCT	FF	_	1	punct	_	_
4	In	in	ADP	E	_	7	case	_	_
5	tutto	tutto	DET	T	Gender=Masc|Number=Sing|PronType=Tot	7	det:predet	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	mondo	mondo	NOUN	S	Gender=Masc|Number=Sing	12	nmod	_	_
8	c'	ci	PRON	PC	Clitic=Yes|PronType=Prs	12	expl	_	SpaceAfter=No
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
10	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	forte	forte	ADJ	A	Number=Sing	12	amod	_	_
12	entusiasmo	entusiasmo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
13	per	per	ADP	E	_	15	case	_	_
14	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	15	det	_	_
15	innovazioni	innovazione	NOUN	S	Gender=Fem|Number=Plur	12	nmod	_	_
16	tecnologiche	tecnologico	ADJ	A	Gender=Fem|Number=Plur	15	amod	_	_
17	simbolizzate	simbolizzato	ADJ	A	Gender=Fem|Number=Plur	15	amod	_	_
18	da	da	ADP	E	_	19	case	_	_
19	Silicon	Silicon	PROPN	SP	_	17	obl	_	_
20	Valley	Valley	PROPN	SP	_	19	flat:name	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	12	punct	_	_

~~~


