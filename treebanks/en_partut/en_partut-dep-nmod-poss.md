---
layout: base
title:  'Statistics of nmod:poss in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_partut-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

641 nodes (1%) are attached to their parents as `nmod:poss`.

638 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51170046801872.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (628; 98% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Deepen	deepen	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	your	you	DET	AP	Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	relationships	relationship	NOUN	S	Number=Plur	1	obj	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	Promote	promote	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	your	you	DET	AP	Poss=Yes|PronType=Prs	4	nmod:poss	_	_
3	Facebook	Facebook	PROPN	SP	_	4	nmod	_	_
4	Page	Page	PROPN	SP	_	1	obj	_	_
5	or	or	CCONJ	CC	_	6	cc	_	_
6	website	website	NOUN	S	Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 nmod:poss	color:blue
1	Thus	thus	ADV	B	_	2	advmod	_	_
2	began	begin	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	7	det	_	_
4	fifteen	fifteen	NUM	N	NumType=Card	6	nummod	_	SpaceAfter=No
5	-	-	PUNCT	FF	_	6	punct	_	SpaceAfter=No
6	year	year	NOUN	S	Number=Sing	7	nmod	_	_
7	correspondence	correspondence	NOUN	S	Number=Sing	2	nsubj	_	_
8	between	between	ADP	E	_	9	case	_	_
9	Balzac	Balzac	PROPN	SP	_	7	nmod	_	_
10	and	and	CCONJ	CC	_	13	cc	_	_
11	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
12	the	the	DET	RD	Definite=Def|PronType=Art	13	det	_	_
13	object	object	NOUN	S	Number=Sing	9	conj	_	_
14	of	of	ADP	E	_	19	case	_	_
15	[	[	PUNCT	FB	_	16	punct	_	SpaceAfter=No
16	his	his	PRON	PP	Poss=Yes|PronType=Prs	19	nmod:poss	_	SpaceAfter=No
17	]	]	PUNCT	FB	_	16	punct	_	_
18	sweetest	sweetest	ADJ	A	Degree=Sup	19	amod	_	_
19	dreams	dream	NOUN	S	Number=Plur	13	nmod	_	SpaceAfter=No
20	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
21	:	:	PUNCT	FC	_	2	punct	_	_

~~~


