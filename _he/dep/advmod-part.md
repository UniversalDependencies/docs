---
layout: relation
title: 'advmod:part'
shortdef: 'adverbial modifier of participle'
udver: '2'
---

This relation is a subtype of the [advmod]() relation, which captures cases where the adverb is dependent on a participle that plays both nominal and verbal syntactic roles.

<!-- Example 1 -->
~~~ conllu
# sent_id = 173
# source = רשי_לתורה
# text = מיד ההורג במזיד ואין עדים אני אדרוש
# visual-style 4 5 advmod:part color:blue
1-2	מיד	_	_	_	_	_	_	_	_
1	מ	מ	ADP	ADP	_	2	case	_	_
2	יד	יד	NOUN	NOUN	_	10	obl	_	_
3-4	ההורג	_	_	_	_	_	_	_	_
3	ה	ה	DET	DET	_	4	det	_	_
4	הורג	הרג	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	2	compound:smixut	_	_
5	במזיד	במזיד	ADV	ADV	_	4	advmod:part	_	_
6-7	ואין	_	_	_	_	_	_	_	_
6	ו	ו	CCONJ	CCONJ	_	7	cc	_	_
7	אין	אין	VERB	VERB	_	4	conj	_	_
8	עדים	עד	NOUN	NOUN	Gender=Masc|Number=Plur	7	nsubj	_	_
9	אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1	10	nsubj	_	_
10	אדרוש	דרש	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Tense=Fut	0	root	_	_
~~~

_Mi-yad ha-horeg be-mezid ṿe-en ʻedim ani edrosh_

"From the hand of one who <b>kills intentionally</b> (lit. _the killer intentionally_) and there are no witnesses, I will demand."

The participle הורג is the second element of a nominal [compound:smixut]() construct, but has a clearly verbal complement in the adverb במזיד.

See also [obj:part]() and [obl:part]().

