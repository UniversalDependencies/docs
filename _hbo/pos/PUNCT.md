---
layout: postag
title: 'PUNCT'
shortdef: 'punctuation'
udver: '2'
---

The `PUNCT` tag is used for the following categories of symbols.

## Sentence-final punctuation

### Sof Pasuq

This marks the end of a verse.

<!-- genesis 1494 -->
~~~ conllu
# sent_id = Masoretic-Genesis-50:26-hbo
# text = וַיָּ֣מָת יֹוסֵ֔ף בֶּן־מֵאָ֥ה וָעֶ֖שֶׂר שָׁנִ֑ים וַיַּחַנְט֣וּ אֹתֹ֔ו וַיִּ֥ישֶׂם בָּאָרֹ֖ון בְּמִצְרָֽיִם׃
# translit = ṿayamat yosef ben meʼah ṿaʻeśer shanim ṿayaḥanṭu ʼoto ṿayiśem baʼaron bemitsrayim
# visual-style 21 bgColor:blue
# visual-style 21 fgColor:white
1-2	וַיָּ֣מָת	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_50.26|Ref[BHSA]=28747|Translit=ṿa
2	יָּ֣מָת	מות	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=die|Ref=GEN_50.26|Ref[BHSA]=28748|Translit=yamat
3	יֹוסֵ֔ף	יוסף	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Joseph|Ref=GEN_50.26|Ref[BHSA]=28749|Translit=yosef
4	בֶּן	בן	NOUN	subs	Gender=Masc|Number=Sing	2	xcomp	_	Gloss=son|Ref=GEN_50.26|Ref[BHSA]=28750|SpaceAfter=No|Translit=ben
5	־	־	PUNCT	punct	_	9	punct	_	Ref=GEN_50.26|SpaceAfter=No
6	מֵאָ֥ה	מאה	NUM	subs	Gender=Fem|Number=Sing|NumType=Card	9	nummod	_	Gloss=hundred|Ref=GEN_50.26|Ref[BHSA]=28751|Translit=meʼah
7-8	וָעֶ֖שֶׂר	_	_	_	_	_	_	_	_
7	וָ	ו	CCONJ	conj	_	8	cc	_	Gloss=and|Ref=GEN_50.26|Ref[BHSA]=28752|Translit=ṿa
8	עֶ֖שֶׂר	עשׂר	NUM	subs	Gender=Masc|Number=Sing|NumType=Card	6	conj	_	Gloss=ten|Ref=GEN_50.26|Ref[BHSA]=28753|Translit=ʻeśer
9	שָׁנִ֑ים	שׁנה	NOUN	subs	Gender=Fem|Number=Plur	4	compound:smixut	_	Gloss=year|Ref=GEN_50.26|Ref[BHSA]=28754|Translit=shanim
10-11	וַיַּחַנְט֣וּ	_	_	_	_	_	_	_	_
10	וַ	ו	CCONJ	conj	_	11	cc	_	Gloss=and|Ref=GEN_50.26|Ref[BHSA]=28755|Translit=ṿa
11	יַּחַנְט֣וּ	חנט	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=embalm|Ref=GEN_50.26|Ref[BHSA]=28756|Translit=yaḥanṭu
12-13	אֹתֹ֔ו	_	_	_	_	_	_	_	_
12	אֹתֹ֔	את	ADP	prep	_	13	case	_	Gloss=<object.marker>|Ref=GEN_50.26|Ref[BHSA]=28757|Translit=ʼoto
13	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	Ref=GEN_50.26|Translit=ṿ
14-15	וַיִּ֥ישֶׂם	_	_	_	_	_	_	_	_
14	וַ	ו	CCONJ	conj	_	15	cc	_	Gloss=and|Ref=GEN_50.26|Ref[BHSA]=28758|Translit=ṿa
15	יִּ֥ישֶׂם	ישׂם	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=<uncertain>|Ref=GEN_50.26|Ref[BHSA]=28759|Translit=yiśem
16-18	בָּאָרֹ֖ון	_	_	_	_	_	_	_	_
16	בָּ	ב	ADP	prep	_	18	case	_	Gloss=in|Ref=GEN_50.26|Ref[BHSA]=28760|Translit=ba
17	_	ה	DET	art	PronType=Art	18	det	_	Gloss=the|Ref=GEN_50.26|Ref[BHSA]=28761|Translit=
18	אָרֹ֖ון	ארון	NOUN	subs	Gender=Masc|Number=Sing	15	obl	_	Gloss=ark|Ref=GEN_50.26|Ref[BHSA]=28762|Translit=ʼaron
19-20	בְּמִצְרָֽיִם	_	_	_	_	_	_	_	_
19	בְּ	ב	ADP	prep	_	20	case	_	Gloss=in|Ref=GEN_50.26|Ref[BHSA]=28763|Translit=be
20	מִצְרָֽיִם	מצרים	PROPN	nmpr	Number=Sing	15	obl	_	Gloss=Egypt|Ref=GEN_50.26|Ref[BHSA]=28764|Translit=mitsrayim
21	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_50.26

~~~

_וימת יוסף בן־מאה ועשר שנים ויחנטו אתו ויישם בארון במצרים׃_

_ṿayamat yosef ben meʼah ṿaʻeśer shanim ṿayaḥanṭu ʼoto ṿayiśem baʼaron bemitsrayim_

_And Joseph died, 120 years old, and they embalmed him, and they put him in a box in Egypt._

## Sentence-internal punctuation

### Maqaf

This functions like a hyphen.

<!-- ruth 81 -->
~~~ conllu
# sent_id = Masoretic-Ruth-4:18-hbo
# text = וְאֵ֨לֶּה֙ תֹּולְדֹ֣ות פָּ֔רֶץ פֶּ֖רֶץ הֹולִ֥יד אֶת־חֶצְרֹֽון׃
# translit = ṿeʼeleh toldot parets perets holid ʼet ḥetsron
# visual-style 8 bgColor:blue
# visual-style 8 fgColor:white
1-2	וְאֵ֨לֶּה֙	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	3	cc	_	Gloss=and|Ref=RUT_4.18|Ref[BHSA]=357550|Translit=ṿe
2	אֵ֨לֶּה֙	אלה	PRON	prde	Number=Plur|PronType=Dem	3	nsubj	_	Gloss=these|Ref=RUT_4.18|Ref[BHSA]=357551|Translit=ʼeleh
3	תֹּולְדֹ֣ות	תולדות	NOUN	subs	Gender=Fem|Number=Plur	0	root	_	Gloss=generations|Ref=RUT_4.18|Ref[BHSA]=357552|Translit=toldot
4	פָּ֔רֶץ	פרץ	PROPN	nmpr	Gender=Masc|Number=Sing	3	compound:smixut	_	Gloss=Perez|Ref=RUT_4.18|Ref[BHSA]=357553|Translit=parets
5	פֶּ֖רֶץ	פרץ	PROPN	nmpr	Gender=Masc|Number=Sing	6	nsubj	_	Gloss=Perez|Ref=RUT_4.18|Ref[BHSA]=357554|Translit=perets
6	הֹולִ֥יד	ילד	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	3	parataxis	_	Gloss=bear|Ref=RUT_4.18|Ref[BHSA]=357555|Translit=holid
7	אֶת	את	ADP	prep	_	9	case	_	Gloss=<object.marker>|Ref=RUT_4.18|Ref[BHSA]=357556|SpaceAfter=No|Translit=ʼet
8	־	־	PUNCT	punct	_	7	punct	_	Ref=RUT_4.18|SpaceAfter=No
9	חֶצְרֹֽון	חצרון	PROPN	nmpr	Gender=Masc|Number=Sing	6	obj	_	Gloss=Hezron|Ref=RUT_4.18|Ref[BHSA]=357557|SpaceAfter=No|Translit=ḥetsron
10	׃	׃	PUNCT	punct	_	3	punct	_	Ref=RUT_4.18

~~~

_ואלה תולדות פרץ פרץ הוליד את־חצרון׃_

_ṿeʼeleh toldot parets perets holid ʼet ḥetsron_

_And these are the generations of Perez: Perez fathered Hezron._

### Paseq

The meaning of this symbol is uncertain, but it may be a separator.

<!-- genesis 1183 -->
~~~ conllu
# sent_id = Masoretic-Genesis-41:22-hbo
# text = וָאֵ֖רֶא בַּחֲלֹמִ֑י וְהִנֵּ֣ה׀ שֶׁ֣בַע שִׁבֳּלִ֗ים עֹלֹ֛ת בְּקָנֶ֥ה אֶחָ֖ד מְלֵאֹ֥ת וְטֹבֹֽות׃
# translit = ṿaʼereʼ baḥalomi ṿehineh  shevaʻ shibolim ʻolot beḳaneh ʼeḥad meleʼot ṿeṭovot
# visual-style 8 bgColor:blue
# visual-style 8 fgColor:white
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

_וארא בחלמי והנה׀ שבע שבלים עלת בקנה אחד מלאת וטבות׃_

_ṿaʼereʼ baḥalomi ṿehineh  shevaʻ shibolim ʻolot beḳaneh ʼeḥad meleʼot ṿeṭovot_

_"And I saw in my dream and behold! seven heads of grain ascending from one stalk, full and good."_

## Paragraph Breaks

### Setumah

The Setumah indicates a break within a paragraph.

<!-- genesis 704 -->
~~~ conllu
# sent_id = Masoretic-Genesis-26:35-hbo
# text = וַתִּהְיֶ֖יןָ מֹ֣רַת ר֑וּחַ לְיִצְחָ֖ק וּלְרִבְקָֽה׃ ס
# translit = ṿatihyena morat ruḥa leyitsḥaḳ ulrivḳah  s
# visual-style 11 bgColor:blue
# visual-style 11 fgColor:white
1-2	וַתִּהְיֶ֖יןָ	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	3	cc	_	Gloss=and|Ref=GEN_26.35|Ref[BHSA]=13627|Translit=ṿa
2	תִּהְיֶ֖יןָ	היה	AUX	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	Gloss=be|Ref=GEN_26.35|Ref[BHSA]=13628|Translit=tihyena
3	מֹ֣רַת	מרה	NOUN	subs	Gender=Fem|Number=Sing	0	root	_	Gloss=bitterness|Ref=GEN_26.35|Ref[BHSA]=13629|Translit=morat
4	ר֑וּחַ	רוח	NOUN	subs	Number=Sing	3	compound:smixut	_	Gloss=wind|Ref=GEN_26.35|Ref[BHSA]=13630|Translit=ruḥa
5-6	לְיִצְחָ֖ק	_	_	_	_	_	_	_	_
5	לְ	ל	ADP	prep	_	6	case	_	Gloss=to|Ref=GEN_26.35|Ref[BHSA]=13631|Translit=le
6	יִצְחָ֖ק	יצחק	PROPN	nmpr	Gender=Masc|Number=Sing	3	obl	_	Gloss=Isaac|Ref=GEN_26.35|Ref[BHSA]=13632|Translit=yitsḥaḳ
7-9	וּלְרִבְקָֽה	_	_	_	_	_	_	_	_
7	וּ	ו	CCONJ	conj	_	9	cc	_	Gloss=and|Ref=GEN_26.35|Ref[BHSA]=13633|Translit=u
8	לְ	ל	ADP	prep	_	9	case	_	Gloss=to|Ref=GEN_26.35|Ref[BHSA]=13634|Translit=le
9	רִבְקָֽה	רבקה	PROPN	nmpr	Gender=Fem|Number=Sing	6	conj	_	Gloss=Rebekah|Ref=GEN_26.35|Ref[BHSA]=13635|Translit=rivḳah
10	׃	׃	PUNCT	punct	_	3	punct	_	Ref=GEN_26.35
11	ס	ס	PUNCT	punct	_	3	punct	_	Ref=GEN_26.35

~~~

_ותהיין מרת רוח ליצחק ולרבקה׃ ס_

_ṿatihyena morat ruḥa leyitsḥaḳ ulrivḳah  s_

_And they were a bitter spirit for Isaac and Rebekah._

### Petuhah

The Petuhah indicates a break between paragraphs.

<!-- genesis 295 -->
~~~ conllu
# sent_id = Masoretic-Genesis-12:9-hbo
# text = וַיִּסַּ֣ע אַבְרָ֔ם הָלֹ֥וךְ וְנָסֹ֖ועַ הַנֶּֽגְבָּה׃ פ
# translit = ṿayisaʻ ʼavram halokh ṿenasoʻa hanegbah  p
# visual-style 10 bgColor:blue
# visual-style 10 fgColor:white
1-2	וַיִּסַּ֣ע	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_12.9|Ref[BHSA]=5665|Translit=ṿa
2	יִּסַּ֣ע	נסע	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=pull.out|Ref=GEN_12.9|Ref[BHSA]=5666|Translit=yisaʻ
3	אַבְרָ֔ם	אברם	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Abram|Ref=GEN_12.9|Ref[BHSA]=5667|Translit=ʼavram
4	הָלֹ֥וךְ	הלך	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	2	advcl	_	Gloss=walk|Ref=GEN_12.9|Ref[BHSA]=5668|Translit=halokh
5-6	וְנָסֹ֖ועַ	_	_	_	_	_	_	_	_
5	וְ	ו	CCONJ	conj	_	6	cc	_	Gloss=and|Ref=GEN_12.9|Ref[BHSA]=5669|Translit=ṿe
6	נָסֹ֖ועַ	נסע	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	4	conj	_	Gloss=pull.out|Ref=GEN_12.9|Ref[BHSA]=5670|Translit=nasoʻa
7-8	הַנֶּֽגְבָּה	_	_	_	_	_	_	_	_
7	הַ	ה	DET	art	PronType=Art	8	det	_	Gloss=the|Ref=GEN_12.9|Ref[BHSA]=5671|Translit=ha
8	נֶּֽגְבָּה	נגב	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=south|Ref=GEN_12.9|Ref[BHSA]=5672|Translit=negbah
9	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_12.9
10	פ	פ	PUNCT	punct	_	2	punct	_	Ref=GEN_12.9

~~~

_ויסע אברם הלוך ונסוע הנגבה׃ פ_

_ṿayisaʻ ʼavram halokh ṿenasoʻa hanegbah  p_

_And Abram departed, walking and departing, to the south._
<!-- Interlanguage links updated So 10. května 2025, 18:13:49 CEST -->
