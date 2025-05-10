---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

The relation `nummod` attached a [NUM]() to the [NOUN]() (or other nominal) that it modifies.

Often the number appears before the noun with the morphology expected for [compound:smixut]().

<!-- genesis 1141 -->
~~~ conllu
# sent_id = Masoretic-Genesis-40:2-hbo
# text = וַיִּקְצֹ֣ף פַּרְעֹ֔ה עַ֖ל שְׁנֵ֣י סָרִיסָ֑יו עַ֚ל שַׂ֣ר הַמַּשְׁקִ֔ים וְעַ֖ל שַׂ֥ר הָאֹופִֽים׃
# translit = ṿayiḳtsof parʻoh ʻal shene sarisaṿ ʻal śar hamashḳim ṿeʻal śar haʼofim
# visual-style 6 5 nummod color:blue
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

_ויקצף פרעה על **שני** סריסיו על שר המשקים ועל שר האופים׃_

_ṿayiḳtsof parʻoh ʻal **shene** sarisaṿ ʻal śar hamashḳim ṿeʻal śar haʼofim_

_And Pharaoh was angry with his **two** officials, with the chief cupbearer and with the chief baker._

In other cases it appears after the noun as if it were an [ADJ]() (though cardinal numbers don't generally agree in definiteness).

<!-- genesis 1221 -->
~~~ conllu
# sent_id = Masoretic-Genesis-42:3-hbo
# text = וַיֵּרְד֥וּ אֲחֵֽי־יֹוסֵ֖ף עֲשָׂרָ֑ה לִשְׁבֹּ֥ר בָּ֖ר מִמִּצְרָֽיִם׃
# translit = ṿayerdu ʼaḥe yosef ʻaśarah lishbor bar mimitsrayim
# visual-style 3 6 nummod color:blue
1-2	וַיֵּרְד֥וּ	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_42.3|Translit=ṿa
2	יֵּרְד֥וּ	ירד	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=descend|Ref=GEN_42.3|Translit=yerdu
3	אֲחֵֽי	אח	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=brother|Ref=GEN_42.3|SpaceAfter=No|Translit=ʼaḥe
4	־	־	PUNCT	punct	_	5	punct	_	Ref=GEN_42.3|SpaceAfter=No
5	יֹוסֵ֖ף	יוסף	PROPN	nmpr	Gender=Masc|Number=Sing	3	compound:smixut	_	Gloss=Joseph|Ref=GEN_42.3|Translit=yosef
6	עֲשָׂרָ֑ה	עשׂרה	NUM	subs	Gender=Fem|Number=Sing|NumType=Card	3	nummod	_	Gloss=ten|Ref=GEN_42.3|Translit=ʻaśarah
7-8	לִשְׁבֹּ֥ר	_	_	_	_	_	_	_	_
7	לִ	ל	ADP	prep	_	8	case	_	Gloss=to|Ref=GEN_42.3|Translit=li
8	שְׁבֹּ֥ר	שׁבר	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	2	advcl	_	Gloss=buy.grain|Ref=GEN_42.3|Translit=shebor
9	בָּ֖ר	בר	NOUN	subs	Gender=Masc|Number=Sing	8	obj	_	Gloss=grain|Ref=GEN_42.3|Translit=bar
10-11	מִמִּצְרָֽיִם	_	_	_	_	_	_	_	_
10	מִ	מן	ADP	prep	_	11	case	_	Gloss=from|Ref=GEN_42.3|Translit=mi
11	מִּצְרָֽיִם	מצרים	PROPN	nmpr	Number=Sing	8	obl	_	Gloss=Egypt|Ref=GEN_42.3|Translit=mitsrayim
12	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_42.3

~~~

_וירדו אחי־יוסף **עשרה** לשבר בר ממצרים׃_

_ṿayerdu ʼaḥe yosef **ʻaśarah** lishbor bar mimitsrayim_

_And the **ten** brothers of Joseph went down to buy grain from Egypt._

<!-- Interlanguage links updated So 10. května 2025, 18:15:52 CEST -->
