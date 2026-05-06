---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "axm/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a form of the [auxiliary verbs](AUX) _եմ_ “be”, and its variants (with separate lemma) _լինիմ_/_linim_ “be repeatedly / habitually”, also the verbal auxiliaries  _ունիմ_/_ownim_ “have”, _կամ_/_kam_ “exist”, and partical-like auxiliaries _պիտի (պիտ, տի)_/_piti (pit, ti)_ “must/will”, _կու (կոյ, կ-)_/_kow (koy, k-)_ “do/will” and the negative auxiliaries _չի (չ-)_/_či (č-)_ “do/es not”, _ոչ/oč_ “do/es not” used to construct the periphrastic and the “secondary compound” tenses (in several moods). 

Besides `aux`, the forms of _եմ_/_em_ and  _լինիմ_/_linim_ may also act as a [copula](cop).

Note that in Middle Armenian the auxiliary verb _տալ_ used to construct causative constructions is labeled [aux:caus]().

~~~ conllu
# visual-style 4 3 aux color:blue
1	էգ	էգ	ADJ	_	Degree=Pos	2	amod	_	_
2	իժ	իժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	խայթել	խայթել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
~~~

~~~ sdparse
եւ այս օձս յորժամ ի գնալն լինի , նայ զգլուխն բարձր կենայ \n and when this snake happens to be on the move , it keeps its head raised
aux(գնալն, լինի)
aux(move, to-be)
~~~

~~~ sdparse
(այլազգիք) որ այն շմորոյն պատճառք լինին լել \n (the foreigners) who happen to have been the cause of that strife
aux(լել, լինին)
aux(been, have)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:17 CET -->
