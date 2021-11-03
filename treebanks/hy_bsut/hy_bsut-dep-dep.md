---
layout: base
title:  'Statistics of dep in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `dep`

This relation is universal.

13 nodes (0%) are attached to their parents as `dep`.

13 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.23076923076923.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (6; 46% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (3; 23% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (3; 23% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	Նոյեմբերի	նոյեմբեր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	Translit=Noyemberi|LTranslit=noyember
2	9	9	NUM	_	NumForm=Digit|NumType=Card	16	nsubj	_	Translit=9|LTranslit=9|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	ը	ը	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Hyph=Yes|Number=Sing	2	dep	_	Translit=ë|LTranslit=ë
5	ոչ	ոչ	PART	_	Polarity=Neg	7	cc	_	Translit=oč|LTranslit=oč
6	միայն	միայն	ADV	_	_	5	fixed	_	Translit=miayn|LTranslit=miayn
7	Հայաստանի	Հայաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	13	nmod:poss	_	Translit=Hayastani|LTranslit=Hayastan|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
9	այլև	այլև	CCONJ	_	ConjType=Comp	12	cc	_	Translit=aylew|LTranslit=aylew
10	ըստ	ըստ	ADP	_	AdpType=Prep	11	case	_	Translit=ëst|LTranslit=ëst
11	էության	էություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	12	discourse	_	Translit=ēowt’yan|LTranslit=ēowt’yown
12	Իրանի	Իրան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	7	conj	_	Translit=Irani|LTranslit=Iran
13	մեկուսացման	մեկուսացում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	16	nmod:poss	_	Translit=mekowsac’man|LTranslit=mekowsac’owm
14	ու	ու	CCONJ	_	_	15	cc	_	Translit=ow|LTranslit=ow
15	մասնատման	մասնատում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	13	conj	_	Translit=masnatman|LTranslit=masnatowm
16	հեռանկարի	հեռանկար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	0	root	_	Translit=heṙankari|LTranslit=heṙankar
17	մասին	մասին	ADP	_	AdpType=Post	16	case	_	Translit=masin|LTranslit=masin
18	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	16	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
19	։	։	PUNCT	_	_	16	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 25 dep	color:blue
1	Բայց	բայց	CCONJ	_	_	4	cc	_	Translit=Bayc’|LTranslit=bayc’
2	սա	սա	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	4	nsubj	_	Translit=sa|LTranslit=sa
3	դեռ	դեռ	ADV	_	_	4	advmod:emph	_	Translit=deṙ|LTranslit=deṙ
4	բոլորը	բոլորը	PRON	_	Case=Nom|PronType=Tot	0	root	_	Translit=bolorë|LTranslit=bolorë
5	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=čē|LTranslit=em|SpaceAfter=No
6	՝	՝	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
7	ապագա	ապագա	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	8	nsubj	_	Translit=apaga|LTranslit=apaga
8	կա	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	parataxis	_	Translit=ka|LTranslit=kam
9	՛	՛	PUNCT	_	_	8	punct	_	Translit=՛|LTranslit=՛
10	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
11	ՀՀ	ՀՀ	PROPN	_	Abbr=Yes|Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	13	nmod	_	Translit=HH|LTranslit=HH
12	հպարտ	հպարտ	ADJ	_	Degree=Pos	13	amod	_	Translit=hpart|LTranslit=hpart
13	քաղաքացիներ	քաղաքացի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	8	vocative	_	Translit=k’aġak’ac’iner|LTranslit=k’aġak’ac’i|SpaceAfter=No
14	,	,	PUNCT	_	_	19	punct	_	Translit=,|LTranslit=,
15	և	և	CCONJ	_	_	19	cc	_	Translit=ew|LTranslit=ew
16	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	18	det	_	Translit=ayd|LTranslit=ayd
17	խոստումնալից	խոստումնալից	ADJ	_	_	18	amod	_	Translit=xostowmnalic’|LTranslit=xostowmnalic’
18	ապագայում	ապագա	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Coll	19	obl	_	Translit=apagayowm|LTranslit=apaga
19	հուրհրում	հուրհրալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	8	conj	_	Translit=howrhrowm|LTranslit=howrhral
20	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	aux	_	Translit=ē|LTranslit=em
21	«	«	PUNCT	_	_	22	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
22	մեծարգո	մեծարգո	ADJ	_	_	19	nsubj	_	Translit=meçargo|LTranslit=meçargo|SpaceAfter=No
23	»	»	PUNCT	_	_	22	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
24	-	-	PUNCT	_	_	25	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
25	ն	ը	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Hyph=Yes|Number=Sing	22	dep	_	Translit=n|LTranslit=ë|SpaceAfter=No
26	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	Իսկ	իսկ	CCONJ	_	_	19	cc	_	Translit=Isk|LTranslit=isk
2	թե	թե	SCONJ	_	_	14	mark	_	Translit=t’e|LTranslit=t’e
3	ինչու	ինչու	ADV	_	PronType=Int	14	advmod	_	Translit=inčow|LTranslit=inčow
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	aux	_	Translit=ē|LTranslit=em
5	բոլոր	բոլոր	DET	_	PronType=Tot	6	det	_	Translit=bolor|LTranslit=bolor
6	ՔՊ	ՔՊ	PROPN	_	Abbr=Yes|Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Com|Number=Sing	10	nmod:poss	_	Translit=K’P|LTranslit=K’P|SpaceAfter=No
7	-	-	PUNCT	_	_	8	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
8	ականների	ական	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Hyph=Yes|Number=Plur	6	dep	_	Translit=akanneri|LTranslit=akan
9	հրավառ	հրավառ	ADJ	_	_	10	amod	_	Translit=hravaṙ|LTranslit=hravaṙ
10	հոգիները	հոգի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	14	nsubj	_	Translit=hoginerë|LTranslit=hogi
11	միաժամանակ	միաժամանակ	ADV	_	_	14	advmod	_	Translit=miažamanak|LTranslit=miažamanak
12	ու	ու	CCONJ	_	_	13	cc	_	Translit=ow|LTranslit=ow
13	միանման	միանման	ADV	_	_	11	conj	_	Translit=mianman|LTranslit=mianman
14	ճչացել	ճչալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	19	advcl	_	Translit=č̣čac’el|LTranslit=č̣čal|SpaceAfter=No
15	,	,	PUNCT	_	_	19	punct	_	Translit=,|LTranslit=,
16	գիտությունը	գիտություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	19	nsubj	_	Translit=gitowt’yownë|LTranslit=gitowt’yown
17	դեռևս	դեռևս	ADV	_	_	19	advmod	_	Translit=deṙews|LTranslit=deṙews
18	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	19	aux	_	Translit=či|LTranslit=em
19	պարզել	պարզել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=parzel|LTranslit=parzel
20	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	21	det	_	Translit=ayd|LTranslit=ayd
21	առեղծվածը	առեղծված	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	19	obj	_	Translit=aṙeġçvaçë|LTranslit=aṙeġçvaç|SpaceAfter=No
22	։	։	PUNCT	_	_	19	punct	_	Translit=.|LTranslit=.

~~~


