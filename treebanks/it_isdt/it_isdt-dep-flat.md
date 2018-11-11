---
layout: base
title:  'Statistics of flat in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="it_isdt-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_isdt-dep-flat-name.html">flat:name</a></tt>.

570 nodes (0%) are attached to their parents as `flat`.

570 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32105263157895.

The following 8 pairs of parts of speech are connected with `flat`: <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (276; 48% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (229; 40% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (56; 10% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	mandato	mandato	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
3	di	di	ADP	E	_	6	case	6:case	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	6:det	_
5	altro	altro	ADJ	A	Gender=Masc|Number=Sing	6	amod	6:amod	_
6	giudice	giudice	NOUN	S	Gender=Masc|Number=Sing	2	nmod	2:nmod:di	_
7	scade	scadere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	6	6	NUM	N	NumType=Card	7	obl	7:obl	_
10	ottobre	ottobre	NOUN	S	Gender=Masc|Number=Sing	9	flat	9:flat	_
11	2012	2012	NUM	N	NumType=Card	9	flat	9:flat	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	mandato	mandato	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
3	di	di	ADP	E	_	6	case	6:case	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	6:det	_
5	altro	altro	ADJ	A	Gender=Masc|Number=Sing	6	amod	6:amod	_
6	giudice	giudice	NOUN	S	Gender=Masc|Number=Sing	2	nmod	2:nmod:di	_
7	scade	scadere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	6	6	NUM	N	NumType=Card	7	obl	7:obl	_
10	ottobre	ottobre	NOUN	S	Gender=Masc|Number=Sing	9	flat	9:flat	_
11	2012	2012	NUM	N	NumType=Card	9	flat	9:flat	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	Tutto	tutto	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	2	nsubj	2:nsubj	_
2	cominciò	cominciare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	proprio	proprio	ADV	B	_	4	advmod	4:advmod	_
4	lì	lì	ADV	B	_	2	advmod	2:advmod	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	4:punct	_
6	in	in	ADP	E	_	7	case	7:case	_
7	Krajina	Krajina	PROPN	SP	_	4	obl	4:obl:in	_
8	in	in	ADP	E	_	10	case	10:case	_
9	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	10:det	_
10	agosto	agosto	NOUN	S	Gender=Masc|Number=Sing	2	obl	2:obl:in	_
11	1990	1990	NUM	N	NumType=Card	10	flat	10:flat	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


