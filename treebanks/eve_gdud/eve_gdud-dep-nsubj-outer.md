---
layout: base
title:  'Statistics of nsubj:outer in UD_Even-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Even-GDUD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="eve_gdud-dep-nsubj.html">nsubj</a></tt>.

2 nodes (1%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="eve_gdud-pos-ADV.html">ADV</a></tt>-<tt><a href="eve_gdud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="eve_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="eve_gdud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:outer	color:blue
1	ia-cˇan-ti	ia-cˇan-ti	NOUN	_	Definite=Def|Number[psor]=Plur|Person[psor]=1|Poss=Yes	4	nsubj	_	Gloss=what-DIM.DEF-POSS.1PL|Derivation=Dim
2	o.	o.	DET	_	Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Dem	4	det	_	Gloss=our
3	tu:-cˇan-ti	tu:-cˇan-ti	NOUN	_	Definite=Def|Number[psor]=Plur|Person[psor]=1|Poss=Yes	4	nsubj:outer	_	Gloss=fire-DIM.DEF-POSS.1PL|Derivation=Dim
4	ele:r	ele:r	ADV	_	Deixis=Prox	5	advmod	_	Gloss=here
5	bi-d-de-n	bi-d-de-n	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3	0	root	_	SpaceAfter=No|Gloss=be-PROG-NFUT-3SG|Tense=NonPast
6	,	,	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:outer	color:blue
1	ila-ja:Ãi	ila-ja:Ãi	VERB	_	VerbForm=Conv	4	advcl	_	Gloss=stand.up-AUG.CVB|Derivation=Aug
2	ecˇ	ecˇ	ADV	_	Deixis=Prox	4	advmod	_	Gloss=PROX.QUAL-AUG|Derivation=Aug
3	i-je	i	PRON	_	Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Gloss=3SG
4	ila-baha-d-ni	ila-baha-d-ni	VERB	_	Mood=Ind|Number=Sing|Person=3	0	root	_	Gloss=stand.up-AUG.VB-NFUT-3SG|Tense=NonPast
5	abaga-ń	abaga-ń	NOUN	_	_	4	nsubj:outer	_	Gloss=grandfather-AUG.DEF|Derivation=Aug
6	Ãa	Ãa	DET	_	PronType=Dem	5	det	_	Gloss=DEF

~~~


