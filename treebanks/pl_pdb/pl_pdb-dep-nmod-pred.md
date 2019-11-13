---
layout: base
title:  'Statistics of nmod:pred in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nmod:pred`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pdb-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pdb-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pdb-dep-nmod-poss.html">nmod:poss</a></tt>.

12 nodes (0%) are attached to their parents as `nmod:pred`.

12 instances of `nmod:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `nmod:pred`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (5; 42% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (5; 42% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:pred	color:blue
1	Głośna	głośny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	muzyka	muzyka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
3	i	i	CCONJ	conj	_	4	cc	4:cc	_
4	bycie	być	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	conj	2:conj|8:nsubj	_
5	niemiłym	niemiły	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	4	nmod:pred	4:nmod:pred	_
6	niczego	nic	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	8	obj	8:obj	_
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	_
8	rozwiąże	rozwiązać	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:pred	color:blue
1	Ale	ale	CCONJ	conj	_	7	cc	7:cc	_
2	bycie	być	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	7	nsubj	7:nsubj	_
3	symbolem	symbol	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	2	nmod:pred	2:nmod:pred	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	wcale	wcale	ADV	adv	_	7	advmod	7:advmod	_
7	zajęciem	zajęcie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	0	root	0:root	_
8	lukratywnym	lukratywny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nmod:pred	color:blue
1	Jak	jak	ADV	adv:pos	Degree=Pos|PronType=Int	3	advmod	3:advmod	_
2	dziewczynki	dziewczynka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	podrosną	podrosnąć	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	advcl	6:advcl	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	_
5	pewnie	pewnie	PART	part	_	6	parataxis:insert	6:parataxis:insert	_
6	docenią	docenić	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
8	że	że	SCONJ	comp	_	13	mark	13:mark	_
9	bycie	być	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	13	nsubj	13:nsubj	_
10	kimś	ktoś	PRON	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing|PronType=Ind	9	nmod:pred	9:nmod:pred	_
11	niepowtarzalnym	niepowtarzalny	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	10	amod	10:amod	_
12	też	też	PART	part	_	13	advmod:emph	13:advmod:emph	_
13	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	6:ccomp	_
14	swoje	swój	DET	adj:pl:acc:f:pos	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	15	det:poss	15:det:poss	_
15	zalety	zaleta	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	13	iobj	13:iobj	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


