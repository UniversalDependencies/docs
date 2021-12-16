---
layout: base
title:  'Statistics of obl:cmpr in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `obl:cmpr`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="la_udante-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_udante-dep-obl-arg.html">obl:arg</a></tt>.

37 nodes (0%) are attached to their parents as `obl:cmpr`.

30 instances of `obl:cmpr` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81081081081081.

The following 11 pairs of parts of speech are connected with `obl:cmpr`: <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (20; 54% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (6; 16% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-NUM.html">NUM</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:cmpr	color:blue
1	Secundo	secundo	ADV	r	Degree=Pos|NumType=Ord|VerbForm=Gdv	2	advmod	_	_
2	demonstrabitur	demonstro	VERB	vp1ifs3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	_
3	terram	terra	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	8	nsubj	_	_
4	hanc	hic	DET	dpfsa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	3	det	_	_
5	emergentem	emergo	VERB	va3ppsfa	Aspect=Imp|Case=Acc|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	acl	_	_
6	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf	8	cop	_	_
7	ubique	ubique	ADV	r	Form=Emp|PronType=Rel	8	advmod	_	_
8	altiorem	altus	ADJ	afs1ac	Case=Acc|Degree=Cmp|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	2	csubj:pass	_	_
9	totali	totalis	ADJ	afs2b	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	10	amod	_	_
10	superficie	superficies	NOUN	sfs5b	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	8	obl:cmpr	_	_
11	maris	mare	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 obl:cmpr	color:blue
1	Itaque	itaque	PART	co	Form=Emp|PronType=Dem	13	discourse	_	_
2	illud	ille	DET	dpnsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	14	nsubj	_	_
3	“	“	PUNCT	Pu	_	4	punct	_	SpaceAfter=No
4	patrocinium	patrocinium	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	14	xcomp:pred	_	SpaceAfter=No
5	”	”	PUNCT	Pu	_	4	punct	_	_
6	orbis	orbis	NOUN	sms3g	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	4	nmod	_	_
7	terrarum	terra	NOUN	sfp1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Plur	6	nmod	_	_
8	potius	potius	ADV	r+	Degree=Cmp	4	advmod	_	_
9	quam	quam	SCONJ	c	ConjType=Cmpr|PronType=Rel	11	mark	_	_
10	“	“	PUNCT	Pu	_	11	punct	_	SpaceAfter=No
11	imperium	imperium	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	4	obl:cmpr	_	SpaceAfter=No
12	”	”	PUNCT	Pu	_	11	punct	_	_
13	poterat	possum	VERB	va5iis3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
14	nominari	nomino	VERB	vp1fp	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	13	csubj:pass	_	SpaceAfter=No
15	»	»	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
16	.	.	PUNCT	Pu	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 29 obl:cmpr	color:blue
1	Et	et	CCONJ	co	_	35	cc	_	_
2	cum	cum	SCONJ	cs	PronType=Rel	6	mark	_	_
3	comparatio	comparatio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	6	nsubj	_	_
4	dignitatum	dignitas	NOUN	sfp3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Plur	3	nmod	_	_
5	non	non	PART	r	Polarity=Neg	6	advmod:neg	_	_
6	fiat	fio	VERB	vs5cps3	Aspect=Imp|InflClass=LatI2|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	35	advcl	_	_
7	circa	circa	ADP	e	AdpType=Prep	9	case	_	_
8	idem	idem	DET	dpnsa	Case=Acc|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	9	det	_	_
9	obiectum	obiectum	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	13	punct	_	_
11	sed	sed	CCONJ	co	_	13	cc	_	_
12	circa	circa	ADP	e	AdpType=Prep	13	case	_	_
13	diversa	diuersus	ADJ	anp1a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	6	conj	_	SpaceAfter=No
14	,	,	PUNCT	Pu	_	17	punct	_	_
15	ut	ut	SCONJ	cs	ConjType=Cmpr	17	mark	_	_
16	dignius	dignus	ADJ	ans1ac	Case=Acc|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	17	xcomp	_	_
17	dicamus	dico	VERB	va3cpp1	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	_
18	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	17	acl:relcl	_	_
19	maioribus	magnus	ADJ	anp2bc	Case=Abl|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Plur	18	orphan	_	SpaceAfter=No
20	,	,	PUNCT	Pu	_	21	punct	_	_
21	dignissimum	dignus	ADJ	ans1as	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	17	conj	_	_
22	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	24	nsubj	_	_
23	maximis	magnus	ADJ	anp1ds	Case=Dat|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	24	obl:arg	_	_
24	dignum	dignus	ADJ	ans1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	21	acl:relcl	_	_
25	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	_
26	(	(	PUNCT	Pu	_	32	punct	_	SpaceAfter=No
27	quia	quia	SCONJ	cs	PronType=Rel	32	mark	_	_
28	nichil	nihil	PRON	dinsnn	Case=Nom|Gender=Neut|InflClass=Ind|Number=Sing|PronType=Neg	32	nsubj	_	_
29	eodem	idem	DET	ddesnb	Case=Abl|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	30	obl:cmpr	_	_
30	dignius	dignus	ADJ	ans1nc	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	32	xcomp	_	_
31	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf	30	cop	_	_
32	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	parataxis	_	SpaceAfter=No
33	)	)	PUNCT	Pu	_	32	punct	_	SpaceAfter=No
34	,	,	PUNCT	Pu	_	6	punct	_	_
35	manifestum	manifestus	ADJ	ans1n	Case=Nom|Compound=Yes|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
36	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	cop	_	_
37	quod	quod	SCONJ	cs	PronType=Rel	43	mark	_	_
38	optima	bonus	ADJ	anp1ns	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	43	nsubj	_	_
39	optimis	bonus	ADJ	anp1ds	Case=Dat|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	43	obl:arg	_	_
40	secundum	secundum	ADP	e	AdpType=Prep|VerbForm=Gdv	42	case	_	_
41	rerum	res	NOUN	sfp5g	Case=Gen|Gender=Fem|InflClass=IndEurE|Number=Plur	42	nmod	_	_
42	exigentiam	exigentia	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	43	obl	_	_
43	digna	dignus	ADJ	anp1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	35	csubj	_	_
44	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	43	cop	_	SpaceAfter=No
45	.	.	PUNCT	Pu	_	35	punct	_	_

~~~


