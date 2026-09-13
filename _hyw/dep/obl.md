---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.

The `obl` relation can be further specified by the case. In conjunction with the [case]() relation, it provides a uniform analysis for:

* variant forms with case:

~~~ conllu
# visual-style 1 6 obl color:blue
1	Գող	գող	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Goġ|LTranslit=goġ
2	մըն	մը	DET	_	PronType=Art	1	det	_	Translit=mën|LTranslit=më
3	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	1	cop	_	Translit=ēr|LTranslit=em
4	Զաբուղոն	Զաբուղոն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	1	nsubj	_	Translit=Zabowġon|LTranslit=Zabowġon
5	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	6	det:poss	_	Translit=mer|LTranslit=menk’
6	գեղին	գեղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	1	obl	_	Translit=geġin|LTranslit=geġ
7	մէջ	մէջ	ADP	_	AdpType=Post	6	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
8	.	.	PUNCT	_	_	13	punct	_	Translit=.|LTranslit=.
~~~

* Nominative, dative, ablative, and instrumental alternations where the prepositional construction gets a similar analysis to the bare noun phrase:

~~~ conllu
# visual-style 5 4 obl color:blue
1	Նշանտուքը	նշանտուք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=Nšantowk’ë|LTranslit=nšantowk’
2	Պատրիարքարանի	պատրիարքարան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	Translit=Patriark’arani|LTranslit=patriark’aran
3	մեծ	մեծ	ADJ	_	Degree=Pos	4	amod	_	Translit=meç|LTranslit=meç
4	դահլիճը	դահլիճ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	obl	_	Translit=dahlič̣ë|LTranslit=dahlič̣
5	կատարուած	կատարուիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=katarowaç|LTranslit=katarowil
6	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	5	aux	_	Translit=čēr|LTranslit=em
7	հարկաւ	հարկաւ	PART	_	_	5	discourse	_	Translit=harkaw|LTranslit=harkaw|SpaceAfter=No
8	:	:	PUNCT	_	Foreign=Yes	5	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 2 4 obl color:blue
1	հանդիսատեսներ	հանդիսատես	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	Translit=handisatesner|LTranslit=handisates
2	պէտք	պէտք	ADJ	_	_	0	root	_	Translit=pētk’|LTranslit=pētk’
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	Translit=ē|LTranslit=em
4	ասոնցպէսներուն	ասոնցպէս	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	2	obl	_	Translit=asonc’pēsnerown|LTranslit=asonc’pēs
~~~

~~~ conllu
# visual-style 4 6 obl color:blue
1	Թրամուէյները	թրամուէյ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	Translit=T’ramowēynerë|LTranslit=t’ramowēy
2	անընդհատ	անընդհատ	ADV	_	_	4	advmod	_	Translit=anëndhat|LTranslit=anëndhat
3	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
4	անցնին	անցնիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=anc’nin|LTranslit=anc’nil
5	հոծ	հոծ	ADJ	_	Degree=Pos	6	amod	_	Translit=hoç|LTranslit=hoç
6	բազմութիւններով	բազմութիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	4	obl	_	Translit=bazmowt’iwnnerov|LTranslit=bazmowt’iwn|SpaceAfter=No
7	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 5 2 obl color:blue
1	Առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	2	amod	_	Translit=Aṙaǰin|LTranslit=aṙaǰin
2	պահէն	պահ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	5	obl	_	Translit=pahēn|LTranslit=pah
3	իսկ	իսկ	ADV	_	_	2	advmod:emph	_	Translit=isk|LTranslit=isk
4	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	5	aux	_	Translit=kë|LTranslit=kë
5	զգամ	զգալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=zgam|LTranslit=zgal
6	տարբեր	տարբեր	ADJ	_	Degree=Pos	7	amod	_	Translit=tarber|LTranslit=tarber
7	բան	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	Translit=ban|LTranslit=ban
8	մը	մը	DET	_	PronType=Art	7	det	_	Translit=më|LTranslit=më
~~~

* `obl` is also used for temporal and locational nominal modifiers as bare nominals or something syntactically a noun phrase in a sentence:

~~~ conllu
# visual-style 4 2 obl color:blue
1	Ամէն	ամէն	DET	_	ExtPos=DET|PronType=Tot	2	det	_	Translit=Amēn|LTranslit=amēn
2	կողմ	կողմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	Translit=koġm|LTranslit=koġm
3	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=kë|LTranslit=kë
4	տարածուին	տարածուիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=taraçowin|LTranslit=taraçowil
~~~

~~~ conllu
# visual-style 4 1 obl color:blue
1	պահ	պահ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	Translit=pah|LTranslit=pah
2	մը	մը	DET	_	PronType=Art	1	det	_	Translit=më|LTranslit=më
3	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=kë|LTranslit=kë
4	ծփայ	ծփալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=çp’ay|LTranslit=çp’al
~~~

Note that we treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers (see [ADP]() for a list of localizers.) The head of the localizer is the noun or the main verb of the clause preceding it. When it follows a noun, it receives the [case:loc]() relation label. Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, localizers with the adverbial function are still tagged as `ADP`, but are labeled with additional features and with the dependency relation `obl`.

We use [obl:agent]() for the agent of a passive verbs. Note, that the `obl` relation is used for the oblique arguments instead of [obj]() (i.e., prepositional objects, in Armenian grammar traditionally called _adpositional indirect objects_.)
