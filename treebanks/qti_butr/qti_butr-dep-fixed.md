---
layout: base
title:  'Statistics of fixed in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `fixed`

This relation is universal.

5 nodes (1%) are attached to their parents as `fixed`.

5 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 5 pairs of parts of speech are connected with `fixed`: <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="qti_butr-pos-ADP.html">ADP</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="qti_butr-pos-DET.html">DET</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="qti_butr-pos-DET.html">DET</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="qti_butr-pos-DET.html">DET</a></tt>-<tt><a href="qti_butr-pos-DET.html">DET</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Dünyanın	dünya	NOUN	_	Case=Gen|Number=Sing|Person=3	5	nmod	_	Lang=tr
2	en	en	ADV	_	_	3	advmod	_	Lang=tr
3	çirkin	çirkin	ADJ	_	_	5	amod	_	Lang=tr
4	clothing	clothing	NOUN	_	_	5	compound	_	Lang=en
5	itemıyla	item	NOUN	_	Case=Ins|Number=Sing	6	obl	_	Lang=tr|CSID=MIXED|CSPoint=item§ıyla
6	karşı	karşı	ADJ	_	ExtPos=ADJ	0	root	_	Lang=tr
7	karşıyayım	karşı	ADJ	_	Number=Sing|Person=1	6	fixed	_	Lang=tr|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	lord	lord	NOUN	_	Number=Sing	10	nsubj	_	Lang=en
10	have	have	VERB	_	_	6	parataxis	_	Lang=en
11	mercy	mercy	NOUN	_	Number=Sing	10	obj	_	Lang=en|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Of	of	ADP	_	ExtPos=ADV	4	discourse	_	Lang=en
2	course	course	NOUN	_	_	1	fixed	_	Lang=en
3	metroyla	metro	NOUN	_	Case=Ins|Number=Sing|Person=3	4	obl	_	Lang=tr
4	gideceğiz	git	VERB	_	Aspect=Perf|Number=Plur|Person=1|Polarity=Pos|Tense=Fut	0	root	_	Lang=tr|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	yürüyecek	yürü	VERB	_	Case=Nom|Polarity=Pos|Tense=Fut|VerbForm=Part	4	parataxis	_	Lang=tr
7	değiliz	değil	AUX	_	Number=Plur|Person=1|Polarity=Neg|Tense=Pres	6	aux	_	Lang=tr
8	ya	ya	PART	_	_	6	discourse	_	Lang=tr
9	o	o	PRON	_	Case=Nom|Number=Sing|PronType=Dem	11	nmod	_	Lang=tr
10	kadar	kadar	ADP	_	_	9	case	_	Lang=tr
11	yolu	yol	NOUN	_	Case=Acc|Number=Sing|Person=3	6	obj	_	Lang=tr|SpaceAfter=No
12	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 fixed	color:blue
1	All	all	DET	_	ExtPos=ADV	7	advmod	_	Lang=en
2	of	of	ADP	_	_	1	fixed	_	Lang=en
3	a	a	DET	_	_	1	fixed	_	Lang=en
4	sudden	sudden	ADJ	_	_	1	fixed	_	Lang=en
5	sevgilimle	sevgili	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	7	obl	_	Lang=tr
6	kavga	kavga	NOUN	_	Case=Nom|Number=Sing|Person=3	7	compound	_	Lang=tr
7	ettim	et	VERB	_	Aspect=Perf|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	Lang=tr|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


