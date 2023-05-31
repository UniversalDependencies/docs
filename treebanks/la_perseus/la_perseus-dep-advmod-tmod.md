---
layout: base
title:  'Statistics of advmod:tmod in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_perseus-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_perseus-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_perseus-dep-advmod-neg.html">advmod:neg</a></tt>.

231 nodes (1%) are attached to their parents as `advmod:tmod`.

201 instances of `advmod:tmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.59307359307359.

The following 6 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (185; 80% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (17; 7% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (15; 6% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (12; 5% instances), <tt><a href="la_perseus-pos-ADP.html">ADP</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:tmod	color:blue
1	alius	alius	DET	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Con	5	det	_	LId=alius2
2	Latio	Latium	PROPN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	obl	_	LId=Latium1
3	iam	iam	ADV	d--------	AdvType=Tim	4	advmod:tmod	_	LId=jam1
4	partus	pario	VERB	v-srppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	LId=pario2|TraditionalMood=Participium|TraditionalTense=Perfectum
5	Achilles	Achilles	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	_	SpaceAfter=No|LId=Achilles1
6	,	,	PUNCT	u--------	_	7	punct	_	LId=comma1
7	natus	nascor	VERB	v-srpdmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	5	amod	_	TraditionalMood=Participium|TraditionalTense=Perfectum
8	et	et	CCONJ	c--------	_	9	advmod:emph	_	LId=et1
9	ipse	ipse	DET	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	7	nsubj	_	LId=ipse1
10	dea	dea	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No|LId=dea1
11	;	;	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:tmod	color:blue
1	nunc	nunc	ADV	d--------	AdvType=Tim	3	advmod:tmod	_	LId=nunc1
2	autem	autem	PART	c--------	_	3	discourse	_	LId=autem1
3	vilia	vilis	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	0	root	_	LId=vilis1
4	sunt	sum	AUX	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	LId=sum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:tmod	color:blue
1	nobis	nos	PRON	p-p---mb-	Case=Abl|Number=Plur|Person=1|PronType=Prs	3	obl	_	_
2	cum	cum	ADP	_	AdpType=Post	1	case	_	_
3	versari	verso	VERB	v--pnp---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	7	xcomp	_	_
4	iam	iam	ADV	d--------	AdvType=Tim	5	advmod:tmod	_	LId=jam1
5	diutius	diu	ADV	d-------c	Degree=Cmp	7	advmod	_	_
6	non	non	PART	d--------	_	7	advmod:neg	_	LId=non1
7	potes	possum	VERB	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=possum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	;	;	PUNCT	u--------	_	7	punct	_	LId=punc1

~~~


