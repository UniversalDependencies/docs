---
layout: base
title:  'Statistics of csubj in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Relations: `csubj`

This relation is universal.

36 nodes (0%) are attached to their parents as `csubj`.

27 instances of `csubj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.41666666666667.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (23; 64% instances), <tt><a href="pl_mpdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (7; 19% instances), <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="pl_mpdt-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pl_mpdt-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="pl_mpdt-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 14 csubj	color:blue
1	Drugi	drugi	ADJ	adjnum:sg:nom:m:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	2	amod	2:amod	Translit=Drugi
2	sposób	sposób	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	18	nsubj:outer	18:nsubj:outer	Translit=sposob
3	wróżenia	wróżyć	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	nmod:arg	2:nmod:arg	Translit=wrożenia
4	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	18:cop	SpaceAfter=No|Translit=był
5	:	:	PUNCT	interp	PunctType=Colo	18	punct	18:punct	Translit=:
6	rzucając	rzucać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	14	advcl	14:advcl	Translit=rzucaiąc
7	do	do	ADP	prep:gen	AdpType=Prep	8	case	8:case	Case=Gen|Translit=do
8	wody	woda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	obl	6:obl	Translit=wody
9	trzy	trzy	NUM	num:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	10	nummod	10:nummod	Translit=trzy
10	kamyczki	kamyczek	NOUN	subst:pl:acc:m	Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No|Translit=kamyczki
11	:	:	PUNCT	interp	PunctType=Colo	6	punct	6:punct	Translit=:
12	gdy	gdy	SCONJ	comp	_	14	mark	14:mark	Translit=gdy
13	się	się	PRON	part	PronType=Prs|Reflex=Yes	14	expl:pv	14:expl:pv	Translit=się
14	kręciły	kręcić	VERB	praet:pl:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	18	csubj	18:csubj	Translit=kręciły
15	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	16	case	16:case	Case=Acc|Translit=w
16	koło	koło	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	14	obl	14:obl	SpaceAfter=No|Translit=koło
17	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	Translit=,
18	znak	znak	NOUN	subst:sg:nom:m	Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	Translit=znak
19	był	być	AUX	praet:sg:m:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	18:cop	Translit=był
20	szczęścia	szczęście	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	18	nmod:arg	18:nmod:arg	SpaceAfter=No|Translit=szczęścia
21	.	.	PUNCT	interp	PunctType=Peri	18	punct	18:punct	Translit=.

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


