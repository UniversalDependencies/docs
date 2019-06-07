---
layout: base
title:  'Statistics of ccomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `ccomp`

This relation is universal.

31 nodes (0%) are attached to their parents as `ccomp`.

30 instances of `ccomp` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.32258064516129.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (17; 55% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (6; 19% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (3; 10% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 ccomp	color:blue
1	Ben	ben	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	6	nsubj	_	_
2	zaten	zaten	ADV	RB	_	6	advmod	_	_
3	her	her	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	şekilde	şekil	NOUN	NN	Case=Loc|Number=Sing	6	obl	_	_
5	hapse	haps	NOUN	NN	Case=Dat|Number=Sing	6	obl	_	_
6	gireceğim	gir	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	8	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	umarım	um	VERB	VB	Number=Sing|Person=1|Tense=Aor	0	root	_	_
9	buna	bu	PRON	PRD	Case=Dat|Number=Sing|Polarity=Pos	10	nmod	_	_
10	değmiştir	değmiş	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 ccomp	color:blue
1	Bu	bu	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	siyasi	siyasi	ADJ	JJ	Number=Sing	4	amod	_	_
3	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	4	det	_	_
4	süreç	süreç	NOUN	NN	Number=Sing	11	ccomp	_	_
5	ve	ve	CCONJ	CCONJ	_	9	cc	_	_
6	ben	ben	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	9	nsubj	_	_
7	bulunmamaya	bulun	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Ger	9	advcl	_	_
8	kararı	karar	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	verdim	ver	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	4	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	_	_
11	demişti	de	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 ccomp	color:blue
1	Donald	Donald	PROPN	PROPN	Number=Sing	3	compound	_	Proper=True
2	Trump	Trump	PROPN	PROPN	Number=Sing	1	flat:name	_	Proper=True
3	taklitçisi	taklitçi	NOUN	NN	Number=Sing	4	compound	_	_
4	John	John	PROPN	PROPN	Number=Sing	19	nsubj	_	Proper=True
5	Di	i	PROPN	PROPN	Number=Sing|NumType=Ord	4	flat:name	_	Proper=True
6	Domenico	Domenico	PROPN	PROPN	Number=Sing	4	flat:name	_	Proper=True
7	geçen	geç	ADJ	JJ	Number=Sing|Polarity=Pos	8	amod	_	_
8	sene	sen	NOUN	NN	Number=Sing	10	obl:tmod	_	_
9	Slate'e	Slate	PROPN	PROPN	Case=Dat|Number=Sing	10	obl	_	Proper=True
10	yaptığı	yap	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	11	acl:relcl	_	_
11	açıklamada	açıkla	NOUN	NN	Case=Loc|Number=Sing|Polarity=Pos	19	obl	_	_
12	"	"	PUNCT	``	_	16	punct	_	SpaceAfter=No
13	Onu	o	PRON	PRP	Case=Acc|Number=Sing|Polarity=Pos	14	obj	_	_
14	oynarken	oyna	ADV	CRB	Polarity=Pos	16	advcl	_	_
15	güçlü	güçlü	ADJ	JJ	Number=Sing	16	compound	_	_
16	hissediyorum	hisset	AUX	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres	19	ccomp	_	SpaceAfter=No
17	.	_	PUNCT	.	_	16	punct	_	SpaceAfter=No
18	"	_	PUNCT	''	_	16	punct	_	_
19	demişti	de	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp	0	root	_	SpaceAfter=No
20	.	.	PUNCT	.	_	19	punct	_	_

~~~


