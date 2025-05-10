---
layout: base
title:  'Statistics of nsubj in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `nsubj`

This relation is universal.

32 nodes (8%) are attached to their parents as `nsubj`.

29 instances of `nsubj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 8 pairs of parts of speech are connected with `nsubj`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (14; 44% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (8; 25% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (3; 9% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj	color:blue
1	Bir	bir	DET	_	_	2	det	_	Lang=tr
2	şey	şey	NOUN	_	Case=Nom|Number=Sing|Person=3	3	obj	_	Lang=tr
3	diyeceğim	de	VERB	_	Aspect=Perf|Number=Sing|Person=1|Polarity=Pos|Tense=Fut	0	root	_	Lang=tr
4	bence	ben	PRON	_	Case=Equ|Number=Sing|Person=1	7	discourse	_	Lang=tr
5	he	he	PRON	_	_	7	nsubj	_	Lang=en
6	doesn't	do	AUX	_	_	7	aux	_	Lang=en
7	deserve	deserve	VERB	_	_	3	parataxis	_	Lang=en
8	this	this	PRON	_	_	7	obj	_	Lang=en|SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Nasıl	nasıl	ADV	_	_	2	advmod	_	Lang=tr
2	hissediyor	hisset	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|LoanTrans=en:how_does_it_feel
3	ayağın	ayak	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	2	nsubj	_	Lang=tr|SpaceAfter=No
4	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Bu	bu	PRON	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	Lang=tr
2	hiç	hiç	ADV	_	_	3	advmod	_	Lang=tr
3	acceptable	acceptable	ADJ	_	_	0	root	_	Lang=en
4	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	3	aux	_	Lang=tr
5	yani	yani	CCONJ	_	_	3	discourse	_	Lang=tr|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


