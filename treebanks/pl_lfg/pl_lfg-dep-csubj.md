---
layout: base
title:  'Statistics of csubj in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `csubj`

This relation is universal.

127 nodes (0%) are attached to their parents as `csubj`.

124 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.62204724409449.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (107; 84% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (7; 6% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	I	i	CCONJ	conj	_	2	cc	2:cc	_
2	okazało	okazać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	qub	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
5	że	że	SCONJ	comp	_	6	mark	6:mark	_
6	doniósł	donieść	VERB	praet:sg:m1:perf:nagl	Agglutination=Nagl|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	2:csubj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Szybko	szybko	ADV	adv:pos	Degree=Pos	2	advmod	2:advmod	_
2	okazało	okazać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	qub	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
5	że	że	SCONJ	comp	_	9	mark	9:mark	_
6	moje	mój	DET	adj:pl:nom:f:pos	Case=Nom|Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	7:det	_
7	obawy	obawa	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	9:nsubj	_
8	były	być	AUX	praet:pl:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	niepotrzebne	niepotrzebny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	csubj	2:csubj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	Chociaż	chociaż	SCONJ	comp	_	2	mark	2:mark	_
2	faktem	fakt	NOUN	subst:sg:inst:m3	Case=Ins|Gender=Masc|Number=Sing|SubGender=Masc3	0	root	0:root	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
5	że	że	SCONJ	comp	_	8	mark	8:mark	_
6	Hubal	Hubal	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	8	nsubj	8:nsubj	_
7	okropnie	okropnie	ADV	adv:pos	Degree=Pos	8	advmod	8:advmod	_
8	przeżył	przeżyć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	2:csubj	_
9	te	ten	DET	adj:pl:acc:n:pos	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	10	det	10:det	_
10	zdarzenia	zdarzenie	NOUN	subst:pl:acc:n	Case=Acc|Gender=Neut|Number=Plur	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


