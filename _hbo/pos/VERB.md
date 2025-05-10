---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---

For Ancient Hebrew, the tag `VERB` is applied to words which can take aspect morphology, apart from the copula היה, which is tagged [AUX]().

Additionally, the existentials יש and אין are tagged as `VERB`s.

If a participle appears with compound morphology (that is, if its arguments are attached with [compound:smixut](hbo-dep/compound-smixut) rather than [obj]()) then the tag is changed to [NOUN]().

<!-- genesis 60 -->
~~~ conllu
# sent_id = Masoretic-Genesis-3:5-hbo
# text = כִּ֚י יֹדֵ֣עַ אֱלֹהִ֔ים כִּ֗י בְּיֹום֙ אֲכָלְכֶ֣ם מִמֶּ֔נּוּ וְנִפְקְח֖וּ עֵֽינֵיכֶ֑ם וִהְיִיתֶם֙ כֵּֽאלֹהִ֔ים יֹדְעֵ֖י טֹ֥וב וָרָֽע׃
# translit = ki yodeʻa ʼelohim ki beyom ʼakhalkem mimenu ṿenifḳeḥu ʻenekhem ṿihyitem keʼlohim yodʻe ṭov ṿaraʻ
# visual-style 19 bgColor:blue
# visual-style 19 fgColor:white
1	כִּ֚י	כי	SCONJ	conj	_	2	mark	_	Gloss=that|Ref=GEN_3.5|Translit=ki
2	יֹדֵ֣עַ	ידע	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	0	root	_	Gloss=know|Ref=GEN_3.5|Translit=yodeʻa
3	אֱלֹהִ֔ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=god(s)|Ref=GEN_3.5|Translit=ʼelohim
4	כִּ֗י	כי	SCONJ	conj	_	12	mark	_	Gloss=that|Ref=GEN_3.5|Translit=ki
5-6	בְּיֹום֙	_	_	_	_	_	_	_	_
5	בְּ	ב	ADP	prep	_	6	case	_	Gloss=in|Ref=GEN_3.5|Translit=be
6	יֹום֙	יום	NOUN	subs	Gender=Masc|Number=Sing	12	obl	_	Gloss=day|Ref=GEN_3.5|Translit=yom
7-8	אֲכָלְכֶ֣ם	_	_	_	_	_	_	_	_
7	אֲכָלְ	אכל	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	6	acl	_	Gloss=eat|Ref=GEN_3.5|Translit=ʼakhal
8	כֶ֣ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	Ref=GEN_3.5|Translit=kem
9-10	מִמֶּ֔נּוּ	_	_	_	_	_	_	_	_
9	מִמֶּ֔	מן	ADP	prep	_	10	case	_	Gloss=from|Ref=GEN_3.5|Translit=mime
10	נּוּ	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obl	_	Ref=GEN_3.5|Translit=nu
11-12	וְנִפְקְח֖וּ	_	_	_	_	_	_	_	_
11	וְ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_3.5|Translit=ṿe
12	נִפְקְח֖וּ	פקח	VERB	verb	Aspect=Perf|HebBinyan=NIFAL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	2	ccomp	_	Gloss=open|Ref=GEN_3.5|Translit=nifḳeḥu
13-14	עֵֽינֵיכֶ֑ם	_	_	_	_	_	_	_	_
13	עֵֽינֵי	עין	NOUN	subs	Gender=Fem|Number=Dual	12	nsubj	_	Gloss=eye|Ref=GEN_3.5|Translit=ʻene
14	כֶ֑ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	13	nmod:poss	_	Ref=GEN_3.5|Translit=kem
15-16	וִהְיִיתֶם֙	_	_	_	_	_	_	_	_
15	וִ	ו	CCONJ	conj	_	18	cc	_	Gloss=and|Ref=GEN_3.5|Translit=ṿi
16	הְיִיתֶם֙	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	18	cop	_	Gloss=be|Ref=GEN_3.5|Translit=heyitem
17-18	כֵּֽאלֹהִ֔ים	_	_	_	_	_	_	_	_
17	כֵּֽ	כ	ADP	prep	_	18	case	_	Gloss=as|Ref=GEN_3.5|Translit=ke
18	אלֹהִ֔ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	12	conj	_	Gloss=god(s)|Ref=GEN_3.5|Translit=ʼlohim
19	יֹדְעֵ֖י	ידע	NOUN	verb	Gender=Masc|HebBinyan=PAAL|Number=Plur|VerbForm=Part	18	xcomp	_	Gloss=know|Ref=GEN_3.5|Translit=yodʻe
20	טֹ֥וב	טוב	ADJ	adjv	Gender=Masc|Number=Sing	19	compound:smixut	_	Gloss=good|Ref=GEN_3.5|Translit=ṭov
21-22	וָרָֽע	_	_	_	_	_	_	_	_
21	וָ	ו	CCONJ	conj	_	22	cc	_	Gloss=and|Ref=GEN_3.5|Translit=ṿa
22	רָֽע	רע	ADJ	adjv	Gender=Masc|Number=Sing	20	conj	_	Gloss=evil|Ref=GEN_3.5|Translit=raʻ
23	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_3.5

~~~

_כי ידע אלהים כי ביום אכלכם ממנו ונפקחו עיניכם והייתם כאלהים **ידעי** טוב ורע׃_

_ki yodeʻa ʼelohim ki beyom ʼakhalkem mimenu ṿenifḳeḥu ʻenekhem ṿihyitem keʼlohim **yodʻe** ṭov ṿaraʻ_

_Because God knows that in the day of your eating from it, your eyes will be opened and you will be like God, **knowers** of good and evil._

## Features

The two existential verbs should always have `Mood=Ind|VerbForm=Fin`.

All other verbs should have values for [HebBinyan](hbo-feat/HebBinyan) and [VerbForm](hbo-feat/VerbForm).

With `VerbForm=Fin`, there should also be values for [Aspect](hbo-feat/Aspect), [Mood](hbo-feat/Mood), [Number](hbo-feat/Number), [Person](hbo-feat/Person), and [Tense](hbo-feat/Tense). If the verb is not first person, there should also be a value for [Gender](hbo-feat/Gender).

No additional features should be marked for `VerbForm=Inf`.

With `VerbForm=Part`, there should be values for [Gender](hbo-feat/Gender) and [Number](hbo-feat/Number).

## XPOS

All words tagged `VERB` have BHSA POS tag `verb`, except the existentials, which are tagged `subs`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:51 CEST -->
