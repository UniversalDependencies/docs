---
layout: base
title:  'Statistics of ccomp:relcl in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `ccomp:relcl`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="la_udante-dep-ccomp-reported.html">ccomp:reported</a></tt>.

45 nodes (0%) are attached to their parents as `ccomp:relcl`.

27 instances of `ccomp:relcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.15555555555556.

The following 5 pairs of parts of speech are connected with `ccomp:relcl`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (31; 69% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (5; 11% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (5; 11% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 ccomp:relcl	color:blue
1	Ad	ad	ADP	e	_	2	case	_	_
2	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	3	obl:arg	_	_
3	respondens	respondeo	VERB	va2ppsmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	9	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
4	,	,	PUNCT	Pu	_	3	punct	_	_
5	licteram	littera	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	9	obj	_	_
6	Mathei	matheus	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	5	nmod	_	_
7	et	et	CCONJ	co	_	8	cc	_	_
8	sensum	sensus	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	5	conj	_	_
9	confiteor	confiteor	VERB	vd2ips1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	,	,	PUNCT	Pu	_	17	punct	_	_
11	sed	sed	CCONJ	co	_	17	cc	_	_
12	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	15	obj	_	_
13	ex	ex	ADP	e	_	14	case	_	_
14	illa	ille	DET	ddisfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	15	obl	_	_
15	inferre	infero	VERB	va5fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	16	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	conantur	conor	VERB	vd1ipp3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	17	ccomp:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
17	interimo	interimo	VERB	va3ips1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
18	.	.	PUNCT	Pu	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 34 ccomp:relcl	color:blue
1	Ergo	ergo	ADV	co	AdvType=Loc	2	discourse	_	_
2	melius	bene	ADV	r+	Degree=Cmp	0	root	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	humanum	humanus	ADJ	ans1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	5	amod	_	_
5	genus	genus	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	8	nsubj:pass	_	_
6	per	per	ADP	e	_	7	case	_	_
7	unum	unus	DET	aunsa	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	8	obl:arg	_	_
8	regi	rego	VERB	vp3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	2	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	quam	quam	SCONJ	c	PronType=Rel	11	mark	_	_
10	per	per	ADP	e	_	11	case	_	_
11	plura	multus	DET	anp1ac	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Card|PronType=Ind	2	obl:cmp	_	SpaceAfter=No
12	,	,	PUNCT	Pu	_	16	punct	_	_
13	et	et	CCONJ	co	_	16	cc	_	_
14	sic	sic	ADV	r	PronType=Dem	16	orphan	_	_
15	per	per	ADP	e	_	16	case	_	_
16	Monarcham	monarcha	NOUN	sms1a	Case=Acc|Gender=Masc|InflClass=IndEurA|Number=Sing	2	conj	_	_
17	qui	qui	PRON	presmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	20	nsubj	_	_
18	unicus	unicus	ADJ	ams1n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	20	amod	_	_
19	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
20	princeps	princeps	NOUN	sms3n	Case=Nom|Compound=Yes|Gender=Masc|InflClass=IndEurX|Number=Sing	16	acl:relcl	_	SpaceAfter=No
21	;	;	PUNCT	Pu	_	22	punct	_	_
22	et	et	CCONJ	co	_	27	cc	_	_
23	si	si	SCONJ	cs	_	24	mark	_	_
24	melius	bonus	ADJ	ans1nc	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	27	advcl	_	SpaceAfter=No
25	,	,	PUNCT	Pu	_	24	punct	_	_
26	Deo	deus	NOUN	Sms2	Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	27	obl:arg	_	_
27	acceptabilius	acceptabilis	ADJ	ans2ac	Case=Acc|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	2	conj	_	SpaceAfter=No
28	,	,	PUNCT	Pu	_	32	punct	_	_
29	cum	cum	SCONJ	cs	PronType=Rel	32	mark	_	_
30	Deus	deus	NOUN	Sms2	Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	32	nsubj	_	_
31	semper	semper	ADV	r	AdvType=Tim	32	advmod:tmod	_	_
32	velit	uolo	VERB	va5cps3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	27	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
33	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	34	nsubj	_	_
34	melius	bonus	ADJ	ans1nc	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	32	ccomp:relcl	_	_
35	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
36	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 ccomp:relcl	color:blue
1	Dicimus	dico	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	ergo	ergo	ADV	co	AdvType=Loc	1	discourse	_	_
3	quod	quod	SCONJ	cs	PronType=Rel	6	mark	_	_
4	nullus	nullus	DET	dpmsn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|Polarity=Neg|PronType=Ind	5	det	_	_
5	effectus	effectus	NOUN	sms4n	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	6	nsubj	_	_
6	superat	supero	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	suam	suus	DET	dsfsa	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	_
8	causam	causa	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	Pu	_	12	punct	_	_
10	in	in	ADP	e	_	11	case	_	_
11	quantum	quantus	DET	r	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card|PronType=Rel	12	obl	_	_
12	effectus	effectus	NOUN	sms4n	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	6	advcl:relcl	_	_
13	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
14	,	,	PUNCT	Pu	_	17	punct	_	_
15	quia	quia	SCONJ	cs	PronType=Rel	17	mark	_	_
16	nil	nihil	PRON	dinsna	Polarity=Neg|PronType=Ind	17	nsubj	_	_
17	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
18	efficere	efficio	VERB	va3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	17	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
19	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	18	ccomp:relcl	_	_
20	non	non	PART	r	Polarity=Neg	19	advmod:neg	_	_
21	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
22	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


