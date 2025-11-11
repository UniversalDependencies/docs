---
layout: base
title:  'Statistics of nsubj:outer in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="it_old-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_old-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:outer`.

4 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:outer	color:blue
1	Vedi	vedere	VERB	vta2mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=30|Verso=130|UniqueTokenId=OldItalian_Dante_Paradiso-923_1
2	nostra	nostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	3	det:poss	3:det:poss	Canto=30|Verso=130|UniqueTokenId=OldItalian_Dante_Paradiso-923_2
3	città	città	NOUN	sf3fs	Gender=Fem|Number=Sing	6	nsubj:outer	6:nsubj:outer	Canto=30|Verso=130|UniqueTokenId=OldItalian_Dante_Paradiso-923_3
4	quant'	quanto	ADV	b	_	6	mark	6:mark	Canto=30|Verso=130|UniqueTokenId=OldItalian_Dante_Paradiso-923_4
5	ella	ella	PRON	pp3fslso	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	Canto=30|Verso=130|UniqueTokenId=OldItalian_Dante_Paradiso-923_5
6	gira	girare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	1:ccomp	Canto=30|SpaceAfter=No|Verso=130|UniqueTokenId=OldItalian_Dante_Paradiso-923_6
7	;	;	PUNCT	_	_	8	punct	8:punct	UniqueTokenId=OldItalian_Dante_Paradiso-923_7
8	vedi	vedere	VERB	vta2mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	1:parataxis	Canto=30|Verso=131|UniqueTokenId=OldItalian_Dante_Paradiso-923_8
9	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	11:det	Canto=30|Verso=131|UniqueTokenId=OldItalian_Dante_Paradiso-923_9
10	nostri	nostro	DET	as1mp	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	11	det:poss	11:det:poss	Canto=30|Verso=131|UniqueTokenId=OldItalian_Dante_Paradiso-923_10
11	scanni	scanno	NOUN	sm2mp	Gender=Masc|Number=Plur	8	obj	8:obj	Canto=30|Verso=131|UniqueTokenId=OldItalian_Dante_Paradiso-923_11
12	sì	così	ADV	b	_	13	advmod	13:advmod	Canto=30|Verso=131|UniqueTokenId=OldItalian_Dante_Paradiso-923_12
13	ripieni	ripieno	ADJ	a1mp	Gender=Masc|Number=Plur	8	xcomp	8:xcomp	Canto=30|SpaceAfter=No|Verso=131|UniqueTokenId=OldItalian_Dante_Paradiso-923_13
14	,	,	PUNCT	_	_	21	punct	21:punct	UniqueTokenId=OldItalian_Dante_Paradiso-923_14
15	che	che	SCONJ	cssu	_	21	mark	21:mark	Canto=30|Verso=132|UniqueTokenId=OldItalian_Dante_Paradiso-923_15
16	poca	poco	DET	ai1fs	Gender=Fem|Number=Sing|PronType=Ind	17	det	17:det	Canto=30|Verso=132|UniqueTokenId=OldItalian_Dante_Paradiso-923_16
17	gente	gente	NOUN	sf3fs	Gender=Fem|Number=Sing	21	obj	21:obj	Canto=30|Verso=132|UniqueTokenId=OldItalian_Dante_Paradiso-923_17
18	più	più	ADV	b	_	17	advmod	17:advmod	Canto=30|Verso=132|UniqueTokenId=OldItalian_Dante_Paradiso-923_18
19	ci	ci	ADV	bx	_	21	advmod:lmod	21:advmod:lmod	Canto=30|Clitic=Yes|Verso=132|UniqueTokenId=OldItalian_Dante_Paradiso-923_19
20	si	si	PRON	pf3ypa	Person=3|PronType=Prs|Reflex=Yes	21	expl	21:expl	Canto=30|Clitic=Yes|Verso=132|UniqueTokenId=OldItalian_Dante_Paradiso-923_20
21	disira	desiderare	VERB	vtp1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	advcl	13:advcl	Canto=30|SpaceAfter=No|Verso=132|UniqueTokenId=OldItalian_Dante_Paradiso-923_21
22	.	.	PUNCT	_	_	1	punct	1:punct	UniqueTokenId=OldItalian_Dante_Paradiso-923_22

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 54 38 nsubj:outer	color:blue
1	«	«	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-598_1
2	La	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_2
3	parte	parte	NOUN	sf3fs	Gender=Fem|Number=Sing	26	nsubj	26:nsubj	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_3
4	in	in	ADP	epsksl	_	5	case	5:case	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_4
5	me	me	PRON	pp1slco	Person=1|Poss=Yes|PronType=Prs	3	nmod	3:nmod	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_5
6	che	che	PRON	pr	PronType=Rel	7	nsubj	7:nsubj	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_6
7	vede	vedere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_7
8	e	e	CCONJ	cscc	_	9	cc	9:cc	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_8
9	pate	patire	VERB	vta3ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	7:conj	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_9
10	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_10
11	sole	sole	NOUN	sm3ms	Gender=Masc|Number=Sing	7	obj	7:obj	Canto=20|Verso=31|UniqueTokenId=OldItalian_Dante_Paradiso-598_11
12	ne	in	ADP	epaksl	_	14	case	14:case	Canto=20|Verso=32|UniqueTokenId=OldItalian_Dante_Paradiso-598_12
13	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	14:det	Canto=20|Verso=32|UniqueTokenId=OldItalian_Dante_Paradiso-598_13
14	aguglie	aguglia	NOUN	sf1fp	Gender=Fem|Number=Plur	7	obl:lmod	7:obl:lmod	Canto=20|Verso=32|UniqueTokenId=OldItalian_Dante_Paradiso-598_14
15	mortali	mortale	ADJ	a2fp	Gender=Fem|Number=Plur	14	amod	14:amod	Canto=20|SpaceAfter=No|Verso=32|UniqueTokenId=OldItalian_Dante_Paradiso-598_15
16	»	»	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-598_16
17	,	,	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Paradiso-598_17
18	incominciare	incominciare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	UniqueTokenId=OldItalian_Dante_Paradiso-598_18
19	mi	mi	PRON	pp1sxda	Person=1|Poss=Yes|PronType=Prs	18	iobj	18:iobj	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-598_19
20	,	,	PUNCT	_	_	26	punct	26:punct	UniqueTokenId=OldItalian_Dante_Paradiso-598_20
21	«	«	PUNCT	_	_	26	punct	26:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-598_21
22	or	ora	ADV	b	_	26	advmod:tmod	26:advmod:tmod	Canto=20|Verso=33|UniqueTokenId=OldItalian_Dante_Paradiso-598_22
23	fisamente	fissamente	ADV	b	_	24	advmod	24:advmod	Canto=20|Verso=33|UniqueTokenId=OldItalian_Dante_Paradiso-598_23
24	riguardar	riguardare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	26	xcomp	26:xcomp	Canto=20|Verso=33|UniqueTokenId=OldItalian_Dante_Paradiso-598_24
25	si	si	PRON	pf3ypa	Person=3|PronType=Prs|Reflex=Yes	26	expl:impers	26:expl:impers	Canto=20|Clitic=Yes|Verso=33|UniqueTokenId=OldItalian_Dante_Paradiso-598_25
26	vole	volere	VERB	vta*2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	ccomp:reported	18:ccomp:reported	Canto=20|SpaceAfter=No|Verso=33|UniqueTokenId=OldItalian_Dante_Paradiso-598_26
27	,	,	PUNCT	_	_	54	punct	54:punct	UniqueTokenId=OldItalian_Dante_Paradiso-598_27
28	perché	perché	SCONJ	ccsc	_	54	mark	54:mark	Canto=20|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-598_28
29	d'	di	ADP	eps	_	31	case	31:case	Canto=20|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-598_29
30	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	31	det	31:det	Canto=20|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-598_30
31	fuochi	fuoco	NOUN	sm2mp	Gender=Masc|Number=Plur	38	nmod	38:nmod	Canto=20|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-598_31
32	ond'	onde	PRON	pr	PronType=Rel	35	obl:lmod	35:obl:lmod	Canto=20|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-598_32
33	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	35	nsubj	35:nsubj	Canto=20|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-598_33
34	figura	figura	NOUN	sf1fs	Gender=Fem|Number=Sing	35	obj	35:obj	Canto=20|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-598_34
35	fare	fare	VERB	vta+1ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	31	acl:relcl	31:acl:relcl	UniqueTokenId=OldItalian_Dante_Paradiso-598_35
36	mi	mi	PRON	pf3xle	Person=3|PronType=Prs|Reflex=Yes	35	iobj	35:iobj	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-598_36
37	,	,	PUNCT	_	_	31	punct	31:punct	UniqueTokenId=OldItalian_Dante_Paradiso-598_37
38	quelli	quello	PRON	pd1mp	Gender=Masc|Number=Plur|PronType=Dem	54	nsubj:outer	54:nsubj:outer	Canto=20|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_38
39	onde	onde	PRON	p	_	45	obl:lmod	45:obl:lmod	Canto=20|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_39
40	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	41	det	41:det	Canto=20|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_40
41	occhio	occhio	NOUN	sm2ms	Gender=Masc|Number=Sing	45	nsubj	45:nsubj	Canto=20|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_41
42	in	in	ADP	epsksl	_	43	case	43:case	Canto=20|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_42
43	testa	testa	NOUN	sf1fs	Gender=Fem|Number=Sing	45	obl:lmod	45:obl:lmod	Canto=20|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_43
44	mi	mi	PRON	pp1syda	Person=1|Poss=Yes|PronType=Prs	45	iobj	45:iobj	Canto=20|Clitic=Yes|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_44
45	scintilla	scintillare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	38	acl:relcl	38:acl:relcl	Canto=20|SpaceAfter=No|Verso=35|UniqueTokenId=OldItalian_Dante_Paradiso-598_45
46	,	,	PUNCT	_	_	38	punct	38:punct	UniqueTokenId=OldItalian_Dante_Paradiso-598_46
47	e'	egli	PRON	pp3mplso	Gender=Masc|Number=Plur|Person=3|PronType=Prs	54	nsubj	54:nsubj	Canto=20|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_47
48	di	di	ADP	epsk8	_	51	case	51:case	Canto=20|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_48
49	tutti	tutto	DET	ai1mp	Gender=Masc|Number=Plur|PronType=Ind	51	det	51:det	Canto=20|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_49
50	lor	loro	DET	as	Poss=Yes|PronType=Prs	51	det:poss	51:det:poss	Canto=20|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_50
51	gradi	grado	NOUN	sm2mp	Gender=Masc|Number=Plur	54	obl	54:obl	Canto=20|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_51
52	son	essere	AUX	vi4ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	54	cop	54:cop	Canto=20|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_52
53	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	54	det	54:det	Canto=20|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_53
54	sommi	sommo	ADJ	a1mp	Gender=Masc|Number=Plur	26	advcl	26:advcl	Canto=20|SpaceAfter=No|Verso=36|UniqueTokenId=OldItalian_Dante_Paradiso-598_54
55	.	.	PUNCT	_	_	54	punct	54:punct	UniqueTokenId=OldItalian_Dante_Paradiso-598_55

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 nsubj:outer	color:blue
1	Ma	ma	CCONJ	csca	_	2	cc	2:cc	Canto=3|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-83_1
2	dire	dire	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	UniqueTokenId=OldItalian_Dante_Paradiso-83_2
3	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	iobj	2:iobj	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-83_3
4	:	:	PUNCT	_	_	11	punct	11:punct	UniqueTokenId=OldItalian_Dante_Paradiso-83_4
5	voi	voi	PRON	pp2plso	Number=Plur|Person=2|PronType=Prs	11	nsubj:outer	11:nsubj:outer	Canto=3|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-83_5
6	che	che	PRON	pr	PronType=Rel	9	nsubj	9:nsubj	Canto=3|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-83_6
7	siete	essere	AUX	vi4ipp2	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	cop	9:cop	Canto=3|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-83_7
8	qui	qui	ADV	b	_	9	advmod:lmod	9:advmod:lmod	Canto=3|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-83_8
9	felici	felice	ADJ	a2mp	Gender=Masc|Number=Plur	5	acl:relcl	5:acl:relcl	Canto=3|SpaceAfter=No|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-83_9
10	,	,	PUNCT	_	_	5	punct	5:punct	UniqueTokenId=OldItalian_Dante_Paradiso-83_10
11	disiderate	desiderare	VERB	vta1ipp2	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp:reported	2:ccomp:reported	Canto=3|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-83_11
12	voi	voi	PRON	pp2plso	Number=Plur|Person=2|PronType=Prs	11	nsubj	11:nsubj	Canto=3|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-83_12
13	più	più	ADV	b	_	14	advmod	14:advmod	Canto=3|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-83_13
14	alto	alto	ADJ	a1msc+	Degree=Cmp|Gender=Masc|Number=Sing	15	amod	15:amod	Canto=3|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-83_14
15	loco	luogo	NOUN	sm2ms	Gender=Masc|Number=Sing	11	obj	11:obj	Canto=3|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-83_15
16	per	per	ADP	epsf	_	18	mark	18:mark	Canto=3|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-83_16
17	più	più	ADV	b	_	18	advmod	18:advmod	Canto=3|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-83_17
18	vedere	vedere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	11	advcl	11:advcl	Canto=3|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-83_18
19	e	e	CCONJ	cscc	_	22	cc	22:cc	Canto=3|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-83_19
20	per	per	ADP	epsf	_	22	mark	22:mark	Canto=3|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-83_20
21	più	più	ADV	b	_	22	advmod	22:advmod	Canto=3|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-83_21
22	fare	fare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	18	conj	18:conj	UniqueTokenId=OldItalian_Dante_Paradiso-83_22
23	vi	vi	PRON	pp2pxac	Number=Plur|Person=2|PronType=Prs	22	iobj	22:iobj	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-83_23
24	amici	amico	ADJ	a1mpc+	Degree=Cmp|Gender=Masc|Number=Plur	22	obj	22:obj	Canto=3|SpaceAfter=No|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-83_24
25	?	?	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-83_25
26	»	»	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-83_26
27	.	.	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Paradiso-83_27

~~~


