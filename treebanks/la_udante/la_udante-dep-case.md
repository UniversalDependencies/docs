---
layout: base
title:  'Statistics of case in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `case`

This relation is universal.

3953 nodes (7%) are attached to their parents as `case`.

3921 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27143941310397.

The following 17 pairs of parts of speech are connected with `case`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (2443; 62% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (462; 12% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (400; 10% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (340; 9% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (173; 4% instances), <tt><a href="la_udante-pos-NUM.html">NUM</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (37; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (32; 1% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (31; 1% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-INTJ.html">INTJ</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_udante-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case	color:blue
1	O	o	PART	i	PartType=Emp	2	advmod:emph	_	_
2	quam	quam	ADV	c	PronType=Rel	6	advmod	_	_
3	in	in	ADP	e	AdpType=Prep	5	case	_	_
4	eius	is	PRON	ddesfg	Case=Gen|Gender=Fem|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	5	nmod	_	_
5	apparitione	apparitio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	6	advcl:cmpr	_	_
6	obstupui	obstupesco	VERB	va3irs1	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	!	!	PUNCT	Pu	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	ad	ad	ADP	e	AdpType=Prep	3	case	_	_
3	vos	tu	PRON	ppp2pma	Case=Acc|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	4	obl	_	_
4	hec	hic	DET	ddipnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	0	root	_	_
5	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	maxime	magis	ADV	rs	Degree=Abs	4	advmod	_	_
7	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	11	nsubj	_	_
8	sacrum	sacer	ADJ	ams1a	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	9	amod	_	_
9	Tiberim	tiberis	PROPN	Sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|NameType=Geo|Number=Sing	11	obj	_	_
10	parvuli	paruulus	NOUN	smp2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	11	advcl:pred	_	_
11	cognovistis	cognosco	VERB	va3irp2	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	per	per	ADP	e	AdpType=Prep	3	case	_	_
3	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	obl	_	_
4	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	quod	quod	SCONJ	cs	PronType=Rel	7	mark	_	_
6	Comedia	comedia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|NameType=Lit|Number=Sing|Proper=Yes	7	xcomp:pred	_	_
7	dicitur	dico	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	csubj	_	_
8	presens	praesum	VERB	ans2n	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatAnom|InflClass[nominal]=IndEurI|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	9	acl	_	_
9	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nsubj:pass	_	SpaceAfter=No
10	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


