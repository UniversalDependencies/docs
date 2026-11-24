---
layout: base
title:  'Statistics of nsubj in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `nsubj`

This relation is universal.

179 nodes (20%) are attached to their parents as `nsubj`.

163 instances of `nsubj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58659217877095.

The following 7 pairs of parts of speech are connected with `nsubj`: <tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt>-<tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt> (90; 50% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt> (40; 22% instances), <tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt>-<tt><a href="kbc_unicamp-pos-PRON.html">PRON</a></tt> (19; 11% instances), <tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt>-<tt><a href="kbc_unicamp-pos-DET.html">DET</a></tt> (14; 8% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-PRON.html">PRON</a></tt> (11; 6% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="kbc_unicamp-pos-DET.html">DET</a></tt>-<tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	ajo	ijo	DET	D	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	liwatece	watece	NOUN	N$	Gender=Fem|Number=Sing|Person[psor]=3	4	nsubj	_	TokenRange=4:12
3	ja	jaG	AUX	T	Aspect=Perf	4	aux	_	TokenRange=13:15
4	iwaGadi	waaGadi	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|StandardForm=iwaaGadi|TokenRange=16:23
5	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=23:24

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	ica	ica	DET	D	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	NumClass=Absent|TokenRange=0:3
2	Maria	maria	PROPN	NPR	_	3	nmod:poss	_	TokenRange=4:9
3	looligi	ooligi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	5	nsubj	_	TokenRange=10:17
4	aG	aG	PART	NEG	Polarity=Neg	5	advmod	_	_
5	lidi	idi	NOUN	N$	Person[psor]=3	0	root	_	_
6	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=23:24

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	ee	ee	PRON	PRO	Gender[spkr]=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	TokenRange=0:2
2	aG	aG	PART	NEG	Polarity=Neg	3	advmod	_	_
3	idininitebeci	initibece	VERB	VB	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Inv	0	root	_	StandardForm=idinitibece
4	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=18:19

~~~


