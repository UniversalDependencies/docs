---
layout: base
title:  'Statistics of advmod in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `advmod`

This relation is universal.

35 nodes (9%) are attached to their parents as `advmod`.

28 instances of `advmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77142857142857.

The following 9 pairs of parts of speech are connected with `advmod`: <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-ADV.html">ADV</a></tt> (13; 37% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADV.html">ADV</a></tt> (12; 34% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (2; 6% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PART.html">PART</a></tt> (2; 6% instances), <tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="qti_butr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Sizce	siz	PRON	_	Case=Nom|Number=Plur|Person=2	5	discourse	_	Lang=tr
2	de	de	CCONJ	_	_	1	advmod	_	Lang=tr
3	üslubu	üslup	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	Lang=tr
4	kinda	kinda	ADV	_	_	5	advmod	_	Lang=en
5	harsh	harsh	ADJ	_	_	0	root	_	Lang=en
6	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg	5	aux	_	Lang=tr
7	mi	mi	AUX	_	_	5	aux	_	Lang=tr|SpaceAfter=No
8	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Nasıl	nasıl	ADV	_	_	2	advmod	_	Lang=tr
2	hissediyor	hisset	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|LoanTrans=en:how_does_it_feel
3	ayağın	ayak	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	2	nsubj	_	Lang=tr|SpaceAfter=No
4	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 advmod	color:blue
1	Me	I	PRON	_	_	2	nsubj	_	Lang=en
2	flirting	flirt	VERB	_	_	0	root	_	Lang=en
3	but	but	CCONJ	_	_	4	cc	_	Lang=en
4	doing	do	VERB	_	_	2	conj	_	Lang=en
5	this	this	PRON	_	_	4	obj	_	Lang=en
6	in	in	ADP	_	_	12	case	_	Lang=en
7	a	a	DET	_	_	12	det	_	Lang=en
8	artık	artık	ADV	_	_	10	advmod	_	Lang=tr
9	flörtleşmek	flörtleş	VERB	_	Case=Nom|Polarity=Pos|VerbForm=Vnoun	10	obj	_	Lang=tr
10	istemiyorum	iste	VERB	_	Aspect=Prog|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	11	amod	_	Lang=tr
11	kinda	kinda	ADV	_	_	12	advmod	_	Lang=en
12	way	way	NOUN	_	_	4	obl	_	Lang=en|SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


