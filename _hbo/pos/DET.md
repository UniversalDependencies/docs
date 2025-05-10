---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

The tag `DET` is applied to the prefix ה /ha/ when it applies to a nominal element, such as a [NOUN](), [ADJ](), or [PRON]().
In these cases, it has the relation [det]().

<!-- genesis 1302 -->
~~~ conllu
# sent_id = Masoretic-Genesis-44:12-hbo
# text = וַיְחַפֵּ֕שׂ בַּגָּדֹ֣ול הֵחֵ֔ל וּבַקָּטֹ֖ן כִּלָּ֑ה וַיִּמָּצֵא֙ הַגָּבִ֔יעַ בְּאַמְתַּ֖חַת בִּנְיָמִֽן׃
# translit = ṿayḥapeś bagadol heḥel uvaḳaṭon kilah ṿayimatseʼ hagaviʻa beʼamtaḥat binyamin
# visual-style 4 bgColor:blue
# visual-style 4 fgColor:white
# visual-style 9 bgColor:blue
# visual-style 9 fgColor:white
# visual-style 14 bgColor:blue
# visual-style 14 fgColor:white
1-2	וַיְחַפֵּ֕שׂ	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_44.12|Translit=ṿa
2	יְחַפֵּ֕שׂ	חפשׂ	VERB	verb	Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=search|Ref=GEN_44.12|Translit=yeḥapeś
3-5	בַּגָּדֹ֣ול	_	_	_	_	_	_	_	_
3	בַּ	ב	ADP	prep	_	5	case	_	Gloss=in|Ref=GEN_44.12|Translit=ba
4	_	ה	DET	art	PronType=Art	5	det	_	Gloss=the|Ref=GEN_44.12|Translit=
5	גָּדֹ֣ול	גדול	ADJ	adjv	Gender=Masc|Number=Sing	6	obl	_	Gloss=great|Ref=GEN_44.12|Translit=gadol
6	הֵחֵ֔ל	חלל	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	conj	_	Gloss=defile|Ref=GEN_44.12|Translit=heḥel
7-10	וּבַקָּטֹ֖ן	_	_	_	_	_	_	_	_
7	וּ	ו	CCONJ	conj	_	11	cc	_	Gloss=and|Ref=GEN_44.12|Translit=u
8	בַ	ב	ADP	prep	_	10	case	_	Gloss=in|Ref=GEN_44.12|Translit=ba
9	_	ה	DET	art	PronType=Art	10	det	_	Gloss=the|Ref=GEN_44.12|Translit=
10	קָּטֹ֖ן	קטן	ADJ	adjv	Gender=Masc|Number=Sing	11	obl	_	Gloss=small|Ref=GEN_44.12|Translit=ḳaṭon
11	כִּלָּ֑ה	כלה	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	conj	_	Gloss=be.complete|Ref=GEN_44.12|Translit=kilah
12-13	וַיִּמָּצֵא֙	_	_	_	_	_	_	_	_
12	וַ	ו	CCONJ	conj	_	13	cc	_	Gloss=and|Ref=GEN_44.12|Translit=ṿa
13	יִּמָּצֵא֙	מצא	VERB	verb	Gender=Masc|HebBinyan=NIFAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=find|Ref=GEN_44.12|Translit=yimatseʼ
14-15	הַגָּבִ֔יעַ	_	_	_	_	_	_	_	_
14	הַ	ה	DET	art	PronType=Art	15	det	_	Gloss=the|Ref=GEN_44.12|Translit=ha
15	גָּבִ֔יעַ	גביע	NOUN	subs	Gender=Masc|Number=Sing	13	nsubj	_	Gloss=cup|Ref=GEN_44.12|Translit=gaviʻa
16-17	בְּאַמְתַּ֖חַת	_	_	_	_	_	_	_	_
16	בְּ	ב	ADP	prep	_	17	case	_	Gloss=in|Ref=GEN_44.12|Translit=be
17	אַמְתַּ֖חַת	אמתחת	NOUN	subs	Gender=Fem|Number=Sing	13	obl	_	Gloss=sack|Ref=GEN_44.12|Translit=ʼamtaḥat
18	בִּנְיָמִֽן	בנימן	PROPN	nmpr	Number=Sing	17	compound:smixut	_	Gloss=Benjamin|Ref=GEN_44.12|SpaceAfter=No|Translit=binyamin
19	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_44.12

~~~

_ויחפש בגדול החל ובקטן כלה וימצא הגביע באמתחת בנימן׃_

_ṿayḥapeś bagadol heḥel uvaḳaṭon kilah ṿayimatseʼ hagaviʻa beʼamtaḥat binyamin_

_And he searched, beginning with the eldest and ending with the youngest, and he found the cup in the bag of Benjamin._

When it applies to clausal elements, such as participles, it is retagged as [SCONJ]().

<!-- genesis 842 -->
~~~ conllu
# sent_id = Masoretic-Genesis-30:36-hbo
# text = וַיָּ֗שֶׂם דֶּ֚רֶךְ שְׁלֹ֣שֶׁת יָמִ֔ים בֵּינֹ֖ו וּבֵ֣ין יַעֲקֹ֑ב וְיַעֲקֹ֗ב רֹעֶ֛ה אֶת־צֹ֥אן לָבָ֖ן הַנֹּותָרֹֽת׃
# translit = ṿayaśem derekh sheloshet yamim beno uven yaʻaḳov ṿeyaʻaḳov roʻeh ʼet tsoʼn lavan hanotarot
# visual-style 18 bgColor:blue
# visual-style 18 fgColor:white
1-2	וַיָּ֗שֶׂם	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_30.36|Translit=ṿa
2	יָּ֗שֶׂם	שׂים	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=put|Ref=GEN_30.36|Translit=yaśem
3	דֶּ֚רֶךְ	דרך	NOUN	subs	Gender=Masc|Number=Sing	2	obj	_	Gloss=way|Ref=GEN_30.36|Translit=derekh
4	שְׁלֹ֣שֶׁת	שׁלשׁ	NUM	subs	Gender=Fem|Number=Sing|NumType=Card	5	nummod	_	Gloss=three|Ref=GEN_30.36|Translit=sheloshet
5	יָמִ֔ים	יום	NOUN	subs	Gender=Masc|Number=Plur	3	compound:smixut	_	Gloss=day|Ref=GEN_30.36|Translit=yamim
6-7	בֵּינֹ֖ו	_	_	_	_	_	_	_	_
6	בֵּינֹ֖	בין	ADP	subs	_	7	case	_	Gloss=interval|Ref=GEN_30.36|Translit=beno
7	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	Ref=GEN_30.36|Translit=ṿ
8-9	וּבֵ֣ין	_	_	_	_	_	_	_	_
8	וּ	ו	CCONJ	conj	_	10	cc	_	Gloss=and|Ref=GEN_30.36|Translit=u
9	בֵ֣ין	בין	ADP	subs	_	10	case	_	Gloss=interval|Ref=GEN_30.36|Translit=ben
10	יַעֲקֹ֑ב	יעקב	PROPN	nmpr	Gender=Masc|Number=Sing	7	conj	_	Gloss=Jacob|Ref=GEN_30.36|Translit=yaʻaḳov
11-12	וְיַעֲקֹ֗ב	_	_	_	_	_	_	_	_
11	וְ	ו	CCONJ	conj	_	13	cc	_	Gloss=and|Ref=GEN_30.36|Translit=ṿe
12	יַעֲקֹ֗ב	יעקב	PROPN	nmpr	Gender=Masc|Number=Sing	13	nsubj	_	Gloss=Jacob|Ref=GEN_30.36|Translit=yaʻaḳov
13	רֹעֶ֛ה	רעה	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	2	conj	_	Gloss=pasture|Ref=GEN_30.36|Translit=roʻeh
14	אֶת	את	ADP	prep	_	16	case	_	Gloss=<object.marker>|Ref=GEN_30.36|SpaceAfter=No|Translit=ʼet
15	־	־	PUNCT	punct	_	14	punct	_	Ref=GEN_30.36|SpaceAfter=No
16	צֹ֥אן	צאן	NOUN	subs	Gender=Fem|Number=Sing	13	obj	_	Gloss=cattle|Ref=GEN_30.36|Translit=tsoʼn
17	לָבָ֖ן	לבן	PROPN	nmpr	Gender=Masc|Number=Sing	16	compound:smixut	_	Gloss=Laban|Ref=GEN_30.36|Translit=lavan
18-19	הַנֹּותָרֹֽת	_	_	_	_	_	_	_	_
18	הַ	ה	SCONJ	art	_	19	mark	_	Gloss=the|Ref=GEN_30.36|Translit=ha
19	נֹּותָרֹֽת	יתר	VERB	verb	Gender=Fem|HebBinyan=NIFAL|Number=Plur|VerbForm=Part	16	acl:relcl	_	Gloss=remain|Ref=GEN_30.36|Translit=notarot
20	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_30.36

~~~

_וישם דרך שלשת ימים בינו ובין יעקב ויעקב רעה את־צאן לבן הנותרת׃_

_ṿayaśem derekh sheloshet yamim beno uven yaʻaḳov ṿeyaʻaḳov roʻeh ʼet tsoʼn lavan hanotarot_

_And he put a road of three days between him and between Jacob, and Jacob pastured the flock of Laban which remained._

## Features

Determiners should have the feature [PronType]() with the value `Art`.

## XPOS

Determiners have the BHSA POS tag `art`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:43 CEST -->
