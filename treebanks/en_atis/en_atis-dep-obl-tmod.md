---
layout: base
title:  'Statistics of obl:tmod in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-obl.html">obl</a></tt>.

867 nodes (1%) are attached to their parents as `obl:tmod`.

841 instances of `obl:tmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.41291810841984.

The following 16 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (726; 84% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (40; 5% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (24; 3% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (22; 3% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (17; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 obl:tmod	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	all	all	DET	_	PronType=Art	6	det:predet	_	_
3	of	of	ADP	_	_	6	case	_	_
4	the	the	DET	_	PronType=Art	6	det	_	_
5	daily	daily	ADJ	_	Degree=Pos	6	amod	_	_
6	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
7	arriving	arrive	VERB	_	Tense=Pres|VerbForm=Part	6	acl:relcl	_	_
8	in	in	ADP	_	_	9	case	_	_
9	denver	Denver	PROPN	_	Number=Sing	7	obl	_	_
10	from	from	ADP	_	_	11	case	_	_
11	8	8	NUM	_	NumType=Card	14	nummod	_	_
12	to	to	ADP	_	_	13	case	_	_
13	9	9	NUM	_	NumType=Card	11	conj	_	_
14	pm	pm	NOUN	_	Number=Sing	7	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:tmod	color:blue
1	what	what	DET	_	PronType=Int,Rel	2	det	_	_
2	flights	flight	NOUN	_	Number=Plur	4	nsubj	_	_
3	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	available	available	ADJ	_	Degree=Pos	0	root	_	_
5	friday	Friday	NOUN	_	Number=Sing	4	obl:tmod	_	_
6	from	from	ADP	_	_	7	case	_	_
7	philadelphia	Philadelphia	PROPN	_	Number=Sing	4	obl	_	_
8	to	to	ADP	_	_	9	case	_	_
9	oakland	Oakland	PROPN	_	Number=Sing	4	obl	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 obl:tmod	color:blue
1	i	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	would	will	AUX	_	_	3	aux	_	_
3	like	like	ADJ	_	Degree=Pos	0	root	_	_
4	to	to	PART	_	_	5	mark	_	_
5	travel	travel	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	from	from	ADP	_	_	7	case	_	_
7	boston	Boston	PROPN	_	Number=Sing	5	obl	_	_
8	to	to	ADP	_	_	9	case	_	_
9	denver	Denver	PROPN	_	Number=Sing	5	obl	_	_
10	early	early	ADV	_	Degree=Pos	5	advmod	_	_
11	in	in	ADP	_	_	13	case	_	_
12	the	the	DET	_	PronType=Art	13	det	_	_
13	morning	morning	NOUN	_	Number=Sing	10	obl:tmod	_	_

~~~


