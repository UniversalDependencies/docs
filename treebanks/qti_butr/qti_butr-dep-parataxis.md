---
layout: base
title:  'Statistics of parataxis in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `parataxis`

This relation is universal.

10 nodes (2%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.9.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 parataxis	color:blue
1	Derse	ders	NOUN	_	Case=Dat|Number=Sing|Person=3	2	obl	_	Lang=tr
2	çıkmadan	çık	VERB	_	Case=Abl|Polarity=Pos|VerbForm=Conv	5	advcl	_	Lang=tr
3	bir	bir	DET	_	PronType=Art	4	det	_	Lang=tr
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
1	That's	that	PRON	_	PronType=Dem	2	nsubj	_	Lang=en
2	crazy	crazy	ADJ	_	_	0	root	_	Lang=en|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	keşke	keşke	ADV	_	_	6	advmod	_	Lang=tr
5	önceden	önce	ADV	_	Case=Abl	6	advmod	_	Lang=tr
6	söyleseydin	söyle	VERB	_	Mood=Cnd|Number=Sing|Person=2|Polarity=Pos|Tense=Past	2	parataxis	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 parataxis	color:blue
1	Erzincan	Erzincan	PROPN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	tulum	tulum	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	Lang=tr
3	yok	yok	ADJ	_	Polarity=Neg	0	root	_	Lang=tr|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	gravyer	gravyer	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	Lang=tr|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	kaşar	kaşar	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	Lang=tr|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	eski	eski	ADJ	_	_	10	amod	_	Lang=tr
10	kaşar	kaşar	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	Lang=tr
11	relatively	relatively	ADV	_	_	12	advmod	_	Lang=en
12	az	az	ADV	_	_	13	advmod	_	Lang=tr
13	var	var	ADJ	_	Polarity=Pos	10	parataxis	_	Lang=tr

~~~


