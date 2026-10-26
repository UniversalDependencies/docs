---
layout: base
title:  'Statistics of dislocated:csubj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:csubj`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_udante-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="la_udante-dep-dislocated-obl.html">dislocated:obl</a></tt>.

12 nodes (0%) are attached to their parents as `dislocated:csubj`.

10 instances of `dislocated:csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.8333333333333.

The following 5 pairs of parts of speech are connected with `dislocated:csubj`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (6; 50% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 8% instances).


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
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 27 dislocated:csubj	color:blue
1	Si	si	SCONJ	cs	_	3	mark	_	_
2	enim	enim	PART	c	Form=Emp	11	discourse	_	_
3	consideremus	considero	VERB	va1cpp1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	unum	unus	DET	aumsa	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	5	det	_	_
5	hominem	homo	NOUN	sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Pu	_	3	punct	_	_
7	hoc	hic	DET	ddisnn	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	10	nsubj	_	_
8	in	in	ADP	e	_	9	case	_	_
9	eo	is	PRON	ddesnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	10	obl	_	_
10	contingere	contingo	VERB	va3fp	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	11	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
11	videbimus	uideo	VERB	va2ifp1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
12	,	,	PUNCT	Pu	_	13	punct	_	_
13	quia	quia	SCONJ	cs	PronType=Rel	27	mark	_	SpaceAfter=No
14	,	,	PUNCT	Pu	_	13	punct	_	_
15	cum	cum	SCONJ	cs	PronType=Rel	19	mark	_	_
16	omnes	omnis	DET	afp2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Plur|PronType=Tot	17	det	_	_
17	vires	uis	NOUN	sfp3n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Plur	19	nsubj:pass	_	_
18	eius	is	PRON	ddesmg	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	17	nmod	_	_
19	ordinentur	ordino	VERB	vp1cpp3	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	27	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
20	ad	ad	ADP	e	_	21	case	_	_
21	felicitatem	felicitas	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	19	obl	_	SpaceAfter=No
22	,	,	PUNCT	Pu	_	19	punct	_	_
23	vis	uis	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	27	nsubj	_	_
24	ipsa	ipse	DET	dpfsn	Case=Nom|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	23	det	_	_
25	intellectualis	intellectualis	ADJ	afs2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	23	amod	_	_
26	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
27	regulatrix	regulatrix	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	10	dislocated:csubj	_	_
28	et	et	CCONJ	co	_	29	cc	_	_
29	rectrix	rectrix	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	27	conj	_	_
30	omnium	omnis	DET	afp2g	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Plur|PronType=Tot	31	det	_	_
31	aliarum	alius	DET	dpfp1g	Case=Gen|Gender=Fem|InflClass=LatPron|Number=Plur|PronType=Con	29	nmod	_	SpaceAfter=No
32	:	:	PUNCT	Pu	_	38	punct	_	_
33	aliter	aliter	ADV	r	PronType=Con	38	advmod	_	_
34	ad	ad	ADP	e	_	35	case	_	_
35	felicitatem	felicitas	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	36	obl	_	_
36	pervenire	peruenio	VERB	va4fp	Aspect=Imp|InflClass=LatI|VerbForm=Inf|Voice=Act	38	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
37	non	non	PART	r	Polarity=Neg	38	advmod:neg	_	_
38	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	27	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
39	.	.	PUNCT	Pu	_	11	punct	_	_

~~~


