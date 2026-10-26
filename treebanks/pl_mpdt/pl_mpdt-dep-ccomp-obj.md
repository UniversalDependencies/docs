---
layout: base
title:  'Statistics of ccomp:obj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `ccomp:obj`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="pl_mpdt-dep-ccomp-cleft.html">ccomp:cleft</a></tt>.

84 nodes (0%) are attached to their parents as `ccomp:obj`.

78 instances of `ccomp:obj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.09523809523809.

The following 5 pairs of parts of speech are connected with `ccomp:obj`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (73; 87% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 6% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp:obj	color:blue
1	Atoli	atoli	CCONJ	conj	_	5	cc	5:cc	Translit=Atoli
2	wprawdzie	wprawdzie	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=w prawdzie
3	mówić	mówić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	5:xcomp	Translit=mowić
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	Translit=się
5	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=może
6	iż	iż	SCONJ	comp	_	8	mark	8:mark	Translit=iż
7	tu	tu	ADV	adv	PronType=Dem	8	advmod	8:advmod	Translit=tu
8	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:obj	3:ccomp:obj	SpaceAfter=No|Translit=iest
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
10	gdzie	gdzie	ADV	adv	PronType=Rel	11	advmod	11:advmod	Translit=gdzie
11	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	SpaceAfter=No|Translit=iest
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp:obj	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	SpaceAfter=No|Translit=Nie
2	przydał	przydać	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=przydał
3	by	by	AUX	part	_	2	aux:cnd	2:aux:cnd	Translit=by
4	był	być	AUX	plusq:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	aux	2:aux	Translit=był
5	że	że	SCONJ	comp	_	7	mark	7:mark	Translit=że
6	on	on	PRON	ppron3:sg:nom:m:ter:neut:npraep	Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	7	nsubj	7:nsubj	Translit=on
7	Dobry	dobry	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	ccomp:obj	2:ccomp:obj	SpaceAfter=No|Translit=Dobry
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
9	gdyby	gdyby	SCONJ	comp	_	11	mark	11:mark	Translit=gdyby
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	Translit=nie
11	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	Translit=było
12	pasterzów	pasterz	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	11	nsubj	11:nsubj	Translit=pásterzow
13	złych	zły	ADJ	adj:pl:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	12	amod	12:amod	SpaceAfter=No|Translit=złych
14	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp:obj	color:blue
1	Ci	ten	DET	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	2	nsubj	2:nsubj	Translit=Ci
2	nauczali	nauczać	VERB	praet:pl:manim1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=nauczali
3	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
4	iż	iż	SCONJ	comp	_	7	mark	7:mark	Translit=iż
5	gwiazdy	gwiazda	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	7	nsubj	7:nsubj	Translit=gwiazdy
6	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	Translit=są
7	istoty	istota	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	2	ccomp:obj	2:ccomp:obj	Translit=istoty
8	ciemne	ciemny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	amod	7:amod	SpaceAfter=No|Translit=ciemne
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
10	gęste	gęsty	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	8	conj	7:amod|8:conj	SpaceAfter=No|Translit=gęste
11	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
12	twarde	twardy	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	8	conj	7:amod|8:conj	SpaceAfter=No|Translit=twarde
13	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	Translit=,
14	i	i	CCONJ	conj	_	17	cc	17:cc	Translit=y
15	cudzy	cudzy	ADJ	adj:sg:acc:m:pos	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	16	amod	16:amod	Translit=cudzy
16	ogień	ogień	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	17	obj	17:obj	Translit=ogień
17	karmiące	karmić	ADJ	pact:pl:nom:f:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	8	conj	7:amod|8:conj	SpaceAfter=No|Translit=karmiące
18	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


