---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it-dep-nsubj.html">nsubj</a></tt>.

2308 nodes (1%) are attached to their parents as `nsubj:pass`.

1539 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.71317157712305.

The following 16 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1830; 79% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (287; 12% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (146; 6% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (9; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	credito	credito	NOUN	S	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	relativo	relativo	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	privilegiato	privilegiare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	a	a	ADP	E	_	7	case	_	_
7	norma	norma	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
8	di	di	ADP	E	_	10	case	_	_
9	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	leggi	legge	NOUN	S	Gender=Fem|Number=Plur	7	nmod	_	_
11	speciali	speciale	ADJ	A	Number=Plur	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:pass	color:blue
1	Quando	quando	ADV	B	_	3	advmod	_	_
2	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	ucciso	uccidere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	John	John	PROPN	SP	_	3	nsubj:pass	_	_
5	Lennon	Lennon	PROPN	SP	_	4	flat:name	_	SpaceAfter=No
6	?	?	PUNCT	FS	_	3	punct	_	_

~~~


