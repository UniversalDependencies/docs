---
layout: base
title:  'Statistics of nsubj:outer in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="la_perseus-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:outer	color:blue
1	non	non	PART	d--------	_	5	advmod:neg	_	LId=non1
2	sum	sum	AUX	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	ego	ego	PRON	p-s---mn-	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj:outer	_	LId=ego1
4	qui	qui	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	LId=qui1
5	fueram	sum	VERB	v1slia---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pqp|VerbForm=Fin|Voice=Act	0	root	_	LId=sum1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Plusquamperfectum
6	:	:	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


