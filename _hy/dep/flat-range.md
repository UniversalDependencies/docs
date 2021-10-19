---
layout: relation
title: 'flat:range'
shortdef: 'range'
udver: '2'
---

Armenian uses `flat:range` for numerical, spacial and time ranges.

~~~ conllu
# visual-style 2 4 flat:range color:blue
1	Սոչիում	Սոչի	PROPN	_	Animacy=Nhum|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	5	nmod:npmod	_	Translit=Sočiowm|LTranslit=Soči
2	Պուտին	Պուտին	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	5	nmod	_	Translit=Powtin|LTranslit=Powtin|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	Էրդողան	Էրդողան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	2	flat:range	_	Translit=Ērdoġan|LTranslit=Ērdoġan
5	համաձայնությունները	համաձայնություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	10	nsubj	_	Translit=hamajaynowt’yownnerë|LTranslit=hamajaynowt’yown
6	Իրանի	Իրան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	10	obl	_	Translit=Irani|LTranslit=Iran
7	մոտ	մոտ	ADP	_	AdpType=Post	6	case	_	Translit=mot|LTranslit=mot
8	կասկածներ	կասկած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	10	obj	_	Translit=kaskaçner|LTranslit=kaskaç
9	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	aux	_	Translit=čen|LTranslit=em
10	թողել	թողնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=t’oġel|LTranslit=t’oġnel|SpaceAfter=No
11	։	։	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~

~~~ conllu
# visual-style 1 2 flat:range color:blue
1	18	18	NUM	_	NumForm=Digit|NumType=Card	3	nummod	_	Translit=18|LTranslit=18
2	19	19	NUM	_	NumForm=Digit|NumType=Card	1	flat:range	_	Translit=19|LTranslit=19
3	տարեկան	տարեկան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nmod	_	Translit=tarekan|LTranslit=tarekan
4	ջահելներ	ջահել	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur|Style=Slng	0	root	_	Translit=ǰahelner|LTranslit=ǰahel
5	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	4	cop	_	Translit=ēin|LTranslit=em|SpaceAfter=No
6	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~
