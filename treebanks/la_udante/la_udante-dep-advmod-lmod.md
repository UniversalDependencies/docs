---
layout: base
title:  'Statistics of advmod:lmod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_udante-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_udante-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_udante-dep-advmod-tmod.html">advmod:tmod</a></tt>.

215 nodes (0%) are attached to their parents as `advmod:lmod`.

184 instances of `advmod:lmod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.7953488372093.

The following 9 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (172; 80% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (20; 9% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (11; 5% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:lmod	color:blue
1	non	non	PART	r	Polarity=Neg	8	advmod:neg	_	_
2	ne	ne	PART	r	PartType=Int	8	discourse	_	_
3	solis	sol	NOUN	sms3g	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	6	nmod	_	_
4	astrorum	astrum	NOUN	snp2g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Plur	3	conj	_	_
5	que	que	CCONJ	co9	_	4	cc	_	_
6	specula	speculum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	8	obj	_	_
7	ubique	ubique	ADV	r	AdvType=Loc|Form=Emp|PronType=Rel	8	advmod:lmod	_	_
8	conspiciam	conspicio	VERB	va3ifs1	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
9	?	?	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:lmod	color:blue
1	Non	non	PART	r	Polarity=Neg	3	advmod:neg	_	_
2	hic	hic	ADV	r	AdvType=Loc|PronType=Dem	3	advmod:lmod	_	_
3	insidie	insidiae	NOUN	sfp1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Pu	_	7	punct	_	_
5	non	non	PART	r	Polarity=Neg	7	advmod:neg	_	_
6	hic	hic	ADV	r	AdvType=Loc|PronType=Dem	7	advmod:lmod	_	_
7	iniuria	iniuria	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	3	conj	_	SpaceAfter=No
8	,	,	PUNCT	Pu	_	11	punct	_	_
9	quantas	quantus	DET	pripfa	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur|NumType=Card|PronType=Rel	11	ccomp	_	_
10	esse	sum	AUX	va5fp	Aspect=Imp|Tense=Pres|VerbForm=Inf	9	cop	_	TraditionalTense=Praesens
11	putas	puto	VERB	va1ips2	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:lmod	color:blue
1	Secundo	secundo	ADV	r	NumType=Ord|VerbForm=Part	2	advmod	_	_
2	demonstrabitur	demonstro	VERB	vp1ifs3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
3	terram	terra	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	8	nsubj	_	_
4	hanc	hic	DET	dpfsa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	3	det	_	_
5	emergentem	emergo	VERB	va3ppsfa	Aspect=Imp|Case=Acc|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	3	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
6	esse	sum	AUX	va5fp	Aspect=Imp|Tense=Pres|VerbForm=Inf	8	cop	_	TraditionalTense=Praesens
7	ubique	ubique	ADV	r	AdvType=Loc|Form=Emp|PronType=Rel	8	advmod:lmod	_	_
8	altiorem	altus	ADJ	afs1ac	Case=Acc|Degree=Cmp|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	2	csubj:pass	_	_
9	totali	totalis	ADJ	afs2b	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	10	amod	_	_
10	superficie	superficies	NOUN	sfs5b	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	8	obl:cmp	_	_
11	maris	mare	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


