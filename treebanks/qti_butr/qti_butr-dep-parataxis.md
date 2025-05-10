---
layout: base
title:  'Statistics of parataxis in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `parataxis`

This relation is universal.

8 nodes (2%) are attached to their parents as `parataxis`.

8 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (4; 50% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (2; 25% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 parataxis	color:blue
1	Derse	ders	NOUN	_	Case=Dat|Number=Sing|Person=3	2	obl	_	Lang=tr
2	çıkmadan	çık	VERB	_	Case=Abl|Polarity=Pos|VerbForm=Conv	5	advcl	_	Lang=tr
3	bir	bir	DET	_	_	4	det	_	Lang=tr
4	KK'ya	KK	PROPN	_	Case=Dat|Number=Sing|Person=3	5	obl	_	Lang=tr
5	drop-bylayacağım	drop-by	VERB	_	Aspect=Perf|Number=Sing|Person=1|Polarity=Pos|Tense=Fut	0	root	_	Lang=tr|CSID=MIXED|CSPoint=drop-by§layacağım|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	görüşürüz	görüş	VERB	_	Aspect=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	5	parataxis	_	Lang=tr|SpaceAfter=No
8	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	That's	that	PRON	_	_	2	nsubj	_	Lang=en
2	crazy	crazy	ADJ	_	_	0	root	_	Lang=en|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	keşke	keşke	ADV	_	_	6	advmod	_	Lang=tr
5	önceden	önce	ADV	_	Case=Abl	6	advmod	_	Lang=tr
6	söyleseydin	söyle	VERB	_	Mood=Cnd|Number=Sing|Person=2|Polarity=Pos|Tense=Past	2	parataxis	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 parataxis	color:blue
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


