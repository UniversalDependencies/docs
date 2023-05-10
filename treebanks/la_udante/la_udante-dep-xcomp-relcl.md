---
layout: base
title:  'Statistics of xcomp:relcl in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `xcomp:relcl`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-xcomp.html">xcomp</a></tt>.

1 nodes (0%) are attached to their parents as `xcomp:relcl`.

1 instances of `xcomp:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `xcomp:relcl`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 xcomp:relcl	color:blue
1	Nec	nec	CCONJ	co	Polarity=Neg	3	cc	_	_
2	adimitanda	adimitor	VERB	vd1gvpna	Aspect=Prosp|Case=Acc|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	3	obj	_	TraditionalMood=Gerundivum
3	recenseo	recenseo	VERB	va2ips1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	-	-	PUNCT	Pu	_	5	punct	_	_
5	cum	cum	SCONJ	cs	PronType=Rel	14	mark	_	_
6	dorsa	dorsum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	14	obj	_	SpaceAfter=No
7	,	,	PUNCT	Pu	_	9	punct	_	_
8	non	non	PART	r	Polarity=Neg	9	advmod:neg	_	_
9	vultus	uultus	NOUN	smp4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Plur	6	conj	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	6	punct	_	_
11	ad	ad	ADP	e	_	13	case	_	_
12	Sponse	sponsa	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing|Proper=Yes|VerbForm=Part	13	nmod	_	_
13	vehiculum	uehiculum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	14	obl	_	_
14	habeatis	habeo	VERB	va2cpp2	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
15	,	,	PUNCT	Pu	_	19	punct	_	_
16	et	et	CCONJ	co	_	19	cc	_	_
17	vere	uere	ADV	r	_	19	advmod	_	_
18	dici	dico	VERB	vp3fp	Aspect=Imp|VerbForm=Inf|Voice=Pass	19	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
19	possetis	possum	VERB	va5cip2	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	14	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
20	,	,	PUNCT	Pu	_	23	punct	_	_
21	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	23	nsubj:pass	_	_
22	Prophete	propheta	NOUN	smp1n	Case=Dat|Gender=Masc|InflClass=IndEurA|Number=Plur|Proper=Yes	23	obl:arg	_	_
23	ostensi	ostendo	VERB	vp3irp3	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	18	xcomp:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
24	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	23	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
25	,	,	PUNCT	Pu	_	27	punct	_	_
26	male	male	ADV	r	_	27	advmod	_	_
27	versi	uerto	VERB	vp3prpmn	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	23	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Perfectum
28	ad	ad	ADP	e	_	29	case	_	_
29	templum	templum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	27	obl:arg	_	_
30	-	-	PUNCT	Pu	_	31	punct	_	_
31	vobis	tu	PRON	ppp2pmb	Case=Abl|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	3	obl	_	_
32	ignem	ignis	NOUN	sms3a	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Sing	36	obj	_	_
33	de	de	ADP	e	_	34	case	_	_
34	celo	caelum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	35	obl:arg	_	_
35	missum	mitto	VERB	vp3prsma	Aspect=Perf|Case=Acc|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	32	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
36	despicientibus	despicio	VERB	va3pppmd	Aspect=Imp|Case=Dat|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	31	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
37	,	,	PUNCT	Pu	_	43	punct	_	_
38	ubi	ubi	SCONJ	cs	AdvType=Loc|PronType=Rel	43	mark	_	_
39	nunc	nunc	ADV	r	AdvType=Tim	43	advmod:tmod	_	_
40	are	ara	NOUN	sfp1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Plur	43	nsubj	_	_
41	ab	ab	ADP	e	_	42	case	_	_
42	alieno	alienus	ADJ	ans1b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	43	obl	_	_
43	calescunt	calesco	VERB	va3ipp3	Aspect=Inch|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	36	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
44	;	;	PUNCT	Pu	_	45	punct	_	_
45	vobis	tu	PRON	ppp2pmb	Case=Abl|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	3	obl	_	_
46	columbas	columba	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	49	obj	_	_
47	in	in	ADP	e	_	48	case	_	_
48	templo	templum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	49	obl	_	_
49	vendentibus	uendo	VERB	va3pppmd	Aspect=Imp|Case=Dat|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	45	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
50	,	,	PUNCT	Pu	_	51	punct	_	_
51	ubi	ubi	SCONJ	r	AdvType=Loc|PronType=Rel	64	mark	_	_
52	que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	56	nsubj	_	_
53	pretio	pretium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	54	obl	_	_
54	mensurari	mensuro	VERB	vp1fp	Aspect=Imp|VerbForm=Inf|Voice=Pass	56	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
55	non	non	PART	r	Polarity=Neg	56	advmod:neg	_	_
56	possunt	possum	VERB	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	64	csubj:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
57	,	,	PUNCT	Pu	_	56	punct	_	_
58	in	in	ADP	e	_	59	case	_	_
59	detrimentum	detrimentum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	64	obl	_	_
60	hinc	hinc	ADV	r	AdvType=Loc|Case=Loc|PronType=Dem	64	advmod:lmod	_	_
61	inde	inde	ADV	r	_	64	advmod	_	_
62	commutantium	commuto	VERB	va1pppmg	Aspect=Imp|Case=Gen|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	59	nmod	_	TraditionalMood=Participium|TraditionalTense=Praesens
63	venalia	uenalis	ADJ	anp2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	64	advcl:pred	_	_
64	facta	facio	VERB	vp3irp3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	48	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
65	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	64	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
66	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


