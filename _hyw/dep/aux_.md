---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "hy/dep/aux.html"
udver: '2'
---

An `aux` (auxiliary) of a clause is a function word associated with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality. 
In Western Armenian, there are several [auxiliary verbs](AUX); _եմ_/_em_ “be”, its variant (with separate lemma) _ըլլամ_/_ëllam_ (_ըլլալ_/_ěllal_) “be repeatedly / habitually”,  _պիտի_/_piti_ or _պէտք է_/_pētkʼ ē_ “must/will”, _կը (կու, կ')/kë (kow, k')_ “do”,  _կոր_/_kor_, _ունիմ_/_ownim_ “have”, _կամ_/_kam_ “exist”, _տալ_/_tal_ “cause / make someone perform action”.

The forms of _եմ_/_em_ (_ըլլամ_/_ëllam_ (_ըլլալ_/_ěllal_)) “be” are used to construct periphrastic and “secondary compound” tenses (in several moods).

Besides `aux`, the verb _եմ_/_em_ may also act as a [copula](cop), when they occur with nominal predicates.

Note that in Western Armenian, the auxiliary verb _տալ_/_tal_ used to construct causative constructions is labeled [aux:caus](). We use [aux:ex]() for the finite form of existentials _կամ_/_kam_ “be, exist” and _ունիմ_/_ownim_ “have” in combination with resultative participle.


~~~ conllu
# visual-style 1 2 aux color:blue
1	Կեցած	կենալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=Kec’aç|LTranslit=kenal
2	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	1	aux	_	Translit=ēr|LTranslit=em
3	քանի	քանի	DET	_	ExtPos=DET|PronType=Int	5	det	_	Translit=k’ani|LTranslit=k’ani
4	մը	մը	DET	_	PronType=Art	3	fixed	_	Translit=më|LTranslit=më
5	քայլ	քայլ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	obl	_	Translit=k’ayl|LTranslit=k’ayl
6	անդին	անդին	ADP	_	AdpType=Post	5	case	_	Translit=andin|LTranslit=andin|SpaceAfter=No
~~~

~~~ conllu
# visual-style 2 1 aux color:blue
# visual-style 7 6 aux color:blue
1	Կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	2	aux	_	Translit=K,|LTranslit=kë|SpaceAfter=No
2	արժէ	արժել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	7	parataxis	_	Translit=aržē|LTranslit=aržel
3	գտնել	գտնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	2	xcomp	_	Translit=gtnel|LTranslit=gtnel
4	պատասխանը	պատասխան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj	_	Translit=patasxanë|LTranslit=patasxan|SpaceAfter=No
5	.	.	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.
6	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	7	aux	_	Translit=piti|LTranslit=piti
7-8	հանդիպէ՞իք	_	_	_	_	_	_	_	Translit=handipē?ik’
7	հանդիպէիք	հանդիպիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=handipēik’|LTranslit=handipil
8	՞	՞	PUNCT	_	_	7	punct	_	Translit=?|LTranslit=?
~~~

~~~ conllu
# visual-style 2 3 aux color:blue
1	Որոշումը	որոշում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	nsubj:pass	_	Translit=Orošowmë|LTranslit=orošowm
2	առնուած	առնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=aṙnowaç|LTranslit=aṙnel
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=ē|LTranslit=em
4	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	6	nummod	_	Translit=erkow|LTranslit=erkow
5	երրորդ	երրորդ	ADJ	_	NumForm=Word|NumType=Ord	4	flat:frac	_	Translit=errord|LTranslit=errord
6	մեծամասնութեամբ	մեծամասնութիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	2	obl	_	Translit=meçamasnowt’eamb|LTranslit=meçamasnowt’iwn
~~~


