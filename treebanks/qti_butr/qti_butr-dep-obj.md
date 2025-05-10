---
layout: base
title:  'Statistics of obj in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `obj`

This relation is universal.

24 nodes (6%) are attached to their parents as `obj`.

17 instances of `obj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08333333333333.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (11; 46% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (6; 25% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	Okulun	okul	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	sitesini	site	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
3	navigate	navigate	NOUN	_	_	4	compound	_	Lang=en
4	etmek	et	VERB	_	Case=Nom|Polarity=Pos	5	nsubj	_	Lang=tr
5	kolay	kolay	ADJ	_	_	0	root	_	Lang=tr
6	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


