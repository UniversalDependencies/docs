---
layout: base
title:  'Statistics of advmod:lmod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_udante-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_udante-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_udante-dep-advmod-tmod.html">advmod:tmod</a></tt>.

206 nodes (0%) are attached to their parents as `advmod:lmod`.

179 instances of `advmod:lmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.30582524271845.

The following 9 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (162; 79% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (24; 12% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (9; 4% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:lmod	color:blue
1	Et	et	CCONJ	co	_	3	cc	_	_
2	hoc	hic	DET	ddisnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	3	nsubj:pass	_	_
3	queritur	quaero	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	hic	hic	ADV	r	AdvType=Loc|Case=Loc|PronType=Dem	3	advmod:lmod	_	_
5	tanquam	tamquam	SCONJ	r	Compound=Yes|PronType=Rel	6	mark	_	_
6	principium	principium	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	3	advcl:cmp	_	_
7	inquisitionis	inquisitio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	6	nmod	_	_
8	directivum	directiuus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	6	amod	_	SpaceAfter=No
9	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:lmod	color:blue
1	Non	non	PART	r	Polarity=Neg	3	advmod:neg	_	_
2	hic	hic	ADV	r	AdvType=Loc|Case=Loc|PronType=Dem	3	advmod:lmod	_	_
3	insidie	insidiae	NOUN	sfp1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Pu	_	7	punct	_	_
5	non	non	PART	r	Polarity=Neg	7	advmod:neg	_	_
6	hic	hic	ADV	r	AdvType=Loc|Case=Loc|PronType=Dem	7	advmod:lmod	_	_
7	iniuria	iniuria	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	3	conj	_	SpaceAfter=No
8	,	,	PUNCT	Pu	_	11	punct	_	_
9	quantas	quantus	DET	pripfa	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur|NumType=Card|PronType=Rel	11	ccomp	_	_
10	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	9	cop	_	TraditionalTense=Praesens
11	putas	puto	VERB	va1ips2	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:lmod	color:blue
1	Unde	unde	ADV	r	AdvType=Loc|PronType=Rel	2	advmod:lmod	_	_
2	manifestum	manifestus	ADJ	ans1n	Case=Nom|Compound=Yes|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	quod	quod	SCONJ	cs	PronType=Rel	8	mark	_	_
5	pax	pax	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj	_	_
6	universalis	uniuersalis	ADJ	afs2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	5	amod	_	_
7	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	optimum	bonus	ADJ	ans1ns	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	2	csubj	_	_
9	eorum	is	PRON	ddepng	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	8	nmod	_	_
10	que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	14	nsubj:pass	_	_
11	ad	ad	ADP	e	_	13	case	_	_
12	nostram	noster	DET	dsfsa	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	13	det	_	_
13	beatitudinem	beatitudo	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	14	obl	_	_
14	ordinantur	ordino	VERB	va1ipp3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
15	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


