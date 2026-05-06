---
layout: base
title:  'Statistics of fixed in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `fixed`

This relation is universal.

26 nodes (0%) are attached to their parents as `fixed`.

26 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26923076923077.

The following 11 pairs of parts of speech are connected with `fixed`: <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (6; 23% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (4; 15% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (3; 12% instances), <tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 8% instances), <tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 8% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	show	show	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	me	I	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	iobj	_	_
3	all	all	DET	_	PronType=Art	5	det	_	_
4	daily	daily	ADJ	_	Degree=Pos	5	amod	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	out	out	ADP	_	_	8	case	_	_
7	of	of	ADP	_	_	6	fixed	_	_
8	boston	Boston	PROPN	_	Number=Sing	5	nmod	_	_
9	that	that	ADP	_	_	10	mark	_	_
10	have	have	VERB	_	VerbForm=Inf	5	acl:relcl	_	_
11	coach	Coach	PROPN	_	Number=Sing	12	compound	_	_
12	class	class	NOUN	_	Number=Sing	10	obj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	all	all	DET	_	PronType=Art	5	discourse	_	_
2	right	right	NOUN	_	Number=Sing	1	fixed	_	_
3	do	do	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	you	you	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	have	have	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	a	a	DET	_	PronType=Art	7	det	_	_
7	flight	flight	NOUN	_	Number=Sing	5	obj	_	_
8	from	from	ADP	_	_	9	case	_	_
9	atlanta	Atlanta	PROPN	_	Number=Sing	7	nmod	_	_
10	to	to	ADP	_	_	11	case	_	_
11	boston	Boston	PROPN	_	Number=Sing	7	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	instead	instead	ADV	_	Degree=Pos	3	case	_	_
2	of	of	ADP	_	_	1	fixed	_	_
3	denver	Denver	PROPN	_	Number=Sing	6	obl	_	_
4	can	can	AUX	_	_	6	aux	_	_
5	i	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	have	have	VERB	_	VerbForm=Inf	0	root	_	_
7	the	the	DET	_	PronType=Art	9	det	_	_
8	same	same	ADJ	_	Degree=Pos	9	amod	_	_
9	flight	flight	NOUN	_	Number=Sing	6	obj	_	_
10	from	from	ADP	_	_	11	case	_	_
11	toronto	Toronto	PROPN	_	Number=Sing	9	nmod	_	_
12	to	to	ADP	_	_	13	case	_	_
13	san	San	PROPN	_	Number=Sing	9	nmod	_	_
14	diego	Diego	PROPN	_	Number=Sing	13	flat	_	_
15	but	but	CCONJ	_	_	16	cc	_	_
16	stopping	stop	VERB	_	Tense=Pres|VerbForm=Part	9	nmod	_	_
17	in	in	ADP	_	_	18	case	_	_
18	dallas	Dallas	PROPN	_	Number=Sing	16	obl	_	_
19	fort	Fort	PROPN	_	Number=Sing	18	flat	_	_
20	worth	Worth	PROPN	_	Number=Sing	18	flat	_	_

~~~


