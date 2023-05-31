---
layout: base
title:  'Statistics of xcomp in UD_Tupinamba-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Tupinamba-TuDeT: Relations: `xcomp`

This relation is universal.

52 nodes (1%) are attached to their parents as `xcomp`.

42 instances of `xcomp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.15384615384615.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt> (31; 60% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (8; 15% instances), <tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (7; 13% instances), <tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	SãoSebastião	SãoSebastião	PROPN	propn	_	2	nmod	_	_
2	ʔara	ʔar	NOUN	n	Case=Ref	7	obj	_	_
3	,	,	PUNCT	punct	_	2	punct	_	_
4	seʔõawera	eʔõ	NOUN	n	Case=Ref|Rel=NCont|Tense=Past	2	appos	_	_
5	,	,	PUNCT	punct	_	4	punct	_	_
6	Cristãos	cristão	NOUN	n	Number=Plur	7	nsubj	_	_
7	ojmoete	ete	VERB	v	Person[obj]=3|Person[subj]=3|Voice=Cau	0	root	_	_
8	ojemotupana	tupa	VERB	v	Person=3|Reflex=Yes|VerbForm=Ger|Voice=Cau	7	xcomp	_	tupã-ʔar-a

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Niapɨsɨki	apɨsɨk	NOUN	n	Polarity=Neg|Rel=NCont	0	root	_	_
2	ʃwemo	ʃwe	PART	pcl	Int=Yes|Mood=Cnd|Polarity=Neg	1	dep	_	_
3	,	,	PUNCT	punct	_	1	punct	_	_
4	omanõmo	manõ	VERB	V	Person=3|VerbForm=Ger	1	parataxis	_	_
5	tiruã	tiruã	ADV	adv	_	4	discourse	_	_
6	seroβjamo	eroβjar	NOUN	n	Rel=NCont	4	xcomp	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Ã	ã	PART	pcl	_	2	discourse	_	_
2	teko	eko	NOUN	n	Rel=Hum	0	root	_	_
3	aʔereme	aʔereme	ADV	adv	AdvType=Temp	2	advmod	_	_
4	moreroka	erok	NOUN	n	Case=Ref|Voice=Cau	2	xcomp	_	_
5	kwe	kwe	DET	dem	_	7	nmod	_	_
6	βɨa	βɨa	PART	_	_	8	nsubj	_	_
7	Iesus	Iesus	PROPN	propn	_	8	obj	_	_
8	noŋi	noŋ	NOUN	n	NonFoc=Yes	2	parataxis	_	_
9	seramo	er	NOUN	n	Case=Tra|Rel=NCont	8	obl	_	_

~~~


