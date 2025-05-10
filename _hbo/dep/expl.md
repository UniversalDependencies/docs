---
layout: relation
title: 'expl'
shortdef: 'expletive argument'
udver: '2'
---

The `expl` relation is used for demonstrative pronouns which do not have a referent or serve an actual role in the discourse.
This generally occurs in interrogative constructions such as למה זה.

<!-- genesis 419 -->
~~~ conllu
# sent_id = Masoretic-Genesis-18:13-hbo
# text = וַיֹּ֥אמֶר יְהוָ֖ה אֶל־אַבְרָהָ֑ם לָ֣מָּה זֶּה֩ צָחֲקָ֨ה שָׂרָ֜ה לֵאמֹ֗ר הַאַ֥ף אֻמְנָ֛ם אֵלֵ֖ד וַאֲנִ֥י זָקַֽנְתִּי׃
# translit = ṿayoʼmer yehṿah ʼel ʼavraham lamah zeh tsaḥaḳah śarah leʼmor haʼaf ʼumnam ʼeled ṿaʼani zaḳanti
# visual-style 9 8 expl color:blue
1-2	וַיֹּ֥אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_18.13|Translit=ṿa
2	יֹּ֥אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_18.13|Translit=yoʼmer
3	יְהוָ֖ה	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=YHWH|Ref=GEN_18.13|Translit=yehṿah
4	אֶל	אל	ADP	prep	_	6	case	_	Gloss=to|Ref=GEN_18.13|SpaceAfter=No|Translit=ʼel
5	־	־	PUNCT	punct	_	4	punct	_	Ref=GEN_18.13|SpaceAfter=No
6	אַבְרָהָ֑ם	אברהם	PROPN	nmpr	Gender=Masc|Number=Sing	2	obl	_	Gloss=Abraham|Ref=GEN_18.13|Translit=ʼavraham
7	לָ֣מָּה	למה	ADV	inrg	_	9	advmod	_	Gloss=why|Ref=GEN_18.13|Translit=lamah
8	זֶּה֩	זה	PRON	prde	Gender=Masc|Number=Sing|PronType=Dem	9	expl	_	Gloss=this|Ref=GEN_18.13|Translit=zeh
9	צָחֲקָ֨ה	צחק	VERB	verb	Aspect=Perf|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	Gloss=laugh|Ref=GEN_18.13|Translit=tsaḥaḳah
10	שָׂרָ֜ה	שׂרה	PROPN	nmpr	Gender=Fem|Number=Sing	9	nsubj	_	Gloss=Sarah|Ref=GEN_18.13|Translit=śarah
11-12	לֵאמֹ֗ר	_	_	_	_	_	_	_	_
11	לֵ	ל	ADP	prep	ExtPos=SCONJ	16	mark	_	Gloss=to|Ref=GEN_18.13|Translit=le
12	אמֹ֗ר	אמר	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	11	fixed	_	Gloss=say|Ref=GEN_18.13|Translit=ʼmor
13-14	הַאַ֥ף	_	_	_	_	_	_	_	_
13	הַ	ה	PART	inrg	_	16	mark	_	Gloss=<interrogative>|Ref=GEN_18.13|Translit=ha
14	אַ֥ף	אף	ADV	advb	_	16	advmod	_	Gloss=even|Ref=GEN_18.13|Translit=ʼaf
15	אֻמְנָ֛ם	אמנם	ADV	advb	_	16	advmod	_	Gloss=really|Ref=GEN_18.13|Translit=ʼumnam
16	אֵלֵ֖ד	ילד	VERB	verb	Aspect=Imp|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	9	ccomp	_	Gloss=bear|Ref=GEN_18.13|Translit=ʼeled
17-18	וַאֲנִ֥י	_	_	_	_	_	_	_	_
17	וַ	ו	CCONJ	conj	_	19	cc	_	Gloss=and|Ref=GEN_18.13|Translit=ṿa
18	אֲנִ֥י	אני	PRON	prps	Number=Sing|Person=1|PronType=Prs	19	nsubj	_	Gloss=i|Ref=GEN_18.13|Translit=ʼani
19	זָקַֽנְתִּי	זקן	VERB	verb	Aspect=Perf|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	16	conj	_	Gloss=be.old|Ref=GEN_18.13|SpaceAfter=No|Translit=zaḳanti
20	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_18.13

~~~

_ויאמר יהוה אל־אברהם למה זה צחקה שרה לאמר האף אמנם אלד ואני זקנתי׃_

_ṿayoʼmer yehṿah ʼel ʼavraham lamah zeh tsaḥaḳah śarah leʼmor haʼaf ʼumnam ʼeled ṿaʼani zaḳanti_

_And The LORD said to Abraham "Why did Sarah laugh, saying 'Will even I give birth, though I am old?'?"._

It also occurs in a small number of non-interrogative contexts as well.

<!-- genesis 1330 -->
~~~ conllu
# sent_id = Masoretic-Genesis-45:6-hbo
# text = כִּי־זֶ֛ה שְׁנָתַ֥יִם הָרָעָ֖ב בְּקֶ֣רֶב הָאָ֑רֶץ וְעֹוד֙ חָמֵ֣שׁ שָׁנִ֔ים אֲשֶׁ֥ר אֵין־חָרִ֖ישׁ וְקָצִּֽיר׃
# translit = ki zeh shenatayim haraʻav beḳerev haʼarets ṿeʻod ḥamesh shanim ʼasher ʼen ḥarish ṿeḳatsir
# visual-style 8 3 expl color:blue
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

_"Because the famine has been in the midst of the land for two [years] and five years that will not have planting or harvesting remain."_
<!-- Interlanguage links updated So 10. května 2025, 18:15:30 CEST -->
