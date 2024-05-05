---
layout: base
title:  'Statistics of orphan:missing in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `orphan:missing`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-orphan.html">orphan</a></tt>.

3 nodes (0%) are attached to their parents as `orphan:missing`.

3 instances of `orphan:missing` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `orphan:missing`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 19 orphan:missing	color:blue
1	uerberare	uerbero	VERB	B1	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Act	8	csubj	_	LASLAVariant=2|LiLaflcat=v1|TraditionalMood=Infinitivus|TraditionalTense=Praesens
2	seruum	seruus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	1	obj	_	LASLAVariant=1|LiLaflcat=n2
3	ac	atque	CCONJ	S	Form=Emp	7	cc	_	LASLAVariant=1|LiLaflcat=i
4	uinculis	uinculum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	7	obl	_	LiLaflcat=n2
5	et	et	CCONJ	S	_	6	cc	_	LASLAVariant=2|LiLaflcat=i
6	opere	opus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	4	conj	_	LASLAVariant=1|LiLaflcat=n3
7	coercere	coerceo	VERB	B2	Aspect=Imp|InflClass=LatE|VerbForm=Inf|Voice=Act	1	conj	_	LiLaflcat=v2|TraditionalMood=Infinitivus|TraditionalTense=Praesens
8	rarum	rarus	ADJ	C1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	LiLaflcat=n6
9	solent	soleo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	LiLaflcat=v2|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	non	non	PART	P	Polarity=Neg	11	advmod:neg	_	LiLaflcat=i
11	disciplina	disciplina	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	9	orphan:missing	_	LiLaflcat=n1
12	et	et	CCONJ	S	_	13	cc	_	LASLAVariant=2|LiLaflcat=i
13	seueritate	seueritas	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	11	conj	_	LiLaflcat=n3
14	sed	sed	CCONJ	S	_	15	cc	_	LiLaflcat=i
15	impetu	impetus	NOUN	A4	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing	11	conj	_	LiLaflcat=n4
16	et	et	CCONJ	S	_	17	cc	_	LASLAVariant=2|LiLaflcat=i
17	ira	ira	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	15	conj	_	LiLaflcat=n1
18	ut	ut	SCONJ	N	PronType=Rel	19	mark	_	LASLAVariant=1|LiLaflcat=i
19	inimicum	inimicus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	9	orphan:missing	_	LASLAVariant=1|LiLaflcat=n2
20	nisi	nisi	SCONJ	T	Polarity=Neg	22	mark	_	LiLaflcat=i
21	quod	quod	SCONJ	T	PronType=Rel	22	mark	_	LASLAVariant=2|LiLaflcat=i
22	impune	impunis	ADJ	M	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	19	advcl	_	LiLaflcat=i
23	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 orphan:missing	color:blue
1	non	non	PART	P	Polarity=Neg	7	advmod:neg	_	LiLaflcat=i
2	ne	ne	PART	O	PartType=Int	7	discourse	_	LiLaflcat=i
3	uel	uel	ADV	M	Degree=Pos	6	advmod	_	LASLAVariant=1|LiLaflcat=i
4	tristes	tristis	ADJ	C4	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Plur	5	amod	_	LiLaflcat=n7
5	lacus	lacus	NOUN	A4	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Plur	6	obj	_	LiLaflcat=n4
6	incolere	incolo	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	7	csubj	_	LASLAVariant=2|LiLaflcat=v3
7	satius	satis	ADJ	C6	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	0	root	_	LASLAVariant=1|LiLaflcat=n7
8	non	non	PART	P	Polarity=Neg	10	advmod:neg	_	LiLaflcat=i
9	ne	ne	PART	O	PartType=Int	10	discourse	_	LiLaflcat=i
10	custodem	custos	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	7	orphan:missing	_	LiLaflcat=n3
11	Stygis	styx	PROPN	A3	Case=Gen|Gender=Fem|InflClass=IndEurX|NameType=Geo|Number=Sing	10	nmod	_	LASLAVariant=N|LiLaflcat=n3
12	trigemina	tergeminus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	14	amod	_	LiLaflcat=n6
13	nigris	niger	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Plur	16	amod	_	LiLaflcat=n6
14	colla	collum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	15	obj	_	LiLaflcat=n2
15	iactantem	iacto	VERB	B1	Aspect=Imp|Case=Acc|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	10	acl	_	LiLaflcat=v1
16	iubis	iuba	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	15	obl	_	LiLaflcat=n1

~~~


