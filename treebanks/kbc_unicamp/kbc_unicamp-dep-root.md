---
layout: base
title:  'Statistics of root in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `root`

This relation is universal.

71 nodes (22%) are attached to their parents as `root`.

71 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74647887323944.

The following 3 pairs of parts of speech are connected with `root`: -<tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt> (45; 63% instances), -<tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt> (23; 32% instances), -<tt><a href="kbc_unicamp-pos-ADJ.html">ADJ</a></tt> (3; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	ajo	ijo	DET	D	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	liwatece	watece	NOUN	N$	Gender=Fem|Number=Sing|Person[psor]=3	4	nsubj	_	TokenRange=4:12
3	ja	jaG	AUX	T	Aspect=Perf	4	aux	_	TokenRange=13:15
4	iwaGadi	waGadi	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=16:23
5	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=23:24

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	ica	ica	DET	D	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	NumClass=Absent|TokenRange=0:3
2	Maria	maria	PROPN	NPR	_	3	nmod:poss	_	TokenRange=4:9
3	looligi	ooligi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	5	nsubj	_	TokenRange=10:16
4	aG	aG	PART	NEG	Polarity=Neg	5	advmod	_	_
5	lidi	idi	NOUN	N$	Person[psor]=3	0	root	_	_
6	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=23:24

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Etogo	etogo	NOUN	N	Gender=Fem|Number=Sing	5	dislocated	_	_
2	ane	ane	PRON	WPRO	PronType=Rel	3	nsubj	_	_
3	iwaGadi	waGadi	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin	1	acl:relcl	_	_
4	aG	aG	PART	NEG	Polarity=Neg	5	advmod	_	_
5	dakake	dakake	ADJ	ADJ	_	0	root	_	_
6	lojedi	ojedi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	5	nsubj	_	Lemma=loojedi|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=31:32

~~~


