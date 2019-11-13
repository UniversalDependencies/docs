---
layout: base
title:  'Statistics of xcomp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `xcomp`

This relation is universal.
There are 2 language-specific subtypes of `xcomp`: <tt><a href="pl_pud-dep-xcomp-pred.html">xcomp:pred</a></tt>, <tt><a href="pl_pud-dep-xcomp-subj.html">xcomp:subj</a></tt>.

198 nodes (1%) are attached to their parents as `xcomp`.

195 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84343434343434.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (172; 87% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (11; 6% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Można	można	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
2	wskazać	wskazać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
3	paralele	paralela	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	_
4	między	między	ADP	prep:inst	AdpType=Prep	5	case	5:case|9:case	Case=Ins
5	grami	gra	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	3	nmod	3:nmod	_
6	a	a	CCONJ	conj	_	9	cc	9:cc	_
7	naszym	nasz	DET	adj:sg:inst:n:pos	Case=Ins|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det:poss	9:det:poss	_
8	codziennym	codzienny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	życiem	życie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	5	conj	3:nmod|5:conj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 xcomp	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	3	cop	3:cop	_
2	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	proces	proces	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
4	polityczny	polityczny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	a	a	CCONJ	conj	_	8	cc	8:cc	_
7	ja	ja	PRON	ppron12:sg:nom:m1:pri	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	8	nsubj	8:nsubj	_
8	zdecydował	zdecydować	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	_
9	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	8	aux:clitic	8:aux:clitic	_
10	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
11	nie	nie	PART	part	Polarity=Neg	12	advmod:neg	12:advmod:neg	_
12	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	13	cop	13:cop	_
13	obecny	obecny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	xcomp	8:xcomp	SpaceAfter=No
14	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	_
15	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	16	advmod	16:advmod	_
16	mówiono	mówić	VERB	imps:imperf	Aspect=Imp|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis:insert	3:parataxis:insert|8:parataxis:insert	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Pyrrus	Pyrrus	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
3	jednak	jednak	PART	part	_	4	advmod:emph	4:advmod:emph	_
4	zmuszony	zmusić	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	opuścić	opuścić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	4	xcomp	4:xcomp	_
6	Sycylię	Sycylia	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	aby	aby	SCONJ	comp	_	9	mark	9:mark	_
9	zająć	zająć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	5	advcl	5:advcl	_
10	się	się	PRON	part	PronType=Prs|Reflex=Yes	9	expl:pv	9:expl:pv	_
11	innymi	inny	ADJ	adj:pl:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	12	amod	12:amod	_
12	sprawami	sprawa	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	9	iobj	9:iobj	_
13	na	na	ADP	prep:loc	AdpType=Prep	14	case	14:case	Case=Loc
14	południu	południe	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	9	obl	9:obl	_
15	Italii	Italia	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	14	nmod:arg	14:nmod:arg	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


