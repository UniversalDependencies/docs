---
layout: relation
title: 'compound:smixut'
shortdef: 'construct state modification'
udver: '2'
---

The `compound:smixut` subtype of the [compound]() relation is used for a noun modifying another
noun in the construct state.
The construct state is a morphological form often characterized by a reduction of the final syllable, for example בנים banim "sons" becomes בני bane "sons of".
When a noun is in the construct state, the word following it will nearly always be another noun with at most a determiner in between.

<!-- ruth 81 -->
~~~ conllu
# sent_id = Masoretic-Ruth-4:18-hbo
# text = וְאֵ֨לֶּה֙ תֹּולְדֹ֣ות פָּ֔רֶץ פֶּ֖רֶץ הֹולִ֥יד אֶת־חֶצְרֹֽון׃
# translit = ṿeʼeleh toldot parets perets holid ʼet ḥetsron
# visual-style 3 4 compound:smixut color:blue
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

_ואלה תולדות פרץ פרץ הוליד את־חצרון׃_

_ṿeʼeleh toldot parets perets holid ʼet ḥetsron_

_And these were the generations of Perez; Perez fathered Hezron._

If the noun phrase is definite, there will be a determiner only on the final noun of the sequence.

<!-- ruth 65 -->
~~~ conllu
# sent_id = Masoretic-Ruth-4:2-hbo
# text = וַיִּקַּ֞ח עֲשָׂרָ֧ה אֲנָשִׁ֛ים מִזִּקְנֵ֥י הָעִ֖יר וַיֹּ֣אמֶר שְׁבוּ־פֹ֑ה וַיֵּשֵֽׁבוּ׃
# translit = ṿayiḳaḥ ʻaśarah ʼanashim miziḳne haʻir ṿayoʼmer shevu poh ṿayeshevu
# visual-style 6 8 compound:smixut color:blue
# visual-style 8 7 det color:blue
1-2	וַיִּקַּ֞ח	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=RUTH_4.2|Translit=ṿa
2	יִּקַּ֞ח	לקח	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=take|Ref=RUTH_4.2|Translit=yiḳaḥ
3	עֲשָׂרָ֧ה	עשׂרה	NUM	subs	Gender=Fem|Number=Sing|NumType=Card	4	nummod	_	Gloss=ten|Ref=RUTH_4.2|Translit=ʻaśarah
4	אֲנָשִׁ֛ים	אישׁ	NOUN	subs	Gender=Masc|Number=Plur	2	obj	_	Gloss=man|Ref=RUTH_4.2|Translit=ʼanashim
5-6	מִזִּקְנֵ֥י	_	_	_	_	_	_	_	_
5	מִ	מן	ADP	prep	_	6	case	_	Gloss=from|Ref=RUTH_4.2|Translit=mi
6	זִּקְנֵ֥י	זקן	NOUN	adjv	Gender=Masc|Number=Plur	2	obl	_	Gloss=old|Ref=RUTH_4.2|Translit=ziḳne
7-8	הָעִ֖יר	_	_	_	_	_	_	_	_
7	הָ	ה	DET	art	PronType=Art	8	det	_	Gloss=the|Ref=RUTH_4.2|Translit=ha
8	עִ֖יר	עיר	NOUN	subs	Gender=Fem|Number=Sing	6	compound:smixut	_	Gloss=town|Ref=RUTH_4.2|Translit=ʻir
9-10	וַיֹּ֣אמֶר	_	_	_	_	_	_	_	_
9	וַ	ו	CCONJ	conj	_	10	cc	_	Gloss=and|Ref=RUTH_4.2|Translit=ṿa
10	יֹּ֣אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=say|Ref=RUTH_4.2|Translit=yoʼmer
11	שְׁבוּ	ישׁב	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	10	ccomp	_	Gloss=sit|Ref=RUTH_4.2|SpaceAfter=No|Translit=shevu
12	־	־	PUNCT	punct	_	13	punct	_	Ref=RUTH_4.2|SpaceAfter=No
13	פֹ֑ה	פה	ADV	advb	_	11	advmod	_	Gloss=here|Ref=RUTH_4.2|Translit=poh
14-15	וַיֵּשֵֽׁבוּ	_	_	_	_	_	_	_	_
14	וַ	ו	CCONJ	conj	_	15	cc	_	Gloss=and|Ref=RUTH_4.2|Translit=ṿa
15	יֵּשֵֽׁבוּ	ישׁב	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=sit|Ref=RUTH_4.2|Translit=yeshevu
16	׃	׃	PUNCT	punct	_	2	punct	_	Ref=RUTH_4.2

~~~

_ויקח עשרה אנשים מזקני העיר ויאמר שבו־פה וישבו׃_

_ṿayiḳaḥ ʻaśarah ʼanashim miziḳne haʻir ṿayoʼmer shevu poh ṿayeshevu_

_And he took ten men from the elders of the city and he said "Sit here." and they sat._

If any adjectives or other modifiers are present, they will appear after the compound and which word they attach to will have to be determined by [Gender]() and [Number]() agreement or by semantics.

<!-- genesis 246 -->
~~~ conllu
# sent_id = Masoretic-Genesis-10:21-hbo
# text = וּלְשֵׁ֥ם יֻלַּ֖ד גַּם־ה֑וּא אֲבִי֙ כָּל־בְּנֵי־עֵ֔בֶר אֲחִ֖י יֶ֥פֶת הַגָּדֹֽול׃
# translit = ulshem yulad gam huʼ ʼavi kal bene ʻever ʼaḥi yefet hagadol
# visual-style 14 15 compound:smixut color:blue
# visual-style 14 17 amod color:blue
1-3	וּלְשֵׁ֥ם	_	_	_	_	_	_	_	_
1	וּ	ו	CCONJ	conj	_	4	cc	_	Gloss=and|Ref=GEN_10.21|Translit=u
2	לְ	ל	ADP	prep	_	3	case	_	Gloss=to|Ref=GEN_10.21|Translit=le
3	שֵׁ֥ם	שׁם	PROPN	nmpr	Gender=Masc|Number=Sing	4	obl	_	Gloss=Shem|Ref=GEN_10.21|Translit=shem
4	יֻלַּ֖ד	ילד	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PUAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=bear|Ref=GEN_10.21|Translit=yulad
5	גַּם	גם	ADV	advb	_	7	advmod	_	Gloss=even|Ref=GEN_10.21|SpaceAfter=No|Translit=gam
6	־	־	PUNCT	punct	_	5	punct	_	Ref=GEN_10.21|SpaceAfter=No
7	ה֑וּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	Gloss=he|Ref=GEN_10.21|Translit=huʼ
8	אֲבִי֙	אב	NOUN	subs	Gender=Masc|Number=Sing	4	parataxis	_	Gloss=father|Ref=GEN_10.21|Translit=ʼavi
9	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	8	compound:smixut	_	Gloss=whole|Ref=GEN_10.21|SpaceAfter=No|Translit=kal
10	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_10.21|SpaceAfter=No
11	בְּנֵי	בן	NOUN	subs	Gender=Masc|Number=Plur	9	compound:smixut	_	Gloss=son|Ref=GEN_10.21|SpaceAfter=No|Translit=bene
12	־	־	PUNCT	punct	_	13	punct	_	Ref=GEN_10.21|SpaceAfter=No
13	עֵ֔בֶר	עבר	PROPN	nmpr	Gender=Masc|Number=Sing	11	compound:smixut	_	Gloss=Eber|Ref=GEN_10.21|Translit=ʻever
14	אֲחִ֖י	אח	NOUN	subs	Gender=Masc|Number=Sing	8	conj	_	Gloss=brother|Ref=GEN_10.21|Translit=ʼaḥi
15	יֶ֥פֶת	יפת	PROPN	nmpr	Gender=Masc|Number=Sing	14	compound:smixut	_	Gloss=Japheth|Ref=GEN_10.21|Translit=yefet
16-17	הַגָּדֹֽול	_	_	_	_	_	_	_	_
16	הַ	ה	DET	art	PronType=Art	17	det	_	Gloss=the|Ref=GEN_10.21|Translit=ha
17	גָּדֹֽול	גדול	ADJ	adjv	Gender=Masc|Number=Sing	14	amod	_	Gloss=great|Ref=GEN_10.21|Translit=gadol
18	׃	׃	PUNCT	punct	_	4	punct	_	Ref=GEN_10.21

~~~

_ולשם ילד גם־הוא אבי כל־בני־עבר אחי יפת הגדול׃_

_ulshem yulad gam huʼ ʼavi kal bene ʻever ʼaḥi yefet hagadol_

_And to Shem, to him also, was born the father of all the sons of Eber, [he was] the elder brother of Japheth._

<!-- genesis 213 -->
~~~ conllu
# sent_id = Masoretic-Genesis-9:12-hbo
# text = וַיֹּ֣אמֶר אֱלֹהִ֗ים זֹ֤את אֹֽות־הַבְּרִית֙ אֲשֶׁר־אֲנִ֣י נֹתֵ֗ן בֵּינִי֙ וּבֵ֣ינֵיכֶ֔ם וּבֵ֛ין כָּל־נֶ֥פֶשׁ חַיָּ֖ה אֲשֶׁ֣ר אִתְּכֶ֑ם לְדֹרֹ֖ת עֹולָֽם׃
# translit = ṿayoʼmer ʼelohim zoʼt ʼot habrit ʼasher ʼani noten beni uvenekhem uven kal nefesh ḥayah ʼasher ʼitkem ledorot ʻolam
# visual-style 20 22 compound:smixut color:blue
# visual-style 22 23 amod color:blue
1-2	וַיֹּ֣אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_9.12|Translit=ṿa
2	יֹּ֣אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_9.12|Translit=yoʼmer
3	אֱלֹהִ֗ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=god(s)|Ref=GEN_9.12|Translit=ʼelohim
4	זֹ֤את	זאת	PRON	prde	Gender=Fem|Number=Sing|PronType=Dem	5	nsubj	_	Gloss=this|Ref=GEN_9.12|Translit=zoʼt
5	אֹֽות	אות	NOUN	subs	Gender=Masc|Number=Sing	2	ccomp	_	Gloss=sign|Ref=GEN_9.12|SpaceAfter=No|Translit=ʼot
6	־	־	PUNCT	punct	_	8	punct	_	Ref=GEN_9.12|SpaceAfter=No
7-8	הַבְּרִית֙	_	_	_	_	_	_	_	_
7	הַ	ה	DET	art	PronType=Art	8	det	_	Gloss=the|Ref=GEN_9.12|Translit=ha
8	בְּרִית֙	ברית	NOUN	subs	Gender=Fem|Number=Sing	5	compound:smixut	_	Gloss=covenant|Ref=GEN_9.12|Translit=berit
9	אֲשֶׁר	אשׁר	SCONJ	conj	_	12	mark	_	Gloss=<relative>|Ref=GEN_9.12|SpaceAfter=No|Translit=ʼasher
10	־	־	PUNCT	punct	_	9	punct	_	Ref=GEN_9.12|SpaceAfter=No
11	אֲנִ֣י	אני	PRON	prps	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	Gloss=i|Ref=GEN_9.12|Translit=ʼani
12	נֹתֵ֗ן	נתן	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	8	acl:relcl	_	Gloss=give|Ref=GEN_9.12|Translit=noten
13-14	בֵּינִי֙	_	_	_	_	_	_	_	_
13	בֵּינִ	בין	ADP	subs	_	14	case	_	Gloss=interval|Ref=GEN_9.12|Translit=beni
14	י֙	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	12	obl	_	Ref=GEN_9.12|Translit=
15-17	וּבֵ֣ינֵיכֶ֔ם	_	_	_	_	_	_	_	_
15	וּ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=GEN_9.12|Translit=u
16	בֵ֣ינֵי	בין	ADP	subs	_	17	case	_	Gloss=interval|Ref=GEN_9.12|Translit=bene
17	כֶ֔ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	14	conj	_	Ref=GEN_9.12|Translit=kem
18-19	וּבֵ֛ין	_	_	_	_	_	_	_	_
18	וּ	ו	CCONJ	conj	_	20	cc	_	Gloss=and|Ref=GEN_9.12|Translit=u
19	בֵ֛ין	בין	ADP	subs	_	20	case	_	Gloss=interval|Ref=GEN_9.12|Translit=ben
20	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	14	conj	_	Gloss=whole|Ref=GEN_9.12|SpaceAfter=No|Translit=kal
21	־	־	PUNCT	punct	_	22	punct	_	Ref=GEN_9.12|SpaceAfter=No
22	נֶ֥פֶשׁ	נפשׁ	NOUN	subs	Gender=Fem|Number=Sing	20	compound:smixut	_	Gloss=soul|Ref=GEN_9.12|Translit=nefesh
23	חַיָּ֖ה	חי	ADJ	adjv	Gender=Fem|Number=Sing	22	amod	_	Gloss=alive|Ref=GEN_9.12|Translit=ḥayah
24	אֲשֶׁ֣ר	אשׁר	SCONJ	conj	_	26	mark	_	Gloss=<relative>|Ref=GEN_9.12|Translit=ʼasher
25-26	אִתְּכֶ֑ם	_	_	_	_	_	_	_	_
25	אִתְּ	את	ADP	prep	_	26	case	_	Gloss=together.with|Ref=GEN_9.12|Translit=ʼit
26	כֶ֑ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	20	acl:relcl	_	Ref=GEN_9.12|Translit=kem
27-28	לְדֹרֹ֖ת	_	_	_	_	_	_	_	_
27	לְ	ל	ADP	prep	_	28	case	_	Gloss=to|Ref=GEN_9.12|Translit=le
28	דֹרֹ֖ת	דור	NOUN	subs	Gender=Masc|Number=Plur	12	obl	_	Gloss=generation|Ref=GEN_9.12|Translit=dorot
29	עֹולָֽם	עולם	NOUN	subs	Gender=Masc|Number=Sing	28	compound:smixut	_	Gloss=eternity|Ref=GEN_9.12|SpaceAfter=No|Translit=ʻolam
30	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_9.12

~~~

_ויאמר אלהים זאת אות־הברית אשר־אני נתן ביני וביניכם ובין כל־נפש חיה אשר אתכם לדרת עולם׃_

_ṿayoʼmer ʼelohim zoʼt ʼot habrit ʼasher ʼani noten beni uvenekhem uven kal nefesh ḥayah ʼasher ʼitkem ledorot ʻolam_

_And God said "This is the sign of the covenant that I am making between me and between you and between every living being that is with you for eternal generations."._

In general, a noun attached with `compound:smixut` is not expected to have dependents besides [amod](), [det](), [nmod:poss](), and [punct](), with most other modifiers attaching to the head of the compound.
However, there are a handful of cases where what follows only makes semantic sense if it is attached to the dependent instead.
Thus, there are exceptions for [acl:relcl]() and [conj]().

<!-- genesis 58 -->
~~~ conllu
# sent_id = Masoretic-Genesis-3:3-hbo
# text = וּמִפְּרִ֣י הָעֵץ֮ אֲשֶׁ֣ר בְּתֹוךְ־הַגָּן֒ אָמַ֣ר אֱלֹהִ֗ים לֹ֤א תֹֽאכְלוּ֙ מִמֶּ֔נּוּ וְלֹ֥א תִגְּע֖וּ בֹּ֑ו פֶּן־תְּמֻתֽוּן׃
# translit = umipri haʻets ʼasher betokh hagan ʼamar ʼelohim loʼ toʼkhlu mimenu ṿeloʼ tigʻu bo pen temutun
# visual-style 3 5 compound:smixut color:blue
# visual-style 5 8 acl:relcl color:blue
1-3	וּמִפְּרִ֣י	_	_	_	_	_	_	_	_
1	וּ	ו	CCONJ	conj	_	3	cc	_	Gloss=and|Ref=GEN_3.3|Translit=u
2	מִ	מן	ADP	prep	_	3	case	_	Gloss=from|Ref=GEN_3.3|Translit=mi
3	פְּרִ֣י	פרי	NOUN	subs	Gender=Masc|Number=Sing	15	dislocated	_	Gloss=fruit|Ref=GEN_3.3|Translit=peri
4-5	הָעֵץ֮	_	_	_	_	_	_	_	_
4	הָ	ה	DET	art	PronType=Art	5	det	_	Gloss=the|Ref=GEN_3.3|Translit=ha
5	עֵץ֮	עץ	NOUN	subs	Gender=Masc|Number=Sing	3	compound:smixut	_	Gloss=tree|Ref=GEN_3.3|Translit=ʻets
6	אֲשֶׁ֣ר	אשׁר	SCONJ	conj	_	8	mark	_	Gloss=<relative>|Ref=GEN_3.3|Translit=ʼasher
7-8	בְּתֹוךְ	_	_	_	_	_	_	_	_
7	בְּ	ב	ADP	prep	_	8	case	_	Gloss=in|Ref=GEN_3.3|Translit=be
8	תֹוךְ	תוך	NOUN	subs	Gender=Masc|Number=Sing	5	acl:relcl	_	Gloss=midst|Ref=GEN_3.3|Translit=tokh
9	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_3.3|SpaceAfter=No
10-11	הַגָּן֒	_	_	_	_	_	_	_	_
10	הַ	ה	DET	art	PronType=Art	11	det	_	Gloss=the|Ref=GEN_3.3|Translit=ha
11	גָּן֒	גן	NOUN	subs	Gender=Fem|Number=Sing	8	compound:smixut	_	Gloss=garden|Ref=GEN_3.3|Translit=gan
12	אָמַ֣ר	אמר	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_3.3|Translit=ʼamar
13	אֱלֹהִ֗ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	12	nsubj	_	Gloss=god(s)|Ref=GEN_3.3|Translit=ʼelohim
14	לֹ֤א	לא	ADV	nega	Polarity=Neg	15	advmod	_	Gloss=not|Ref=GEN_3.3|Translit=loʼ
15	תֹֽאכְלוּ֙	אכל	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	12	ccomp	_	Gloss=eat|Ref=GEN_3.3|Translit=toʼkhlu
16-17	מִמֶּ֔נּוּ	_	_	_	_	_	_	_	_
16	מִמֶּ֔	מן	ADP	prep	_	17	case	_	Gloss=from|Ref=GEN_3.3|Translit=mime
17	נּוּ	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	obl	_	Ref=GEN_3.3|Translit=nu
18-19	וְלֹ֥א	_	_	_	_	_	_	_	_
18	וְ	ו	CCONJ	conj	_	20	cc	_	Gloss=and|Ref=GEN_3.3|Translit=ṿe
19	לֹ֥א	לא	ADV	nega	Polarity=Neg	20	advmod	_	Gloss=not|Ref=GEN_3.3|Translit=loʼ
20	תִגְּע֖וּ	נגע	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	15	conj	_	Gloss=touch|Ref=GEN_3.3|Translit=tigʻu
21-22	בֹּ֑ו	_	_	_	_	_	_	_	_
21	בֹּ֑	ב	ADP	prep	_	22	case	_	Gloss=in|Ref=GEN_3.3|Translit=bo
22	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	obl	_	Ref=GEN_3.3|Translit=ṿ
23	פֶּן	פן	SCONJ	conj	_	25	mark	_	Gloss=lest|Ref=GEN_3.3|SpaceAfter=No|Translit=pen
24	־	־	PUNCT	punct	_	23	punct	_	Ref=GEN_3.3|SpaceAfter=No
25	תְּמֻתֽוּן	מות	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	15	advcl	_	Gloss=die|Ref=GEN_3.3|SpaceAfter=No|Translit=temutun
26	׃	׃	PUNCT	punct	_	12	punct	_	Ref=GEN_3.3

~~~

_ומפרי העץ אשר בתוך־הגן אמר אלהים לא תאכלו ממנו ולא תגעו בו פן־תמתון׃_

_umipri haʻets ʼasher betokh hagan ʼamar ʼelohim loʼ toʼkhlu mimenu ṿeloʼ tigʻu bo pen temutun_

_"And from the fruit of the tree which is in the middle of the garden, God said "Do not eat from it and do not touch it, lest you die."."_

<!-- genesis 34 -->
~~~ conllu
# sent_id = Masoretic-Genesis-2:4-hbo
# text = אֵ֣לֶּה תֹולְדֹ֧ות הַשָּׁמַ֛יִם וְהָאָ֖רֶץ בְּהִבָּֽרְאָ֑ם בְּיֹ֗ום עֲשֹׂ֛ות יְהוָ֥ה אֱלֹהִ֖ים אֶ֥רֶץ וְשָׁמָֽיִם׃
# translit = ʼeleh toldot hashamayim ṿehaʼarets behibarʼam beyom ʻaśot yehṿah ʼelohim ʼerets ṿeshamayim
# visual-style 2 4 compound:smixut color:blue
# visual-style 4 7 conj color:blue
1	אֵ֣לֶּה	אלה	PRON	prde	Number=Plur|PronType=Dem	2	nsubj	_	Gloss=these|Ref=GEN_2.4|Translit=ʼeleh
2	תֹולְדֹ֧ות	תולדות	NOUN	subs	Gender=Fem|Number=Plur	0	root	_	Gloss=generations|Ref=GEN_2.4|Translit=toldot
3-4	הַשָּׁמַ֛יִם	_	_	_	_	_	_	_	_
3	הַ	ה	DET	art	PronType=Art	4	det	_	Gloss=the|Ref=GEN_2.4|Translit=ha
4	שָּׁמַ֛יִם	שׁמים	NOUN	subs	Gender=Masc|Number=Plur	2	compound:smixut	_	Gloss=heavens|Ref=GEN_2.4|Translit=shamayim
5-7	וְהָאָ֖רֶץ	_	_	_	_	_	_	_	_
5	וְ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=GEN_2.4|Translit=ṿe
6	הָ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=GEN_2.4|Translit=ha
7	אָ֖רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	4	conj	_	Gloss=earth|Ref=GEN_2.4|Translit=ʼarets
8-10	בְּהִבָּֽרְאָ֑ם	_	_	_	_	_	_	_	_
8	בְּ	ב	ADP	prep	_	9	case	_	Gloss=in|Ref=GEN_2.4|Translit=be
9	הִבָּֽרְאָ֑	ברא	VERB	verb	HebBinyan=NIFAL|VerbForm=Inf	2	advcl	_	Gloss=create|Ref=GEN_2.4|Translit=hibarʼa
10	ם	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	nsubj	_	Ref=GEN_2.4|Translit=m
11-12	בְּיֹ֗ום	_	_	_	_	_	_	_	_
11	בְּ	ב	ADP	prep	_	12	case	_	Gloss=in|Ref=GEN_2.4|Translit=be
12	יֹ֗ום	יום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=day|Ref=GEN_2.4|Translit=yom
13	עֲשֹׂ֛ות	עשׂה	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	12	acl	_	Gloss=make|Ref=GEN_2.4|Translit=ʻaśot
14	יְהוָ֥ה	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	13	nsubj	_	Gloss=YHWH|Ref=GEN_2.4|Translit=yehṿah
15	אֱלֹהִ֖ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	14	appos	_	Gloss=god(s)|Ref=GEN_2.4|Translit=ʼelohim
16	אֶ֥רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	13	obj	_	Gloss=earth|Ref=GEN_2.4|Translit=ʼerets
17-18	וְשָׁמָֽיִם	_	_	_	_	_	_	_	_
17	וְ	ו	CCONJ	conj	_	18	cc	_	Gloss=and|Ref=GEN_2.4|Translit=ṿe
18	שָׁמָֽיִם	שׁמים	NOUN	subs	Gender=Masc|Number=Plur	16	conj	_	Gloss=heavens|Ref=GEN_2.4|Translit=shamayim
19	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_2.4

~~~

_אלה תולדות השמים והארץ בהבראם ביום עשות יהוה אלהים ארץ ושמים׃_

_ʼeleh toldot hashamayim ṿehaʼarets behibarʼam beyom ʻaśot yehṿah ʼelohim ʼerets ṿeshamayim_

_These are the generations of the heavens and the earth when they were created in the day that The LORD made earth and heavens._

<!-- Interlanguage links updated So 10. května 2025, 18:15:14 CEST -->
