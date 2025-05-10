---
layout: postag
title: 'NOUN'
shortdef: 'noun'
udver: '2'
---

The tag `NOUN` in Ancient Hebrew is applied to words which generally exhibit both a distinction in number and the ability to participate in compounding (see [compound:smixut]()).

If a word that would otherwise be tagged [ADJ]() participates in compounding, it is treated as substantivized and is retagged as `NOUN`.

<!-- genesis 1013 -->
~~~ conllu
# sent_id = Masoretic-Genesis-35:29-hbo
# text = וַיִּגְוַ֨ע יִצְחָ֤ק וַיָּ֨מָת֙ וַיֵּאָ֣סֶף אֶל־עַמָּ֔יו זָקֵ֖ן וּשְׂבַ֣ע יָמִ֑ים וַיִּקְבְּר֣וּ אֹתֹ֔ו עֵשָׂ֥ו וְיַעֲקֹ֖ב בָּנָֽיו׃ פ
# translit = ṿayigṿaʻ yitsḥaḳ ṿayamat ṿayeʼasef ʼel ʻamaṿ zaḳen uśbaʻ yamim ṿayiḳberu ʼoto ʻeśaṿ ṿeyaʻaḳov banaṿ  p
# visual-style 14 bgColor:blue
# visual-style 14 fgColor:white
1-2	וַיִּגְוַ֨ע	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_35.29|Translit=ṿa
2	יִּגְוַ֨ע	גוע	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=expire|Ref=GEN_35.29|Translit=yigṿaʻ
3	יִצְחָ֤ק	יצחק	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Isaac|Ref=GEN_35.29|Translit=yitsḥaḳ
4-5	וַיָּ֨מָת֙	_	_	_	_	_	_	_	_
4	וַ	ו	CCONJ	conj	_	5	cc	_	Gloss=and|Ref=GEN_35.29|Translit=ṿa
5	יָּ֨מָת֙	מות	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=die|Ref=GEN_35.29|Translit=yamat
6-7	וַיֵּאָ֣סֶף	_	_	_	_	_	_	_	_
6	וַ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=GEN_35.29|Translit=ṿa
7	יֵּאָ֣סֶף	אסף	VERB	verb	Gender=Masc|HebBinyan=NIFAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=gather|Ref=GEN_35.29|Translit=yeʼasef
8	אֶל	אל	ADP	prep	_	10	case	_	Gloss=to|Ref=GEN_35.29|SpaceAfter=No|Translit=ʼel
9	־	־	PUNCT	punct	_	8	punct	_	Ref=GEN_35.29|SpaceAfter=No
10-11	עַמָּ֔יו	_	_	_	_	_	_	_	_
10	עַמָּ֔י	עם	NOUN	subs	Gender=Masc|Number=Plur	7	obl	_	Gloss=people|Ref=GEN_35.29|Translit=ʻama
11	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	Ref=GEN_35.29|Translit=ṿ
12	זָקֵ֖ן	זקן	ADJ	adjv	Gender=Masc|Number=Sing	7	xcomp	_	Gloss=old|Ref=GEN_35.29|Translit=zaḳen
13-14	וּשְׂבַ֣ע	_	_	_	_	_	_	_	_
13	וּ	ו	CCONJ	conj	_	14	cc	_	Gloss=and|Ref=GEN_35.29|Translit=u
14	שְׂבַ֣ע	שׂבע	NOUN	adjv	Gender=Masc|Number=Sing	12	conj	_	Gloss=sated|Ref=GEN_35.29|Translit=śevaʻ
15	יָמִ֑ים	יום	NOUN	subs	Gender=Masc|Number=Plur	14	compound:smixut	_	Gloss=day|Ref=GEN_35.29|Translit=yamim
16-17	וַיִּקְבְּר֣וּ	_	_	_	_	_	_	_	_
16	וַ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=GEN_35.29|Translit=ṿa
17	יִּקְבְּר֣וּ	קבר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=bury|Ref=GEN_35.29|Translit=yiḳberu
18-19	אֹתֹ֔ו	_	_	_	_	_	_	_	_
18	אֹתֹ֔	את	ADP	prep	_	19	case	_	Gloss=<object.marker>|Ref=GEN_35.29|Translit=ʼoto
19	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	obj	_	Ref=GEN_35.29|Translit=ṿ
20	עֵשָׂ֥ו	עשׂו	PROPN	nmpr	Gender=Masc|Number=Sing	17	nsubj	_	Gloss=Esau|Ref=GEN_35.29|Translit=ʻeśaṿ
21-22	וְיַעֲקֹ֖ב	_	_	_	_	_	_	_	_
21	וְ	ו	CCONJ	conj	_	22	cc	_	Gloss=and|Ref=GEN_35.29|Translit=ṿe
22	יַעֲקֹ֖ב	יעקב	PROPN	nmpr	Gender=Masc|Number=Sing	20	conj	_	Gloss=Jacob|Ref=GEN_35.29|Translit=yaʻaḳov
23-24	בָּנָֽיו	_	_	_	_	_	_	_	_
23	בָּנָֽי	בן	NOUN	subs	Gender=Masc|Number=Plur	20	appos	_	Gloss=son|Ref=GEN_35.29|Translit=bana
24	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	nmod:poss	_	Ref=GEN_35.29|Translit=ṿ
25	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_35.29
26	פ	פ	PUNCT	punct	_	2	punct	_	Ref=GEN_35.29

~~~

_ויגוע יצחק וימת ויאסף אל־עמיו זקן **ושבע** ימים ויקברו אתו עשו ויעקב בניו׃ פ_

_ṿayigṿaʻ yitsḥaḳ ṿayamat ṿayeʼasef ʼel ʻamaṿ zaḳen **uśbaʻ** yamim ṿayiḳberu ʼoto ʻeśaṿ ṿeyaʻaḳov banaṿ_

_And Isaac expired and died, old and **full of** days, and Esau and Jacob his sons buried him._

Similarly, if a participle appears as part of a compound and does not have any normal verbal arguments, then the tag is changed from [VERB]() to `NOUN`.

<!-- genesis 1141 -->
~~~ conllu
# sent_id = Masoretic-Genesis-40:2-hbo
# text = וַיִּקְצֹ֣ף פַּרְעֹ֔ה עַ֖ל שְׁנֵ֣י סָרִיסָ֑יו עַ֚ל שַׂ֣ר הַמַּשְׁקִ֔ים וְעַ֖ל שַׂ֥ר הָאֹופִֽים׃
# translit = ṿayiḳtsof parʻoh ʻal shene sarisaṿ ʻal śar hamashḳim ṿeʻal śar haʼofim
# visual-style 11 bgColor:blue
# visual-style 11 fgColor:white
1-2	וַיִּקְצֹ֣ף	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_40.2|Translit=ṿa
2	יִּקְצֹ֣ף	קצף	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=be.angry|Ref=GEN_40.2|Translit=yiḳtsof
3	פַּרְעֹ֔ה	פרעה	NOUN	subs	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=pharaoh|Ref=GEN_40.2|Translit=parʻoh
4	עַ֖ל	על	ADP	prep	_	6	case	_	Gloss=upon|Ref=GEN_40.2|Translit=ʻal
5	שְׁנֵ֣י	שׁנים	NUM	subs	Number=Dual|NumType=Card	6	nummod	_	Gloss=two|Ref=GEN_40.2|Translit=shene
6-7	סָרִיסָ֑יו	_	_	_	_	_	_	_	_
6	סָרִיסָ֑י	סריס	NOUN	subs	Gender=Masc|Number=Plur	2	obl	_	Gloss=official|Ref=GEN_40.2|Translit=sarisa
7	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	Ref=GEN_40.2|Translit=ṿ
8	עַ֚ל	על	ADP	prep	_	9	case	_	Gloss=upon|Ref=GEN_40.2|Translit=ʻal
9	שַׂ֣ר	שׂר	NOUN	subs	Gender=Masc|Number=Sing	6	appos	_	Gloss=chief|Ref=GEN_40.2|Translit=śar
10-11	הַמַּשְׁקִ֔ים	_	_	_	_	_	_	_	_
10	הַ	ה	DET	art	PronType=Art	11	det	_	Gloss=the|Ref=GEN_40.2|Translit=ha
11	מַּשְׁקִ֔ים	שׁקה	NOUN	verb	Gender=Masc|HebBinyan=HIFIL|Number=Plur|VerbForm=Part	9	compound:smixut	_	Gloss=give.drink|Ref=GEN_40.2|Translit=mashḳim
12-13	וְעַ֖ל	_	_	_	_	_	_	_	_
12	וְ	ו	CCONJ	conj	_	14	cc	_	Gloss=and|Ref=GEN_40.2|Translit=ṿe
13	עַ֖ל	על	ADP	prep	_	14	case	_	Gloss=upon|Ref=GEN_40.2|Translit=ʻal
14	שַׂ֥ר	שׂר	NOUN	subs	Gender=Masc|Number=Sing	9	conj	_	Gloss=chief|Ref=GEN_40.2|Translit=śar
15-16	הָאֹופִֽים	_	_	_	_	_	_	_	_
15	הָ	ה	DET	art	PronType=Art	16	det	_	Gloss=the|Ref=GEN_40.2|Translit=ha
16	אֹופִֽים	אפה	NOUN	subs	Gender=Masc|Number=Plur	14	compound:smixut	_	Gloss=baker|Ref=GEN_40.2|Translit=ʼofim
17	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_40.2

~~~

_ויקצף פרעה על שני סריסיו על שר **המשקים** ועל שר האופים׃_

_ṿayiḳtsof parʻoh ʻal shene sarisaṿ ʻal śar **hamashḳim** ṿeʻal śar haʼofim_

_And Pharaoh was angry with his two officials, with the chief **cupbearer** and with the chief baker._

Sometimes a participle forms a compound with the preceding word, but has verbal arguments (particularly the object appearing with את rather than as a continuation of the compound). In these cases, we default to the original tag, and attach it to the preceding noun with [acl:relcl]().

<!-- genesis 11 -->
~~~ conllu
# sent_id = Masoretic-Genesis-1:11-hbo
# text = וַיֹּ֣אמֶר אֱלֹהִ֗ים תַּֽדְשֵׁ֤א הָאָ֨רֶץ֙ דֶּ֔שֶׁא עֵ֚שֶׂב מַזְרִ֣יעַ זֶ֔רַע עֵ֣ץ פְּרִ֞י עֹ֤שֶׂה פְּרִי֙ לְמִינֹ֔ו אֲשֶׁ֥ר זַרְעֹו־בֹ֖ו עַל־הָאָ֑רֶץ וַֽיְהִי־כֵֽן׃
# translit = ṿayoʼmer ʼelohim tadsheʼ haʼarets desheʼ ʻeśev mazriʻa zeraʻ ʻets peri ʻośeh peri lemino ʼasher zarʻo bo ʻal haʼarets ṿayhi ken
# visual-style 9 bgColor:blue
# visual-style 9 fgColor:white
# visual-style 13 bgColor:blue
# visual-style 13 fgColor:white
1-2	וַיֹּ֣אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_1.11|Translit=ṿa
2	יֹּ֣אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_1.11|Translit=yoʼmer
3	אֱלֹהִ֗ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=god(s)|Ref=GEN_1.11|Translit=ʼelohim
4	תַּֽדְשֵׁ֤א	דשׁא	VERB	verb	Aspect=Imp|Gender=Fem|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	Gloss=grow.green|Ref=GEN_1.11|Translit=tadsheʼ
5-6	הָאָ֨רֶץ֙	_	_	_	_	_	_	_	_
5	הָ	ה	DET	art	PronType=Art	6	det	_	Gloss=the|Ref=GEN_1.11|Translit=ha
6	אָ֨רֶץ֙	ארץ	NOUN	subs	Gender=Fem|Number=Sing	4	nsubj	_	Gloss=earth|Ref=GEN_1.11|Translit=ʼarets
7	דֶּ֔שֶׁא	דשׁא	NOUN	subs	Gender=Masc|Number=Sing	4	obj	_	Gloss=young.grass|Ref=GEN_1.11|Translit=desheʼ
8	עֵ֚שֶׂב	עשׂב	NOUN	subs	Gender=Masc|Number=Sing	7	appos	_	Gloss=herb|Ref=GEN_1.11|Translit=ʻeśev
9	מַזְרִ֣יעַ	זרע	VERB	verb	Gender=Masc|HebBinyan=HIFIL|Number=Sing|VerbForm=Part	8	acl:relcl	_	Gloss=sow|Ref=GEN_1.11|Translit=mazriʻa
10	זֶ֔רַע	זרע	NOUN	subs	Gender=Masc|Number=Sing	9	obj	_	Gloss=seed|Ref=GEN_1.11|Translit=zeraʻ
11	עֵ֣ץ	עץ	NOUN	subs	Gender=Masc|Number=Sing	7	appos	_	Gloss=tree|Ref=GEN_1.11|Translit=ʻets
12	פְּרִ֞י	פרי	NOUN	subs	Gender=Masc|Number=Sing	11	compound:smixut	_	Gloss=fruit|Ref=GEN_1.11|Translit=peri
13	עֹ֤שֶׂה	עשׂה	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	11	acl:relcl	_	Gloss=make|Ref=GEN_1.11|Translit=ʻośeh
14	פְּרִי֙	פרי	NOUN	subs	Gender=Masc|Number=Sing	13	obj	_	Gloss=fruit|Ref=GEN_1.11|Translit=peri
15-17	לְמִינֹ֔ו	_	_	_	_	_	_	_	_
15	לְ	ל	ADP	prep	_	16	case	_	Gloss=to|Ref=GEN_1.11|Translit=le
16	מִינֹ֔	מין	NOUN	subs	Gender=Masc|Number=Sing	13	obl	_	Gloss=kind|Ref=GEN_1.11|Translit=mino
17	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	16	nmod:poss	_	Ref=GEN_1.11|Translit=ṿ
18	אֲשֶׁ֥ר	אשׁר	SCONJ	conj	_	23	mark	_	Gloss=<relative>|Ref=GEN_1.11|Translit=ʼasher
19-20	זַרְעֹו	_	_	_	_	_	_	_	_
19	זַרְעֹ	זרע	NOUN	subs	Gender=Masc|Number=Sing	23	nsubj	_	Gloss=seed|Ref=GEN_1.11|Translit=zarʻo
20	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nmod:poss	_	Ref=GEN_1.11|Translit=ṿ
21	־	־	PUNCT	punct	_	19	punct	_	Ref=GEN_1.11|SpaceAfter=No
22-23	בֹ֖ו	_	_	_	_	_	_	_	_
22	בֹ֖	ב	ADP	prep	_	23	case	_	Gloss=in|Ref=GEN_1.11|Translit=bo
23	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	acl:relcl	_	Ref=GEN_1.11|Translit=ṿ
24	עַל	על	ADP	prep	_	27	case	_	Gloss=upon|Ref=GEN_1.11|SpaceAfter=No|Translit=ʻal
25	־	־	PUNCT	punct	_	24	punct	_	Ref=GEN_1.11|SpaceAfter=No
26-27	הָאָ֑רֶץ	_	_	_	_	_	_	_	_
26	הָ	ה	DET	art	PronType=Art	27	det	_	Gloss=the|Ref=GEN_1.11|Translit=ha
27	אָ֑רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	4	obl	_	Gloss=earth|Ref=GEN_1.11|Translit=ʼarets
28-29	וַֽיְהִי	_	_	_	_	_	_	_	_
28	וַֽ	ו	CCONJ	conj	_	29	cc	_	Gloss=and|Ref=GEN_1.11|Translit=ṿa
29	יְהִי	היה	AUX	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=be|Ref=GEN_1.11|Translit=yehi
30	־	־	PUNCT	punct	_	31	punct	_	Ref=GEN_1.11|SpaceAfter=No
31	כֵֽן	כן	ADV	advb	_	29	advmod	_	Gloss=thus|Ref=GEN_1.11|SpaceAfter=No|Translit=ken
32	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_1.11

~~~

_ויאמר אלהים תדשא הארץ דשא עשב **מזריע** זרע עץ פרי **עשה** פרי למינו אשר זרעו־בו על־הארץ ויהי־כן׃_

_ṿayoʼmer ʼelohim tadsheʼ haʼarets desheʼ ʻeśev **mazriʻa** zeraʻ ʻets peri **ʻośeh** peri lemino ʼasher zarʻo bo ʻal haʼarets ṿayhi ken_

_And God said "Let the earth grow greenery, herbs **producing** seed, fruit trees **making** fruit according to their kinds which have seed in them upon the earth." and it was so._

## Features

All `NOUN`s should have values for [Gender]() and [Number]().

When a `NOUN` is a retagged participle, it should also have `VerbForm=Part`, [HebBinyan](), and `Voice=Pass` (if applicable).

## XPOS

Words tagged `NOUN` will generally have a BHSA POS tag of `subs`, apart from the retagging cases discussed above, which will be `adjv` or `verb`. In the handful of cases where BHSA marks a multiword name as a single token, `NOUN` may correspond to `nmpr`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:45 CEST -->
