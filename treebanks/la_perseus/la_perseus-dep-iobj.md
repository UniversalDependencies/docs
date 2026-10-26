---
layout: base
title:  'Statistics of iobj in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `iobj`

This relation is universal.

4 nodes (0%) are attached to their parents as `iobj`.

4 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.5.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 25% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Ovem	ovis	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	2	iobj	_	_
2	rogabat	rogo	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
3	cervus	cervus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	modium	modius	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
5	tritici	triticum	NOUN	n-s---ng-	Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_
6	Lupo	lupus	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	2	obl	_	LId=lupus1
7	sponsore	sponsor	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
1	Quod	quod	SCONJ	c--------	_	5	cc	_	LId=quod1
2	si	si	SCONJ	c--------	_	3	mark	_	LId=si1
3	resilient	resilio	VERB	v3pfia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	5	advcl	_	LId=resilio1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	destinavi	destino	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=destino1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
6	illum	ille	DET	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	iobj	_	LId=ille1
7	artificii	artificium	NOUN	n-s---ng-	Case=Gen|Gender=Neut|Number=Sing	8	obj	_	LId=artificium1
8	docere	doceo	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	_	LId=doceo1|SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	,	,	PUNCT	u--------	_	11	punct	_	LId=comma1
10	aut	aut	CCONJ	c--------	_	11	cc	_	LId=aut1
11	tonstreinum	tonstreinus	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	7	conj:expl	_	LId=tonstreinus1
12	aut	aut	CCONJ	c--------	_	13	cc	_	LId=aut1
13	praeconem	praeco	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	11	conj	_	LId=praeco1
14	aut	aut	CCONJ	c--------	_	16	cc	_	LId=aut1
15	certe	certus	ADV	d--------	_	16	advmod	_	LId=certus1
16	causidicum	causidicus	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	11	conj	_	SpaceAfter=No|LId=causidicus1
17	,	,	PUNCT	u--------	_	11	punct	_	LId=comma1
18	quod	qui	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	20	obj	_	LId=qui1
19	illi	ille	DET	p-s---md-	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	20	obl:arg	_	LId=ille1
20	auferre	aufero	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	22	xcomp	_	LId=aufero1|TraditionalMood=Infinitivus|TraditionalTense=Praesens
21	non	non	PART	d--------	_	22	advmod:neg	_	LId=non1
22	possit	possum	VERB	v3spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	LId=possum1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
23	nisi	nisi	SCONJ	c--------	_	24	mark	_	LId=nisi1
24	Orcus	Orcus	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	SpaceAfter=No|LId=Orcus1
25	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 13 iobj	color:blue
1	Ego	ego	PRON	p-s---mn-	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	LId=ego1
2	suspicatus	suspicor	VERB	v-srppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	12	advcl	_	LId=suspicor1|TraditionalMood=Participium|TraditionalTense=Perfectum
3	ad	ad	ADP	r--------	_	5	case	_	LId=ad1
4	aliquam	aliqui	DET	p-s---fa-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	5	det	_	LId=aliqui1
5	urbanitatem	urbanitas	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	LId=urbanitas1
6	totiens	totiens	ADV	d--------	_	7	advmod	_	LId=totiens1
7	iteratam	itero	VERB	v-srppfa-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	8	amod	_	LId=itero1|TraditionalMood=Participium|TraditionalTense=Perfectum
8	vocem	vox	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	9	nsubj	_	LId=vox1
9	pertinere	pertineo	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	2	ccomp	_	LId=pertineo1|SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
11	non	non	PART	d--------	_	12	advmod:neg	_	LId=non1
12	erubui	erubesco	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=erubesco1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
13	eum	is	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	iobj	_	SpaceAfter=No|LId=is1
14	,	,	PUNCT	u--------	_	18	punct	_	LId=comma1
15	qui	qui	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	18	nsubj	_	LId=qui1
16	supra	supra	ADP	r--------	_	17	case	_	LId=supra1
17	me	ego	PRON	p-s---ma-	Case=Acc|Number=Sing|Person=1|PronType=Prs	18	obl	_	LId=ego1
18	accumbebat	accumbo	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	acl:relcl	_	LId=accumbo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
19	,	,	PUNCT	u--------	_	18	punct	_	LId=comma1
20	hoc	hic	DET	p-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	22	obj	_	LId=hic1
21	ipsum	ipse	DET	p-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	20	det	_	LId=ipse1
22	interrogare	interrogo	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	12	xcomp	_	LId=interrogo1|SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
23	.	.	PUNCT	u--------	_	12	punct	_	LId=punc1

~~~


