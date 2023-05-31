---
layout: base
title:  'Statistics of advmod:lmod in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_perseus-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_perseus-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_perseus-dep-advmod-tmod.html">advmod:tmod</a></tt>.

56 nodes (0%) are attached to their parents as `advmod:lmod`.

50 instances of `advmod:lmod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.55357142857143.

The following 3 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (54; 96% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:lmod	color:blue
1	unde	unde	ADV	d--------	AdvType=Loc	4	advmod:lmod	_	LId=unde1
2	locum	locus	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	LId=locus1
3	Grai	Graii	PROPN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	LId=Graii1
4	dixerunt	dico	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=dico2|TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	nomine	nomen	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	obl	_	LId=nomen1
6	Aornon	Aornos	PROPN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	4	ccomp	_	SpaceAfter=No|LId=Aornos1
7	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 advmod:lmod	color:blue
1	lenissimum	lenis	ADJ	a-s---nns	Case=Nom|Degree=Abs|Gender=Neut|Number=Sing	2	amod	_	LId=lenis1
2	genus	genus	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	LId=genus1
3	admonitionis	admonitio	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	fuit	sum	AUX	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	traditio	traditio	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
6	coram	coram	ADV	d--------	_	5	nmod	_	_
7	pugillarium	pugillaris	ADJ	a-p---mg-	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	u--------	_	14	punct	_	_
9	quos	qui	PRON	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur|PronType=Rel	14	obj	_	LId=qui1
10	taciti	taceo	VERB	v-prppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	14	xcomp	_	TraditionalMood=Participium|TraditionalTense=Perfectum
11	et	et	CCONJ	c--------	_	13	cc	_	_
12	ibidem	ibidem	ADV	d--------	AdvType=Loc	13	advmod:lmod	_	_
13	statim	statim	ADV	d--------	_	10	conj	_	_
14	legerent	lego	VERB	v3pisa---	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	_	LId=lego2|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
15	;	;	PUNCT	u--------	_	2	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 advmod:lmod	color:blue
1	Caesare	Caesar	PROPN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	12	nsubj	_	_
2	post	post	ADP	r--------	_	4	case	_	_
3	receptas	recipio	VERB	v-prppfa-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	4	nmod	_	TraditionalMood=Participium|TraditionalTense=Perfectum
4	Hispanias	Hispania	PROPN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	12	obl	_	_
5	expeditionem	expeditio	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
6	in	in	ADP	r--------	_	7	case	_	_
7	Dacos	Daci	PROPN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	5	obl	_	_
8	et	et	CCONJ	c--------	_	11	cc	_	_
9	inde	inde	ADV	d--------	AdvType=Loc	11	advmod:lmod	_	_
10	in	in	ADP	r--------	_	11	case	_	_
11	Parthos	Parthi	PROPN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	7	conj	_	_
12	destinante	destino	VERB	v-spp-mb-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	16	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Praesens
13	praemissus	praemitto	VERB	v-srppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	16	advcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
14	Apolloniam	Apollonia	PROPN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	13	obj	_	_
15	studiis	studium	NOUN	n-p---nd-	Case=Dat|Gender=Neut|Number=Plur	16	obl	_	_
16	uacauit	vaco	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
17	.	.	PUNCT	u--------	_	16	punct	_	_

~~~


