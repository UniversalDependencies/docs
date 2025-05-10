---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause'
udver: '2'
---

The relation `acl:relcl` is used for finite or participial clauses which are attached to nominals.
The prototypical case is a finite clause preceded by the subordinating conjunction אשר /ʼasher/.

<!-- genesis 997 -->
~~~ conllu
# sent_id = Masoretic-Genesis-35:13-hbo
# text = וַיַּ֥עַל מֵעָלָ֖יו אֱלֹהִ֑ים בַּמָּקֹ֖ום אֲשֶׁר־דִּבֶּ֥ר אִתֹּֽו׃
# translit = ṿayaʻal meʻalaṿ ʼelohim bamaḳom ʼasher diber ʼito
# visual-style 9 12 acl:relcl color:blue
# visual-style 12 10 mark color:blue
1-2	וַיַּ֥עַל	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_35.13|Translit=ṿa
2	יַּ֥עַל	עלה	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=ascend|Ref=GEN_35.13|Translit=yaʻal
3-5	מֵעָלָ֖יו	_	_	_	_	_	_	_	_
3	מֵ	מן	ADP	prep	_	5	case	_	Gloss=from|Ref=GEN_35.13|Translit=me
4	עָלָ֖י	על	ADP	prep	_	5	case	_	Gloss=upon|Ref=GEN_35.13|Translit=ʻala
5	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	Ref=GEN_35.13|Translit=ṿ
6	אֱלֹהִ֑ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=god(s)|Ref=GEN_35.13|Translit=ʼelohim
7-9	בַּמָּקֹ֖ום	_	_	_	_	_	_	_	_
7	בַּ	ב	ADP	prep	_	9	case	_	Gloss=in|Ref=GEN_35.13|Translit=ba
8	_	ה	DET	art	PronType=Art	9	det	_	Gloss=the|Ref=GEN_35.13|Translit=
9	מָּקֹ֖ום	מקום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=place|Ref=GEN_35.13|Translit=maḳom
10	אֲשֶׁר	אשׁר	SCONJ	conj	_	12	mark	_	Gloss=<relative>|Ref=GEN_35.13|SpaceAfter=No|Translit=ʼasher
11	־	־	PUNCT	punct	_	10	punct	_	Ref=GEN_35.13|SpaceAfter=No
12	דִּבֶּ֥ר	דבר	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	9	acl:relcl	_	Gloss=speak|Ref=GEN_35.13|Translit=diber
13-14	אִתֹּֽו	_	_	_	_	_	_	_	_
13	אִתֹּֽ	את	ADP	prep	_	14	case	_	Gloss=together.with|Ref=GEN_35.13|Translit=ʼito
14	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl	_	Ref=GEN_35.13|Translit=ṿ
15	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_35.13

~~~

_ויעל מעליו אלהים במקום אשר־דבר אתו׃_

_ṿayaʻal meʻalaṿ ʼelohim bamaḳom ʼasher diber ʼito_

_And God went up from with him in the place where He had spoken to him._

We treat nominal clauses preceded by אשר as finite as well.

<!-- genesis 12 -->
~~~ conllu
# sent_id = Masoretic-Genesis-1:12-hbo
# text = וַתֹּוצֵ֨א הָאָ֜רֶץ דֶּ֠שֶׁא עֵ֣שֶׂב מַזְרִ֤יעַ זֶ֨רַע֙ לְמִינֵ֔הוּ וְעֵ֧ץ עֹ֥שֶׂה פְּרִ֛י אֲשֶׁ֥ר זַרְעֹו־בֹ֖ו לְמִינֵ֑הוּ וַיַּ֥רְא אֱלֹהִ֖ים כִּי־טֹֽוב׃
# translit = ṿatotseʼ haʼarets desheʼ ʻeśev mazriʻa zeraʻ leminehu ṿeʻets ʻośeh peri ʼasher zarʻo bo leminehu ṿayarʼ ʼelohim ki ṭov
# visual-style 15 21 acl:relcl color:blue
# visual-style 21 16 mark color:blue
1-2	וַתֹּוצֵ֨א	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_1.12|Translit=ṿa
2	תֹּוצֵ֨א	יצא	VERB	verb	Gender=Fem|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=go.out|Ref=GEN_1.12|Translit=totseʼ
3-4	הָאָ֜רֶץ	_	_	_	_	_	_	_	_
3	הָ	ה	DET	art	PronType=Art	4	det	_	Gloss=the|Ref=GEN_1.12|Translit=ha
4	אָ֜רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	2	nsubj	_	Gloss=earth|Ref=GEN_1.12|Translit=ʼarets
5	דֶּ֠שֶׁא	דשׁא	NOUN	subs	Gender=Masc|Number=Sing	2	obj	_	Gloss=young.grass|Ref=GEN_1.12|Translit=desheʼ
6	עֵ֣שֶׂב	עשׂב	NOUN	subs	Gender=Masc|Number=Sing	5	conj	_	Gloss=herb|Ref=GEN_1.12|Translit=ʻeśev
7	מַזְרִ֤יעַ	זרע	VERB	verb	Gender=Masc|HebBinyan=HIFIL|Number=Sing|VerbForm=Part	6	acl:relcl	_	Gloss=sow|Ref=GEN_1.12|Translit=mazriʻa
8	זֶ֨רַע֙	זרע	NOUN	subs	Gender=Masc|Number=Sing	7	obj	_	Gloss=seed|Ref=GEN_1.12|Translit=zeraʻ
9-11	לְמִינֵ֔הוּ	_	_	_	_	_	_	_	_
9	לְ	ל	ADP	prep	_	10	case	_	Gloss=to|Ref=GEN_1.12|Translit=le
10	מִינֵ֔	מין	NOUN	subs	Gender=Masc|Number=Sing	7	obl	_	Gloss=kind|Ref=GEN_1.12|Translit=mine
11	הוּ	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	Ref=GEN_1.12|Translit=hu
12-13	וְעֵ֧ץ	_	_	_	_	_	_	_	_
12	וְ	ו	CCONJ	conj	_	13	cc	_	Gloss=and|Ref=GEN_1.12|Translit=ṿe
13	עֵ֧ץ	עץ	NOUN	subs	Gender=Masc|Number=Sing	5	conj	_	Gloss=tree|Ref=GEN_1.12|Translit=ʻets
14	עֹ֥שֶׂה	עשׂה	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	13	acl:relcl	_	Gloss=make|Ref=GEN_1.12|Translit=ʻośeh
15	פְּרִ֛י	פרי	NOUN	subs	Gender=Masc|Number=Sing	14	obj	_	Gloss=fruit|Ref=GEN_1.12|Translit=peri
16	אֲשֶׁ֥ר	אשׁר	SCONJ	conj	_	21	mark	_	Gloss=<relative>|Ref=GEN_1.12|Translit=ʼasher
17-18	זַרְעֹו	_	_	_	_	_	_	_	_
17	זַרְעֹ	זרע	NOUN	subs	Gender=Masc|Number=Sing	21	nsubj	_	Gloss=seed|Ref=GEN_1.12|Translit=zarʻo
18	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	nmod:poss	_	Ref=GEN_1.12|Translit=ṿ
19	־	־	PUNCT	punct	_	17	punct	_	Ref=GEN_1.12|SpaceAfter=No
20-21	בֹ֖ו	_	_	_	_	_	_	_	_
20	בֹ֖	ב	ADP	prep	_	21	case	_	Gloss=in|Ref=GEN_1.12|Translit=bo
21	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	acl:relcl	_	Ref=GEN_1.12|Translit=ṿ
22-24	לְמִינֵ֑הוּ	_	_	_	_	_	_	_	_
22	לְ	ל	ADP	prep	_	23	case	_	Gloss=to|Ref=GEN_1.12|Translit=le
23	מִינֵ֑	מין	NOUN	subs	Gender=Masc|Number=Sing	14	obl	_	Gloss=kind|Ref=GEN_1.12|Translit=mine
24	הוּ	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	nmod:poss	_	Ref=GEN_1.12|Translit=hu
25-26	וַיַּ֥רְא	_	_	_	_	_	_	_	_
25	וַ	ו	CCONJ	conj	_	26	cc	_	Gloss=and|Ref=GEN_1.12|Translit=ṿa
26	יַּ֥רְא	ראה	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=see|Ref=GEN_1.12|Translit=yarʼ
27	אֱלֹהִ֖ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	26	nsubj	_	Gloss=god(s)|Ref=GEN_1.12|Translit=ʼelohim
28	כִּי	כי	SCONJ	conj	_	30	mark	_	Gloss=that|Ref=GEN_1.12|SpaceAfter=No|Translit=ki
29	־	־	PUNCT	punct	_	28	punct	_	Ref=GEN_1.12|SpaceAfter=No
30	טֹֽוב	טוב	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	26	ccomp	_	Gloss=be.good|Ref=GEN_1.12|SpaceAfter=No|Translit=ṭov
31	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_1.12

~~~

_ותוצא הארץ דשא עשב מזריע זרע למינהו ועץ עשה פרי אשר זרעו־בו למינהו וירא אלהים כי־טוב׃_

_ṿatotseʼ haʼarets desheʼ ʻeśev mazriʻa zeraʻ leminehu ṿeʻets ʻośeh peri ʼasher zarʻo bo leminehu ṿayarʼ ʼelohim ki ṭov_

_And the earth brought forth vegetation: herbs producing seed according to their kinds and trees making fruit which had its seed in it according to their kinds, and God saw that it was good._

When אשר immediately follows a preposition, the clause after it will be attached to the preposition with `acl:relcl` and the preposition will be promoted to the head of the noun phrase, usually taking the relation [obl]() or [obj]().

<!-- exodus 417 -->
~~~ conllu
# sent_id = Masoretic-Exodus-16:5-hbo
# text = וְהָיָה֙ בַּיֹּ֣ום הַשִּׁשִּׁ֔י וְהֵכִ֖ינוּ אֵ֣ת אֲשֶׁר־יָבִ֑יאוּ וְהָיָ֣ה מִשְׁנֶ֔ה עַ֥ל אֲשֶֽׁר־יִלְקְט֖וּ יֹ֥ום׀ יֹֽום׃ ס
# translit = ṿehayah bayom hashishi ṿehekhinu ʼet ʼasher yaviʼu ṿehayah mishneh ʻal ʼasher yilḳeṭu yom  yom  s
# visual-style 9 10 obj color:blue
# visual-style 10 13 acl:relcl color:blue
# visual-style 16 17 obl color:blue
# visual-style 17 20 acl:relcl color:blue
1-2	וְהָיָה֙	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=EX_16.5|Translit=ṿe
2	הָיָה֙	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=be|Ref=EX_16.5|Translit=hayah
3-5	בַּיֹּ֣ום	_	_	_	_	_	_	_	_
3	בַּ	ב	ADP	prep	_	5	case	_	Gloss=in|Ref=EX_16.5|Translit=ba
4	_	ה	DET	art	PronType=Art	5	det	_	Gloss=the|Ref=EX_16.5|Translit=
5	יֹּ֣ום	יום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=day|Ref=EX_16.5|Translit=yom
6-7	הַשִּׁשִּׁ֔י	_	_	_	_	_	_	_	_
6	הַ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=EX_16.5|Translit=ha
7	שִּׁשִּׁ֔י	שׁשׁי	NUM	adjv	Gender=Masc|Number=Sing|NumType=Ord	5	nummod	_	Gloss=sixth|Ref=EX_16.5|Translit=shishi
8-9	וְהֵכִ֖ינוּ	_	_	_	_	_	_	_	_
8	וְ	ו	CCONJ	conj	_	9	cc	_	Gloss=and|Ref=EX_16.5|Translit=ṿe
9	הֵכִ֖ינוּ	כון	VERB	verb	Aspect=Perf|HebBinyan=HIFIL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	2	conj	_	Gloss=be.firm|Ref=EX_16.5|Translit=hekhinu
10	אֵ֣ת	את	ADP	prep	_	9	obj	_	Gloss=<object.marker>|Ref=EX_16.5|Translit=ʼet
11	אֲשֶׁר	אשׁר	SCONJ	conj	_	13	mark	_	Gloss=<relative>|Ref=EX_16.5|SpaceAfter=No|Translit=ʼasher
12	־	־	PUNCT	punct	_	11	punct	_	Ref=EX_16.5|SpaceAfter=No
13	יָבִ֑יאוּ	בוא	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	10	acl:relcl	_	Gloss=come|Ref=EX_16.5|Translit=yaviʼu
14-15	וְהָיָ֣ה	_	_	_	_	_	_	_	_
14	וְ	ו	CCONJ	conj	_	16	cc	_	Gloss=and|Ref=EX_16.5|Translit=ṿe
15	הָיָ֣ה	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	16	cop	_	Gloss=be|Ref=EX_16.5|Translit=hayah
16	מִשְׁנֶ֔ה	משׁנה	NOUN	subs	Gender=Masc|Number=Sing	2	conj	_	Gloss=second|Ref=EX_16.5|Translit=mishneh
17	עַ֥ל	על	ADP	prep	_	16	obl	_	Gloss=upon|Ref=EX_16.5|Translit=ʻal
18	אֲשֶֽׁר	אשׁר	SCONJ	conj	_	20	mark	_	Gloss=<relative>|Ref=EX_16.5|SpaceAfter=No|Translit=ʼasher
19	־	־	PUNCT	punct	_	18	punct	_	Ref=EX_16.5|SpaceAfter=No
20	יִלְקְט֖וּ	לקט	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	17	acl:relcl	_	Gloss=gather|Ref=EX_16.5|Translit=yilḳeṭu
21	יֹ֥ום	יום	NOUN	subs	Gender=Masc|Number=Sing	20	obl	_	Gloss=day|Ref=EX_16.5|SpaceAfter=No|Translit=yom
22	׀	׀	PUNCT	punct	_	23	punct	_	Ref=EX_16.5
23	יֹֽום	יום	NOUN	subs	Gender=Masc|Number=Sing	21	conj	_	Gloss=day|Ref=EX_16.5|SpaceAfter=No|Translit=yom
24	׃	׃	PUNCT	punct	_	2	punct	_	Ref=EX_16.5
25	ס	ס	PUNCT	punct	_	2	punct	_	Ref=EX_16.5

~~~

_והיה ביום הששי והכינו את אשר־יביאו והיה משנה על אשר־ילקטו יום׀ יום׃ ס_

_ṿehayah bayom hashishi ṿehekhinu ʼet ʼasher yaviʼu ṿehayah mishneh ʻal ʼasher yilḳeṭu yom  yom  s_

_And it shall be on the sixth day, and they shall prepare that which they have gathered and it shall be twice what they gather day by day._

Participial clauses are also marked with `acl:relcl`.
These often take the form of a noun immediately followed by a participle which agrees in gender, number, and definiteness (like an [ADJ]() would), and then other arguments to the verb.

<!-- genesis 1194 -->
~~~ conllu
# sent_id = Masoretic-Genesis-41:33-hbo
# text = וְעַתָּה֙ יֵרֶ֣א פַרְעֹ֔ה אִ֖ישׁ נָבֹ֣ון וְחָכָ֑ם וִישִׁיתֵ֖הוּ עַל־אֶ֥רֶץ מִצְרָֽיִם׃
# translit = ṿeʻatah yereʼ parʻoh ʼish navon ṿeḥakham ṿishitehu ʻal ʼerets mitsrayim
# visual-style 5 6 acl:relcl color:blue
1-2	וְעַתָּה֙	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	3	cc	_	Gloss=and|Ref=GEN_41.33|Translit=ṿe
2	עַתָּה֙	עתה	ADV	advb	_	3	advmod	_	Gloss=now|Ref=GEN_41.33|Translit=ʻatah
3	יֵרֶ֣א	ראה	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=see|Ref=GEN_41.33|Translit=yereʼ
4	פַרְעֹ֔ה	פרעה	NOUN	subs	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=pharaoh|Ref=GEN_41.33|Translit=parʻoh
5	אִ֖ישׁ	אישׁ	NOUN	subs	Gender=Masc|Number=Sing	3	obj	_	Gloss=man|Ref=GEN_41.33|Translit=ʼish
6	נָבֹ֣ון	בין	VERB	verb	Gender=Masc|HebBinyan=NIFAL|Number=Sing|VerbForm=Part	5	acl:relcl	_	Gloss=understand|Ref=GEN_41.33|Translit=navon
7-8	וְחָכָ֑ם	_	_	_	_	_	_	_	_
7	וְ	ו	CCONJ	conj	_	8	cc	_	Gloss=and|Ref=GEN_41.33|Translit=ṿe
8	חָכָ֑ם	חכם	ADJ	adjv	Gender=Masc|Number=Sing	6	conj	_	Gloss=wise|Ref=GEN_41.33|Translit=ḥakham
9-11	וִישִׁיתֵ֖הוּ	_	_	_	_	_	_	_	_
9	וִ	ו	CCONJ	conj	_	10	cc	_	Gloss=and|Ref=GEN_41.33|Translit=ṿi
10	ישִׁיתֵ֖	שׁית	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	3	conj	_	Gloss=put|Ref=GEN_41.33|Translit=shite
11	הוּ	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obj	_	Ref=GEN_41.33|Translit=hu
12	עַל	על	ADP	prep	_	14	case	_	Gloss=upon|Ref=GEN_41.33|SpaceAfter=No|Translit=ʻal
13	־	־	PUNCT	punct	_	12	punct	_	Ref=GEN_41.33|SpaceAfter=No
14	אֶ֥רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	10	obl	_	Gloss=earth|Ref=GEN_41.33|Translit=ʼerets
15	מִצְרָֽיִם	מצרים	PROPN	nmpr	Number=Sing	14	compound:smixut	_	Gloss=Egypt|Ref=GEN_41.33|SpaceAfter=No|Translit=mitsrayim
16	׃	׃	PUNCT	punct	_	3	punct	_	Ref=GEN_41.33

~~~

_ועתה ירא פרעה איש נבון וחכם וישיתהו על־ארץ מצרים׃_

_ṿeʻatah yereʼ parʻoh ʼish navon ṿeḥakham ṿishitehu ʻal ʼerets mitsrayim_

_"And now, let Pharaoh look for a man who understands and is wise and let him place him over the land of Egypt."_

Sometimes the head noun has compound morphology.
In such cases, `acl:relcl` is still applied if the verb has any arguments.

<!-- genesis 93 -->
~~~ conllu
# sent_id = Masoretic-Genesis-4:14-hbo
# text = הֵן֩ גֵּרַ֨שְׁתָּ אֹתִ֜י הַיֹּ֗ום מֵעַל֙ פְּנֵ֣י הָֽאֲדָמָ֔ה וּמִפָּנֶ֖יךָ אֶסָּתֵ֑ר וְהָיִ֜יתִי נָ֤ע וָנָד֙ בָּאָ֔רֶץ וְהָיָ֥ה כָל־מֹצְאִ֖י יַֽהַרְגֵֽנִי׃
# translit = hen gerashta ʼoti hayom meʻal pene haʼadamah umipanekha ʼesater ṿehayiti naʻ ṿanad baʼarets ṿehayah kal motsʼi yahargeni
# visual-style 27 29 acl:relcl color:blue
# visual-style 29 30 obj color:blue
1	הֵן֩	הן	INTJ	intj	_	2	discourse	_	Gloss=behold|Ref=GEN_4.14|Translit=hen
2	גֵּרַ֨שְׁתָּ	גרשׁ	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	0	root	_	Gloss=drive.out|Ref=GEN_4.14|Translit=gerashta
3-4	אֹתִ֜י	_	_	_	_	_	_	_	_
3	אֹתִ֜	את	ADP	prep	_	4	case	_	Gloss=<object.marker>|Ref=GEN_4.14|Translit=ʼoti
4	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	2	obj	_	Ref=GEN_4.14|Translit=
5-6	הַיֹּ֗ום	_	_	_	_	_	_	_	_
5	הַ	ה	DET	art	PronType=Art	6	det	_	Gloss=the|Ref=GEN_4.14|Translit=ha
6	יֹּ֗ום	יום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=day|Ref=GEN_4.14|Translit=yom
7-8	מֵעַל֙	_	_	_	_	_	_	_	_
7	מֵ	מן	ADP	prep	_	9	case	_	Gloss=from|Ref=GEN_4.14|Translit=me
8	עַל֙	על	ADP	prep	_	9	case	_	Gloss=upon|Ref=GEN_4.14|Translit=ʻal
9	פְּנֵ֣י	פנה	NOUN	subs	Gender=Masc|Number=Plur	2	obl	_	Gloss=face|Ref=GEN_4.14|Translit=pene
10-11	הָֽאֲדָמָ֔ה	_	_	_	_	_	_	_	_
10	הָֽ	ה	DET	art	PronType=Art	11	det	_	Gloss=the|Ref=GEN_4.14|Translit=ha
11	אֲדָמָ֔ה	אדמה	NOUN	subs	Gender=Fem|Number=Sing	9	compound:smixut	_	Gloss=soil|Ref=GEN_4.14|Translit=ʼadamah
12-15	וּמִפָּנֶ֖יךָ	_	_	_	_	_	_	_	_
12	וּ	ו	CCONJ	conj	_	16	cc	_	Gloss=and|Ref=GEN_4.14|Translit=u
13	מִ	מן	ADP	prep	_	14	case	_	Gloss=from|Ref=GEN_4.14|Translit=mi
14	פָּנֶ֖י	פנה	NOUN	subs	Gender=Masc|Number=Plur	16	obl	_	Gloss=face|Ref=GEN_4.14|Translit=pane
15	ךָ	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	14	nmod:poss	_	Ref=GEN_4.14|Translit=ka
16	אֶסָּתֵ֑ר	סתר	VERB	verb	Aspect=Imp|HebBinyan=NIFAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	2	conj	_	Gloss=hide|Ref=GEN_4.14|Translit=ʼesater
17-18	וְהָיִ֜יתִי	_	_	_	_	_	_	_	_
17	וְ	ו	CCONJ	conj	_	19	cc	_	Gloss=and|Ref=GEN_4.14|Translit=ṿe
18	הָיִ֜יתִי	היה	AUX	verb	Aspect=Perf|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	19	cop	_	Gloss=be|Ref=GEN_4.14|Translit=hayiti
19	נָ֤ע	נוע	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	2	conj	_	Gloss=quiver|Ref=GEN_4.14|Translit=naʻ
20-21	וָנָד֙	_	_	_	_	_	_	_	_
20	וָ	ו	CCONJ	conj	_	21	cc	_	Gloss=and|Ref=GEN_4.14|Translit=ṿa
21	נָד֙	נוד	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	19	conj	_	Gloss=waver|Ref=GEN_4.14|Translit=nad
22-24	בָּאָ֔רֶץ	_	_	_	_	_	_	_	_
22	בָּ	ב	ADP	prep	_	24	case	_	Gloss=in|Ref=GEN_4.14|Translit=ba
23	_	ה	DET	art	PronType=Art	24	det	_	Gloss=the|Ref=GEN_4.14|Translit=
24	אָ֔רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	19	obl	_	Gloss=earth|Ref=GEN_4.14|Translit=ʼarets
25-26	וְהָיָ֥ה	_	_	_	_	_	_	_	_
25	וְ	ו	CCONJ	conj	_	26	cc	_	Gloss=and|Ref=GEN_4.14|Translit=ṿe
26	הָיָ֥ה	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	conj	_	Gloss=be|Ref=GEN_4.14|Translit=hayah
27	כָל	כל	NOUN	subs	Gender=Masc|Number=Sing	31	nsubj	_	Gloss=whole|Ref=GEN_4.14|SpaceAfter=No|Translit=kal
28	־	־	PUNCT	punct	_	29	punct	_	Ref=GEN_4.14|SpaceAfter=No
29-30	מֹצְאִ֖י	_	_	_	_	_	_	_	_
29	מֹצְאִ֖	מצא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	27	acl:relcl	_	Gloss=find|Ref=GEN_4.14|Translit=motsʼi
30	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	29	obj	_	Ref=GEN_4.14|Translit=
31-32	יַֽהַרְגֵֽנִי	_	_	_	_	_	_	_	_
31	יַֽהַרְגֵֽ	הרג	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	parataxis	_	Gloss=kill|Ref=GEN_4.14|Translit=yaharge
32	נִי	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	31	obj	_	Ref=GEN_4.14|Translit=ni
33	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_4.14

~~~

_הן גרשת אתי היום מעל פני האדמה ומפניך אסתר והייתי נע ונד בארץ והיה כל־מצאי יהרגני׃_

_hen gerashta ʼoti hayom meʻal pene haʼadamah umipanekha ʼesater ṿehayiti naʻ ṿanad baʼarets ṿehayah kal motsʼi yahargeni_

_"Behold, you have driven me out today from upon the face of the ground and I am hidden from your face; I shall be a wander and a fugitive on the earth, and whoever finds me will kill me."_

However, if the verb takes no arguments, or itself has compound morphology and thus has its arguments attached with [compound:smixut](), then it is considered nominalized, is tagged [NOUN](), and is attached with [compound:smixut]().

<!-- genesis 100 -->
~~~ conllu
# sent_id = Masoretic-Genesis-4:21-hbo
# text = וְשֵׁ֥ם אָחִ֖יו יוּבָ֑ל ה֣וּא הָיָ֔ה אֲבִ֕י כָּל־תֹּפֵ֥שׂ כִּנֹּ֖ור וְעוּגָֽב׃
# translit = ṿeshem ʼaḥiṿ uval huʼ hayah ʼavi kal tofeś kinor ṿeʻugav
# visual-style 9 11 compound:smixut color:blue
# visual-style 11 12 compound:smixut color:blue
1-2	וְשֵׁ֥ם	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	5	cc	_	Gloss=and|Ref=GEN_4.21|Translit=ṿe
2	שֵׁ֥ם	שׁם	NOUN	subs	Gender=Masc|Number=Sing	5	nsubj	_	Gloss=name|Ref=GEN_4.21|Translit=shem
3-4	אָחִ֖יו	_	_	_	_	_	_	_	_
3	אָחִ֖י	אח	NOUN	subs	Gender=Masc|Number=Sing	2	compound:smixut	_	Gloss=brother|Ref=GEN_4.21|Translit=ʼaḥi
4	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nmod:poss	_	Ref=GEN_4.21|Translit=ṿ
5	יוּבָ֑ל	יובל	PROPN	nmpr	Gender=Masc|Number=Sing	0	root	_	Gloss=Jubal|Ref=GEN_4.21|Translit=uval
6	ה֣וּא	הוא	PRON	prps	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	Gloss=he|Ref=GEN_4.21|Translit=huʼ
7	הָיָ֔ה	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	8	cop	_	Gloss=be|Ref=GEN_4.21|Translit=hayah
8	אֲבִ֕י	אב	NOUN	subs	Gender=Masc|Number=Sing	5	parataxis	_	Gloss=father|Ref=GEN_4.21|Translit=ʼavi
9	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	8	compound:smixut	_	Gloss=whole|Ref=GEN_4.21|SpaceAfter=No|Translit=kal
10	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_4.21|SpaceAfter=No
11	תֹּפֵ֥שׂ	תפשׂ	NOUN	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	9	compound:smixut	_	Gloss=seize|Ref=GEN_4.21|Translit=tofeś
12	כִּנֹּ֖ור	כנור	NOUN	subs	Gender=Masc|Number=Sing	11	compound:smixut	_	Gloss=cither|Ref=GEN_4.21|Translit=kinor
13-14	וְעוּגָֽב	_	_	_	_	_	_	_	_
13	וְ	ו	CCONJ	conj	_	14	cc	_	Gloss=and|Ref=GEN_4.21|Translit=ṿe
14	עוּגָֽב	עוגב	NOUN	subs	Gender=Masc|Number=Sing	12	conj	_	Gloss=flute|Ref=GEN_4.21|Translit=ʻugav
15	׃	׃	PUNCT	punct	_	5	punct	_	Ref=GEN_4.21

~~~

_ושם אחיו יובל הוא היה אבי כל־תפש כנור ועוגב׃_

_ṿeshem ʼaḥiṿ uval huʼ hayah ʼavi kal tofeś kinor ṿeʻugav_

_And the name of his brother was Jubal; he was the father all Zither and Flute players._
<!-- Interlanguage links updated So 10. května 2025, 18:14:45 CEST -->
