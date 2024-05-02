---
layout: base
title:  'Statistics of aux:clitic in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `aux:clitic`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="pl_pud-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pud-dep-aux-pass.html">aux:pass</a></tt>.

26 nodes (0%) are attached to their parents as `aux:clitic`.

23 instances of `aux:clitic` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15384615384615.

The following 3 pairs of parts of speech are connected with `aux:clitic`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (23; 88% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (2; 8% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:clitic	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	7	punct	7:punct	_
2	Uwielbiał	uwielbiać	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	parataxis:obj	7:parataxis:obj	_
3	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	2	aux:clitic	2:aux:clitic	_
4	tropikalne	tropikalny	ADJ	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	5	amod	5:amod	_
5	kolory	kolor	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	2	obj	2:obj	_
6	–	–	PUNCT	interp	PunctType=Dash	7	punct	7:punct	_
7	mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 aux:clitic	color:blue
1	Funkcjonariusze	funkcjonariusz	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	_
2	zapytali	zapytać	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mnie	ja	PRON	ppron12:sg:acc:m1:pri:akc	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Variant=Long	2	obj	2:obj	_
4	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
5	swój	swój	DET	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det:poss	8:det:poss	_
6	niepodrabialnie	niepodrabialnie	ADV	adv:pos	Degree=Pos	7	advmod	7:advmod	_
7	głupi	głupi	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	_
8	sposób	sposób	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obl	2:obl	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
10	czy	czy	PART	part	PartType=Int	11	advmod	11:advmod	_
11	znał	znać	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	_
12	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	11	aux:clitic	11:aux:clitic	_
13	pisarza	pisarz	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	11	obj	11:obj	_
14	Güntera	Günter	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	13	appos	13:appos	_
15	de	de	X	frag	Foreign=Yes	14	flat	14:flat	_
16	Bruyna	Bruyn	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	15	flat	15:flat	_
17	i	i	CCONJ	conj	_	22	cc	22:cc	_
18	czy	czy	PART	part	PartType=Int	22	advmod	22:advmod	_
19	byli	być	AUX	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	22	cop	22:cop	_
20	śmy	być	AUX	aglt:pl:pri:imperf:nwok	Aspect=Imp|Number=Plur|Person=1|Variant=Short	22	aux:clitic	22:aux:clitic	_
21	intelektualnie	intelektualnie	ADV	adv:pos	Degree=Pos	22	advmod	22:advmod	_
22	spokrewnieni	spokrewnić	ADJ	ppas:pl:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	11	conj	2:ccomp|11:conj	SpaceAfter=No
23	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:clitic	color:blue
1	Był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
2	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	4	aux:clitic	4:aux:clitic	_
3	zwykłym	zwykły	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	chłopcem	chłopiec	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
6	zabłoconych	zabłocić	ADJ	ppas:pl:loc:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	7	acl	7:acl	_
7	butach	but	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	4	nmod	4:nmod	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


