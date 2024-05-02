---
layout: base
title:  'Statistics of nmod:poss in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

103 nodes (1%) are attached to their parents as `nmod:poss`.

88 instances of `nmod:poss` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30097087378641.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (87; 84% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (10; 10% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	Najpierw	najpierw	ADV	adv	_	2	advmod	2:advmod	_
2	zaczęła	zacząć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	płakać	płakać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	jedna	jeden	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	jezydek	jezydka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	4	obl	4:obl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	potem	potem	ADV	adv	_	10	orphan	10:orphan	_
9	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod:poss	10:nmod:poss	_
10	przyjaciółka	przyjaciółka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	conj	0:root|2:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	Ale	ale	CCONJ	conj	_	7	cc	7:cc	_
2	mroczne	mroczny	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	amod	3:amod	_
3	czyny	czyn	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	7	nsubj:pass	7:nsubj:pass	_
4	Cotton	Cotton	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	nmod:poss	3:nmod:poss	_
5	nie	nie	PART	part	Polarity=Neg	6	advmod:neg	6:advmod:neg	_
6	były	być	AUX	praet:pl:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
7	spowodowane	spowodować	ADJ	ppas:pl:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	jakimś	jakiś	DET	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|PronType=Ind	9	det	9:det	_
9	przymusem	przymus	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	7	iobj	7:iobj	_
10	zabijania	zabijać	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	9	nmod:arg	9:nmod:arg	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:poss	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	advmod	5:advmod	Case=Loc
2	rezultacie	rezultat	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	fixed	1:fixed	_
3	Trump	Trump	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	_
5	martwi	martwić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
7	bardzo	bardzo	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	_
8	głosem	głos	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	5	iobj	5:iobj	_
9	latynoamerykanów	latynoamerykanin	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	8	nmod:poss	8:nmod:poss	_
10	na	na	ADP	prep:loc	AdpType=Prep	11	case	11:case	Case=Loc
11	poziomie	poziom	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl	_
12	narodowym	narodowy	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	11	amod	11:amod	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


