---
layout: base
title:  'Statistics of expl:pv in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `expl:pv`

This relation is a language-specific subtype of .

808 nodes (2%) are attached to their parents as `expl:pv`.

409 instances of `expl:pv` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.73514851485149.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (760; 94% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (25; 3% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (23; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Atoli	atoli	CCONJ	conj	_	5	cc	5:cc	Translit=Atoli
2	wprawdzie	wprawdzie	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=w prawdzie
3	mówić	mówić	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	5:xcomp	Translit=mowić
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	Translit=się
5	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=może
6	iż	iż	SCONJ	comp	_	8	mark	8:mark	Translit=iż
7	tu	tu	ADV	adv	PronType=Dem	8	advmod	8:advmod	Translit=tu
8	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:obj	3:ccomp:obj	SpaceAfter=No|Translit=iest
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	Translit=,
10	gdzie	gdzie	ADV	adv	PronType=Rel	11	advmod	11:advmod	Translit=gdzie
11	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	SpaceAfter=No|Translit=iest
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
1	Uważano	uważać	VERB	imps:imperf	Aspect=Imp|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=Uważano
2	przy	przy	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc|SpaceAfter=No|Translit=przy
3	tym	to	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	1	obl	1:obl	Translit=tym
4	ruszanie	ruszać	NOUN	ger:sg:acc:n:imperf:aff	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	1	obj	1:obj	Translit=ruszanie
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	Translit=się
6	wody	woda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obl:agent	4:obl:agent	SpaceAfter=No|Translit=wody
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
8	bąbele	bąbel	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	4	conj	1:obj|4:conj	SpaceAfter=No|Translit=bąbele
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
10	kolor	kolor	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	4	conj	1:obj|4:conj	SpaceAfter=No|Translit=kolor
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 expl:pv	color:blue
1	Coś	coś	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	0	root	0:root	Translit=Coś
2	niby	niby	PART	part	_	3	advmod:emph	3:advmod:emph	Translit=niby
3	głupiego	głupi	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	1	amod	1:amod	SpaceAfter=No|Translit=głupiego
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
5	mędrek	mędrek	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	1	conj	1:conj	SpaceAfter=No|Translit=mędrek
6	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
7	a	a	CCONJ	conj	_	10	cc	10:cc	Translit=a
8	dziecinnemi	dziecinny	ADJ	adj:pl:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	9	amod	9:amod	Translit=dziecinnemi
9	fraszkami	fraszka	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	10	iobj	10:iobj	Translit=fraszkami
10	bawiący	bawić	ADJ	pact:sg:nom:m:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	5	conj	1:conj|5:conj	Translit=bawiący
11	się	się	PRON	part	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	SpaceAfter=No|Translit=się
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


