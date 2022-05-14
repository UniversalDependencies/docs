---
layout: base
title:  'Statistics of parataxis in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `parataxis`

This relation is universal.

420 nodes (0%) are attached to their parents as `parataxis`.

320 instances of `parataxis` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.5880952380952.

The following 23 pairs of parts of speech are connected with `parataxis`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (225; 54% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (58; 14% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (38; 9% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (20; 5% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (19; 5% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (12; 3% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 parataxis	color:blue
1	Dusty	Dusty	PROPN	SP	_	12	nsubj	12:nsubj	_
2	e	e	CCONJ	CC	_	3	cc	3:cc	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	1:conj:e|12:nsubj	SpaceAfter=No
4	,	,	PUNCT	FF	_	6	punct	6:punct	_
5	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	iobj	6:iobj	_
6	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	12:parataxis	_
7	dir	dire	VERB	V	VerbForm=Inf	6	csubj	6:csubj	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	7:obj	_
9	,	,	PUNCT	FF	_	12	punct	12:punct	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	_
11	domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	12	obl	12:obl	_
12	andiamo	andare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
13	in	in	ADP	E	_	14	case	14:case	_
14	chiesa	chiesa	NOUN	S	Gender=Fem|Number=Sing	12	obl	12:obl:in	_
15	qui	qui	ADV	B	_	12	advmod	12:advmod	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 parataxis	color:blue
1	"	"	PUNCT	FB	_	10	punct	10:punct	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	religione	religione	NOUN	S	Gender=Fem|Number=Sing	10	nsubj	10:nsubj	_
4	-	-	PUNCT	FB	_	5	punct	5:punct	_
5	sento	sentire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	parataxis	10:parataxis	_
6	dire	dire	VERB	V	VerbForm=Inf	5	ccomp	5:ccomp	_
7	-	-	PUNCT	FB	_	5	punct	5:punct	_
8	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	10:det	_
10	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	0	root	0:root	_
11	privato	privato	ADJ	A	Gender=Masc|Number=Sing	10	amod	10:amod	SpaceAfter=No
12	"	"	PUNCT	FB	_	10	punct	10:punct	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	7:nsubj:pass	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	7:aux:pass	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	2:parataxis	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


