---
layout: relation
title: 'acl'
shortdef: 'adnominal clause'
udver: '2'
---

The relation `acl` is used to attach infinitival clauses to the nouns they modify.
These nouns often correspond to elided obliques in the subordinate clause.

<!-- genesis 106 -->
~~~ conllu
# sent_id = Masoretic-Genesis-5:1-hbo
# text = זֶ֣ה סֵ֔פֶר תֹּולְדֹ֖ת אָדָ֑ם בְּיֹ֗ום בְּרֹ֤א אֱלֹהִים֙ אָדָ֔ם בִּדְמ֥וּת אֱלֹהִ֖ים עָשָׂ֥ה אֹתֹֽו׃
# translit = zeh sefer toldot ʼadam beyom beroʼ ʼelohim ʼadam bidmut ʼelohim ʻaśah ʼoto
# visual-style 6 7 acl color:blue
1	זֶ֣ה	זה	PRON	prde	Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	Gloss=this|Ref=GEN_5.1|Translit=zeh
2	סֵ֔פֶר	ספר	NOUN	subs	Gender=Masc|Number=Sing	0	root	_	Gloss=letter|Ref=GEN_5.1|Translit=sefer
3	תֹּולְדֹ֖ת	תולדות	NOUN	subs	Gender=Fem|Number=Plur	2	compound:smixut	_	Gloss=generations|Ref=GEN_5.1|Translit=toldot
4	אָדָ֑ם	אדם	PROPN	nmpr	Gender=Masc|Number=Sing	3	compound:smixut	_	Gloss=Adam|Ref=GEN_5.1|Translit=ʼadam
5-6	בְּיֹ֗ום	_	_	_	_	_	_	_	_
5	בְּ	ב	ADP	prep	_	6	case	_	Gloss=in|Ref=GEN_5.1|Translit=be
6	יֹ֗ום	יום	NOUN	subs	Gender=Masc|Number=Sing	13	obl	_	Gloss=day|Ref=GEN_5.1|Translit=yom
7	בְּרֹ֤א	ברא	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	6	acl	_	Gloss=create|Ref=GEN_5.1|Translit=beroʼ
8	אֱלֹהִים֙	אלהים	NOUN	subs	Gender=Masc|Number=Plur	7	nsubj	_	Gloss=god(s)|Ref=GEN_5.1|Translit=ʼelohim
9	אָדָ֔ם	אדם	NOUN	subs	Gender=Masc|Number=Sing	7	obj	_	Gloss=human,.mankind|Ref=GEN_5.1|Translit=ʼadam
10-11	בִּדְמ֥וּת	_	_	_	_	_	_	_	_
10	בִּ	ב	ADP	prep	_	11	case	_	Gloss=in|Ref=GEN_5.1|Translit=bi
11	דְמ֥וּת	דמות	NOUN	subs	Gender=Fem|Number=Sing	13	obl	_	Gloss=likeness|Ref=GEN_5.1|Translit=demut
12	אֱלֹהִ֖ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	11	compound:smixut	_	Gloss=god(s)|Ref=GEN_5.1|Translit=ʼelohim
13	עָשָׂ֥ה	עשׂה	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	parataxis	_	Gloss=make|Ref=GEN_5.1|Translit=ʻaśah
14-15	אֹתֹֽו	_	_	_	_	_	_	_	_
14	אֹתֹֽ	את	ADP	prep	_	15	case	_	Gloss=<object.marker>|Ref=GEN_5.1|Translit=ʼoto
15	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	Ref=GEN_5.1|Translit=ṿ
16	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_5.1

~~~

_זה ספר תולדת אדם ביום ברא אלהים אדם בדמות אלהים עשה אתו׃_

_zeh sefer toldot ʼadam beyom beroʼ ʼelohim ʼadam bidmut ʼelohim ʻaśah ʼoto_

_This is the book of the generations of Adam on the day God created Adam, in the image of God He created him._

For other types of clauses attached to nominals, see [acl:relcl]() and [parataxis]().
<!-- Interlanguage links updated So 10. května 2025, 18:14:43 CEST -->
