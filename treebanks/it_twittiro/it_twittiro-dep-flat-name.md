---
layout: base
title:  'Statistics of flat:name in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_twittiro-dep-flat-foreign.html">flat:foreign</a></tt>.

433 nodes (1%) are attached to their parents as `flat:name`.

433 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11316397228637.

The following 18 pairs of parts of speech are connected with `flat:name`: <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (374; 86% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (20; 5% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (8; 2% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-DET.html">DET</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	@user	@user	SYM	SYM	_	6	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Mario	mario	PROPN	SP	_	6	nsubj	_	_
4	Monti	Monti	PROPN	SP	_	3	flat:name	_	_
5	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	sa	sapere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	impennare	impennare	VERB	V	VerbForm=Inf	6	xcomp	_	_
8	hahaha	hahaha	INTJ	I	_	6	discourse	_	_
9	:D	:D	SYM	SYM	_	6	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	arriva	arrivare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Mario	mario	PROPN	SP	_	1	nsubj	_	_
3	#Monti	#Monti	SYM	SYM	_	2	flat:name	_	SpaceAfter=No
4	:	:	PUNCT	FC	_	2	punct	_	_
5	pronti	pronto	ADJ	A	Gender=Masc|Number=Plur	1	parataxis	_	_
6	a	a	ADP	E	_	7	mark	_	_
7	mettere	mettere	VERB	V	VerbForm=Inf	5	advcl	_	_
8	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	grembiulino	grembiule	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Ma	ma	CCONJ	CC	_	7	discourse	_	_
2	secondo	secondo	ADP	E	_	3	case	_	_
3	voi	voi	PRON	PE	Number=Plur|Person=2|PronType=Prs	7	obl	_	_
4	super	super	ADJ	A	_	5	amod	_	_
5	#Mario	#Mario	SYM	SYM	_	7	nsubj	_	_
6	#Monti	#Monti	SYM	SYM	_	5	flat:name	_	_
7	riuscirà	riuscire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
8	a	a	ADP	E	_	9	mark	_	_
9	tassare	tassare	VERB	V	VerbForm=Inf	7	xcomp	_	_
10	anche	anche	ADV	B	_	12	advmod	_	_
11	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	felicità	felicità	NOUN	S	Gender=Fem	9	obj	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	12	punct	_	_

~~~


