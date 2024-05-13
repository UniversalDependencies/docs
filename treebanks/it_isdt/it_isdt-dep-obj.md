---
layout: base
title:  'Statistics of obj in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `obj`

This relation is universal.

10251 nodes (3%) are attached to their parents as `obj`.

9048 instances of `obj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.32591942249537.

The following 19 pairs of parts of speech are connected with `obj`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (8117; 79% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1599; 16% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (395; 4% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (56; 1% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (27; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-SYM.html">SYM</a></tt> (13; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obj	color:blue
1	"	"	PUNCT	FB	_	3	punct	3:punct	SpaceAfter=No
2	Lei	lei	PRON	PE	Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	_
5	tipica	tipico	ADJ	A	Gender=Fem|Number=Sing	6	amod	6:amod	_
6	camminata	camminata	NOUN	S	Gender=Fem|Number=Sing	3	obj	3:obj	_
7	da	da	ADP	E	_	8	case	8:case	_
8	spia	spia	NOUN	S	Gender=Fem|Number=Sing	6	nmod	6:nmod:da	SpaceAfter=No
9	"	"	PUNCT	FB	_	3	punct	3:punct	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	La	lo	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	obj	2:obj	_
2	pensano	pensare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	a	a	ADP	E	_	6	case	6:case	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
5	stesso	stesso	ADJ	A	Gender=Masc|Number=Sing	6	amod	6:amod	_
6	modo	modo	NOUN	S	Gender=Masc|Number=Sing	2	obl	2:obl:a	_
7	due	due	NUM	N	NumType=Card	8	nummod	8:nummod	_
8	turiste	turista	NOUN	S	Gender=Fem|Number=Plur	2	nsubj	2:nsubj	_
9	di	di	ADP	E	_	10	case	10:case	_
10	Varsavia	Varsavia	PROPN	SP	_	8	nmod	8:nmod:di	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	Chi	chi	PRON	PQ	PronType=Int	2	nsubj	2:nsubj	_
2	vinse	vincere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	4:det	SpaceAfter=No
4	Oscar	Oscar	PROPN	SP	_	2	obj	2:obj	_
5	per	per	ADP	E	_	8	case	8:case	_
6	"	"	PUNCT	FB	_	8	punct	8:punct	SpaceAfter=No
7	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	8:det	_
8	Bella	Bella	PROPN	SP	_	4	nmod	4:nmod:per	_
9	e	e	CCONJ	CC	_	11	cc	11:cc	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	_
11	Bestia	Bestia	PROPN	SP	_	8	conj	4:nmod:per|8:conj:e	SpaceAfter=No
12	"	"	PUNCT	FB	_	8	punct	8:punct	SpaceAfter=No
13	?	?	PUNCT	FS	_	2	punct	2:punct	_

~~~


