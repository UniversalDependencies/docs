---
layout: base
title:  'Statistics of mark in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `mark`

This relation is universal.

14 nodes (4%) are attached to their parents as `mark`.

13 instances of `mark` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42857142857143.

The following 3 pairs of parts of speech are connected with `mark`: <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-SCONJ.html">SCONJ</a></tt> (10; 71% instances), <tt><a href="kbc_unicamp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kbc_unicamp-pos-SCONJ.html">SCONJ</a></tt> (2; 14% instances), <tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt>-<tt><a href="kbc_unicamp-pos-SCONJ.html">SCONJ</a></tt> (2; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	iGeladi	Geladi	NOUN	N$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	TokenRange=0:7
2	idei	dei	VERB	VB	Mood=Ind|Person[erg]=3|VerbForm=Fin	0	root	_	TokenRange=8:12
3	me	me	SCONJ	C	_	5	mark	_	_
4	ijo	ijo	DET	D	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	naigi	naigi	NOUN	N	Gender=Masc|Number=Sing	2	obj	_	TokenRange=18:23
6	naGajo	niGijo	PRON	PRO$	Gender=Fem|Poss=Yes|PronType=Dem	5	nmod:poss	_	SpaceAfter=No|TokenRange=24:30
7	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=30:31

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	iGeladi	Geladi	NOUN	N$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	_
2	idei	dei	VERB	VB	Mood=Ind|Person[erg]=3|VerbForm=Fin	0	root	_	_
3	naigi	naigi	NOUN	N	Gender=Masc|Number=Sing	2	obj	_	_
4	me	me	SCONJ	C	_	5	mark	_	_
5	napioi	napioi	ADJ	ADJ	_	3	acl:relcl	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	naGana	niGina	DET	D	Gender=Fem|Number=Sing|PronType=Dem	4	nsubj	_	_
2	eliodi	eliodi	ADV	Q	PronType=Ind	4	advmod	_	_
3	me	me	SCONJ	C	_	4	mark	_	_
4	ninitibeci	nitibece	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	StandardLemma=-ini(tibece)
5	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=26:27

~~~


