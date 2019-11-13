---
layout: base
title:  'Statistics of flat:foreign in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-flat.html">flat</a></tt>.

23 nodes (0%) are attached to their parents as `flat:foreign`.

23 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (21; 91% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc
2	nowych	nowy	ADJ	adj:pl:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	3	amod	3:amod	_
3	odcinkach	odcinek	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	4	obl	4:obl	_
4	emitowany	emitować	ADJ	ppas:sg:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
6	program	program	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
7	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	8	punct	8:punct	SpaceAfter=No
8	The	the	X	ign	Foreign=Yes	6	nmod	6:nmod	_
9	Talking	talking	X	ign	Foreign=Yes	8	flat:foreign	8:flat:foreign	_
10	Dead	dead	X	ign	Foreign=Yes	9	flat:foreign	9:flat:foreign	SpaceAfter=No
11	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	8	punct	8:punct	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	Podczas	podczas	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	rozdania	rozdać	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	12	obl	12:obl	_
3	międzynarodowych	międzynarodowy	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	4	amod	4:amod	_
4	nagród	nagroda	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	2	obj	2:obj	_
5	Car	car	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	appos	4:appos	_
6	of	of	X	ign	Foreign=Yes	5	flat:foreign	5:flat:foreign	_
7	the	the	X	ign	Foreign=Yes	6	flat:foreign	6:flat:foreign	_
8	Century	century	X	ign	Foreign=Yes	7	flat:foreign	7:flat:foreign	_
9	Ford	ford	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	12	nsubj:pass	12:nsubj:pass	_
10	T	t	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	9	nmod:flat	9:nmod:flat	_
11	został	zostać	AUX	praet:sg:m2:perf	Animacy=Nhum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	aux:pass	12:aux:pass	_
12	ogłoszony	ogłosić	ADJ	ppas:sg:nom:m2:perf:aff	Animacy=Nhum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
13	najważniejszym	ważny	ADJ	adj:sg:inst:m3:sup	Animacy=Inan|Case=Ins|Degree=Sup|Gender=Masc|Number=Sing	14	amod	14:amod	_
14	samochodem	samochód	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	12	iobj	12:iobj	_
15	XX	XX	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	16	amod	16:amod	_
16	wieku	wiek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	nmod	14:nmod	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 flat:foreign	color:blue
1	—	—	PUNCT	interp	PunctType=Dash	15	punct	15:punct	_
2	Szczerze	szczerze	ADV	adv:pos	Degree=Pos	3	advmod	3:advmod	_
3	mówiąc	mówić	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	9	parataxis:insert	9:parataxis:insert	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	_
5	powszechne	powszechny	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	6	amod	6:amod	_
6	wybory	wybory	NOUN	subst:pl:nom:n:pt	Case=Nom|Gender=Neut|Number=Ptan	9	nsubj	9:nsubj	_
7	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	9	cop	9:cop	_
8	ostatnia	ostatni	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	amod	9:amod	_
9	rzecz	rzecz	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	15	parataxis:obj	15:parataxis:obj	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
11	jakiej	jaki	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|PronType=Rel	12	iobj	12:iobj	_
12	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	9:acl:relcl	_
13	rząd	rząd	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
14	—	—	PUNCT	interp	PunctType=Dash	15	punct	15:punct	_
15	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
16	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	17	case	17:case	Case=Loc
17	programie	program	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	obl	15:obl	_
18	BBC	BBC	PROPN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	17	nmod	17:nmod	_
19	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	20	punct	20:punct	SpaceAfter=No
20	The	The	X	ign	Foreign=Yes	17	nmod	17:nmod	_
21	Andrew	Andrew	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	20	flat	20:flat	_
22	Marr	Marr	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	21	flat	21:flat	_
23	Show	show	X	ign	Foreign=Yes	22	flat:foreign	22:flat:foreign	SpaceAfter=No
24	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	20	punct	20:punct	SpaceAfter=No
25	.	.	PUNCT	interp	PunctType=Peri	15	punct	15:punct	_

~~~


