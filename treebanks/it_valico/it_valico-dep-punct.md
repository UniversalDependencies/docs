---
layout: base
title:  'Statistics of punct in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `punct`

This relation is universal.

794 nodes (12%) are attached to their parents as `punct`.

648 instances of `punct` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.16876574307305.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (563; 71% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (126; 16% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (57; 7% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (23; 3% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (10; 1% instances), <tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (8; 1% instances), <tt><a href="it_valico-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="it_valico-pos-ADP.html">ADP</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-AUX.html">AUX</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-NUM.html">NUM</a></tt>-<tt><a href="it_valico-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	porta	portare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	degli	degli	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	3	det	_	_
3	occhiali	occhiale	NOUN	S	Gender=Masc|Number=Plur	1	obj	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	fidanzato	fidanzato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	4	punct	_	_
6	Lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	amo	amare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 punct	color:blue
1	Ero	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	stanca	stanco	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
3	e	e	CCONJ	CC	_	4	cc	_	_
4	pensavo	pensare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	conj	_	_
5	a	a	ADP	E	_	6	case	_	_
6	niente	niente	PRON	PI	PronType=Ind	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


