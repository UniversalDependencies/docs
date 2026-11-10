---
layout: base
title:  'Statistics of mark in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `mark`

This relation is universal.

45 nodes (5%) are attached to their parents as `mark`.

43 instances of `mark` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-SCONJ.html">SCONJ</a></tt> (24; 53% instances), <tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt>-<tt><a href="kbc_unicamp-pos-SCONJ.html">SCONJ</a></tt> (12; 27% instances), <tt><a href="kbc_unicamp-pos-DET.html">DET</a></tt>-<tt><a href="kbc_unicamp-pos-SCONJ.html">SCONJ</a></tt> (8; 18% instances), <tt><a href="kbc_unicamp-pos-PRON.html">PRON</a></tt>-<tt><a href="kbc_unicamp-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	iGeladi	Geladi	NOUN	N$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	TokenRange=0:7
2	idei	dei	VERB	VB	Mood=Ind|Number[erg]=Sing|Person[erg]=3|VerbForm=Fin	0	root	_	TokenRange=8:12
3	naigi	naigi	NOUN	N	Gender=Masc|Number=Sing	2	obj	_	TokenRange=13:18
4	me	me	SCONJ	C	_	5	mark	_	TokenRange=19:21
5	napioi	napioi	NOUN	N	_	3	acl:relcl	_	SpaceAfter=No|TokenRange=22:28
6	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	nGida	niGida	DET	D	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	StandardForm=niGida|TokenRange=0:5
2	niwenigi	wenigi	NOUN	N	Gender=Masc|Number=Sing	5	dislocated	_	TokenRange=6:14
3	daGaxa	daGaxa	ADV	Q	_	5	advmod	_	TokenRange=15:21
4	me	me	SCONJ	C	_	5	mark	_	TokenRange=22:24
5	dakake	akake	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin|Voice=Inv	0	root	_	TokenRange=25:31
6	loojedi	oojedi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	5	nsubj	_	SpaceAfter=No|TokenRange=32:39
7	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=39:40

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	niGijoa	niGijo	DET	D	Gender=Masc|Number=Plur|PronType=Dem	2	det	_	TokenRange=0:7
2	lionigipi	iona	NOUN	N$	Gender=Fem,Masc|Number=Plur|Person[psor]=3	4	nsubj	_	TokenRange=8:17
3	iwaalo	iwaalo	NOUN	N	Gender=Fem|Number=Sing	2	nmod:poss	_	TokenRange=18:24
4	idei	dei	VERB	VB	Mood=Ind|Number[erg]=Sing|Person[erg]=3|VerbForm=Fin	0	root	_	TokenRange=25:29
5	me	me	SCONJ	C	_	6	mark	_	_
6	initaGa	ini	DET	DAPL	Gender=Masc|Number=Sing|PronType=Dem	4	obj	_	Case=Com|NumClass=Sitting
7	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=38:39

~~~


