---
layout: base
title:  'Statistics of compound in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `compound`

This relation is universal.

21 nodes (5%) are attached to their parents as `compound`.

21 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23809523809524.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (14; 67% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (4; 19% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Okulun	okul	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	sitesini	site	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
3	navigate	navigate	NOUN	_	_	4	compound	_	Lang=en
4	etmek	et	VERB	_	Case=Nom|Polarity=Pos	5	nsubj	_	Lang=tr
5	kolay	kolay	ADJ	_	_	0	root	_	Lang=tr
6	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Vending	vending	NOUN	_	_	2	compound	_	Lang=en
2	machinelerden	machine	NOUN	_	Case=Abl|Number=Plur	4	obj	_	Lang=tr|CSID=MIXED|CSPoint=machine§lerden
3	nefret	nefret	NOUN	_	Case=Nom|Number=Sing|Person=3	4	compound	_	Lang=tr
4	ediyorum	et	VERB	_	Aspect=Prog|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 compound	color:blue
1	Bunda	bu	PRON	_	Case=Loc|Number=Sing|Person=3	7	obl	_	Lang=tr
2	da	da	CCONJ	_	_	1	advmod	_	Lang=tr
3	on	on	ADP	_	_	6	compound	_	Lang=en
4	the	the	DET	_	_	6	det	_	Lang=en
5	same	same	ADJ	_	_	6	amod	_	Lang=en
6	page	page	NOUN	_	_	7	compound	_	Lang=en
7	olmayız	ol	VERB	_	Aspect=Imp|Number=Plur|Person=1|Polarity=Neg|Tense=Pres	0	root	_	Lang=tr
8	yani	yani	CCONJ	_	_	7	discourse	_	Lang=tr|SpaceAfter=No
9	!	!	PUNCT	_	_	7	punct	_	_

~~~


