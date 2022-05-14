---
layout: base
title:  'Statistics of xcomp in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `xcomp`

This relation is universal.

342 nodes (1%) are attached to their parents as `xcomp`.

339 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07309941520468.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (202; 59% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (99; 29% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (15; 4% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="it_markit-pos-AUX.html">AUX</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	a	a	ADP	E	_	3	case	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	fine	fine	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	disco	disco	NOUN	S	Gender=Masc|Number=Sing	8	dislocated	_	_
6	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	expl:impers	_	_
8	va	andare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	a	a	ADP	E	_	10	mark	_	_
10	comprare	comprare	VERB	V	VerbForm=Inf	8	xcomp	_	_
11	comunque	comunque	ADV	B	_	10	advmod	_	_
12	,	[PUNCT]	PUNCT	FF	_	10	punct	_	_
13	se	se	SCONJ	CS	_	15	mark	_	_
14	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	expl:impers	_	_
15	vuole	volere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	_
16	.	[PUNCT]	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	cos'	cosa	PRON	PQ	Number=Sing|Person=3|PronType=Int	0	root	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	che	che	SCONJ	CS	_	5	mark	_	_
4	ci	ci	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=1|PronType=Prs	5	obj	_	_
5	rende	rendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	felici	felice	ADJ	A	Gender=Masc|Number=Plur	5	xcomp	_	_
7	?	?	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	«	«	PUNCT	FB	_	5	punct	_	_
2	E	e	CCONJ	CC	_	5	cc	_	_
3	questo	questo	PRON	PD	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	dislocated	_	_
4	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	chiamano	chiamare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	progresso	progresso	NOUN	S	Gender=Masc|Number=Sing	5	xcomp	_	_
7	?	?	PUNCT	FS	_	5	punct	_	_

~~~


