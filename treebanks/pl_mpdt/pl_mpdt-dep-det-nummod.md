---
layout: base
title:  'Statistics of det:nummod in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_mpdt-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_mpdt-dep-det-poss.html">det:poss</a></tt>.

67 nodes (0%) are attached to their parents as `det:nummod`.

57 instances of `det:nummod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62686567164179.

The following 3 pairs of parts of speech are connected with `det:nummod`: <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (61; 91% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (4; 6% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Aza	aza	PART	part	_	4	advmod	4:advmod	Translit=Azas
2	ż	ż	PART	part:nwok	_	1	advmod:emph	1:advmod:emph	Translit=z
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	SpaceAfter=No|Translit=nie
4	masz	mieć	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=masz
5	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	7	advmod	7:advmod	Translit=ták
6	wiele	wiele	DET	num:pl:gen:n	Case=Gen|Gender=Neut|Number=Plur|PronType=Ind	7	det:nummod	7:det:nummod	Translit=wiele
7	świąt	święto	NOUN	subst:pl:gen:n	Case=Gen|Gender=Neut|Number=Plur	4	iobj	4:iobj	Translit=świąt
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc|Translit=w
9	Miesiącu	miesiąc	NOUN	subst:sg:loc:m	Case=Loc|Gender=Masc|Number=Sing	4	obl	4:obl	SpaceAfter=No|Translit=Miesiącu
10	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	Translit=,
11	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	13	advmod	13:advmod	Translit=ták
12	wiele	wiele	DET	num:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur|PronType=Ind	13	det:nummod	13:det:nummod	Translit=wiele
13	Niedziel	niedziela	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	7	conj	4:iobj|7:conj	SpaceAfter=No|Translit=Niedźiel
14	?	?	PUNCT	interp	PunctType=Qest	4	punct	4:punct	Translit=?

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 det:nummod	color:blue
1	Marsowi	Mars	PROPN	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=Marsowi
2	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	Translit=,
3	Wenerze	Wenera	PROPN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	1	conj	1:conj	SpaceAfter=No|Translit=Wenerze
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	Translit=,
5	Bachusowi	Bachus	PROPN	subst:sg:dat:m	Case=Dat|Gender=Masc|Number=Sing	1	conj	1:conj	SpaceAfter=No|Translit=Bacchusowi
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	Translit=,
7	i	i	CCONJ	conj	_	8	cc	8:cc	Translit=y
8	inszym	inszy	ADJ	adj:pl:dat:m:pos	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	1	conj	1:conj	Translit=inszym
9	wielu	wiele	DET	num:pl:dat:m	Case=Dat|Gender=Masc|Number=Plur|PronType=Ind	8	det:nummod	8:det:nummod	SpaceAfter=No|Translit=wielu
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 det:nummod	color:blue
1	Jeżeli	jeżeli	SCONJ	comp	_	5	dep	5:dep	Translit=Ieżeli
2	Król	król	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	Translit=Krol
3	JMość	jmość	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	2	appos	2:appos	Translit=IMość
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	ufa	ufać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=ufa
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	Translit=,
7	a	a	PART	part	_	5	conj	5:conj	Translit=á
8	czegoż	cóż	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	10	iobj	10:iobj	Translit=czegoż
9	więcej	więcej	DET	num:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Ind	8	det:nummod	8:det:nummod	Translit=więcey
10	potrzebuje	potrzebować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	5:conj	SpaceAfter=No|Translit=potrzebuie
11	,	,	PUNCT	interp	PunctType=Comm	18	punct	18:punct	Translit=,
12	kiedy	kiedy	SCONJ	comp	_	18	mark	18:mark|21:mark	Translit=kiedy
13	się	się	PRON	part	PronType=Prs|Reflex=Yes	18	expl:pv	18:expl:pv|21:expl:pv	Translit=się
14	nieprzyjaciel	nieprzyjaciel	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	18:nsubj|21:nsubj	Translit=nieprzyiaćiel
15	sam	sam	ADJ	adj:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	18	obl	18:obl|21:obl	Translit=sam
16	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	17	case	17:case	Case=Gen|Translit=z
17	broni	broń	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	18	obl:arg	18:obl:arg	Translit=broni
18	wyzuwa	wyzuwać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	10:advcl	SpaceAfter=No|Translit=wyzuwa
19	,	,	PUNCT	interp	PunctType=Comm	21	punct	21:punct	Translit=,
20	i	i	CCONJ	conj	_	21	cc	21:cc	Translit=y
21	ofiaruje	ofiarować	VERB	fin:sg:ter:biasp	Aspect=Imp,Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	conj	10:advcl|18:conj	SpaceAfter=No|Translit=ofiáruie
22	,	,	PUNCT	interp	PunctType=Comm	24	punct	24:punct	Translit=,
23	jako	jako	ADP	prep:nom	AdpType=Prep	24	case	24:case	Case=Nom|Translit=iáko
24	Przyjaciel	przyjaciel	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	28	obl:cmp	28:obl:cmp	Translit=Przyiaćiel
25	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	26	case	26:case	Case=Ins|Translit=z
26	nim	on	PRON	ppron3:sg:inst:m:ter:neut:npraep	Case=Ins|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	28	obl	28:obl	Translit=nim
27	się	się	PRON	part	PronType=Prs|Reflex=Yes	28	expl:pv	28:expl:pv	Translit=się
28	obłapić	obłapić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	21	xcomp	21:xcomp	SpaceAfter=No|Translit=obłápić
29	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


