---
layout: base
title:  'Statistics of iobj in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `iobj`

This relation is universal.

694 nodes (0%) are attached to their parents as `iobj`.

496 instances of `iobj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34582132564842.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (673; 97% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (15; 2% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	"	"	PUNCT	FB	_	3	punct	3:punct	SpaceAfter=No
2	Mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	3	iobj	3:iobj	_
3	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	che	che	SCONJ	CS	_	6	mark	6:mark	_
5	siano	essere	AUX	VA	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
6	proposte	proposta	NOUN	S	Gender=Fem|Number=Plur	3	csubj	3:csubj	_
7	serie	serio	ADJ	A	Gender=Fem|Number=Plur	6	amod	6:amod	_
8	e	e	CCONJ	CC	_	9	cc	9:cc	_
9	condivisibili	condivisibile	ADJ	A	Number=Plur	7	conj	6:amod|7:conj:e	SpaceAfter=No
10	"	"	PUNCT	FB	_	3	punct	3:punct	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Le	le	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	iobj	3:iobj	_
2	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	simpatica	simpatico	ADJ	A	Gender=Fem|Number=Sing	0	root	0:root	_
4	Nicole	Nicole	PROPN	SP	_	3	nsubj	3:nsubj	_
5	Kidman	Kidman	PROPN	SP	_	4	flat:name	4:flat:name	SpaceAfter=No
6	?	?	PUNCT	FS	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	E	e	CCONJ	CC	_	3	cc	3:cc	_
2	vi	vi	PRON	PC	Clitic=Yes|PronType=Prs	3	iobj	3:iobj	_
3	lancio	lancio	NOUN	S	Gender=Masc|Number=Sing	0	root	0:root	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	5:det	SpaceAfter=No
5	idea	idea	NOUN	S	Gender=Fem|Number=Sing	3	obj	3:obj	_
6	che	che	SCONJ	CS	_	9	mark	9:mark	_
7	queste	questo	PRON	PD	Gender=Fem|Number=Plur|PronType=Dem	9	nsubj	9:nsubj	_
8	siano	essere	AUX	VA	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
9	membrane	membrana	NOUN	S	Gender=Fem|Number=Plur	5	acl	5:acl:che	_
10	neurologiche	neurologico	ADJ	A	Gender=Fem|Number=Plur	9	amod	9:amod	_
11	estese	esteso	ADJ	A	Gender=Fem|Number=Plur	9	amod	9:amod	SpaceAfter=No
12	.	.	PUNCT	FS	_	3	punct	3:punct	_

~~~


