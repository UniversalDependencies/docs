---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for [interjections](INTJ) and other discourse [particles](PART) and elements, which are not clearly linked to the structure of the sentence, except in an expressive way.

These discourse elements are attached to the head of the most relevant nearby unit, often a clause.

~~~ conllu
# visual-style 2 1 discourse color:blue
1	Գէմ	գէմ	PART	_	_	2	discourse	_	_
2	արձան	արձան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
3	չեմք	եմք	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	2	det	_	_
5	պղընձի	պղինձ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	2	nmod:poss	_	_
~~~

~~~ conllu
# visual-style 4 1 discourse color:blue
1	ախիր	ախիր	PART	_	_	4	discourse	_	_
2	հող	հող	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	xcomp	_	_
3	կու	կու	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	_
4	դառնաս	դառնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=2|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	այդպէս	այդպէս	ADV	_	Deixis=Med|PronType=Dem	8	advmod	_	_
7	չես	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	մնալ	մնալ	VERB	_	Connegative=Yes|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	conj	_	_
~~~

~~~ conllu
# visual-style 3 1 discourse color:blue
1	թող	թողնուլ	VERB	_	Aspect=Prosp|ExtPos=PART|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	3	discourse	_	_
2	աւրինաւոր	աւրինաւոր	ADV	_	Style=Var	3	advmod	_	_
3	ամուսնանայ	ամուսնանալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:12:19 CEST -->
