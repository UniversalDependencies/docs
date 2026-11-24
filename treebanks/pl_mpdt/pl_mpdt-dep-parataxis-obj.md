---
layout: base
title:  'Statistics of parataxis:obj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `parataxis:obj`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="pl_mpdt-dep-parataxis-insert.html">parataxis:insert</a></tt>.

108 nodes (0%) are attached to their parents as `parataxis:obj`.

100 instances of `parataxis:obj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.51851851851852.

The following 21 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (55; 51% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (10; 9% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


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
5	sześć	sześć	NUM	num:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word	9	nummod:gov	9:nummod:gov	Translit=sześć
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
1	Odp	odpowiedź	NOUN	brev:pun	Abbr=Yes	0	root	0:root	SpaceAfter=No|Translit=Odp
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 parataxis:obj	color:blue
1	ledwie	ledwie	ADV	adv	_	3	advmod	3:advmod	Translit=ledwie
2	przestrogę	przestroga	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	Translit=przestrogę
3	skończy	skończyć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=skończy
4	/	/	PUNCT	interp	PunctType=Slsh	9	punct	9:punct	Translit=/
5	aż	aż	SCONJ	comp	_	9	mark	9:mark	Translit=áż
6	ci	ci	PART	part	_	9	advmod:emph	9:advmod:emph	Translit=ci
7	już	już	PART	part	_	9	advmod:emph	9:advmod:emph	Translit=iuż
8	Dworzanie	dworzanin	NOUN	subst:pl:nom:manim1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj	Translit=Dworzánie
9	pytają	pytać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	SpaceAfter=No|Translit=pytáią
10	:	:	PUNCT	interp	PunctType=Colo	9	punct	9:punct	Translit=:
11	A	a	CCONJ	conj	_	13	cc	13:cc	Translit=A
12	nasz	nasz	DET	adj:sg:nom:m:pos	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	13	det:poss	13:det:poss	Translit=nász
13	Pan	pan	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	9	parataxis:obj	9:parataxis:obj	Translit=Pan
14	kędy	kędy	ADV	adv	_	13	advmod	13:advmod	SpaceAfter=No|Translit=kędy
15	?	?	PUNCT	interp	PunctType=Qest	13	punct	13:punct	Translit=?

~~~


