---
layout: postag
title: 'SCONJ'
shortdef: 'subordinating conjunction'
udver: '2'
---

The tag `SCONJ` is applied to words which introduce subordinate clauses (mainly [advcl]() and [ccomp]()).
The tag is generally applied to any word which BHSA tags `conj` that is not [CCONJ]().

<!-- genesis 1344 -->
~~~ conllu
# sent_id = Masoretic-Genesis-45:20-hbo
# text = וְעֵ֣ינְכֶ֔ם אַל־תָּחֹ֖ס עַל־כְּלֵיכֶ֑ם כִּי־ט֛וּב כָּל־אֶ֥רֶץ מִצְרַ֖יִם לָכֶ֥ם הֽוּא׃
# translit = ṿeʻenkem ʼal taḥos ʻal kelekhem ki ṭuv kal ʼerets mitsrayim lakhem huʼ
# visual-style 11 bgColor:blue
# visual-style 11 fgColor:white
1-3	וְעֵ֣ינְכֶ֔ם	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	6	cc	_	Gloss=and|Ref=GEN_45.20|Translit=ṿe
2	עֵ֣ינְ	עין	NOUN	subs	Gender=Fem|Number=Sing	6	nsubj	_	Gloss=eye|Ref=GEN_45.20|Translit=ʻen
3	כֶ֔ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	2	nmod:poss	_	Ref=GEN_45.20|Translit=kem
4	אַל	אל	ADV	nega	Polarity=Neg	6	advmod	_	Gloss=not|Ref=GEN_45.20|SpaceAfter=No|Translit=ʼal
5	־	־	PUNCT	punct	_	4	punct	_	Ref=GEN_45.20|SpaceAfter=No
6	תָּחֹ֖ס	חוס	VERB	verb	Aspect=Imp|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=pity|Ref=GEN_45.20|Translit=taḥos
7	עַל	על	ADP	prep	_	9	case	_	Gloss=upon|Ref=GEN_45.20|SpaceAfter=No|Translit=ʻal
8	־	־	PUNCT	punct	_	7	punct	_	Ref=GEN_45.20|SpaceAfter=No
9-10	כְּלֵיכֶ֑ם	_	_	_	_	_	_	_	_
9	כְּלֵי	כלי	NOUN	subs	Gender=Masc|Number=Plur	6	obl	_	Gloss=tool|Ref=GEN_45.20|Translit=kele
10	כֶ֑ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	9	nmod:poss	_	Ref=GEN_45.20|Translit=kem
11	כִּי	כי	SCONJ	conj	_	19	mark	_	Gloss=that|Ref=GEN_45.20|SpaceAfter=No|Translit=ki
12	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_45.20|SpaceAfter=No
13	ט֛וּב	טוב	NOUN	subs	Gender=Masc|Number=Sing	19	dislocated	_	Gloss=best|Ref=GEN_45.20|Translit=ṭuv
14	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	13	compound:smixut	_	Gloss=whole|Ref=GEN_45.20|SpaceAfter=No|Translit=kal
15	־	־	PUNCT	punct	_	16	punct	_	Ref=GEN_45.20|SpaceAfter=No
16	אֶ֥רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	14	compound:smixut	_	Gloss=earth|Ref=GEN_45.20|Translit=ʼerets
17	מִצְרַ֖יִם	מצרים	PROPN	nmpr	Number=Sing	16	compound:smixut	_	Gloss=Egypt|Ref=GEN_45.20|Translit=mitsrayim
18-19	לָכֶ֥ם	_	_	_	_	_	_	_	_
18	לָ	ל	ADP	prep	_	19	case	_	Gloss=to|Ref=GEN_45.20|Translit=la
19	כֶ֥ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	6	advcl	_	Ref=GEN_45.20|Translit=kem
20	הֽוּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	Gloss=he|Ref=GEN_45.20|SpaceAfter=No|Translit=huʼ
21	׃	׃	PUNCT	punct	_	6	punct	_	Ref=GEN_45.20

~~~

_ועינכם אל־תחס על־כליכם **כי**־טוב כל־ארץ מצרים לכם הוא׃_

_ṿeʻenkem ʼal taḥos ʻal kelekhem **ki** ṭuv kal ʼerets mitsrayim lakhem huʼ_

_"And do not cast your eyes upon your tools, **because** the best of the land of Egypt, it is yours."_

It is also applied to the determiner ה /ha/ when it applies to a participial clause.

<!-- genesis 1454 -->
~~~ conllu
# sent_id = Masoretic-Genesis-49:17-hbo
# text = יְהִי־דָן֙ נָחָ֣שׁ עֲלֵי־דֶ֔רֶךְ שְׁפִיפֹ֖ן עֲלֵי־אֹ֑רַח הַנֹּשֵׁךְ֙ עִקְּבֵי־ס֔וּס וַיִּפֹּ֥ל רֹכְבֹ֖ו אָחֹֽור׃
# translit = yehi dan naḥash ʻale derekh shefifon ʻale ʼoraḥ hanoshekh ʻiḳbe sus ṿayipol rokhbo ʼaḥor
# visual-style 12 bgColor:blue
# visual-style 12 fgColor:white
1	יְהִי	היה	AUX	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	4	cop	_	Gloss=be|Ref=GEN_49.17|SpaceAfter=No|Translit=yehi
2	־	־	PUNCT	punct	_	1	punct	_	Ref=GEN_49.17|SpaceAfter=No
3	דָן֙	דן	PROPN	nmpr	Number=Sing	4	nsubj	_	Gloss=Dan|Ref=GEN_49.17|Translit=dan
4	נָחָ֣שׁ	נחשׁ	NOUN	subs	Gender=Masc|Number=Sing	0	root	_	Gloss=serpent|Ref=GEN_49.17|Translit=naḥash
5	עֲלֵי	על	ADP	prep	_	7	case	_	Gloss=upon|Ref=GEN_49.17|SpaceAfter=No|Translit=ʻale
6	־	־	PUNCT	punct	_	5	punct	_	Ref=GEN_49.17|SpaceAfter=No
7	דֶ֔רֶךְ	דרך	NOUN	subs	Gender=Masc|Number=Sing	4	nmod	_	Gloss=way|Ref=GEN_49.17|Translit=derekh
8	שְׁפִיפֹ֖ן	שׁפיפן	NOUN	subs	Gender=Masc|Number=Sing	4	appos	_	Gloss=snake|Ref=GEN_49.17|Translit=shefifon
9	עֲלֵי	על	ADP	prep	_	11	case	_	Gloss=upon|Ref=GEN_49.17|SpaceAfter=No|Translit=ʻale
10	־	־	PUNCT	punct	_	9	punct	_	Ref=GEN_49.17|SpaceAfter=No
11	אֹ֑רַח	ארח	NOUN	subs	Gender=Masc|Number=Sing	8	nmod	_	Gloss=path|Ref=GEN_49.17|Translit=ʼoraḥ
12-13	הַנֹּשֵׁךְ֙	_	_	_	_	_	_	_	_
12	הַ	ה	SCONJ	art	_	13	mark	_	Gloss=the|Ref=GEN_49.17|Translit=ha
13	נֹּשֵׁךְ֙	נשׁך	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	4	acl:relcl	_	Gloss=bite|Ref=GEN_49.17|Translit=noshekh
14	עִקְּבֵי	עקב	NOUN	subs	Gender=Masc|Number=Plur	13	obj	_	Gloss=heel|Ref=GEN_49.17|SpaceAfter=No|Translit=ʻiḳbe
15	־	־	PUNCT	punct	_	16	punct	_	Ref=GEN_49.17|SpaceAfter=No
16	ס֔וּס	סוס	NOUN	subs	Gender=Masc|Number=Sing	14	compound:smixut	_	Gloss=horse|Ref=GEN_49.17|Translit=sus
17-18	וַיִּפֹּ֥ל	_	_	_	_	_	_	_	_
17	וַ	ו	CCONJ	conj	_	18	cc	_	Gloss=and|Ref=GEN_49.17|Translit=ṿa
18	יִּפֹּ֥ל	נפל	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	conj	_	Gloss=fall|Ref=GEN_49.17|Translit=yipol
19-20	רֹכְבֹ֖ו	_	_	_	_	_	_	_	_
19	רֹכְבֹ֖	רכב	NOUN	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	18	nsubj	_	Gloss=ride|Ref=GEN_49.17|Translit=rokhbo
20	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nmod:poss	_	Ref=GEN_49.17|Translit=ṿ
21	אָחֹֽור	אחור	ADV	subs	_	18	advmod	_	Gloss=back(wards)|Ref=GEN_49.17|SpaceAfter=No|Translit=ʼaḥor
22	׃	׃	PUNCT	punct	_	4	punct	_	Ref=GEN_49.17

~~~

_יהי־דן נחש עלי־דרך שפיפן עלי־ארח **הנשך** עקבי־סוס ויפל רכבו אחור׃_

_yehi dan naḥash ʻale derekh shefifon ʻale ʼoraḥ **hanoshekh** ʻiḳbe sus ṿayipol rokhbo ʼaḥor_

_"Dan is a serpent upon the road, a snake upon the path **which** bites the horse's heel and his rider falls backwards."_

Similarly, a handful of prepositions occasionally apply to finite clauses and in such cases they are tagged `SCONJ` as well.

<!-- genesis 299 -->
~~~ conllu
# sent_id = Masoretic-Genesis-12:13-hbo
# text = אִמְרִי־נָ֖א אֲחֹ֣תִי אָ֑תְּ לְמַ֨עַן֙ יִֽיטַב־לִ֣י בַעֲבוּרֵ֔ךְ וְחָיְתָ֥ה נַפְשִׁ֖י בִּגְלָלֵֽךְ׃
# translit = ʼimri naʼ ʼaḥoti ʼat lemaʻan yiṭav li baʻavurekh ṿeḥaytah nafshi biglalekh
# visual-style 7 bgColor:blue
# visual-style 7 fgColor:white
1	אִמְרִי	אמר	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_12.13|SpaceAfter=No|Translit=ʼimri
2	־	־	PUNCT	punct	_	3	punct	_	Ref=GEN_12.13|SpaceAfter=No
3	נָ֖א	נא	INTJ	intj	_	1	discourse	_	Gloss=yeah|Ref=GEN_12.13|Translit=naʼ
4-5	אֲחֹ֣תִי	_	_	_	_	_	_	_	_
4	אֲחֹ֣תִ	אחות	NOUN	subs	Gender=Fem|Number=Sing	1	ccomp	_	Gloss=sister|Ref=GEN_12.13|Translit=ʼaḥoti
5	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	4	nmod:poss	_	Ref=GEN_12.13|Translit=
6	אָ֑תְּ	את	PRON	prps	Gender=Fem|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	Gloss=you|Ref=GEN_12.13|Translit=ʼat
7	לְמַ֨עַן֙	למען	SCONJ	prep	_	8	mark	_	Gloss=because.of|Ref=GEN_12.13|Translit=lemaʻan
8	יִֽיטַב	יטב	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	1	advcl	_	Gloss=be.good|Ref=GEN_12.13|SpaceAfter=No|Translit=yiṭav
9	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_12.13|SpaceAfter=No
10-11	לִ֣י	_	_	_	_	_	_	_	_
10	לִ֣	ל	ADP	prep	_	11	case	_	Gloss=to|Ref=GEN_12.13|Translit=li
11	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	8	obl	_	Ref=GEN_12.13|Translit=
12-14	בַעֲבוּרֵ֔ךְ	_	_	_	_	_	_	_	_
12	בַ	ב	ADP	prep	_	13	case	_	Gloss=in|Ref=GEN_12.13|Translit=ba
13	עֲבוּרֵ֔	עבור	NOUN	subs	Gender=Masc|Number=Sing	8	obl	_	Gloss=way|Ref=GEN_12.13|Translit=ʻavure
14	ךְ	את	PRON	prn	Gender=Fem|Number=Sing|Person=2|PronType=Prs	13	nmod:poss	_	Ref=GEN_12.13|Translit=ke
15-16	וְחָיְתָ֥ה	_	_	_	_	_	_	_	_
15	וְ	ו	CCONJ	conj	_	16	cc	_	Gloss=and|Ref=GEN_12.13|Translit=ṿe
16	חָיְתָ֥ה	חיה	VERB	verb	Aspect=Perf|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	8	conj	_	Gloss=be.alive|Ref=GEN_12.13|Translit=ḥaytah
17-18	נַפְשִׁ֖י	_	_	_	_	_	_	_	_
17	נַפְשִׁ֖	נפשׁ	NOUN	subs	Gender=Fem|Number=Sing	16	nsubj	_	Gloss=soul|Ref=GEN_12.13|Translit=nafshi
18	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	17	nmod:poss	_	Ref=GEN_12.13|Translit=
19-21	בִּגְלָלֵֽךְ	_	_	_	_	_	_	_	_
19	בִּ	ב	ADP	prep	_	20	case	_	Gloss=in|Ref=GEN_12.13|Translit=bi
20	גְלָלֵֽ	גלל	NOUN	subs	Gender=Masc|Number=Sing	16	obl	_	Gloss=matter|Ref=GEN_12.13|Translit=gelale
21	ךְ	את	PRON	prn	Gender=Fem|Number=Sing|Person=2|PronType=Prs	20	nmod:poss	_	Ref=GEN_12.13|Translit=ke
22	׃	׃	PUNCT	punct	_	1	punct	_	Ref=GEN_12.13

~~~

_אמרי־נא אחתי את למען ייטב־לי בעבורך וחיתה נפשי בגללך׃_

_ʼimri naʼ ʼaḥoti ʼat lemaʻan yiṭav li baʻavurekh ṿeḥaytah nafshi biglalekh_

_"Please say you are my sister, **so that** it will be well with me on account of you and my soul may live regarding you."_

There is also one word which is otherwise a [NOUN]() but operates like the prepositions above.
It is בלתי /bilti/ "unless", and BHSA considers it a potential preposition.

<!-- genesis 1261 -->
~~~ conllu
# sent_id = Masoretic-Genesis-43:5-hbo
# text = וְאִם־אֵינְךָ֥ מְשַׁלֵּ֖חַ לֹ֣א נֵרֵ֑ד כִּֽי־הָאִ֞ישׁ אָמַ֤ר אֵלֵ֨ינוּ֙ לֹֽא־תִרְא֣וּ פָנַ֔י בִּלְתִּ֖י אֲחִיכֶ֥ם אִתְּכֶֽם׃
# translit = ṿeʼim ʼenka meshaleḥa loʼ nered ki haʼish ʼamar ʼelenu loʼ tirʼu panai bilti ʼaḥikhem ʼitkem
# visual-style 21 bgColor:blue
# visual-style 21 fgColor:white
1-2	וְאִם	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	8	cc	_	Gloss=and|Ref=GEN_43.5|Translit=ṿe
2	אִם	אם	SCONJ	conj	_	4	mark	_	Gloss=if|Ref=GEN_43.5|Translit=ʼim
3	־	־	PUNCT	punct	_	2	punct	_	Ref=GEN_43.5|SpaceAfter=No
4-5	אֵינְךָ֥	_	_	_	_	_	_	_	_
4	אֵינְ	אין	VERB	subs	Mood=Ind|VerbForm=Fin	8	advcl	_	Gloss=<NEG>|Ref=GEN_43.5|Translit=ʼen
5	ךָ֥	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	Ref=GEN_43.5|Translit=ka
6	מְשַׁלֵּ֖חַ	שׁלח	VERB	verb	Gender=Masc|HebBinyan=PIEL|Number=Sing|VerbForm=Part	4	xcomp	_	Gloss=send|Ref=GEN_43.5|Translit=meshaleḥa
7	לֹ֣א	לא	ADV	nega	Polarity=Neg	8	advmod	_	Gloss=not|Ref=GEN_43.5|Translit=loʼ
8	נֵרֵ֑ד	ירד	VERB	verb	Aspect=Imp|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin	0	root	_	Gloss=descend|Ref=GEN_43.5|Translit=nered
9	כִּֽי	כי	SCONJ	conj	_	13	mark	_	Gloss=that|Ref=GEN_43.5|SpaceAfter=No|Translit=ki
10	־	־	PUNCT	punct	_	9	punct	_	Ref=GEN_43.5|SpaceAfter=No
11-12	הָאִ֞ישׁ	_	_	_	_	_	_	_	_
11	הָ	ה	DET	art	PronType=Art	12	det	_	Gloss=the|Ref=GEN_43.5|Translit=ha
12	אִ֞ישׁ	אישׁ	NOUN	subs	Gender=Masc|Number=Sing	13	nsubj	_	Gloss=man|Ref=GEN_43.5|Translit=ʼish
13	אָמַ֤ר	אמר	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	8	advcl	_	Gloss=say|Ref=GEN_43.5|Translit=ʼamar
14-15	אֵלֵ֨ינוּ֙	_	_	_	_	_	_	_	_
14	אֵלֵ֨י	אל	ADP	prep	_	15	case	_	Gloss=to|Ref=GEN_43.5|Translit=ʼele
15	נוּ֙	אנחנו	PRON	prn	Number=Plur|Person=1|PronType=Prs	13	obl	_	Ref=GEN_43.5|Translit=nu
16	לֹֽא	לא	ADV	nega	Polarity=Neg	18	advmod	_	Gloss=not|Ref=GEN_43.5|SpaceAfter=No|Translit=loʼ
17	־	־	PUNCT	punct	_	16	punct	_	Ref=GEN_43.5|SpaceAfter=No
18	תִרְא֣וּ	ראה	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	13	ccomp	_	Gloss=see|Ref=GEN_43.5|Translit=tirʼu
19-20	פָנַ֔י	_	_	_	_	_	_	_	_
19	פָנַ֔	פנה	NOUN	subs	Gender=Masc|Number=Plur	18	obj	_	Gloss=face|Ref=GEN_43.5|Translit=pana
20	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	19	nmod:poss	_	Ref=GEN_43.5|Translit=
21	בִּלְתִּ֖י	בלת	SCONJ	subs	_	25	mark	_	Gloss=failure|Ref=GEN_43.5|Translit=bilti
22-23	אֲחִיכֶ֥ם	_	_	_	_	_	_	_	_
22	אֲחִי	אח	NOUN	subs	Gender=Masc|Number=Sing	25	nsubj	_	Gloss=brother|Ref=GEN_43.5|Translit=ʼaḥi
23	כֶ֥ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	22	nmod:poss	_	Ref=GEN_43.5|Translit=kem
24-25	אִתְּכֶֽם	_	_	_	_	_	_	_	_
24	אִתְּ	את	ADP	prep	_	25	case	_	Gloss=together.with|Ref=GEN_43.5|Translit=ʼit
25	כֶֽם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	18	advcl	_	Ref=GEN_43.5|Translit=kem
26	׃	׃	PUNCT	punct	_	8	punct	_	Ref=GEN_43.5

~~~

_ואם־אינך משלח לא נרד כי־האיש אמר אלינו לא־תראו פני בלתי אחיכם אתכם׃_

_ṿeʼim ʼenka meshaleḥa loʼ nered ki haʼish ʼamar ʼelenu loʼ tirʼu panai bilti ʼaḥikhem ʼitkem_

_"And if you do not send, we cannot go down because the man said to us 'You will not see my face **unless** your brother is with you.'."_

## Features

Subordinating conjunctions should not have any features.

## XPOS

The tag `SCONJ` usually corresponds to `conj` and sometimes to `art`.
In a very small number of cases it can also be `prep` or `subs`.

See also [fixed]() for documentation of multiword subordinating conjunctions.
<!-- Interlanguage links updated So 10. května 2025, 18:13:49 CEST -->
