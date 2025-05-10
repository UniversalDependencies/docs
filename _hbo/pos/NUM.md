---
layout: postag
title: 'NUM'
shortdef: 'number'
udver: '2'
---

The tag `NUM` is applied to cardinal numerals (אחד /ʼeḥad/ "one", שׁנים /shayim/ "two", etc).

<!-- genesis 1330 -->
~~~ conllu
# sent_id = Masoretic-Genesis-45:6-hbo
# text = כִּי־זֶ֛ה שְׁנָתַ֥יִם הָרָעָ֖ב בְּקֶ֣רֶב הָאָ֑רֶץ וְעֹוד֙ חָמֵ֣שׁ שָׁנִ֔ים אֲשֶׁ֥ר אֵין־חָרִ֖ישׁ וְקָצִּֽיר׃
# translit = ki zeh shenatayim haraʻav beḳerev haʼarets ṿeʻod ḥamesh shanim ʼasher ʼen ḥarish ṿeḳatsir
# visual-style 13 bgColor:blue
# visual-style 13 fgColor:white
1	כִּי	כי	SCONJ	conj	_	8	mark	_	Gloss=that|Ref=GEN_45.6|SpaceAfter=No|Translit=ki
2	־	־	PUNCT	punct	_	1	punct	_	Ref=GEN_45.6|SpaceAfter=No
3	זֶ֛ה	זה	PRON	prde	Gender=Masc|Number=Sing|PronType=Dem	8	expl	_	Gloss=this|Ref=GEN_45.6|Translit=zeh
4	שְׁנָתַ֥יִם	שׁנה	NOUN	subs	Gender=Fem|Number=Dual	8	obl	_	Gloss=year|Ref=GEN_45.6|Translit=shenatayim
5-6	הָרָעָ֖ב	_	_	_	_	_	_	_	_
5	הָ	ה	DET	art	PronType=Art	6	det	_	Gloss=the|Ref=GEN_45.6|Translit=ha
6	רָעָ֖ב	רעב	NOUN	subs	Gender=Masc|Number=Sing	8	nsubj	_	Gloss=hunger|Ref=GEN_45.6|Translit=raʻav
7-8	בְּקֶ֣רֶב	_	_	_	_	_	_	_	_
7	בְּ	ב	ADP	prep	_	8	case	_	Gloss=in|Ref=GEN_45.6|Translit=be
8	קֶ֣רֶב	קרב	NOUN	subs	Gender=Masc|Number=Sing	0	root	_	Gloss=interior|Ref=GEN_45.6|Translit=ḳerev
9-10	הָאָ֑רֶץ	_	_	_	_	_	_	_	_
9	הָ	ה	DET	art	PronType=Art	10	det	_	Gloss=the|Ref=GEN_45.6|Translit=ha
10	אָ֑רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	8	compound:smixut	_	Gloss=earth|Ref=GEN_45.6|Translit=ʼarets
11-12	וְעֹוד֙	_	_	_	_	_	_	_	_
11	וְ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_45.6|Translit=ṿe
12	עֹוד֙	עוד	ADV	subs	_	8	conj	_	Gloss=duration|Ref=GEN_45.6|Translit=ʻod
13	חָמֵ֣שׁ	חמשׁ	NUM	subs	Number=Sing|NumType=Card	14	nummod	_	Gloss=five|Ref=GEN_45.6|Translit=ḥamesh
14	שָׁנִ֔ים	שׁנה	NOUN	subs	Gender=Fem|Number=Plur	12	nsubj	_	Gloss=year|Ref=GEN_45.6|Translit=shanim
15	אֲשֶׁ֥ר	אשׁר	SCONJ	conj	_	16	mark	_	Gloss=<relative>|Ref=GEN_45.6|Translit=ʼasher
16	אֵין	אין	VERB	subs	Mood=Ind|VerbForm=Fin	14	acl:relcl	_	Gloss=<NEG>|Ref=GEN_45.6|SpaceAfter=No|Translit=ʼen
17	־	־	PUNCT	punct	_	18	punct	_	Ref=GEN_45.6|SpaceAfter=No
18	חָרִ֖ישׁ	חרישׁ	NOUN	subs	Gender=Masc|Number=Sing	16	nsubj	_	Gloss=ploughing|Ref=GEN_45.6|Translit=ḥarish
19-20	וְקָצִּֽיר	_	_	_	_	_	_	_	_
19	וְ	ו	CCONJ	conj	_	20	cc	_	Gloss=and|Ref=GEN_45.6|Translit=ṿe
20	קָצִּֽיר	קציר	NOUN	subs	Gender=Masc|Number=Sing	18	conj	_	Gloss=harvest|Ref=GEN_45.6|Translit=ḳatsir
21	׃	׃	PUNCT	punct	_	8	punct	_	Ref=GEN_45.6

~~~

_כי־זה שנתים הרעב בקרב הארץ ועוד חמש שנים אשר אין־חריש וקציר׃_

_ki zeh shenatayim haraʻav beḳerev haʼarets ṿeʻod ḥamesh shanim ʼasher ʼen ḥarish ṿeḳatsir_

_"Because for two years there has been famine in the midst of the land and there are still **five** years in which there will neither be ploughing nor harvesting."_

It is also currently applied to ordinal numerals (ראשׁון /riʼshon/ "first", שׁני /shney/ "second", etc).
(This may be in conflict with the guidelines, so these may get changed to [ADJ]() in the future.)

<!-- genesis 43 -->
~~~ conllu
# sent_id = Masoretic-Genesis-2:13-hbo
# text = וְשֵֽׁם־הַנָּהָ֥ר הַשֵּׁנִ֖י גִּיחֹ֑ון ה֣וּא הַסֹּובֵ֔ב אֵ֖ת כָּל־אֶ֥רֶץ כּֽוּשׁ׃
# translit = ṿeshem hanahar hasheni giḥon huʼ hasovev ʼet kal ʼerets kush
# visual-style 7 bgColor:blue
# visual-style 7 fgColor:white
1-2	וְשֵֽׁם	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	8	cc	_	Gloss=and|Ref=GEN_2.13|Translit=ṿe
2	שֵֽׁם	שׁם	NOUN	subs	Gender=Masc|Number=Sing	8	nsubj	_	Gloss=name|Ref=GEN_2.13|Translit=shem
3	־	־	PUNCT	punct	_	5	punct	_	Ref=GEN_2.13|SpaceAfter=No
4-5	הַנָּהָ֥ר	_	_	_	_	_	_	_	_
4	הַ	ה	DET	art	PronType=Art	5	det	_	Gloss=the|Ref=GEN_2.13|Translit=ha
5	נָּהָ֥ר	נהר	NOUN	subs	Gender=Masc|Number=Sing	2	compound:smixut	_	Gloss=stream|Ref=GEN_2.13|Translit=nahar
6-7	הַשֵּׁנִ֖י	_	_	_	_	_	_	_	_
6	הַ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=GEN_2.13|Translit=ha
7	שֵּׁנִ֖י	שׁני	NUM	adjv	Gender=Masc|Number=Sing|NumType=Ord	5	nummod	_	Gloss=second|Ref=GEN_2.13|Translit=sheni
8	גִּיחֹ֑ון	גיחון	PROPN	nmpr	Number=Sing	0	root	_	Gloss=Gihon|Ref=GEN_2.13|Translit=giḥon
9	ה֣וּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj:outer	_	Gloss=he|Ref=GEN_2.13|Translit=huʼ
10-11	הַסֹּובֵ֔ב	_	_	_	_	_	_	_	_
10	הַ	ה	SCONJ	art	_	11	mark	_	Gloss=the|Ref=GEN_2.13|Translit=ha
11	סֹּובֵ֔ב	סבב	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	8	parataxis	_	Gloss=turn|Ref=GEN_2.13|Translit=sovev
12	אֵ֖ת	את	ADP	prep	_	13	case	_	Gloss=<object.marker>|Ref=GEN_2.13|Translit=ʼet
13	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	11	obj	_	Gloss=whole|Ref=GEN_2.13|SpaceAfter=No|Translit=kal
14	־	־	PUNCT	punct	_	15	punct	_	Ref=GEN_2.13|SpaceAfter=No
15	אֶ֥רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	13	compound:smixut	_	Gloss=earth|Ref=GEN_2.13|Translit=ʼerets
16	כּֽוּשׁ	כושׁ	PROPN	nmpr	Number=Sing	15	compound:smixut	_	Gloss=Cush|Ref=GEN_2.13|SpaceAfter=No|Translit=kush
17	׃	׃	PUNCT	punct	_	8	punct	_	Ref=GEN_2.13

~~~

_ושם־הנהר **השני** גיחון הוא הסובב את כל־ארץ כוש׃_

_ṿeshem hanahar **hasheni** giḥon huʼ hasovev ʼet kal ʼerets kush_

_And the name of the **second** reiver was Gihon; it was the one that went around the whole land of Cush._

## Features

All `NUM`s should have values for [NumType]() and most should have a value for [Gender]().

Currently all have a value for [Number](), though this should probably be revised.

## XPOS

Cardinal numbers are tagged `subs` in BHSA and ordinal numbers are tagged `adjv`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:46 CEST -->
