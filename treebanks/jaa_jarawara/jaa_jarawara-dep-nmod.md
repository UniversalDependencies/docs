---
layout: base
title:  'Statistics of nmod in UD_Madi-Jarawara'
udver: '2'
---

## Treebank Statistics: UD_Madi-Jarawara: Relations: `nmod`

This relation is universal.

3 nodes (3%) are attached to their parents as `nmod`.

2 instances of `nmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod`: <tt><a href="jaa_jarawara-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jaa_jarawara-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="jaa_jarawara-pos-PRON.html">PRON</a></tt>-<tt><a href="jaa_jarawara-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Howe	howe	NOUN	_	_	2	nmod	_	_
2	ino	ino	NOUN	_	Gender=Masc	0	root	_	_
3	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod	color:blue
1	Te	te	PRON	pron	Number=Plur|Person=2	2	nsubj	_	_
2	sawiminahaba	_	VERB	vi	Cfm=Morning|Gender=Fem|Number=Plur|Person=2|PronType=Prs|Tense=Fut	0	root	_	_
3	teke	te	PRON	_	Decl=F|Number=Plur|Person=2	2	discourse	_	_
4	,	,	PUNCT	punct	_	2	punct	_	_
5	te	te	PRON	pron	Number=Plur|Person[psor]=2	2	discourse	_	_
6	nafi	nafi	PRON	pron	PronType=Tot	5	nmod	_	_
7	otara	otara	PRON	pron	Clusivity=Ex|Number[obj]=Plur|Person[obj]=1	9	obj	_	_
8	te	te	PRON	pron	Number=Plur|Person[psor]=2	9	nsubj	_	_
9	asota	asota	VERB	v	_	2	xcomp	_	_
10	naminabone	na	AUX	aux	Cfm=Morning|Decl=F|Gender=Fem|Intension=Yes|Tense=Fut	9	aux	_	_
11	te	te	PRON	_	Number[subj]=Plur|Person[subj]=2	9	discourse	_	_
12	.	.	PUNCT	punct	_	9	punct	_	_

~~~


