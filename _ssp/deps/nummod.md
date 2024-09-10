---
layout: relation
title: 'nummod'
shortdef: ‘numeric modifier’'
udver: '2'
---

A numeric modifier of a noun is any number phrase that serves to modify the meaning of the noun with a quantity.

~~~ conllu
# sent_id = HC-JRV#129
# text = HERMANO DOS INDX SEGUNDO PROPIO LOS-DOS HERMANO CASA DESAPARECER
# gloss_en = BROTHER TWO INDX SECOND MINE BOTH BROTHER HOME DISAPPEAR
# text_es = se han esfumado las dos casas, de los dos hermanos, la suya y la segunda, la mía" (le dice nervioso el cerdito).
# text_en = The two houses of your two brothers, his and mine, have disappeared", (they say nervously).
1	HERMANO	_	NOUN	N	_	8	nmod	_	Gloss=BROTHER
2	DOS	_	NUM	Num	_	1	nummod	_	Gloss=TWO
3	INDX	_	DET	Pro	_	8	det	_	Gloss=INDX
4	SEGUNDO	_	NUM	Num	_	8	nummod	_	Gloss=SECOND
5	PROPIO	_	PRON	Pro	_	8	nmod	_	Gloss=MINE
6	LOS-DOS	_	NUM	Num	_	7	nummod	_	Gloss=BOTH
7	HERMANO	_	NOUN	N	_	8	nmod	_	Gloss=BROTHER
8	CASA	_	NOUN	N	_	9	nsubj	_	Gloss=HOME
9	DESAPARECER	_	VERB	V	_	0	root	_	Gloss=DISAPPEAR
~~~
