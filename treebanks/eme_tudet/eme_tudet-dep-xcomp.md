---
layout: base
title:  'Statistics of xcomp in UD_Teko-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Teko-TuDeT: Relations: `xcomp`

This relation is universal.

41 nodes (1%) are attached to their parents as `xcomp`.

33 instances of `xcomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5609756097561.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt> (30; 73% instances), <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt> (9; 22% instances), <tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	wir	wir	ADV	adv	_	4	advmod	_	_
2	oapara	apar	NOUN	n	Case=Ref|Corf=Yes|Person=3	3	obj	_	_
3	raha	aha	VERB	v	Rel=Cont	4	xcomp	_	_
4	onan	nan	VERB	v	Person=3	0	root	_	_
5	oho	ho	VERB	v	Person=3	4	dep	_	_
6	tab	ta	NOUN	n	Case=Loc	4	obl	_	_

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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	imani	imani	ADV	adv	_	2	obl	_	_
2	ɨaroŋa	ɨar	NOUN	n	Case=Ref|Number[subj]=Plur	5	dep	_	_
3	rehe	ehe	ADP	posp	Rel=Cont	2	case	_	_
4	,	,	PUNCT	punct	_	2	punct	_	_
5	ozikazepeŋ	zika	VERB	v	Number[subj]=Plur|Person=3|Subord=Yes	6	advcl	_	_
6	iwaɲete	waɲe	NOUN	n	Foc=Yes|Rel=NCont	0	root	_	_
7	ozikapaŋ	zika	VERB	v	Aspect=Compl|Number[subj]=Plur|Person=3	6	xcomp	_	_

~~~


