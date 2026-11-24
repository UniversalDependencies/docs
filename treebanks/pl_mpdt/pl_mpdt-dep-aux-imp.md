---
layout: base
title:  'Statistics of aux:imp in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `aux:imp`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_mpdt-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_mpdt-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_mpdt-dep-aux-pass.html">aux:pass</a></tt>.

47 nodes (0%) are attached to their parents as `aux:imp`.

46 instances of `aux:imp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.21276595744681.

The following 2 pairs of parts of speech are connected with `aux:imp`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (42; 89% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-AUX.html">AUX</a></tt> (5; 11% instances).


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
7	W	waszmość	NOUN	brev:pun	Abbr=Yes	6	nmod	6:nmod	SpaceAfter=No|Translit=W
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	Translit=.
9	Pana	pan	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	7	appos	7:appos	SpaceAfter=No|Translit=Pana
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:imp	color:blue
1	Przeklęty	przekląć	ADJ	ppas:sg:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	Translit=Przeklęty
2	niechaj	niechaj	AUX	part	_	1	aux:imp	1:aux:imp	Translit=niechaj
3	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	1	aux:pass	1:aux:pass	Translit=będzie
4	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	1	advmod	1:advmod	Translit=tak
5	iż	iż	SCONJ	comp	_	11	mark	11:mark	Translit=iż
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc|Translit=w
7	nim	on	PRON	ppron3:sg:loc:m:ter:neut:praep	Case=Loc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	11	obl	11:obl	Translit=nim
8	zdrowego	zdrowy	ADJ	adj:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	Translit=zdrowego
9	członku	członek	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	Translit=członku
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	Translit=nie
11	będzie	być	VERB	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	SpaceAfter=No|Translit=będzie
12	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	Translit=,
13	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Gen|Translit=od
14	wierzchu	wierzch	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	11	obl	11:obl	Translit=wierzchu
15	głowy	głowa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	14	nmod:arg	14:nmod:arg	Translit=głowy
16	aż	aż	PART	part	_	18	advmod:emph	18:advmod:emph	Translit=aż
17	do	do	ADP	prep:gen	AdpType=Prep	18	case	18:case	Case=Gen|Translit=do
18	stopy	stopa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	11	obl	11:obl	Translit=stopy
19	nożnej	nożny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	18	amod	18:amod	SpaceAfter=No|Translit=nożnej
20	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


