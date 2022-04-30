---
layout: base
title:  'Statistics of cc in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="en_atis-dep-cc-preconj.html">cc:preconj</a></tt>.

952 nodes (2%) are attached to their parents as `cc`.

952 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28781512605042.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (466; 49% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (253; 27% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (162; 17% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (27; 3% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (15; 2% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (13; 1% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (10; 1% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	6	det	_	_
4	latest	late	ADJ	_	Degree=Sup	6	amod	_	_
5	daily	daily	ADJ	_	Degree=Pos	6	amod	_	_
6	flight	flight	NOUN	_	Number=Sing	1	nsubj	_	_
7	between	between	ADP	_	_	8	case	_	_
8	oakland	oakland	PROPN	_	Number=Sing	6	nmod	_	_
9	and	and	CCONJ	_	_	10	cc	_	_
10	salt	salt	PROPN	_	Number=Sing	8	conj	_	_
11	lake	lake	PROPN	_	Number=Sing	10	flat	_	_
12	city	city	PROPN	_	Number=Sing	10	flat	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	what	what	DET	_	PronType=Int,Rel	2	det	_	_
2	flights	flight	NOUN	_	Number=Plur	3	nsubj	_	_
3	leave	leave	VERB	_	VerbForm=Inf	0	root	_	_
4	boston	boston	PROPN	_	Number=Sing	3	obj	_	_
5	and	and	CCONJ	_	_	6	cc	_	_
6	arrive	arrive	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	conj	_	_
7	in	in	ADP	_	_	8	case	_	_
8	philadelphia	philadelphia	PROPN	_	Number=Sing	6	obl	_	_
9	before	before	ADP	_	_	11	case	_	_
10	7	7	NUM	_	NumType=Card	11	nummod	_	_
11	am	be	NOUN	_	Number=Sing	6	obl	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 cc	color:blue
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


