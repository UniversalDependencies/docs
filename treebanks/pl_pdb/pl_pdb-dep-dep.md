---
layout: base
title:  'Statistics of dep in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `dep`

This relation is universal.

3 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (2; 67% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt> (1; 33% instances).


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
8	określone	określić	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	4:acl	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	artykule	artykuł	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	obl	8:obl	_
11	2	2	X	dig	NumForm=Digit	10	amod	10:amod	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
13	mogą	móc	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
14	stać	stać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	13	xcomp	13:xcomp	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	14	expl:pv	14:expl:pv	_
16	Umawiającymi	umawiać	ADJ	pact:pl:inst:f:imperf:aff	Aspect=Imp|Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	18	acl	18:acl	_
17	się	się	PRON	part	PronType=Prs|Reflex=Yes	16	expl:pv	16:expl:pv	_
18	Stronami	strona	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	14	xcomp:pred	14:xcomp:pred	_
19	niniejszego	niniejszy	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	20	amod	20:amod	_
20	Porozumienia	porozumienie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	18	nmod:arg	18:nmod:arg	_
21	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	14	dep	14:dep	SpaceAfter=No
22	:	:	PUNCT	interp	PunctType=Colo	13	punct	13:punct	_

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
13	palonej	palić	ADJ	ppas:sg:gen:f:imperf:aff	Aspect=Imp|Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	14	acl	14:acl	_
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


