---
layout: relation
title: "obj:part"
shortdef: "object of participle"
udver: "2"
---

This relation is a subtype of the [obj]() relation, which captures cases where a word is the object of a participle that plays both nominal and verbal syntactic roles.

<!-- Example 1 -->

~~~ conllu
# sent_id = 172
# source = רשי_לתורה
# text = אף על פי שהתרתי לכם נטילת נשמה בבהמה את דמכם אדרוש מהשופך דם עצמו
# visual-style 18 19 obj:part color:blue
1	אף	אף	ADV	ADV	_	5	mark	_	_
2	על	על	ADP	ADP	_	1	fixed	_	_
3	פי	פה	NOUN	NOUN	_	1	fixed	_	_
4-5	שהתרתי	_	_	_	_	_	_	_	_
4	ש	ש	SCONJ	SCONJ	_	1	fixed	_	_
5	התרתי	התיר	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Tense=Past	15	advcl	_	_
6-7	לכם	_	_	_	_	_	_	_	_
6	ל	ל	ADP	ADP	_	7	case	_	_
7	כם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=2	5	obl	_	_
8	נטילת	נטילה	NOUN	NOUN	Gender=Fem|Number=Sing	5	obj	_	_
9	נשמה	נשמה	NOUN	NOUN	Gender=Fem|Number=Sing	8	compound:smixut	_	_
10-11	בבהמה	_	_	_	_	_	_	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	בהמה	בהמה	NOUN	NOUN	Gender=Fem|Number=Sing	8	nmod	_	_
12	את	את	ADP	ADP	_	13	case	_	_
13-14	דמכם	_	_	_	_	_	_	_	_
13	דמ	דם	NOUN	NOUN	Gender=Masc|Number=Sing	15	obj	_	_
14	כם	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2	13	nmod:poss	_	_
15	אדרוש	דרש	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Tense=Fut	0	root	_	_
16-18	מהשופך	_	_	_	_	_	_	_	_
16	מ	מ	ADP	ADP	_	18	case	_	_
17	ה	ה	DET	DET	_	18	det	_	_
18	שופך	שפך	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	15	obl	_	_
19	דם	דם	NOUN	NOUN	Gender=Masc|Number=Sing	18	obj:part	_	_
20	עצמו	עצמו	PRON	PRON	Reflex=Yes	19	compound:smixut	_	_
~~~

_Af ʻal pi she-hitarti lakhem neṭilat neshamah bi-vehemah et dimkhem edrosh meha-shofekh dam ʻatsmo_

"Although I permitted you the taking of a life with regard to animals, I will demand the blood of the <b>spiller</b> [of] his own blood."

The participle שופך serves itself as an oblique adjunct of the verb אדרוש and has both a case marker and a definite article, but has a clearly verbal complement in its object, דם.

See also [obl:part]() and [advmod:part]().
