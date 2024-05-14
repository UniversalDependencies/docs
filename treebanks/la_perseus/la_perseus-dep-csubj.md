---
layout: base
title:  'Statistics of csubj in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="la_perseus-dep-csubj-pass.html">csubj:pass</a></tt>.

135 nodes (0%) are attached to their parents as `csubj`.

70 instances of `csubj` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.19259259259259.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (105; 78% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (20; 15% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Sed	sed	CCONJ	c--------	_	4	cc	_	LId=sed1
2	quid	quis	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	4	obj	_	LId=quis1
3	temptare	tento	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	4	csubj	_	LId=tento1|TraditionalMood=Infinitivus|TraditionalTense=Praesens
4	nocebit	noceo	VERB	v3sfia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LId=noceo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
5	?	?	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	Quod	qui	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	2	nsubj	_	LId=qui1
2	facit	facio	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	LId=facio1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
4	auratum	auratus	ADJ	v-srppnn-	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	LId=auro1
5	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	et	et	CCONJ	c--------	_	8	cc	_	LId=et1
7	cuspide	cuspis	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	obl	_	LId=cuspis1
8	fulget	fulgeo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	LId=fulgeo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	acuta	acutus	ADJ	a-s---fb-	Case=Abl|Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No|LId=acutus1
10	;	;	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	pretium	pretium	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	operae	opera	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	attendere	attendo	VERB	v--pna---	Aspect=Imp|VerbForm=Inf|Voice=Act	1	csubj	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
5	.	.	PUNCT	u--------	_	1	punct	_	_

~~~


