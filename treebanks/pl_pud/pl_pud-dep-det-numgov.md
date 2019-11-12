---
layout: base
title:  'Statistics of det:numgov in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pud-dep-det-nummod.html">det:nummod</a></tt>, <tt><a href="pl_pud-dep-det-poss.html">det:poss</a></tt>.

48 nodes (0%) are attached to their parents as `det:numgov`.

48 instances of `det:numgov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27083333333333.

The following 2 pairs of parts of speech are connected with `det:numgov`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (47; 98% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:numgov	color:blue
1	Nowe	nowy	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	2:amod	_
2	normy	norma	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
3	poziomu	poziom	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
4	żelaza	żelazo	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	nmod:arg	3:nmod:arg	_
5	oznaczają	oznaczać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	że	że	SCONJ	comp	_	8	mark	8:mark	_
8	potrzeba	potrzeba	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	5	ccomp	5:ccomp	_
9	więcej	więcej	DET	num:pl:acc:m1:rec	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	_
10	dawców	dawca	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	8	iobj	8:iobj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 27 det:numgov	color:blue
1	Te	ten	DET	adj:pl:nom:n:pos	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	4	det	4:det	_
2	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	4	punct	4:punct	SpaceAfter=No
3	niedawne	niedawny	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	4	amod	4:amod	_
4	zdarzenia	zdarzenie	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	8	nsubj	8:nsubj	SpaceAfter=No
5	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	4	punct	4:punct	_
6	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	8	cop	8:cop	_
7	prawdopodobnie	prawdopodobnie	ADV	adv:pos	Degree=Pos	8	parataxis:insert	8:parataxis:insert	_
8	ataki	atak	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	_
9	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Gen
10	21	21	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	8	nmod	8:nmod	_
11	października	październik	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod:flat	10:nmod:flat	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
13	które	który	DET	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	14	nsubj	14:nsubj	_
14	spowodowały	spowodować	VERB	praet:pl:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	8	acl:relcl	8:acl:relcl	_
15	krótkotrwałe	krótkotrwały	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	16	amod	16:amod	_
16	wyłączenie	wyłączyć	NOUN	ger:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	14	obj	14:obj	_
17	popularnych	popularny	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	18	amod	18:amod	_
18	stron	strona	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	16	obj	16:obj	_
19	takich	taki	DET	adj:pl:gen:f:pos	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	18	det	18:det	_
20	jak	jak	SCONJ	comp	ConjType=Cmpr	21	mark	21:mark|23:mark|25:mark|28:mark	_
21	Reddit	Reddit	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	19	obl:cmpr	19:obl:cmpr	SpaceAfter=No
22	,	,	PUNCT	interp	PunctType=Comm	23	punct	23:punct	_
23	Twitter	twitter	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	21	conj	19:obl:cmpr|21:conj	SpaceAfter=No
24	,	,	PUNCT	interp	PunctType=Comm	25	punct	25:punct	_
25	Spotify	Spotify	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	21	conj	19:obl:cmpr|21:conj	_
26	i	i	CCONJ	conj	_	28	cc	28:cc	_
27	wiele	wiele	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	28	det:numgov	28:det:numgov	_
28	innych	inny	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	21	conj	19:obl:cmpr|21:conj	SpaceAfter=No
29	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


