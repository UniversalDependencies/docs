---
layout: base
title:  'Statistics of advcl:cmp in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `advcl:cmp`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="pl_mpdt-dep-advcl-relcl.html">advcl:relcl</a></tt>.

41 nodes (0%) are attached to their parents as `advcl:cmp`.

39 instances of `advcl:cmp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.78048780487805.

The following 6 pairs of parts of speech are connected with `advcl:cmp`: <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (19; 46% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (8; 20% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 21 advcl:cmp	color:blue
1	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	2	punct	2:punct	SpaceAfter=No|Translit=„
2	Wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Wiem
3	iż	iż	SCONJ	comp	_	6	mark	6:mark	Translit=iż
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	Translit=iest
5	moją	mój	DET	adj:sg:inst:f:pos	Case=Ins|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det:poss	6:det:poss	Translit=moią
6	powinnością	powinność	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	ccomp	2:ccomp	Translit=powinnością
7	bronić	bronić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp:subj	6:xcomp:subj	Translit=bronić
8	się	się	PRON	part	PronType=Prs|Reflex=Yes	7	expl:pv	7:expl:pv	Translit=się
9	do	do	ADP	prep:gen	AdpType=Prep	10	case	10:case	Case=Gen|Translit=do
10	upadłej	upadły	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	obl	7:obl	SpaceAfter=No|Translit=upadłey
11	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	Translit=,
12	i	i	CCONJ	conj	_	17	cc	17:cc	Translit=i
13	pierwej	pierwej	ADV	adv	_	17	advmod	17:advmod	Translit=pierwey
14	życie	życie	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	17	obj	17:obj	Translit=życie
15	na	na	ADP	prep:loc	AdpType=Prep	16	case	16:case	Case=Loc|Translit=na
16	placu	plac	NOUN	subst:sg:loc:m	Case=Loc|Gender=Masc|Number=Sing	17	obl	17:obl	Translit=placu
17	położyć	położyć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	7	conj	6:xcomp:subj|7:conj	SpaceAfter=No|Translit=położyć
18	,	,	PUNCT	interp	PunctType=Comm	21	punct	21:punct	Translit=,
19	niżeli	niżeli	SCONJ	comp	ConjType=Comp	21	mark	21:mark	Translit=niżeli
20	się	się	PRON	part	PronType=Prs|Reflex=Yes	21	expl:pv	21:expl:pv	Translit=się
21	poddać	poddać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	13	advcl:cmp	13:advcl:cmp	SpaceAfter=No|Translit=poddać
22	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:cmp	color:blue
1	Ja	ja	PRON	ppron12:sg:nom:pri	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|8:nsubj	Translit=Ja
2	jestem	być	AUX	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Translit=iestem
3	roztropniejszy	roztropny	ADJ	adj:sg:nom:m:com	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	0	root	0:root	Translit=rostropnieyszy
4	niż	niż	SCONJ	comp	ConjType=Comp	5	mark	5:mark	Translit=niż
5	rozumiesz	rozumieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl:cmp	3:advcl:cmp	SpaceAfter=No|Translit=rozumiesz
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	Translit=nie
8	chcę	chcieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	Translit=chcę
9	niewolić	niewolić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp	8:xcomp	Translit=niewolić
10	cię	ty	PRON	ppron12:sg:gen:sec:nakc	Case=Gen|Number=Sing|Person=2|PronType=Prs|Variant=Short	9	obj	9:obj	Translit=cię
11	przeciwko	przeciwko	ADP	prep:dat	AdpType=Prep	12	case	12:case	Case=Dat|Translit=przeciwko
12	skłonności	skłonność	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	9	obl:arg	9:obl:arg	Translit=skłonności
13	twojej	twój	DET	adj:sg:dat:f:pos	Case=Dat|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	12	det:poss	12:det:poss	SpaceAfter=No|Translit=twoiey
14	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 advcl:cmp	color:blue
1	CUdowne	cudowny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	3	amod	3:amod	Translit=CUdowne
2	Dyszkurować	dyszkurować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp:subj	6:xcomp:subj	Translit=dyszkurowáć
3	rzeczy	rzecz	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	SpaceAfter=No|Translit=rzeczy
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	Translit=,
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	Translit=iest
6	jedno	jedno	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Translit=iedno
7	co	co	SCONJ	comp	_	9	mark	9:mark	Translit=co
8	cudaki	cudak	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	9	obj	9:obj	Translit=cudaki
9	prawić	prawić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	advcl:cmp	6:advcl:cmp	SpaceAfter=No|Translit=práwić
10	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


