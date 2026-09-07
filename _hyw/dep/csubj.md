---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the clause contains a copula, the root of the clause is the complement of the copula rather than the copular verb itself. The dependent is the main lexical verb or other predicate of the subject clause.

For the clausal subject of a passive verb or verb group, the subtype [csubj:pass]() is used.

~~~ conllu
# visual-style 3 6 csubj color:blue
1	Ճիշտ	ճիշտ	ADJ	_	Degree=Pos	3	xcomp	_	Translit=Č̣išt|LTranslit=č̣išt
2	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
3	ըլլայ	ըլլալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=ëllay|LTranslit=ëllal
4	այս	այս	DET	_	Deixis=Prox|PronType=Dem	5	det	_	Translit=ays|LTranslit=ays
5	վերջինը	վերջին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	obj	_	Translit=verǰinë|LTranslit=verǰin
6	նկատել	նկատել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	3	csubj	_	Translit=nkatel|LTranslit=nkatel
7	թատերգական	թատերգական	ADJ	_	_	8	amod	_	Translit=t’atergakan|LTranslit=t’atergakan
8	տեսակ	տեսակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	xcomp	_	Translit=tesak|LTranslit=tesak
9	մը	մը	DET	_	PronType=Art	8	det	_	Translit=më|LTranslit=më|
~~~

~~~ conllu
# visual-style 7 3 csubj color:blue
1	Կուսակցութեան	կուսակցութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	Translit=Kowsakc’owt’ean|LTranslit=kowsakc’owt’iwn
2	համար	համար	ADP	_	AdpType=Post	1	case	_	Translit=hamar|LTranslit=hamar
3	իշխելը	իշխել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	7	csubj	_	Translit=išxelë|LTranslit=išxel
4	նպատակի	նպատակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	obj	_	Translit=npataki|LTranslit=npatak
5	մը	մը	DET	_	PronType=Art	4	det	_	Translit=më|LTranslit=më
6	հասնելու	հասնիլ	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	7	nmod:poss	_	Translit=hasnelow|LTranslit=hasnil
7	միջոց	միջոց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=miǰoc’|LTranslit=miǰoc’
8	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=čē|LTranslit=em
~~~

We also analyze the nominal predicates with clausal subjects formed by subordinating conjunction _որ_/_or_ “that” or _թէ_/_tʼē_ “whether” similarly.

~~~ conllu
# visual-style 1 9 csubj color:blue
1	Պարզ	պարզ	ADJ	_	Degree=Pos	0	root	_	Translit=Parz|LTranslit=parz
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
3	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
4	որ	որ	SCONJ	_	_	9	mark	_	Translit=or|LTranslit=or
5	հատածը	հատած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	Translit=hataçë|LTranslit=hataç
6	եւս	եւս	ADV	_	_	5	advmod:emph	_	Translit=ews|LTranslit=ews
7	կարեւոր	կարեւոր	ADJ	_	Degree=Pos	8	amod	_	Translit=karewor|LTranslit=karewor
8	դեր	դեր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	obj	_	Translit=der|LTranslit=der
9	ունի	ունիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	Translit=owni|LTranslit=ownim
~~~

~~~ conllu
# visual-style 4 11 csubj color:blue
1	Մէկ	մէկ	DET	_	PronType=Art	2	det	_	Translit=Mēk|LTranslit=mēk
2	խօսքով	խօսք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	4	parataxis	_	Translit=xòsk’ov|LTranslit=xòsk’|SpaceAfter=No
3	՝	՝	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	կարեւոր	կարեւոր	ADJ	_	Degree=Pos	0	root	_	Translit=karewor|LTranslit=karewor
5	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=čē|LTranslit=em|SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
7	թէ	թէ	SCONJ	_	_	11	mark	_	Translit=t’ē|LTranslit=t’ē
8-9	ի՛նչ	_	_	_	_	_	_	_	Translit=i՛nč
8	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	11	obj	_	Translit=inč|LTranslit=inč
9	՛	՛	PUNCT	_	_	8	punct	_	Translit=՛|LTranslit=՛
10	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	11	aux	_	Translit=kë|LTranslit=kë
11	տեսնես	տեսնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=2|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	Translit=tesnes|LTranslit=tesnel
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:56 CEST -->
