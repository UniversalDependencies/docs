---
layout: base
title:  'Statistics of xcomp:pred in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="pl_pud-dep-xcomp-subj.html">xcomp:subj</a></tt>.

37 nodes (0%) are attached to their parents as `xcomp:pred`.

34 instances of `xcomp:pred` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.48648648648649.

The following 3 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (25; 68% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (11; 30% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:pred	color:blue
1	Tylko	tylko	PART	part	_	2	advmod:emph	2:advmod:emph	_
2	50	50	NUM	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	3	nsubj	3:nsubj	_
3	stanowiły	stanowić	VERB	praet:pl:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	targowiska	targowisko	NOUN	subst:pl:acc:n:ncol	Case=Acc|Gender=Neut|Number=Plur	3	xcomp:pred	3:xcomp:pred	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp:pred	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	_
2	wyidealizowana	wyidealizować	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	acl	3:acl	_
3	wizja	wizja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
4	monarchii	monarchia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	nmod:arg	3:nmod:arg	_
5	Romanowów	Romanow	PROPN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	4	nmod	4:nmod	_
6	czyniła	czynić	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	go	on	PRON	ppron3:sg:acc:m1:ter:nakc:npraep	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	6	obj	6:obj	_
8	ślepym	ślepy	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	xcomp:pred	6:xcomp:pred	_
9	na	na	ADP	prep:acc	AdpType=Prep	11	case	11:case	Case=Acc
10	faktyczny	faktyczny	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	11	amod	11:amod	_
11	stan	stan	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obl:arg	8:obl:arg	_
12	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	13	nmod:poss	13:nmod:poss	_
13	kraju	kraj	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 xcomp:pred	color:blue
1	Jednak	jednak	CCONJ	conj	_	26	cc	26:cc	_
2	kiedy	kiedy	ADV	adv	PronType=Int	6	advmod	6:advmod	_
3	senat	senat	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
4	definitywnie	definitywnie	ADV	adv:pos	Degree=Pos	6	advmod	6:advmod	_
5	mu	on	PRON	ppron3:sg:dat:m1:ter:nakc:npraep	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	6	iobj	6:iobj	_
6	odmówił	odmówić	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	26	advcl	26:advcl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
8	zabraniając	zabraniać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	6	advcl	6:advcl	_
9	mu	on	PRON	ppron3:sg:dat:m1:ter:nakc:npraep	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	8	iobj	8:iobj	_
10	kandydowania	kandydować	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	obj	8:obj	_
11	na	na	ADP	prep:acc	AdpType=Prep	12	case	12:case	Case=Acc
12	konsula	konsul	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	10	obl:arg	10:obl:arg	_
13	i	i	CCONJ	conj	_	14	cc	14:cc	_
14	dając	dawać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	8	conj	6:advcl|8:conj	_
15	mu	on	PRON	ppron3:sg:dat:m1:ter:nakc:npraep	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	14	iobj	14:iobj	_
16	do	do	ADP	prep:gen	AdpType=Prep	17	case	17:case	Case=Gen
17	wyboru	wybór	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	obl:arg	14:obl:arg	_
18	wycofanie	wycofać	NOUN	ger:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	14	obj	14:obj	_
19	wojsk	wojsko	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	18	obj	18:obj	_
20	lub	lub	CCONJ	conj	_	21	cc	21:cc	_
21	stanie	stać	NOUN	ger:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	18	conj	14:obj|18:conj	_
22	się	się	PRON	part	PronType=Prs|Reflex=Yes	21	expl:pv	21:expl:pv	_
23	wrogiem	wróg	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	21	xcomp:pred	21:xcomp:pred	_
24	publicznym	publiczny	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	23	amod	23:amod	SpaceAfter=No
25	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
26	zrozumiał	zrozumieć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
27	,	,	PUNCT	interp	PunctType=Comm	31	punct	31:punct	_
28	że	że	SCONJ	comp	_	31	mark	31:mark|33:mark	_
29	którąkolwiek	którykolwiek	DET	adj:sg:acc:f:pos	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	30	det	30:det	_
30	możliwość	możliwość	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	31	obj	31:obj	_
31	wybierze	wybrać	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	26	ccomp:obj	26:ccomp:obj	SpaceAfter=No
32	,	,	PUNCT	interp	PunctType=Comm	33	punct	33:punct	_
33	odda	oddać	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	31	conj	26:ccomp:obj|31:conj	_
34	się	się	PRON	part	PronType=Prs|Reflex=Yes	33	expl:pv	33:expl:pv	_
35	bezbronny	bezbronny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	33	obl	33:obl	_
36	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	37	case	37:case	Case=Acc
37	ręce	ręka	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	33	obl:arg	33:obl:arg	_
38	swoich	swój	DET	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	40	det:poss	40:det:poss	_
39	politycznych	polityczny	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	40	amod	40:amod	_
40	wrogów	wróg	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	37	nmod	37:nmod	SpaceAfter=No
41	.	.	PUNCT	interp	PunctType=Peri	26	punct	26:punct	_

~~~


