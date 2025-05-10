---
layout: base
title:  'Statistics of conj in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `conj`

This relation is universal.

7 nodes (2%) are attached to their parents as `conj`.

7 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71428571428571.

The following 4 pairs of parts of speech are connected with `conj`: <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Ama	ama	CCONJ	_	_	6	discourse	_	Lang=tr
2	çok	çok	ADV	_	_	3	advmod	_	Lang=tr
3	tatlı	tatlı	ADJ	_	_	6	amod	_	Lang=tr
4	ve	ve	CCONJ	_	_	3	cc	_	Lang=tr
5	süper	süper	ADJ	_	_	3	conj	_	Lang=tr
6	biri	bir	PRON	_	Case=Nom|Number=Sing|Person=3	0	root	_	Lang=tr
7	so	so	ADV	_	_	8	advmod	_	Lang=en
8	unproblematic	unproblematic	ADJ	_	_	6	parataxis	_	Lang=en
9	and	and	CCONJ	_	_	10	cc	_	Lang=en
10	funny	funny	ADJ	_	_	8	conj	_	Lang=en|SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 conj	color:blue
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1	3	nsubj	_	Lang=en
2	know	now	ADV	_	Typo=Yes	3	advmod	_	Lang=en
3	own	own	VERB	_	Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Lang=en
4	a	a	DET	_	_	6	det	_	Lang=en
5	saç	saç	NOUN	_	Case=Nom|Number=Sing|Person=3	6	compound	_	Lang=tr
6	tokası	toka	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
7	w	with	ADP	_	_	9	case	_	Lang=en
8	plastic	plastic	ADJ	_	_	9	amod	_	Lang=en
9	decorations	decoration	NOUN	_	Number=Plur	6	nmod	_	Lang=en
10	next	next	ADJ	_	_	6	advmod	_	Lang=en
11	to	to	ADP	_	_	12	case	_	Lang=en
12	it	it	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3	10	obl	_	Lang=en
13	a	a	DET	_	_	14	det	_	Lang=en
14	mendil	mendil	NOUN	_	Case=Nom|Number=Sing|Person=3	3	obj	_	Lang=tr
15	and	and	CCONJ	_	_	19	cc	_	Lang=en
16	a	a	DET	_	_	19	det	_	Lang=en
17	pink	pink	ADJ	_	_	19	amod	_	Lang=en
18	barbie	barbie	PROPN	_	Number=Sing	19	compound	_	Lang=en
19	hat	hat	NOUN	_	Number=Sing	14	conj	_	Lang=en|SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	Yemişsin	ye	VERB	_	Aspect=Perf|Evident=Nfh|Number=Sing|Person=2|Polarity=Pos|Tense=Past	0	root	_	Lang=tr|LoanTrans=en:you_ate|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	katletmişsin	katlet	VERB	_	Aspect=Perf|Evident=Nfh|Number=Sing|Person=2|Polarity=Pos|Tense=Past	1	conj	_	Lang=tr|LoanTrans=en:you_slayed|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


