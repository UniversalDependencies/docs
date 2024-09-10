---
layout: base
title:  'Statistics of dislocated:nsubj in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `dislocated:nsubj`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `dislocated`: <tt><a href="la_circse-dep-dislocated-csubj.html">dislocated:csubj</a></tt>.

4 nodes (0%) are attached to their parents as `dislocated:nsubj`.

3 instances of `dislocated:nsubj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.

The following 2 pairs of parts of speech are connected with `dislocated:nsubj`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated:nsubj	color:blue
1	quae	qui	PRON	J	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	3	det	_	LASLAVariant=1|LiLaflcat=p
2	uinci	uinco	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	3	xcomp	_	LiLaflcat=v3
3	potuit	possum	VERB	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	LASLAVariant=1|LiLaflcat=v6
4	regia	regia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	8	dislocated:nsubj	_	LiLaflcat=n1
5	carmine	carmen	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	2	obl:agent	_	LASLAVariant=1|LiLaflcat=n3
6	haec	hic	DET	I	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	9	det	_	LASLAVariant=1|LiLaflcat=p
7	uinci	uinco	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	8	xcomp	_	LiLaflcat=v3
8	poterit	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
9	regia	regia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	8	nsubj	_	LiLaflcat=n1
10	uiribus	uis	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Plur	7	obl:agent	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 15 dislocated:nsubj	color:blue
1	quotiens	quotiens	ADV	N	NumType=Mult|PronType=Rel	4	advmod:tmod	_	LASLAVariant=1|LiLaflcat=i
2	bella	bellum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	4	obj	_	LiLaflcat=n2
3	non	non	PART	P	Polarity=Neg	4	advmod:neg	_	LiLaflcat=i
4	ineunt	ineo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl:relcl	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	multum	multum	ADV	M	NumType=Card	6	orphan	_	LASLAVariant=2|LiLaflcat=i
6	uenatibus	uenatus	NOUN	A4	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Plur	0	root	_	LiLaflcat=n4
7	plus	multum	ADV	M	Degree=Cmp|NumType=Card	10	advmod	_	LASLAVariant=2|LiLaflcat=i
8	per	per	ADP	R	_	9	case	_	LiLaflcat=i
9	otium	otium	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	10	obl	_	LiLaflcat=n2
10	transigunt	transigo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	dediti	deditus	ADJ	C1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	10	advcl:pred	_	LiLaflcat=n6
12	somno	somnus	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	11	obl:arg	_	LiLaflcat=n2
13	cibo	cibus	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	12	conj	_	LiLaflcat=n2
14	que	que	CCONJ	S	_	13	cc	_	LiLaflcat=i
15	fortissimus	fortis	ADJ	C4	Case=Nom|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	37	dislocated:nsubj	_	LiLaflcat=n6
16	quisque	quisque	DET	L	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Tot	15	det	_	LASLAVariant=2|LiLaflcat=p
17	ac	atque	CCONJ	S	Form=Emp	18	cc	_	LASLAVariant=1|LiLaflcat=i
18	bellicosissimus	bellicosus	ADJ	C1	Case=Nom|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	15	conj	_	LiLaflcat=n6
19	nihil	nihil	PRON	L	Polarity=Neg|PronType=Ind	20	obj	_	LiLaflcat=n
20	agens	ago	VERB	B3	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	37	advcl:pred	_	LiLaflcat=v3|TraditionalMood=Participium|TraditionalTense=Praesens
21	delegata	delego	VERB	B1	Aspect=Perf|Case=Abl|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	37	advcl:abs	_	LASLAVariant=1|LiLaflcat=v1|TraditionalMood=Participium|TraditionalTense=Perfectum
22	domus	domus	NOUN	A4	Case=Gen|Gender=Fem|InflClass=IndEurU|Number=Sing	27	nmod	_	LiLaflcat=n4
23	et	et	CCONJ	S	_	24	cc	_	LASLAVariant=2|LiLaflcat=i
24	Penatium	penates	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurI|NameType=Rel|Number=Plur	22	conj	_	LASLAVariant=N|LiLaflcat=n3
25	et	et	CCONJ	S	_	26	cc	_	LASLAVariant=2|LiLaflcat=i
26	agrorum	ager	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	22	conj	_	LiLaflcat=n2
27	cura	cura	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	21	nsubj:pass	_	LiLaflcat=n1
28	feminis	femina	NOUN	A1	Case=Dat|Gender=Fem|InflClass=IndEurA|Number=Plur	21	obl:arg	_	LiLaflcat=n1
29	senibus	senex	NOUN	A3	Case=Dat|Gender=Masc|InflClass=IndEurX|Number=Plur	28	conj	_	LASLAVariant=1|LiLaflcat=n3
30	que	que	CCONJ	S	_	29	cc	_	LiLaflcat=i
31	et	et	CCONJ	S	_	32	cc	_	LASLAVariant=2|LiLaflcat=i
32	infirmissimo	infirmus	ADJ	C1	Case=Dat|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	28	conj	_	LiLaflcat=n6
33	cuique	quisque	DET	L	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Tot	32	det	_	LASLAVariant=2|LiLaflcat=p
34	ex	ex	ADP	R	_	35	case	_	LiLaflcat=i
35	familia	familia	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	32	nmod	_	LiLaflcat=n1
36	ipsi	ipse	DET	I	Case=Nom|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	37	nsubj	_	LiLaflcat=p
37	hebent	hebeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	LiLaflcat=v2|TraditionalMood=Indicativus|TraditionalTense=Praesens
38	mira	mirus	ADJ	C1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	39	amod	_	LiLaflcat=n6
39	diuersitate	diuersitas	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	37	obl	_	LiLaflcat=n3
40	naturae	natura	NOUN	A1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	39	nmod	_	LiLaflcat=n1
41	cum	cum	SCONJ	T	PronType=Rel	45	mark	_	LASLAVariant=3|LiLaflcat=i
42	iidem	idem	DET	I	Case=Nom|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	43	det	_	LiLaflcat=p
43	homines	homo	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Plur	45	nsubj	_	LiLaflcat=n3
44	sic	sic	ADV	M	PronType=Dem	45	advmod	_	LiLaflcat=i
45	ament	amo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	37	advcl	_	LiLaflcat=v1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
46	inertiam	inertia	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	45	obj	_	LiLaflcat=n1
47	et	et	CCONJ	S	_	48	cc	_	LASLAVariant=2|LiLaflcat=i
48	oderint	odi	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	45	conj	_	LiLaflcat=v3|TraditionalMood=Subiunctivus|TraditionalTense=Perfectum
49	quietem	quies	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	48	obj	_	LiLaflcat=n3

~~~


