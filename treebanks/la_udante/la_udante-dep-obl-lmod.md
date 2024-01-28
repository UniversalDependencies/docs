---
layout: base
title:  'Statistics of obl:lmod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_udante-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_udante-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_udante-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_udante-dep-obl-tmod.html">obl:tmod</a></tt>.

62 nodes (0%) are attached to their parents as `obl:lmod`.

40 instances of `obl:lmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.03225806451613.

The following 12 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (31; 50% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (12; 19% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (5; 8% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (4; 6% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:lmod	color:blue
1	Propter	propter	ADP	e	_	2	case	_	_
2	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	4	obl	_	_
3	proverbialiter	prouerbialiter	ADV	r	_	4	advmod	_	_
4	dicitur	dico	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	illa	ille	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	6	det	_	_
6	maledictio	maledictio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	4	nsubj:pass	_	SpaceAfter=No
7	:	:	PUNCT	Pu	_	10	punct	_	_
8	«	«	PUNCT	Pu	_	10	punct	_	SpaceAfter=No
9	Parem	par	ADJ	ams2a	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Sing	10	obj	_	_
10	habeas	habeo	VERB	va2cps2	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj:expl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	in	in	ADP	e	_	12	case	_	_
12	domo	domus	NOUN	sfs4b	Case=Abl|Gender=Fem|InflClass=IndEurU|Number=Sing	10	obl:lmod	_	SpaceAfter=No
13	»	»	PUNCT	Pu	_	10	punct	_	SpaceAfter=No
14	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:lmod	color:blue
1	Prima	primus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	2	amod	_	_
2	divisio	diuisio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj:outer	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	,	,	PUNCT	Pu	_	3	punct	_	_
5	qua	qui	PRON	presfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	8	obl:lmod	_	_
6	totum	totus	DET	dpnsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Tot	7	det	_	_
7	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	8	nsubj:pass	_	_
8	dividitur	diuido	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	in	in	ADP	e	_	11	case	_	_
10	tres	tres	NUM	aufpa	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	_
11	canticas	cantica	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 21 obl:lmod	color:blue
1	Non	non	PART	r	Polarity=Neg	4	advmod:neg	_	_
2	ne	ne	PART	r	PartType=Int	4	discourse	_	_
3	triumphales	triumphalis	ADJ	amp2a	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Plur	5	advcl:pred	_	_
4	melius	bene	ADV	r+	Degree=Cmp	0	root	_	_
5	pexare	pexo	VERB	va1fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	4	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
6	capillos	capillus	NOUN	smp2a	Case=Acc|Degree=Dim|Gender=Masc|InflClass=IndEurO|Number=Plur	5	obj	_	_
7	et	et	CCONJ	co	_	14	cc	_	_
8	patrio	patrius	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	21	amod	_	SpaceAfter=No
9	,	,	PUNCT	Pu	_	8	punct	_	_
10	redeam	redeo	VERB	va5cps1	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	si	si	SCONJ	cs	_	10	mark	_	_
12	quando	quando	ADV	r	AdvType=Tim|PronType=Rel	10	advmod:tmod	_	SpaceAfter=No
13	,	,	PUNCT	Pu	_	10	punct	_	_
14	abscondere	abscondo	VERB	va3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	5	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
15	canos	canus	ADJ	amp1a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	14	advcl:pred	_	_
16	fronde	frons	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	14	obl	_	_
17	sub	sub	ADP	e	_	16	case	_	_
18	inserta	insero	VERB	vp3prsmb	Aspect=Perf|Case=Abl|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	16	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
19	solitum	soleo	VERB	ams1a	Aspect=Perf|Case=Acc|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	14	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Perfectum
20	flavescere	flauesco	VERB	va3fp	Aspect=Inch|Tense=Pres|VerbForm=Inf|Voice=Act	19	xcomp	_	TraditionalMood=Infinitivus
21	Sarno	sarnus	PROPN	Sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	10	obl:lmod	_	SpaceAfter=No
22	?	?	PUNCT	Pu	_	4	punct	_	SpaceAfter=No
23	»	»	PUNCT	Pu	_	4	punct	_	SpaceAfter=No
24	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


