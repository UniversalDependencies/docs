---
layout: base
title:  'Statistics of aux:imp in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `aux:imp`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_mpdt-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_mpdt-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_mpdt-dep-aux-pass.html">aux:pass</a></tt>.

39 nodes (0%) are attached to their parents as `aux:imp`.

39 instances of `aux:imp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.1025641025641.

The following 2 pairs of parts of speech are connected with `aux:imp`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (35; 90% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (4; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux:imp	color:blue
1	Niech	niech	AUX	part	_	4	aux:imp	4:aux:imp	Translit=Niech
2	i	i	PART	part	_	3	advmod:emph	3:advmod:emph	Translit=y
3	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	4	xcomp:pred	4:xcomp:pred	Translit=tak
4	będzie	być	VERB	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=będzie
5	dla	dla	ADP	prep:gen	AdpType=Prep	6	case	6:case	Case=Gen|Translit=dla
6	przyjaźni	przyjaźń	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obl	4:obl	Translit=przyiaźni
7	W	waszmość	ADV	brev:pun	Abbr=Yes	6	nmod	6:nmod	SpaceAfter=No|Translit=W
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	Translit=.
9	Pana	pan	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	7	appos	7:appos	SpaceAfter=No|Translit=Pana
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 24 aux:imp	color:blue
1	Niechaj	niechaj	AUX	part	_	3	aux:imp	3:aux:imp	Translit=Niechaj
2	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	Translit=będzie
3	przeklęty	przekląć	ADJ	ppas:sg:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	Translit=przeklęty
4	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Ins|Translit=z
5	Kainem	Kain	PROPN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	3	obl	3:obl	Translit=Kainem
6	mężobójcą	mężobójca	NOUN	subst:sg:inst:m	Case=Ins|Gender=Masc|Number=Sing	5	appos	5:appos	SpaceAfter=No|Translit=mężobojcą
7	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
8	niechaj	niechaj	AUX	part	_	12	aux:imp	12:aux:imp	Translit=niechaj
9	mieszkanie	mieszkanie	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	12	nsubj:pass	12:nsubj:pass	Translit=mieszkanie
10	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	9	nmod:poss	9:nmod:poss	Translit=jego
11	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	12	aux:pass	12:aux:pass	Translit=będzie
12	spustoszone	spustoszyć	ADJ	ppas:sg:nom:n:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	conj	3:conj	SpaceAfter=No|Translit=spustoszone
13	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	Translit=,
14	niechaj	niechaj	AUX	part	_	16	aux:imp	16:aux:imp	Translit=niechaj
15	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	16	aux:pass	16:aux:pass	Translit=będzie
16	wymazany	wymazać	ADJ	ppas:sg:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	conj	3:conj	Translit=wymazany
17	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	18	case	18:case	Case=Gen|Translit=z
18	ksiąg	księga	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	16	obl	16:obl	Translit=ksiąg
19	żywiących	żyć	ADJ	pact:pl:gen:m:imperf:aff:pos	Aspect=Imp|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	18	acl	18:acl	SpaceAfter=No|Translit=żywiących
20	,	,	PUNCT	interp	PunctType=Comm	27	punct	27:punct	Translit=,
21	i	i	CCONJ	conj	_	27	cc	27:cc	Translit=i
22	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	23	case	23:case	Case=Ins|Translit=z
23	sprawiedliwemi	sprawiedliwy	NOUN	subst:pl:inst:m	Case=Ins|Gender=Masc|Number=Plur	27	obl	27:obl	Translit=sprawiedliwemi
24	niechaj	niechaj	AUX	part	_	27	aux:imp	27:aux:imp	Translit=niechaj
25	nie	nie	PART	part	Polarity=Neg	27	advmod:neg	27:advmod:neg	Translit=nie
26	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	27	aux:pass	27:aux:pass	Translit=będzie
27	pisany	pisać	ADJ	ppas:sg:nom:m:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	16	conj	3:conj|16:conj	SpaceAfter=No|Translit=pisany
28	,	,	PUNCT	interp	PunctType=Comm	35	punct	35:punct	Translit=,
29	i	i	CCONJ	conj	_	35	cc	35:cc	Translit=i
30	pamiątka	pamiątka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	35	nsubj	35:nsubj	Translit=pamiątka
31	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	30	nmod:poss	30:nmod:poss	Translit=jego
32	na	na	ADP	prep:acc	AdpType=Prep	33	case	33:case	Case=Acc|Translit=na
33	wieki	wiek	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	35	obl	35:obl	Translit=wieki
34	niechaj	niechaj	AUX	part	_	35	aux:imp	35:aux:imp	Translit=niechaj
35	zaginie	zaginąć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	conj	3:conj	SpaceAfter=No|Translit=zaginie
36	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


