---
layout: relation
title:  'obl:agent'
shortdef : 'agent modifier'
udver: '2'
---

The relation `obl:agent` is used for agents of passive verbs. They are mainly expressed by a noun in genitive/dative with the following postposition _կողմից_. Note that in Armenian agents of passive verbs may also stand in ablative, rarely in instrumental and dative cases.

~~~ conllu
#visual-style 4 1 obl:agent color:blue
1	Տրորողի	տրորող	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	4	obl:agent	_	Translit=Troroġi|LTranslit=troroġ
2	կողմից	կողմից	ADP	_	AdpType=Post	1	case	_	Translit=koġmic’|LTranslit=koġmic’
3	էլ	էլ	ADV	_	_	1	advmod:emph	_	Translit=ēl|LTranslit=ēl
4	մոռացվում	մոռանալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=moṙac’vowm|LTranslit=moṙanal
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=ē|LTranslit=em
6	նրա	նրա	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=nra|LTranslit=nra
7	գոյությունը	գոյություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	4	nsubj:pass	_	Translit=goyowt’yownë|LTranslit=goyowt’yown
~~~

~~~ conllu
#visual-style 6 15 obl:agent color:blue
1	7	7	NUM	_	NumForm=Digit|NumType=Card	6	discourse	_	Translit=7|LTranslit=7|SpaceAfter=No
2	.	.	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.
3	Խորհրդում	խորհուրդ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	6	obl	_	Translit=Xorhrdowm|LTranslit=xorhowrd
4	աշխատակարգային	աշխատակարգային	ADJ	_	_	5	amod	_	Translit=ašxatakargayin|LTranslit=ašxatakargayin
5	որոշումները	որոշում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	6	nsubj:pass	_	Translit=orošowmnerë|LTranslit=orošowm
6	կայացվում	կայացնել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=kayac’vowm|LTranslit=kayac’nel
7	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=en|LTranslit=em
8	նիստին	նիստ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	9	obl	_	Translit=nistin|LTranslit=nist
9	ներկա	ներկա	ADJ	_	_	11	amod	_	Translit=nerka|LTranslit=nerka
10	խորհրդի	խորհուրդ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	11	nmod:poss	_	Translit=xorhrdi|LTranslit=xorhowrd
11	անդամների	անդամ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	12	nmod:poss	_	Translit=andamneri|LTranslit=andam
12	ձայների	ձայն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	14	nmod:poss	_	Translit=jayneri|LTranslit=jayn
13	պարզ	պարզ	ADJ	_	Degree=Pos	14	amod	_	Translit=parz|LTranslit=parz
14	մեծամասնությամբ	մեծամասնություն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	6	obl:agent	_	Translit=meçamasnowt’yamb|LTranslit=meçamasnowt’yown|SpaceAfter=No
15	:	:	PUNCT	_	Foreign=Yes	6	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:31 CEST -->
