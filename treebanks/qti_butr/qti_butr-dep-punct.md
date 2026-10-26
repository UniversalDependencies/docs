---
layout: base
title:  'Statistics of punct in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `punct`

This relation is universal.

69 nodes (16%) are attached to their parents as `punct`.

58 instances of `punct` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.91304347826087.

The following 6 pairs of parts of speech are connected with `punct`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PUNCT.html">PUNCT</a></tt> (45; 65% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-PUNCT.html">PUNCT</a></tt> (10; 14% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-PUNCT.html">PUNCT</a></tt> (9; 13% instances), <tt><a href="qti_butr-pos-ADV.html">ADV</a></tt>-<tt><a href="qti_butr-pos-PUNCT.html">PUNCT</a></tt> (2; 3% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-PUNCT.html">PUNCT</a></tt> (2; 3% instances), <tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="qti_butr-pos-PUNCT.html">PUNCT</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	5	advcl	_	Lang=tr
2	için	için	ADP	_	_	1	case	_	Lang=tr
3	bir	bir	DET	_	PronType=Art	4	det	_	Lang=tr
4	toplantı	toplantı	NOUN	_	Case=Nom|Number=Sing|Person=3	5	compound	_	Lang=tr
5	alabiliriz	al	VERB	_	Aspect=Imp|Mood=Pot|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|LoanTrans=en:get_a_meeting|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 punct	color:blue
1	Depends	depend	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	Lang=en|SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	hangi	hangi	DET	_	PronType=Int	4	det	_	Lang=tr
4	kayak	kayak	NOUN	_	Case=Nom|Number=Sing|Person=3	1	parataxis	_	Lang=tr|SpaceAfter=No
5	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 punct	color:blue
1	Okulun	okul	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	sitesini	site	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
3	navigate	navigate	NOUN	_	_	4	compound	_	Lang=en
4	etmek	et	VERB	_	Case=Nom|Polarity=Pos	5	nsubj	_	Lang=tr
5	kolay	kolay	ADJ	_	_	0	root	_	Lang=tr
6	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


