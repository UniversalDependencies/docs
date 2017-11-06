---
layout: base
title:  'Statistics of acl in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_partut-dep-acl-relcl.html">acl:relcl</a></tt>.

831 nodes (2%) are attached to their parents as `acl`.

630 instances of `acl` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63176895306859.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (779; 94% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (16; 2% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl	color:blue
1	But	but	CCONJ	CC	_	6	cc	_	_
2	these	this	PRON	PD	Number=Plur|PronType=Dem	6	nsubj	_	_
3	are	be	AUX	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	essentially	essentially	ADV	B	_	6	advmod	_	_
5	externalized	externalize	VERB	V	Tense=Past|VerbForm=Part	6	acl	_	_
6	stomachs	stomach	NOUN	S	Number=Plur	0	root	_	_
7	and	and	CCONJ	CC	_	8	cc	_	_
8	lungs	lung	NOUN	S	Number=Plur	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	2	det	_	_
2	Importance	importance	NOUN	S	Number=Sing	0	root	_	_
3	of	of	ADP	E	_	5	mark	_	_
4	Being	be	AUX	V	VerbForm=Ger	5	cop	_	_
5	Boring	boring	ADJ	A	Degree=Pos	2	acl	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	He	he	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	announced	announce	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	his	his	DET	AP	Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	intention	intention	NOUN	S	Number=Sing	3	obj	_	_
6	to	to	PART	PART	_	9	mark	_	_
7	be	be	AUX	V	VerbForm=Inf	9	cop	_	_
8	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	9	det	_	_
9	writer	writer	NOUN	S	Number=Sing	5	acl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


