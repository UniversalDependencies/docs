---
layout: base
title:  'Statistics of dislocated:obl in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:obl`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_udante-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_udante-dep-dislocated-obj.html">dislocated:obj</a></tt>.

3 nodes (0%) are attached to their parents as `dislocated:obl`.

3 instances of `dislocated:obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.66666666666667.

The following 3 pairs of parts of speech are connected with `dislocated:obl`: <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 19 dislocated:obl	color:blue
1	Iste	iste	DET	dpmsn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	2	det	_	_
2	prosillogismus	prosillogismus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	3	nsubj	_	_
3	currit	curro	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	per	per	ADP	e	_	6	case	_	_
5	secundam	secundus	ADJ	aufs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord|VerbForm=Part	6	amod	_	_
6	figuram	figura	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	3	obl	_	_
7	cum	cum	ADP	e	_	8	case	_	_
8	negatione	negatio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	3	obl	_	_
9	intrinseca	intrinsecus	ADJ	afs1b	Case=Abl|Compound=Yes|Gender=Fem|InflClass=IndEurA|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	Pu	_	13	punct	_	_
11	et	et	CCONJ	co	_	13	cc	_	_
12	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
13	similis	similis	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	3	conj	_	_
14	huic	hic	DET	ddismd	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	13	obl:arg	_	SpaceAfter=No
15	:	:	PUNCT	Pu	_	19	punct	_	_
16	omne	omnis	DET	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|PronType=Tot	17	det	_	_
17	B	b	NOUN	yy	_	19	nsubj	_	_
18	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
19	A	a	NOUN	yy	NameType=Let	13	dislocated:obl	_	SpaceAfter=No
20	;	;	PUNCT	Pu	_	24	punct	_	_
21	solum	solum	ADV	r	PronType=Con	22	advmod:emph	_	_
22	C	c	NOUN	yy	NameType=Let	24	nsubj	_	_
23	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
24	A	a	NOUN	yy	NameType=Let	19	conj	_	SpaceAfter=No
25	:	:	PUNCT	Pu	_	30	punct	_	_
26	ergo	ergo	ADV	co	AdvType=Loc	30	discourse	_	_
27	solum	solum	ADV	r	PronType=Con	28	advmod:emph	_	_
28	C	c	NOUN	yy	NameType=Let	30	nsubj	_	_
29	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
30	B	b	NOUN	yy	NameType=Let	24	conj	_	SpaceAfter=No
31	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 dislocated:obl	color:blue
1	Et	et	CCONJ	co	_	3	cc	_	_
2	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	similis	similis	ADJ	ams2n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	0	root	_	_
4	processus	processus	NOUN	sms4n	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	3	nsubj	_	_
5	huic	hic	DET	ddismd	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	3	obl:arg	_	SpaceAfter=No
6	:	:	PUNCT	Pu	_	8	punct	_	_
7	A	a	NOUN	yy	NameType=Let	8	nsubj	_	_
8	precedit	praecedo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	dislocated:obl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	B	b	NOUN	yy	NameType=Let	8	obj	_	_
10	in	in	ADP	e	_	11	case	_	_
11	C	c	NOUN	yy	NameType=Let	8	obl	_	SpaceAfter=No
12	;	;	PUNCT	Pu	_	17	punct	_	_
13	D	d	NOUN	yy	NameType=Let	17	nsubj	_	_
14	et	et	CCONJ	co	_	15	cc	_	_
15	E	e	NOUN	yy	NameType=Lit	13	conj	_	_
16	se	sui	PRON	ppp3pna	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	17	obj	_	_
17	habent	habeo	VERB	va2ipp3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
18	ut	ut	SCONJ	r	PronType=Rel	19	mark	_	_
19	A	a	NOUN	yy	NameType=Let	17	advcl:cmp	_	_
20	et	et	CCONJ	co	_	21	cc	_	_
21	B	b	NOUN	yy	NameType=Let	19	conj	_	SpaceAfter=No
22	:	:	PUNCT	Pu	_	25	punct	_	_
23	ergo	ergo	ADV	co	AdvType=Loc	25	discourse	_	_
24	D	d	NOUN	yy	NameType=Let	25	nsubj	_	_
25	precedit	praecedo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
26	E	e	NOUN	yy	NameType=Lit	25	obj	_	_
27	in	in	ADP	e	_	28	case	_	_
28	F	f	NOUN	yy	NameType=Let	25	obl	_	SpaceAfter=No
29	;	;	PUNCT	Pu	_	34	punct	_	_
30	F	f	NOUN	yy	NameType=Let	34	nsubj:pass	_	_
31	vero	uero	ADV	r	_	34	discourse	_	_
32	et	et	CCONJ	co	_	33	cc	_	_
33	C	c	NOUN	yy	NameType=Let	30	conj	_	_
34	diversa	diuerto	VERB	anp1n	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	8	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
35	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	34	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
36	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 24 dislocated:obl	color:blue
1	Et	et	CCONJ	co	_	6	cc	_	_
2	ex	ex	ADP	e	_	3	case	_	_
3	hinc	hinc	ADV	r	AdvType=Loc|Case=Loc|PronType=Dem	6	obl	_	_
4	continuato	continuo	VERB	vp1prsnb	Aspect=Perf|Case=Abl|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	6	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Perfectum
5	colloquio	colloquium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	4	nsubj:pass	_	_
6	venit	uenio	VERB	va4irs3	Aspect=Perf|InflClass=LatI|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
7	ad	ad	ADP	e	_	8	case	_	_
8	hec	hic	DET	ddipna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	6	obl	_	SpaceAfter=No
9	:	:	PUNCT	Pu	_	6	punct	_	_
10	«	«	PUNCT	Pu	_	24	punct	_	SpaceAfter=No
11	Quando	quando	ADV	r	AdvType=Tim|PronType=Rel	24	advmod:tmod	_	_
12	misi	mitto	VERB	va3irs1	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
13	vos	tu	PRON	ppp2pma	Case=Acc|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	12	obj	_	_
14	sine	sine	ADP	e	_	15	case	_	_
15	sacculo	sacculus	NOUN	sms2b	Case=Abl|Degree=Dim|Gender=Masc|InflClass=IndEurO|Number=Sing	12	obl	_	_
16	et	et	CCONJ	co	_	17	cc	_	_
17	pera	pera	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	15	conj	_	_
18	et	et	CCONJ	co	_	19	cc	_	_
19	calciamentis	calciamentum	NOUN	snp2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	15	conj	_	SpaceAfter=No
20	,	,	PUNCT	Pu	_	24	punct	_	_
21	num	num	PART	rt	PartType=Int	24	discourse	_	_
22	quid	quid	ADV	rt	PronType=Rel	24	advmod	_	_
23	aliquid	aliquis	PRON	dinsnn	Case=Nom|Compound=Yes|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	24	nsubj	_	_
24	defuit	desum	VERB	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	dislocated:obl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
25	vobis	tu	PRON	ppp2pmd	Case=Dat|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	24	obl:arg	_	SpaceAfter=No
26	?	?	PUNCT	Pu	_	6	punct	_	_

~~~


