---
layout: base
title:  'Statistics of det in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `det`

This relation is universal.

34 nodes (11%) are attached to their parents as `det`.

34 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05882352941176.

The following 2 pairs of parts of speech are connected with `det`: <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-DET.html">DET</a></tt> (32; 94% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-PRON.html">PRON</a></tt> (2; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	ajo	ijo	DET	D	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	liwatece	watece	NOUN	N$	Gender=Fem|Number=Sing|Person[psor]=3	4	nsubj	_	TokenRange=4:12
3	ja	jaG	AUX	T	Aspect=Perf	4	aux	_	TokenRange=13:15
4	iwaGadi	waGadi	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=16:23
5	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=23:24

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	NaGajo	niGijo	PRON	PRO$	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	lomigo	omigo	NOUN	N$	Gender=Fem|Number=Sing|Person[psor]=3	4	nsubj	_	Lemma=lomiigo
3	Pedilo	pedilo	PROPN	NPR	_	2	nmod:poss	_	_
4	idei	dei	VERB	VB	Mood=Ind|Person[erg]=3|VerbForm=Fin	0	root	_	_
5	me	me	SCONJ	C	_	7	mark	_	_
6	adi	adi	DET	D	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	niwatece	watece	NOUN	N$	Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=39:40

~~~


