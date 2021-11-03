---
layout: base
title:  'Statistics of compound:prt in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-compound.html">compound</a></tt>.

22 nodes (0%) are attached to their parents as `compound:prt`.

22 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09090909090909.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (21; 95% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	what	what	PRON	_	PronType=Int,Rel	5	obj	_	_
2	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	d	d	PROPN	_	Number=Sing	5	nsubj	_	_
4	s	s	PROPN	_	Number=Sing	3	flat	_	_
5	stand	stand	VERB	_	VerbForm=Inf	0	root	_	_
6	for	for	ADP	_	_	5	compound:prt	_	_
7	for	for	ADP	_	_	8	case	_	_
8	meals	meal	NOUN	_	Number=Plur	5	obl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	bring	bring	VERB	_	VerbForm=Inf	0	root	_	_
2	up	up	ADV	_	Degree=Pos	1	compound:prt	_	_
3	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
4	from	from	ADP	_	_	5	case	_	_
5	milwaukee	milwaukee	PROPN	_	Number=Sing	3	nmod	_	_
6	to	to	ADP	_	_	7	case	_	_
7	orlando	orlando	PROPN	_	Number=Sing	3	nmod	_	_
8	on	on	ADP	_	_	10	case	_	_
9	wednesday	wednesday	PROPN	_	Number=Sing	10	compound	_	_
10	night	night	NOUN	_	Number=Sing	3	nmod:tmod	_	_
11	or	or	CCONJ	_	_	13	cc	_	_
12	thursday	thursday	PROPN	_	Number=Sing	13	compound	_	_
13	morning	morning	NOUN	_	Number=Sing	10	conj	_	_

~~~


