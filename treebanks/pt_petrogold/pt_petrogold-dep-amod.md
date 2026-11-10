---
layout: base
title:  'Statistics of amod in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `amod`

This relation is universal.

14867 nodes (6%) are attached to their parents as `amod`.

12097 instances of `amod` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2116096051658.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (14607; 98% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (144; 1% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-ADP.html">ADP</a></tt> (38; 0% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (30; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (20; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pt_petrogold-pos-X.html">X</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	REFERENCIAL	referencial	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	TEÓRICO	teórico	ADJ	_	Gender=Masc|Number=Sing	1	amod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	1.2	1.2	NUM	_	NumType=Card	2	nummod	_	_
2	Objetivo	Objetivo	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
3	Geral	geral	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	equação	equação	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	a	ADP	_	ExtPos=ADJ	2	amod	_	_
4	seguir	seguir	VERB	_	VerbForm=Inf	3	fixed	_	_
5	resume	resumir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	processo	processo	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


