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
1	Vedi	vedere	VERB	vta2mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=30|Verso=130
2	nostra	nostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	3	det:poss	_	Canto=30|Verso=130
3	città	città	NOUN	sf3fs	Gender=Fem|Number=Sing	6	nsubj:outer	_	Canto=30|Verso=130
4	quant'	quanto	ADV	b	_	6	mark	_	Canto=30|Verso=130
5	ella	ella	PRON	pp3fslso	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	Canto=30|Verso=130
6	gira	girare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	Canto=30|Verso=130|SpaceAfter=No
7	;	;	PUNCT	_	_	8	punct	_	_
8	vedi	vedere	VERB	vta2mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	Canto=30|Verso=131
9	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	Canto=30|Verso=131
10	nostri	nostro	DET	as1mp	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	11	det:poss	_	Canto=30|Verso=131
11	scanni	scanno	NOUN	sm2mp	Gender=Masc|Number=Plur	8	obj	_	Canto=30|Verso=131
12	sì	così	ADV	b	_	13	advmod	_	Canto=30|Verso=131
13	ripieni	ripieno	ADJ	a1mp	Gender=Masc|Number=Plur	8	xcomp	_	Canto=30|Verso=131|SpaceAfter=No
14	,	,	PUNCT	_	_	21	punct	_	_
15	che	che	SCONJ	cssu	_	21	mark	_	Canto=30|Verso=132
16	poca	poco	DET	ai1fs	Gender=Fem|Number=Sing|PronType=Ind	17	det	_	Canto=30|Verso=132
17	gente	gente	NOUN	sf3fs	Gender=Fem|Number=Sing	21	obj	_	Canto=30|Verso=132
18	più	più	ADV	b	_	17	advmod	_	Canto=30|Verso=132
19	ci	ci	ADV	bx	Clitic=Yes	21	advmod:lmod	_	Canto=30|Verso=132
20	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	21	expl	_	Canto=30|Verso=132
21	disira	desiderare	VERB	vtp1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	advcl	_	Canto=30|Verso=132|SpaceAfter=No
22	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 54 38 nsubj:outer	color:blue
1	«	«	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	La	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	Canto=20|Verso=31
3	parte	parte	NOUN	sf3fs	Gender=Fem|Number=Sing	26	nsubj	_	Canto=20|Verso=31
4	in	in	ADP	epsksl	_	5	case	_	Canto=20|Verso=31
5	me	me	PRON	pp1slco	Person=1|Poss=Yes|PronType=Prs	3	nmod	_	Canto=20|Verso=31
6	che	che	PRON	pr	PronType=Rel	7	nsubj	_	Canto=20|Verso=31
7	vede	vedere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	Canto=20|Verso=31
8	e	e	CCONJ	cscc	_	9	cc	_	Canto=20|Verso=31
9	pate	patire	VERB	vta3ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	Canto=20|Verso=31
10	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	Canto=20|Verso=31
11	sole	sole	NOUN	sm3ms	Gender=Masc|Number=Sing	7	obj	_	Canto=20|Verso=31
12	ne	in	ADP	epaksl	_	14	case	_	Canto=20|Verso=32
13	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	Canto=20|Verso=32
14	aguglie	aguglia	NOUN	sf1fp	Gender=Fem|Number=Plur	7	obl:lmod	_	Canto=20|Verso=32
15	mortali	mortale	ADJ	a2fp	Gender=Fem|Number=Plur	14	amod	_	Canto=20|Verso=32|SpaceAfter=No
16	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
17	,	,	PUNCT	_	_	3	punct	_	_
18	incominciare	incominciare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
19	mi	mi	PRON	pp1sxda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	18	iobj	_	_
20	,	,	PUNCT	_	_	26	punct	_	_
21	«	«	PUNCT	_	_	26	punct	_	SpaceAfter=No
22	or	ora	ADV	b	_	26	advmod:tmod	_	Canto=20|Verso=33
23	fisamente	fissamente	ADV	b	_	24	advmod	_	Canto=20|Verso=33
24	riguardar	riguardare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	26	xcomp	_	Canto=20|Verso=33
25	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	26	expl:impers	_	Canto=20|Verso=33
26	vole	volere	VERB	vta*2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	ccomp:reported	_	Canto=20|Verso=33|SpaceAfter=No
27	,	,	PUNCT	_	_	54	punct	_	_
28	perché	perché	SCONJ	ccsc	_	54	mark	_	Canto=20|Verso=34
29	d'	di	ADP	eps	_	31	case	_	Canto=20|Verso=34
30	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	31	det	_	Canto=20|Verso=34
31	fuochi	fuoco	NOUN	sm2mp	Gender=Masc|Number=Plur	38	nmod	_	Canto=20|Verso=34
32	ond'	onde	PRON	pr	PronType=Rel	35	obl:lmod	_	Canto=20|Verso=34
33	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	35	nsubj	_	Canto=20|Verso=34
34	figura	figura	NOUN	sf1fs	Gender=Fem|Number=Sing	35	obj	_	Canto=20|Verso=34
35	fare	fare	VERB	vta+1ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	31	acl:relcl	_	_
36	mi	mi	PRON	pf3xle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	35	iobj	_	_
37	,	,	PUNCT	_	_	31	punct	_	_
38	quelli	quello	PRON	pd1mp	Gender=Masc|Number=Plur|PronType=Dem	54	nsubj:outer	_	Canto=20|Verso=35
39	onde	onde	PRON	p	_	45	obl:lmod	_	Canto=20|Verso=35
40	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	41	det	_	Canto=20|Verso=35
41	occhio	occhio	NOUN	sm2ms	Gender=Masc|Number=Sing	45	nsubj	_	Canto=20|Verso=35
42	in	in	ADP	epsksl	_	43	case	_	Canto=20|Verso=35
43	testa	testa	NOUN	sf1fs	Gender=Fem|Number=Sing	45	obl:lmod	_	Canto=20|Verso=35
44	mi	mi	PRON	pp1syda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	45	iobj	_	Canto=20|Verso=35
45	scintilla	scintillare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	38	acl:relcl	_	Canto=20|Verso=35|SpaceAfter=No
46	,	,	PUNCT	_	_	38	punct	_	_
47	e'	egli	PRON	pp3mplso	Gender=Masc|Number=Plur|Person=3|PronType=Prs	54	nsubj	_	Canto=20|Verso=36
48	di	di	ADP	epsk8	_	51	case	_	Canto=20|Verso=36
49	tutti	tutto	DET	ai1mp	Gender=Masc|Number=Plur|PronType=Ind	51	det	_	Canto=20|Verso=36
50	lor	loro	DET	as	Poss=Yes|PronType=Prs	51	det:poss	_	Canto=20|Verso=36
51	gradi	grado	NOUN	sm2mp	Gender=Masc|Number=Plur	54	obl	_	Canto=20|Verso=36
52	son	essere	AUX	vi4ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	54	cop	_	Canto=20|Verso=36
53	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	54	det	_	Canto=20|Verso=36
54	sommi	sommo	ADJ	a1mp	Gender=Masc|Number=Plur	26	advcl	_	Canto=20|Verso=36|SpaceAfter=No
55	.	.	PUNCT	_	_	54	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 nsubj:outer	color:blue
1	Ma	ma	CCONJ	csca	_	2	cc	_	Canto=3|Verso=64
2	dire	dire	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	mi	mi	PRON	_	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	_
4	:	:	PUNCT	_	_	11	punct	_	_
5	voi	voi	PRON	pp2plso	Number=Plur|Person=2|PronType=Prs	11	nsubj:outer	_	Canto=3|Verso=64
6	che	che	PRON	pr	PronType=Rel	9	nsubj	_	Canto=3|Verso=64
7	siete	essere	AUX	vi4ipp2	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	Canto=3|Verso=64
8	qui	qui	ADV	b	_	9	advmod:lmod	_	Canto=3|Verso=64
9	felici	felice	ADJ	a2mp	Gender=Masc|Number=Plur	5	acl:relcl	_	Canto=3|Verso=64|SpaceAfter=No
10	,	,	PUNCT	_	_	5	punct	_	_
11	disiderate	desiderare	VERB	vta1ipp2	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp:reported	_	Canto=3|Verso=65
12	voi	voi	PRON	pp2plso	Number=Plur|Person=2|PronType=Prs	11	nsubj	_	Canto=3|Verso=65
13	più	più	ADV	b	_	14	advmod	_	Canto=3|Verso=65
14	alto	alto	ADJ	a1msc+	Degree=Cmp|Gender=Masc|Number=Sing	15	amod	_	Canto=3|Verso=65
15	loco	luogo	NOUN	sm2ms	Gender=Masc|Number=Sing	11	obj	_	Canto=3|Verso=65
16	per	per	ADP	epsf	_	18	mark	_	Canto=3|Verso=66
17	più	più	ADV	b	_	18	advmod	_	Canto=3|Verso=66
18	vedere	vedere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	11	advcl	_	Canto=3|Verso=66
19	e	e	CCONJ	cscc	_	22	cc	_	Canto=3|Verso=66
20	per	per	ADP	epsf	_	22	mark	_	Canto=3|Verso=66
21	più	più	ADV	b	_	22	advmod	_	Canto=3|Verso=66
22	fare	fare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	18	conj	_	_
23	vi	vi	PRON	pp2pxac	Clitic=Yes|Number=Plur|Person=2|PronType=Prs	22	iobj	_	_
24	amici	amico	ADJ	a1mpc+	Degree=Cmp|Gender=Masc|Number=Plur	22	obj	_	Canto=3|Verso=66|SpaceAfter=No
25	?	?	PUNCT	_	_	11	punct	_	SpaceAfter=No
26	»	»	PUNCT	_	_	11	punct	_	SpaceAfter=No
27	.	.	PUNCT	_	_	2	punct	_	_

~~~


