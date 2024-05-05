---
layout: base
title:  'Statistics of csubj:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `csubj:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="la_circse-dep-csubj-pass.html">csubj:pass</a></tt>.

25 nodes (0%) are attached to their parents as `csubj:relcl`.

17 instances of `csubj:relcl` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 7 pairs of parts of speech are connected with `csubj:relcl`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (18; 72% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:relcl	color:blue
1	quod	qui	PRON	J	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	2	obj	_	LASLAVariant=1|LiLaflcat=p
2	metuit	metuo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:relcl	_	LiLaflcat=v3
3	auget	augeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
4	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	LASLAVariant=1|LiLaflcat=p
5	scelus	scelus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	7	obj	_	LiLaflcat=n3
6	scelere	scelus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	7	obl	_	LiLaflcat=n3
7	obruit	obruo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:relcl	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 csubj:relcl	color:blue
1	cum	cum	SCONJ	T	PronType=Rel	2	mark	_	LASLAVariant=3|LiLaflcat=i
2	defecere	deficio	VERB	B5	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	LiLaflcat=v5|TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	5	nsubj	_	LASLAVariant=1|LiLaflcat=p
4	modo	modo	ADV	M	AdvType=Tim	5	advmod:tmod	_	LASLAVariant=1|LiLaflcat=i
5	hospes	hospes	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	7	csubj:relcl	_	LiLaflcat=n3
6	fuerat	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Plusquamperfectum
7	monstrator	monstrator	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	0	root	_	LiLaflcat=n3
8	hospitii	hospitium	NOUN	A2	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nmod	_	LiLaflcat=n2
9	et	et	CCONJ	S	_	10	cc	_	LASLAVariant=2|LiLaflcat=i
10	comes	comes	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	7	conj	_	LiLaflcat=n3
11	proximam	propior	ADJ	C	Case=Acc|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	12	amod	_	LiLaflcat=null
12	domum	domus	NOUN	A6	Case=Acc|Gender=Fem|InflClass=IndEurU|Number=Sing	15	obj	_	LiLaflcat=n4
13	non	non	PART	P	Polarity=Neg	14	advmod:neg	_	LiLaflcat=i
14	inuitati	inuito	VERB	B1	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	15	advcl:pred	_	LiLaflcat=v1|TraditionalMood=Participium|TraditionalTense=Perfectum
15	adeunt	adeo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 csubj:relcl	color:blue
1	peruince	peruinco	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
2	Theseu	theseus	PROPN	A7	Case=Voc|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing|Variant=Greek	1	vocative	_	LASLAVariant=N|LiLaflcat=n2,n3
3	quicquid	quisquis	DET	J	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	LASLAVariant=1|LiLaflcat=p
4	alto	altus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	6	amod	_	LiLaflcat=n6
5	in	in	ADP	R	AdpType=Prep	6	case	_	LiLaflcat=i
6	pectore	pectus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	7	obl:lmod	_	LiLaflcat=n3
7	remanet	remaneo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:relcl	_	LiLaflcat=v2
8	pauoris	pauor	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	3	nmod	_	LiLaflcat=n3
9	neue	neue	CCONJ	S	_	13	cc	_	LASLAVariant=1|LiLaflcat=i
10	te	tu	PRON	E	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	13	obj	_	LiLaflcat=p
11	fructu	fructus	NOUN	A4	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing	13	obl	_	LiLaflcat=n4
12	optimo	bonus	ADJ	C1	Case=Abl|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	11	amod	_	LiLaflcat=n6
13	frauda	fraudo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v1
14	laborum	labor	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Plur	11	nmod	_	LASLAVariant=1|LiLaflcat=n3
15	quae	qui	PRON	J	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	17	nsubj	_	LASLAVariant=1|LiLaflcat=p
16	fuit	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	cop	_	LASLAVariant=1|LiLaflcat=v6
17	durum	durus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	20	csubj:relcl	_	LiLaflcat=n6
18	pati	patior	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	17	xcomp	_	LiLaflcat=v5
19	meminisse	memini	VERB	B3	Aspect=Perf|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	20	xcomp	_	LiLaflcat=v3
20	dulce	dulcis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	1	conj	_	LiLaflcat=n7
21	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	LASLAVariant=1|LiLaflcat=v6

~~~


