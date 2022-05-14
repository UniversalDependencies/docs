---
layout: base
title:  'Statistics of advmod:lmod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_udante-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_udante-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_udante-dep-advmod-tmod.html">advmod:tmod</a></tt>.

165 nodes (0%) are attached to their parents as `advmod:lmod`.

146 instances of `advmod:lmod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.50909090909091.

The following 8 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (129; 78% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (16; 10% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (14; 8% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 advmod:lmod	color:blue
1	Ergo	ergo	ADV	co	AdvType=Loc	7	advmod:lmod	_	_
2	ab	ab	ADP	e	AdpType=Prep	4	case	_	_
3	hac	hic	DET	dpfsb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	_
4	providentia	prouidentia	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	7	obl	_	_
5	natura	natura	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	7	nsubj	_	_
6	non	non	PART	r	Polarity=Neg	7	advmod:neg	_	_
7	deficit	deficio	VERB	va3ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	in	in	ADP	e	AdpType=Prep	10	mark	_	_
9	suis	suus	DET	dsnpb	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	10	det	_	_
10	ordinatis	ordino	VERB	vp1prpnb	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	7	obl:arg	_	SpaceAfter=No
11	.	.	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 advmod:lmod	color:blue
1	Preterea	praeterea	ADV	r	AdvType=Loc|Compound=Yes|PronType=Dem	11	advmod:lmod	_	SpaceAfter=No
2	,	,	PUNCT	Pu	_	1	punct	_	_
3	sicut	sicut	SCONJ	r	Compound=Yes|ConjType=Cmpr	6	mark	_	_
4	Ecclesia	ecclesia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|NameType=Com|Number=Sing|Proper=Yes	6	nsubj	_	_
5	suum	suus	DET	dsnsa	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
6	habet	habeo	VERB	va2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl:cmpr	_	_
7	fundamentum	fundamentum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	Pu	_	6	punct	_	_
9	sic	sic	ADV	r	PronType=Dem	11	orphan	_	_
10	et	et	ADV	co	_	11	advmod:emph	_	_
11	Imperium	imperium	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|NameType=Com|Number=Sing|Proper=Yes	0	root	_	_
12	suum	suus	DET	dsnsa	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	11	orphan	_	SpaceAfter=No
13	.	.	PUNCT	Pu	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 advmod:lmod	color:blue
1	Ergo	ergo	ADV	co	AdvType=Loc	7	advmod:lmod	_	_
2	nobilibus	nobilis	ADJ	amp2d	Case=Dat|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Plur	7	obl:arg	_	_
3	ratione	ratio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl	_	_
4	cause	causa	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	3	nmod	_	_
5	premium	praemium	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nsubj	_	_
6	prelationis	praelatio	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nmod	_	_
7	conveniens	conueniens	ADJ	ans2n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
8	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	Pu	_	7	punct	_	_

~~~


