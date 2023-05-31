---
layout: base
title:  'Statistics of obl:tmod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_udante-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_udante-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_udante-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_udante-dep-obl-lmod.html">obl:lmod</a></tt>.

15 nodes (0%) are attached to their parents as `obl:tmod`.

10 instances of `obl:tmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.4.

The following 5 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (8; 53% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (3; 20% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:tmod	color:blue
1	Scriptum	scribo	VERB	vp3prsnn	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
2	pridie	pridie	ADP	e	Compound=Yes	3	case	_	_
3	Kalendas	kalendae	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Cal|Number=Plur|VerbForm=Part	1	obl:tmod	_	_
4	Apriles	aprilis	ADJ	afp2a	Case=Acc|Gender=Fem|InflClass=IndEurI|NameType=Cal|Number=Plur	3	amod	_	_
5	in	in	ADP	e	_	6	case	_	_
6	finibus	fines	NOUN	smp3b	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Plur	1	obl	_	_
7	Tuscie	tuscia	PROPN	Sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	6	nmod	_	_
8	sub	sub	ADP	e	_	9	case	_	_
9	fontem	fons	NOUN	sms3a	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Sing	1	obl	_	_
10	Sarni	sarnus	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	18	punct	_	_
12	faustissimi	faustus	ADJ	ams1gs	Case=Gen|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	13	amod	_	_
13	cursus	cursus	NOUN	sms4g	Case=Gen|Gender=Masc|InflClass=IndEurU|Number=Sing	18	nmod	_	_
14	Henrici	henricus	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	13	nmod	_	_
15	Cesaris	caesar	PROPN	Sms3g	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	14	flat	_	_
16	ad	ad	ADP	e	_	17	case	_	_
17	Ytaliam	italia	PROPN	Sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	13	nmod	_	_
18	anno	annus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	1	obl	_	_
19	primo	primus	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing|NumType=Ord	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 21 obl:tmod	color:blue
1	Satis	satis	ADV	r	_	3	advmod	_	_
2	igitur	igitur	PART	r	_	3	discourse	_	_
3	declaratum	declaro	VERB	vp1irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
4	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	quod	quod	SCONJ	cs	PronType=Rel	13	mark	_	_
6	proprium	proprius	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	7	amod	_	_
7	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	13	nsubj:outer	_	_
8	humani	humanus	ADJ	ans1g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	9	amod	_	_
9	generis	genus	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nmod	_	_
10	totaliter	totaliter	ADV	r	_	11	advmod	_	_
11	accepti	accipio	VERB	vp3prsng	Aspect=Perf|Case=Gen|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	9	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
12	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
13	actuare	actuo	VERB	va1fp	Aspect=Imp|VerbForm=Inf|Voice=Act	3	csubj:pass	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
14	semper	semper	ADV	r	AdvType=Tim	13	advmod:tmod	_	_
15	totam	totus	DET	dpfsa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Tot	16	det	_	_
16	potentiam	potentia	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	13	obj	_	_
17	intellectus	intellectus	NOUN	sms4g	Case=Gen|Gender=Masc|InflClass=IndEurU|Number=Sing	16	nmod	_	_
18	possibilis	possibilis	ADJ	ams2n	Case=Gen|Gender=Masc|InflClass=IndEurI|Number=Sing	17	amod	_	SpaceAfter=No
19	,	,	PUNCT	Pu	_	13	punct	_	_
20	per	per	ADP	e	_	21	case	_	_
21	prius	prior	DET	ans2ac	Case=Acc|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	13	obl:tmod	_	_
22	ad	ad	ADP	e	_	23	mark	_	_
23	speculandum	speculor	VERB	vd1fga	Aspect=Prosp|Case=Acc|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	13	advcl	_	TraditionalMood=Gerundium
24	et	et	CCONJ	co	_	27	cc	_	_
25	secundario	secundario	ADV	r	_	27	orphan	_	_
26	propter	propter	ADP	e	_	27	case	_	_
27	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	13	conj	_	_
28	ad	ad	ADP	e	_	29	mark	_	_
29	operandum	operor	VERB	vd1fga	Aspect=Prosp|Case=Acc|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	27	orphan	_	TraditionalMood=Gerundium
30	per	per	ADP	e	_	32	case	_	_
31	suam	suus	DET	dsfsa	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	32	det	_	_
32	extensionem	extensio	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	29	obl	_	SpaceAfter=No
33	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 obl:tmod	color:blue
1	Ante	ante	ADP	e	_	3	case	_	_
2	quidem	quidem	PART	r	_	8	discourse	_	_
3	Ecclesiam	ecclesia	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Com|Number=Sing|Proper=Yes	8	obl	_	_
4	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	vetus	uetus	ADJ	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	8	amod	_	_
6	et	et	CCONJ	co	_	7	cc	_	_
7	novum	nouus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	5	conj	_	_
8	Testamentum	testamentum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|NameType=Lit|Number=Sing|Proper=Yes	0	root	_	SpaceAfter=No
9	,	,	PUNCT	Pu	_	14	punct	_	_
10	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	14	nsubj:pass	_	_
11	«	«	PUNCT	Pu	_	14	punct	_	SpaceAfter=No
12	in	in	ADP	e	_	13	case	_	_
13	ecternum	aeternus	ADJ	ans1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	14	obl:tmod	_	_
14	mandatum	mando	VERB	vp1irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	8	acl:relcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
15	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
16	»	»	PUNCT	Pu	_	14	punct	_	_
17	ut	ut	SCONJ	r	PronType=Rel	18	mark	_	_
18	ait	aio	VERB	va5-ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	advcl:cmp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
19	Propheta	propheta	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing|Proper=Yes	18	nsubj	_	SpaceAfter=No
20	;	;	PUNCT	Pu	_	21	punct	_	_
21	hoc	hic	DET	ddisnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	8	conj	_	_
22	enim	enim	PART	c	Form=Emp	21	discourse	_	_
23	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
24	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	25	obj	_	_
25	dicit	dico	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	csubj:cleft	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
26	Ecclesia	ecclesia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|NameType=Com|Number=Sing|Proper=Yes	25	nsubj	_	_
27	loquens	loquor	VERB	vd3ppsfn	Aspect=Imp|Case=Nom|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	25	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Praesens
28	ad	ad	ADP	e	_	29	case	_	_
29	sponsum	sponsus	NOUN	sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing|VerbForm=Part	27	obl	_	SpaceAfter=No
30	:	:	PUNCT	Pu	_	32	punct	_	_
31	«	«	PUNCT	Pu	_	32	punct	_	SpaceAfter=No
32	Trahe	traho	VERB	va3mps2	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	21	dislocated:obj	_	TraditionalMood=Imperativus|TraditionalTense=Praesens
33	me	ego	PRON	ppp1sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	32	obj	_	_
34	post	post	ADP	e	_	35	case	_	_
35	te	tu	PRON	ppp2sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	32	obl:arg	_	SpaceAfter=No
36	»	»	PUNCT	Pu	_	32	punct	_	SpaceAfter=No
37	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


