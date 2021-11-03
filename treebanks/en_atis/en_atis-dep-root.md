---
layout: base
title:  'Statistics of root in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `root`

This relation is universal.

5432 nodes (9%) are attached to their parents as `root`.

5432 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.30706921944035.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (3711; 68% instances), -<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (631; 12% instances), -<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (604; 11% instances), -<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (202; 4% instances), -<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (141; 3% instances), -<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (81; 1% instances), -<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (33; 1% instances), -<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (27; 0% instances), -<tt><a href="en_atis-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	i	i	PRON	_	PronType=Prs	2	nsubj	_	_
2	want	want	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	DET	_	PronType=Art	4	det	_	_
4	flight	flight	NOUN	_	Number=Sing	2	obj	_	_
5	from	from	ADP	_	_	6	case	_	_
6	memphis	memphis	PROPN	_	Number=Sing	4	nmod	_	_
7	to	to	ADP	_	_	8	case	_	_
8	seattle	seattle	PROPN	_	Number=Sing	4	nmod	_	_
9	that	that	ADP	_	_	10	nsubj	_	_
10	arrives	arrive	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
11	no	no	DET	_	PronType=Art	12	det	_	_
12	later	late	ADV	_	Degree=Pos	10	obl	_	_
13	than	than	ADP	_	_	15	case	_	_
14	3	3	NUM	_	NumType=Card	15	nummod	_	_
15	pm	pm	NOUN	_	Number=Sing	12	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	restriction	restriction	NOUN	_	Number=Sing	4	compound	_	_
4	ap57	ap57	PROPN	_	Number=Sing	1	nsubj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
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


