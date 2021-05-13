---
layout: base
title:  'Statistics of orphan in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `orphan`

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (1; 10% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 orphan	color:blue
1	Ben	ben	PRON	_	PronType=Prs	6	nsubj	_	_
2	fişeklerin	fişek	NOUN	_	Case=Gen|Number=Plur|Person=3	3	nmod	_	_
3	barutunu	barut	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nummod	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	tapasını	tapa	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	conj	_	_
6	koyayım	koy	VERB	_	Mood=Opt|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	beybaba	beybaba	NOUN	_	Case=Nom|Number=Sing|Person=3	6	conj	_	_
9	saçmasını	saç	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	orphan	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 orphan	color:blue
1	Bu	bu	DET	_	Definite=Def	2	det	_	_
2	yolun	yol	NOUN	_	Case=Gen|Number=Sing|Person=3	3	nmod	_	_
3	üstünde	üst	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	obl	_	_
4	Edirne	edirne	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
5	bir	bir	DET	_	Definite=Ind	6	det	_	_
6	konak	konak	NOUN	_	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	hürriyet	hürriyet	NOUN	_	Case=Nom|Number=Sing|Person=3	6	conj	_	_
9	bir	bir	DET	_	Definite=Ind	8	orphan	_	_
10	merhaledir	merhale	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 orphan	color:blue
1	Ateşin	ateş	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	_
2	üzerinde	üzerinde	ADV	_	_	8	obl	_	_
3	tüm	tüm	DET	_	_	4	det	_	_
4	malzemeler	malzeme	NOUN	_	Case=Nom|Number=Plur|Person=3	8	nsubj	_	_
5	hep	hep	ADV	_	_	7	advmod	_	_
6	bir	bir	DET	_	Definite=Ind	7	det	_	_
7	ağızdan	ağızdan	ADV	_	_	8	obl	_	_
8	fokurduyordu	fokurduyordu	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
9	ama	ama	CCONJ	_	_	13	cc	_	_
10	her	her	DET	_	Definite=Def	11	det	_	_
11	biri	biri	PRON	_	_	8	conj	_	_
12	kendi	kendi	PRON	_	Reflex=Yes	13	nmod	_	_
13	dilinde	dil	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	orphan	_	_
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


