---
layout: base
title:  'Statistics of xcomp in UD_Teko-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Teko-TuDeT: Relations: `xcomp`

This relation is universal.

19 nodes (1%) are attached to their parents as `xcomp`.

11 instances of `xcomp` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42105263157895.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt> (10; 53% instances), <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt> (7; 37% instances), <tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	ohotar	ho	VERB	v	Person=3|Tense=Fut	3	xcomp	_	_
2	pureru	pureru	NOUN	n	_	3	obj	_	_
3	reka	eka	VERB	v	Rel=Cont	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	sə	sə	NOUN	n	_	3	xcomp	_	_
2	tapiʔir	tapiʔir	NOUN	n	_	3	nsubj	_	_
3	otui	tui	VERB	v	Person=3	8	advcl	_	_
4	rupiwe	upi	ADP	posp	Also=Yes|Rel=Cont	3	obl	_	_
5	,	,	PUNCT	punct	_	8	punct	_	_
6	wãĩwĩkom	wãĩwĩ	NOUN	n	Number=Plur	8	nsubj	_	_
7	səsəwe	sə	NOUN	n	Also=Yes|Red=Yes	8	xcomp	_	_
8	otuiŋ	tui	VERB	v	Number[subj]=Plur|Person=3	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	imani	imani	ADV	adv	_	2	obl	_	_
2	ɨaroŋarehe	ɨar	NOUN	n	Case=Ref|Number[subj]=Plur|Rel=Cont	4	dep	_	_
3	,	,	PUNCT	punct	_	2	punct	_	_
4	ozikazepeŋ	zika	VERB	v	Number[subj]=Plur|Person=3|Subord=Yes	5	advcl	_	_
5	iwaɲete	waɲe	NOUN	n	Foc=Yes|Rel=NCont	0	root	_	_
6	ozikapaŋ	zika	VERB	v	Aspect=Compl|Number[subj]=Plur|Person=3	5	xcomp	_	_

~~~


