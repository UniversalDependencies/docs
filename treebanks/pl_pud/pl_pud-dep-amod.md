---
layout: base
title:  'Statistics of amod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="pl_pud-dep-amod-flat.html">amod:flat</a></tt>.

1494 nodes (8%) are attached to their parents as `amod`.

917 instances of `amod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20883534136546.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1430; 96% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (53; 4% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Nowe	nowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	wydatki	wydatek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj:pass	3:nsubj:pass	_
3	finansowane	finansować	ADJ	ppas:pl:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen
6	zasobnego	zasobny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	_
7	konta	konto	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	_
8	Clinton	Clinton	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Odbyło	odbyć	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
3	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	nsubj	1:nsubj	_
4	łodziami	łódź	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	1	iobj	1:iobj	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	Europy	Europa	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod	_
7	kontynentalnej	kontynentalny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 amod	color:blue
1	Ale	ale	CCONJ	conj	_	5	cc	5:cc	_
2	poza	poza	ADP	prep:inst	AdpType=Prep	5	advmod	5:advmod	Case=Ins
3	tym	to	PRON	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	2	fixed	2:fixed	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	_
5	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	nic	nic	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	5	nsubj	5:nsubj	_
7	wyraźnie	wyraźnie	ADV	adv:pos	Degree=Pos	8	advmod	8:advmod	_
8	artystycznego	artystyczny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	6	amod	6:amod	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case|14:case	Case=Loc
10	niej	on	PRON	ppron3:sg:loc:f:ter:akc:praep	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	5	obl:arg	5:obl:arg	_
11	samej	sam	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
12	lub	lub	CCONJ	conj	_	14	cc	14:cc	_
13	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	14	nmod	14:nmod	_
14	zachowaniu	zachować	NOUN	ger:sg:loc:n:perf:aff	Aspect=Perf|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	10	conj	5:obl:arg|10:conj	_
15	wobec	wobec	ADP	prep:gen	AdpType=Prep	16	case	16:case	Case=Gen
16	ludzi	człowiek	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	14	nmod	14:nmod	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


