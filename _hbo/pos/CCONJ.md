---
layout: postag
title: 'CCONJ'
shortdef: 'coordinating conjunction'
udver: '2'
---

The tag `CCONJ` in Ancient Hebrew is applied to two lexical items: ו /ṿe/,/ṿa/,/u/ "and" and או /ʼo/ "or".

<!-- genesis 1 -->
~~~ conllu
# sent_id = Masoretic-Genesis-1:1-hbo
# text = בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃
# translit = bereʼshit baraʼ ʼelohim ʼet hashamayim ṿeʼet haʼarets
# visual-style 8 bgColor:blue
# visual-style 8 fgColor:white
1-2	בְּרֵאשִׁ֖ית	_	_	_	_	_	_	_	_
1	בְּ	ב	ADP	prep	_	2	case	_	Gloss=in|Ref=GEN_1.1|Translit=be
2	רֵאשִׁ֖ית	ראשׁית	NOUN	subs	Gender=Fem|Number=Sing	3	obl	_	Gloss=beginning|Ref=GEN_1.1|Translit=reʼshit
3	בָּרָ֣א	ברא	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=create|Ref=GEN_1.1|Translit=baraʼ
4	אֱלֹהִ֑ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	3	nsubj	_	Gloss=god(s)|Ref=GEN_1.1|Translit=ʼelohim
5	אֵ֥ת	את	ADP	prep	_	7	case	_	Gloss=<object.marker>|Ref=GEN_1.1|Translit=ʼet
6-7	הַשָּׁמַ֖יִם	_	_	_	_	_	_	_	_
6	הַ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=GEN_1.1|Translit=ha
7	שָּׁמַ֖יִם	שׁמים	NOUN	subs	Gender=Masc|Number=Plur	3	obj	_	Gloss=heavens|Ref=GEN_1.1|Translit=shamayim
8-9	וְאֵ֥ת	_	_	_	_	_	_	_	_
8	וְ	ו	CCONJ	conj	_	11	cc	_	Gloss=and|Ref=GEN_1.1|Translit=ṿe
9	אֵ֥ת	את	ADP	prep	_	11	case	_	Gloss=<object.marker>|Ref=GEN_1.1|Translit=ʼet
10-11	הָאָֽרֶץ	_	_	_	_	_	_	_	_
10	הָ	ה	DET	art	PronType=Art	11	det	_	Gloss=the|Ref=GEN_1.1|Translit=ha
11	אָֽרֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	7	conj	_	Gloss=earth|Ref=GEN_1.1|Translit=ʼarets
12	׃	׃	PUNCT	punct	_	3	punct	_	Ref=GEN_1.1

~~~

_בראשית ברא אלהים את השמים **ואת** הארץ׃_

_bereʼshit baraʼ ʼelohim ʼet hashamayim **ṿeʼet** haʼarets_

_In the beginning, God had created the skies **and** the land._

<!-- genesis 624 -->
~~~ conllu
# sent_id = Masoretic-Genesis-24:55-hbo
# text = וַיֹּ֤אמֶר אָחִ֨יהָ֙ וְאִמָּ֔הּ תֵּשֵׁ֨ב הַנַּעֲרָ֥ אִתָּ֛נוּ יָמִ֖ים אֹ֣ו עָשֹׂ֑ור אַחַ֖ר תֵּלֵֽךְ׃
# translit = ṿayoʼmer ʼaḥiha ṿeʼimah teshev hanaʻara ʼitanu yamim ʼo ʻaśor ʼaḥar telekh
# visual-style 14 bgColor:blue
# visual-style 14 fgColor:white
1-2	וַיֹּ֤אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_24.55|Translit=ṿa
2	יֹּ֤אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_24.55|Translit=yoʼmer
3-4	אָחִ֨יהָ֙	_	_	_	_	_	_	_	_
3	אָחִ֨י	אח	NOUN	subs	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=brother|Ref=GEN_24.55|Translit=ʼaḥi
4	הָ֙	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nmod:poss	_	Ref=GEN_24.55|Translit=ha
5-7	וְאִמָּ֔הּ	_	_	_	_	_	_	_	_
5	וְ	ו	CCONJ	conj	_	6	cc	_	Gloss=and|Ref=GEN_24.55|Translit=ṿe
6	אִמָּ֔	אם	NOUN	subs	Gender=Fem|Number=Sing	3	conj	_	Gloss=mother|Ref=GEN_24.55|Translit=ʼima
7	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	Ref=GEN_24.55|Translit=h
8	תֵּשֵׁ֨ב	ישׁב	VERB	verb	Aspect=Imp|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	Gloss=sit|Ref=GEN_24.55|Translit=teshev
9-10	הַנַּעֲרָ֥	_	_	_	_	_	_	_	_
9	הַ	ה	DET	art	PronType=Art	10	det	_	Gloss=the|Ref=GEN_24.55|Translit=ha
10	נַּעֲרָ֥	נערה	NOUN	subs	Gender=Fem|Number=Sing	8	nsubj	_	Gloss=girl|Ref=GEN_24.55|Translit=naʻara
11-12	אִתָּ֛נוּ	_	_	_	_	_	_	_	_
11	אִתָּ֛	את	ADP	prep	_	12	case	_	Gloss=together.with|Ref=GEN_24.55|Translit=ʼita
12	נוּ	אנחנו	PRON	prn	Number=Plur|Person=1|PronType=Prs	8	obl	_	Ref=GEN_24.55|Translit=nu
13	יָמִ֖ים	יום	NOUN	subs	Gender=Masc|Number=Plur	8	obl	_	Gloss=day|Ref=GEN_24.55|Translit=yamim
14	אֹ֣ו	או	CCONJ	conj	_	15	cc	_	Gloss=or|Ref=GEN_24.55|Translit=ʼo
15	עָשֹׂ֑ור	עשׂור	NOUN	subs	Gender=Masc|Number=Sing	13	conj	_	Gloss=a.ten|Ref=GEN_24.55|Translit=ʻaśor
16	אַחַ֖ר	אחר	ADV	subs	_	17	advmod	_	Gloss=after|Ref=GEN_24.55|Translit=ʼaḥar
17	תֵּלֵֽךְ	הלך	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	8	parataxis	_	Gloss=walk|Ref=GEN_24.55|SpaceAfter=No|Translit=telekh
18	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_24.55

~~~

_ויאמר אחיה ואמה תשב הנער אתנו ימים **או** עשור אחר תלך׃_

_ṿayoʼmer ʼaḥiha ṿeʼimah teshev hanaʻara ʼitanu yamim **ʼo** ʻaśor ʼaḥar telekh_

_And her brother and her mother said "Let the girl stay with us a few days **or** ten, afterwards let her go."._

## Features

Coordinating conjunctions should not have any features.

## XPOS

Coordinating conjunctions have the BHSA POS tag `conj`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:42 CEST -->
