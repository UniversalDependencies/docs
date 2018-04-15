---
layout: base
title:  'Statistics of aux in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `aux`

This relation is universal.

5 nodes (0%) are attached to their parents as `aux`.

5 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
1	earum	is	PRON	p-p---fg-	Case=Gen|Gender=Fem|Number=Plur	2	nmod	_	LId=is1
2	exemplum	exemplum	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	LId=exemplum1
3	infra	infra	ADV	d--------	_	4	advmod	_	LId=infra1
4	scriptum	scribo	VERB	v-srppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	LId=scribo1
5	est	edo	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	SpaceAfter=No|LId=edo1
6	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 31 aux	color:blue
1	Colonias	colonia	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	23	obj	_	LId=colonia1
2	in	in	ADP	r--------	_	3	case	_	_
3	Africa	Africa	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
4	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
5	Sicilia	Sicilia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
7	Macedonia	Macedonia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
8	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
9	utraque	uterque	PRON	p-s---fb-	Case=Abl|Gender=Fem|Number=Sing	10	nmod	_	_
10	Hispania	Hispania	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
11	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
12	Achaia	Achaia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
14	Asia	asia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
15	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
16	Syria	Syria	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
17	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
18	Gallia	Gallia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	_
19	Narbonensi	Narbonensis	ADJ	a-s---fbp	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	SpaceAfter=No
20	,	,	PUNCT	u--------	_	3	punct	_	LId=punc1
21	Pisidia	Pisidia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	_
22	militum	miles	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
23	deduxi	deduco	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
24	Italia	Italia	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	38	nsubj	_	_
25	autem	autem	CCONJ	c--------	_	23	cc	_	_
26	XXVIII	XXVIII	NUM	m-----fa-	Case=Acc|Gender=Fem	27	nummod	_	_
27	colonias	colonia	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	38	obj	_	LId=colonia1
28	quae	qui	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	31	nsubj	_	LId=qui1
29	vivo	vivus	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	30	nsubj	_	_
30	me	ego	PRON	p-s---mb-	Case=Abl|Gender=Masc|Number=Sing	31	advmod	_	_
31	celeberrimae	celeber	ADJ	a-p---fns	Case=Nom|Degree=Sup|Gender=Fem|Number=Plur	27	aux	_	_
32	et	et	CCONJ	c--------	_	31	cc	_	_
33	frequentissimae	frequens	ADJ	a-p---fns	Case=Nom|Degree=Sup|Gender=Fem|Number=Plur	31	conj	_	_
34	fuerunt	sum	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	31	cop	_	LId=sum1
35	mea	meus	ADJ	a-s---fb-	Case=Abl|Gender=Fem|Number=Sing	36	amod	_	_
36	auctoritate	auctoritas	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	37	advmod	_	_
37	deductas	deduco	VERB	v-prppfa-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	27	amod	_	_
38	habet	habeo	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	23	conj	_	SpaceAfter=No
39	.	.	PUNCT	u--------	_	23	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 aux	color:blue
1	ceterum	ceterum	ADV	d--------	_	7	advmod	_	LId=ceterum1
2	mihi	ego	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	7	advmod	_	LId=ego1
3	in	in	ADP	r--------	_	4	case	_	LId=in1
4	dies	dies	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	7	obl	_	LId=dies1
5	magis	magis	ADV	d--------	_	7	advmod	_	LId=magis1
6	animus	animus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	LId=animus1
7	accenditur	accendo	VERB	v3spip---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|LId=accendo2
8	,	,	PUNCT	u--------	_	7	punct	_	LId=comma1
9	quom	quom	X	---------	_	10	mark	_	_
10	considero	considero	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No|LId=considero1
11	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
12	quae	qui	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	LId=qui1
13	condicio	condicio	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	LId=condicio1
14	vitae	vita	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	LId=vita1
15	futura	sum	VERB	v-sfpafn-	Case=Nom|Gender=Fem|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	12	cop	_	LId=sum1
16	sit	sum	VERB	v3spsa---	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	SpaceAfter=No|LId=sum1
17	,	,	PUNCT	u--------	_	18	punct	_	LId=comma1
18	nisi	nisi	SCONJ	c--------	_	21	mark	_	LId=nisi1
19	nosmet	nos	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	21	nsubj	_	LId=nos1
20	ipsi	ipse	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	19	nmod	_	LId=ipse1
21	vindicamus	vindico	VERB	v1ppia---	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	LId=vindico1
22	in	in	ADP	r--------	_	23	case	_	LId=in1
23	libertatem	libertas	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	21	obl	_	SpaceAfter=No|LId=libertas1
24	.	.	PUNCT	u--------	_	7	punct	_	LId=punc1

~~~


