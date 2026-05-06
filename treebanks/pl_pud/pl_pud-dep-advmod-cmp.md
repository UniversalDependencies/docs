---
layout: base
title:  'Statistics of advmod:cmp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advmod:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="pl_pud-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pud-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_pud-dep-advmod-neg.html">advmod:neg</a></tt>.

7 nodes (0%) are attached to their parents as `advmod:cmp`.

6 instances of `advmod:cmp` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.42857142857143.

The following 2 pairs of parts of speech are connected with `advmod:cmp`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (6; 86% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advmod:cmp	color:blue
1	Kontrakty	kontrakt	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	_
2	terminowe	terminowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	amod	1:amod	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
4	USA	USA	PROPN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	5	obl	5:obl	_
5	wzrosły	wzrosnąć	VERB	praet:pl:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	o	o	ADP	prep:acc	AdpType=Prep	8	case	8:case	Case=Acc
7	1	1	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	8	amod	8:amod	SpaceAfter=No
8	%	procent	NOUN	brev:npun	Abbr=Yes	5	obl	5:obl	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
10	podobnie	podobnie	ADV	adv:pos	Degree=Pos	5	advmod:cmp	5:advmod:cmp	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
12	jak	jak	SCONJ	comp	_	14	mark	14:mark	_
13	na	na	ADP	prep:loc	AdpType=Prep	14	case	14:case	Case=Loc
14	rynkach	rynek	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	10	ccomp	10:ccomp	_
15	europejskich	europejski	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	14	amod	14:amod	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 20 advmod:cmp	color:blue
1	Ustanowił	ustanowić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	podstawy	podstawa	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	1	obj	1:obj	_
3	integracji	integracja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod:arg	2:nmod:arg	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
6	której	który	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Rel	12	obl	12:obl	_
7	państwowe	państwowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_
8	mechanizmy	mechanizm	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	12	nsubj	12:nsubj	_
9	gospodarcze	gospodarczy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_
10	i	i	CCONJ	conj	_	11	cc	11:cc	_
11	sądowe	sądowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	conj	8:amod|9:conj	_
12	mogły	móc	VERB	praet:pl:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	_
13	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	14	aux:pass	14:aux:pass	_
14	stosowane	stosować	ADJ	ppas:pl:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	12	xcomp	12:xcomp	_
15	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	17	case	17:case	Case=Loc
16	całym	cały	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	17	amod	17:amod	_
17	rejonie	rejon	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	obl	14:obl	_
18	śródziemnomorskim	śródziemnomorski	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	17	amod	17:amod	SpaceAfter=No
19	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	_
20	podobnie	podobnie	ADV	adv:pos	Degree=Pos	14	advmod:cmp	14:advmod:cmp	SpaceAfter=No
21	,	,	PUNCT	interp	PunctType=Comm	24	punct	24:punct	_
22	jak	jak	SCONJ	comp	_	24	mark	24:mark	_
23	wcześniej	wcześnie	ADV	adv:com	Degree=Cmp	24	advmod	24:advmod	_
24	mechanizmy	mechanizm	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	20	ccomp	20:ccomp	_
25	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	26	case	26:case	Case=Gen
26	Lacjum	Lacjum	PROPN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	24	nmod	24:nmod	_
27	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	29	case	29:case	Case=Loc
28	całej	cały	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	29	amod	29:amod	_
29	Italii	Italia	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	24	nmod	24:nmod	SpaceAfter=No
30	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


