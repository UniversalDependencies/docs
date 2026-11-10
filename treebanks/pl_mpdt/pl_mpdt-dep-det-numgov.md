---
layout: base
title:  'Statistics of det:numgov in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_mpdt-dep-det-nummod.html">det:nummod</a></tt>, <tt><a href="pl_mpdt-dep-det-poss.html">det:poss</a></tt>.

95 nodes (0%) are attached to their parents as `det:numgov`.

75 instances of `det:numgov` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62105263157895.

The following 4 pairs of parts of speech are connected with `det:numgov`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (87; 92% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (5; 5% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:numgov	color:blue
1	Kilka	kilka	DET	num:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	2	det:numgov	2:det:numgov	Translit=Kilka
2	razy	raz	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	5	obl	5:obl|10:obl	Translit=razy
3	u	u	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen|Translit=u
4	mego	mój	DET	adj:sg:gen:m:pos	Case=Gen|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det:poss	7:det:poss	Translit=mego
5	widział	widzieć	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=widział
6	mię	ja	PRON	ppron12:sg:acc:pri:nakc	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	obj	5:obj	Translit=mię
7	stryja	stryj	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	5	obl	5:obl	SpaceAfter=No|Translit=stryia
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
9	i	i	CCONJ	conj	_	10	cc	10:cc	Translit=i
10	mówił	mówić	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	5:conj	Translit=mowił
11	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	12	case	12:case	Case=Ins|Translit=ze
12	mną	ja	PRON	ppron12:sg:inst:pri	Case=Ins|Number=Sing|Person=1|PronType=Prs	10	obl:arg	10:obl:arg	SpaceAfter=No|Translit=mną
13	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:numgov	color:blue
1	12	12	NUM	dig	NumForm=Digit	8	list	8:list	SpaceAfter=No|Translit=12
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Przetoż	przetoż	SCONJ	comp	_	8	mark	8:mark	Translit=Przetoż
4	wiele	wiele	DET	num:pl:nom:manim2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	5	det:numgov	5:det:numgov	Translit=wiele
5	ich	on	PRON	ppron3:pl:gen:manim1:ter:neut:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	8	nsubj	8:nsubj	Translit=ich
6	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen|Translit=z
7	nich	on	PRON	ppron3:pl:gen:manim1:ter:neut:praep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	5	nmod	5:nmod	Translit=nich
8	uwierzyło	uwierzyć	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=uwierzyło
9	/	/	PUNCT	interp	PunctType=Slsh	12	punct	12:punct	Translit=/
10	i	i	CCONJ	conj	_	12	cc:preconj	12:cc:preconj	Translit=y
11	Greckich	grecki	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	12	amod	12:amod	Translit=Greckich
12	niewiast	niewiasta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	5	nmod	5:nmod	Translit=niewiast
13	uczciwych	uczciwy	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	12	amod	12:amod	SpaceAfter=No|Translit=ucżćiwych
14	/	/	PUNCT	interp	PunctType=Slsh	16	punct	16:punct	Translit=/
15	i	i	CCONJ	conj	_	16	cc	16:cc	Translit=y
16	mężów	mąż	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	12	conj	5:nmod|12:conj	Translit=mężow
17	niemało	niemało	DET	num:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	16	det:numgov	16:det:numgov	SpaceAfter=No|Translit=niemáło
18	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:numgov	color:blue
1	Trawię	trawić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Trawię
2	czas	czas	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	1	obj	1:obj	Translit=czas
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc|Translit=w
4	Kafenhauzie	kafenhauz	NOUN	subst:sg:loc:m	Case=Loc|Gender=Masc|Number=Sing	1	obl	1:obl	Translit=Kafenhauzie
5	gdzie	gdzie	ADV	adv	PronType=Rel	6	advmod	6:advmod	Translit=gdzie
6	widuję	widywać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	Translit=widuię
7	wiele	wiele	DET	num:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	8	det:numgov	8:det:numgov	Translit=wiele
8	Turków	Turek	PROPN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No|Translit=Turków
9	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
10	którzy	który	DET	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	12	nsubj	12:nsubj|16:nsubj	Translit=którzy
11	tytuń	tytuń	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	12	obj	12:obj	Translit=tytuń
12	palą	palić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	8:acl:relcl	Translit=palą
13	i	i	CCONJ	conj	_	16	cc	16:cc	Translit=i
14	nic	nic	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	16	obj	16:obj	Translit=nic
15	nie	nie	PART	part	Polarity=Neg	16	advmod:neg	16:advmod:neg	Translit=nie
16	mówią	mówić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	8:acl:relcl|12:conj	SpaceAfter=No|Translit=mowią
17	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


