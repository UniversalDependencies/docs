---
layout: base
title:  'Statistics of advmod:arg in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `advmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_mpdt-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_mpdt-dep-advmod-neg.html">advmod:neg</a></tt>.

18 nodes (0%) are attached to their parents as `advmod:arg`.

9 instances of `advmod:arg` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61111111111111.

The following 3 pairs of parts of speech are connected with `advmod:arg`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (16; 89% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 6% instances).


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
12	mógł	móc	VERB	praet:sg:m:imperf:nagl	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	SpaceAfter=No|Translit=mogł
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 advmod:arg	color:blue
1	Samotrzeć	samotrzeć	ADV	advnum	_	6	advmod	6:advmod	Translit=Samotrzeć
2	tedy	tedy	CCONJ	conj	_	6	cc	6:cc	Translit=tedy
3	będąc	być	AUX	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	1	cop	1:cop	Translit=będąc
4	tylko	tylko	PART	part	_	1	advmod:emph	1:advmod:emph	SpaceAfter=No|Translit=tylko
5	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	Translit=,
6	czynił	czynić	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=czynił
7	zupełną	zupełny	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	Translit=zupełną
8	relacją	relacja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj	Translit=relacyją
9	widzenia	widzieć	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	nmod:arg	8:nmod:arg	Translit=widzenia
10	się	się	PRON	part	PronType=Prs|Reflex=Yes	9	expl:pv	9:expl:pv	Translit=się
11	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Ins|Translit=z
12	w	wasz	ADV	brev:pun	Abbr=Yes	9	advmod:arg	9:advmod:arg	SpaceAfter=No|Translit=w
13	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	SpaceAfter=No|Translit=.
14	ks	książęcy	ADV	brev:pun	Abbr=Yes	12	flat	12:flat	SpaceAfter=No|Translit=ks
15	.	.	PUNCT	interp	PunctType=Peri	14	punct	14:punct	SpaceAfter=No|Translit=.
16	m	mość	ADV	brev:pun	Abbr=Yes	12	flat	12:flat	SpaceAfter=No|Translit=m
17	.	.	PUNCT	interp	PunctType=Peri	16	punct	16:punct	Translit=.
18	dobrodziejem	dobrodziej	NOUN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	12	appos	12:appos	Translit=dobrodziejem
19	blisko	blisko	PART	part	_	20	advmod:emph	20:advmod:emph	Translit=blisko
20	trzech	trzy	NUM	num:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur|NumForm=Word	21	nummod	21:nummod	SpaceAfter=No|Translit=trzech
21	godzin	godzina	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	9	nmod	9:nmod	SpaceAfter=No|Translit=godzin
22	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


