---
layout: base
title:  'Statistics of orphan in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `orphan`

This relation is universal.

12 nodes (0%) are attached to their parents as `orphan`.

6 instances of `orphan` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 9 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (2; 17% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 orphan	color:blue
1	1912'de	1912	NOUN	NN	Case=Loc|Number=Sing	4	orphan	_	orig_deprel=obl:tmod
2	ilk	ilk	ADJ	JJ	Number=Sing	4	amod	_	_
3	film	film	NOUN	NN	Number=Sing	4	compound	_	_
4	şirketi	şirket	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	orig_deprel=nsubj
5	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
6	Athina	Athina	PROPN	PROPN	Number=Sing	7	compound	_	Proper=True
7	Film	film	NOUN	NN	Number=Sing	4	appos	_	Proper=True|SpaceAfter=No
8	)	)	PUNCT	)	_	7	punct	_	_
9	ve	ve	CCONJ	CCONJ	_	13	cc	_	ToDo=cc-after-conj
10	1916'da	1916	NOUN	NN	Case=Loc|Number=Sing	13	obl:tmod	_	_
11	Asty	Asty	PROPN	PROPN	Number=Sing	12	compound	_	Proper=True
12	Film	film	NOUN	NN	Case=Nom|Number=Sing	13	nsubj	_	Proper=True
13	kuruldu	kur	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	4	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 orphan	color:blue
1	Kafkasya'nın	Kafkasya	PROPN	PROPN	Case=Gen|Number=Sing	3	nmod:poss	_	Proper=True
2	kuzey	kuzey	NOUN	NN	Number=Sing	3	compound	_	_
3	kısmı	kısım	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	orig_deprel=nsubj
4	Cis	Cis	X	FW	_	5	compound	_	Proper=True
5	Kafkasya	Kafkasya	PROPN	PROPN	Number=Sing	3	orphan	_	orig_deprel=advcl|Proper=True|SpaceAfter=No
6	,	,	PUNCT	,	_	12	punct	_	_
7	güney	güney	NOUN	NN	Number=Sing	8	compound	_	_
8	kısmı	kısım	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
9	ise	ise	VERB	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	12	advcl	_	_
10	Transkafkasya	Transkafkasya	PROPN	PROPN	Number=Sing	12	advcl	_	Proper=True
11	olarak	olarak	AUX	CRB	Polarity=Pos	10	cop	_	_
12	bilinir	bili	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres|Voice=Pass	3	conj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 orphan	color:blue
1	Para	para	NOUN	NN	Number=Sing	2	obj	_	_
2	basma	bas	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	5	csubj	_	_
3	ağırlıklı	_	ADJ	JJ	Number=Sing	0	root	_	orig_deprel=advcl
4	olarak	olarak	AUX	CRB	Polarity=Pos	3	cop	_	_
5	nümismatik	nümismatik	NOUN	NN	Number=Sing	3	orphan	_	orig_deprel=root
6	tir	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
7	ve	ve	CCONJ	CCONJ	_	13	cc	_	ToDo=cc-after-conj
8	esas	esas	NOUN	NN	Number=Sing	13	advcl	_	_
9	olarak	olarak	AUX	CRB	Polarity=Pos	8	cop	_	_
10	koleksiyonculara	koleksiyoncu	NOUN	NN	Case=Dat|Number=Plur	11	advmod	_	_
11	satılmak	sat	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	12	compound	_	_
12	amacıyla	amaç	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	advmod	_	_
13	gerçekleştirilen	gerçekleş	ADJ	VJ	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres|Voice=CauPass	3	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


