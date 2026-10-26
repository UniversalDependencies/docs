---
layout: base
title:  'Statistics of ccomp:cleft in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `ccomp:cleft`

This relation is a language-specific subtype of <tt><a href="pl_mpdt-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="pl_mpdt-dep-ccomp-obj.html">ccomp:obj</a></tt>.

51 nodes (0%) are attached to their parents as `ccomp:cleft`.

51 instances of `ccomp:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2156862745098.

The following 4 pairs of parts of speech are connected with `ccomp:cleft`: <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (45; 88% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt> (4; 8% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp:cleft	color:blue
1	A	a	CCONJ	conj	_	5	cc	5:cc	Translit=A
2	ty	ty	PRON	ppron12:sg:nom:sec	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Translit=ty
3	na	na	ADP	prep:loc	AdpType=Prep	4	case	4:case	Case=Loc|Translit=na
4	tym	to	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	5	obl:arg	5:obl:arg	Translit=tym
5	stoisz	stać	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Translit=stoisz
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	Translit=,
7	aby	aby	SCONJ	comp	_	9	mark	9:mark	Translit=aby
8	ś	być	AUX	aglt:sg:sec:imperf:nwok	Aspect=Imp|Number=Sing|Person=2|Variant=Short	9	aux:clitic	9:aux:clitic	Translit=ś
9	szukał	szukać	VERB	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp:cleft	4:ccomp:cleft	Translit=szukał
10	czego	co	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Int	9	obj	9:obj	Translit=czego
11	innego	inny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	SpaceAfter=No|Translit=innego
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	Translit=.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 16 ccomp:cleft	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc|Translit=W
2	zakładaniu	zakładać	NOUN	ger:sg:loc:n:imperf:aff	Aspect=Imp|Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	6	obl:arg	6:obl:arg	Translit=zakładaniu
3	schodów	schody	NOUN	subst:pl:gen:n:pt	Case=Gen|Gender=Neut|Number=Ptan	2	obj	2:obj	Translit=schodow
4	i	i	PART	part	_	5	advmod:emph	5:advmod:emph	Translit=y
5	to	to	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obj	6:obj	Translit=to
6	uważa	uważać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=uważa
7	Wolff	Wolff	PROPN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	SpaceAfter=No|Translit=Wolff
8	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	Translit=,
9	aby	aby	SCONJ	comp	_	16	mark	16:mark	Translit=áby
10	stopnie	stopień	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	16	nsubj	16:nsubj	Translit=stopnie
11	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Loc|Translit=w
12	nich	on	PRON	ppron3:pl:loc:n:ter:neut:praep	Case=Loc|Gender=Neut|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	16	obl	16:obl	Translit=nich
13	były	być	AUX	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	16:cop	Translit=były
14	nie	nie	PART	part	Polarity=Neg	16	advmod:neg	16:advmod:neg	Translit=nie
15	do	do	ADP	prep:gen	AdpType=Prep	16	case	16:case	Case=Gen|Translit=do
16	pary	para	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	ccomp:cleft	5:ccomp:cleft	SpaceAfter=No|Translit=pary
17	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp:cleft	color:blue
1	Wszakże	wszakże	PART	part	_	2	advmod:emph	2:advmod:emph	Translit=Wszakże
2	dajmy	dać	VERB	impt:pl:pri:perf	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=daymy
3	to	to	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	obj	2:obj	Translit=to
4	na	na	ADP	prep:acc	AdpType=Prep	5	case	5:case	Case=Acc|SpaceAfter=No|Translit=na
5	koniec	koniec	NOUN	subst:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing	2	obl	2:obl	SpaceAfter=No|Translit=koniec
6	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	Translit=,
7	że	że	SCONJ	comp	_	10	mark	10:mark	Translit=że
8	Rosja	Rosja	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	10	nsubj:pass	10:nsubj:pass	Translit=Rossya
9	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux:pass	10:aux:pass	Translit=iest
10	obrażona	obrazić	ADJ	ppas:sg:nom:f:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	ccomp:cleft	3:ccomp:cleft	SpaceAfter=No|Translit=obrażona
11	:	:	PUNCT	interp	PunctType=Colo	15	punct	15:punct	Translit=:
12	kiedy	kiedy	ADV	adv	PronType=Int	15	advmod	15:advmod	Translit=kiedy
13	ż	ż	PART	part:nwok	_	12	advmod:emph	12:advmod:emph	Translit=ż
14	się	się	PRON	part	PronType=Prs|Reflex=Yes	15	expl:pv	15:expl:pv	Translit=się
15	zaczęło	zacząć	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	2:conj	Translit=zaczęło
16	miedzy	miedzy	ADP	prep:inst	AdpType=Prep	18	case	18:case	Case=Ins|Translit=miedzy
17	politycznemi	polityczny	ADJ	adj:pl:inst:m:pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur	18	amod	18:amod	Translit=politycznemi
18	narodami	naród	NOUN	subst:pl:inst:m	Case=Ins|Gender=Masc|Number=Plur	15	obl	15:obl	Translit=narodami
19	owo	ów	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	20	det	20:det	Translit=owo
20	prawo	prawo	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	15	nsubj	15:nsubj	Translit=prawo
21	czynienia	czynić	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	20	nmod:arg	20:nmod:arg	Translit=czynienia
22	samym	sam	ADJ	adj:pl:dat:m:pos	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	23	amod	23:amod	Translit=samym
23	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	21	iobj	21:iobj	Translit=sobie
24	sprawiedliwości	sprawiedliwość	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	21	obj	21:obj	SpaceAfter=No|Translit=sprawiedliwości
25	,	,	PUNCT	interp	PunctType=Comm	27	punct	27:punct	Translit=,
26	a	a	CCONJ	conj	_	27	cc	27:cc	Translit=a
27	sprawiedliwości	sprawiedliwość	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	24	conj	21:obj|24:conj	Translit=sprawiedliwości
28	arbitralnej	arbitralny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	27	amod	27:amod	SpaceAfter=No|Translit=arbitralney
29	,	,	PUNCT	interp	PunctType=Comm	32	punct	32:punct	Translit=,
30	i	i	CCONJ	conj	_	32	cc	32:cc	Translit=i
31	zawsze	zawsze	ADV	adv	PronType=Tot	32	advmod	32:advmod	Translit=zawsze
32	nienawisnej	nienawisny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	28	conj	27:amod|28:conj	SpaceAfter=No|Translit=nienawisney
33	,	,	PUNCT	interp	PunctType=Comm	36	punct	36:punct	Translit=,
34	lubo	lubo	SCONJ	comp	_	36	mark	36:mark	Translit=lubo
35	częstokroć	częstokroć	ADV	advnum	_	36	orphan	36:orphan	Translit=częstokroć
36	autoryzowanej	autoryzować	ADJ	ppas:sg:gen:f:biasp:aff:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	28	advcl	28:advcl|32:advcl	Translit=autoryzowaney
37	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	38	case	38:case	Case=Acc|Translit=przez
38	potrzebę	potrzeba	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	36	orphan	36:orphan	SpaceAfter=No|Translit=potrzebę
39	?	?	PUNCT	interp	PunctType=Qest	2	punct	2:punct	Translit=?

~~~


