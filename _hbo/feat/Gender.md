---
layout: feature
title: 'Gender'
shortdef: 'gender'
udver: '2'
---

In Ancient Hebrew, `Gender` is marked lexically on [NOUN]()s, [PROPN]()s, and [PRON]()s and inflectionally on [ADJ]()s, most [NUM]()s, and some forms of [VERB]().

### <a name="Masc">`Masc`</a>: masculine gender

Nouns referring to male people and animals are masculine.
Other nouns which produce the same agreement pattern are also masculine, regardless of referent.
In the plural, the masculine is also used for groups of mixed gender.

Masculine nouns are typically characterized by the absence of specific marking in the singular and by the plural suffix **ים** /im/.

#### Examples

* [ADJ](): **גדול** /gadol/ "large"
* [NOUN](): **דבר** /davar/ "thing", **אישׁ** /ʼish/ "man"
* [NUM](): **שלש** /shalosh/ "three"
* [PRON](): **הוא** /huʼ/ "he", **הם** /hem/ "they" (all male or mixed)
* [VERB](): **ידבר** /yidaber/ "he will speak", **שומרים** /shomrim/ "guarding" (plural)

### <a name="Fem">`Fem`</a>: feminine gender

Nouns referring to female people and animals are feminine.
Other nouns which produce the same agreement pattern are also feminine, regardless of referent.

Feminine nouns are often marked by **ה** /ah/ or **ת** /et/ in the singlar and **ות** /ot/ in the plural.

#### Examples

* [ADJ](): **גדולה** /gadolah/ "large"
* [NOUN](): **עיר** /ʻir/ "city", **בת** /bat/ "daughter", **מנחה** /minḥah/ "gift"
* [NUM](): **שלשה** /shaloshah/ "three"
* [PRON](): **היא** /hi'/ "she", **הן** /hen/ "they" (all female)
* [VERB](): **תדברי** /tidabri/ "she will speak", **שומרת** /shomeret/ "guarding"

[ADJ]()s agree with the [NOUN]()s they modify, so that the words on either end of an [amod]() arc will usually have the same value for `Gender`.

<!-- genesis 360 -->
~~~ conllu
# sent_id = Masoretic-Genesis-15:15-hbo
# text = וְאַתָּ֛ה תָּבֹ֥וא אֶל־אֲבֹתֶ֖יךָ בְּשָׁלֹ֑ום תִּקָּבֵ֖ר בְּשֵׂיבָ֥ה טֹובָֽה׃
# translit = ṿeʼatah tavoʼ ʼel ʼavotekha beshalom tiḳaver beśevah ṭovah
# visual-style 12 bgColor:blue
# visual-style 12 fgColor:white
# visual-style 13 bgColor:blue
# visual-style 13 fgColor:white
# visual-style 12 13 amod color:blue
1-2	וְאַתָּ֛ה	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	3	cc	_	Gloss=and|Ref=GEN_15.15|Ref[BHSA]=6917|Translit=ṿe
2	אַתָּ֛ה	אתה	PRON	prps	Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	Gloss=you|Ref=GEN_15.15|Ref[BHSA]=6918|Translit=ʼatah
3	תָּבֹ֥וא	בוא	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	0	root	_	Gloss=come|Ref=GEN_15.15|Ref[BHSA]=6919|Translit=tavoʼ
4	אֶל	אל	ADP	prep	_	6	case	_	Gloss=to|Ref=GEN_15.15|Ref[BHSA]=6920|SpaceAfter=No|Translit=ʼel
5	־	־	PUNCT	punct	_	4	punct	_	Ref=GEN_15.15|SpaceAfter=No
6-7	אֲבֹתֶ֖יךָ	_	_	_	_	_	_	_	_
6	אֲבֹתֶ֖י	אב	NOUN	subs	Gender=Masc|Number=Plur	3	obl	_	Gloss=father|Ref=GEN_15.15|Ref[BHSA]=6921|Translit=ʼavote
7	ךָ	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	nmod:poss	_	Ref=GEN_15.15|Translit=ka
8-9	בְּשָׁלֹ֑ום	_	_	_	_	_	_	_	_
8	בְּ	ב	ADP	prep	_	9	case	_	Gloss=in|Ref=GEN_15.15|Ref[BHSA]=6922|Translit=be
9	שָׁלֹ֑ום	שׁלום	NOUN	subs	Gender=Masc|Number=Sing	3	obl	_	Gloss=peace|Ref=GEN_15.15|Ref[BHSA]=6923|Translit=shalom
10	תִּקָּבֵ֖ר	קבר	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=NIFAL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	3	parataxis	_	Gloss=bury|Ref=GEN_15.15|Ref[BHSA]=6924|Translit=tiḳaver
11-12	בְּשֵׂיבָ֥ה	_	_	_	_	_	_	_	_
11	בְּ	ב	ADP	prep	_	12	case	_	Gloss=in|Ref=GEN_15.15|Ref[BHSA]=6925|Translit=be
12	שֵׂיבָ֥ה	שׂיבה	NOUN	subs	Gender=Fem|Number=Sing	10	obl	_	Gloss=age|Ref=GEN_15.15|Ref[BHSA]=6926|Translit=śevah
13	טֹובָֽה	טוב	ADJ	adjv	Gender=Fem|Number=Sing	12	amod	_	Gloss=good|Ref=GEN_15.15|Ref[BHSA]=6927|SpaceAfter=No|Translit=ṭovah
14	׃	׃	PUNCT	punct	_	3	punct	_	Ref=GEN_15.15

~~~

_ואתה תבוא אל־אבתיך בשלום תקבר **בשיבה טובה**׃_

_ṿeʼatah tavoʼ ʼel ʼavotekha beshalom tiḳaver **beśevah ṭovah**_

_"And you will go to your fathers in peace; you will be buried **at a good age**."_

There will still be agreement even if the nominal and the modifier are not directly attached, such as in depictives.

<!-- genesis 1183 -->
~~~ conllu
# sent_id = Masoretic-Genesis-41:22-hbo
# text = וָאֵ֖רֶא בַּחֲלֹמִ֑י וְהִנֵּ֣ה׀ שֶׁ֣בַע שִׁבֳּלִ֗ים עֹלֹ֛ת בְּקָנֶ֥ה אֶחָ֖ד מְלֵאֹ֥ת וְטֹבֹֽות׃
# translit = ṿaʼereʼ baḥalomi ṿehineh  shevaʻ shibolim ʻolot beḳaneh ʼeḥad meleʼot ṿeṭovot
# visual-style 10 bgColor:blue
# visual-style 10 fgColor:white
# visual-style 15 bgColor:blue
# visual-style 15 fgColor:white
# visual-style 17 bgColor:blue
# visual-style 17 fgColor:white
# visual-style 11 15 xcomp color:blue
1-2	וָאֵ֖רֶא	_	_	_	_	_	_	_	_
1	וָ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_41.22|Ref[BHSA]=22749|Translit=ṿa
2	אֵ֖רֶא	ראה	VERB	verb	HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Gloss=see|Ref=GEN_41.22|Ref[BHSA]=22750|Translit=ʼereʼ
3-5	בַּחֲלֹמִ֑י	_	_	_	_	_	_	_	_
3	בַּ	ב	ADP	prep	_	4	case	_	Gloss=in|Ref=GEN_41.22|Ref[BHSA]=22751|Translit=ba
4	חֲלֹמִ֑	חלום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=dream|Ref=GEN_41.22|Ref[BHSA]=22752|Translit=ḥalomi
5	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	4	nmod:poss	_	Ref=GEN_41.22|Translit=
6-7	וְהִנֵּ֣ה	_	_	_	_	_	_	_	_
6	וְ	ו	CCONJ	conj	_	11	cc	_	Gloss=and|Ref=GEN_41.22|Ref[BHSA]=22753|Translit=ṿe
7	הִנֵּ֣ה	הנה	INTJ	intj	_	11	discourse	_	Gloss=behold|Ref=GEN_41.22|Ref[BHSA]=22754|Translit=hineh
8	׀	׀	PUNCT	punct	_	7	punct	_	Ref=GEN_41.22
9	שֶׁ֣בַע	שׁבע	NUM	subs	Number=Sing|NumType=Card	10	nummod	_	Gloss=seven|Ref=GEN_41.22|Ref[BHSA]=22755|Translit=shevaʻ
10	שִׁבֳּלִ֗ים	שׁבלת	NOUN	subs	Gender=Fem|Number=Plur	11	nsubj	_	Gloss=grain|Ref=GEN_41.22|Ref[BHSA]=22756|Translit=shibolim
11	עֹלֹ֛ת	עלה	VERB	verb	Gender=Fem|HebBinyan=PAAL|Number=Plur|VerbForm=Part	2	conj	_	Gloss=ascend|Ref=GEN_41.22|Ref[BHSA]=22757|Translit=ʻolot
12-13	בְּקָנֶ֥ה	_	_	_	_	_	_	_	_
12	בְּ	ב	ADP	prep	_	13	case	_	Gloss=in|Ref=GEN_41.22|Ref[BHSA]=22758|Translit=be
13	קָנֶ֥ה	קנה	NOUN	subs	Gender=Masc|Number=Sing	11	obl	_	Gloss=reed|Ref=GEN_41.22|Ref[BHSA]=22759|Translit=ḳaneh
14	אֶחָ֖ד	אחד	NUM	subs	Number=Sing|NumType=Card	13	nummod	_	Gloss=one|Ref=GEN_41.22|Ref[BHSA]=22760|Translit=ʼeḥad
15	מְלֵאֹ֥ת	מלא	ADJ	adjv	Gender=Fem|Number=Plur	11	xcomp	_	Gloss=full|Ref=GEN_41.22|Ref[BHSA]=22761|Translit=meleʼot
16-17	וְטֹבֹֽות	_	_	_	_	_	_	_	_
16	וְ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=GEN_41.22|Ref[BHSA]=22762|Translit=ṿe
17	טֹבֹֽות	טוב	ADJ	adjv	Gender=Fem|Number=Plur	15	conj	_	Gloss=good|Ref=GEN_41.22|Ref[BHSA]=22763|Translit=ṭovot
18	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_41.22

~~~

_וארא בחלמי והנה׀ שבע **שבלים** עלת בקנה אחד **מלאת וטבות**׃_

_ṿaʼereʼ baḥalomi ṿehineh  shevaʻ **shibolim** ʻolot beḳaneh ʼeḥad **meleʼot ṿeṭovot**_

_"And I looked in my dream and behold, seven **heads of grain** going up from one stalk, **full and good**."_

Finite and participial [VERB]()s, on the other hand, have a `Gender` value matching their subjects.

<!-- ruth 79 -->
~~~ conllu
# sent_id = Masoretic-Ruth-4:16-hbo
# text = וַתִּקַּ֨ח נָעֳמִ֤י אֶת־הַיֶּ֨לֶד֙ וַתְּשִׁתֵ֣הוּ בְחֵיקָ֔הּ וַתְּהִי־לֹ֖ו לְאֹמֶֽנֶת׃
# translit = ṿatiḳaḥ naʻomi ʼet hayeled ṿatshitehu beḥeḳah ṿathi lo leʼomenet
# visual-style 2 bgColor:blue
# visual-style 2 fgColor:white
# visual-style 3 bgColor:blue
# visual-style 3 fgColor:white
# visual-style 2 3 nsubj color:blue
1-2	וַתִּקַּ֨ח	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=RUT_4.16|Ref[BHSA]=357514|Translit=ṿa
2	תִּקַּ֨ח	לקח	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=take|Ref=RUT_4.16|Ref[BHSA]=357515|Translit=tiḳaḥ
3	נָעֳמִ֤י	נעמי	PROPN	nmpr	Gender=Fem|Number=Sing	2	nsubj	_	Gloss=Naomi|Ref=RUT_4.16|Ref[BHSA]=357516|Translit=naʻomi
4	אֶת	את	ADP	prep	_	7	case	_	Gloss=<object.marker>|Ref=RUT_4.16|Ref[BHSA]=357517|SpaceAfter=No|Translit=ʼet
5	־	־	PUNCT	punct	_	4	punct	_	Ref=RUT_4.16|SpaceAfter=No
6-7	הַיֶּ֨לֶד֙	_	_	_	_	_	_	_	_
6	הַ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=RUT_4.16|Ref[BHSA]=357518|Translit=ha
7	יֶּ֨לֶד֙	ילד	NOUN	subs	Gender=Masc|Number=Sing	2	obj	_	Gloss=boy|Ref=RUT_4.16|Ref[BHSA]=357519|Translit=yeled
8-10	וַתְּשִׁתֵ֣הוּ	_	_	_	_	_	_	_	_
8	וַ	ו	CCONJ	conj	_	9	cc	_	Gloss=and|Ref=RUT_4.16|Ref[BHSA]=357520|Translit=ṿa
9	תְּשִׁתֵ֣	שׁית	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=put|Ref=RUT_4.16|Ref[BHSA]=357521|Translit=teshite
10	הוּ	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	Ref=RUT_4.16|Translit=hu
11-13	בְחֵיקָ֔הּ	_	_	_	_	_	_	_	_
11	בְ	ב	ADP	prep	_	12	case	_	Gloss=in|Ref=RUT_4.16|Ref[BHSA]=357522|Translit=be
12	חֵיקָ֔	חיק	NOUN	subs	Gender=Masc|Number=Sing	9	obl	_	Gloss=lap|Ref=RUT_4.16|Ref[BHSA]=357523|Translit=ḥeḳa
13	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	nmod:poss	_	Ref=RUT_4.16|Translit=h
14-15	וַתְּהִי	_	_	_	_	_	_	_	_
14	וַ	ו	CCONJ	conj	_	20	cc	_	Gloss=and|Ref=RUT_4.16|Ref[BHSA]=357524|Translit=ṿa
15	תְּהִי	היה	AUX	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	20	cop	_	Gloss=be|Ref=RUT_4.16|Ref[BHSA]=357525|Translit=tehi
16	־	־	PUNCT	punct	_	15	punct	_	Ref=RUT_4.16|SpaceAfter=No
17-18	לֹ֖ו	_	_	_	_	_	_	_	_
17	לֹ֖	ל	ADP	prep	_	18	case	_	Gloss=to|Ref=RUT_4.16|Ref[BHSA]=357526|Translit=lo
18	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	obl	_	Ref=RUT_4.16|Translit=ṿ
19-20	לְאֹמֶֽנֶת	_	_	_	_	_	_	_	_
19	לְ	ל	ADP	prep	_	20	case	_	Gloss=to|Ref=RUT_4.16|Ref[BHSA]=357527|Translit=le
20	אֹמֶֽנֶת	אמן	NOUN	verb	Gender=Fem|HebBinyan=PAAL|Number=Sing|VerbForm=Part	2	conj	_	Gloss=be.firm|Ref=RUT_4.16|Ref[BHSA]=357528|Translit=ʼomenet
21	׃	׃	PUNCT	punct	_	2	punct	_	Ref=RUT_4.16

~~~

_**ותקח נעמי** את־הילד ותשתהו בחיקה ותהי־לו לאמנת׃_

_**ṿatiḳaḥ naʻomi** ʼet hayeled ṿatshitehu beḥeḳah ṿathi lo leʼomenet_

_**And Naomi took** the child and she put him in her lap and she was a nurse to him.**_

As with adjectives, participles exhibit agreement regardless of relative position.

<!-- genesis 1458 -->
~~~ conllu
# sent_id = Masoretic-Genesis-49:21-hbo
# text = נַפְתָּלִ֖י אַיָּלָ֣ה שְׁלֻחָ֑ה הַנֹּתֵ֖ן אִמְרֵי־שָֽׁפֶר׃ ס
# translit = naftali ʼayalah sheluḥah hanoten ʼimre shafer  s
# visual-style 2 bgColor:blue
# visual-style 2 fgColor:white
# visual-style 3 bgColor:blue
# visual-style 3 fgColor:white
# visual-style 5 bgColor:blue
# visual-style 5 fgColor:white
# visual-style 2 3 acl:relcl color:blue
# visual-style 2 5 acl:relcl color:blue
1	נַפְתָּלִ֖י	נפתלי	PROPN	nmpr	Number=Sing	2	nsubj	_	Gloss=Naphtali|Ref=GEN_49.21|Ref[BHSA]=28036|Translit=naftali
2	אַיָּלָ֣ה	אילה	NOUN	subs	Gender=Fem|Number=Sing	0	root	_	Gloss=doe|Ref=GEN_49.21|Ref[BHSA]=28037|Translit=ʼayalah
3	שְׁלֻחָ֑ה	שׁלח	VERB	verb	Gender=Fem|HebBinyan=PAAL|Number=Sing|VerbForm=Part|Voice=Pass	2	acl:relcl	_	Gloss=send|Ref=GEN_49.21|Ref[BHSA]=28038|Translit=sheluḥah
4-5	הַנֹּתֵ֖ן	_	_	_	_	_	_	_	_
4	הַ	ה	SCONJ	art	_	5	mark	_	Gloss=the|Ref=GEN_49.21|Ref[BHSA]=28039|Translit=ha
5	נֹּתֵ֖ן	נתן	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	2	acl:relcl	_	Gloss=give|Ref=GEN_49.21|Ref[BHSA]=28040|Translit=noten
6	אִמְרֵי	אמר	NOUN	subs	Gender=Masc|Number=Plur	5	obj	_	Gloss=antler|Ref=GEN_49.21|Ref[BHSA]=28041|SpaceAfter=No|Translit=ʼimre
7	־	־	PUNCT	punct	_	8	punct	_	Ref=GEN_49.21|SpaceAfter=No
8	שָֽׁפֶר	שׁפר	NOUN	subs	Gender=Masc|Number=Sing	6	compound:smixut	_	Gloss=antlers|Ref=GEN_49.21|Ref[BHSA]=28042|SpaceAfter=No|Translit=shafer
9	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_49.21
10	ס	ס	PUNCT	punct	_	2	punct	_	Ref=GEN_49.21

~~~

_נפתלי אילה שלחה הנתן אמרי־שפר׃ ס_

_naftali ʼayalah sheluḥah hanoten ʼimre shafer  s_

_"Naphtali is **a doe** that **is sent**, that **gives** antlers."_

<!-- Interlanguage links updated So 10. května 2025, 18:14:08 CEST -->
