---
layout: base
title:  'Statistics of csubj:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `csubj:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="la_circse-dep-csubj-pass.html">csubj:pass</a></tt>.

55 nodes (0%) are attached to their parents as `csubj:relcl`.

40 instances of `csubj:relcl` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.21818181818182.

The following 9 pairs of parts of speech are connected with `csubj:relcl`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (41; 75% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 2% instances).


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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 csubj:relcl	color:blue
1	tela	telum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	6	obj	_	_
2	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	4	nsubj	_	_
3	fuerit	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	pius	pius	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	6	csubj:relcl	_	_
5	rogante	rogo	VERB	B1	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	6	advcl:abs	_	_
6	ponat	pono	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	matre	mater	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nsubj	_	_
8	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	11	nsubj	_	_
9	non	non	PART	P	Polarity=Neg	11	advmod:neg	_	_
10	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	pius	pius	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	12	csubj:relcl	_	_
12	incipiat	incipio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
13	a	ab	ADP	R	AdpType=Prep	14	case	_	_
14	me	ego	PRON	E	Case=Abl|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	12	obl	_	_

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


