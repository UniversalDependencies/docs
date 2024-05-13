---
layout: base
title:  'Statistics of ccomp in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `ccomp`

This relation is universal.

351 nodes (1%) are attached to their parents as `ccomp`.

349 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.76068376068376.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (260; 74% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (40; 11% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (32; 9% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	think	think	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	that	that	SCONJ	CS	_	6	mark	_	_
4	vote	vote	NOUN	S	Number=Sing	6	nsubj	_	_
5	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	occurring	occur	VERB	V	Number=Sing|Tense=Pres|VerbForm=Part	2	ccomp	_	_
7	right	right	ADV	B	_	6	advmod	_	_
8	now	now	ADV	B	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	We	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	all	all	PRON	PI	PronType=Ind	3	obl	_	_
3	know	know	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
4	the	the	DET	RD	Definite=Def|PronType=Art	5	det	_	_
5	Earth	earth	NOUN	S	Number=Sing	8	nsubj	_	_
6	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	in	in	ADP	E	_	8	case	_	_
8	trouble	trouble	NOUN	S	Number=Sing	3	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	thought	think	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	that	that	SCONJ	CS	_	7	mark	_	_
4	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
5	was	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
6	quite	quite	ADV	B	_	7	advmod	_	_
7	superb	superb	ADJ	A	Degree=Pos	2	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


