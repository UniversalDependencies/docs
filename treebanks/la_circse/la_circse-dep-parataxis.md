---
layout: base
title:  'Statistics of parataxis in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="la_circse-dep-parataxis-reporting.html">parataxis:reporting</a></tt>.

38 nodes (0%) are attached to their parents as `parataxis`.

33 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.76315789473684.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (20; 53% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	effare	effor	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v1
2	casus	casus	NOUN	A4	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	5	nsubj	_	LiLaflcat=n4
3	quis	quis	PRON	K	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Int	2	det	_	LASLAVariant=1|LiLaflcat=p
4	rates	ratis	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur	5	obj	_	LiLaflcat=n3
5	hausit	haurio	VERB	B4	Aspect=Perf|InflClass=LatI|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	LiLaflcat=v4
6	meas	meus	DET	F	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	LiLaflcat=n6

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 19 parataxis	color:blue
1	non	non	PART	P	Polarity=Neg	2	advmod:neg	_	LiLaflcat=i
2	quae	qui	PRON	J	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	LASLAVariant=1|LiLaflcat=p
3	uerno	uernus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	6	amod	_	LiLaflcat=n6
4	mobile	mobilis	ADJ	C4	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	5	amod	_	LiLaflcat=n7
5	carmen	carmen	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	7	obj	_	LASLAVariant=1|LiLaflcat=n3
6	ramo	ramus	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	7	obl:lmod	_	LiLaflcat=n2
7	cantat	canto	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	_	LiLaflcat=v1
8	tristis	tristis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	9	amod	_	LiLaflcat=n7
9	aedon	aedon	NOUN	A7	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing|Variant=Greek	30	nsubj	_	LiLaflcat=n,n3
10	Ityn	itys	PROPN	A7	Case=Acc|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing|Variant=Greek	13	obj	_	LASLAVariant=N|LiLaflcat=n3
11	in	in	ADP	R	AdpType=Prep	14	case	_	LiLaflcat=i
12	uarios	uarius	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	14	amod	_	LiLaflcat=n6
13	modulata	modulor	VERB	B1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	9	acl	_	LiLaflcat=v1
14	sonos	sonus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	13	obl	_	LiLaflcat=n2
15	non	non	PART	P	Polarity=Neg	19	advmod:neg	_	LiLaflcat=i
16	quae	qui	PRON	J	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	27	nsubj	_	LASLAVariant=1|LiLaflcat=p
17	tectis	tectum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	20	obl:lmod	_	LiLaflcat=n2
18	Bistonis	bistonis	ADJ	C2	Case=Nom|Degree=Pos|Gender=Fem,Masc,Neut|InflClass=IndEurX|NameType=Nat|Number=Sing	19	amod	_	LASLAVariant=A|LiLaflcat=n7
19	ales	ales	NOUN	A3	Case=Nom|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing	9	parataxis	_	LASLAVariant=1|LiLaflcat=n3
20	residens	resideo	VERB	B2	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Fem,Masc|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	19	acl	_	LiLaflcat=v2
21	summis	superus	ADJ	C1	Case=Abl|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	17	amod	_	LiLaflcat=n6
22	impia	impius	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	24	amod	_	LiLaflcat=n6
23	diri	dirus	ADJ	C1	Case=Gen|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	25	amod	_	LiLaflcat=n6
24	furta	furtum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	27	obj	_	LiLaflcat=n2
25	mariti	maritus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	24	nmod	_	LASLAVariant=1|LiLaflcat=n2
26	garrula	garrulus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	27	advcl:pred	_	LiLaflcat=n6
27	narrat	narro	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl:relcl	_	LiLaflcat=v1
28	lugere	lugeo	VERB	B2	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	30	xcomp	_	LiLaflcat=v2
29	tuam	tuus	DET	F	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	33	det	_	LiLaflcat=n6
30	poterit	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
31	digne	digne	ADV	M	Degree=Pos	28	advmod	_	LiLaflcat=i
32	conquesta	conqueror	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	30	advcl	_	LiLaflcat=v3
33	domum	domus	NOUN	A6	Case=Acc|Gender=Fem|InflClass=IndEurU|Number=Sing	28	obj	_	LiLaflcat=n4

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 parataxis	color:blue
1	en	en	INTJ	U	_	9	discourse	_	LiLaflcat=i
2	blandas	blandus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Plur	3	amod	_	LiLaflcat=n6
3	manus	manus	NOUN	A4	Case=Acc|Gender=Fem|InflClass=IndEurU|Number=Plur	6	obj	_	LASLAVariant=1|LiLaflcat=n4
4	ad	ad	ADP	R	AdpType=Prep	5	case	_	LASLAVariant=2|LiLaflcat=i
5	genua	genu	NOUN	A4	Case=Acc|Gender=Neut|InflClass=IndEurU|Number=Plur	6	obl:lmod	_	LiLaflcat=n4
6	tendens	tendo	VERB	B3	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	9	advcl:pred	_	LiLaflcat=v3
7	uoce	uox	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	9	obl	_	LiLaflcat=n3
8	miseranda	miserandus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	7	amod	_	LiLaflcat=n6
9	rogat	rogo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
10	scelus	scelus	NOUN	A3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	9	parataxis	_	LiLaflcat=n3
11	nefandum	nefandus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	10	amod	_	LiLaflcat=n6
12	triste	tristis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	11	conj	_	LiLaflcat=n7
13	et	et	CCONJ	S	_	15	cc	_	LASLAVariant=2|LiLaflcat=i
14	aspectu	aspectus	NOUN	A4	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing	15	obl	_	LiLaflcat=n4
15	horridum	horridus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	12	conj	_	LiLaflcat=n6

~~~


