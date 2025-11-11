---
layout: base
title:  'Statistics of aux:clitic in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `aux:clitic`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_mpdt-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_mpdt-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_mpdt-dep-aux-pass.html">aux:pass</a></tt>.

245 nodes (1%) are attached to their parents as `aux:clitic`.

124 instances of `aux:clitic` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.24489795918367.

The following 6 pairs of parts of speech are connected with `aux:clitic`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (227; 93% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (11; 4% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:clitic	color:blue
1	Tego	ten	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	3	det	3:det	Translit=Tego
2	ż	ż	PART	part:nwok	_	1	advmod	1:advmod	Translit=ż
3	dnia	dzień	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	4	obl	4:obl	Translit=dnia
4	chodził	chodzić	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=chodził
5	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	4	aux:clitic	4:aux:clitic	Translit=em
6	na	na	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc|Translit=na
7	galery	galera	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obl	4:obl	SpaceAfter=No|Translit=galery
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
9	które	który	DET	adj:pl:nom:f:pos	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	10	nsubj	10:nsubj	Translit=które
10	miały	mieć	VERB	praet:pl:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	Translit=miały
11	wychodzić	wychodzić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	Translit=wychodzić
12	na	na	ADP	prep:acc	AdpType=Prep	13	case	13:case	Case=Acc|Translit=na
13	pasy	pas	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	11	obl:arg	11:obl:arg	SpaceAfter=No|Translit=pasy
14	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:clitic	color:blue
1	Chcesz	chcieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Chcesz
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	Translit=się
3	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	4	case	4:case	Case=Ins|SpaceAfter=No|Translit=ze
4	mną	ja	PRON	ppron12:sg:inst:pri	Case=Ins|Number=Sing|Person=1|PronType=Prs	5	obl:arg	5:obl:arg	Translit=mną
5	równać	równać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	SpaceAfter=No|Translit=równać
6	:	:	PUNCT	interp	PunctType=Colo	8	punct	8:punct	Translit=:
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	Translit=nie
8	godzien	godny	ADJ	adjb:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	1	conj	1:conj	Translit=godzien
9	eś	być	AUX	aglt:sg:sec:imperf:wok	Aspect=Imp|Number=Sing|Person=2|Variant=Long	8	aux:clitic	8:aux:clitic	Translit=eś
10	tego	to	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	8	obl:arg	8:obl:arg	SpaceAfter=No|Translit=tego
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:clitic	color:blue
1	Była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	Translit=Była
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	6	aux:clitic	6:aux:clitic	Translit=m
3	ubogą	ubogi	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	Translit=ubogą
4	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc|Translit=w
5	posag	posag	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	3	obl:arg	3:obl:arg	Translit=posag
6	Panienką	panienka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Panienką
7	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	Translit=,
8	skądże	skądże	ADV	adv	PronType=Int	16	advmod	16:advmod	Translit=zkądże
9	by	by	AUX	part	_	16	aux:cnd	16:aux:cnd	Translit=by
10	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	16	aux:clitic	16:aux:clitic	Translit=m
11	się	się	PRON	part	PronType=Prs|Reflex=Yes	17	expl:pv	17:expl:pv	Translit=śię
12	tedy	tedy	CCONJ	conj	_	16	cc	16:cc	Translit=tedy
13	tą	ten	DET	adj:sg:inst:f:pos	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	15	det	15:det	Translit=tą
14	płonną	płonny	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	15	amod	15:amod	Translit=płonną
15	myślą	myśl	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	17	iobj	17:iobj	Translit=myślą
16	miała	mieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	conj	6:conj	Translit=miała
17	zatrudnić	zatrudnić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	16	xcomp	16:xcomp	SpaceAfter=No|Translit=zatrudnić
18	?	?	PUNCT	interp	PunctType=Qest	6	punct	6:punct	Translit=?

~~~


