---
layout: base
title:  'Statistics of ccomp in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="la_perseus-dep-ccomp-reported.html">ccomp:reported</a></tt>.

354 nodes (1%) are attached to their parents as `ccomp`.

227 instances of `ccomp` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.88983050847458.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (333; 94% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	ipsa	ipse	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	nsubj	_	LId=ipse1
2	canas	cano	VERB	v2spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	LId=cano1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
3	oro	oro	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=oro1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1
5	'	'	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 ccomp	color:blue
1	Non	non	PART	d--------	_	6	advmod:neg	_	LId=non1
2	mehercules	Hercules	INTJ	e--------	_	6	discourse	_	LId=Hercules1
3	patria	patria	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	LId=patria1
4	melior	bonus	ADJ	a-s---fnc	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	5	ccomp	_	LId=bonus1
5	dici	dico	VERB	v--pnp---	Aspect=Imp|VerbForm=Inf|Voice=Pass	6	xcomp	_	LId=dico2|TraditionalMood=Infinitivus|TraditionalTense=Praesens
6	potest	possum	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=possum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
7	,	,	PUNCT	u--------	_	8	punct	_	LId=comma1
8	si	si	SCONJ	c--------	_	10	mark	_	LId=si1
9	homines	homo	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	LId=homo1
10	haberet	habeo	VERB	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	LId=habeo1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
11	.	.	PUNCT	u--------	_	6	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 ccomp	color:blue
1	illic	illic	ADV	d--------	_	7	advmod	_	LId=illic2
2	quidquid	quisquis	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	7	advcl	_	LId=quisquis1
3	ero	sum	AUX	v1sfia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	2	cop	_	LId=sum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
4	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
5	semper	semper	ADV	d--------	AdvType=Tim	7	advmod:tmod	_	LId=semper1
6	tua	tuus	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	8	det	_	_
7	dicar	dico	VERB	v1sfip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	LId=dico2|TraditionalMood=Indicativus|TraditionalTense=Futurum
8	imago	imago	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	7	ccomp	_	SpaceAfter=No|LId=imago1
9	:	:	PUNCT	u--------	_	7	punct	_	LId=punc1

~~~


