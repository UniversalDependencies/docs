---
layout: base
title:  'Statistics of ccomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `ccomp`

This relation is universal.

30 nodes (0%) are attached to their parents as `ccomp`.

29 instances of `ccomp` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.43333333333333.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (17; 57% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (6; 20% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (4; 13% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 ccomp	color:blue
1	Ben	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	6	nsubj	_	_
2	zaten	_	ADV	RB	_	6	advmod	_	_
3	her	_	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	şekilde	_	NOUN	NN	Case=Loc|Number=Sing	6	advmod	_	_
5	hapse	_	NOUN	NN	Case=Dat|Number=Sing	6	advmod	_	_
6	gireceğim	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	8	parataxis	_	SpaceAfter=No
7	,	_	PUNCT	,	_	6	punct	_	_
8	umarım	_	VERB	VB	Number=Sing|Person=1|Tense=Aor	0	root	_	_
9	buna	_	PRON	PRD	Case=Dat|Number=Sing|Polarity=Pos	10	advmod	_	_
10	değmiştir	_	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
11	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 ccomp	color:blue
1	Bu	_	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	siyasi	_	ADJ	JJ	Number=Sing	4	amod	_	_
3	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	4	det	_	_
4	süreç	_	NOUN	NN	Number=Sing	11	ccomp	_	_
5	ve	_	CCONJ	CCONJ	_	9	cc	_	_
6	ben	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	9	nsubj	_	_
7	bulunmamaya	_	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Ger	9	advcl	_	_
8	kararı	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	verdim	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	4	conj	_	SpaceAfter=No
10	,	_	PUNCT	,	_	9	punct	_	_
11	demişti	_	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp	0	root	_	SpaceAfter=No
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 15 ccomp	color:blue
1	Bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	3	det	_	_
2	AB	_	PROPN	PROPN	Number=Sing	3	compound	_	Proper=True
3	yetkilisi	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nsubj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	önerilen	_	ADJ	VJ	Number=Sing|Polarity=Pos	6	acl:relcl	_	_
6	kısıtlamalar	_	NOUN	NN	Case=Nom|Number=Plur|Polarity=Pos	7	nsubj	_	_
7	olmadan	_	ADV	CRB	Aspect=Perf|Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Conv	15	advcl	_	_
8	"	_	PUNCT	``	_	15	punct	_	SpaceAfter=No
9	Kelt	_	PROPN	PROPN	Number=Sing	10	compound	_	Proper=True
10	Denizinde	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	amod	_	Proper=True
11	ki	_	ADP	JJ	_	10	case	_	_
12	morina	_	NOUN	NN	Number=Sing	13	compound	_	_
13	balığı	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	14	compound	_	_
14	nüfusu	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	nsubj	_	_
15	yok	_	ADJ	JJ	Polarity=Neg	19	ccomp	_	_
16	olabilir	_	AUX	VB	Aspect=Hab|Mood=AbilGen|Number=Sing|Person=3|Tense=Pres	15	cop	_	SpaceAfter=No
17	.	_	PUNCT	.	_	15	punct	_	SpaceAfter=No
18	"	_	PUNCT	''	_	15	punct	_	_
19	dedi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
20	.	_	PUNCT	.	_	19	punct	_	_

~~~


