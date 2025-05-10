---
layout: base
title:  'Statistics of csubj:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `csubj:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="la_circse-dep-csubj-pass.html">csubj:pass</a></tt>.

41 nodes (0%) are attached to their parents as `csubj:relcl`.

30 instances of `csubj:relcl` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.97560975609756.

The following 8 pairs of parts of speech are connected with `csubj:relcl`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (31; 76% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj:relcl	color:blue
1	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	2	nsubj	_	LASLAVariant=1|LiLaflcat=p
2	pauet	paueo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj:relcl	_	LiLaflcat=v2
3	uanos	uanus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	4	amod	_	LiLaflcat=n6
4	metus	metus	NOUN	A4	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Plur	2	obj	_	LiLaflcat=n4
5	ueros	uerus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	6	obj	_	LiLaflcat=n6
6	meretur	mereor	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v2

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj:relcl	color:blue
1	magnum	magnus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc,Neut|InflClass=IndEurO|Number=Sing	7	ccomp	_	LiLaflcat=n6
2	esse	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	1	cop	_	LASLAVariant=1|LiLaflcat=v6
3	magna	magnus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	4	amod	_	LiLaflcat=n6
4	mole	moles	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	6	obl	_	LiLaflcat=n3
5	quod	qui	PRON	J	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj:pass	_	LASLAVariant=1|LiLaflcat=p
6	petitur	peto	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	csubj:relcl	_	LiLaflcat=v3
7	scias	scio	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v4

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


