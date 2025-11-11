---
layout: base
title:  'Statistics of advcl:relcl in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="pl_mpdt-dep-advcl-cmpr.html">advcl:cmpr</a></tt>.

26 nodes (0%) are attached to their parents as `advcl:relcl`.

20 instances of `advcl:relcl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.1153846153846.

The following 4 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (20; 77% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl:relcl	color:blue
1	Psi	psi	ADJ	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	Translit=Psi
2	i	i	CCONJ	conj	_	3	cc	3:cc	Translit=y
3	Wilcy	wilk	NOUN	subst:pl:nom:manim1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	1	conj	1:conj|7:nsubj	Translit=Wilcy
4	do	do	ADP	prep:gen	AdpType=Prep	5	case	5:case	Case=Gen|Translit=do
5	szaleństwa	szaleństwo	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	6	obl:arg	6:obl:arg	Translit=szalęnstwa
6	skłonni	skłonny	ADJ	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	xcomp:pred	7:xcomp:pred	Translit=skłonni
7	będą	być	VERB	bedzie:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=będą
8	/	/	PUNCT	interp	PunctType=Slsh	11	punct	11:punct	Translit=/
9	czego	co	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	12	nmod:arg	12:nmod:arg	Translit=ćzego
10	już	już	PART	part	_	11	advmod:emph	11:advmod:emph	Translit=iuż
11	są	być	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl:relcl	7:advcl:relcl	Translit=są
12	początki	początek	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	11:nsubj	SpaceAfter=No|Translit=poćzątki
13	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advcl:relcl	color:blue
1	Której	który	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|PronType=Int	2	det:poss	2:det:poss	Translit=Ktorey
2	różnice	różnica	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	9	advcl:relcl	9:advcl:relcl	Translit=rożnice
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc|Translit=w
4	obrocie	obrót	NOUN	subst:sg:loc:m	Case=Loc|Gender=Masc|Number=Sing	2	nmod:arg	2:nmod:arg	Translit=obrocie
5	innych	inny	ADJ	adj:pl:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	6	amod	6:amod	Translit=innych
6	luminarzów	luminarz	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	4	nmod:arg	4:nmod:arg	SpaceAfter=No|Translit=luminarzow
7	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	Translit=,
8	taż	tenże	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	10	xcomp:pred	10:xcomp:pred	Translit=taż
9	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=iest
10	racja	racja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	SpaceAfter=No|Translit=racya
11	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	Translit=,
12	co	co	SCONJ	comp	_	14	mark	14:mark|17:mark	Translit=co
13	i	i	PART	part	_	14	cc:preconj	14:cc:preconj	Translit=y
14	słońca	słońce	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	8	obl:cmpr	8:obl:cmpr	SpaceAfter=No|Translit=słońca
15	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	Translit=,
16	albo	albo	CCONJ	conj	_	17	cc	17:cc	Translit=álbo
17	Księżyca	Księżyc	PROPN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	14	conj	8:obl:cmpr|14:conj	SpaceAfter=No|Translit=Xiężyca
18	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	Translit=.

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 20 advcl:relcl	color:blue
1	kazał	kazać	VERB	praet:sg:m:biasp	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=kazał
2	eś	być	AUX	aglt:sg:sec:imperf:wok	Aspect=Imp|Number=Sing|Person=2|Variant=Long	1	aux:clitic	1:aux:clitic	Translit=eś
3	katowi	kat	NOUN	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing	1	obl	1:obl	Translit=katowi
4	zamordować	zamordować	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	SpaceAfter=No|Translit=zamordować
5	;	;	PUNCT	interp	PunctType=Semi	32	punct	32:punct	Translit=;
6	których	który	DET	adj:pl:gen:m:pos	Case=Gen|Gender=Masc|Number=Plur|PronType=Int	7	det:poss	7:det:poss	Translit=których
7	krwie	krew	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	32	iobj	32:iobj	SpaceAfter=No|Translit=krwie
8	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
9	że	że	SCONJ	comp	_	12	mark	12:mark	Translit=że
10	król	król	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	Translit=król
11	nie	nie	PART	part	Polarity=Neg	12	advmod:neg	12:advmod:neg	Translit=nie
12	zemścił	zemścić	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	ccomp	7:ccomp	Translit=zemścił
13	się	się	PRON	part	PronType=Prs|Reflex=Yes	12	expl:pv	12:expl:pv	Translit=się
14	nad	nad	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Ins|Translit=nad
15	tobą	ty	PRON	ppron12:sg:inst:sec	Case=Ins|Number=Sing|Person=2|PronType=Prs	12	obl:arg	12:obl:arg	SpaceAfter=No|Translit=tobą
16	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	Translit=,
17	czego	co	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	20	obl:arg	20:obl:arg	Translit=czego
18	ś	być	AUX	aglt:sg:sec:imperf:nwok	Aspect=Imp|Number=Sing|Person=2|Variant=Short	20	aux:clitic	20:aux:clitic	Translit=ś
19	beł	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	20	cop	20:cop	Translit=beł
20	godzien	godny	ADJ	adjb:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	12	advcl:relcl	12:advcl:relcl	SpaceAfter=No|Translit=godzien
21	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	Translit=,
22	Bóg	Bóg	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	32	nsubj	32:nsubj	Translit=Bóg
23	się	się	PRON	part	PronType=Prs|Reflex=Yes	32	expl:pv	32:expl:pv	Translit=się
24	na	na	ADP	prep:loc	AdpType=Prep	25	case	25:case	Case=Loc|Translit=na
25	nim	on	PRON	ppron3:sg:loc:m:ter:neut:praep	Case=Loc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	32	obl:arg	32:obl:arg	Translit=nim
26	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	29	case	29:case	Case=Acc|Translit=przez
27	ten	ten	DET	adj:sg:acc:m:pos	Case=Acc|ExtPos=DET|Gender=Masc|Number=Sing|PronType=Dem	29	nmod:arg	29:nmod:arg	Translit=ten
28	że	ż	PART	part	_	27	fixed	27:fixed	Translit=że
29	instrument	instrument	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	32	obl	32:obl	Translit=instrument
30	zachowany	zachować	ADJ	ppas:sg:acc:m:perf:aff:pos	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	29	acl	29:acl	Translit=zachowany
31	słusznie	słusznie	ADV	adv:pos	Degree=Pos	32	parataxis:insert	32:parataxis:insert	Translit=słusznie
32	mści	mścić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl:relcl	4:advcl:relcl	SpaceAfter=No|Translit=mści
33	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


