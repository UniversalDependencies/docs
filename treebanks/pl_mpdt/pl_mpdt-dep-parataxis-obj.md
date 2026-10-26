---
layout: base
title:  'Statistics of parataxis:obj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `parataxis:obj`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="pl_mpdt-dep-parataxis-insert.html">parataxis:insert</a></tt>.

86 nodes (0%) are attached to their parents as `parataxis:obj`.

80 instances of `parataxis:obj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.47674418604651.

The following 19 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (50; 58% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 parataxis:obj	color:blue
1	rzecze	rzec	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=rzecze
2	do	do	ADP	prep:gen	AdpType=Prep	3	case	3:case	Case=Gen|Translit=do
3	nich	on	PRON	ppron3:pl:gen:m:ter:neut:praep	Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	1	obl	1:obl	SpaceAfter=No|Translit=nich
4	;	;	PUNCT	interp	PunctType=Semi	1	punct	1:punct	Translit=;
5	sześć	sześć	NUM	num:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word	9	nummod	9:nummod	Translit=sześć
6	by	by	AUX	part	_	10	aux:cnd	10:aux:cnd	Translit=by
7	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	10	aux:clitic	10:aux:clitic	Translit=m
8	dziś	dziś	ADV	adv	_	10	advmod	10:advmod	Translit=dziś
9	osób	osoba	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	10	obj	10:obj	Translit=osób
10	uczynił	uczynić	VERB	praet:sg:m:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis:obj	1:parataxis:obj	Translit=uczynił
11	szczęśliwych	szczęśliwy	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	10	iobj	10:iobj	SpaceAfter=No|Translit=szczęśliwych
12	!	!	PUNCT	interp	PunctType=Excl	10	punct	10:punct	Translit=!

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis:obj	color:blue
1	Odp	odpowiedź	ADV	brev:pun	Abbr=Yes	0	root	0:root	SpaceAfter=No|Translit=Odp
2	:	:	PUNCT	interp	PunctType=Colo	1	punct	1:punct	Translit=:
3	Żałowała	żałować	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis:obj	1:parataxis:obj	Translit=Załowała
4	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	3	aux:clitic	3:aux:clitic	Translit=m
5	:	:	PUNCT	interp	PunctType=Colo	7	punct	7:punct	Translit=:
6	a	a	CCONJ	conj	_	7	cc	7:cc	Translit=a
7	to	to	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	conj	1:parataxis:obj|3:conj	Translit=to
8	dla	dla	ADP	prep:gen	AdpType=Prep	10	case	10:case	Case=Gen|Translit=dla
9	powszechnego	powszechny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	Translit=powszechnego
10	dobra	dobro	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	7	nmod	7:nmod	SpaceAfter=No|Translit=dobra
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 20 parataxis:obj	color:blue
1	Szołtys	szołtys	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Szołtys
2	:	:	PUNCT	interp	PunctType=Colo	1	punct	1:punct	Translit=:
3	Ponieważ	ponieważ	SCONJ	comp	_	10	mark	10:mark	Translit=Ponieważ
4	zeznanie	zeznanie	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	10:nsubj	Translit=zeznanie
5	jego	on	PRON	ppron3:sg:gen:m:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	4	nmod:poss	4:nmod:poss	Translit=jego
6	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	7	punct	7:punct	SpaceAfter=No|Translit=(
7	jej	on	PRON	ppron3:sg:gen:f:ter:neut:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	5	nmod	5:nmod	SpaceAfter=No|Translit=jej
8	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	7	punct	7:punct	Translit=)
9	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	Translit=jest
10	przekonaniem	przekonanie	NOUN	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing	20	advcl	20:advcl	SpaceAfter=No|Translit=przekonaniem
11	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	Translit=,
12	czym	co	PRON	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing|PronType=Int	15	iobj	15:iobj	Translit=czym
13	tedy	tedy	PART	part	_	20	advmod:emph	20:advmod:emph	Translit=tedy
14	złoczyńca	złoczyńca	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	20	nsubj	20:nsubj	Translit=złoczyńca
15	karany	karać	ADJ	ppas:sg:nom:m:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	20	ccomp	20:ccomp	Translit=karany
16	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	17	punct	17:punct	SpaceAfter=No|Translit=(
17	karana	karać	ADJ	ppas:sg:nom:f:imperf:aff:pos	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	15	xcomp	15:xcomp	SpaceAfter=No|Translit=karana
18	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	17	punct	17:punct	Translit=)
19	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	15	aux:pass	15:aux:pass	Translit=być
20	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis:obj	1:parataxis:obj	SpaceAfter=No|Translit=ma
21	?	?	PUNCT	interp	PunctType=Qest	20	punct	20:punct	Translit=?

~~~


