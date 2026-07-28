---
layout: base
title:  'Statistics of dep in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `dep`

This relation is universal.

7 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (3; 43% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt> (1; 14% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (1; 14% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 21 dep	color:blue
1	Państwa	państwo	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	13	nsubj	13:nsubj	_
2	oraz	oraz	CCONJ	conj	_	4	cc	4:cc	_
3	regionalne	regionalny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	4	amod	4:amod	_
4	organizacje	organizacja	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	1	conj	1:conj|13:nsubj	_
5	integracji	integracja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod:arg	4:nmod:arg	_
6	gospodarczej	gospodarczy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	5:amod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
8	określone	określić	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	4	amod	4:amod	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	artykule	artykuł	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	obl	8:obl	_
11	2	2	X	dig	NumForm=Digit	10	amod	10:amod	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
13	mogą	móc	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
14	stać	stać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	13	xcomp	13:xcomp	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	14	expl:pv	14:expl:pv	_
16	Umawiającymi	umawiać	ADJ	pact:pl:inst:f:imperf:aff	Aspect=Imp|Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	18	amod	18:amod	_
17	się	się	PRON	part	PronType=Prs|Reflex=Yes	16	expl:pv	16:expl:pv	_
18	Stronami	strona	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	14	xcomp:pred	14:xcomp:pred	_
19	niniejszego	niniejszy	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	20	amod	20:amod	_
20	Porozumienia	porozumienie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	18	nmod:arg	18:nmod:arg	_
21	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	14	dep	14:dep	Case=Acc|SpaceAfter=No
22	:	:	PUNCT	interp	PunctType=Colo	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dep	color:blue
1	Zatem	zatem	SCONJ	comp	_	2	mark	2:mark	_
2	proszę	prosić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mi	ja	PRON	ppron12:sg:dat:m1:pri:nakc	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Variant=Short	4	iobj	4:iobj	_
4	powiedzieć	powiedzieć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	panie	pan	NOUN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	2	vocative	2:vocative	_
7	ministrze	minister	NOUN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	6	appos	6:appos	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
9	dlaczego	dlaczego	ADV	adv	PronType=Int	40	advmod	40:advmod|46:advmod	_
10	zatem	zatem	SCONJ	comp	_	9	dep	9:dep	_
11	kiedy	kiedy	ADV	adv	PronType=Int	12	advmod	12:advmod	_
12	był	być	VERB	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	40	advcl	40:advcl	_
13	najważniejszy	ważny	ADJ	adj:sg:nom:m3:sup	Animacy=Inan|Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	14	amod	14:amod	_
14	dzień	dzień	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
15	chyba	chyba	PART	part	_	14	advmod:emph	14:advmod:emph	SpaceAfter=No
16	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
17	należy	należeć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	parataxis:insert	14:parataxis:insert	_
18	uznać	uznać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	17	xcomp	17:xcomp	SpaceAfter=No
19	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
20	tej	ten	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	21	det	21:det	_
21	pracy	praca	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	14	nmod	14:nmod	SpaceAfter=No
22	,	,	PUNCT	interp	PunctType=Comm	21	punct	21:punct	_
23	mianowicie	mianowicie	PART	part	_	24	advmod:emph	24:advmod:emph	_
24	14	14	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	14	amod	14:amod	_
25	stycznia	styczeń	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	24	nmod:flat	24:nmod:flat	SpaceAfter=No
26	,	,	PUNCT	interp	PunctType=Comm	28	punct	28:punct	_
27	kiedy	kiedy	ADV	adv	PronType=Int	28	advmod	28:advmod	_
28	odbywało	odbywać	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	12:conj|40:advcl	_
29	się	się	PRON	part	PronType=Prs|Reflex=Yes	28	expl:pv	28:expl:pv	_
30	głosowanie	głosowanie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	28	nsubj	28:nsubj	_
31	nad	nad	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	34	case	34:case	Case=Ins
32	niezwykle	niezwykle	ADV	adv:pos	Degree=Pos	33	advmod	33:advmod	_
33	ważnymi	ważny	ADJ	adj:pl:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	34	amod	34:amod	_
34	kwestiami	kwestia	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	30	nmod:arg	30:nmod:arg	_
35	dotyczącymi	dotyczyć	ADJ	pact:pl:inst:f:imperf:aff	Aspect=Imp|Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	34	amod	34:amod	_
36	ustawy	ustawa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	35	iobj	35:iobj	SpaceAfter=No
37	,	,	PUNCT	interp	PunctType=Comm	28	punct	28:punct	_
38	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	40	nsubj	40:nsubj|46:nsubj	_
39	akurat	akurat	ADV	adv	_	40	advmod	40:advmod	_
40	wychodzi	wychodzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:obj	4:ccomp:obj	_
41	kilkanaście	kilkanaście	DET	num:pl:acc:m3:rec:ncol	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	42	det:numgov	42:det:numgov	_
42	razy	raz	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	40	obl	40:obl	_
43	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	44	case	44:case	Case=Gen
44	posiedzenia	posiedzieć	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	40	obl	40:obl	_
45	i	i	CCONJ	conj	_	46	cc	46:cc	_
46	zwołuje	zwoływać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	40	conj	4:ccomp:obj|40:conj	_
47	konferencję	konferencja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	46	obj	46:obj	_
48	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	49	case	49:case	Case=Loc
49	Sejmie	sejm	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	47	nmod	47:nmod	SpaceAfter=No
50	?	?	PUNCT	interp	PunctType=Qest	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 dep	color:blue
1	A	a	PART	part	_	2	advmod:emph	2:advmod:emph	_
2	zatem	zatem	SCONJ	comp	_	28	mark	28:mark	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
4	jeśli	jeśli	SCONJ	comp	_	5	mark	5:mark	_
5	szukacie	szukać	VERB	fin:pl:sec:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	28	advcl	28:advcl	_
6	rozrywki	rozrywka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	obj	5:obj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	jeśli	jeśli	SCONJ	comp	_	9	mark	9:mark|22:mark	_
9	lubicie	lubić	VERB	fin:pl:sec:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	5:conj|28:advcl	_
10	odurzać	odurzać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	9	xcomp	9:xcomp	_
11	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
12	swądem	swąd	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	iobj	10:iobj	_
13	palonej	palić	ADJ	ppas:sg:gen:f:imperf:aff	Aspect=Imp|Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	14	amod	14:amod	_
14	gumy	guma	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	12	nmod:arg	12:nmod:arg	_
15	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	14	dep	14:dep	Case=Loc
16	a	a	CCONJ	conj	_	22	cc	22:cc	_
17	nagły	nagły	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	18	amod	18:amod	_
18	pisk	pisk	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	22	nsubj	22:nsubj	_
19	opon	opona	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	18	nmod:arg	18:nmod:arg	_
20	za	za	ADP	prep:inst	AdpType=Prep	21	case	21:case	Case=Ins
21	plecami	plecy	NOUN	subst:pl:inst:n:pt	Case=Ins|Gender=Neut|Number=Ptan	18	nmod	18:nmod	_
22	kojarzy	kojarzyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	5:conj|9:conj	_
23	się	się	PRON	part	PronType=Prs|Reflex=Yes	22	expl:pv	22:expl:pv	_
24	wam	wy	PRON	ppron12:pl:dat:m1:sec	Animacy=Hum|Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	22	iobj	22:iobj	_
25	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	26	case	26:case	Case=Ins
26	szczytowaniem	szczytować	NOUN	ger:sg:inst:n:imperf:aff	Aspect=Imp|Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	22	obl:arg	22:obl:arg	SpaceAfter=No
27	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
28	zapraszamy	zapraszać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
29	do	do	ADP	prep:gen	AdpType=Prep	30	case	30:case	Case=Gen
30	Ochli	Ochla	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	28	obl	28:obl	SpaceAfter=No
31	!	!	PUNCT	interp	PunctType=Excl	28	punct	28:punct	_

~~~


