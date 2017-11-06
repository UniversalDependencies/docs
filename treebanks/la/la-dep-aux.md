---
layout: base
title:  'Statistics of aux in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `aux`

This relation is universal.

5 nodes (0%) are attached to their parents as `aux`.

5 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
1	earum	is1	PRON	p-p---fg-	Case=Gen|Gender=Fem|Number=Plur	2	nmod	_	_
2	exemplum	exemplum1	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	_
3	infra	infra1	ADV	d--------	_	4	advmod	_	_
4	scriptum	scribo1	VERB	v-srppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	est	edo1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	SpaceAfter=No
6	.	punc1	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 31 aux	color:blue
1	Colonias	colonia1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	23	obj	_	_
2	in	in	ADP	r--------	_	3	case	_	_
3	Africa	Africa	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
4	,	punc1	PUNCT	u--------	_	3	punct	_	_
5	Sicilia	Sicilia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
6	,	punc1	PUNCT	u--------	_	3	punct	_	_
7	Macedonia	Macedonia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
8	,	punc1	PUNCT	u--------	_	3	punct	_	_
9	utraque	uterque	PRON	p-s---fb-	Case=Abl|Gender=Fem|Number=Sing	10	nmod	_	_
10	Hispania	Hispania	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
11	,	punc1	PUNCT	u--------	_	3	punct	_	_
12	Achaia	Achaia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
13	,	punc1	PUNCT	u--------	_	3	punct	_	_
14	Asia	asia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
15	,	punc1	PUNCT	u--------	_	3	punct	_	_
16	Syria	Syria	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
17	,	punc1	PUNCT	u--------	_	3	punct	_	_
18	Gallia	Gallia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	_
19	Narbonensi	Narbonensis	ADJ	a-s---fbp	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	SpaceAfter=No
20	,	punc1	PUNCT	u--------	_	3	punct	_	_
21	Pisidia	Pisidia	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	3	conj	_	_
22	militum	miles	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
23	deduxi	deduco	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
24	Italia	Italia	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	38	nsubj	_	_
25	autem	autem	CCONJ	c--------	_	23	cc	_	_
26	XXVIII	XXVIII	NUM	m-----fa-	Case=Acc|Gender=Fem	27	nummod	_	_
27	colonias	colonia1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	38	obj	_	_
28	quae	qui1	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	31	nsubj	_	_
29	vivo	vivus	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	30	nsubj	_	_
30	me	ego	PRON	p-s---mb-	Case=Abl|Gender=Masc|Number=Sing	31	advmod	_	_
31	celeberrimae	celeber	ADJ	a-p---fns	Case=Nom|Degree=Sup|Gender=Fem|Number=Plur	27	aux	_	_
32	et	et	CCONJ	c--------	_	31	cc	_	_
33	frequentissimae	frequens	ADJ	a-p---fns	Case=Nom|Degree=Sup|Gender=Fem|Number=Plur	31	conj	_	_
34	fuerunt	sum1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	31	cop	_	_
35	mea	meus	ADJ	a-s---fb-	Case=Abl|Gender=Fem|Number=Sing	36	amod	_	_
36	auctoritate	auctoritas	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	37	advmod	_	_
37	deductas	deduco	VERB	v-prppfa-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	27	amod	_	_
38	habet	habeo	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	23	conj	_	SpaceAfter=No
39	.	punc1	PUNCT	u--------	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 aux	color:blue
1	ceterum	ceterum1	ADV	d--------	_	7	advmod	_	_
2	mihi	ego1	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	7	advmod	_	_
3	in	in1	ADP	r--------	_	4	case	_	_
4	dies	dies1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	7	obl	_	_
5	magis	magis1	ADV	d--------	_	7	advmod	_	_
6	animus	animus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	accenditur	accendo2	VERB	v3spip---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	,	comma1	PUNCT	u--------	_	7	punct	_	_
9	quom	quom	X	---------	_	10	mark	_	_
10	considero	considero1	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
11	,	comma1	PUNCT	u--------	_	12	punct	_	_
12	quae	qui1	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	_
13	condicio	condicio1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	_
14	vitae	vita1	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
15	futura	sum1	VERB	v-sfpafn-	Case=Nom|Gender=Fem|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	12	cop	_	_
16	sit	sum1	VERB	v3spsa---	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	SpaceAfter=No
17	,	comma1	PUNCT	u--------	_	18	punct	_	_
18	nisi	nisi1	SCONJ	c--------	_	21	mark	_	_
19	nosmet	nos1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	21	nsubj	_	_
20	ipsi	ipse1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	19	nmod	_	_
21	vindicamus	vindico1	VERB	v1ppia---	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	_
22	in	in1	ADP	r--------	_	23	case	_	_
23	libertatem	libertas1	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	21	obl	_	SpaceAfter=No
24	.	punc1	PUNCT	u--------	_	7	punct	_	_

~~~


