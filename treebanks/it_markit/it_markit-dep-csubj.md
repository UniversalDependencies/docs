---
layout: base
title:  'Statistics of csubj in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `csubj`

This relation is universal.

48 nodes (0%) are attached to their parents as `csubj`.

32 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.6875.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (28; 58% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (12; 25% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	domanda	domanda	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
4	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	difficilissimo	difficile	ADJ	A	Degree=Abs|Gender=Masc|Number=Sing	0	root	_	_
6	rispondere	rispondere	VERB	V	VerbForm=Inf	5	csubj	_	_
7	;	;	PUNCT	FC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj	color:blue
1	Ricercare	ricercare	VERB	V	VerbForm=Inf	4	csubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un'	uno	DET	RI	_	4	det	_	_
4	attività	attività	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	_	6	nsubj	_	_
6	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	per	per	ADP	E	_	8	case	_	_
8	fine	fine	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	ritrovamento	ritrovamento	NOUN	S	Gender=Masc|Number=Sing	6	obj	_	_
11	:	[PUNCT]	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	modo	modo	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	_
4	,	[PUNCT]	PUNCT	FF	_	3	punct	_	_
5	risulta	risultare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	più	più	ADV	B	_	7	advmod	_	_
7	facile	facile	ADJ	A	Gender=Masc|Number=Sing	5	xcomp	_	_
8	a	a	ADP	E	_	10	case	_	_
9	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Stato	stato	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	_
11	tenere	tenere	VERB	V	VerbForm=Inf	5	csubj	_	_
12	sotto	sotto	ADP	E	_	13	case	_	_
13	controllo	controllo	NOUN	S	Gender=Masc|Number=Sing	11	obl	_	_
14	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	popolo	popolo	NOUN	S	Gender=Masc|Number=Sing	11	obj	_	_
16	.	[PUNCT]	PUNCT	FS	_	5	punct	_	_

~~~


