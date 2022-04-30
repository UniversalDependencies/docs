---
layout: base
title:  'Statistics of advmod in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `advmod`

This relation is universal.

509 nodes (1%) are attached to their parents as `advmod`.

366 instances of `advmod` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.45972495088409.

The following 17 pairs of parts of speech are connected with `advmod`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (207; 41% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (111; 22% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (44; 9% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (41; 8% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (38; 7% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (26; 5% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (21; 4% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	6	det	_	_
4	earliest	early	ADV	_	Degree=Sup	5	advmod	_	_
5	arriving	arrive	VERB	_	Tense=Pres|VerbForm=Part	6	acl	_	_
6	flight	flight	NOUN	_	Number=Sing	1	nsubj	_	_
7	from	from	ADP	_	_	8	case	_	_
8	houston	houston	PROPN	_	Number=Sing	6	nmod	_	_
9	to	to	ADP	_	_	10	case	_	_
10	orlando	orlando	PROPN	_	Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	how	how	ADV	_	PronType=Int,Rel	2	advmod	_	_
2	long	long	ADJ	_	Degree=Pos	5	advmod	_	_
3	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	it	it	PRON	_	PronType=Prs	5	nsubj	_	_
5	take	take	VERB	_	VerbForm=Inf	0	root	_	_
6	to	to	PART	_	_	7	mark	_	_
7	fly	fly	VERB	_	VerbForm=Inf	5	obl	_	_
8	from	from	ADP	_	_	9	case	_	_
9	boston	boston	PROPN	_	Number=Sing	7	nmod	_	_
10	to	to	ADP	_	_	11	case	_	_
11	atlanta	atlanta	PROPN	_	Number=Sing	7	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 advmod	color:blue
1	where	where	ADV	_	PronType=Int,Rel	9	advmod	_	_
2	do	do	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
3	the	the	DET	_	PronType=Art	4	det	_	_
4	flights	flight	NOUN	_	Number=Plur	9	nsubj	_	_
5	from	from	ADP	_	_	6	case	_	_
6	boston	boston	PROPN	_	Number=Sing	4	nmod	_	_
7	to	to	ADP	_	_	8	case	_	_
8	oakland	oakland	PROPN	_	Number=Sing	4	nmod	_	_
9	stop	stop	NOUN	_	Number=Sing	0	root	_	_

~~~


