---
layout: base
title:  'Statistics of obj in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `obj`

This relation is universal.

66 nodes (7%) are attached to their parents as `obj`.

66 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36363636363636.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (53; 80% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (4; 6% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Qız	qız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	yoldaşına	yoldaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	namə	namə	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obj	color:blue
1	Əyər	əyər	SCONJ	_	_	6	mark	_	_
2	uşaq	uşaq	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
3	biz	biz	PRON	_	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	evə	ev	NOUN	_	Case=Dat|Number=Sing	5	obl	_	_
5	getməmış	get	VERB	_	Aspect=Perf|Evident=Nfh|Polarity=Neg|Tense=Past|VerbForm=Conv	6	advcl	_	_
6	yatsa	yat	VERB	_	Mood=Cnd|Number=Sing|Person=3	9	advcl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	yetişincə	yetiş	VERB	_	VerbForm=Conv	9	advcl	_	_
9	gərək	gərək	VERB	_	_	0	root	_	_
10	onu	o	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	oyandırax	gərək	VERB	_	Aspect=Prog|Number=Plur|Person=1|Voice=Cau	9	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	Oxuduxlarını	oxu	VERB	_	Aspect=Perf|Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	2	obj	_	_
2	yox	yox	ADJ	_	Polarity=Neg	5	advcl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	oxuyacaxlarını	oxu	VERB	_	Aspect=Prosp|Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3|Tense=Fut|VerbForm=Part	5	obj	_	_
5	annadır	anna	VERB	_	Aspect=Prog|Mood=Ind|Person=3|Tense=Pres|Voice=Cau	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


