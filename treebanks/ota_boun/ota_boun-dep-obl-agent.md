---
layout: base
title:  'Statistics of obl:agent in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ota_boun-dep-obl.html">obl</a></tt>.

4 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:agent	color:blue
1	Mavri	Mavri	PROPN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	ماورى
2	Mira	Mira	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	ميرا
3	Heyeti	heyet	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl:agent	_	هيئتنى
4	tarafından	taraf	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	case	_	طرفندن
5	idâre	idâre	NOUN	_	Case=Nom|Number=Sing|Person=3	8	acl	_	ادراه
6	olunan	olun	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	5	compound:lvc	_	ولنان
7	Rum	Rum	PROPN	_	Case=Nom|Number=Sing|Person=3	8	nmod:poss	_	روم
8	mekteplerinin	mektep	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	10	nmod:poss	_	مكتبلرينك
9	izci	izci	NOUN	_	Case=Nom|Number=Sing|Person=3	10	nmod:poss	_	ايزجى
10	teşkilâtları	teşkilât	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	22	nsubj	_	تشكيلاتلرى
11	,	,	PUNCT	Comma	_	22	punct	_	,
12	yirmi	yirmi	NUM	ANum	NumType=Card	13	nmod:poss	_	يكرمى
13	yaşını	yaş	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	obj	_	ياشنى
14	mütecâviz	mütecâviz	ADJ	Adj	_	15	acl	_	متجاوز
15	gençler	genç	NOUN	_	Case=Nom|Number=Plur|Person=3	17	nsubj	_	كنجلرده
16	de	de	PART	Emph	_	15	advmod:emph	_	ده
17	dahil	dahil	ADJ	_	Case=Nom|Number=Sing|Person=3	23	obl	_	داخل
18	olmak	ol	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	17	compound:lvc	_	ولمق
19	üzere	üzere	ADP	PCNom	_	17	case	_	اوزره
20	her	her	DET	Det	_	21	det	_	خر
21	yerde	yer	NOUN	_	Case=Loc|Number=Sing|Person=3	22	obl	_	يرده
22	ikmâl	ikmâl	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	اكمال
23	olunuyor	olun	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|Voice=Pass	22	compound:lvc	_	ولونيور
24	.	.	PUNCT	Stop	_	23	punct	_	.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 13 obl:agent	color:blue
1	Vaziyetin	vaziyet	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	وضعيتك
2	dehşet	dehşet	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	دهشت
3	ve	ve	CCONJ	_	_	4	cc	_	و
4	vahameti	vahamet	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	conj	_	وخامتى
5	karşısında	karşı	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	19	obl	_	قارشوسنده‌
6	,	,	PUNCT	Comma	_	8	punct	_	,
7	her	her	DET	Det	_	8	det	_	هر
8	yerde	yer	NOUN	_	Case=Loc|Number=Sing|Person=3	19	obl	_	يرده‌
9	,	,	PUNCT	Comma	_	11	punct	_	,
10	her	her	DET	Det	_	11	det	_	هر
11	mıntıkada	mıntıka	NOUN	_	Case=Loc|Number=Sing|Person=3	19	obl	_	منطقه‌ده‌
12	birtakım	birtakım	DET	Indef	_	13	det	_	بر طاقم
13	zevât	zevât	NOUN	_	Case=Nom|Number=Sing|Person=3	19	obl:agent	_	ذوات
14	tarafından	taraf	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	case	_	طرفندن
15	mukabil	mukabil	ADJ	Adj	_	17	amod	_	مقابل
16	halâs	halâs	NOUN	_	Case=Nom|Number=Sing|Person=3	17	nmod:poss	_	خلاص
17	çareleri	çare	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	18	nsubj:pass	_	چاره‌لرى
18	düşünülmeye	düşün	VERB	Vnoun	Case=Dat|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	19	obl	_	دوشونولمكه‌
19	başlanmış	başla	VERB	Ptcp	Aspect=Perf|Polarity=Pos|VerbForm=Part	0	root	_	باشلانمش
20	idi	y	AUX	Overt	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	19	cop	_	ايدى
21	.	.	PUNCT	Stop	_	19	punct	_	.

~~~


