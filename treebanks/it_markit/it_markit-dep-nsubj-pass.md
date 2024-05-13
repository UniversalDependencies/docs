---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_markit-dep-nsubj-outer.html">nsubj:outer</a></tt>.

91 nodes (0%) are attached to their parents as `nsubj:pass`.

60 instances of `nsubj:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71428571428571.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (54; 59% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (31; 34% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	Altre	altro	ADJ	A	_	2	amod	_	_
2	iniziative	iniziativa	NOUN	S	Gender=Fem|Number=Plur	6	nsubj:pass	_	_
3	di	di	ADP	E	_	4	case	_	_
4	cooperazione	cooperazione	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	_
5	vennero	venire	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	prese	prendere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
7	in	in	ADP	E	_	9	case	_	_
8	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	anni	anno	NOUN	S	Gender=Masc|Number=Plur	6	obl	_	_
10	seguenti	seguente	ADJ	A	Gender=Masc|Number=Plur	9	amod	_	_
11	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	qualcosa	qualcosa	PRON	PI	Gender=Fem|Number=Sing|Person=3|PronType=Ind	0	root	_	_
3	che	che	PRON	PR	_	5	nsubj:pass	_	_
4	viene	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	preparato	preparare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	_
6	a	a	ADP	E	_	7	case	_	_
7	tavolino	tavolino	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	_
8	per	per	ADP	E	_	9	case	_	_
9	meglio	meglio	ADV	B	_	10	advmod	_	_
10	soddisfare	soddisfare	VERB	V	VerbForm=Inf	5	advcl	_	_
11	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	esigenze	esigenza	NOUN	S	Gender=Fem|Number=Plur	10	obj	_	_
13	di	di	ADP	E	_	14	case	_	_
14	mercato	mercato	NOUN	S	Gender=Masc|Number=Sing	12	nmod	_	_
15	.	[PUNCT]	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 nsubj:pass	color:blue
1	a	a	ADP	E	_	3	case	_	_
2	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	scopo	scopo	NOUN	S	Gender=Masc|Number=Sing	13	obl	_	_
4	di	di	ADP	E	_	5	mark	_	_
5	distribuire	distribuire	VERB	V	VerbForm=Inf	3	acl	_	_
6	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	aiuti	aiuto	NOUN	S	Gender=Masc|Number=Plur	5	obj	_	_
8	a	a	ADP	E	_	10	case	_	_
9	l'	il	DET	RD	_	10	det	_	_
10	Europa	Europa	PROPN	SP	_	5	obl	_	_
11	,	,	PUNCT	FF	_	13	punct	_	_
12	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
13	fondata	fondare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
14	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	OECE	OECE	PROPN	SP	_	13	nsubj:pass	_	_
16	.	.	PUNCT	FS	_	13	punct	_	_

~~~


