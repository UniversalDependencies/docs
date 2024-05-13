---
layout: base
title:  'Statistics of goeswith in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `goeswith`

This relation is universal.

5 nodes (0%) are attached to their parents as `goeswith`.

5 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (2; 40% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	all	all	DET	_	PronType=Art	5	discourse	_	_
2	right	right	ADJ	_	Degree=Pos	1	goeswith	_	_
3	now	now	ADV	_	Degree=Pos	5	advmod	_	_
4	i	i	PRON	_	PronType=Prs	5	nsubj	_	_
5	need	need	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	a	a	DET	_	PronType=Art	7	det	_	_
7	flight	flight	NOUN	_	Number=Sing	5	obj	_	_
8	from	from	ADP	_	_	9	case	_	_
9	seattle	seattle	PROPN	_	Number=Sing	7	nmod	_	_
10	to	to	ADP	_	_	11	case	_	_
11	san	san	PROPN	_	Number=Sing	7	nmod	_	_
12	diego	diego	PROPN	_	Number=Sing	11	flat	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	all	all	DET	_	PronType=Art	10	discourse	_	_
2	right	right	ADV	_	Degree=Pos	1	goeswith	_	_
3	what	what	PRON	_	PronType=Int,Rel	10	nsubj	_	_
4	i	i	PRON	_	PronType=Prs	6	nsubj	_	_
5	'd	will	AUX	_	_	6	aux	_	_
6	like	like	VERB	_	VerbForm=Inf	3	acl:relcl	_	_
7	to	to	PART	_	_	8	mark	_	_
8	do	do	VERB	_	VerbForm=Inf	6	xcomp	_	_
9	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	find	find	VERB	_	VerbForm=Inf	0	root	_	_
11	the	the	DET	_	PronType=Art	15	det	_	_
12	cheapest	cheap	ADJ	_	Degree=Sup	15	amod	_	_
13	one	one	NUM	_	NumType=Card	14	nummod	_	_
14	way	way	NOUN	_	Number=Sing	15	compound	_	_
15	fare	fare	NOUN	_	Number=Sing	10	obj	_	_
16	from	from	ADP	_	_	17	case	_	_
17	boston	boston	PROPN	_	Number=Sing	15	nmod	_	_
18	to	to	ADP	_	_	19	case	_	_
19	denver	denver	PROPN	_	Number=Sing	15	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	okay	okay	INTJ	_	_	6	discourse	_	_
2	all	all	DET	_	PronType=Art	6	discourse	_	_
3	right	right	NOUN	_	Number=Sing	2	goeswith	_	_
4	do	do	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	you	you	PRON	_	PronType=Prs	6	nsubj	_	_
6	have	have	VERB	_	VerbForm=Inf	0	root	_	_
7	a	a	DET	_	PronType=Art	8	det	_	_
8	flight	flight	NOUN	_	Number=Sing	6	obj	_	_
9	on	on	ADP	_	_	10	case	_	_
10	united	united	PROPN	_	Number=Sing	8	nmod	_	_
11	airlines	airline	PROPN	_	Number=Plur	10	flat	_	_
12	from	from	ADP	_	_	13	case	_	_
13	atlanta	atlanta	PROPN	_	Number=Sing	8	nmod	_	_
14	to	to	ADP	_	_	15	case	_	_
15	washington	washington	PROPN	_	Number=Sing	8	nmod	_	_

~~~


