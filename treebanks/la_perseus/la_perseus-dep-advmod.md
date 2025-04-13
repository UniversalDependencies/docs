---
layout: base
title:  'Statistics of advmod in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="la_perseus-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_perseus-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_perseus-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_perseus-dep-advmod-tmod.html">advmod:tmod</a></tt>.

1353 nodes (5%) are attached to their parents as `advmod`.

1181 instances of `advmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07021433850702.

The following 18 pairs of parts of speech are connected with `advmod`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1069; 79% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (92; 7% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (84; 6% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (33; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (16; 1% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="la_perseus-pos-ADP.html">ADP</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-PART.html">PART</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	nec	neque	CCONJ	c--------	_	6	cc	_	_
2	Teucris	Teucer	PROPN	n-p---md-	Case=Dat|Gender=Masc|Number=Plur	3	obl	_	LId=Teucer1
3	addita	addo	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	4	amod	_	LId=addo1|TraditionalMood=Participium|TraditionalTense=Perfectum
4	Iuno	Iuno	PROPN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	LId=Juno1
5	usquam	usquam	ADV	d--------	_	6	advmod	_	LId=usquam1
6	aberit	absum	VERB	v3stia---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
7	;	;	PUNCT	u--------	_	6	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod	color:blue
1	Ne	ne	ADV	d--------	_	4	advmod	_	_
2	c	que	CCONJ	c--------	_	4	cc	_	LId=que1
3	erit	sum	AUX	v3sfia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Futurum
4	dubitabile	dubitabilis	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	LId=dubitabilis1
5	verum	verum	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	SpaceAfter=No|LId=verum2
6	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	quae	qui	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	3	nsubj	_	LId=qui1
2	modo	modo	ADV	d--------	_	3	advmod	_	LId=modo1
3	vena	vena	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	LId=vena1
4	fuit	sum	AUX	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	LId=sum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
6	sub	sub	ADP	r--------	_	8	case	_	LId=sub1
7	eodem	idem	DET	p-s---nb-	Case=Abl|Gender=Neut|Number=Sing|PronType=Dem	8	det	_	LId=idem1
8	nomine	nomen	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	9	obl	_	LId=nomen1
9	mansit	maneo	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=maneo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
10	;	;	PUNCT	u--------	_	9	punct	_	LId=punc1

~~~


