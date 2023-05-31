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
Average distance between parent and child is 1.22959183673469.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (191; 97% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 det	color:blue
1	Podczas	podczas	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	wyborów	wybory	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	10	obl	10:obl	_
3	parlamentarnych	parlamentarny	ADJ	adj:pl:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	2	amod	2:amod	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
5	2010	2010	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	6	amod:flat	6:amod:flat	_
6	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	10	obl	10:obl	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_
8	Partii	partia	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	10	iobj	10:iobj	_
9	Pracy	praca	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	nmod:flat	8:nmod:flat	_
10	udało	udać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
11	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
12	wygrać	wygrać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	_
13	we	w	ADP	prep:loc:wok	AdpType=Prep|Variant=Long	16	case	16:case	Case=Loc
14	wszystkich	wszystek	DET	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|PronType=Tot	15	det	15:det	_
15	siedmiu	siedem	NUM	num:pl:loc:m3:congr:ncol	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|NumForm=Word	16	nummod	16:nummod	_
16	okręgach	okrąg	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	12	obl	12:obl	_
17	wyborczych	wyborczy	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	16	amod	16:amod	SpaceAfter=No
18	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	_

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


