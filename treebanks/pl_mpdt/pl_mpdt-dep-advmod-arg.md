---
layout: base
title:  'Statistics of advmod:arg in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `advmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_mpdt-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_mpdt-dep-advmod-neg.html">advmod:neg</a></tt>.

18 nodes (0%) are attached to their parents as `advmod:arg`.

10 instances of `advmod:arg` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61111111111111.

The following 2 pairs of parts of speech are connected with `advmod:arg`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (17; 94% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 advmod:arg	color:blue
1	Nikomu	nikt	PRON	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing|PronType=Neg	5	iobj	5:iobj	Translit=Nikomu
2	nic	nic	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	5	obj	5:obj	Translit=nic
3	złego	zły	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	2	amod	2:amod	Translit=złego
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	uczynił	uczynić	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=uczynił
6	;	;	PUNCT	interp	PunctType=Semi	7	punct	7:punct	Translit=;
7	Czynił	czynić	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	5:conj	Translit=Czynił
8	dobrze	dobrze	ADV	adv:pos	Degree=Pos	7	advmod:arg	7:advmod:arg	SpaceAfter=No|Translit=dobrze
9	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
10	ile	ile	ADV	adv	PronType=Int	12	orphan	12:orphan	Translit=ile
11	tylko	tylko	PART	part	_	12	advmod:emph	12:advmod:emph	Translit=tylko
12	mógł	móc	VERB	praet:sg:m:imperf:nagl	Agglutination=Nagl|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	SpaceAfter=No|Translit=mogł
13	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 advmod:arg	color:blue
1	A	a	PART	part	_	0	root	0:root	Translit=A
2	ku	ku	ADP	prep:dat	AdpType=Prep	3	case	3:case	Case=Dat|Translit=ku
3	temu	to	PRON	subst:sg:dat:n	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	6	parataxis:insert	6:parataxis:insert	Translit=temu
4	Panowie	pan	NOUN	subst:pl:voc:manim1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Plur	6	vocative	6:vocative	Translit=Pánowie
5	Politycy	polityk	NOUN	subst:pl:voc:manim1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Plur	4	appos	4:appos	Translit=Politycy
6	widzicie	widzieć	VERB	fin:pl:sec:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	1:conj	Translit=widźićie
7	jako	jako	SCONJ	comp	_	6	dep	6:dep	Translit=iako
8	ten	ten	DET	adj:sg:nom:m:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	9	det	9:det	Translit=ten
9	Kometa	kometa	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	14:nsubj	Translit=Kometá
10	przyszedszy	przyjść	VERB	pant:perf	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	14	advcl	14:advcl	Translit=przyszedszy
11	do	do	ADP	prep:gen	AdpType=Prep	12	case	12:case	Case=Gen|Translit=do
12	Artura	Artur	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	10	obl	10:obl	SpaceAfter=No|Translit=Arturá
13	/	/	PUNCT	interp	PunctType=Slsh	10	punct	10:punct	Translit=/
14	zgasł	zgasnąć	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	ccomp	7:ccomp	SpaceAfter=No|Translit=zgasł
15	/	/	PUNCT	interp	PunctType=Slsh	18	punct	18:punct	Translit=/
16	i	i	CCONJ	conj	_	18	cc	18:cc	Translit=y
17	nie	nie	PART	part	Polarity=Neg	18	advmod:neg	18:advmod:neg	SpaceAfter=No|Translit=nie
18	masz	mieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	7:ccomp|14:conj	Translit=mász
19	go	on	PRON	ppron3:sg:gen:m:ter:nakc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	18	iobj	18:iobj	Translit=go
20	już	już	PART	part	_	18	advmod:emph	18:advmod:emph	SpaceAfter=No|Translit=iuż
21	/	/	PUNCT	interp	PunctType=Slsh	24	punct	24:punct	Translit=/
22	Artur	Artur	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	24	nsubj	24:nsubj	Translit=Artur
23	jednak	jednak	CCONJ	conj	_	24	cc	24:cc	Translit=iednak
24	świeci	świecić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	7:ccomp|14:conj	Translit=świeći
25	pięknie	pięknie	ADV	adv:pos	Degree=Pos	24	advmod	24:advmod	Translit=pięknie
26	jako	jako	ADV	adv	_	25	obl:cmp	25:obl:cmp	Translit=iáko
27	zawsze	zawsze	ADV	adv	PronType=Tot	26	advmod:arg	26:advmod:arg	SpaceAfter=No|Translit=zawsze
28	:	:	PUNCT	interp	PunctType=Colo	14	punct	14:punct	Translit=:

~~~


