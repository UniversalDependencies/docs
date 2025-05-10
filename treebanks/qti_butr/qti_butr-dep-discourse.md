---
layout: base
title:  'Statistics of discourse in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `discourse`

This relation is universal.

18 nodes (5%) are attached to their parents as `discourse`.

10 instances of `discourse` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61111111111111.

The following 13 pairs of parts of speech are connected with `discourse`: <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (2; 11% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PART.html">PART</a></tt> (2; 11% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="qti_butr-pos-ADV.html">ADV</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Guys	guy	NOUN	_	Number=Plur	3	discourse	_	Lang=en|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	I	I	PRON	_	Case=Nom|Number=Sing|Person=1	4	nsubj	_	Lang=en
4	think	think	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	Lang=en
5	çok	çok	ADV	_	_	6	advmod	_	Lang=tr
6	fena	fena	ADJ	_	_	8	amod	_	Lang=tr
7	bir	bir	DET	_	_	8	det	_	Lang=tr
8	şey	şey	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	Lang=tr
9	oldu	ol	VERB	_	Aspect=Perf|Number=Sing|Person=3|Polarity=Pos|Tense=Past	4	ccomp	_	Lang=tr|SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 discourse	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 discourse	color:blue
1	Go	go	VERB	_	Mood=Imp|Person=2|VerbForm=Fin	0	root	_	Lang=en
2	for	for	ADP	_	_	3	case	_	Lang=en
3	it	it	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3	1	obl	_	Lang=en
4	o	o	DET	_	_	5	det	_	Lang=tr
5	zaman	zaman	NOUN	_	Case=Nom|Number=Sing|Person=3	1	discourse	_	Lang=tr|SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


