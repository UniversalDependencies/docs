---
layout: base
title:  'Statistics of nummod in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `nummod`

This relation is universal.

843 nodes (1%) are attached to their parents as `nummod`.

726 instances of `nummod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18149466192171.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (678; 80% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (89; 11% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (71; 8% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	flights	flight	NOUN	_	Number=Plur	0	root	_	_
2	from	from	ADP	_	_	3	case	_	_
3	pittsburgh	pittsburgh	PROPN	_	Number=Sing	1	nmod	_	_
4	to	to	ADP	_	_	5	case	_	_
5	baltimore	baltimore	PROPN	_	Number=Sing	1	nmod	_	_
6	between	between	ADP	_	_	8	case	_	_
7	10	10	NUM	_	NumType=Card	8	nummod	_	_
8	am	be	NOUN	_	Number=Sing	1	nmod:tmod	_	_
9	and	and	CCONJ	_	_	11	cc	_	_
10	2	2	NUM	_	NumType=Card	11	nummod	_	_
11	pm	pm	NOUN	_	Number=Sing	8	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	there	there	PRON	_	PronType=Dem	1	expl	_	_
3	a	a	DET	_	PronType=Art	6	det	_	_
4	4	4	NUM	_	NumType=Card	5	nummod	_	_
5	o'clock	o'clock	ADV	_	Degree=Pos	6	compound	_	_
6	flight	flight	NOUN	_	Number=Sing	1	nsubj	_	_
7	from	from	ADP	_	_	8	case	_	_
8	washington	washington	PROPN	_	Number=Sing	6	nmod	_	_
9	dc	dc	PROPN	_	Number=Sing	8	flat	_	_
10	to	to	ADP	_	_	11	case	_	_
11	denver	denver	PROPN	_	Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	how	how	ADV	_	PronType=Int,Rel	2	advmod	_	_
2	many	many	ADJ	_	Degree=Pos	3	amod	_	_
3	passengers	passenger	NOUN	_	Number=Plur	8	obj	_	_
4	can	can	AUX	_	_	8	aux	_	_
5	a	a	DET	_	PronType=Art	6	det	_	_
6	boeing	boeing	PROPN	_	Number=Sing	8	nsubj	_	_
7	737	737	NUM	_	NumType=Card	6	nummod	_	_
8	hold	hold	VERB	_	VerbForm=Inf	0	root	_	_

~~~


