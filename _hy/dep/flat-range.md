---
layout: relation
title: 'flat:range'
shortdef: 'range'
udver: '2'
---

Armenian uses `flat:range` for numerical, spacial and time ranges.

~~~ conllu
# visual-style 1 2 flat:range color:blue
1	Երկու	երկու	NUM	_	NumForm=Word|NumType=Card	6	nummod	_	Translit=Erkow|LTranslit=erkow
2	18	18	NUM	_	NumForm=Digit|NumType=Card	5	nummod	_	Translit=18|LTranslit=18|SpaceAfter=No
3	-	֊	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	19	19	NUM	_	NumForm=Digit|NumType=Card	2	flat:range	_	Translit=19|LTranslit=19
5	տարեկան	տարեկան	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	6	nmod	_	Translit=tarekan|LTranslit=tarekan
6	ջահելներ	ջահել	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur|Style=Slng	0	root	_	Translit=ǰahelner|LTranslit=ǰahel
7	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	6	cop	_	Translit=ēin|LTranslit=em|SpaceAfter=No
8	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~

~~~ conllu
# visual-style 1 3 flat:range color:blue
1	Արփա	Արփա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	4	nmod:poss	_	Translit=Arp’a|LTranslit=Arp’a|SpaceAfter=No
2	—	—	PUNCT	_	_	3	punct	_	Translit=—|LTranslit=—|SpaceAfter=No
3	Սևանի	Սևան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	1	flat:range	_	Translit=Sewani|LTranslit=Sewan
4	Մարտունու	Մարտունի	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	6	nmod:poss	_	Translit=Martownow|LTranslit=Martowni
5	հատուկ	հատուկ	ADJ	_	Degree=Pos	6	amod	_	Translit=hatowk|LTranslit=hatowk
6	տեղամաս	տեղամաս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=teġamas|LTranslit=teġamas

~~~

~~~ conllu
# visual-style 9 11 flat:range color:blue
1	Հայրենասերների	հայրենասեր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	2	nmod:poss	_	Translit=Hayrenaserneri|LTranslit=hayrenaser
2	պայքարը	պայքար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	6	nsubj	_	Translit=payk’arë|LTranslit=payk’ar
3	նոր	նոր	ADJ	_	Degree=Pos	4	amod	_	Translit=nor|LTranslit=nor
4	ծավալ	ծավալ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	obj	_	Translit=çaval|LTranslit=çaval
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=ē|LTranslit=em
6	ընդունել	ընդունել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=ëndownel|LTranslit=ëndownel
7	այս	այս	DET	_	Deixis=Prox|PronType=Dem	8	det	_	Translit=ays|LTranslit=ays
8	տարվա	տարի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	12	nmod:poss	_	Translit=tarva|LTranslit=tari
9	ապրիլ	ապրիլ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	12	nmod	_	Translit=april|LTranslit=april|SpaceAfter=No
10	-	-	PUNCT	_	_	11	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
11	մայիս	մայիս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	flat:range	_	Translit=mayis|LTranslit=mayis
12	ամիսներից	ամիս	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Plur	6	obl	_	Translit=amisneric’|LTranslit=amis|SpaceAfter=No
13	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~

When components are parties to a bilateral relationship, `flat` relation is used.

~~~ conllu
# visual-style 2 4 flat color:blue
1	Սոչիում	Սոչի	PROPN	_	Animacy=Nhum|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	5	nmod:npmod	_	Translit=Sočiowm|LTranslit=Soči
2	Պուտին	Պուտին	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	5	nmod	_	Translit=Powtin|LTranslit=Powtin|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	Էրդողան	Էրդողան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	2	flat	_	Translit=Ērdoġan|LTranslit=Ērdoġan
5	համաձայնությունները	համաձայնություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	10	nsubj	_	Translit=hamajaynowt’yownnerë|LTranslit=hamajaynowt’yown
6	Իրանի	Իրան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	10	obl	_	Translit=Irani|LTranslit=Iran
7	մոտ	մոտ	ADP	_	AdpType=Post	6	case	_	Translit=mot|LTranslit=mot
8	կասկածներ	կասկած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	10	obj	_	Translit=kaskaçner|LTranslit=kaskaç
9	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	aux	_	Translit=čen|LTranslit=em
10	թողել	թողնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=t’oġel|LTranslit=t’oġnel|SpaceAfter=No
11	։	։	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


<!-- Interlanguage links updated Po 29. června 2026, 18:12:29 CEST -->
