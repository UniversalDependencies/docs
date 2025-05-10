---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
udver: '2'
---

The tag `ADJ` is applied to the class of words which exhibit gender and number agreement but are not participles.

<!-- genesis 1180 -->
~~~ conllu
# sent_id = Masoretic-Genesis-41:19-hbo
# text = וְהִנֵּ֞ה שֶֽׁבַע־פָּרֹ֤ות אֲחֵרֹות֙ עֹלֹ֣ות אַחֲרֵיהֶ֔ן דַּלֹּ֨ות וְרָעֹ֥ות תֹּ֛אַר מְאֹ֖ד וְרַקֹּ֣ות בָּשָׂ֑ר לֹֽא־רָאִ֧יתִי כָהֵ֛נָּה בְּכָל־אֶ֥רֶץ מִצְרַ֖יִם לָרֹֽעַ׃
# translit = ṿehineh shevaʻ parot ʼaḥerot ʻolot ʼaḥarehen dalot ṿeraʻot toʼar meʼod ṿeraḳot baśar loʼ raʼiti kahenah bekhal ʼerets mitsrayim laroʻa
# visual-style 6 bgColor:blue
# visual-style 6 fgColor:white
# visual-style 10 bgColor:blue
# visual-style 10 fgColor:white
# visual-style 12 bgColor:green
# visual-style 12 fgColor:white
# visual-style 16 bgColor:green
# visual-style 16 fgColor:white
1-2	וְהִנֵּ֞ה	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=GEN_41.19|Translit=ṿe
2	הִנֵּ֞ה	הנה	INTJ	intj	_	7	discourse	_	Gloss=behold|Ref=GEN_41.19|Translit=hineh
3	שֶֽׁבַע	שׁבע	NUM	subs	Number=Sing|NumType=Card	5	nummod	_	Gloss=seven|Ref=GEN_41.19|SpaceAfter=No|Translit=shevaʻ
4	־	־	PUNCT	punct	_	3	punct	_	Ref=GEN_41.19|SpaceAfter=No
5	פָּרֹ֤ות	פרה	NOUN	subs	Gender=Fem|Number=Plur	7	nsubj	_	Gloss=cow|Ref=GEN_41.19|Translit=parot
6	אֲחֵרֹות֙	אחר	ADJ	adjv	Gender=Fem|Number=Plur	5	amod	_	Gloss=other|Ref=GEN_41.19|Translit=ʼaḥerot
7	עֹלֹ֣ות	עלה	VERB	verb	Gender=Fem|HebBinyan=PAAL|Number=Plur|VerbForm=Part	0	root	_	Gloss=ascend|Ref=GEN_41.19|Translit=ʻolot
8-9	אַחֲרֵיהֶ֔ן	_	_	_	_	_	_	_	_
8	אַחֲרֵי	אחר	ADP	subs	_	9	case	_	Gloss=after|Ref=GEN_41.19|Translit=ʼaḥare
9	הֶ֔ן	הן	PRON	prn	Gender=Fem|Number=Plur|Person=3|PronType=Prs	7	obl	_	Ref=GEN_41.19|Translit=hen
10	דַּלֹּ֨ות	דל	ADJ	adjv	Gender=Fem|Number=Plur	7	dislocated	_	Gloss=poor|Ref=GEN_41.19|Translit=dalot
11-12	וְרָעֹ֥ות	_	_	_	_	_	_	_	_
11	וְ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_41.19|Translit=ṿe
12	רָעֹ֥ות	רע	NOUN	adjv	Gender=Fem|Number=Plur	10	conj	_	Gloss=evil|Ref=GEN_41.19|Translit=raʻot
13	תֹּ֛אַר	תאר	NOUN	subs	Gender=Masc|Number=Sing	12	compound:smixut	_	Gloss=form|Ref=GEN_41.19|Translit=toʼar
14	מְאֹ֖ד	מאד	ADV	subs	_	12	advmod	_	Gloss=might|Ref=GEN_41.19|Translit=meʼod
15-16	וְרַקֹּ֣ות	_	_	_	_	_	_	_	_
15	וְ	ו	CCONJ	conj	_	16	cc	_	Gloss=and|Ref=GEN_41.19|Translit=ṿe
16	רַקֹּ֣ות	רק	NOUN	adjv	Gender=Fem|Number=Plur	10	conj	_	Gloss=thin|Ref=GEN_41.19|Translit=raḳot
17	בָּשָׂ֑ר	בשׂר	NOUN	subs	Gender=Masc|Number=Sing	16	compound:smixut	_	Gloss=flesh|Ref=GEN_41.19|Translit=baśar
18	לֹֽא	לא	ADV	nega	Polarity=Neg	20	advmod	_	Gloss=not|Ref=GEN_41.19|SpaceAfter=No|Translit=loʼ
19	־	־	PUNCT	punct	_	18	punct	_	Ref=GEN_41.19|SpaceAfter=No
20	רָאִ֧יתִי	ראה	VERB	verb	Aspect=Perf|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	7	parataxis	_	Gloss=see|Ref=GEN_41.19|Translit=raʼiti
21-22	כָהֵ֛נָּה	_	_	_	_	_	_	_	_
21	כָ	כ	ADP	prep	_	22	case	_	Gloss=as|Ref=GEN_41.19|Translit=ka
22	הֵ֛נָּה	הנה	PRON	prps	Gender=Fem|Number=Plur|Person=3|PronType=Prs	20	obl	_	Gloss=they|Ref=GEN_41.19|Translit=henah
23-24	בְּכָל	_	_	_	_	_	_	_	_
23	בְּ	ב	ADP	prep	_	24	case	_	Gloss=in|Ref=GEN_41.19|Translit=be
24	כָל	כל	NOUN	subs	Gender=Masc|Number=Sing	20	obl	_	Gloss=whole|Ref=GEN_41.19|Translit=kal
25	־	־	PUNCT	punct	_	26	punct	_	Ref=GEN_41.19|SpaceAfter=No
26	אֶ֥רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	24	compound:smixut	_	Gloss=earth|Ref=GEN_41.19|Translit=ʼerets
27	מִצְרַ֖יִם	מצרים	PROPN	nmpr	Number=Sing	26	compound:smixut	_	Gloss=Egypt|Ref=GEN_41.19|Translit=mitsrayim
28-30	לָרֹֽעַ	_	_	_	_	_	_	_	_
28	לָ	ל	ADP	prep	_	30	case	_	Gloss=to|Ref=GEN_41.19|Translit=la
29	_	ה	DET	art	PronType=Art	30	det	_	Gloss=the|Ref=GEN_41.19|Translit=
30	רֹֽעַ	רע	NOUN	subs	Gender=Masc|Number=Sing	20	obl	_	Gloss=wickedness|Ref=GEN_41.19|Translit=roʻa
31	׃	׃	PUNCT	punct	_	7	punct	_	Ref=GEN_41.19

~~~

_והנה שבע־פרות **אחרות** עלות אחריהן **דלות** **ורעות** תאר מאד **ורקות** בשר לא־ראיתי כהנה בכל־ארץ מצרים לרע׃_

_ṿehineh shevaʻ parot **ʼaḥerot** ʻolot ʼaḥarehen **dalot** **ṿeraʻot** toʼar meʼod **ṿeraḳot** baśar loʼ raʼiti kahenah bekhal ʼerets mitsrayim laroʻa_

_"And behold, seven other cows came up after them, **poor** and very **bad** of appearance and **thin** of flesh; I have not seen any like these in all the land of Egypt in terms of badness."_

If the word in question participates in [compound:smixut](), then that is considered to take precedence, and the tag is changed to [NOUN]().
Thus רעות /raʻot/ "bad" and רקות /raḳot/ "thin" in the above example are [NOUN]()s because the words immediately after them are attached with [compound:smixut]().

## Features

Adjectives should have values for [Gender]() and [Number]().

## XPOS

Adjectives have the BHSA POS tag `adjv`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:39 CEST -->
