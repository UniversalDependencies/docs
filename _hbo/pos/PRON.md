---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

Pronouns can substitute for nouns and come in the following categories:

## Personal Pronouns (xpos `prps`)

These are pronouns which stand as independent words and mark [Person](), [Gender](), and [Number]().
They typically appear as [nsubj]() or [dislocated]().

<!-- ruth 3 -->
~~~ conllu
# sent_id = Masoretic-Ruth-1:3-hbo
# text = וַיָּ֥מָת אֱלִימֶ֖לֶךְ אִ֣ישׁ נָעֳמִ֑י וַתִּשָּׁאֵ֥ר הִ֖יא וּשְׁנֵ֥י בָנֶֽיהָ׃
# translit = ṿayamat ʼelimelekh ʼish naʻomi ṿatishaʼer hiʼ ushne baneha
# visual-style 8 bgColor:blue
# visual-style 8 fgColor:white
1-2	וַיָּ֥מָת	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=RUTH_1.3|Translit=ṿa
2	יָּ֥מָת	מות	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=die|Ref=RUTH_1.3|Translit=yamat
3	אֱלִימֶ֖לֶךְ	אלימלך	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Elimelech|Ref=RUTH_1.3|Translit=ʼelimelekh
4	אִ֣ישׁ	אישׁ	NOUN	subs	Gender=Masc|Number=Sing	3	appos	_	Gloss=man|Ref=RUTH_1.3|Translit=ʼish
5	נָעֳמִ֑י	נעמי	PROPN	nmpr	Gender=Fem|Number=Sing	4	compound:smixut	_	Gloss=Naomi|Ref=RUTH_1.3|Translit=naʻomi
6-7	וַתִּשָּׁאֵ֥ר	_	_	_	_	_	_	_	_
6	וַ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=RUTH_1.3|Translit=ṿa
7	תִּשָּׁאֵ֥ר	שׁאר	VERB	verb	Gender=Fem|HebBinyan=NIFAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=remain|Ref=RUTH_1.3|Translit=tishaʼer
8	הִ֖יא	היא	PRON	prps	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Gloss=she|Ref=RUTH_1.3|Translit=hiʼ
9-10	וּשְׁנֵ֥י	_	_	_	_	_	_	_	_
9	וּ	ו	CCONJ	conj	_	11	cc	_	Gloss=and|Ref=RUTH_1.3|Translit=u
10	שְׁנֵ֥י	שׁנים	NUM	subs	Number=Dual|NumType=Card	11	nummod	_	Gloss=two|Ref=RUTH_1.3|Translit=shene
11-12	בָנֶֽיהָ	_	_	_	_	_	_	_	_
11	בָנֶֽי	בן	NOUN	subs	Gender=Masc|Number=Plur	8	conj	_	Gloss=son|Ref=RUTH_1.3|Translit=bane
12	הָ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nmod:poss	_	Ref=RUTH_1.3|Translit=ha
13	׃	׃	PUNCT	punct	_	2	punct	_	Ref=RUTH_1.3

~~~

_וימת אלימלך איש נעמי ותשאר **היא** ושני בניה׃_

_ṿayamat ʼelimelekh ʼish naʻomi ṿatishaʼer hiʼ ushne baneha_

_And Elimelech the husband of Naomi died and she was left alone **she** and her two sons._

They can also serve as distal demonstratives, in which case they usually take a definite marker and appear after the noun.

<!-- genesis 949 -->
~~~ conllu
# sent_id = Masoretic-Genesis-33:16-hbo
# text = וַיָּשָׁב֩ בַּיֹּ֨ום הַה֥וּא עֵשָׂ֛ו לְדַרְכֹּ֖ו שֵׂעִֽירָה׃
# translit = ṿayashav bayom hahuʼ ʻeśaṿ ledarko śeʻirah
# visual-style 7 bgColor:blue
# visual-style 7 fgColor:white
1-2	וַיָּשָׁב֩	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_33.16|Translit=ṿa
2	יָּשָׁב֩	שׁוב	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=return|Ref=GEN_33.16|Translit=yashav
3-5	בַּיֹּ֨ום	_	_	_	_	_	_	_	_
3	בַּ	ב	ADP	prep	_	5	case	_	Gloss=in|Ref=GEN_33.16|Translit=ba
4	_	ה	DET	art	PronType=Art	5	det	_	Gloss=the|Ref=GEN_33.16|Translit=
5	יֹּ֨ום	יום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=day|Ref=GEN_33.16|Translit=yom
6-7	הַה֥וּא	_	_	_	_	_	_	_	_
6	הַ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=GEN_33.16|Translit=ha
7	ה֥וּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	det	_	Gloss=he|Ref=GEN_33.16|Translit=huʼ
8	עֵשָׂ֛ו	עשׂו	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Esau|Ref=GEN_33.16|Translit=ʻeśaṿ
9-11	לְדַרְכֹּ֖ו	_	_	_	_	_	_	_	_
9	לְ	ל	ADP	prep	_	10	case	_	Gloss=to|Ref=GEN_33.16|Translit=le
10	דַרְכֹּ֖	דרך	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=way|Ref=GEN_33.16|Translit=darko
11	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	Ref=GEN_33.16|Translit=ṿ
12	שֵׂעִֽירָה	שׂעיר	PROPN	nmpr	Number=Sing	2	obl	_	Gloss=Seir|Ref=GEN_33.16|SpaceAfter=No|Translit=śeʻirah
13	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_33.16

~~~

_וישב ביום **ההוא** עשו לדרכו שעירה׃_

_ṿayashav bayom **hahuʼ** ʻeśaṿ ledarko śeʻirah_

_And on **that** day Esau returned to his road and toward Seir._

## Pronominal Suffixes (xpos `prn`)

These are suffixed forms which alternate with the non-demonstrative use of personal pronouns.
They can attach to [NOUN]()s, [ADP]()s, [VERB]()s, and sometimes [ADV]()s.

<!-- ruth 10 -->
~~~ conllu
# sent_id = Masoretic-Ruth-1:10-hbo
# text = וַתֹּאמַ֖רְנָה־לָּ֑הּ כִּי־אִתָּ֥ךְ נָשׁ֖וּב לְעַמֵּֽךְ׃
# translit = ṿatoʼmarnah lah ki ʼitakh nashuv leʻamekh
# visual-style 5 bgColor:blue
# visual-style 5 fgColor:white
# visual-style 9 bgColor:blue
# visual-style 9 fgColor:white
# visual-style 13 bgColor:blue
# visual-style 13 fgColor:white
1-2	וַתֹּאמַ֖רְנָה	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=RUTH_1.10|Translit=ṿa
2	תֹּאמַ֖רְנָה	אמר	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=RUTH_1.10|Translit=toʼmarnah
3	־	־	PUNCT	punct	_	5	punct	_	Ref=RUTH_1.10|SpaceAfter=No
4-5	לָּ֑הּ	_	_	_	_	_	_	_	_
4	לָּ֑	ל	ADP	prep	_	5	case	_	Gloss=to|Ref=RUTH_1.10|Translit=la
5	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	obl	_	Ref=RUTH_1.10|Translit=h
6	כִּי	כי	SCONJ	conj	_	10	mark	_	Gloss=that|Ref=RUTH_1.10|SpaceAfter=No|Translit=ki
7	־	־	PUNCT	punct	_	6	punct	_	Ref=RUTH_1.10|SpaceAfter=No
8-9	אִתָּ֥ךְ	_	_	_	_	_	_	_	_
8	אִתָּ֥	את	ADP	prep	_	9	case	_	Gloss=together.with|Ref=RUTH_1.10|Translit=ʼita
9	ךְ	את	PRON	prn	Gender=Fem|Number=Sing|Person=2|PronType=Prs	10	obl	_	Ref=RUTH_1.10|Translit=ke
10	נָשׁ֖וּב	שׁוב	VERB	verb	Aspect=Imp|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin	2	ccomp	_	Gloss=return|Ref=RUTH_1.10|Translit=nashuv
11-13	לְעַמֵּֽךְ	_	_	_	_	_	_	_	_
11	לְ	ל	ADP	prep	_	12	case	_	Gloss=to|Ref=RUTH_1.10|Translit=le
12	עַמֵּֽ	עם	NOUN	subs	Gender=Masc|Number=Sing	10	obl	_	Gloss=people|Ref=RUTH_1.10|Translit=ʻame
13	ךְ	את	PRON	prn	Gender=Fem|Number=Sing|Person=2|PronType=Prs	12	nmod:poss	_	Ref=RUTH_1.10|Translit=ke
14	׃	׃	PUNCT	punct	_	2	punct	_	Ref=RUTH_1.10

~~~

_ותאמרנה־**לה** כי־**אתך** נשוב **לעמך**׃_

_ṿatoʼmarnah **lah** ki **ʼitakh** nashuv **leʻamekh**_

_And she said **to her** "Because **with you** we will return **to your people**."._

## Demonstrative Pronouns (xpos `prde`)

These are independent forms which can either stand alone (possibly with prepositions) or can serve to mark noun phrases as demonstrative in the same manner as personal pronouns.

<!-- ruth 81 -->
~~~ conllu
# sent_id = Masoretic-Ruth-4:18-hbo
# text = וְאֵ֨לֶּה֙ תֹּולְדֹ֣ות פָּ֔רֶץ פֶּ֖רֶץ הֹולִ֥יד אֶת־חֶצְרֹֽון׃
# translit = ṿeʼeleh toldot parets perets holid ʼet ḥetsron
# visual-style 2 bgColor:blue
# visual-style 2 fgColor:white
1-2	וְאֵ֨לֶּה֙	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	3	cc	_	Gloss=and|Ref=RUTH_4.18|Translit=ṿe
2	אֵ֨לֶּה֙	אלה	PRON	prde	Number=Plur|PronType=Dem	3	nsubj	_	Gloss=these|Ref=RUTH_4.18|Translit=ʼeleh
3	תֹּולְדֹ֣ות	תולדות	NOUN	subs	Gender=Fem|Number=Plur	0	root	_	Gloss=generations|Ref=RUTH_4.18|Translit=toldot
4	פָּ֔רֶץ	פרץ	PROPN	nmpr	Gender=Masc|Number=Sing	3	compound:smixut	_	Gloss=Perez|Ref=RUTH_4.18|Translit=parets
5	פֶּ֖רֶץ	פרץ	PROPN	nmpr	Gender=Masc|Number=Sing	6	nsubj	_	Gloss=Perez|Ref=RUTH_4.18|Translit=perets
6	הֹולִ֥יד	ילד	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	3	parataxis	_	Gloss=bear|Ref=RUTH_4.18|Translit=holid
7	אֶת	את	ADP	prep	_	9	case	_	Gloss=<object.marker>|Ref=RUTH_4.18|SpaceAfter=No|Translit=ʼet
8	־	־	PUNCT	punct	_	7	punct	_	Ref=RUTH_4.18|SpaceAfter=No
9	חֶצְרֹֽון	חצרון	PROPN	nmpr	Gender=Masc|Number=Sing	6	obj	_	Gloss=Hezron|Ref=RUTH_4.18|SpaceAfter=No|Translit=ḥetsron
10	׃	׃	PUNCT	punct	_	3	punct	_	Ref=RUTH_4.18

~~~

_**ואלה** תולדות פרץ פרץ הוליד את־חצרון׃_

_**ṿeʼeleh** toldot parets perets holid ʼet ḥetsron_

_**And these** are the generations of Perez: Perez fathered Hezron._

<!-- genesis 597 -->
~~~ conllu
# sent_id = Masoretic-Genesis-24:28-hbo
# text = וַתָּ֨רָץ֙ הַֽנַּעֲרָ֔ וַתַּגֵּ֖ד לְבֵ֣ית אִמָּ֑הּ כַּדְּבָרִ֖ים הָאֵֽלֶּה׃
# translit = ṿatarats hanaʻara ṿataged levet ʼimah kadbarim haʼeleh
# visual-style 15 bgColor:blue
# visual-style 15 fgColor:white
1-2	וַתָּ֨רָץ֙	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_24.28|Translit=ṿa
2	תָּ֨רָץ֙	רוץ	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=run|Ref=GEN_24.28|Translit=tarats
3-4	הַֽנַּעֲרָ֔	_	_	_	_	_	_	_	_
3	הַֽ	ה	DET	art	PronType=Art	4	det	_	Gloss=the|Ref=GEN_24.28|Translit=ha
4	נַּעֲרָ֔	נערה	NOUN	subs	Gender=Fem|Number=Sing	2	nsubj	_	Gloss=girl|Ref=GEN_24.28|Translit=naʻara
5-6	וַתַּגֵּ֖ד	_	_	_	_	_	_	_	_
5	וַ	ו	CCONJ	conj	_	6	cc	_	Gloss=and|Ref=GEN_24.28|Translit=ṿa
6	תַּגֵּ֖ד	נגד	VERB	verb	Gender=Fem|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=report|Ref=GEN_24.28|Translit=taged
7-8	לְבֵ֣ית	_	_	_	_	_	_	_	_
7	לְ	ל	ADP	prep	_	8	case	_	Gloss=to|Ref=GEN_24.28|Translit=le
8	בֵ֣ית	בית	NOUN	subs	Gender=Masc|Number=Sing	6	obl	_	Gloss=house|Ref=GEN_24.28|Translit=bet
9-10	אִמָּ֑הּ	_	_	_	_	_	_	_	_
9	אִמָּ֑	אם	NOUN	subs	Gender=Fem|Number=Sing	8	compound:smixut	_	Gloss=mother|Ref=GEN_24.28|Translit=ʼima
10	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	Ref=GEN_24.28|Translit=h
11-13	כַּדְּבָרִ֖ים	_	_	_	_	_	_	_	_
11	כַּ	כ	ADP	prep	_	13	case	_	Gloss=as|Ref=GEN_24.28|Translit=ka
12	_	ה	DET	art	PronType=Art	13	det	_	Gloss=the|Ref=GEN_24.28|Translit=
13	דְּבָרִ֖ים	דבר	NOUN	subs	Gender=Masc|Number=Plur	6	obl	_	Gloss=word|Ref=GEN_24.28|Translit=devarim
14-15	הָאֵֽלֶּה	_	_	_	_	_	_	_	_
14	הָ	ה	DET	art	PronType=Art	15	det	_	Gloss=the|Ref=GEN_24.28|Translit=ha
15	אֵֽלֶּה	אלה	PRON	prde	Number=Plur|PronType=Dem	13	det	_	Gloss=these|Ref=GEN_24.28|Translit=ʼeleh
16	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_24.28

~~~

_ותרץ הנער ותגד לבית אמה כדברים **האלה**׃_

_ṿatarats hanaʻara ṿataged levet ʼimah kadbarim **haʼeleh**_

_And the young woman ran and told her mother's house about **these** things._

## Interrogative Pronouns (xpos `prin`)

There are two of these: the animate מי /mi/ "who" and the inanimate מה /mah/ "what".
Both of them appear alone or with prepositions.

<!-- ruth 27 -->
~~~ conllu
# sent_id = Masoretic-Ruth-2:5-hbo
# text = וַיֹּ֤אמֶר בֹּ֨עַז֙ לְנַעֲרֹ֔ו הַנִּצָּ֖ב עַל־הַקֹּֽוצְרִ֑ים לְמִ֖י הַנַּעֲרָ֥ה הַזֹּֽאת׃
# translit = ṿayoʼmer boʻaz lenaʻaro hanitsav ʻal haḳotsrim lemi hanaʻarah hazoʼt
# visual-style 14 bgColor:blue
# visual-style 14 fgColor:white
1-2	וַיֹּ֤אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=RUTH_2.5|Translit=ṿa
2	יֹּ֤אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=RUTH_2.5|Translit=yoʼmer
3	בֹּ֨עַז֙	בעז	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Boaz|Ref=RUTH_2.5|Translit=boʻaz
4-6	לְנַעֲרֹ֔ו	_	_	_	_	_	_	_	_
4	לְ	ל	ADP	prep	_	5	case	_	Gloss=to|Ref=RUTH_2.5|Translit=le
5	נַעֲרֹ֔	נער	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=boy|Ref=RUTH_2.5|Translit=naʻaro
6	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	Ref=RUTH_2.5|Translit=ṿ
7-8	הַנִּצָּ֖ב	_	_	_	_	_	_	_	_
7	הַ	ה	SCONJ	art	_	8	mark	_	Gloss=the|Ref=RUTH_2.5|Translit=ha
8	נִּצָּ֖ב	נצב	VERB	verb	Gender=Masc|HebBinyan=NIFAL|Number=Sing|VerbForm=Part	5	acl:relcl	_	Gloss=stand|Ref=RUTH_2.5|Translit=nitsav
9	עַל	על	ADP	prep	_	12	case	_	Gloss=upon|Ref=RUTH_2.5|SpaceAfter=No|Translit=ʻal
10	־	־	PUNCT	punct	_	9	punct	_	Ref=RUTH_2.5|SpaceAfter=No
11-12	הַקֹּֽוצְרִ֑ים	_	_	_	_	_	_	_	_
11	הַ	ה	DET	art	PronType=Art	12	det	_	Gloss=the|Ref=RUTH_2.5|Translit=ha
12	קֹּֽוצְרִ֑ים	קצר	NOUN	verb	Gender=Masc|HebBinyan=PAAL|Number=Plur|VerbForm=Part	8	obl	_	Gloss=harvest|Ref=RUTH_2.5|Translit=ḳotsrim
13-14	לְמִ֖י	_	_	_	_	_	_	_	_
13	לְ	ל	ADP	prep	_	14	case	_	Gloss=to|Ref=RUTH_2.5|Translit=le
14	מִ֖י	מי	PRON	prin	PronType=Int	2	ccomp	_	Gloss=who|Ref=RUTH_2.5|Translit=mi
15-16	הַנַּעֲרָ֥ה	_	_	_	_	_	_	_	_
15	הַ	ה	DET	art	PronType=Art	16	det	_	Gloss=the|Ref=RUTH_2.5|Translit=ha
16	נַּעֲרָ֥ה	נערה	NOUN	subs	Gender=Fem|Number=Sing	14	nsubj	_	Gloss=girl|Ref=RUTH_2.5|Translit=naʻarah
17-18	הַזֹּֽאת	_	_	_	_	_	_	_	_
17	הַ	ה	DET	art	PronType=Art	18	det	_	Gloss=the|Ref=RUTH_2.5|Translit=ha
18	זֹּֽאת	זאת	PRON	prde	Gender=Fem|Number=Sing|PronType=Dem	16	det	_	Gloss=this|Ref=RUTH_2.5|Translit=zoʼt
19	׃	׃	PUNCT	punct	_	2	punct	_	Ref=RUTH_2.5

~~~

_ויאמר בעז לנערו הנצב על־הקוצרים **למי** הנערה הזאת׃_

_ṿayoʼmer boʻaz lenaʻaro hanitsav ʻal haḳotsrim **lemi** hanaʻarah hazoʼt_

_And Boaz said to his young man who was stationed over the harvesters "**whose** is this young woman?"._

## Features

All pronouns should have a value for [PronType]().

Personal pronouns (`PronType=Prs`) and demonstrative pronouns (`PronType=Dem`) should have [Gender]() and [Number]().
Personal pronouns should additionally have [Person]().

Interrogative pronouns should not have additional features.

## XPOS

In BHSA, pronouns can have the POS tags `prde`, `prin`, and `prps`, in addition to the pseudo-POS tag `prn`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:47 CEST -->
