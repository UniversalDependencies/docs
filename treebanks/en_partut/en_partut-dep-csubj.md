---
layout: base
title:  'Statistics of csubj in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_partut-dep-csubj-pass.html">csubj:pass</a></tt>.

105 nodes (0%) are attached to their parents as `csubj`.

75 instances of `csubj` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.8952380952381.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (43; 41% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (29; 28% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (20; 19% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj	color:blue
1	However	however	ADV	B	_	5	advmod	_	_
2	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	5	expl	_	_
3	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	perhaps	perhaps	ADV	B	_	5	advmod	_	_
5	relevant	relevant	ADJ	A	Degree=Pos	0	root	_	_
6	that	that	SCONJ	CS	_	10	mark	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
8	bubonic	bubonic	ADJ	A	Degree=Pos	9	amod	_	_
9	plague	plague	NOUN	S	Number=Sing	10	nsubj	_	_
10	raged	rage	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	5	csubj	_	_
11	in	in	ADP	E	_	12	case	_	_
12	London	London	PROPN	SP	_	10	obl	_	_
13	throughout	throughout	ADP	E	_	14	case	_	_
14	1609	1609	NUM	N	NumType=Card	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 csubj	color:blue
1	Mushrooms	mushroom	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	_	_
2	produce	produce	NOUN	S	Number=Sing	0	root	_	_
3	strong	strong	ADJ	A	Degree=Pos	4	amod	_	_
4	antibiotics	antibiotic	NOUN	S	Number=Plur	2	obj	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	Does	do	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	cost	cost	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	money	money	NOUN	S	Number=Sing	3	obj	_	_
5	to	to	PART	PART	_	6	mark	_	_
6	use	use	VERB	V	VerbForm=Inf	3	csubj	_	_
7	Facebook	Facebook	PROPN	SP	_	6	obj	_	SpaceAfter=No
8	?	?	PUNCT	FS	_	3	punct	_	_

~~~


