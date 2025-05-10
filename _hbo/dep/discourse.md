---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The `discourse` relation is used to attach interjections to clauses.

<!-- genesis 446 -->
~~~ conllu
# sent_id = Masoretic-Genesis-19:7-hbo
# text = וַיֹּאמַ֑ר אַל־נָ֥א אַחַ֖י תָּרֵֽעוּ׃
# translit = ṿayoʼmar ʼal naʼ ʼaḥai tareʻu
# visual-style 8 5 discourse color:blue
# visual-style 5 bgColor:blue
# visual-style 5 fgColor:white
1-2	וַיֹּאמַ֑ר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_19.7|Translit=ṿa
2	יֹּאמַ֑ר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_19.7|Translit=yoʼmar
3	אַל	אל	ADV	nega	Polarity=Neg	8	advmod	_	Gloss=not|Ref=GEN_19.7|SpaceAfter=No|Translit=ʼal
4	־	־	PUNCT	punct	_	3	punct	_	Ref=GEN_19.7|SpaceAfter=No
5	נָ֥א	נא	INTJ	intj	_	8	discourse	_	Gloss=yeah|Ref=GEN_19.7|Translit=naʼ
6-7	אַחַ֖י	_	_	_	_	_	_	_	_
6	אַחַ֖	אח	NOUN	subs	Gender=Masc|Number=Plur	8	vocative	_	Gloss=brother|Ref=GEN_19.7|Translit=ʼaḥa
7	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	6	nmod:poss	_	Ref=GEN_19.7|Translit=
8	תָּרֵֽעוּ	רעע	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	2	ccomp	_	Gloss=be.evil|Ref=GEN_19.7|SpaceAfter=No|Translit=tareʻu
9	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_19.7

~~~

_ויאמר אל־**נא** אחי תרעו׃_

_ṿayoʼmar ʼal **naʼ** ʼaḥai tareʻu_

_And he said "**Please**, my brothers, do not do evil."._

<!-- genesis 1113 -->
~~~ conllu
# sent_id = Masoretic-Genesis-38:27-hbo
# text = וַיְהִ֖י בְּעֵ֣ת לִדְתָּ֑הּ וְהִנֵּ֥ה תְאֹומִ֖ים בְּבִטְנָֽהּ׃
# translit = ṿayhi beʻet lidtah ṿehineh teʼomim beviṭnah
# visual-style 11 8 discourse color:blue
# visual-style 8 bgColor:blue
# visual-style 8 fgColor:white
1-2	וַיְהִ֖י	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_38.27|Translit=ṿa
2	יְהִ֖י	היה	AUX	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=be|Ref=GEN_38.27|Translit=yehi
3-4	בְּעֵ֣ת	_	_	_	_	_	_	_	_
3	בְּ	ב	ADP	prep	_	4	case	_	Gloss=in|Ref=GEN_38.27|Translit=be
4	עֵ֣ת	עת	NOUN	subs	Number=Sing	2	obl	_	Gloss=time|Ref=GEN_38.27|Translit=ʻet
5-6	לִדְתָּ֑הּ	_	_	_	_	_	_	_	_
5	לִדְתָּ֑	ילד	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	4	acl	_	Gloss=bear|Ref=GEN_38.27|Translit=lidta
6	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Ref=GEN_38.27|Translit=h
7-8	וְהִנֵּ֥ה	_	_	_	_	_	_	_	_
7	וְ	ו	CCONJ	conj	_	11	cc	_	Gloss=and|Ref=GEN_38.27|Translit=ṿe
8	הִנֵּ֥ה	הנה	INTJ	intj	_	11	discourse	_	Gloss=behold|Ref=GEN_38.27|Translit=hineh
9	תְאֹומִ֖ים	תואמם	NOUN	subs	Gender=Masc|Number=Plur	11	nsubj	_	Gloss=twins|Ref=GEN_38.27|Translit=teʼomim
10-12	בְּבִטְנָֽהּ	_	_	_	_	_	_	_	_
10	בְּ	ב	ADP	prep	_	11	case	_	Gloss=in|Ref=GEN_38.27|Translit=be
11	בִטְנָֽ	בטן	NOUN	subs	Gender=Fem|Number=Sing	2	conj	_	Gloss=belly|Ref=GEN_38.27|Translit=biṭna
12	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nmod:poss	_	Ref=GEN_38.27|Translit=h
13	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_38.27

~~~

_ויהי בעת לדתה **והנה** תאומים בבטנה׃_

_ṿayhi beʻet lidtah **ṿehineh** teʼomim beviṭnah_

_And it happened when the time came for her to give birth, **behold** twins in her womb._

Note that when הנה (hineh "behold") appears with only a single nominal after it, particularly if that nominal is a pronominal suffix, then it serves as the predicate on the grounds that it is etymologically a locative adverb.

<!-- genesis 540 -->
~~~ conllu
# sent_id = Masoretic-Genesis-22:11-hbo
# text = וַיִּקְרָ֨א אֵלָ֜יו מַלְאַ֤ךְ יְהוָה֙ מִן־הַשָּׁמַ֔יִם וַיֹּ֖אמֶר אַבְרָהָ֣ם׀ אַבְרָהָ֑ם וַיֹּ֖אמֶר הִנֵּֽנִי׃
# translit = ṿayiḳraʼ ʼelaṿ malʼakh yehṿah min hashamayim ṿayoʼmer ʼavraham  ʼavraham ṿayoʼmer hineni
# visual-style 18 19 nsubj color:blue
# visual-style 18 bgColor:blue
# visual-style 18 fgColor:white
1-2	וַיִּקְרָ֨א	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_22.11|Translit=ṿa
2	יִּקְרָ֨א	קרא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=call|Ref=GEN_22.11|Translit=yiḳraʼ
3-4	אֵלָ֜יו	_	_	_	_	_	_	_	_
3	אֵלָ֜י	אל	ADP	prep	_	4	case	_	Gloss=to|Ref=GEN_22.11|Translit=ʼela
4	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	Ref=GEN_22.11|Translit=ṿ
5	מַלְאַ֤ךְ	מלאך	NOUN	subs	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=messenger|Ref=GEN_22.11|Translit=malʼakh
6	יְהוָה֙	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	5	compound:smixut	_	Gloss=YHWH|Ref=GEN_22.11|Translit=yehṿah
7	מִן	מן	ADP	prep	_	10	case	_	Gloss=from|Ref=GEN_22.11|SpaceAfter=No|Translit=min
8	־	־	PUNCT	punct	_	7	punct	_	Ref=GEN_22.11|SpaceAfter=No
9-10	הַשָּׁמַ֔יִם	_	_	_	_	_	_	_	_
9	הַ	ה	DET	art	PronType=Art	10	det	_	Gloss=the|Ref=GEN_22.11|Translit=ha
10	שָּׁמַ֔יִם	שׁמים	NOUN	subs	Gender=Masc|Number=Plur	2	obl	_	Gloss=heavens|Ref=GEN_22.11|Translit=shamayim
11-12	וַיֹּ֖אמֶר	_	_	_	_	_	_	_	_
11	וַ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_22.11|Translit=ṿa
12	יֹּ֖אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=say|Ref=GEN_22.11|Translit=yoʼmer
13	אַבְרָהָ֣ם	אברהם	PROPN	nmpr	Gender=Masc|Number=Sing	12	ccomp	_	Gloss=Abraham|Ref=GEN_22.11|SpaceAfter=No|Translit=ʼavraham
14	׀	׀	PUNCT	punct	_	15	punct	_	Ref=GEN_22.11
15	אַבְרָהָ֑ם	אברהם	PROPN	nmpr	Gender=Masc|Number=Sing	13	parataxis	_	Gloss=Abraham|Ref=GEN_22.11|Translit=ʼavraham
16-17	וַיֹּ֖אמֶר	_	_	_	_	_	_	_	_
16	וַ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=GEN_22.11|Translit=ṿa
17	יֹּ֖אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=say|Ref=GEN_22.11|Translit=yoʼmer
18-19	הִנֵּֽנִי	_	_	_	_	_	_	_	_
18	הִנֵּֽ	הנה	INTJ	intj	_	17	ccomp	_	Gloss=behold|Ref=GEN_22.11|Translit=hine
19	נִי	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	18	nsubj	_	Ref=GEN_22.11|Translit=ni
20	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_22.11

~~~

_ויקרא אליו מלאך יהוה מן־השמים ויאמר אברהם׀ אברהם ויאמר **הננ**י׃_

_ṿayiḳraʼ ʼelaṿ malʼakh yehṿah min hashamayim ṿayoʼmer ʼavraham  ʼavraham ṿayoʼmer **hineni**_

_And the messenger of The LORD called to him from the sky and he said "Abraham, Abraham" and he said "**Here** I am."._
<!-- Interlanguage links updated So 10. května 2025, 18:15:27 CEST -->
