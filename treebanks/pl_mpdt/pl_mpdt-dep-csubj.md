---
layout: base
title:  'Statistics of csubj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `csubj`

This relation is universal.

33 nodes (0%) are attached to their parents as `csubj`.

26 instances of `csubj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.6969696969697.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (21; 64% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (6; 18% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj	color:blue
1	134	134	NUM	dig	NumForm=Digit	5	list	5:list	SpaceAfter=No|Translit=134
2	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	Translit=.
3	Czemu	czemu	ADV	adv	PronType=Int	5	advmod	5:advmod	Translit=Czemu
4	złą	zły	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	Translit=złą
5	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=ma
6	cerę	cera	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	iobj	5:iobj	Translit=cerę
7	kto	kto	PRON	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	10	nsubj	10:nsubj	Translit=kto
8	jęczmiennego	jęczmienny	ADJ	adj:sg:gen:m:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	Translit=ięczmiennego
9	chleba	chleb	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	10	obj	10:obj	Translit=chleba
10	pożywa	pożywać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	5:csubj	SpaceAfter=No|Translit=pożywá
11	?	?	PUNCT	interp	PunctType=Qest	5	punct	5:punct	Translit=?

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 csubj	color:blue
1	Czyli	czyli	PART	part	_	6	advmod:emph	6:advmod:emph	Translit=Czyli
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	Translit=to
3	bowiem	bowiem	SCONJ	comp	_	6	mark	6:mark	Translit=bowiem
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	Translit=nie
5	jawna	jawny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	Translit=iawna
6	rzecz	rzecz	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=rzecz
7	,	,	PUNCT	interp	PunctType=Comm	16	punct	16:punct	Translit=,
8	że	że	SCONJ	comp	_	16	mark	16:mark	Translit=że
9	założone	założyć	ADJ	ppas:pl:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	12	acl	12:acl	Translit=założone
10	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Gen|Translit=od
11	nich	on	PRON	ppron3:pl:gen:m:ter:neut:praep	Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Short	9	obl:agent	9:obl:agent	Translit=nich
12	Konwikty	konwikt	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	16	nsubj	16:nsubj	Translit=Konwikty
13	więcej	więcej	DET	num:sg:acc:m	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	17	det	17:det|20:det	Translit=więcey
14	im	on	PRON	ppron3:pl:dat:m:ter:neut:npraep	Case=Dat|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	16	iobj	16:iobj	Translit=im
15	nierównie	nierównie	ADV	adv:pos	Degree=Pos	16	advmod	16:advmod	Translit=nierownie
16	przynoszą	przynosić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj	6:csubj	Translit=przynoszą
17	zysku	zysk	NOUN	subst:sg:gen:m	Case=Gen|Gender=Masc|Number=Sing	16	obl	16:obl	SpaceAfter=No|Translit=zysku
18	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	Translit=,
19	i	i	CCONJ	conj	_	20	cc	20:cc	Translit=y
20	intraty	intrata	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	17	conj	16:obl|17:conj	SpaceAfter=No|Translit=intraty
21	,	,	PUNCT	interp	PunctType=Comm	32	punct	32:punct	Translit=,
22	niżeli	niżeli	SCONJ	comp	ConjType=Comp	32	mark	32:mark	Translit=niżeli
23	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	27	case	27:case	Case=Loc|Translit=w
24	stałych	stały	ADJ	adj:pl:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur	27	amod	27:amod	Translit=stałych
25	i	i	CCONJ	conj	_	26	cc	26:cc	Translit=y
26	nieruchomych	nieruchomy	ADJ	adj:pl:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur	24	conj	24:conj|27:amod	Translit=nie ruchomych
27	dobrach	dobra	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	32	nmod	32:nmod	Translit=dobrach
28	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	29	case	29:case	Case=Acc|Translit=przez
29	Konstytucje	konstytucja	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	30	obl:agent	30:obl:agent	Translit=Konstytucye
30	pozwolone	pozwolić	ADJ	ppas:pl:nom:m:perf:aff:pos	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	32	acl	32:acl	Translit=pozwolone
31	im	on	PRON	ppron3:pl:dat:m:ter:neut:npraep	Case=Dat|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	30	iobj	30:iobj	Translit=im
32	Fundusze	fundusz	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	13	obl:cmp	13:obl:cmp	SpaceAfter=No|Translit=Fundusze
33	?	?	PUNCT	interp	PunctType=Qest	6	punct	6:punct	Translit=?

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	Ale	ale	CCONJ	conj	_	3	cc	3:cc	Translit=Ale
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	3	cop	3:cop	Translit=to
3	najgorsza	zły	ADJ	adj:sg:nom:f:sup	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|Translit=najgorsza
4	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	Translit=,
5	że	że	SCONJ	comp	_	9	mark	9:mark	Translit=że
6	nigdy	nigdy	ADV	adv	PronType=Neg	9	advmod	9:advmod	Translit=nigdy
7	Wć	wć	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj	Translit=Wć
8	nie	nie	PART	part	Polarity=Neg	9	advmod:neg	9:advmod:neg	Translit=nie
9	piszecie	pisać	VERB	fin:pl:sec:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	3:csubj	SpaceAfter=No|Translit=piszecie
10	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	Translit=,
11	które	który	DET	adj:pl:nom:m:pos	Case=Nom|Gender=Masc|Number=Plur|PronType=Int	13	det	13:det	Translit=które
12	dojdą	dojść	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	ccomp:obj	9:ccomp:obj	Translit=dojdą
13	listy	list	NOUN	subst:pl:nom:m	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	12:nsubj	Translit=listy
14	i	i	CCONJ	conj	_	17	cc	17:cc	Translit=i
15	na	na	ADP	prep:acc	AdpType=Prep	16	case	16:case	Case=Acc|Translit=na
16	które	który	DET	adj:pl:acc:m:pos	Case=Acc|Gender=Masc|Number=Plur|PronType=Int	17	obl:arg	17:obl:arg	Translit=które
17	odpisujecie	odpisywać	VERB	fin:pl:sec:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	9:ccomp:obj|12:conj	SpaceAfter=No|Translit=odpisujecie
18	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	Translit=.

~~~


