---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_partut-dep-nsubj.html">nsubj</a></tt>.

453 nodes (1%) are attached to their parents as `nsubj:pass`.

352 instances of `nsubj:pass` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.80794701986755.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (342; 75% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (66; 15% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt> (31; 7% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	quantità	quantità	NOUN	S	Gender=Fem	7	nsubj:pass	_	_
3	enorme	enorme	ADJ	A	Number=Sing	2	amod	_	_
4	di	di	ADP	E	_	5	case	_	_
5	detriti	detrito	NOUN	S	Gender=Masc|Number=Plur	2	nmod	_	_
6	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	scagliata	scagliare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	in	in	ADP	E	_	9	case	_	_
9	atmosfera	atmosfera	NOUN	S	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	;	;	PUNCT	FC	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj:pass	_	_
2	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	scoperto	scoprire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	per	per	ADP	E	_	7	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	prima	primo	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	7	amod	_	_
7	volta	volta	NOUN	S	Gender=Fem|Number=Sing	3	obl	_	_
8	in	in	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	1859	1859	NUM	N	NumType=Card	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Creative	Creative	PROPN	SP	_	5	nsubj:pass	_	_
2	Commons	Commons	PROPN	SP	_	1	flat:name	_	_
3	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	VA	VerbForm=Inf	5	aux:pass	_	_
5	contattata	contattare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	a	a	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	sito	sito	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	_
9	http	http	NOUN	S	_	8	compound	_	SpaceAfter=No
10	:	:	PUNCT	FC	_	5	punct	_	_

~~~


