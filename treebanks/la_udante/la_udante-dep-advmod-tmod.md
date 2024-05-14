---
layout: base
title:  'Statistics of advmod:tmod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_udante-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_udante-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_udante-dep-advmod-neg.html">advmod:neg</a></tt>.

319 nodes (1%) are attached to their parents as `advmod:tmod`.

275 instances of `advmod:tmod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.12852664576803.

The following 8 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (266; 83% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (23; 7% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (18; 6% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PART.html">PART</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advmod:tmod	color:blue
1	O	o	PART	i	PartType=Emp	4	advmod:emph	_	_
2	miserrima	miser	ADJ	afs1vs	Case=Voc|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	4	amod	_	_
3	Fesulanorum	fesulanus	ADJ	Smp2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	4	nmod	_	_
4	propago	propago	NOUN	sfs3v	Case=Voc|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Pu	_	10	punct	_	_
6	et	et	CCONJ	co	_	10	cc	_	_
7	iterum	iterum	ADV	r	AdvType=Tim|Degree=Cmp	9	advmod:tmod	_	_
8	iam	iam	ADV	r	AdvType=Tim	9	advmod:tmod	_	_
9	punita	punio	VERB	vp4prsfv	Aspect=Perf|Case=Voc|Gender=Fem|InflClass=LatI|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	10	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
10	barbaries	barbaries	NOUN	sfs5n	Case=Nom|Gender=Fem|InflClass=IndEurE|Number=Sing	4	conj	_	SpaceAfter=No
11	!	!	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advmod:tmod	color:blue
1	Forte	forte	ADV	r	_	10	advmod	_	_
2	recensentes	recenseo	VERB	va2pppmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	10	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Praesens
3	pastas	pasco	VERB	vp3prpfa	Aspect=Perf|Case=Acc|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Plur|VerbForm=Part|Voice=Pass	6	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
4	de	de	ADP	e	_	5	case	_	_
5	more	mos	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	2	obl	_	_
6	capellas	capella	NOUN	sfp1a	Case=Acc|Degree=Dim|Gender=Fem|InflClass=IndEurA|Number=Plur	2	obj	_	_
7	tunc	tunc	ADV	r	AdvType=Tim|PronType=Dem	10	advmod:tmod	_	_
8	ego	ego	PRON	ppp1sn	Case=Nom|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
9	sub	sub	ADP	e	_	10	case	_	_
10	quercu	quercus	NOUN	sfs4b	Case=Abl|Gender=Fem|InflClass=IndEurU|Number=Sing	0	root	_	_
11	meus	meus	DET	dsmsn	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	13	det	_	_
12	et	et	CCONJ	co	_	13	cc	_	_
13	Melibeus	meliboeus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	8	conj	_	_
14	eramus	sum	AUX	va5iip1	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	10	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
15	.	.	PUNCT	Pu	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod:tmod	color:blue
1	O	o	PART	i	PartType=Emp	3	advmod:emph	_	_
2	semper	semper	ADV	r	AdvType=Tim	5	advmod:tmod	_	_
3	natura	natura	NOUN	sfs1v	Case=Voc|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	0	root	_	_
4	nostra	noster	DET	dsfsv	Case=Voc|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	3	det	_	_
5	prona	pronus	ADJ	afs1v	Case=Voc|Gender=Fem|InflClass=IndEurA|Number=Sing	3	amod	_	_
6	peccatis	peccatum	NOUN	snp2d	Case=Dat|Gender=Neut|InflClass=IndEurO|Number=Plur|VerbForm=Part	5	obl:arg	_	SpaceAfter=No
7	!	!	PUNCT	Pu	_	3	punct	_	_

~~~


