---
layout: relation
title: "obl:part"
shortdef: "oblique adjunct of participle"
udver: "2"
---

This relation is a subtype of the [obl]() relation, which captures cases where the oblique adjunct is dependent on a participle that plays both nominal and verbal syntactic roles.

<!-- Example 1 -->

~~~ conllu
# sent_id = 119
# source = ספר_החינוך
# text = אשרי הזוכים אליה כי אז יקיימו מצוה זו על בוריה
# visual-style 3 5 obl:part color:blue
1	אשרי	אשרי	ADV	ADV	_	0	root	_	_
2-3	הזוכים	_	_	_	_	_	_	_	_
2	ה	ה	DET	DET	_	3	det	_	_
3	זוכים	זוכה	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	1	nsubj	_	_
4-5	אליה	_	_	_	_	_	_	_	_
4	אלי	אל	ADP	ADP	_	5	case	_	_
5	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	3	obl:part	_	_
6	כי	כי	SCONJ	SCONJ	_	8	mark	_	_
7	אז	אז	ADV	ADV	_	8	advmod	_	_
8	יקיימו	קיים	VERB	VERB	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Fut	1	advcl	_	_
9	מצוה	מצווה	NOUN	NOUN	Gender=Fem|Number=Sing	8	obj	_	_
10	זו	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3	9	det	_	_
11	על	על	ADP	ADP	_	12	case	_	_
12-13	בוריה	_	_	_	_	_	_	_	_
12	בורי	בורי	NOUN	NOUN	Gender=Masc|Number=Sing	8	obl	_	_
13	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	12	nmod:poss	_	_
~~~

_Ashre ha-zokhim eleha ki az yeḳayemu mitsṿah zo ʻal buryah_

"Fortunate are the <b>meritors</b> of (lit. _to_) <b>it</b>, for they fulfill this commandment completely."

The participle זוכים is the subject of the sentence and takes a definite article, but also has a clearly verbal complement in אליה.

See also [obj:part]() and [advmod:part]().
