---
layout: base
title:  'Statistics of nummod in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="pl_mpdt-dep-nummod-flat.html">nummod:flat</a></tt>.

227 nodes (0%) are attached to their parents as `nummod`.

190 instances of `nummod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36123348017621.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (216; 95% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 nummod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nummod	color:blue
1	Piechota	piechota	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	10	nsubj:pass	10:nsubj:pass	Translit=Piechotá
2	zaś	zaś	CCONJ	conj	_	10	cc	10:cc	SpaceAfter=No|Translit=záś
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
4	której	który	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|PronType=Rel	5	nsubj	5:nsubj	Translit=ktorey
5	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	acl:relcl	1:acl:relcl	Translit=było
6	ośm	ośm	NUM	num:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	4	nummod	4:nummod	Translit=ośm
7	tysięcy	tysiąc	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	6	flat	6:flat	SpaceAfter=No|Translit=tyśięcy
8	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
9	wszytka	wszytek	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	amod	1:amod	Translit=wszytká
10	wycięta	wyciąć	ADJ	ppas:sg:nom:f:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No|Translit=wyćięta
11	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Dwadzieścia	dwadzieścia	NUM	num:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	2	nummod	2:nummod	Translit=Dwádźieśćiá
2	Moskwicinów	Moskwicin	PROPN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	Translit=Moskwićinow
3	uszło	ujść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=vszło
4	było	być	AUX	plusq:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	3:aux	Translit=było
5	teraz	teraz	ADV	adv	_	3	advmod	3:advmod	Translit=teráz
6	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen|Translit=do
7	nas	my	PRON	ppron12:pl:gen:pri	Case=Gen|Number=Plur|Person=1|PronType=Prs	3	obl	3:obl	Translit=nas
8	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Gen|Translit=z
9	Kaługi	Kaługa	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No|Translit=Káługi
10	/	/	PUNCT	interp	PunctType=Slsh	14	punct	14:punct	Translit=/
11	ale	ale	CCONJ	conj	_	14	cc	14:cc	Translit=ále
12	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Loc|Translit=w
13	pogoni	pogoń	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	14	obl	14:obl	Translit=pogoni
14	pobito	pobić	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	3:conj	Translit=pobito
15	je	on	PRON	ppron3:pl:acc:m:ter:neut:npraep	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	14	obj	14:obj	SpaceAfter=No|Translit=ie
16	/	/	PUNCT	interp	PunctType=Slsh	20	punct	20:punct	Translit=/
17	tylko	tylko	PART	part	_	18	advmod:emph	18:advmod:emph	Translit=tylko
18	czterej	cztery	NUM	num:pl:nom:manim1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	19	nummod	19:nummod	Translit=czterey
19	Bojarów	bojar	NOUN	subst:pl:gen:m	Case=Gen|Gender=Masc|Number=Plur	20	nsubj	20:nsubj	Translit=Boiárow
20	przyjechało	przyjechać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	14	conj	3:conj|14:conj	SpaceAfter=No|Translit=przyiecháło
21	:	:	PUNCT	interp	PunctType=Colo	23	punct	23:punct	Translit=:
22	ci	ten	DET	adj:pl:nom:manim1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	23	nsubj	23:nsubj	Translit=ći
23	powiadają	powiadać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	conj	3:conj|14:conj|20:conj	SpaceAfter=No|Translit=powiadáią
24	/	/	PUNCT	interp	PunctType=Slsh	31	punct	31:punct	Translit=/
25	że	że	SCONJ	comp	_	31	mark	31:mark	Translit=że
26	się	się	PRON	part	PronType=Prs|Reflex=Yes	31	expl:pv	31:expl:pv	Translit=sie
27	Moskwa	Moskwa	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	31	nsubj	31:nsubj	Translit=Moskwá
28	jeszcze	jeszcze	PART	part	_	31	advmod:emph	31:advmod:emph	Translit=iescze
29	o	o	ADP	prep:acc	AdpType=Prep	30	case	30:case	Case=Acc|Translit=o
30	Cara	car	NOUN	subst:sg:acc:manim2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Sing	31	obl:arg	31:obl:arg	Translit=Cárá
31	wadzi	wadzić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	23	ccomp	23:ccomp	SpaceAfter=No|Translit=wádżi
32	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


