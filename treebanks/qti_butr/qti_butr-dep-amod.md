---
layout: base
title:  'Statistics of amod in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `amod`

This relation is universal.

20 nodes (5%) are attached to their parents as `amod`.

20 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (14; 70% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-ADV.html">ADV</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Bunda	bu	PRON	_	Case=Loc|Number=Sing|Person=3|PronType=Dem	7	obl	_	Lang=tr
2	da	da	CCONJ	_	_	1	advmod	_	Lang=tr
3	on	on	ADP	_	_	6	case	_	Lang=en
4	the	the	DET	_	PronType=Art	6	det	_	Lang=en
5	same	same	ADJ	_	_	6	amod	_	Lang=en
6	page	page	NOUN	_	Number=Sing	7	obl	_	Lang=en
7	olmayız	ol	VERB	_	Aspect=Imp|Number=Plur|Person=1|Polarity=Neg|Tense=Pres	0	root	_	Lang=tr
8	yani	yani	CCONJ	_	_	7	discourse	_	Lang=tr|SpaceAfter=No
9	!	!	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Different	different	ADJ	_	_	2	amod	_	Lang=en
2	sensory	sensory	ADJ	_	_	4	amod	_	Lang=en
3	bir	bir	DET	_	PronType=Art	4	det	_	Lang=tr
4	şey	şey	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	_	Lang=tr
5	odaklandırır	odaklandır	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	7	advcl	_	Lang=tr
6	diye	diye	SCONJ	_	_	5	mark	_	Lang=tr
7	düşündüm	düşün	VERB	_	Aspect=Perf|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	Lang=tr|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	Me	I	PRON	_	PronType=Prs	2	nsubj	_	Lang=en
2	flirting	flirt	VERB	_	_	0	root	_	Lang=en
3	but	but	CCONJ	_	_	4	cc	_	Lang=en
4	doing	do	VERB	_	_	2	conj	_	Lang=en
5	this	this	PRON	_	PronType=Dem	4	obj	_	Lang=en
6	in	in	ADP	_	_	12	case	_	Lang=en
7	a	a	DET	_	PronType=Art	12	det	_	Lang=en
8	artık	artık	ADV	_	_	10	advmod	_	Lang=tr
9	flörtleşmek	flörtleş	VERB	_	Case=Nom|Polarity=Pos|VerbForm=Vnoun	10	obj	_	Lang=tr
10	istemiyorum	iste	VERB	_	Aspect=Prog|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	11	amod	_	Lang=tr
11	kinda	kinda	ADV	_	_	12	advmod	_	Lang=en
12	way	way	NOUN	_	_	4	obl	_	Lang=en|SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


