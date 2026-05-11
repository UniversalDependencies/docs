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
2	արձան	արձան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
3	չեմք	եմք	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	2	det	_	_
5	պղընձի	պղինձ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	2	nmod:poss	_	_
~~~

~~~ sdparse
ախիր հող կու դառնաս, այդպէս չես մնալ \n after all, you will turn to dust; you will not remain this way
discourse(դառնաս, ախիր)
discourse(will-turn, after-all)
~~~

~~~ sdparse
թող աւրինաւոր ամուսնանայ \n let him marry in a lawful manner
discourse(ամուսնանայ, թող)
discourse(marry, let)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:37 CEST -->
