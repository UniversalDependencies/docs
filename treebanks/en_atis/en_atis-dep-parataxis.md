---
layout: base
title:  'Statistics of parataxis in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `parataxis`

This relation is universal.

110 nodes (0%) are attached to their parents as `parataxis`.

72 instances of `parataxis` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.2545454545455.

The following 16 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (74; 67% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (7; 6% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 3 parataxis	color:blue
1	i	i	PRON	_	PronType=Prs	3	nsubj	_	_
2	'm	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	planning	plan	VERB	_	Tense=Pres|VerbForm=Part	15	parataxis	_	_
4	a	a	DET	_	PronType=Art	5	det	_	_
5	trip	trip	NOUN	_	Number=Sing	3	obj	_	_
6	to	to	ADP	_	_	7	case	_	_
7	pittsburgh	pittsburgh	PROPN	_	Number=Sing	5	nmod	_	_
8	and	and	CCONJ	_	_	10	cc	_	_
9	i	i	PRON	_	PronType=Prs	10	nsubj	_	_
10	live	live	ADJ	_	Degree=Pos	3	conj	_	_
11	in	in	ADP	_	_	12	case	_	_
12	denver	denver	PROPN	_	Number=Sing	10	obl	_	_
13	can	can	AUX	_	_	15	aux	_	_
14	you	you	PRON	_	PronType=Prs	15	nsubj	_	_
15	help	help	VERB	_	VerbForm=Inf	0	root	_	_
16	me	I	PRON	_	PronType=Prs	15	iobj	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 19 parataxis	color:blue
1	i	i	PRON	_	PronType=Prs	2	nsubj	_	_
2	want	want	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	to	to	PART	_	_	4	mark	_	_
4	go	go	VERB	_	VerbForm=Inf	2	xcomp	_	_
5	from	from	ADP	_	_	6	case	_	_
6	denver	denver	PROPN	_	Number=Sing	4	obl	_	_
7	to	to	ADP	_	_	8	case	_	_
8	atlanta	atlanta	PROPN	_	Number=Sing	4	obl	_	_
9	round	round	NOUN	_	Number=Sing	10	compound	_	_
10	trip	trip	NOUN	_	Number=Sing	4	obj	_	_
11	and	and	CCONJ	_	_	12	cc	_	_
12	make	make	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	conj	_	_
13	a	a	DET	_	PronType=Art	14	det	_	_
14	stop	stop	NOUN	_	Number=Sing	12	obj	_	_
15	at	at	ADP	_	_	16	case	_	_
16	pittsburgh	pittsburgh	PROPN	_	Number=Sing	12	obl	_	_
17	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
18	this	this	PRON	_	PronType=Int,Rel	19	nsubj	_	_
19	possible	possible	ADJ	_	Degree=Pos	2	parataxis	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	i	i	PRON	_	PronType=Prs	3	nsubj	_	_
2	'm	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	sorry	sorry	ADJ	_	Degree=Pos	0	root	_	_
4	i	i	PRON	_	PronType=Prs	5	nsubj	_	_
5	want	want	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
6	to	to	ADP	_	_	7	case	_	_
7	book	book	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	a	a	DET	_	PronType=Art	9	det	_	_
9	flight	flight	NOUN	_	Number=Sing	7	obj	_	_
10	from	from	ADP	_	_	11	case	_	_
11	atlanta	atlanta	PROPN	_	Number=Sing	9	nmod	_	_
12	to	to	ADP	_	_	13	case	_	_
13	denver	denver	PROPN	_	Number=Sing	9	nmod	_	_
14	colorado	colorado	PROPN	_	Number=Sing	13	appos	_	_

~~~


