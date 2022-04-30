---
layout: base
title:  'Statistics of flat:foreign in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="la_udante-dep-flat-gov.html">flat:gov</a></tt>, <tt><a href="la_udante-dep-flat-name.html">flat:name</a></tt>.

371 nodes (1%) are attached to their parents as `flat:foreign`.

371 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.08086253369272.

The following 7 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-X.html">X</a></tt> (364; 98% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	Dicunt	dico	VERB	va3ipp3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	enim	enim	PART	c	Form=Emp	1	discourse	_	SpaceAfter=No
3	:	:	PUNCT	Pu	_	4	punct	_	_
4	Messure	messure	X	zi	Foreign=Yes	1	obj	_	_
5	quinto	quinto	X	zi	Foreign=Yes	4	flat:foreign	_	_
6	dici	dici	X	zi	Foreign=Yes	4	flat:foreign	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 23 flat:foreign	color:blue
1	Senenses	senensis	ADJ	Smp3n	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Pu	_	3	punct	_	_
3	Onche	onche	X	zi	Foreign=Yes	1	orphan	_	_
4	renegata	renegata	X	zi	Foreign=Yes	3	flat:foreign	_	_
5	avess'	auess	X	zi	Foreign=Yes	3	flat:foreign	_	_
6	io	io	X	zi	Foreign=Yes	3	flat:foreign	_	_
7	Siena	siena	X	zi	Foreign=Yes|NameType=Geo	3	flat:foreign	_	_
8	Ch'	ch	X	zi	Foreign=Yes	3	flat:foreign	_	_
9	ee	ee	X	zi	Foreign=Yes	3	flat:foreign	_	_
10	chesto	chesto	X	zi	Foreign=Yes	3	flat:foreign	_	_
11	Aretini	aretinus	ADJ	Smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	1	conj	_	SpaceAfter=No
12	:	:	PUNCT	Pu	_	13	punct	_	_
13	Vuo'	uuo	X	zi	Foreign=Yes	11	orphan	_	_
14	tu	tu	X	zi	Foreign=Yes	13	flat:foreign	_	_
15	venire	uenio	VERB	v4fp	Aspect=Imp|InflClass=LatI|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf	13	flat:foreign	_	_
16	ovelle	ouelle	X	zi	Foreign=Yes	13	flat:foreign	_	_
17	De	de	ADP	e	AdpType=Prep|Proper=Yes	13	flat:foreign	_	_
18	Perusio	perusium	PROPN	Sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|NameType=Geo|Number=Sing	13	flat:foreign	_	SpaceAfter=No
19	,	,	PUNCT	Pu	_	20	punct	_	_
20	Urbe	urbs	NOUN	Sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|NameType=Geo|Number=Sing|Proper=Yes	13	flat:foreign	_	_
21	Veteri	uetus	ADJ	afs2b	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurX|Number=Sing|Proper=Yes	13	flat:foreign	_	SpaceAfter=No
22	,	,	PUNCT	Pu	_	23	punct	_	_
23	Viterbio	uiterbium	PROPN	Sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|NameType=Geo|Number=Sing	13	flat:foreign	_	SpaceAfter=No
24	,	,	PUNCT	Pu	_	25	punct	_	_
25	nec	neque	CCONJ	co	Polarity=Neg	42	cc	_	_
26	non	non	PART	r	Polarity=Neg	25	fixed	_	_
27	de	de	ADP	e	AdpType=Prep	28	case	_	_
28	Civitate	ciuitas	NOUN	Sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|NameType=Geo|Number=Sing|Proper=Yes	41	obl:arg	_	_
29	Castellana	castellanus	ADJ	afs1b	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing|Proper=Yes	28	amod	_	SpaceAfter=No
30	,	,	PUNCT	Pu	_	28	punct	_	_
31	propter	propter	ADP	e	AdpType=Prep	32	case	_	_
32	affinitatem	affinitas	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	42	obl	_	_
33	quam	qui	PRON	presfa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	34	obj	_	_
34	habent	habeo	VERB	va2ipp3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	32	acl:relcl	_	_
35	cum	cum	ADP	e	AdpType=Prep	36	case	_	_
36	Romanis	romanus	ADJ	Smp2b	Case=Abl|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	34	obl	_	_
37	et	et	CCONJ	co	_	38	cc	_	_
38	Spoletanis	spoletanus	ADJ	Smp2b	Case=Abl|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	36	conj	_	SpaceAfter=No
39	,	,	PUNCT	Pu	_	32	punct	_	_
40	nichil	nihil	PRON	r	InflClass=Ind|PronType=Neg	41	obj	_	_
41	tractare	tracto	VERB	va1fp	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	42	ccomp	_	_
42	intendimus	intendo	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
43	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 flat:foreign	color:blue
1	Hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	obl:arg	_	_
2	etiam	etiam	ADV	co	Compound=Yes	3	advmod:emph	_	_
3	Yspani	hispanus	ADJ	Smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	4	nsubj	_	_
4	usi	utor	VERB	vd3irp3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
6	-	-	PUNCT	Pu	_	8	punct	_	_
7	et	et	CCONJ	co	_	8	cc	_	_
8	dico	dico	VERB	va3ips1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
9	Yspanos	hispanus	ADJ	Smp2a	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	8	xcomp:pred	_	_
10	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	11	nsubj	_	_
11	poetati	poetor	VERB	vd1irp3	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	9	acl:relcl	_	_
12	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
13	in	in	ADP	e	AdpType=Prep	14	case	_	_
14	vulgari	uulgare	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Sing	11	obl	_	_
15	oc	oc	X	zi	Foreign=Yes	14	flat:foreign	_	SpaceAfter=No
16	:	:	PUNCT	Pu	_	17	punct	_	_
17	Namericus	namericus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	4	conj	_	_
18	de	de	ADP	e	AdpType=Prep	19	case	_	_
19	Belnui	belnui	PROPN	Si	Foreign=Yes|InflClass=Ind|NameType=Geo|Number=Sing	17	obl	_	SpaceAfter=No
20	:	:	PUNCT	Pu	_	21	punct	_	_
21	Nuls	nuls	X	zi	Foreign=Yes	17	orphan	_	_
22	hom	hom	X	zi	Foreign=Yes	21	flat:foreign	_	_
23	non	non	X	zi	Foreign=Yes	21	flat:foreign	_	_
24	pot	pot	X	zi	Foreign=Yes	21	flat:foreign	_	_
25	complir	complir	X	zi	Foreign=Yes	21	flat:foreign	_	_
26	adrecciamen	adrecciamen	X	zi	Foreign=Yes	21	flat:foreign	_	SpaceAfter=No
27	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


