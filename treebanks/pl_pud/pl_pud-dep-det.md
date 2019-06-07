---
layout: base
title:  'Statistics of det in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `det`

This relation is universal.
There are 3 language-specific subtypes of `det`: <tt><a href="pl_pud-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pud-dep-det-nummod.html">det:nummod</a></tt>, <tt><a href="pl_pud-dep-det-poss.html">det:poss</a></tt>.

196 nodes (1%) are attached to their parents as `det`.

165 instances of `det` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (194; 99% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Loc
2	tym	ten	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	3:det	_
3	kontekście	kontekst	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	7:obl	_
4	przeciwstawianie	przeciwstawiać	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	7	nsubj	7:nsubj	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
6	handlowi	handel	NOUN	subst:sg:dat:m3	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	4	iobj	4:iobj	_
7	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	sens	sens	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	iobj	7:iobj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	ostatnia	ostatni	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	nadzoruje	nadzorować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	prawybory	prawybory	NOUN	subst:pl:acc:n:pt	Case=Acc|Gender=Neut|Number=Ptan	3	obj	3:obj	_
5	prawicy	prawica	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
7	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Loc
8	których	który	DET	adj:pl:loc:n:pos	Case=Loc|Gender=Neut|Number=Plur|PronType=Rel	11	obl	11:obl	_
9	Rachida	Rachida	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	11:nsubj	_
10	Dati	Dati	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	flat	9:flat	_
11	popiera	popierać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
12	kandydaturę	kandydatura	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	11	obj	11:obj	_
13	Nicolasa	Nicolas	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	12	nmod	12:nmod	_
14	Sarkozy’ego	Sarkozy	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	13	flat	13:flat	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 det	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc
2	1492	1492	X	dig	NumForm=Digit	5	obl	5:obl	_
3	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Gen
4	Hiszpanii	Hiszpania	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	obl	5:obl	_
5	wygnano	wygnać	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	ludność	ludność	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
7	sefardyjską	sefardyjski	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	SpaceAfter=No
8	;	;	PUNCT	interp	PunctType=Semi	14	punct	14:punct	_
9	wielu	wiele	DET	num:pl:nom:m1:rec	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	14	nsubj	14:nsubj	_
10	spośród	spośród	ADP	prep:gen	AdpType=Prep	13	case	13:case	Case=Gen
11	tych	ten	DET	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	13	det	13:det	_
12	hiszpańskich	hiszpański	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	13	amod	13:amod	_
13	Żydów	Żyd	PROPN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	9	obl	9:obl	_
14	przeniosło	przenieść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	0:root|5:conj	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	14	expl:pv	14:expl:pv	_
16	do	do	ADP	prep:gen	AdpType=Prep	17	case	17:case	Case=Gen
17	Portugalii	Portugalia	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	14	obl	14:obl	SpaceAfter=No
18	,	,	PUNCT	interp	PunctType=Comm	24	punct	24:punct	_
19	ale	ale	CCONJ	conj	_	24	cc	24:cc	_
20	ostatecznie	ostatecznie	ADV	adv:pos	Degree=Pos	24	advmod	24:advmod	_
21	również	również	PART	part	_	22	advmod	22:advmod	_
22	tam	tam	ADV	adv	PronType=Dem	24	advmod	24:advmod	_
23	byli	być	AUX	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	24	aux:pass	24:aux:pass	_
24	prześladowani	prześladować	ADJ	ppas:pl:nom:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	14	conj	5:conj|14:conj	SpaceAfter=No
25	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


