---
layout: base
title:  'Statistics of fixed in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `fixed`

This relation is universal.

28 nodes (0%) are attached to their parents as `fixed`.

28 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 11 pairs of parts of speech are connected with `fixed`: <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (6; 21% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (6; 21% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (3; 11% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	show	show	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	me	I	PRON	_	PronType=Prs	1	iobj	_	_
3	all	all	DET	_	PronType=Art	5	det	_	_
4	daily	daily	ADJ	_	Degree=Pos	5	amod	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	out	out	ADP	_	_	8	case	_	_
7	of	of	ADP	_	_	6	fixed	_	_
8	boston	boston	PROPN	_	Number=Sing	5	nmod	_	_
9	that	that	ADP	_	_	10	mark	_	_
10	have	have	VERB	_	VerbForm=Inf	5	acl:relcl	_	_
11	coach	coach	PROPN	_	Number=Sing	12	compound	_	_
12	class	class	NOUN	_	Number=Sing	10	obj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	snacks	snack	NOUN	_	Number=Plur	3	nsubj	_	_
3	served	serve	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	on	on	ADP	_	_	5	case	_	_
5	tower	tower	PROPN	_	Number=Sing	3	obl	_	_
6	air	air	PROPN	_	Number=Sing	5	fixed	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	instead	instead	ADV	_	Degree=Pos	3	case	_	_
2	of	of	ADP	_	_	1	fixed	_	_
3	denver	denver	PROPN	_	Number=Sing	6	obl	_	_
4	can	can	AUX	_	_	6	aux	_	_
5	i	i	PRON	_	PronType=Prs	6	nsubj	_	_
6	have	have	VERB	_	VerbForm=Inf	0	root	_	_
7	the	the	DET	_	PronType=Art	9	det	_	_
8	same	same	ADJ	_	Degree=Pos	9	amod	_	_
9	flight	flight	NOUN	_	Number=Sing	6	obj	_	_
10	from	from	ADP	_	_	11	case	_	_
11	toronto	toronto	PROPN	_	Number=Sing	9	nmod	_	_
12	to	to	ADP	_	_	13	case	_	_
13	san	san	PROPN	_	Number=Sing	9	nmod	_	_
14	diego	diego	PROPN	_	Number=Sing	13	flat	_	_
15	but	but	CCONJ	_	_	16	cc	_	_
16	stopping	stop	VERB	_	Tense=Pres|VerbForm=Part	9	nmod	_	_
17	in	in	ADP	_	_	18	case	_	_
18	dallas	dallas	PROPN	_	Number=Sing	16	obl	_	_
19	fort	fort	PROPN	_	Number=Sing	18	flat	_	_
20	worth	worth	PROPN	_	Number=Sing	18	flat	_	_

~~~


