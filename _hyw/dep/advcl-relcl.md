---
layout: relation
title: 'advcl:relcl'
shortdef: 'relative clause modifier of the clause'
udver: '2'
---

The `advcl:relcl` relation is used for indicating relative clauses with the relative adverbial pronouns.
The antecedent of the pronoun is the entire superordinate clause.

~~~ conllu
# visual-style 1 6 advcl:relcl color:blue
text = Վայրկեաններ կ՚ըլլային ուր կը քալէին անխօս։
1	Վայրկեաններ	վայրկեան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	Translit=Vayrkeanner|LTranslit=vayrkean
2	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
3	ըլլային	ըլլալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=ëllayin|LTranslit=ëllal
4	ուր	ուր	ADV	_	PronType=Rel	6	advmod	_	Translit=owr|LTranslit=owr
5	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	6	aux	_	Translit=kë|LTranslit=kë
6	քալէին	քալել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	1	advcl:relcl	_	Translit=k’alēin|LTranslit=k’alel
7	անխօս	անխօս	ADJ	_	Degree=Pos	6	xcomp	_	Translit=anxòs|LTranslit=anxòs|SpaceAfter=No
8	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 1 6 advcl:relcl color:blue
text = Չզարմացաւ ուրեմն երբ կարգը էրկանը եկաւ մեկնելու:
1	Չզարմացաւ	զարմանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=Čzarmac’aw|LTranslit=zarmanal
2	ուրեմն	ուրեմն	PART	_	_	1	discourse	_	Translit=owremn|LTranslit=owremn
3	երբ	երբ	ADV	_	PronType=Rel	6	advmod	_	Translit=erb|LTranslit=erb
4	կարգը	կարգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	Translit=kargë|LTranslit=karg
5	էրկանը	էրիկ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	6	obj	_	Translit=ērkanë|LTranslit=ērik
6	եկաւ	գալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	1	advcl:relcl	_	Translit=ekaw|LTranslit=gal
7	մեկնելու	մեկնիլ	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	6	xcomp	_	Translit=meknelow|LTranslit=meknil|SpaceAfter=No
8	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:11 CET 2020 -->
