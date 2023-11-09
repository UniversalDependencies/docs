---
layout: base
title:  'Statistics of advcl:abs in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advcl:abs`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="la_perseus-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_perseus-dep-advcl-pred.html">advcl:pred</a></tt>.

164 nodes (1%) are attached to their parents as `advcl:abs`.

131 instances of `advcl:abs` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 4 pairs of parts of speech are connected with `advcl:abs`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (159; 97% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl:abs	color:blue
1	His	hic	DET	p-p---nb-	Case=Abl|Gender=Neut|Number=Plur|PronType=Dem	2	nsubj:pass	_	LId=hic1
2	actis	ago	VERB	v-prppnb-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	5	advcl:abs	_	LId=ago1|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
3	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
4	propere	properus	ADV	d--------	_	5	advmod	_	LId=properus1
5	exsequitur	exsequor	VERB	v3spid---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	praecepta	praecipio	VERB	v-prppna-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	5	xcomp	_	LId=praecipio1|TraditionalMood=Participium|TraditionalTense=Perfectum
7	Sibyllae	Sibylla	PROPN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No|LId=Sibylla1
8	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl:abs	color:blue
1	sed	sed	CCONJ	c--------	_	3	cc	_	LId=sed1
2	civitas	civitas	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	LId=civitas1
3	incredibile	incredibilis	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	LId=incredibilis1
4	memoratu	memoro	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	3	nmod	_	LId=memoro1
5	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	adepta	adipiscor	VERB	v-srppfb-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	3	advcl:abs	_	LId=adipiscor1|TraditionalMood=Participium|TraditionalTense=Perfectum
7	libertate	libertas	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	6	nsubj	_	LId=libertas1
8	quantum	quantus	DET	a-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	10	obj	_	LId=quantus1
9	brevi	brevis	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	10	obl	_	LId=brevis1
10	creverit	cerno	VERB	v3srsa---	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj	_	LId=cerno1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
11	:	:	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 advcl:abs	color:blue
1	porro	porro	ADV	d--------	_	3	advmod	_	LId=porro1
2	autem	autem	PART	c--------	_	3	discourse	_	LId=autem1
3	anxius	anxius	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	LId=anxius1
4	erat	sum	AUX	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
5	dubitans	dubito	VERB	v-sppamn-	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	3	advcl	_	LId=dubito1|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
6	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
7	in	in	ADP	r--------	_	9	case	_	LId=in1
8	maxumo	magnus	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	9	amod	_	LId=magnus1
9	scelere	scelus	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	12	obl	_	LId=scelus1
10	tantis	tantus	DET	a-p---mb-	Case=Abl|Gender=Masc|Number=Plur|PronType=Dem	11	det	_	LId=tantus1
11	civibus	civis	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	12	nsubj:pass	_	LId=civis1
12	deprehensis	deprehendo	VERB	v-prppmb-	Aspect=Perf|Case=Abl|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	15	advcl:abs	_	LId=deprehendo1|TraditionalMood=Participium|TraditionalTense=Perfectum
13	quid	quis	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	15	nsubj	_	LId=quis1
14	facto	factum	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	15	nmod	_	LId=factum1
15	opus	opus	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	5	obj	_	LId=opus1
16	esset	sum	AUX	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	cop	_	LId=sum1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
17	:	:	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


