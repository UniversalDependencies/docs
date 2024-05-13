---
layout: base
title:  'Statistics of ccomp in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `ccomp`

This relation is universal.

201 nodes (1%) are attached to their parents as `ccomp`.

200 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.28358208955224.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (163; 81% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (9; 4% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	«	«	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	Impegna	impegnare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
5	a	a	ADP	E	_	6	mark	_	_
6	valutare	valutare	VERB	V	VerbForm=Inf	2	ccomp	_	_
7	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	opportunità	opportunità	NOUN	S	Gender=Fem	6	obj	_	_
9	di	di	ADP	E	_	8	dep	_	SpaceAfter=No
10	»	»	PUNCT	FB	_	2	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 ccomp	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	chiaro	chiaro	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	che	che	SCONJ	CS	_	12	mark	_	_
4	dopo	dopo	ADP	E	_	6	case	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	trauma	trauma	NOUN	S	Gender=Masc|Number=Sing	12	obl	_	_
7	di	di	ADP	E	_	9	case	_	_
8	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	genere	genere	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	problema	problema	NOUN	S	Gender=Masc|Number=Sing	12	nsubj	_	_
12	emerge	emergere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Dobbiamo	dovere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	riconoscere	riconoscere	VERB	V	VerbForm=Inf	0	root	_	_
3	che	che	SCONJ	CS	_	9	mark	_	_
4	questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	9	nsubj	_	_
5	dev'	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	SpaceAfter=No
6	essere	essere	AUX	V	VerbForm=Inf	9	cop	_	_
7	comunque	comunque	ADV	B	_	2	advmod	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	priorità	priorità	NOUN	S	Gender=Fem	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	_

~~~


