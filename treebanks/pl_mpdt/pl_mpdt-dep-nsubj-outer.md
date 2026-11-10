---
layout: base
title:  'Statistics of nsubj:outer in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pl_mpdt-dep-nsubj-pass.html">nsubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (2; 40% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:outer	color:blue
1	Kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	6	nsubj:outer	6:nsubj:outer	Translit=Kto
2	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	SpaceAfter=No|Translit=iest
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
4	kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	6	nsubj	6:nsubj	Translit=kto
5	by	by	AUX	part	_	6	aux:cnd	6:aux:cnd	Translit=by
6	pomierzył	pomierzyć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=pomierzył
7	moc	moc	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj	Translit=moc
8	swoją	swój	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det:poss	7:det:poss	Translit=swoią
9	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins|Translit=z
10	Wszechmocnością	wszechmocność	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	6	obl:cmp	6:obl:cmp	Translit=Wszechmocnością
11	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod:poss	10:nmod:poss	SpaceAfter=No|Translit=iego
12	?	?	PUNCT	interp	PunctType=Qest	6	punct	6:punct	Translit=?

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 2 nsubj:outer	color:blue
1	Drugi	drugi	ADJ	adjnum:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	2	amod	2:amod	Translit=Drugi
2	sposób	sposób	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	18	nsubj:outer	18:nsubj:outer	Translit=sposob
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
14	kręciły	kręcić	VERB	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	18	csubj	18:csubj	Translit=kręciły
15	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	16	case	16:case	Case=Acc|Translit=w
16	koło	koło	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	14	obl	14:obl	SpaceAfter=No|Translit=koło
17	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	Translit=,
18	znak	znak	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	Translit=znak
19	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	18:cop	Translit=był
20	szczęścia	szczęście	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	18	nmod:arg	18:nmod:arg	SpaceAfter=No|Translit=szczęścia
21	.	.	PUNCT	interp	PunctType=Peri	18	punct	18:punct	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:outer	color:blue
1	Co	co	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	5	nsubj:outer	5:nsubj:outer	Translit=Co
2	by	by	AUX	part	_	5	aux:cnd	5:aux:cnd	Translit=by
3	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	Translit=byłá
4	za	za	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=zá
5	przyczyna	przyczyna	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	Translit=przyczyná
6	słoności	słoność	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	nmod:arg	5:nmod:arg	Translit=słonośći
7	wody	woda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod	Translit=wodj
8	morskiej	morski	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	SpaceAfter=No|Translit=morskiey
9	/	/	PUNCT	interp	PunctType=Slsh	5	punct	5:punct	Translit=/
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	Translit=iest
11	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	5	cop	5:cop	Translit=to
12	rzecz	rzecz	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	Translit=rzecz
13	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	14	advmod	14:advmod	Translit=ták
14	trudna	trudny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	12	amod	12:amod	SpaceAfter=No|Translit=trudna
15	/	/	PUNCT	interp	PunctType=Slsh	25	punct	25:punct	Translit=/
16	iż	iż	SCONJ	comp	_	25	mark	25:mark	Translit=iż
17	niektórzy	niektóry	DET	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	25	nsubj	25:nsubj	Translit=niektorzy
18	nie	nie	PART	part	Polarity=Neg	19	advmod:neg	19:advmod:neg	Translit=nie
19	mogąc	móc	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	25	advcl	25:advcl	Translit=mogąc
20	się	się	PRON	part	PronType=Prs|Reflex=Yes	23	expl:pv	23:expl:pv	Translit=się
21	inaczej	inaczej	ADV	adv	_	23	advmod	23:advmod	Translit=ináczey
22	stąd	stąd	ADV	adv	PronType=Dem	23	advmod	23:advmod	Translit=stąd
23	wyprawić	wyprawić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	19	xcomp	19:xcomp	SpaceAfter=No|Translit=wypráwić
24	/	/	PUNCT	interp	PunctType=Slsh	19	punct	19:punct	Translit=/
25	powiadają	powiadać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	ccomp	13:ccomp	SpaceAfter=No|Translit=powiádáią
26	/	/	PUNCT	interp	PunctType=Slsh	35	punct	35:punct	Translit=/
27	że	że	SCONJ	comp	_	35	mark	35:mark	Translit=że
28	P	pan	NOUN	brev:pun	Abbr=Yes	35	nsubj	35:nsubj	SpaceAfter=No|Translit=P
29	.	.	PUNCT	interp	PunctType=Peri	28	punct	28:punct	Translit=.
30	Bóg	Bóg	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	28	appos	28:appos	Translit=Bog
31	zaraz	zaraz	ADV	adv	_	35	advmod	35:advmod	Translit=záraz
32	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	34	case	34:case	Case=Ins|Translit=z
33	samą	sam	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	34	amod	34:amod	Translit=sámą
34	wodą	woda	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	35	obl	35:obl	Translit=wodą
35	stworzył	stworzyć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	25	ccomp	25:ccomp	Translit=stworzył
36	i	i	PART	part	_	37	advmod:emph	37:advmod:emph	Translit=y
37	słoność	słoność	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	35	obj	35:obj	SpaceAfter=No|Translit=słoność
38	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


