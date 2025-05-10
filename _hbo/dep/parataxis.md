---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The `parataxis` relation is most commonly used for adjacent clauses which are not connected by a coordinating conjunction.

<!-- genesis 99 -->
~~~ conllu
# sent_id = Masoretic-Genesis-4:20-hbo
# text = וַתֵּ֥לֶד עָדָ֖ה אֶת־יָבָ֑ל ה֣וּא הָיָ֔ה אֲבִ֕י יֹשֵׁ֥ב אֹ֖הֶל וּמִקְנֶֽה׃
# translit = ṿateled ʻadah ʼet yaval huʼ hayah ʼavi yoshev ʼohel umiḳneh
# visual-style 2 9 parataxis color:blue
1-2	וַתֵּ֥לֶד	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_4.20|Ref[BHSA]=2003|Translit=ṿa
2	תֵּ֥לֶד	ילד	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=bear|Ref=GEN_4.20|Ref[BHSA]=2004|Translit=teled
3	עָדָ֖ה	עדה	PROPN	nmpr	Gender=Fem|Number=Sing	2	nsubj	_	Gloss=Adah|Ref=GEN_4.20|Ref[BHSA]=2005|Translit=ʻadah
4	אֶת	את	ADP	prep	_	6	case	_	Gloss=<object.marker>|Ref=GEN_4.20|Ref[BHSA]=2006|SpaceAfter=No|Translit=ʼet
5	־	־	PUNCT	punct	_	4	punct	_	Ref=GEN_4.20|SpaceAfter=No
6	יָבָ֑ל	יבל	PROPN	nmpr	Gender=Masc|Number=Sing	2	obj	_	Gloss=Jabal|Ref=GEN_4.20|Ref[BHSA]=2007|Translit=yaval
7	ה֣וּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	Gloss=he|Ref=GEN_4.20|Ref[BHSA]=2008|Translit=huʼ
8	הָיָ֔ה	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	9	cop	_	Gloss=be|Ref=GEN_4.20|Ref[BHSA]=2009|Translit=hayah
9	אֲבִ֕י	אב	NOUN	subs	Gender=Masc|Number=Sing	2	parataxis	_	Gloss=father|Ref=GEN_4.20|Ref[BHSA]=2010|Translit=ʼavi
10	יֹשֵׁ֥ב	ישׁב	NOUN	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	9	compound:smixut	_	Gloss=sit|Ref=GEN_4.20|Ref[BHSA]=2011|Translit=yoshev
11	אֹ֖הֶל	אהל	NOUN	subs	Gender=Masc|Number=Sing	10	compound:smixut	_	Gloss=tent|Ref=GEN_4.20|Ref[BHSA]=2012|Translit=ʼohel
12-13	וּמִקְנֶֽה	_	_	_	_	_	_	_	_
12	וּ	ו	CCONJ	conj	_	13	cc	_	Gloss=and|Ref=GEN_4.20|Ref[BHSA]=2013|Translit=u
13	מִקְנֶֽה	מקנה	NOUN	subs	Gender=Masc|Number=Sing	10	conj	_	Gloss=purchase|Ref=GEN_4.20|Ref[BHSA]=2014|Translit=miḳneh
14	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_4.20

~~~

_ותלד עדה את־יבל הוא היה אבי ישב אהל ומקנה׃_

_ṿateled ʻadah ʼet yaval huʼ hayah ʼavi yoshev ʼohel umiḳneh_

_And Adah bore Jabal; he was the father of those who dwell in tents and of tradesmen._

On the other hand, when there are multiple clauses in a row and some of them have coordinating conjunctions, all of them are attached with [conj]().

<!-- ruth 17 -->
~~~ conllu
# sent_id = Masoretic-Ruth-1:17-hbo
# text = בַּאֲשֶׁ֤ר תָּמ֨וּתִי֙ אָמ֔וּת וְשָׁ֖ם אֶקָּבֵ֑ר כֹּה֩ יַעֲשֶׂ֨ה יְהוָ֥ה לִי֙ וְכֹ֣ה יֹסִ֔יף כִּ֣י הַמָּ֔וֶת יַפְרִ֖יד בֵּינִ֥י וּבֵינֵֽךְ׃
# translit = baʼasher tamuti ʼamut ṿesham ʼeḳaver koh yaʻaśeh yehṿah li ṿekhoh yosif ki hamaṿet yafrid beni uvenekh
# visual-style 4 9 conj color:green
1-2	בַּאֲשֶׁ֤ר	_	_	_	_	_	_	_	_
1	בַּ	ב	ADP	prep	_	4	obl	_	Gloss=in|Ref=RUT_1.17|Ref[BHSA]=356120|Translit=ba
2	אֲשֶׁ֤ר	אשׁר	SCONJ	conj	_	3	mark	_	Gloss=<relative>|Ref=RUT_1.17|Ref[BHSA]=356121|Translit=ʼasher
3	תָּמ֨וּתִי֙	מות	VERB	verb	Aspect=Imp|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	1	acl:relcl	_	Gloss=die|Ref=RUT_1.17|Ref[BHSA]=356122|Translit=tamuti
4	אָמ֔וּת	מות	VERB	verb	Aspect=Imp|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	0	root	_	Gloss=die|Ref=RUT_1.17|Ref[BHSA]=356123|Translit=ʼamut
5-6	וְשָׁ֖ם	_	_	_	_	_	_	_	_
5	וְ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=RUT_1.17|Ref[BHSA]=356124|Translit=ṿe
6	שָׁ֖ם	שׁם	ADV	advb	_	7	advmod	_	Gloss=there|Ref=RUT_1.17|Ref[BHSA]=356125|Translit=sham
7	אֶקָּבֵ֑ר	קבר	VERB	verb	Aspect=Imp|HebBinyan=NIFAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	4	conj	_	Gloss=bury|Ref=RUT_1.17|Ref[BHSA]=356126|Translit=ʼeḳaver
8	כֹּה֩	כה	ADV	advb	_	9	advmod	_	Gloss=thus|Ref=RUT_1.17|Ref[BHSA]=356127|Translit=koh
9	יַעֲשֶׂ֨ה	עשׂה	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	4	conj	_	Gloss=make|Ref=RUT_1.17|Ref[BHSA]=356128|Translit=yaʻaśeh
10	יְהוָ֥ה	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	9	nsubj	_	Gloss=YHWH|Ref=RUT_1.17|Ref[BHSA]=356129|Translit=yehṿah
11-12	לִי֙	_	_	_	_	_	_	_	_
11	לִ	ל	ADP	prep	_	12	case	_	Gloss=to|Ref=RUT_1.17|Ref[BHSA]=356130|Translit=li
12	י֙	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	9	obl	_	Ref=RUT_1.17|Translit=
13-14	וְכֹ֣ה	_	_	_	_	_	_	_	_
13	וְ	ו	CCONJ	conj	_	15	cc	_	Gloss=and|Ref=RUT_1.17|Ref[BHSA]=356131|Translit=ṿe
14	כֹ֣ה	כה	ADV	advb	_	15	advmod	_	Gloss=thus|Ref=RUT_1.17|Ref[BHSA]=356132|Translit=koh
15	יֹסִ֔יף	יסף	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	4	conj	_	Gloss=add|Ref=RUT_1.17|Ref[BHSA]=356133|Translit=yosif
16	כִּ֣י	כי	SCONJ	conj	_	19	mark	_	Gloss=that|Ref=RUT_1.17|Ref[BHSA]=356134|Translit=ki
17-18	הַמָּ֔וֶת	_	_	_	_	_	_	_	_
17	הַ	ה	DET	art	PronType=Art	18	det	_	Gloss=the|Ref=RUT_1.17|Ref[BHSA]=356135|Translit=ha
18	מָּ֔וֶת	מות	NOUN	subs	Gender=Masc|Number=Sing	19	nsubj	_	Gloss=death|Ref=RUT_1.17|Ref[BHSA]=356136|Translit=maṿet
19	יַפְרִ֖יד	פרד	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	15	advcl	_	Gloss=divide|Ref=RUT_1.17|Ref[BHSA]=356137|Translit=yafrid
20-21	בֵּינִ֥י	_	_	_	_	_	_	_	_
20	בֵּינִ֥	בין	ADP	subs	_	21	case	_	Gloss=interval|Ref=RUT_1.17|Ref[BHSA]=356138|Translit=beni
21	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	19	obl	_	Ref=RUT_1.17|Translit=
22-24	וּבֵינֵֽךְ	_	_	_	_	_	_	_	_
22	וּ	ו	CCONJ	conj	_	24	cc	_	Gloss=and|Ref=RUT_1.17|Ref[BHSA]=356139|Translit=u
23	בֵינֵֽ	בין	ADP	subs	_	24	case	_	Gloss=interval|Ref=RUT_1.17|Ref[BHSA]=356140|Translit=bene
24	ךְ	את	PRON	prn	Gender=Fem|Number=Sing|Person=2|PronType=Prs	21	conj	_	Ref=RUT_1.17|Translit=ke
25	׃	׃	PUNCT	punct	_	4	punct	_	Ref=RUT_1.17

~~~

_באשר תמותי אמות ושם אקבר כה יעשה יהוה לי וכה יסיף כי המות יפריד ביני ובינך׃_

_baʼasher tamuti ʼamut ṿesham ʼeḳaver koh yaʻaśeh yehṿah li ṿekhoh yosif ki hamaṿet yafrid beni uvenekh_

_"Where you die, I will die, and I will be buried there, thus may The LORD do to me, and thus may He add if death separates me from you."_

Parenthetical comments are also attached with `parataxis`.

<!-- genesis 1224 -->
~~~ conllu
# sent_id = Masoretic-Genesis-42:6-hbo
# text = וְיֹוסֵ֗ף ה֚וּא הַשַּׁלִּ֣יט עַל־הָאָ֔רֶץ ה֥וּא הַמַּשְׁבִּ֖יר לְכָל־עַ֣ם הָאָ֑רֶץ וַיָּבֹ֨אוּ֙ אֲחֵ֣י יֹוסֵ֔ף וַיִּשְׁתַּֽחֲווּ־לֹ֥ו אַפַּ֖יִם אָֽרְצָה׃
# translit = ṿeyosef huʼ hashaliṭ ʻal haʼarets huʼ hamashbir lekhal ʻam haʼarets ṿayavoʼu ʼaḥe yosef ṿayishtaḥaṿu lo ʼapayim ʼartsah
# visual-style 5 12 parataxis color:blue
1-2	וְיֹוסֵ֗ף	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	5	cc	_	Gloss=and|Ref=GEN_42.6|Ref[BHSA]=23510|Translit=ṿe
2	יֹוסֵ֗ף	יוסף	PROPN	nmpr	Gender=Masc|Number=Sing	5	dislocated	_	Gloss=Joseph|Ref=GEN_42.6|Ref[BHSA]=23511|Translit=yosef
3	ה֚וּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Gloss=he|Ref=GEN_42.6|Ref[BHSA]=23512|Translit=huʼ
4-5	הַשַּׁלִּ֣יט	_	_	_	_	_	_	_	_
4	הַ	ה	DET	art	PronType=Art	5	det	_	Gloss=the|Ref=GEN_42.6|Ref[BHSA]=23513|Translit=ha
5	שַּׁלִּ֣יט	שׁליט	ADJ	adjv	Gender=Masc|Number=Sing	0	root	_	Gloss=tyrant|Ref=GEN_42.6|Ref[BHSA]=23514|Translit=shaliṭ
6	עַל	על	ADP	prep	_	9	case	_	Gloss=upon|Ref=GEN_42.6|Ref[BHSA]=23515|SpaceAfter=No|Translit=ʻal
7	־	־	PUNCT	punct	_	6	punct	_	Ref=GEN_42.6|SpaceAfter=No
8-9	הָאָ֔רֶץ	_	_	_	_	_	_	_	_
8	הָ	ה	DET	art	PronType=Art	9	det	_	Gloss=the|Ref=GEN_42.6|Ref[BHSA]=23516|Translit=ha
9	אָ֔רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	5	obl	_	Gloss=earth|Ref=GEN_42.6|Ref[BHSA]=23517|Translit=ʼarets
10	ה֥וּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj:outer	_	Gloss=he|Ref=GEN_42.6|Ref[BHSA]=23518|Translit=huʼ
11-12	הַמַּשְׁבִּ֖יר	_	_	_	_	_	_	_	_
11	הַ	ה	SCONJ	art	_	12	mark	_	Gloss=the|Ref=GEN_42.6|Ref[BHSA]=23519|Translit=ha
12	מַּשְׁבִּ֖יר	שׁבר	VERB	verb	Gender=Masc|HebBinyan=HIFIL|Number=Sing|VerbForm=Part	5	parataxis	_	Gloss=buy.grain|Ref=GEN_42.6|Ref[BHSA]=23520|Translit=mashbir
13-14	לְכָל	_	_	_	_	_	_	_	_
13	לְ	ל	ADP	prep	_	14	case	_	Gloss=to|Ref=GEN_42.6|Ref[BHSA]=23521|Translit=le
14	כָל	כל	NOUN	subs	Gender=Masc|Number=Sing	12	obl	_	Gloss=whole|Ref=GEN_42.6|Ref[BHSA]=23522|Translit=kal
15	־	־	PUNCT	punct	_	16	punct	_	Ref=GEN_42.6|SpaceAfter=No
16	עַ֣ם	עם	NOUN	subs	Gender=Masc|Number=Sing	14	compound:smixut	_	Gloss=people|Ref=GEN_42.6|Ref[BHSA]=23523|Translit=ʻam
17-18	הָאָ֑רֶץ	_	_	_	_	_	_	_	_
17	הָ	ה	DET	art	PronType=Art	18	det	_	Gloss=the|Ref=GEN_42.6|Ref[BHSA]=23524|Translit=ha
18	אָ֑רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	16	compound:smixut	_	Gloss=earth|Ref=GEN_42.6|Ref[BHSA]=23525|Translit=ʼarets
19-20	וַיָּבֹ֨אוּ֙	_	_	_	_	_	_	_	_
19	וַ	ו	CCONJ	conj	_	20	cc	_	Gloss=and|Ref=GEN_42.6|Ref[BHSA]=23526|Translit=ṿa
20	יָּבֹ֨אוּ֙	בוא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	Gloss=come|Ref=GEN_42.6|Ref[BHSA]=23527|Translit=yavoʼu
21	אֲחֵ֣י	אח	NOUN	subs	Gender=Masc|Number=Plur	20	nsubj	_	Gloss=brother|Ref=GEN_42.6|Ref[BHSA]=23528|Translit=ʼaḥe
22	יֹוסֵ֔ף	יוסף	PROPN	nmpr	Gender=Masc|Number=Sing	21	compound:smixut	_	Gloss=Joseph|Ref=GEN_42.6|Ref[BHSA]=23529|Translit=yosef
23-24	וַיִּשְׁתַּֽחֲווּ	_	_	_	_	_	_	_	_
23	וַ	ו	CCONJ	conj	_	24	cc	_	Gloss=and|Ref=GEN_42.6|Ref[BHSA]=23530|Translit=ṿa
24	יִּשְׁתַּֽחֲווּ	חוה	VERB	verb	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	Gloss=bow.down|Ref=GEN_42.6|Ref[BHSA]=23531|Translit=yishtaḥaṿu
25	־	־	PUNCT	punct	_	27	punct	_	Ref=GEN_42.6|SpaceAfter=No
26-27	לֹ֥ו	_	_	_	_	_	_	_	_
26	לֹ֥	ל	ADP	prep	_	27	case	_	Gloss=to|Ref=GEN_42.6|Ref[BHSA]=23532|Translit=lo
27	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	obl	_	Ref=GEN_42.6|Translit=ṿ
28	אַפַּ֖יִם	אף	NOUN	subs	Gender=Masc|Number=Dual	24	obj	_	Gloss=nose|Ref=GEN_42.6|Ref[BHSA]=23533|Translit=ʼapayim
29	אָֽרְצָה	ארץ	NOUN	subs	Gender=Fem|Number=Sing	24	obl	_	Gloss=earth|Ref=GEN_42.6|Ref[BHSA]=23534|SpaceAfter=No|Translit=ʼartsah
30	׃	׃	PUNCT	punct	_	5	punct	_	Ref=GEN_42.6

~~~

_ויוסף הוא השליט על־הארץ הוא המשביר לכל־עם הארץ ויבאו אחי יוסף וישתחוו־לו אפים ארצה׃_

_ṿeyosef huʼ hashaliṭ ʻal haʼarets huʼ hamashbir lekhal ʻam haʼarets ṿayavoʼu ʼaḥe yosef ṿayishtaḥaṿu lo ʼapayim ʼartsah_

_And Joseph, he was lordly over the land (he was the one selling grain to all the people of the land) and Joseph's brothers came and they bowed their noses before him towards the ground._

The most common such construction is the distributive, in which a plural verb is followed by an איש /ʼish/ "man" or אישה /ʼishah/ "woman" in the singlar and then an oblique noun with a singlar posessor.
The noun is attached to the verb with `parataxis` and the obliques to the noun with [orphan]().

<!-- ruth 9 -->
~~~ conllu
# sent_id = Masoretic-Ruth-1:9-hbo
# text = יִתֵּ֤ן יְהוָה֙ לָכֶ֔ם וּמְצֶ֣אןָ מְנוּחָ֔ה אִשָּׁ֖ה בֵּ֣ית אִישָׁ֑הּ וַתִּשַּׁ֣ק לָהֶ֔ן וַתִּשֶּׂ֥אנָה קֹולָ֖ן וַתִּבְכֶּֽינָה׃
# translit = yiten yehṿah lakhem umtseʼna menuḥah ʼishah bet ʼishah ṿatishaḳ lahen ṿatiśeʼnah ḳolan ṿativkenah
# visual-style 6 8 parataxis color:blue
# visual-stlye 8 9 orphan color:blue
1	יִתֵּ֤ן	נתן	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=give|Ref=RUT_1.9|Ref[BHSA]=355971|Translit=yiten
2	יְהוָה֙	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	1	nsubj	_	Gloss=YHWH|Ref=RUT_1.9|Ref[BHSA]=355972|Translit=yehṿah
3-4	לָכֶ֔ם	_	_	_	_	_	_	_	_
3	לָ	ל	ADP	prep	_	4	case	_	Gloss=to|Ref=RUT_1.9|Ref[BHSA]=355973|Translit=la
4	כֶ֔ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	1	obl	_	Ref=RUT_1.9|Translit=kem
5-6	וּמְצֶ֣אןָ	_	_	_	_	_	_	_	_
5	וּ	ו	CCONJ	conj	_	6	cc	_	Gloss=and|Ref=RUT_1.9|Ref[BHSA]=355974|Translit=u
6	מְצֶ֣אןָ	מצא	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	1	conj	_	Gloss=find|Ref=RUT_1.9|Ref[BHSA]=355975|Translit=metseʼna
7	מְנוּחָ֔ה	מנוחה	NOUN	subs	Gender=Fem|Number=Sing	6	obj	_	Gloss=resting.place|Ref=RUT_1.9|Ref[BHSA]=355976|Translit=menuḥah
8	אִשָּׁ֖ה	אשׁה	NOUN	subs	Gender=Fem|Number=Sing	6	parataxis	_	Gloss=woman|Ref=RUT_1.9|Ref[BHSA]=355977|Translit=ʼishah
9	בֵּ֣ית	בית	NOUN	subs	Gender=Masc|Number=Sing	8	orphan	_	Gloss=house|Ref=RUT_1.9|Ref[BHSA]=355978|Translit=bet
10-11	אִישָׁ֑הּ	_	_	_	_	_	_	_	_
10	אִישָׁ֑	אישׁ	NOUN	subs	Gender=Masc|Number=Sing	9	compound:smixut	_	Gloss=man|Ref=RUT_1.9|Ref[BHSA]=355979|Translit=ʼisha
11	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	Ref=RUT_1.9|Translit=h
12-13	וַתִּשַּׁ֣ק	_	_	_	_	_	_	_	_
12	וַ	ו	CCONJ	conj	_	13	cc	_	Gloss=and|Ref=RUT_1.9|Ref[BHSA]=355980|Translit=ṿa
13	תִּשַּׁ֣ק	נשׁק	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	conj	_	Gloss=kiss|Ref=RUT_1.9|Ref[BHSA]=355981|Translit=tishaḳ
14-15	לָהֶ֔ן	_	_	_	_	_	_	_	_
14	לָ	ל	ADP	prep	_	15	case	_	Gloss=to|Ref=RUT_1.9|Ref[BHSA]=355982|Translit=la
15	הֶ֔ן	הן	PRON	prn	Gender=Fem|Number=Plur|Person=3|PronType=Prs	13	obl	_	Ref=RUT_1.9|Translit=hen
16-17	וַתִּשֶּׂ֥אנָה	_	_	_	_	_	_	_	_
16	וַ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=RUT_1.9|Ref[BHSA]=355983|Translit=ṿa
17	תִּשֶּׂ֥אנָה	נשׂא	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	13	conj	_	Gloss=lift|Ref=RUT_1.9|Ref[BHSA]=355984|Translit=tiśeʼnah
18-19	קֹולָ֖ן	_	_	_	_	_	_	_	_
18	קֹולָ֖	קול	NOUN	subs	Gender=Masc|Number=Sing	17	obj	_	Gloss=sound|Ref=RUT_1.9|Ref[BHSA]=355985|Translit=ḳola
19	ן	הן	PRON	prn	Gender=Fem|Number=Plur|Person=3|PronType=Prs	18	nmod:poss	_	Ref=RUT_1.9|Translit=n
20-21	וַתִּבְכֶּֽינָה	_	_	_	_	_	_	_	_
20	וַ	ו	CCONJ	conj	_	21	cc	_	Gloss=and|Ref=RUT_1.9|Ref[BHSA]=355986|Translit=ṿa
21	תִּבְכֶּֽינָה	בכה	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	13	conj	_	Gloss=weep|Ref=RUT_1.9|Ref[BHSA]=355987|Translit=tivkenah
22	׃	׃	PUNCT	punct	_	1	punct	_	Ref=RUT_1.9

~~~

_יתן יהוה לכם ומצאן מנוחה אשה בית אישה ותשק להן ותשאנה קולן ותבכינה׃_

_yiten yehṿah lakhem umtseʼna menuḥah ʼishah bet ʼishah ṿatishaḳ lahen ṿatiśeʼnah ḳolan ṿativkenah_

_"May The LORD give to you and may you find a resting place, each in the house of her husband." And they lifted up their voices and wept._
<!-- Interlanguage links updated So 10. května 2025, 18:16:06 CEST -->
