---
layout: base
title:  'Statistics of aux:clitic in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `aux:clitic`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_mpdt-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_mpdt-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_mpdt-dep-aux-pass.html">aux:pass</a></tt>.

310 nodes (1%) are attached to their parents as `aux:clitic`.

155 instances of `aux:clitic` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2258064516129.

The following 6 pairs of parts of speech are connected with `aux:clitic`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (284; 92% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (14; 5% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_mpdt-pos-PART.html">PART</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:clitic	color:blue
1	To	to	SCONJ	comp	_	3	mark	3:mark	Translit=To
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	3	aux:clitic	3:aux:clitic	Translit=m
3	dzieło	dzieło	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=dźieło
4	Rąk	ręka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	3	nmod:arg	3:nmod:arg	Translit=Rąk
5	Boskich	boski	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	4	amod	4:amod	SpaceAfter=No|Translit=Boskich
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
7	to	to	SCONJ	comp	_	8	mark	8:mark	Translit=to
8	wolno	wolno	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	3	conj	3:conj	Translit=wolno
9	Bogu	Bóg	PROPN	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing	8	iobj	8:iobj	Translit=Bogu
10	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	11	case	11:case	Case=Ins|Translit=ze
11	mną	ja	PRON	ppron12:sg:inst:pri	Case=Ins|Number=Sing|Person=1|PronType=Prs	12	obl:arg	12:obl:arg	Translit=mną
12	czynić	czynić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp	8:xcomp	Translit=czynić
13	co	co	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	14	obj	14:obj	Translit=co
14	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	ccomp:obj	12:ccomp:obj	SpaceAfter=No|Translit=chce
15	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


