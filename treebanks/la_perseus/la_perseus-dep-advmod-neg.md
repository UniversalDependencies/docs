---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_perseus-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_perseus-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_perseus-dep-advmod-tmod.html">advmod:tmod</a></tt>.

274 nodes (1%) are attached to their parents as `advmod:neg`.

267 instances of `advmod:neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74452554744526.

The following 9 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (185; 68% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (26; 9% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (24; 9% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (15; 5% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (10; 4% instances), <tt><a href="la_perseus-pos-ADP.html">ADP</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (9; 3% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 advmod:neg	color:blue
1	Non	non	PART	d--------	_	11	advmod:neg	_	LId=non1
2	Simois	Simois	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	LId=Simois1
3	tibi	tu	PRON	p-s---md-	Case=Dat|Number=Sing|Person=2|PronType=Prs	11	obl:arg	_	SpaceAfter=No|LId=tu1
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	nec	neque	CCONJ	c--------	_	6	cc	_	_
6	Xanthus	Xanthus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	SpaceAfter=No|LId=Xanthus1
7	,	,	PUNCT	u--------	_	8	punct	_	LId=comma1
8	nec	neque	CCONJ	c--------	_	10	cc	_	_
9	Dorica	Doricus	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	10	amod	_	LId=Doricus1
10	castra	castrum	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	2	conj	_	LId=castrum1
11	defuerint	desum	VERB	v3ptia---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
12	;	;	PUNCT	u--------	_	11	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:neg	color:blue
1	ille	ille	DET	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	7	nsubj	_	LId=ille1
2	ducem	dux	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	LId=dux1
3	haud	haud	PART	d--------	_	4	advmod:neg	_	LId=haud1
4	timidis	timidus	ADJ	a-p---mb-	Case=Abl|Gender=Masc|Number=Plur	6	amod	_	LId=timidus1
5	vadentem	vado	VERB	v-sppafa-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	2	nmod	_	LId=vado1|TraditionalMood=Participium|TraditionalTense=Praesens
6	passibus	passus	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	7	obl	_	LId=passus3
7	aequat	aequo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=aequo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	.	.	PUNCT	u--------	_	7	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:neg	color:blue
1	non	non	PART	d--------	_	2	advmod:neg	_	LId=non1
2	impune	impunis	ADV	d--------	_	5	advmod	_	_
3	illa	ille	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	nsubj	_	LId=ille1
4	rogata	rogo	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	5	advcl	_	LId=rogo1|TraditionalMood=Participium|TraditionalTense=Perfectum
5	venit	venio	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=venio1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


