---
layout: base
title:  'Statistics of advcl:abs in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advcl:abs`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="la_udante-dep-advcl-cmpr.html">advcl:cmpr</a></tt>, <tt><a href="la_udante-dep-advcl-pred.html">advcl:pred</a></tt>.

154 nodes (0%) are attached to their parents as `advcl:abs`.

119 instances of `advcl:abs` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.00649350649351.

The following 6 pairs of parts of speech are connected with `advcl:abs`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (131; 85% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:abs	color:blue
1	Quadrifluum	quadrifluus	ADJ	ans1n	Case=Nom|Compound=Yes|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	6	amod	_	_
2	ne	ne	PART	9	Clitic=Yes|PartType=Int	3	discourse	_	_
3	gravat	grauo	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	coxis	coxa	NOUN	sfp1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	5	nsubj	_	_
5	humentibus	umeo	VERB	va2pppfb	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Fem|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	3	advcl:abs	_	_
6	uber	uber	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	3	nsubj	_	SpaceAfter=No
7	?	?	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advcl:abs	color:blue
1	Hiis	hic	DET	ddipnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	2	nsubj:pass	_	_
2	visis	uideo	VERB	vp2prpnb	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	4	advcl:abs	_	SpaceAfter=No
3	,	,	PUNCT	Pu	_	2	punct	_	_
4	manifestum	manifestus	ADJ	ans1n	Case=Nom|Compound=Yes|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
5	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	quod	quod	SCONJ	cs	PronType=Rel	8	mark	_	_
7	duplex	duplex	ADJ	ans2a	Case=Acc|Compound=Yes|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	8	csubj	_	_
8	oportet	oportet	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	_
9	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf	7	cop	_	_
10	subiectum	subiectum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	7	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	14	punct	_	_
12	circa	circa	ADP	e	AdpType=Prep	13	case	_	_
13	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	14	obl	_	_
14	currant	curro	VERB	va3cpp3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl:relcl	_	_
15	alterni	alternus	ADJ	amp1n	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	16	amod	_	_
16	sensus	sensus	NOUN	smp4n	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Plur|VerbForm=Sup	14	nsubj	_	SpaceAfter=No
17	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 advcl:abs	color:blue
1	Ait	aio	VERB	va5-ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	enim	enim	PART	c	Form=Emp	1	discourse	_	_
3	Poeta	poeta	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing|Proper=Yes	1	nsubj	_	_
4	noster	noster	DET	dsmsn	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	3	det	_	_
5	in	in	ADP	e	AdpType=Prep	6	case	_	_
6	primo	primus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing|NumType=Ord	1	obl	_	SpaceAfter=No
7	:	:	PUNCT	Pu	_	16	punct	_	_
8	Certe	certe	ADV	r	Degree=Pos	16	advmod	_	_
9	hinc	hinc	ADV	r	_	16	obl	_	_
10	Romanos	romanus	ADJ	Smp2a	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	16	amod	_	_
11	olim	olim	ADV	r	_	12	advmod	_	_
12	volventibus	uoluo	VERB	va3pppmb	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	16	advcl:abs	_	_
13	annis	annus	NOUN	smp2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	12	nsubj	_	_
14	hinc	hinc	ADV	r	_	16	advmod	_	_
15	fore	sum	AUX	va5ff	Aspect=Perf|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Fut|VerbForm=Inf	16	cop	_	_
16	ductores	ductor	NOUN	smp3a	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Plur	1	ccomp	_	SpaceAfter=No
17	,	,	PUNCT	Pu	_	20	punct	_	_
18	revocato	reuoco	VERB	vp1prsmb	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	20	acl	_	_
19	a	a	ADP	e	AdpType=Prep	20	case	_	_
20	sanguine	sanguis	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	16	obl	_	_
21	Teucri	teucrus	ADJ	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Sing	20	nmod	_	SpaceAfter=No
22	,	,	PUNCT	Pu	_	23	punct	_	_
23	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	16	acl:relcl	_	_
24	mare	mare	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	23	orphan	_	SpaceAfter=No
25	,	,	PUNCT	Pu	_	30	punct	_	_
26	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	30	nsubj	_	_
27	terras	terra	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	30	obj	_	_
28	omni	omnis	DET	afs2b	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing|PronType=Tot	29	det	_	_
29	ditione	ditio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	30	obl	_	_
30	tenerent	teneo	VERB	va2cip3	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	23	conj	_	SpaceAfter=No
31	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


