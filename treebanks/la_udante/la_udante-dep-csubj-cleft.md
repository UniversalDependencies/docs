---
layout: base
title:  'Statistics of csubj:cleft in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `csubj:cleft`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-csubj.html">csubj</a></tt>.
There are also 4 other language-specific subtypes of `csubj`: <tt><a href="la_udante-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="la_udante-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_udante-dep-csubj-relcl.html">csubj:relcl</a></tt>, <tt><a href="la_udante-dep-csubj-reported.html">csubj:reported</a></tt>.

12 nodes (0%) are attached to their parents as `csubj:cleft`.

12 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75.

The following 4 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (6; 50% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (3; 25% instances), <tt><a href="la_udante-pos-NUM.html">NUM</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj:cleft	color:blue
1	Hunc	hic	DET	dpmsa	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	2	det	_	_
2	gradum	gradus	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	5	obj	_	_
3	constructionis	constructio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	2	nmod	_	_
4	excellentissimum	excellens	ADJ	ams2as	Case=Acc|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	5	xcomp	_	_
5	nominamus	nomino	VERB	va1ipp1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	,	,	PUNCT	Pu	_	8	punct	_	_
7	et	et	CCONJ	co	_	8	cc	_	_
8	hic	hic	DET	ddismn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	5	conj	_	_
9	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	quem	qui	PRON	presma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	11	obj	_	_
11	querimus	quaero	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	csubj:cleft	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
12	cum	cum	SCONJ	cs	PronType=Rel	14	mark	_	_
13	suprema	superior	ADJ	anp2as	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	14	obj	_	_
14	venemur	uenor	VERB	vd1cpp1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	8	advcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
15	,	,	PUNCT	Pu	_	17	punct	_	_
16	ut	ut	SCONJ	r	PronType=Rel	17	mark	_	_
17	dictum	dico	VERB	vp3irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	5	advcl:cmp	_	TraditionalMood=Participium|TraditionalTense=Perfectum
18	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
19	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj:cleft	color:blue
1	Nichil	nihil	PRON	dinsnn	Polarity=Neg|PronType=Ind	0	root	_	_
2	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	nsubj	_	_
4	dare	do	VERB	va1fp	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Act	5	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
5	possit	possum	VERB	va5cps3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj:cleft	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
6	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	8	obj	_	_
7	non	non	PART	r	Polarity=Neg	8	advmod:neg	_	_
8	habet	habeo	VERB	va2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	;	;	PUNCT	Pu	_	17	punct	_	_
10	unde	unde	ADV	r	AdvType=Loc|PronType=Rel	17	advmod:lmod	_	_
11	omne	omnis	DET	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|PronType=Tot	12	det	_	_
12	agens	agens	VERB	va3ppsmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	16	nsubj	_	TraditionalMood=Participium|TraditionalTense=Praesens
13	aliquid	aliquis	PRON	dinsna	Case=Acc|Compound=Yes|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	14	obj	_	_
14	actu	actus	NOUN	sms4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Inf	16	obl	_	_
15	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|VerbForm=Inf	16	cop	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	tale	talis	DET	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|PronType=Dem	17	csubj:pass	_	_
17	oportet	oportet	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
18	quale	qualis	DET	presnn	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|PronType=Rel	19	det	_	_
19	agere	ago	VERB	va3fp	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	20	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
20	intendit	intendo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
21	,	,	PUNCT	Pu	_	23	punct	_	_
22	ut	ut	SCONJ	r	PronType=Rel	23	mark	_	_
23	habetur	habeo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	17	advcl:cmp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
24	in	in	ADP	e	_	25	case	_	_
25	hiis	hic	DET	ddipnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	23	obl	_	_
26	que	qui	PRON	9	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	29	nsubj	_	_
27	De	de	ADP	e	Proper=Yes	29	case	_	_
28	simpliciter	simpliciter	ADV	r	_	29	advmod	_	_
29	ente	ens	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Sing|VerbForm=Part	25	acl:relcl	_	SpaceAfter=No
30	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj:cleft	color:blue
1	Sex	sex	NUM	yui	NumForm=Word|NumType=Card	0	root	_	_
2	igitur	igitur	PART	r	_	1	discourse	_	_
3	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	10	nsubj:pass	_	_
5	in	in	ADP	e	_	6	case	_	_
6	principio	principium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	10	obl	_	_
7	cuiusque	quisque	DET	dinsng	Case=Gen|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	9	det	_	_
8	doctrinalis	doctrinalis	ADJ	ans2g	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Sing	9	amod	_	_
9	operis	opus	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	6	nmod	_	_
10	inquirenda	inquiro	VERB	vp3gvpnn	Aspect=Prosp|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	1	csubj:cleft	_	TraditionalMood=Gerundivum
11	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	,	,	PUNCT	Pu	_	14	punct	_	_
13	videlicet	uidelicet	CCONJ	r	Compound=Yes|VerbForm=Fin	14	cc	_	_
14	subiectum	subiectum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	1	conj:expl	_	SpaceAfter=No
15	,	,	PUNCT	Pu	_	16	punct	_	_
16	agens	agens	VERB	va3ppsmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	14	conj	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
17	,	,	PUNCT	Pu	_	18	punct	_	_
18	forma	forma	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	14	conj	_	SpaceAfter=No
19	,	,	PUNCT	Pu	_	20	punct	_	_
20	finis	finis	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	14	conj	_	SpaceAfter=No
21	,	,	PUNCT	Pu	_	23	punct	_	_
22	libri	liber	NOUN	sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	23	nmod	_	_
23	titulus	titulus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	14	conj	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	26	punct	_	_
25	et	et	CCONJ	co	_	26	cc	_	_
26	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	14	conj	_	_
27	phylosophie	philosophia	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	26	nmod	_	SpaceAfter=No
28	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


