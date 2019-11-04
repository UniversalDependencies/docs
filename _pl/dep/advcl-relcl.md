---
layout: relation
title: 'advcl:relcl'
shortdef: 'relative clause modifier of the clause'
udver: '2'
---

The advcl:relcl relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for indicating relative clauses with the relative pronoun _co_ ("what"). The antecedent of the pronoun is the entire superordinate clause.

~~~ conllu
# visual-style 1 8 advcl:relcl color:blue
1	Ćwiczy	ćwiczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	kilka	kilka	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	3	det:numgov	3:det:numgov	_
3	godzin	godzina	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	obl	1:obl	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
5	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Acc
6	co	co	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	8	obl	8:obl	_
7	nie	nie	PART	part	Polarity=Neg	8	advmod:neg	8:advmod:neg	_
8	wyrabia	wyrabiać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl:relcl	1:advcl:relcl	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
11	pracy	praca	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_
~~~

~~~ conllu
1	He	_	_	_	_	_	_	_	_
2	exercises	_	_	_	_	_	_	_	_
3	for	_	_	_	_	_	_	_	_
4	a	_	_	_	_	_	_	_	_
5	few	_	_	_	_	_	_	_	_
6	hours	_	_	_	_	_	_	_	_
7	,	_	_	_	_	_	_	_	_
8	what	_	_	_	_	_	_	_	_
9	causes	_	_	_	_	_	_	_	_
10	him	_	_	_	_	_	_	_	_
11	not	_	_	_	_	_	_	_	_
12	to	_	_	_	_	_	_	_	_
13	keep	_	_	_	_	_	_	_	_
14	up	_	_	_	_	_	_	_	_
15	at	_	_	_	_	_	_	_	_
16	work	_	_	_	_	_	_	_	_
17	.	_	_	_	_	_	_	_	_
~~~

~~~ conllu
# visual-style 5 14 advcl:relcl color:blue
1	Jak	jak	ADV	adv:pos	Degree=Pos|PronType=Int	4	advmod	4:advmod	_
2	więc	więc	SCONJ	comp	_	4	mark	4:mark	_
3	hobbici	hobbit	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
4	mogli	móc	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	używać	używać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	xcomp	4:xcomp	_
6	narzędzi	narzędzie	NOUN	subst:pl:gen:n:ncol	Case=Gen|Gender=Neut|Number=Plur	5	obj	5:obj	_
7	i	i	CCONJ	conj	_	8	cc	8:cc	_
8	posługiwać	posługiwać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	conj	4:xcomp|5:conj	_
9	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
10	ogniem	ogień	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	8	iobj	8:iobj	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
12	czego	co	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	13	nmod	13:nmod	_
13	ślady	ślad	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	obj	14:obj	_
14	odkryto	odkryć	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl:relcl	5:advcl:relcl|8:advcl:relcl	_
15	na	na	ADP	prep:loc	AdpType=Prep	16	case	16:case	Case=Loc
16	wyspie	wyspa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	14	obl	14:obl	_
17	Flores	Flores	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	16	appos	16:appos	SpaceAfter=No
18	?	?	PUNCT	interp	PunctType=Qest	4	punct	4:punct	_
~~~

~~~ conllu
1	So	_	_	_	_	_	_	_	_
2	how	_	_	_	_	_	_	_	_
3	could	_	_	_	_	_	_	_	_
4	the	_	_	_	_	_	_	_	_
5	Hobbits	_	_	_	_	_	_	_	_
6	have	_	_	_	_	_	_	_	_
7	used	_	_	_	_	_	_	_	_
8	tools	_	_	_	_	_	_	_	_
9	and	_	_	_	_	_	_	_	_
10	fire	_	_	_	_	_	_	_	_
11	,	_	_	_	_	_	_	_	_
12	traces	_	_	_	_	_	_	_	_
13	of	_	_	_	_	_	_	_	_
14	which [using tools and fire]	_	_	_	_	_	_	_	_
15	were	_	_	_	_	_	_	_	_
16	found	_	_	_	_	_	_	_	_
17	on	_	_	_	_	_	_	_	_
18	Flores	_	_	_	_	_	_	_	_
19	?	_	_	_	_	_	_	_	_
~~~