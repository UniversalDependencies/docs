---
layout: base
title:  'Statistics of csubj in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="pcm_nsc-dep-csubj-quasi.html">csubj:quasi</a></tt>.

12 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.83333333333333.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (6; 50% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 8% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	na	na	AUX	PART	_	2	cop	_	_
2	why	why	ADV	_	_	0	root	_	_
3	drink	drink	VERB	_	_	6	csubj	_	_
4	drive	drive	VERB	_	_	3	compound:svc	_	_
5	no	no	ADV	PART	_	6	advmod	_	_
6	good	good	ADJ	_	_	2	ccomp:cleft	_	_
7	//	//	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	to	to	SCONJ	_	_	2	mark	_	_
2	rent	rent	VERB	_	_	7	csubj	_	_
3	house	house	NOUN	_	_	2	obj	_	_
4	now	now	ADV	_	_	2	advmod	_	_
5	<	<	PUNCT	_	_	2	punct	_	_
6	na	na	AUX	PART	_	7	cop	_	_
7	wahala	wahala	NOUN	_	_	0	root	_	_
8	//=	//=	PUNCT	_	_	13	punct	_	_
9	to	to	SCONJ	_	_	10	mark	_	_
10	feed	feed	VERB	_	_	13	csubj	_	_
11	<	<	PUNCT	_	_	10	punct	_	_
12	na	na	AUX	PART	_	13	cop	_	_
13	wahala	wahala	NOUN	_	_	7	parataxis:conj	_	_
14	//	//	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 10 csubj	color:blue
1	#	#	PUNCT	_	_	4	punct	_	_
2	because	because	SCONJ	_	_	4	mark	_	_
3	na	na	AUX	PART	_	4	cop	_	_
4	so	so	ADV	_	_	0	root	_	_
5	>+	>+	PUNCT	_	_	22	punct	_	_
6	di	di	DET	_	_	7	det	_	_
7	rain	rain	NOUN	_	_	10	nsubj	_	_
8	go	go	AUX	_	_	10	aux	_	_
9	{	{	PUNCT	_	_	10	punct	_	_
10	enter	enter	VERB	_	_	22	csubj	_	_
11	where	where	ADV	_	_	14	mark	_	_
12	dem	dem	PRON	_	_	14	nsubj	_	_
13	dey	dey	AUX	_	_	14	aux	_	_
14	live	live	VERB	_	_	10	advcl	_	_
15	|c	|c	PUNCT	_	_	16	punct	_	_
16	spoil	spoil	VERB	_	_	10	parataxis:conj	_	_
17	all	all	DET	_	_	19	det	_	_
18	dem	dem	PRON	_	_	19	nmod:poss	_	_
19	property	property	NOUN	_	_	16	obj	_	_
20	}	}	PUNCT	_	_	10	punct	_	_
21	be	be	AUX	PART	_	22	cop	_	_
22	dat	dat	PRON	_	_	4	ccomp:cleft	_	_
23	//	//	PUNCT	_	_	4	punct	_	_

~~~


