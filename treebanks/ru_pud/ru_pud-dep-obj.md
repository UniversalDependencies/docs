---
layout: base
title:  'Statistics of obj in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `obj`

This relation is universal.

727 nodes (4%) are attached to their parents as `obj`.

660 instances of `obj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69876203576341.

The following 13 pairs of parts of speech are connected with `obj`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (579; 80% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (70; 10% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (42; 6% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (16; 2% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-SYM.html">SYM</a></tt> (4; 1% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Эта	этот	DET	DT	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	структура	структура	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	деньги	деньги	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur	3	obj	_	_
5	за	за	ADP	IN	_	7	case	_	_
6	счет	счет	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	fixed	_	_
7	спонсорства	спонсорство	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	obl	_	_
8	и	и	CCONJ	CC	_	9	cc	_	_
9	рекламы	реклама	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obj	color:blue
1	Это	это	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	то	то	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	что	что	PRON	WP	Animacy=Inan|Case=Nom|Gender=Neut	5	nsubj	_	_
5	заставляет	заставлять	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	acl	_	_
6	нас	мы	PRON	PRP	Case=Acc|Number=Plur|Person=1	5	obj	_	_
7	возвращаться	возвращаться	VERB	VB	Aspect=Imp	5	xcomp	_	_
8	снова	снова	ADV	RB	_	7	advmod	_	_
9	и	и	CCONJ	CC	_	10	cc	_	_
10	снова	снова	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Кто	кто	PRON	WP	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	может	мочь	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	остановить	остановить	VERB	VB	Aspect=Perf	2	xcomp	_	_
4	Австралию	Австралия	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obj	_	SpaceAfter=No
5	?	?	PUNCT	.	_	2	punct	_	_

~~~


