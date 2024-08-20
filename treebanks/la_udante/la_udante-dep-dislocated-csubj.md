---
layout: base
title:  'Statistics of dislocated:csubj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:csubj`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_udante-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="la_udante-dep-dislocated-obl.html">dislocated:obl</a></tt>.

11 nodes (0%) are attached to their parents as `dislocated:csubj`.

9 instances of `dislocated:csubj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.4545454545455.

The following 5 pairs of parts of speech are connected with `dislocated:csubj`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (6; 55% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 dislocated:csubj	color:blue
1	Unde	unde	ADV	r	AdvType=Loc|PronType=Rel	4	advmod:lmod	_	_
2	recte	recte	ADV	r	VerbForm=Part	4	advmod	_	_
3	illud	ille	DET	ddisnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	nsubj:pass	_	_
4	scriptum	scribo	VERB	vp3irs3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	:	:	PUNCT	Pu	_	12	punct	_	_
7	«	«	PUNCT	Pu	_	12	punct	_	SpaceAfter=No
8	Romanum	romanus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|NameType=Nat|Number=Sing	9	amod	_	_
9	imperium	imperium	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	12	nsubj	_	_
10	de	de	ADP	e	_	11	case	_	_
11	Fonte	fons	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Sing|Proper=Yes	12	obl:arg	_	_
12	nascitur	nascor	VERB	vd3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	dislocated:csubj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
13	pietatis	pietas	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	11	nmod	_	SpaceAfter=No
14	»	»	PUNCT	Pu	_	12	punct	_	SpaceAfter=No
15	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 dislocated:csubj	color:blue
1	Que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	3	nsubj	_	_
2	si	si	SCONJ	cs	_	3	mark	_	_
3	falsa	falsus	ADJ	anp1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	10	advcl	_	_
4	non	non	PART	r	Polarity=Neg	3	advmod:neg	_	_
5	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	,	,	PUNCT	Pu	_	3	punct	_	_
7	ista	iste	DET	ddisfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	10	nsubj	_	_
8	non	non	PART	r	Polarity=Neg	10	advmod:neg	_	_
9	erit	sum	AUX	va5ifs3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	cop	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
10	falsa	falsus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	0	root	_	SpaceAfter=No
11	:	:	PUNCT	Pu	_	14	punct	_	_
12	“	“	PUNCT	Pu	_	14	punct	_	SpaceAfter=No
13	Deus	deus	NOUN	Sms2	Gender=Masc|InflClass=IndEurO|Number=Sing|Proper=Yes	14	nsubj	_	_
14	vult	uolo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	dislocated:csubj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
15	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	17	obj	_	_
16	non	non	PART	r	Polarity=Neg	17	advmod:neg	_	_
17	vult	uolo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	ccomp:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
18	”	”	PUNCT	Pu	_	14	punct	_	SpaceAfter=No
19	;	;	PUNCT	Pu	_	23	punct	_	_
20	cuius	qui	PRON	presfg	Case=Gen|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	21	nmod	_	_
21	falsitas	falsitas	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	23	nsubj	_	_
22	non	non	PART	r	Polarity=Neg	23	advmod:neg	_	_
23	habet	habeo	VERB	va2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
24	superiorem	superior	ADJ	afs2ac	Case=Acc|Degree=Cmp|Gender=Fem|InflClass=IndEurX|Number=Sing	23	obj	_	SpaceAfter=No
25	.	.	PUNCT	Pu	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 21 dislocated:csubj	color:blue
1	Tertia	tertius	ADJ	aufs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	11	obl	_	_
2	quoque	quoque	PART	r	Form=Emp	11	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Pu	_	5	punct	_	_
4	que	qui	PRON	presfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	5	nsubj	_	_
5	Latinorum	latinus	ADJ	Smp2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	1	acl:relcl	_	_
6	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
7	,	,	PUNCT	Pu	_	5	punct	_	_
8	se	sui	PRON	ppp3sfb	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	11	obj	_	_
9	duobus	duo	NUM	aunpb	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur|NumForm=Word|NumType=Card	10	nummod	_	_
10	privilegiis	priuilegium	NOUN	snp2b	Case=Abl|Compound=Yes|Gender=Neut|InflClass=IndEurO|Number=Plur	12	obl	_	_
11	actestatur	adtestor	VERB	vd1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
12	preesse	praesum	VERB	va5fp	Aspect=Imp|InflClass=LatAnom|VerbForm=Inf|Voice=Act	11	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
13	:	:	PUNCT	Pu	_	14	punct	_	_
14	primo	primo	ADV	r	NumType=Ord	10	conj:expl	_	_
15	quidem	quidem	PART	r	_	14	discourse	_	_
16	quod	quod	SCONJ	cs	PronType=Rel	26	mark	_	_
17	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	21	nsubj	_	_
18	dulcius	dulciter	ADV	r+	Degree=Cmp	21	advmod	_	_
19	subtilius	subtiliter	ADV	r+	Degree=Cmp	18	conj	_	_
20	que	que	CCONJ	co9	_	19	cc	_	_
21	poetati	poetor	VERB	vd1irp3	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	26	dislocated:csubj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
22	vulgariter	uulgariter	ADV	r	_	21	advmod	_	_
23	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	21	aux	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
24	,	,	PUNCT	Pu	_	21	punct	_	_
25	hii	hic	DET	ddipmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	26	nsubj	_	_
26	familiares	familiaris	NOUN	smp3n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur	14	orphan	_	_
27	et	et	CCONJ	co	_	28	cc	_	_
28	domestici	domesticus	ADJ	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	26	conj	_	_
29	sui	suus	DET	dsmpn	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	26	det	_	_
30	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
31	,	,	PUNCT	Pu	_	33	punct	_	_
32	puta	puta	CCONJ	va1mps2	VerbForm=Fin	33	cc	_	_
33	Cynus	cynus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	25	conj:expl	_	_
34	Pistoriensis	pistoriensis	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|NameType=Nat|Number=Sing	33	amod	_	_
35	et	et	CCONJ	co	_	36	cc	_	_
36	amicus	amicus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	33	conj	_	_
37	eius	is	PRON	ddesmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	36	nmod	_	SpaceAfter=No
38	;	;	PUNCT	Pu	_	39	punct	_	_
39	secundo	secundo	ADV	r	NumType=Ord|VerbForm=Part	14	conj	_	_
40	quia	quia	SCONJ	cs	PronType=Rel	42	mark	_	_
41	magis	magis	ADV	rc	Degree=Cmp	43	advmod	_	_
42	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	39	orphan	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
43	initi	innitor	VERB	vd3fp	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Pass	42	csubj:pass	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
44	gramatice	gramatica	NOUN	sfs1d	Case=Dat|Gender=Fem|InflClass=IndEurA|Number=Sing	43	obl:arg	_	_
45	que	qui	PRON	presfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	46	nsubj	_	_
46	comunis	communis	ADJ	afs2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	44	acl:relcl	_	_
47	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	46	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
48	,	,	PUNCT	Pu	_	52	punct	_	_
49	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	52	nsubj:pass	_	_
50	rationabiliter	rationabiliter	ADV	r	_	51	advmod	_	_
51	inspicientibus	inspicio	VERB	va3pppmd	Aspect=Imp|Case=Dat|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	52	obl:arg	_	TraditionalMood=Participium|TraditionalTense=Praesens
52	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	42	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
53	gravissimum	grauis	ADJ	ans2ns	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	54	amod	_	_
54	argumentum	argumentum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	52	xcomp	_	SpaceAfter=No
55	.	.	PUNCT	Pu	_	11	punct	_	_

~~~


