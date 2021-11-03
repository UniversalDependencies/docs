---
layout: base
title:  'Statistics of acl in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_atis-dep-acl-relcl.html">acl:relcl</a></tt>.

43 nodes (0%) are attached to their parents as `acl`.

32 instances of `acl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.62790697674419.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (38; 88% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	5	det	_	_
4	ground	ground	NOUN	_	Number=Sing	5	compound	_	_
5	transportation	transportation	NOUN	_	Number=Sing	1	nsubj	_	_
6	available	available	ADJ	_	Degree=Pos	5	acl	_	_
7	in	in	ADP	_	_	9	case	_	_
8	the	the	DET	_	PronType=Art	9	det	_	_
9	city	city	PROPN	_	Number=Sing	6	obl	_	_
10	of	of	ADP	_	_	11	case	_	_
11	philadelphia	philadelphia	PROPN	_	Number=Sing	9	nmod	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 acl	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	the	the	DET	_	PronType=Art	4	det	_	_
3	nonstop	nonstop	ADJ	_	Degree=Pos	4	amod	_	_
4	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
5	from	from	ADP	_	_	6	case	_	_
6	miami	miami	PROPN	_	Number=Sing	4	nmod	_	_
7	to	to	ADP	_	_	8	case	_	_
8	new	new	PROPN	_	Number=Sing	4	nmod	_	_
9	york	york	PROPN	_	Number=Sing	8	flat	_	_
10	on	on	ADP	_	_	12	case	_	_
11	a	a	DET	_	PronType=Art	12	det	_	_
12	sunday	sunday	PROPN	_	Number=Sing	4	nmod:tmod	_	_
13	along	along	ADP	_	_	16	case	_	_
14	with	with	ADP	_	_	16	case	_	_
15	the	the	DET	_	PronType=Art	16	det	_	_
16	fares	fare	NOUN	_	Number=Plur	1	obl	_	_
17	that	that	ADP	_	_	19	mark	_	_
18	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	19	cop	_	_
19	less	less	ADV	_	Degree=Cmp	16	acl	_	_
20	than	than	ADP	_	_	22	case	_	_
21	466	466	NUM	_	NumType=Card	22	nummod	_	_
22	dollars	dollar	NOUN	_	Number=Plur	19	obl	_	_

~~~


