---
layout: base
title:  'Statistics of compound in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `compound`

This relation is universal.

758 nodes (0%) are attached to their parents as `compound`.

758 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1622691292876.

The following 10 pairs of parts of speech are connected with `compound`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (655; 86% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (79; 10% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (10; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	2:det	SpaceAfter=No
2	apprendista	apprendista	NOUN	S	Number=Sing	9	nsubj	9:nsubj	_
3	stregone	stregone	NOUN	S	Gender=Masc|Number=Sing	2	compound	2:compound	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	2:punct	_
5	evidentemente	evidentemente	ADV	B	_	9	advmod	9:advmod	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	5:punct	_
7	non	non	ADV	BN	PronType=Neg	9	advmod	9:advmod	_
8	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
9	rinunciato	rinunciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
10	"	"	PUNCT	FB	_	9	punct	9:punct	SpaceAfter=No
11	.	.	PUNCT	FS	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Feb	Feb	PROPN	SP	_	0	root	0:root	_
2	26	26	NUM	N	NumType=Card	1	nummod	1:nummod	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	2014	2014	NUM	N	NumType=Card	2	compound	2:compound	SpaceAfter=No
5	.	.	PUNCT	FS	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	a	a	X	X	_	3	nmod	3:nmod	SpaceAfter=No
2	)	)	PUNCT	FF	_	1	punct	1:punct	_
3	trasporti	trasporto	NOUN	S	Gender=Masc|Number=Plur	0	root	0:root	_
4	ad	ad	X	SW	Foreign=Yes	3	compound	3:compound	_
5	hoc	hoc	X	SW	Foreign=Yes	4	flat:foreign	4:flat:foreign	_
6	di	di	ADP	E	_	7	case	7:case	_
7	merci	merce	NOUN	S	Gender=Fem|Number=Plur	3	nmod	3:nmod:di	_
8	pericolose	pericoloso	ADJ	A	Gender=Fem|Number=Plur	7	amod	7:amod	SpaceAfter=No
9	;	;	PUNCT	FC	_	3	punct	3:punct	_

~~~


