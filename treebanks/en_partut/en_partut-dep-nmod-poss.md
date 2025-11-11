---
layout: base
title:  'Statistics of nmod:poss in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_partut-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="en_partut-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

1006 nodes (2%) are attached to their parents as `nmod:poss`.

1003 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92246520874751.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (629; 63% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (194; 19% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (163; 16% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-X.html">X</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


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
1	Sustaining	sustain	VERB	V	VerbForm=Ger	0	root	_	_
2	Ukraine	Ukraine	PROPN	SP	_	4	nmod:poss	_	_
3	's	's	PART	PART	_	2	case	_	_
4	Breakthrough	breakthrough	NOUN	S	Number=Sing	1	obj	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nmod:poss	color:blue
1	Please	please	ADV	B	_	2	discourse	_	_
2	rise	rise	NOUN	S	Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	then	then	ADV	B	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	for	for	ADP	E	_	10	case	_	_
7	this	this	DET	DD	Number=Sing|PronType=Dem	8	det	_	_
8	minute	minute	NOUN	S	Number=Sing	10	nmod:poss	_	_
9	's	's	PART	PART	_	8	case	_	_
10	silence	silence	NOUN	S	Number=Sing	2	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	_

~~~


