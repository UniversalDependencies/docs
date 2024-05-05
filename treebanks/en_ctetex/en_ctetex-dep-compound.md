---
layout: base
title:  'Statistics of compound in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Relations: `compound`

This relation is universal.

457 nodes (5%) are attached to their parents as `compound`.

433 instances of `compound` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35010940919037.

The following 16 pairs of parts of speech are connected with `compound`: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (366; 80% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (40; 9% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADP.html">ADP</a></tt> (10; 2% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ctetex-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	It	_	PRON	_	_	3	nsubj	_	_
2	shall	_	AUX	_	_	3	aux	_	_
3	have	_	VERB	_	_	0	root	_	_
4	the	_	DET	_	_	6	det	_	_
5	file	_	NOUN	_	_	6	compound	_	_
6	extension	_	NOUN	_	_	3	obj	_	_
7	.spec	_	SYM	_	_	6	appos	_	SpaceAfter=No
8	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
1	The	_	DET	_	_	2	det	_	_
2	query	_	NOUN	_	_	5	nsubj:pass	_	_
3	will	_	AUX	_	_	5	aux	_	_
4	be	_	AUX	_	_	5	aux:pass	_	_
5	verified	_	VERB	_	_	0	root	_	_
6	by	_	ADP	_	_	8	case	_	_
7	the	_	DET	_	_	8	det	_	_
8	application	_	NOUN	_	_	5	obl:agent	_	_
9	and	_	CCONJ	_	_	14	cc	_	_
10	SQL	_	PROPN	_	_	11	compound	_	_
11	errors	_	NOUN	_	_	14	nsubj:pass	_	_
12	will	_	AUX	_	_	14	aux	_	_
13	be	_	AUX	_	_	14	aux:pass	_	_
14	reported	_	VERB	_	_	5	conj	_	_
15	to	_	ADP	_	_	17	case	_	_
16	the	_	DET	_	_	17	det	_	_
17	user	_	NOUN	_	_	14	iobj	_	_
18	for	_	ADP	_	_	19	case	_	_
19	correction	_	NOUN	_	_	14	obl	_	SpaceAfter=No
20	.	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 compound	color:blue
1	The	_	DET	_	_	7	det	_	_
2	“	_	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	Create	_	VERB	_	_	7	compound	_	_
4	Flight	_	NOUN	_	_	5	compound	_	_
5	Plan	_	NOUN	_	_	3	obj	_	SpaceAfter=No
6	”	_	PUNCT	_	_	3	punct	_	_
7	screen	_	NOUN	_	_	9	nsubj	_	_
8	shall	_	AUX	_	_	9	aux	_	_
9	display	_	VERB	_	_	0	root	_	_
10	the	_	DET	_	_	11	det	_	_
11	labels	_	NOUN	_	_	9	obj	_	_
12	and	_	CCONJ	_	_	14	cc	_	_
13	GUI	_	NOUN	_	_	14	nmod	_	_
14	elements	_	NOUN	_	_	11	conj	_	_
15	as	_	SCONJ	_	_	16	mark	_	_
16	described	_	VERB	_	_	9	advcl	_	_
17	in	_	ADP	_	_	18	case	_	_
18	Table	_	NOUN	_	_	16	obl	_	_
19	2	_	NUM	_	_	18	flat	_	SpaceAfter=No
20	.	_	PUNCT	_	_	9	punct	_	_

~~~


