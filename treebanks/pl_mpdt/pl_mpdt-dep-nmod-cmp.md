---
layout: base
title:  'Statistics of nmod:cmp in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nmod:cmp`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_mpdt-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_mpdt-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_mpdt-dep-nmod-poss.html">nmod:poss</a></tt>.

9 nodes (0%) are attached to their parents as `nmod:cmp`.

9 instances of `nmod:cmp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `nmod:cmp`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (3; 33% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nmod:cmp	color:blue
1	Są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Są
2	jeszcze	jeszcze	PART	part	_	3	advmod:emph	3:advmod:emph	Translit=ieszcze
3	inne	inny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	amod	7:amod	Translit=inne
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc|Translit=w
5	okryciach	okrycie	NOUN	subst:pl:loc:n	Case=Loc|Gender=Neut|Number=Plur	7	nmod	7:nmod	Translit=okryciach
6	zwierząt	zwierzę	NOUN	subst:pl:gen:n	Case=Gen|Gender=Neut|Number=Plur	5	nmod	5:nmod	Translit=zwierząt
7	odmiany	odmiana	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	1	nsubj	1:nsubj	SpaceAfter=No|Translit=odmiany
8	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
9	jako	jako	ADP	prep:nom	AdpType=Prep|ExtPos=SCONJ	11	case	11:case|19:case	Case=Nom|Translit=iako
10	to	to	PART	part	_	9	fixed	9:fixed	Translit=to
11	skorupy	skorupa	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	7	nmod:cmp	7:nmod:cmp	Translit=skorupy
12	u	u	ADP	prep:gen	AdpType=Prep	13	case	13:case|15:case|17:case	Case=Gen|Translit=u
13	żółwiów	żółw	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	11	nmod	11:nmod	SpaceAfter=No|Translit=żołwiów
14	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	Translit=,
15	ślimaków	ślimak	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	13	conj	11:nmod|13:conj	SpaceAfter=No|Translit=ślimakow
16	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	Translit=,
17	ostryg	ostryga	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	13	conj	11:nmod|13:conj	SpaceAfter=No|Translit=ostryg
18	:	:	PUNCT	interp	PunctType=Colo	19	punct	19:punct	Translit=:
19	kolce	kolec	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	11	conj	7:nmod:cmp|11:conj	Translit=kolce
20	u	u	ADP	prep:gen	AdpType=Prep	21	case	21:case	Case=Gen|Translit=u
21	jeżów	jeż	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	19	nmod	19:nmod	SpaceAfter=No|Translit=ieżów
22	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:cmp	color:blue
1	Alić	alić	CCONJ	conj	_	2	cc	2:cc	Translit=Alić
2	przychodzi	przychodzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=proychodzi
3	mi	ja	PRON	ppron12:sg:dat:pri:nakc	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	2	iobj	2:iobj	SpaceAfter=No|Translit=mi
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
5	że	że	SCONJ	comp	_	7	mark	7:mark	Translit=że
6	owa	ów	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	7	det	7:det	Translit=owa
7	owieczka	owieczka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	ccomp	2:ccomp	Translit=owieczka
8	ty	ty	PRON	ppron12:sg:nom:sec	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	7:nsubj	Translit=ty
9	jesteś	być	AUX	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	Translit=iesteś
10	Elizo	Eliza	PROPN	subst:sg:voc:f	Case=Voc|Gender=Fem|Number=Sing	7	vocative	7:vocative	SpaceAfter=No|Translit=Elizo
11	,	,	PUNCT	interp	PunctType=Comm	21	punct	21:punct	Translit=,
12	która	który	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	21	nsubj	21:nsubj	Translit=która
13	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Gen|Translit=z
14	Domu	dom	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	19	obl	19:obl	Translit=Domu
15	mojego	mój	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	14	det:poss	14:det:poss	Translit=moiego
16	jak	jak	ADV	adv:pos	Degree=Pos	14	nmod:cmp	14:nmod:cmp	Translit=iak
17	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	18	case	18:case	Case=Gen|Translit=z
18	owczarni	owczarnia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	16	obl:arg	16:obl:arg	Translit=owczarni
19	oddaliwszy	oddalić	VERB	pant:perf	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	21	advcl	21:advcl	Translit=oddaliwszy
20	się	się	PRON	part	PronType=Prs|Reflex=Yes	19	expl:pv	19:expl:pv	Translit=się
21	bujała	bujać	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	10:acl:relcl	Translit=buiała
22	ś	być	AUX	aglt:sg:sec:imperf:nwok	Aspect=Imp|Number=Sing|Person=2|Variant=Short	21	aux:clitic	21:aux:clitic	Translit=ś
23	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	21	expl:pv	21:expl:pv	Translit=sobie
24	po	po	ADP	prep:loc	AdpType=Prep	25	case	25:case	Case=Loc|Translit=po
25	Warszawie	Warszawa	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	21	obl	21:obl	SpaceAfter=No|Translit=Warszawie
26	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 nmod:cmp	color:blue
1	Chcecie	chcieć	VERB	fin:pl:sec:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Chcećie
2	li	li	PART	part	_	1	advmod	1:advmod	Translit=li
3	mi	ja	PRON	ppron12:sg:dat:pri:nakc	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	4	iobj	4:iobj	Translit=mi
4	dać	dać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	Translit=dáć
5	złoty	złoty	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	7	obl:arg	7:obl:arg	Translit=złoty
6	dwiema	dwa	NUM	num:du:inst:m	Case=Ins|Gender=Masc|Number=Dual|NumForm=Word	5	nummod	5:nummod	Translit=dwiemá
7	więcej	dużo	ADV	adv:com	Degree=Cmp	4	iobj	4:iobj	SpaceAfter=No|Translit=więcey
8	/	/	PUNCT	interp	PunctType=Slsh	12	punct	12:punct	Translit=/
9	tedy	tedy	CCONJ	conj	_	12	cc	12:cc	Translit=tedy
10	je	on	PRON	ppron3:pl:acc:m:ter:neut:npraep	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	12	obj	12:obj	Translit=je
11	wam	wy	PRON	ppron12:pl:dat:sec	Case=Dat|Number=Plur|Person=2|PronType=Prs	12	iobj	12:iobj	Translit=wam
12	nażyczę	nażyczyć	VERB	fin:sg:pri:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	1	conj	1:conj	Translit=náżycżę
13	niż	niż	SCONJ	conj	ConjType=Comp	14	mark	14:mark	Translit=niż
14	komu	kto	PRON	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing|PronType=Int	11	nmod:cmp	11:nmod:cmp	Translit=komu
15	inszemu	inszy	ADJ	adj:sg:dat:m:pos	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	14	amod	14:amod	Translit=inszemu
16	na	na	ADP	prep:acc	AdpType=Prep	18	case	18:case	Case=Acc|Translit=ná
17	dalszą	daleki	ADJ	adj:sg:acc:f:com	Case=Acc|Degree=Cmp|Gender=Fem|Number=Sing	18	amod	18:amod	Translit=dálszą
18	znajomość	znajomość	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	12	obl	12:obl	SpaceAfter=No|Translit=znájomość
19	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


