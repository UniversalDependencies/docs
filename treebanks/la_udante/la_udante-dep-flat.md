---
layout: base
title:  'Statistics of flat in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `flat`

This relation is universal.
There are 3 language-specific subtypes of `flat`: <tt><a href="la_udante-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="la_udante-dep-flat-gov.html">flat:gov</a></tt>, <tt><a href="la_udante-dep-flat-name.html">flat:name</a></tt>.

95 nodes (0%) are attached to their parents as `flat`.

95 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62105263157895.

The following 13 pairs of parts of speech are connected with `flat`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (36; 38% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (22; 23% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (12; 13% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (8; 8% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-X.html">X</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	Iam	iam	ADV	r	_	4	advmod	_	_
2	michi	ego	PRON	ppp1smd	Case=Dat|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
3	bellisonis	bellisonus	ADJ	amp1b	Case=Abl|Compound=Yes|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	5	amod	_	_
4	horrent	horreo	VERB	va2ipp3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	clangoribus	clangor	NOUN	smp3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Plur	4	obl	_	_
6	aures	auris	NOUN	sfp3n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Plur	4	nsubj	_	SpaceAfter=No
7	:	:	PUNCT	Pu	_	11	punct	_	_
8	quid	quid	ADV	rt	PronType=Rel	11	advmod	_	_
9	pater	pater	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	11	nsubj	_	_
10	Appenninus	appenninus	PROPN	Smsn	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	9	flat	_	_
11	hiat	hio	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
12	?	?	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 flat	color:blue
1	Sic	sic	ADV	r	PronType=Dem	3	advmod	_	_
2	ergo	ergo	ADV	co	AdvType=Loc	3	discourse	_	_
3	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	:	:	PUNCT	Pu	_	6	punct	_	_
5	cum	cum	SCONJ	cs	PronType=Rel	6	mark	_	_
6	dicit	dico	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	advcl	_	_
7	“	“	PUNCT	Pu	_	10	punct	_	SpaceAfter=No
8	in	in	ADP	e	AdpType=Prep	10	case	_	_
9	illo	ille	DET	dpnsb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	10	det	_	_
10	celo	caelum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	6	parataxis:rep	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	17	punct	_	_
12	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	17	nsubj	_	_
13	plus	multum	ADV	r+	Degree=Cmp	17	advmod	_	_
14	de	de	ADP	e	AdpType=Prep	15	case	_	_
15	luce	lux	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	17	obl	_	_
16	Dei	deus	NOUN	Sms2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing|Proper=Yes	15	nmod	_	_
17	recipit	recipio	VERB	va3ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl:relcl	_	SpaceAfter=No
18	”	”	PUNCT	Pu	_	10	punct	_	SpaceAfter=No
19	,	,	PUNCT	Pu	_	6	punct	_	_
20	intelligit	intelligo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis:rep	_	_
21	circumloqui	circumloquor	VERB	vd3fp	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	20	ccomp	_	_
22	Paradisum	paradisus	NOUN	sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	21	obj	_	SpaceAfter=No
23	,	,	PUNCT	Pu	_	25	punct	_	_
24	sive	siue	CCONJ	co	_	25	cc	_	_
25	celum	caelum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	22	conj	_	_
26	empyreum	empyreum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	25	flat	_	SpaceAfter=No
27	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 flat	color:blue
1	Nam	nam	PART	co	_	9	discourse	_	_
2	si	si	SCONJ	cs	_	3	mark	_	_
3	sic	sic	ADV	r	PronType=Dem	9	advcl	_	SpaceAfter=No
4	,	,	PUNCT	Pu	_	3	punct	_	_
5	eodem	idem	DET	dpmsb	Case=Abl|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	6	det	_	_
6	modo	modus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	9	obl	_	_
7	auctoritas	auctoritas	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	9	nsubj	_	_
8	Ecclesie	ecclesia	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|NameType=Com|Number=Sing|Proper=Yes	7	nmod	_	_
9	probaretur	probo	VERB	vp1cis3	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
10	dependere	dependeo	VERB	va2fp	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	_
11	ab	ab	ADP	e	AdpType=Prep	12	case	_	_
12	Imperatore	imperator	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	Pu	_	19	punct	_	_
14	postquam	postquam	SCONJ	cs	Compound=Yes|PronType=Rel	19	mark	_	_
15	Octo	octo	PROPN	Sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing	19	nsubj	_	_
16	imperator	imperator	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	15	flat	_	_
17	Leonem	leo	PROPN	sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing	19	obj	_	_
18	papam	papa	NOUN	Sms1	Gender=Masc|InflClass=IndEurA|Number=Sing	17	flat	_	_
19	restituit	restituo	VERB	va3irs3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
20	et	et	CCONJ	co	_	22	cc	_	_
21	Benedictum	benedictus	PROPN	Sms2a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	22	obj	_	_
22	deposuit	depono	VERB	va3irs3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	conj	_	SpaceAfter=No
23	,	,	PUNCT	Pu	_	29	punct	_	_
24	necnon	necnon	CCONJ	co	Polarity=Neg	29	cc	_	_
25	in	in	ADP	e	AdpType=Prep	26	case	_	_
26	exilium	exilium	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	29	obl:arg	_	_
27	in	in	ADP	e	AdpType=Prep	28	case	_	_
28	Saxoniam	saxonia	PROPN	Sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	29	obl	_	_
29	duxit	duco	VERB	va3irs3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	conj	_	SpaceAfter=No
30	.	.	PUNCT	Pu	_	9	punct	_	_

~~~


