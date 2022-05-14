---
layout: base
title:  'Statistics of cc in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `cc`

This relation is universal.

8158 nodes (3%) are attached to their parents as `cc`.

8156 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.67957832802157.

The following 19 pairs of parts of speech are connected with `cc`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (3721; 46% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (2577; 32% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (907; 11% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (510; 6% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (186; 2% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (106; 1% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (99; 1% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (12; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="it_isdt-pos-DET.html">DET</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="it_isdt-pos-ADP.html">ADP</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-AUX.html">AUX</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_isdt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	E	e	CCONJ	CC	_	4	cc	4:cc	_
2	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	4:det	_
3	"	"	PUNCT	FB	_	4	punct	4:punct	SpaceAfter=No
4	colleghi	collega	NOUN	S	Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
5	"	"	PUNCT	FB	_	4	punct	4:punct	_
6	di	di	ADP	E	_	7	case	7:case	_
7	Saxa	Saxa	PROPN	SP	_	4	nmod	4:nmod:di	_
8	Rubra	Rubra	PROPN	SP	_	7	flat:name	7:flat:name	SpaceAfter=No
9	?	?	PUNCT	FS	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Allora	allora	ADV	B	_	4	cc	4:cc	_
2	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	4	expl	4:expl	_
3	sono	essere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	innervosita	innervosire	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
5	e	e	CCONJ	CC	_	7	cc	7:cc	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
7	temuto	temere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	4:conj:e	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	9:det	_
9	beffa	beffa	NOUN	S	Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
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


