---
layout: base
title:  'Statistics of discourse in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `discourse`

This relation is universal.

419 nodes (1%) are attached to their parents as `discourse`.

345 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.67780429594272.

The following 16 pairs of parts of speech are connected with `discourse`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-INTJ.html">INTJ</a></tt> (351; 84% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-INTJ.html">INTJ</a></tt> (17; 4% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-INTJ.html">INTJ</a></tt> (9; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (8; 2% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-INTJ.html">INTJ</a></tt> (6; 1% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-INTJ.html">INTJ</a></tt> (5; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	please	please	INTJ	_	_	2	discourse	_	_
2	list	list	VERB	_	VerbForm=Inf	0	root	_	_
3	the	the	DET	_	PronType=Art	6	det	_	_
4	rental	rental	ADJ	_	Degree=Pos	5	amod	_	_
5	car	car	NOUN	_	Number=Sing	6	compound	_	_
6	information	information	NOUN	_	Number=Sing	2	obj	_	_
7	in	in	ADP	_	_	8	case	_	_
8	pittsburgh	pittsburgh	PROPN	_	Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 discourse	color:blue
1	flights	flight	NOUN	_	Number=Plur	0	root	_	_
2	from	from	ADP	_	_	3	case	_	_
3	baltimore	baltimore	PROPN	_	Number=Sing	1	nmod	_	_
4	to	to	ADP	_	_	5	case	_	_
5	philadelphia	philadelphia	PROPN	_	Number=Sing	1	nmod	_	_
6	please	please	INTJ	_	_	1	discourse	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	okay	okay	INTJ	_	_	4	discourse	_	_
2	i	i	PRON	_	PronType=Prs	4	nsubj	_	_
3	would	will	AUX	_	_	4	aux	_	_
4	like	like	ADP	_	_	0	root	_	_
5	to	to	PART	_	_	6	mark	_	_
6	fly	fly	VERB	_	VerbForm=Inf	4	xcomp	_	_
7	from	from	ADP	_	_	8	case	_	_
8	atlanta	atlanta	PROPN	_	Number=Sing	6	obl	_	_
9	to	to	ADP	_	_	10	case	_	_
10	philadelphia	philadelphia	PROPN	_	Number=Sing	6	obl	_	_

~~~


