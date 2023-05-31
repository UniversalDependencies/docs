---
layout: base
title:  'Statistics of amod in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `amod`

This relation is universal.

916 nodes (3%) are attached to their parents as `amod`.

468 instances of `amod` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12227074235808.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (824; 90% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (42; 5% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (17; 2% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 amod	color:blue
1	a	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	via	via	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	fase	fase	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
6	due	due	NUM	N	NumType=Card	5	nummod	_	_
7	di	di	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	governo	governo	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
10	#Monti	#Monti	SYM	SYM	_	9	nmod	_	SpaceAfter=No
11	:	:	PUNCT	FC	_	3	punct	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	risata	risata	NOUN	S	Gender=Fem|Number=Sing	3	parataxis	_	_
14	satanica	satanico	ADJ	A	Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	#Governo	#Governo	SYM	SYM	_	7	parataxis:hashtag	_	_
2	#Monti	#Monti	SYM	SYM	_	1	nmod	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	divino	divino	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	_
6	Otelma	Otelma	PROPN	SP	_	7	nsubj	_	_
7	#ministro	#ministro	SYM	SYM	_	0	root	_	_
8	di	di	ADP	E	_	10	case	_	_
9	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	#Economia	#Economia	SYM	SYM	_	7	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
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


