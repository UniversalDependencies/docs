---
layout: base
title:  'Statistics of dislocated:obj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:obj`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>.

1 nodes (0%) are attached to their parents as `dislocated:obj`.

1 instances of `dislocated:obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 1 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 dislocated:obj	color:blue
1	Et	et	CCONJ	co	_	13	cc	_	_
2	quod	quod	SCONJ	cs	PronType=Rel	7	mark	_	_
3	tunc	tunc	ADV	r	PronType=Dem	13	advmod	_	_
4	humanum	humanus	ADJ	ans1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	5	amod	_	_
5	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nsubj	_	_
6	fuerit	sum	AUX	va5crs3	Aspect=Perf|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
7	felix	felix	ADJ	ans2n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	13	dislocated:obj	_	_
8	in	in	ADP	e	AdpType=Prep	11	case	_	_
9	pacis	pax	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	11	nmod	_	_
10	universalis	uniuersalis	ADJ	afs2g	Case=Gen|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	9	amod	_	_
11	tranquillitate	tranquillitas	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl	_	_
12	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	13	orphan	_	_
13	ystoriographi	historiographus	NOUN	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	0	root	_	_
14	omnes	omnis	DET	amp2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	13	det	_	SpaceAfter=No
15	,	,	PUNCT	Pu	_	17	punct	_	_
16	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	17	orphan	_	_
17	poete	poeta	NOUN	sms1g	Case=Gen|Gender=Masc|InflClass=IndEurA|Number=Sing	13	conj	_	_
18	illustres	illustris	ADJ	amp2n	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Plur	17	amod	_	SpaceAfter=No
19	,	,	PUNCT	Pu	_	26	punct	_	_
20	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	25	obj	_	_
21	etiam	etiam	PART	co	Compound=Yes	26	discourse	_	_
22	scriba	scriba	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing	26	nsubj	_	_
23	mansuetudinis	mansuetudo	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	22	nmod	_	_
24	Cristi	christus	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Sur|Number=Sing	23	nmod	_	_
25	testari	testor	VERB	vd1fp	Aspect=Imp|InflClass=LatA|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	26	xcomp	_	_
26	dignatus	dignor	VERB	vd1irs3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[noun]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	13	conj	_	_
27	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux:pass	_	SpaceAfter=No
28	;	;	PUNCT	Pu	_	39	punct	_	_
29	et	et	CCONJ	co	_	39	cc	_	_
30	denique	denique	ADV	r	Emphatic=Yes	39	advmod	_	_
31	Paulus	paulus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	39	nsubj	_	_
32	«	«	PUNCT	Pu	_	33	punct	_	SpaceAfter=No
33	plenitudinem	plenitudo	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	39	advcl:pred	_	_
34	temporis	tempus	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	33	nmod	_	SpaceAfter=No
35	»	»	PUNCT	Pu	_	33	punct	_	_
36	statum	status	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Part	39	obj	_	_
37	illum	ille	DET	ddisma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	36	det	_	_
38	felicissimum	felix	ADJ	ams2s	Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	36	amod	_	_
39	appellavit	appello	VERB	va1irs3	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	26	conj	_	SpaceAfter=No
40	.	.	PUNCT	Pu	_	13	punct	_	_

~~~


