---
layout: base
title:  'Statistics of iobj in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `iobj`

This relation is universal.

683 nodes (0%) are attached to their parents as `iobj`.

483 instances of `iobj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33382137628111.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (661; 97% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (15; 2% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
3	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	che	che	SCONJ	CS	_	6	mark	_	_
5	siano	essere	AUX	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	proposte	proposta	NOUN	S	Gender=Fem|Number=Plur	3	csubj	_	_
7	serie	serio	ADJ	A	Gender=Fem|Number=Plur	6	amod	_	_
8	e	e	CCONJ	CC	_	9	cc	_	_
9	condivisibili	condivisibile	ADJ	A	Number=Plur	7	conj	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Le	lo	PRON	PC	Clitic=Yes|Gender=Fem|Person=3|PronType=Prs	3	iobj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	simpatica	simpatico	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
4	Nicole	Nicole	PROPN	SP	_	3	nsubj	_	_
5	Kidman	Kidman	PROPN	SP	_	4	flat:name	_	SpaceAfter=No
6	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	E	e	CCONJ	CC	_	3	cc	_	_
2	vi	vi	PRON	PC	Clitic=Yes|PronType=Prs	3	iobj	_	_
3	lancio	lancio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	idea	idea	NOUN	S	Gender=Fem|Number=Sing	3	obj	_	_
6	che	che	SCONJ	CS	_	9	mark	_	_
7	queste	questo	PRON	PD	Gender=Fem|Number=Plur|PronType=Dem	9	nsubj	_	_
8	siano	essere	AUX	VA	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	membrane	membrana	NOUN	S	Gender=Fem|Number=Plur	5	acl	_	_
10	neurologiche	neurologico	ADJ	A	Gender=Fem|Number=Plur	9	amod	_	_
11	estese	esteso	ADJ	A	Gender=Fem|Number=Plur	9	amod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	3	punct	_	_

~~~


