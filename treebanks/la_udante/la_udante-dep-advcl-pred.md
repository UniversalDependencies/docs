---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_udante-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_udante-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_udante-dep-advcl-relcl.html">advcl:relcl</a></tt>.

454 nodes (1%) are attached to their parents as `advcl:pred`.

243 instances of `advcl:pred` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.64537444933921.

The following 16 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (292; 64% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (85; 19% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (24; 5% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (16; 4% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (13; 3% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 advcl:pred	color:blue
1	An	an	PART	co	PartType=Int	7	discourse	_	_
2	septi	sepio	VERB	vp4prpmv	Aspect=Perf|Case=Voc|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	7	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Perfectum
3	vallo	uallum	NOUN	sns2b	Case=Abl|Degree=Dim|Gender=Neut|InflClass=IndEurO|Number=Sing	2	obl:agent	_	_
4	ridiculo	ridiculus	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	3	amod	_	_
5	cuiquam	quisquam	DET	dinsfd	Case=Dat|Compound=Yes|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Ind	6	det	_	_
6	defensioni	defensio	NOUN	sfs3d	Case=Dat|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl:arg	_	_
7	confiditis	confido	VERB	vs3ipp2	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	?	?	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 advcl:pred	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	ad	ad	ADP	e	_	3	case	_	_
3	vos	tu	PRON	ppp2pma	Case=Acc|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	4	obl	_	_
4	hec	hic	DET	ddipnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	0	root	_	_
5	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	maxime	magis	ADV	rs	Degree=Abs	4	advmod	_	_
7	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	11	nsubj	_	_
8	sacrum	sacer	ADJ	ams1a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	9	amod	_	_
9	Tiberim	tiberis	PROPN	Sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|NameType=Geo|Number=Sing	11	obj	_	_
10	parvuli	paruulus	ADJ	smp2n	Case=Nom|Degree=Dim|Gender=Masc|InflClass=IndEurO|Number=Plur	11	advcl:pred	_	_
11	cognovistis	cognosco	VERB	va3irp2	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
12	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advcl:pred	color:blue
1	«	«	PUNCT	Pu	_	4	punct	_	SpaceAfter=No
2	Quomodo	quomodo	ADV	r	Compound=Yes|PronType=Rel	4	advmod:emph	_	_
3	sola	solus	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Con	4	advcl:pred	_	_
4	sedet	sedeo	VERB	va2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	civitas	ciuitas	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	4	nsubj	_	_
6	plena	plenus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	5	amod	_	_
7	populo	populus	NOUN	sms2b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	6	obl:arg	_	SpaceAfter=No
8	!	!	PUNCT	Pu	_	4	punct	_	_

~~~


