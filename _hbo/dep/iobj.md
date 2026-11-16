---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

Many constructions in Ancient Hebrew which might correspond to the `iobj` relation in other languages, namely, dative dependents of verbs, involve a preposition such as ל /l/ "to", and thus use the [obl]() relation.

The `iobj` relation is specifically used for causative verbs (generally those with a [HebBinyan]() of `HIFIL` or occasionally `PIEL`) which have two non-subject arguments which both have either no preposition or the accusative preposition את /'et/.

<!-- leviticus 169 -->
~~~ conllu
# sent_id = Masoretic-Leviticus-8:7-hbo
# text = וַיִּתֵּן עָלָיו אֶת־הַכֻּתֹּנֶת וַיַּחְגֹּר אֹתֹו בָּֽאַבְנֵט וַיַּלְבֵּשׁ אֹתֹו אֶֽת־הַמְּעִיל וַיִּתֵּן עָלָיו אֶת־הָאֵפֹד וַיַּחְגֹּר אֹתֹו בְּחֵשֶׁב הָֽאֵפֹד וַיֶּאְפֹּד לֹו בֹּֽו׃
# translit = ṿayiten ʻalaṿ ʼet hakutonet ṿayaḥgor ʼoto baʼavneṭ ṿayalbesh ʼoto ʼet hamʻil ṿayiten ʻalaṿ ʼet haʼefod ṿayaḥgor ʼoto beḥeshev haʼefod ṿayeʼpod lo bo
# parallel_id = bible/lev-8-7
# visual-style 17 19 iobj color:blue
# visual-style 17 23 obj color:green
1-2	וַיִּתֵּן	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|LId[Strongs]=c|Morf[OpenScriptures]=C|Ref=LEV_8.7|Ref[BHSA]=56131|Ref[MACULA]=o030080070011|Translit=ṿa
2	יִּתֵּן	נתן	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Cantillation=Qadma|FormWithCantillation=יִּתֵּ֨ן|Gloss=give|LId[Strongs]=5414|Morf[OpenScriptures]=Vqw3ms|Ref=LEV_8.7|Ref[BHSA]=56132|Ref[MACULA]=o030080070012|Translit=yiten
3-4	עָלָיו	_	_	_	_	_	_	_	_
3	עָלָי	על	ADP	prep	_	4	case	_	Cantillation=Geresh|FormWithCantillation=עָלָ֜י|Gloss=upon|LId[Strongs]=5921a|Morf[OpenScriptures]=R|Ref=LEV_8.7|Ref[BHSA]=56133|Ref[MACULA]=o030080070021|Translit=ʻala
4	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	Morf[OpenScriptures]=Sp3ms|Ref=LEV_8.7|Ref[MACULA]=o030080070022|Translit=ṿ
5	אֶת	את	ADP	prep	_	8	case	_	Gloss=<object.marker>|LexDomain[SDBH]=001004001017|LId[SDBH]=000792003001000|LId[Strongs]=853|Morf[OpenScriptures]=To|Ref=LEV_8.7|Ref[BHSA]=56134|Ref[MACULA]=o030080070031|SpaceAfter=No|Translit=ʼet
6	־	־	PUNCT	punct	_	5	punct	_	Ref=LEV_8.7|SpaceAfter=No
7-8	הַכֻּתֹּנֶת	_	_	_	_	_	_	_	_
7	הַ	ה	DET	art	PronType=Art	8	det	_	Gloss=the|LId[Strongs]=d|Morf[OpenScriptures]=Td|Ref=LEV_8.7|Ref[BHSA]=56135|Ref[MACULA]=o030080070041|Translit=ha
8	כֻּתֹּנֶת	כתנת	NOUN	subs	Gender=Fem|Number=Sing	2	obj	_Cantillation=Revia|FormWithCantillation=כֻּתֹּ֗נֶת|Gloss=tunic|LexDomain[SDBH]=001004001002|LId[SDBH]=003476001001000|LId[Strongs]=3801|Morf[OpenScriptures]=Ncfsa|Ref=LEV_8.7|Ref[BHSA]=56136|Ref[MACULA]=o030080070042|Translit=kutonet
9-10	וַיַּחְגֹּר	_	_	_	_	_	_	_	_
9	וַ	ו	CCONJ	conj	_	10	cc	_	Gloss=and|LId[Strongs]=c|Morf[OpenScriptures]=C|Ref=LEV_8.7|Ref[BHSA]=56137|Ref[MACULA]=o030080070051|Translit=ṿa
10	יַּחְגֹּר	חגר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Cantillation=Mahapakh|FormWithCantillation=יַּחְגֹּ֤ר|Gloss=gird|LexDomain[SDBH]=002003001007|LId[SDBH]=002125001003000|LId[Strongs]=2296|Morf[OpenScriptures]=Vqw3ms|Ref=LEV_8.7|Ref[BHSA]=56138|Ref[MACULA]=o030080070052|Translit=yaḥgor
11-12	אֹתֹו	_	_	_	_	_	_	_	_
11	אֹתֹ	את	ADP	prep	_	12	case	_	Gloss=<object.marker>|LexDomain[SDBH]=001004001017|LId[SDBH]=000792003001000|LId[Strongs]=853|Morf[OpenScriptures]=To|Ref=LEV_8.7|Ref[BHSA]=56139|Ref[MACULA]=o030080070061|Translit=ʼoto
12	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obj	_	Cantillation=Pashta|FormWithCantillation=ו֙|Morf[OpenScriptures]=Sp3ms|Ref=LEV_8.7|Ref[MACULA]=o030080070062|Translit=ṿ
13-15	בָּֽאַבְנֵט	_	_	_	_	_	_	_	_
13	בָּֽ	ב	ADP	prep	_	15	case	_	Gloss=in|LId[Strongs]=b|Morf[OpenScriptures]=Rd|Ref=LEV_8.7|Ref[BHSA]=56140|Ref[MACULA]=o030080070071|Translit=ba
14	_	ה	DET	art	PronType=Art	15	det	_	Gloss=the|LId[Strongs]=d|Morf[OpenScriptures]=Td|Ref=LEV_8.7|Ref[BHSA]=56141|Ref[MACULA]=o030080070071ה|Translit=
15	אַבְנֵט	אבנט	NOUN	subs	Gender=Masc|Number=Sing	10	obl	_Cantillation=ZaqefQatan|FormWithCantillation=אַבְנֵ֔ט|Gloss=scarf|LexDomain[SDBH]=001004001002|LId[SDBH]=000072001001000|LId[Strongs]=73|Morf[OpenScriptures]=Ncmsa|Ref=LEV_8.7|Ref[BHSA]=56142|Ref[MACULA]=o030080070072|Translit=ʼavneṭ
16-17	וַיַּלְבֵּשׁ	_	_	_	_	_	_	_	_
16	וַ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|LId[Strongs]=c|Morf[OpenScriptures]=C|Ref=LEV_8.7|Ref[BHSA]=56143|Ref[MACULA]=o030080070081|Translit=ṿa
17	יַּלְבֵּשׁ	לבשׁ	VERB	verb	Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Cantillation=Mahapakh|FormWithCantillation=יַּלְבֵּ֤שׁ|Gloss=clothe|LexDomain[SDBH]=002003001007|LId[SDBH]=003516001003000|LId[Strongs]=3847|Morf[OpenScriptures]=Vhw3ms|Ref=LEV_8.7|Ref[BHSA]=56144|Ref[MACULA]=o030080070082|Translit=yalbesh
18-19	אֹתֹו	_	_	_	_	_	_	_	_
18	אֹתֹ	את	ADP	prep	_	19	case	_	Gloss=<object.marker>|LexDomain[SDBH]=001004001017|LId[SDBH]=000792003001000|LId[Strongs]=853|Morf[OpenScriptures]=To|Ref=LEV_8.7|Ref[BHSA]=56145|Ref[MACULA]=o030080070091|Translit=ʼoto
19	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	iobj	_	Cantillation=Pashta|FormWithCantillation=ו֙|Morf[OpenScriptures]=Sp3ms|Ref=LEV_8.7|Ref[MACULA]=o030080070092|Translit=ṿ
20	אֶֽת	את	ADP	prep	_	23	case	_	Gloss=<object.marker>|LexDomain[SDBH]=001004001017|LId[SDBH]=000792003001000|LId[Strongs]=854|Morf[OpenScriptures]=R|Ref=LEV_8.7|Ref[BHSA]=56146|Ref[MACULA]=o030080070101|SpaceAfter=No|Translit=ʼet
21	־	־	PUNCT	punct	_	20	punct	_	Ref=LEV_8.7|SpaceAfter=No
22-23	הַמְּעִיל	_	_	_	_	_	_	_	_
22	הַ	ה	DET	art	PronType=Art	23	det	_	Gloss=the|LId[Strongs]=d|Morf[OpenScriptures]=Td|Ref=LEV_8.7|Ref[BHSA]=56147|Ref[MACULA]=o030080070111|Translit=ha
23	מְּעִיל	מעיל	NOUN	subs	Gender=Masc|Number=Sing	17	obj	_Cantillation=ZaqefQatan|FormWithCantillation=מְּעִ֔יל|Gloss=coat|LexDomain[SDBH]=001004001002|LId[SDBH]=004210001001000|LId[Strongs]=4598|Morf[OpenScriptures]=Ncmsa|Ref=LEV_8.7|Ref[BHSA]=56148|Ref[MACULA]=o030080070112|Translit=meʻil
24-25	וַיִּתֵּן	_	_	_	_	_	_	_	_
24	וַ	ו	CCONJ	conj	_	25	cc	_	Gloss=and|LId[Strongs]=c|Morf[OpenScriptures]=C|Ref=LEV_8.7|Ref[BHSA]=56149|Ref[MACULA]=o030080070121|Translit=ṿa
25	יִּתֵּן	נתן	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Cantillation=Merkha|FormWithCantillation=יִּתֵּ֥ן|Gloss=give|LId[Strongs]=5414|Morf[OpenScriptures]=Vqw3ms|Ref=LEV_8.7|Ref[BHSA]=56150|Ref[MACULA]=o030080070122|Translit=yiten
26-27	עָלָיו	_	_	_	_	_	_	_	_
26	עָלָי	על	ADP	prep	_	27	case	_	Cantillation=Tipeha|FormWithCantillation=עָלָ֖י|Gloss=upon|LId[Strongs]=5921a|Morf[OpenScriptures]=R|Ref=LEV_8.7|Ref[BHSA]=56151|Ref[MACULA]=o030080070131|Translit=ʻala
27	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	25	obl	_	Morf[OpenScriptures]=Sp3ms|Ref=LEV_8.7|Ref[MACULA]=o030080070132|Translit=ṿ
28	אֶת	את	ADP	prep	_	31	case	_	Gloss=<object.marker>|LexDomain[SDBH]=001004001017|LId[SDBH]=000792003001000|LId[Strongs]=853|Morf[OpenScriptures]=To|Ref=LEV_8.7|Ref[BHSA]=56152|Ref[MACULA]=o030080070141|SpaceAfter=No|Translit=ʼet
29	־	־	PUNCT	punct	_	28	punct	_	Ref=LEV_8.7|SpaceAfter=No
30-31	הָאֵפֹד	_	_	_	_	_	_	_	_
30	הָ	ה	DET	art	PronType=Art	31	det	_	Gloss=the|LId[Strongs]=d|Morf[OpenScriptures]=Td|Ref=LEV_8.7|Ref[BHSA]=56153|Ref[MACULA]=o030080070151|Translit=ha
31	אֵפֹד	אפד	NOUN	subs	Gender=Masc|Number=Sing	25	obj	_Cantillation=Etnahta|FormWithCantillation=אֵפֹ֑ד|Gloss=ephod|LexDomain[SDBH]=001004001002|LId[SDBH]=000590001002000|LId[Strongs]=646|Morf[OpenScriptures]=Ncmsa|Ref=LEV_8.7|Ref[BHSA]=56154|Ref[MACULA]=o030080070152|Translit=ʼefod
32-33	וַיַּחְגֹּר	_	_	_	_	_	_	_	_
32	וַ	ו	CCONJ	conj	_	33	cc	_	Gloss=and|LId[Strongs]=c|Morf[OpenScriptures]=C|Ref=LEV_8.7|Ref[BHSA]=56155|Ref[MACULA]=o030080070161|Translit=ṿa
33	יַּחְגֹּר	חגר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Cantillation=Munah|FormWithCantillation=יַּחְגֹּ֣ר|Gloss=gird|LexDomain[SDBH]=002003001007|LId[SDBH]=002125001003000|LId[Strongs]=2296|Morf[OpenScriptures]=Vqw3ms|Ref=LEV_8.7|Ref[BHSA]=56156|Ref[MACULA]=o030080070162|Translit=yaḥgor
34-35	אֹתֹו	_	_	_	_	_	_	_	_
34	אֹתֹ	את	ADP	prep	_	35	case	_	Cantillation=Revia|FormWithCantillation=אֹתֹ֗|Gloss=<object.marker>|LexDomain[SDBH]=001004001017|LId[SDBH]=000792003001000|LId[Strongs]=853|Morf[OpenScriptures]=To|Ref=LEV_8.7|Ref[BHSA]=56157|Ref[MACULA]=o030080070171|Translit=ʼoto
35	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	33	obj	_	Morf[OpenScriptures]=Sp3ms|Ref=LEV_8.7|Ref[MACULA]=o030080070172|Translit=ṿ
36-37	בְּחֵשֶׁב	_	_	_	_	_	_	_	_
36	בְּ	ב	ADP	prep	_	37	case	_	Gloss=in|LId[Strongs]=b|Morf[OpenScriptures]=R|Ref=LEV_8.7|Ref[BHSA]=56158|Ref[MACULA]=o030080070181|Translit=be
37	חֵשֶׁב	חשׁב	NOUN	subs	Gender=Masc|Number=Sing	33	obl	_Cantillation=Qadma,Pashta|FormWithCantillation=חֵ֨שֶׁב֙|Gloss=girdle|LexDomain[SDBH]=001004001002|LId[SDBH]=002578001001000|LId[Strongs]=2805|Morf[OpenScriptures]=Ncmsc|Ref=LEV_8.7|Ref[BHSA]=56159|Ref[MACULA]=o030080070182|Translit=ḥeshev
38-39	הָֽאֵפֹד	_	_	_	_	_	_	_	_
38	הָֽ	ה	DET	art	PronType=Art	39	det	_	Gloss=the|LId[Strongs]=d|Morf[OpenScriptures]=Td|Ref=LEV_8.7|Ref[BHSA]=56160|Ref[MACULA]=o030080070191|Translit=ha
39	אֵפֹד	אפד	NOUN	subs	Gender=Masc|Number=Sing	37	compound:smixut	_	Cantillation=ZaqefQatan|FormWithCantillation=אֵפֹ֔ד|Gloss=ephod|LexDomain[SDBH]=001004001002|LId[SDBH]=000590001002000|LId[Strongs]=646|Morf[OpenScriptures]=Ncmsa|Ref=LEV_8.7|Ref[BHSA]=56161|Ref[MACULA]=o030080070192|Translit=ʼefod
40-41	וַיֶּאְפֹּד	_	_	_	_	_	_	_	_
40	וַ	ו	CCONJ	conj	_	41	cc	_	Gloss=and|LId[Strongs]=c|Morf[OpenScriptures]=C|Ref=LEV_8.7|Ref[BHSA]=56162|Ref[MACULA]=o030080070201|Translit=ṿa
41	יֶּאְפֹּד	אפד	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Cantillation=Merkha|FormWithCantillation=יֶּאְפֹּ֥ד|Gloss=dress|LexDomain[SDBH]=002003001007|LId[SDBH]=000585001001000|LId[Strongs]=640|Morf[OpenScriptures]=Vqw3ms|Ref=LEV_8.7|Ref[BHSA]=56163|Ref[MACULA]=o030080070202|Translit=yeʼpod
42-43	לֹו	_	_	_	_	_	_	_	_
42	לֹ	ל	ADP	prep	_	43	case	_	Cantillation=Tipeha|FormWithCantillation=לֹ֖|Gloss=to|LId[Strongs]=l|Morf[OpenScriptures]=R|Ref=LEV_8.7|Ref[BHSA]=56164|Ref[MACULA]=o030080070211|Translit=lo
43	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	41	obl	_	Morf[OpenScriptures]=Sp3ms|Ref=LEV_8.7|Ref[MACULA]=o030080070212|Translit=ṿ
44-45	בֹּֽו	_	_	_	_	_	_	_	_
44	בֹּֽ	ב	ADP	prep	_	45	case	_	Gloss=in|LId[Strongs]=b|Morf[OpenScriptures]=R|Ref=LEV_8.7|Ref[BHSA]=56165|Ref[MACULA]=o030080070221|Translit=bo
45	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	41	obl	_	Morf[OpenScriptures]=Sp3ms|Ref=LEV_8.7|Ref[MACULA]=o030080070222|Translit=ṿ
46	׃	׃	PUNCT	punct	_	2	punct	_	Ref=LEV_8.7

~~~

_ויתן עליו את־הכתנת ויחגר אתו באבנט וילבש אתו את־המעיל ויתן עליו את־האפד ויחגר אתו בחשב האפד ויאפד לו בו׃_

_ṿayiten ʻalaṿ ʼet hakutonet ṿayaḥgor ʼoto baʼavneṭ ṿayalbesh ʼoto ʼet hamʻil ṿayiten ʻalaṿ ʼet haʼefod ṿayaḥgor ʼoto beḥeshev haʼefod ṿayeʼpod lo bo_

This analysis was agreed upon in [Issue #1124](https://github.com/UniversalDependencies/docs/issues/1124).