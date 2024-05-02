---
layout: base
title:  'Statistics of advcl:relcl in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_udante-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_udante-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_udante-dep-advcl-pred.html">advcl:pred</a></tt>.

101 nodes (0%) are attached to their parents as `advcl:relcl`.

59 instances of `advcl:relcl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.2970297029703.

The following 18 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (55; 54% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (9; 9% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (9; 9% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (6; 6% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 1% instances).


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
9	inquirere	inquiro	VERB	va3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	8	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	in	in	ADP	e	_	11	case	_	_
11	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	19	obl	_	SpaceAfter=No
12	,	,	PUNCT	Pu	_	11	punct	_	_
13	tanquam	tamquam	SCONJ	r	Compound=Yes|PronType=Rel	16	mark	_	_
14	in	in	ADP	e	_	16	case	_	_
15	propriam	proprius	ADJ	afs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	16	amod	_	_
16	causam	causa	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	19	advcl:cmp	_	SpaceAfter=No
17	,	,	PUNCT	Pu	_	16	punct	_	_
18	habeat	habeo	VERB	va2cps3	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl:relcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
19	reduci	reduco	VERB	vp3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	18	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 advcl:relcl	color:blue
1	Ex	ex	ADP	e	_	2	case	_	_
2	quo	qui	PRON	presnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	3	obl	_	_
3	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	quod	quod	SCONJ	cs	PronType=Rel	9	mark	_	_
5	Imperator	imperator	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	9	nsubj	_	_
6	ipsam	ipse	DET	ddesfa	Case=Acc|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	7	obl	_	_
7	permutare	permuto	VERB	va1fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
8	non	non	PART	r	Polarity=Neg	9	advmod:neg	_	_
9	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	in	in	ADP	e	_	11	case	_	_
11	quantum	quantus	DET	dinsna	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card|PronType=Rel	12	obl	_	_
12	Imperator	imperator	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	9	advcl:relcl	_	SpaceAfter=No
13	,	,	PUNCT	Pu	_	17	punct	_	_
14	cum	cum	SCONJ	cs	PronType=Rel	17	mark	_	_
15	ab	ab	ADP	e	_	16	case	_	_
16	ea	is	PRON	ddesfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	17	obl	_	_
17	recipiat	recipio	VERB	va3cps3	Aspect=Imp|InflClass=LatI2|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
18	esse	sum	AUX	va5fp	Aspect=Imp|Tense=Pres|VerbForm=Inf	17	obj	_	TraditionalTense=Praesens
19	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	18	acl:relcl	_	_
20	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
21	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


