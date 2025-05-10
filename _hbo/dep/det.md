---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The `det` relation is used to connect a nominal with a definite or a demonstrative function word.

The prototypical example is of the determiner ה and a [NOUN]().

<!-- genesis 2 -->
~~~ conllu
# sent_id = Masoretic-Genesis-1:2-hbo
# text = וְהָאָ֗רֶץ הָיְתָ֥ה תֹ֨הוּ֙ וָבֹ֔הוּ וְחֹ֖שֶׁךְ עַל־פְּנֵ֣י תְהֹ֑ום וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל־פְּנֵ֥י הַמָּֽיִם׃
# translit = ṿehaʼarets haytah tohu ṿavohu ṿeḥoshekh ʻal pene tehom ṿeruḥa ʼelohim meraḥefet ʻal pene hamayim
# visual-style 3 2 det color:blue
# visual-style 22 21 det color:blue
1-3	וְהָאָ֗רֶץ	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	5	cc	_	Gloss=and|Ref=GEN_1.2|Translit=ṿe
2	הָ	ה	DET	art	PronType=Art	3	det	_	Gloss=the|Ref=GEN_1.2|Translit=ha
3	אָ֗רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	5	nsubj	_	Gloss=earth|Ref=GEN_1.2|Translit=ʼarets
4	הָיְתָ֥ה	היה	AUX	verb	Aspect=Perf|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	5	cop	_	Gloss=be|Ref=GEN_1.2|Translit=haytah
5	תֹ֨הוּ֙	תהו	NOUN	subs	Gender=Masc|Number=Sing	0	root	_	Gloss=emptiness|Ref=GEN_1.2|Translit=tohu
6-7	וָבֹ֔הוּ	_	_	_	_	_	_	_	_
6	וָ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=GEN_1.2|Translit=ṿa
7	בֹ֔הוּ	בהו	NOUN	subs	Gender=Masc|Number=Sing	5	conj	_	Gloss=emptiness|Ref=GEN_1.2|Translit=bohu
8-9	וְחֹ֖שֶׁךְ	_	_	_	_	_	_	_	_
8	וְ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_1.2|Translit=ṿe
9	חֹ֖שֶׁךְ	חשׁך	NOUN	subs	Gender=Masc|Number=Sing	12	nsubj	_	Gloss=darkness|Ref=GEN_1.2|Translit=ḥoshekh
10	עַל	על	ADP	prep	_	12	case	_	Gloss=upon|Ref=GEN_1.2|SpaceAfter=No|Translit=ʻal
11	־	־	PUNCT	punct	_	10	punct	_	Ref=GEN_1.2|SpaceAfter=No
12	פְּנֵ֣י	פנה	NOUN	subs	Gender=Masc|Number=Plur	5	conj	_	Gloss=face|Ref=GEN_1.2|Translit=pene
13	תְהֹ֑ום	תהום	NOUN	subs	Gender=Fem|Number=Sing	12	compound:smixut	_	Gloss=primeval.ocean|Ref=GEN_1.2|Translit=tehom
14-15	וְר֣וּחַ	_	_	_	_	_	_	_	_
14	וְ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=GEN_1.2|Translit=ṿe
15	ר֣וּחַ	רוח	NOUN	subs	Number=Sing	17	nsubj	_	Gloss=wind|Ref=GEN_1.2|Translit=ruḥa
16	אֱלֹהִ֔ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	15	compound:smixut	_	Gloss=god(s)|Ref=GEN_1.2|Translit=ʼelohim
17	מְרַחֶ֖פֶת	רחף	VERB	verb	Gender=Fem|HebBinyan=PIEL|Number=Sing|VerbForm=Part	5	conj	_	Gloss=shake|Ref=GEN_1.2|Translit=meraḥefet
18	עַל	על	ADP	prep	_	20	case	_	Gloss=upon|Ref=GEN_1.2|SpaceAfter=No|Translit=ʻal
19	־	־	PUNCT	punct	_	18	punct	_	Ref=GEN_1.2|SpaceAfter=No
20	פְּנֵ֥י	פנה	NOUN	subs	Gender=Masc|Number=Plur	17	obl	_	Gloss=face|Ref=GEN_1.2|Translit=pene
21-22	הַמָּֽיִם	_	_	_	_	_	_	_	_
21	הַ	ה	DET	art	PronType=Art	22	det	_	Gloss=the|Ref=GEN_1.2|Translit=ha
22	מָּֽיִם	מים	NOUN	subs	Gender=Masc|Number=Plur	20	compound:smixut	_	Gloss=water|Ref=GEN_1.2|Translit=mayim
23	׃	׃	PUNCT	punct	_	5	punct	_	Ref=GEN_1.2

~~~

_והארץ היתה תהו ובהו וחשך על־פני תהום ורוח אלהים מרחפת על־פני המים׃_

_ṿehaʼarets haytah tohu ṿavohu ṿeḥoshekh ʻal pene tehom ṿeruḥa ʼelohim meraḥefet ʻal pene hamayim_

_And the earth was empty and void and darkness was over the surface of the sea and the spirt of God was hovering over the water._

The relation can be used in similar fashion for [NUM]() and [ADJ]() in cases of promotion.

When an [ADJ]() is modifying a definite [NOUN](), it also receives a definite marker, which is also attached with `det`.

<!-- genesis 175 -->
~~~ conllu
# sent_id = Masoretic-Genesis-7:19-hbo
# text = וְהַמַּ֗יִם גָּֽבְר֛וּ מְאֹ֥ד מְאֹ֖ד עַל־הָאָ֑רֶץ וַיְכֻסּ֗וּ כָּל־הֶֽהָרִים֙ הַגְּבֹהִ֔ים אֲשֶׁר־תַּ֖חַת כָּל־הַשָּׁמָֽיִם׃
# translit = ṿehamayim gavru meʼod meʼod ʻal haʼarets ṿaykusu kal heharim hagbohim ʼasher taḥat kal hashamayim
# visual-style 18 17 det color:blue
# visual-style 16 18 amod color:blue
1-3	וְהַמַּ֗יִם	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	4	cc	_	Gloss=and|Ref=GEN_7.19|Translit=ṿe
2	הַ	ה	DET	art	PronType=Art	3	det	_	Gloss=the|Ref=GEN_7.19|Translit=ha
3	מַּ֗יִם	מים	NOUN	subs	Gender=Masc|Number=Plur	4	nsubj	_	Gloss=water|Ref=GEN_7.19|Translit=mayim
4	גָּֽבְר֛וּ	גבר	VERB	verb	Aspect=Perf|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	0	root	_	Gloss=be.superior|Ref=GEN_7.19|Translit=gavru
5	מְאֹ֥ד	מאד	ADV	subs	_	4	advmod	_	Gloss=might|Ref=GEN_7.19|Translit=meʼod
6	מְאֹ֖ד	מאד	ADV	subs	_	5	advmod	_	Gloss=might|Ref=GEN_7.19|Translit=meʼod
7	עַל	על	ADP	prep	_	10	case	_	Gloss=upon|Ref=GEN_7.19|SpaceAfter=No|Translit=ʻal
8	־	־	PUNCT	punct	_	7	punct	_	Ref=GEN_7.19|SpaceAfter=No
9-10	הָאָ֑רֶץ	_	_	_	_	_	_	_	_
9	הָ	ה	DET	art	PronType=Art	10	det	_	Gloss=the|Ref=GEN_7.19|Translit=ha
10	אָ֑רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	4	obl	_	Gloss=earth|Ref=GEN_7.19|Translit=ʼarets
11-12	וַיְכֻסּ֗וּ	_	_	_	_	_	_	_	_
11	וַ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_7.19|Translit=ṿa
12	יְכֻסּ֗וּ	כסה	VERB	verb	Gender=Masc|HebBinyan=PUAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	Gloss=cover|Ref=GEN_7.19|Translit=yekhusu
13	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	12	nsubj	_	Gloss=whole|Ref=GEN_7.19|SpaceAfter=No|Translit=kal
14	־	־	PUNCT	punct	_	16	punct	_	Ref=GEN_7.19|SpaceAfter=No
15-16	הֶֽהָרִים֙	_	_	_	_	_	_	_	_
15	הֶֽ	ה	DET	art	PronType=Art	16	det	_	Gloss=the|Ref=GEN_7.19|Translit=he
16	הָרִים֙	הר	NOUN	subs	Gender=Masc|Number=Plur	13	compound:smixut	_	Gloss=mountain|Ref=GEN_7.19|Translit=harim
17-18	הַגְּבֹהִ֔ים	_	_	_	_	_	_	_	_
17	הַ	ה	DET	art	PronType=Art	18	det	_	Gloss=the|Ref=GEN_7.19|Translit=ha
18	גְּבֹהִ֔ים	גבה	ADJ	adjv	Gender=Masc|Number=Plur	16	amod	_	Gloss=high|Ref=GEN_7.19|Translit=gevohim
19	אֲשֶׁר	אשׁר	SCONJ	conj	_	21	mark	_	Gloss=<relative>|Ref=GEN_7.19|SpaceAfter=No|Translit=ʼasher
20	־	־	PUNCT	punct	_	19	punct	_	Ref=GEN_7.19|SpaceAfter=No
21	תַּ֖חַת	תחת	NOUN	subs	Gender=Masc|Number=Sing	13	acl:relcl	_	Gloss=under.part|Ref=GEN_7.19|Translit=taḥat
22	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	21	compound:smixut	_	Gloss=whole|Ref=GEN_7.19|SpaceAfter=No|Translit=kal
23	־	־	PUNCT	punct	_	25	punct	_	Ref=GEN_7.19|SpaceAfter=No
24-25	הַשָּׁמָֽיִם	_	_	_	_	_	_	_	_
24	הַ	ה	DET	art	PronType=Art	25	det	_	Gloss=the|Ref=GEN_7.19|Translit=ha
25	שָּׁמָֽיִם	שׁמים	NOUN	subs	Gender=Masc|Number=Plur	22	compound:smixut	_	Gloss=heavens|Ref=GEN_7.19|Translit=shamayim
26	׃	׃	PUNCT	punct	_	4	punct	_	Ref=GEN_7.19

~~~

_והמים גברו מאד מאד על־הארץ ויכסו כל־ההרים הגבהים אשר־תחת כל־השמים׃_

_ṿehamayim gavru meʼod meʼod ʻal haʼarets ṿaykusu kal heharim hagbohim ʼasher taḥat kal hashamayim_

_And the waters grew very much upon the earth and they covered all the high mountains which were under all the heavens._

When a noun phrase is demonstrative, this is expressed by following the noun with a demonstrative pronoun which agrees in gender and number (masculine זה, feminine זאת, plural אלה) in addition to the definite marker before the noun. This pronoun has its own definite marker, and thus a demonstrative noun phrase will generally have at least three arcs labeled `det`.

<!-- genesis 346 -->
~~~ conllu
# sent_id = Masoretic-Genesis-15:1-hbo
# text = אַחַ֣ר׀ הַדְּבָרִ֣ים הָאֵ֗לֶּה הָיָ֤ה דְבַר־יְהוָה֙ אֶל־אַבְרָ֔ם בַּֽמַּחֲזֶ֖ה לֵאמֹ֑ר אַל־תִּירָ֣א אַבְרָ֗ם אָנֹכִי֙ מָגֵ֣ן לָ֔ךְ שְׂכָרְךָ֖ הַרְבֵּ֥ה מְאֹֽד׃
# translit = ʼaḥar  hadbarim haʼeleh hayah devar yehṿah ʼel ʼavram bamaḥazeh leʼmor ʼal tiraʼ ʼavram ʼanokhi magen lakh śekharka harbeh meʼod
# visual-style 4 3 det color:blue
# visual-style 4 6 det color:blue
# visual-style 6 5 det color:blue
1	אַחַ֣ר	אחר	ADP	subs	_	4	case	_	Gloss=after|Ref=GEN_15.1|SpaceAfter=No|Translit=ʼaḥar
2	׀	׀	PUNCT	punct	_	1	punct	_	Ref=GEN_15.1
3-4	הַדְּבָרִ֣ים	_	_	_	_	_	_	_	_
3	הַ	ה	DET	art	PronType=Art	4	det	_	Gloss=the|Ref=GEN_15.1|Translit=ha
4	דְּבָרִ֣ים	דבר	NOUN	subs	Gender=Masc|Number=Plur	13	obl	_	Gloss=word|Ref=GEN_15.1|Translit=devarim
5-6	הָאֵ֗לֶּה	_	_	_	_	_	_	_	_
5	הָ	ה	DET	art	PronType=Art	6	det	_	Gloss=the|Ref=GEN_15.1|Translit=ha
6	אֵ֗לֶּה	אלה	PRON	prde	Number=Plur|PronType=Dem	4	det	_	Gloss=these|Ref=GEN_15.1|Translit=ʼeleh
7	הָיָ֤ה	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	13	cop	_	Gloss=be|Ref=GEN_15.1|Translit=hayah
8	דְבַר	דבר	NOUN	subs	Gender=Masc|Number=Sing	13	nsubj	_	Gloss=word|Ref=GEN_15.1|SpaceAfter=No|Translit=devar
9	־	־	PUNCT	punct	_	10	punct	_	Ref=GEN_15.1|SpaceAfter=No
10	יְהוָה֙	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	8	compound:smixut	_	Gloss=YHWH|Ref=GEN_15.1|Translit=yehṿah
11	אֶל	אל	ADP	prep	_	13	case	_	Gloss=to|Ref=GEN_15.1|SpaceAfter=No|Translit=ʼel
12	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_15.1|SpaceAfter=No
13	אַבְרָ֔ם	אברם	PROPN	nmpr	Gender=Masc|Number=Sing	0	root	_	Gloss=Abram|Ref=GEN_15.1|Translit=ʼavram
14-16	בַּֽמַּחֲזֶ֖ה	_	_	_	_	_	_	_	_
14	בַּֽ	ב	ADP	prep	_	16	case	_	Gloss=in|Ref=GEN_15.1|Translit=ba
15	_	ה	DET	art	PronType=Art	16	det	_	Gloss=the|Ref=GEN_15.1|Translit=
16	מַּחֲזֶ֖ה	מחזה	NOUN	subs	Gender=Masc|Number=Sing	13	obl	_	Gloss=vision|Ref=GEN_15.1|Translit=maḥazeh
17-18	לֵאמֹ֑ר	_	_	_	_	_	_	_	_
17	לֵ	ל	ADP	prep	ExtPos=SCONJ	21	mark	_	Gloss=to|Ref=GEN_15.1|Translit=le
18	אמֹ֑ר	אמר	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	17	fixed	_	Gloss=say|Ref=GEN_15.1|Translit=ʼmor
19	אַל	אל	ADV	nega	Polarity=Neg	21	advmod	_	Gloss=not|Ref=GEN_15.1|SpaceAfter=No|Translit=ʼal
20	־	־	PUNCT	punct	_	19	punct	_	Ref=GEN_15.1|SpaceAfter=No
21	תִּירָ֣א	ירא	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	13	advcl	_	Gloss=fear|Ref=GEN_15.1|Translit=tiraʼ
22	אַבְרָ֗ם	אברם	PROPN	nmpr	Gender=Masc|Number=Sing	21	vocative	_	Gloss=Abram|Ref=GEN_15.1|Translit=ʼavram
23	אָנֹכִי֙	אנכי	PRON	prps	Number=Sing|Person=1|PronType=Prs	24	nsubj	_	Gloss=i|Ref=GEN_15.1|Translit=ʼanokhi
24	מָגֵ֣ן	מגן	NOUN	subs	Number=Sing	21	parataxis	_	Gloss=shield|Ref=GEN_15.1|Translit=magen
25-26	לָ֔ךְ	_	_	_	_	_	_	_	_
25	לָ֔	ל	ADP	prep	_	26	case	_	Gloss=to|Ref=GEN_15.1|Translit=la
26	ךְ	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	24	nmod	_	Ref=GEN_15.1|Translit=ke
27-28	שְׂכָרְךָ֖	_	_	_	_	_	_	_	_
27	שְׂכָרְ	שׂכר	NOUN	subs	Gender=Masc|Number=Sing	29	nsubj	_	Gloss=hire|Ref=GEN_15.1|Translit=śekhar
28	ךָ֖	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	27	nmod:poss	_	Ref=GEN_15.1|Translit=ka
29	הַרְבֵּ֥ה	רבה	VERB	verb	HebBinyan=HIFIL|VerbForm=Inf	21	parataxis	_	Gloss=be.many|Ref=GEN_15.1|Translit=harbeh
30	מְאֹֽד	מאד	ADV	subs	_	29	advmod	_	Gloss=might|Ref=GEN_15.1|SpaceAfter=No|Translit=meʼod
31	׃	׃	PUNCT	punct	_	13	punct	_	Ref=GEN_15.1

~~~

_אחר׀ הדברים האלה היה דבר־יהוה אל־אברם במחזה לאמר אל־תירא אברם אנכי מגן לך שכרך הרבה מאד׃_

_ʼaḥar  hadbarim haʼeleh hayah devar yehṿah ʼel ʼavram bamaḥazeh leʼmor ʼal tiraʼ ʼavram ʼanokhi magen lakh śekharka harbeh meʼod_

_After these things, the word of The LORD came to Abram in a vision saying "Do not fear, Abram; I am a sheild for you; your reward is very great."._

This construction is discussed in [Issue #1059](https://github.com/UniversalDependencies/docs/issues/1059).
<!-- Interlanguage links updated So 10. května 2025, 18:15:25 CEST -->
