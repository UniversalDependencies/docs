---
layout: base
title:  'Statistics of aux in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `aux`

This relation is universal.

10 nodes (3%) are attached to their parents as `aux`.

6 instances of `aux` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-AUX.html">AUX</a></tt> (6; 60% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-AUX.html">AUX</a></tt> (4; 40% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Okulun	okul	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	sitesini	site	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
3	navigate	navigate	NOUN	_	_	4	compound	_	Lang=en
4	etmek	et	VERB	_	Case=Nom|Polarity=Pos	5	nsubj	_	Lang=tr
5	kolay	kolay	ADJ	_	_	0	root	_	Lang=tr
6	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


