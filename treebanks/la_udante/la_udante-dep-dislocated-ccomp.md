---
layout: base
title:  'Statistics of dislocated:ccomp in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `dislocated:ccomp`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="la_udante-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_udante-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="la_udante-dep-dislocated-obl.html">dislocated:obl</a></tt>.

2 nodes (0%) are attached to their parents as `dislocated:ccomp`.

2 instances of `dislocated:ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 20.5.

The following 1 pairs of parts of speech are connected with `dislocated:ccomp`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 28 dislocated:ccomp	color:blue
1	Oratione	oratio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	2	nsubj	_	_
2	impetrante	impetro	VERB	va1ppsfb	Aspect=Imp|Case=Abl|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	4	advcl:abs	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
3	,	,	PUNCT	Pu	_	2	punct	_	_
4	quod	qui	PRON	presna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	obj	_	_
5	sciebant	scio	VERB	va4iip3	Aspect=Imp|InflClass=LatI|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
6	qui	qui	PRON	prepmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	7	nsubj	_	_
7	dicebant	dico	VERB	va3iip3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	csubj	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
8	secundo	secundus	ADJ	aums1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing|NumType=Ord|VerbForm=Part	7	obl	_	_
9	Paralipomenon	paralipomena	PROPN	Snp2g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Plur|Variant=Greek	8	nmod	_	SpaceAfter=No
10	:	:	PUNCT	Pu	_	20	punct	_	_
11	«	«	PUNCT	Pu	_	20	punct	_	SpaceAfter=No
12	Cum	cum	SCONJ	cs	PronType=Rel	13	mark	_	_
13	ignoramus	ignoro	VERB	va1ipp1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
14	quid	quis	PRON	dinsna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Int	15	obj	_	_
15	agere	ago	VERB	va3fp	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	16	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	debeamus	debeo	VERB	va2cpp1	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	13	ccomp	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
17	,	,	PUNCT	Pu	_	13	punct	_	_
18	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	20	obj	_	_
19	solum	solum	ADV	r	PronType=Con	20	advmod:emph	_	_
20	habemus	habeo	VERB	va2ipp1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp:reported	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
21	residui	residuus	ADJ	ans1g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	20	advcl:pred	_	SpaceAfter=No
22	:	:	PUNCT	Pu	_	28	punct	_	_
23	quod	quod	SCONJ	cs	PronType=Rel	28	mark	_	_
24	oculos	oculus	NOUN	smp2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	28	obj	_	_
25	nostros	noster	DET	dsmpa	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	24	det	_	_
26	ad	ad	ADP	e	_	27	case	_	_
27	Te	tu	PRON	ppp2sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	28	obl	_	_
28	dirigamus	dirigo	VERB	va3cpp1	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	dislocated:ccomp	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
29	»	»	PUNCT	Pu	_	20	punct	_	SpaceAfter=No
30	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


