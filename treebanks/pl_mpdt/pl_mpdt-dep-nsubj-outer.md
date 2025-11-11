---
layout: base
title:  'Statistics of nsubj:outer in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pl_mpdt-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 14 nsubj:outer	color:blue
1	Drugi	drugi	ADJ	adjnum:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	2	amod	2:amod	Translit=Drugi
2	sposób	sposób	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	18:nsubj	Translit=sposob
3	wróżenia	wróżyć	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	nmod:arg	2:nmod:arg	Translit=wrożenia
4	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	18:cop	SpaceAfter=No|Translit=był
5	:	:	PUNCT	interp	PunctType=Colo	18	punct	18:punct	Translit=:
6	rzucając	rzucać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	14	advcl	14:advcl	Translit=rzucaiąc
7	do	do	ADP	prep:gen	AdpType=Prep	8	case	8:case	Case=Gen|Translit=do
8	wody	woda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	obl	6:obl	Translit=wody
9	trzy	trzy	NUM	num:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	10	nummod	10:nummod	Translit=trzy
10	kamyczki	kamyczek	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No|Translit=kamyczki
11	:	:	PUNCT	interp	PunctType=Colo	6	punct	6:punct	Translit=:
12	gdy	gdy	SCONJ	comp	_	14	mark	14:mark	Translit=gdy
13	się	się	PRON	part	PronType=Prs|Reflex=Yes	14	expl:pv	14:expl:pv	Translit=się
14	kręciły	kręcić	VERB	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	18	nsubj:outer	18:nsubj:outer	Translit=kręciły
15	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	16	case	16:case	Case=Acc|Translit=w
16	koło	koło	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	14	obl	14:obl	SpaceAfter=No|Translit=koło
17	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	Translit=,
18	znak	znak	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	Translit=znak
19	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	18:cop	Translit=był
20	szczęścia	szczęście	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	18	nmod:arg	18:nmod:arg	SpaceAfter=No|Translit=szczęścia
21	.	.	PUNCT	interp	PunctType=Peri	18	punct	18:punct	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj:outer	color:blue
1	Kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	6	nsubj	6:nsubj	Translit=Kto
2	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	SpaceAfter=No|Translit=iest
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
4	kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	6	nsubj:outer	6:nsubj:outer	Translit=kto
5	by	by	AUX	part	_	6	aux:cnd	6:aux:cnd	Translit=by
6	pomierzył	pomierzyć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=pomierzył
7	moc	moc	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj	Translit=moc
8	swoją	swój	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det:poss	7:det:poss	Translit=swoią
9	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins|Translit=z
10	Wszechmocnością	wszechmocność	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	6	obl:cmpr	6:obl:cmpr	Translit=Wszechmocnością
11	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod:poss	10:nmod:poss	SpaceAfter=No|Translit=iego
12	?	?	PUNCT	interp	PunctType=Qest	6	punct	6:punct	Translit=?

~~~


