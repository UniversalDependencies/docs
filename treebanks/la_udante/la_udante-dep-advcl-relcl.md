---
layout: base
title:  'Statistics of advcl:relcl in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_udante-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_udante-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_udante-dep-advcl-pred.html">advcl:pred</a></tt>.

46 nodes (0%) are attached to their parents as `advcl:relcl`.

27 instances of `advcl:relcl` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.39130434782609.

The following 7 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (37; 80% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 18 advcl:relcl	color:blue
1	Sed	sed	CCONJ	co	_	8	cc	_	_
2	cum	cum	SCONJ	cs	PronType=Rel	5	mark	_	_
3	sint	sum	AUX	va5cpp3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	plures	multus	DET	amp1nc	Case=Nom|Degree=Cmp|Gender=Masc|InflClass=IndEurI|Number=Plur|NumType=Card|PronType=Ind	5	det	_	_
5	celi	caelus	NOUN	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	8	advcl	_	SpaceAfter=No
6	,	,	PUNCT	Pu	_	5	punct	_	_
7	adhuc	adhuc	ADV	r	AdvType=Tim|Compound=Yes	8	advmod:tmod	_	_
8	restat	resto	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	inquirere	inquiro	VERB	va3fp	Aspect=Imp|VerbForm=Inf|Voice=Act	8	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	in	in	ADP	e	_	11	case	_	_
11	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	19	obl	_	SpaceAfter=No
12	,	,	PUNCT	Pu	_	11	punct	_	_
13	tanquam	tamquam	SCONJ	r	Compound=Yes|PronType=Rel	16	mark	_	_
14	in	in	ADP	e	_	16	case	_	_
15	propriam	proprius	ADJ	afs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	16	amod	_	_
16	causam	causa	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	19	advcl:cmp	_	SpaceAfter=No
17	,	,	PUNCT	Pu	_	16	punct	_	_
18	habeat	habeo	VERB	va2cps3	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl:relcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
19	reduci	reduco	VERB	vp3fp	Aspect=Imp|VerbForm=Inf|Voice=Pass	18	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
20	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl:relcl	color:blue
1	Sed	sed	CCONJ	co	_	6	cc	_	_
2	genus	genus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	6	csubj:pass	_	_
3	humanum	humanus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	2	amod	_	_
4	maxime	magis	ADV	rs	Degree=Abs	6	advmod	_	_
5	Deo	deus	NOUN	Sms2	Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	6	obl:arg	_	_
6	assimilatur	assimilo	VERB	vp1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	quando	quando	ADV	r	AdvType=Tim|PronType=Rel	10	advmod:tmod	_	_
8	maxime	magis	ADV	rs	Degree=Abs	10	advmod	_	_
9	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	unum	unus	DET	aunsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	6	advcl:relcl	_	SpaceAfter=No
11	:	:	PUNCT	Pu	_	18	punct	_	_
12	vera	uerus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	14	amod	_	_
13	enim	enim	PART	c	Form=Emp	18	discourse	_	_
14	ratio	ratio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	18	nsubj	_	_
15	unius	unus	DET	aums1g	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	14	nmod	_	_
16	in	in	ADP	e	_	18	case	_	_
17	solo	solus	DET	dpmsb	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Con	18	det	_	_
18	illo	ille	DET	ddismb	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	6	conj	_	_
19	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
20	;	;	PUNCT	Pu	_	23	punct	_	_
21	propter	propter	ADP	e	_	22	case	_	_
22	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	23	obl	_	_
23	scriptum	scribo	VERB	vp3irs3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	18	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
24	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
25	:	:	PUNCT	Pu	_	27	punct	_	_
26	«	«	PUNCT	Pu	_	27	punct	_	SpaceAfter=No
27	Audi	audio	VERB	va4mps2	Aspect=Imp|InflClass=LatI|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	23	csubj:reported	_	SpaceAfter=No|TraditionalMood=Imperativus|TraditionalTense=Praesens
28	,	,	PUNCT	Pu	_	29	punct	_	_
29	Israel	israel	PROPN	Smsvi	Foreign=Yes|NameType=Giv	27	vocative	_	SpaceAfter=No
30	,	,	PUNCT	Pu	_	34	punct	_	_
31	Dominus	dominus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Proper=Yes	34	nsubj	_	_
32	Deus	deus	NOUN	Sms2	Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	31	flat	_	_
33	tuus	tuus	DET	dsmsn	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	31	det	_	_
34	unus	unus	DET	aumsn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	27	conj	_	_
35	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
36	»	»	PUNCT	Pu	_	27	punct	_	SpaceAfter=No
37	.	.	PUNCT	Pu	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 18 advcl:relcl	color:blue
1	Ex	ex	ADP	e	_	4	case	_	_
2	hac	hic	DET	dpfsb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	_
3	itaque	itaque	PART	co	Form=Emp|PronType=Dem	6	discourse	_	_
4	declaratione	declaratio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	6	obl	_	_
5	sic	sic	ADV	r	PronType=Dem	6	advmod	_	_
6	arguatur	arguo	VERB	vp3cps3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
7	:	:	PUNCT	Pu	_	9	punct	_	_
8	iustitia	iustitia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	9	nsubj	_	_
9	potissima	potis	ADJ	afs2ns	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurI|Number=Sing	5	conj:expl	_	_
10	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
11	in	in	ADP	e	_	12	case	_	_
12	mundo	mundus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	9	obl	_	_
13	quando	quando	ADV	r	AdvType=Tim|PronType=Rel	18	advmod:tmod	_	_
14	volentissimo	uolo	VERB	ans2bs	Aspect=Imp|Case=Abl|Degree=Abs|Gender=Neut|InflClass=LatAnom|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Act	17	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
15	et	et	CCONJ	co	_	16	cc	_	_
16	potentissimo	possum	VERB	ans2sb	Aspect=Imp|Case=Abl|Degree=Abs|Gender=Neut|InflClass=LatAnom|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Act	14	conj	_	TraditionalMood=Participium|TraditionalTense=Praesens
17	subiecto	subiectum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	18	obl:lmod	_	_
18	inest	insum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
19	;	;	PUNCT	Pu	_	22	punct	_	_
20	huiusmodi	huiusmodi	DET	r	Compound=Yes|PronType=Dem	22	det	_	_
21	solus	solus	DET	dpmsn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Con	22	det	_	_
22	Monarcha	monarcha	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing	9	conj	_	_
23	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
24	:	:	PUNCT	Pu	_	32	punct	_	_
25	ergo	ergo	ADV	co	AdvType=Loc	32	discourse	_	_
26	soli	solus	DET	dpmsd	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Con	27	det	_	_
27	Monarche	monarcha	NOUN	sms1d	Case=Dat|Gender=Masc|InflClass=IndEurA|Number=Sing	28	obl	_	_
28	insistens	insisto	VERB	va3ppsfn	Aspect=Imp|Case=Nom|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	29	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
29	iustitia	iustitia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	32	nsubj	_	_
30	in	in	ADP	e	_	31	case	_	_
31	mundo	mundus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	32	obl	_	_
32	potissima	potis	ADJ	afs2ns	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurI|Number=Sing	22	conj	_	_
33	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
34	.	.	PUNCT	Pu	_	6	punct	_	_

~~~


