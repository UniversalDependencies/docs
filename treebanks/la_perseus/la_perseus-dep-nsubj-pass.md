---
layout: base
title:  'Statistics of nsubj:pass in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="la_perseus-dep-nsubj-outer.html">nsubj:outer</a></tt>.

440 nodes (2%) are attached to their parents as `nsubj:pass`.

267 instances of `nsubj:pass` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.69090909090909.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (300; 68% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (48; 11% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (34; 8% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (32; 7% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (13; 3% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nsubj:pass	color:blue
1	Congesta	congero	VERB	v-prppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	4	nmod	_	LId=congero1|TraditionalMood=Participium|TraditionalTense=Perfectum
2	cremantur	cremo	VERB	v3ppip---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=cremo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	turea	tureus	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	4	amod	_	LId=tureus1
4	dona	donum	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	2	nsubj:pass	_	SpaceAfter=No|LId=donum1
5	,	,	PUNCT	u--------	_	6	punct	_	LId=comma1
6	dapes	daps	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	4	conj	_	SpaceAfter=No|LId=daps1
7	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
8	fuso	fundo	VERB	v-srppnb-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	10	nmod	_	LId=fundo1|TraditionalMood=Participium|TraditionalTense=Perfectum
9	crateres	crater	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	conj	_	LId=crater1
10	olivo	olivum	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	9	nmod	_	SpaceAfter=No|LId=olivum1
11	.	.	PUNCT	u--------	_	2	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Quod	qui	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	3	nsubj:pass	_	LId=qui1
2	tamen	tamen	ADV	d--------	_	9	advmod	_	LId=tamen1
3	admissum	admitto	VERB	v-srppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	9	ccomp	_	LId=admitto1|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
4	,	,	PUNCT	u--------	_	7	punct	_	LId=comma1
5	quae	qui	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	7	nsubj	_	LId=qui1
6	sit	sum	AUX	v3spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	LId=sum1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
7	vindicta	vindicta	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No|LId=vindicta1
8	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
9	docebo	doceo	VERB	v1sfia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LId=doceo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
10	.	.	PUNCT	u--------	_	9	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
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


