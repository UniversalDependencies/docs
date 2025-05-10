---
layout: relation
title: 'fixed'
shortdef: 'fixed expression'
udver: '2'
---

The following phrases are treated as fixed expressions in the Ancient Hebrew treebank.

## כי אם

<!-- genesis 927 -->
~~~ conllu
# sent_id = Masoretic-Genesis-32:27-hbo
# text = וַיֹּ֣אמֶר שַׁלְּחֵ֔נִי כִּ֥י עָלָ֖ה הַשָּׁ֑חַר וַיֹּ֨אמֶר֙ לֹ֣א אֲשַֽׁלֵּחֲךָ֔ כִּ֖י אִם־בֵּרַכְתָּֽנִי׃
# translit = ṿayoʼmer shalḥeni ki ʻalah hashaḥar ṿayoʼmer loʼ ʼashaleḥakha ki ʼim berakhtani
# visual-style 14 15 fixed color:blue
1-2	וַיֹּ֣אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_32.27|Translit=ṿa
2	יֹּ֣אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_32.27|Translit=yoʼmer
3-4	שַׁלְּחֵ֔נִי	_	_	_	_	_	_	_	_
3	שַׁלְּחֵ֔	שׁלח	VERB	verb	Gender=Masc|HebBinyan=PIEL|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	2	ccomp	_	Gloss=send|Ref=GEN_32.27|Translit=shalḥe
4	נִי	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	3	obj	_	Ref=GEN_32.27|Translit=ni
5	כִּ֥י	כי	SCONJ	conj	_	6	mark	_	Gloss=that|Ref=GEN_32.27|Translit=ki
6	עָלָ֖ה	עלה	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	3	advcl	_	Gloss=ascend|Ref=GEN_32.27|Translit=ʻalah
7-8	הַשָּׁ֑חַר	_	_	_	_	_	_	_	_
7	הַ	ה	DET	art	PronType=Art	8	det	_	Gloss=the|Ref=GEN_32.27|Translit=ha
8	שָּׁ֑חַר	שׁחר	NOUN	subs	Gender=Masc|Number=Sing	6	nsubj	_	Gloss=dawn|Ref=GEN_32.27|Translit=shaḥar
9-10	וַיֹּ֨אמֶר֙	_	_	_	_	_	_	_	_
9	וַ	ו	CCONJ	conj	_	10	cc	_	Gloss=and|Ref=GEN_32.27|Translit=ṿa
10	יֹּ֨אמֶר֙	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=say|Ref=GEN_32.27|Translit=yoʼmer
11	לֹ֣א	לא	ADV	nega	Polarity=Neg	12	advmod	_	Gloss=not|Ref=GEN_32.27|Translit=loʼ
12-13	אֲשַֽׁלֵּחֲךָ֔	_	_	_	_	_	_	_	_
12	אֲשַֽׁלֵּחֲ	שׁלח	VERB	verb	Aspect=Imp|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	10	ccomp	_	Gloss=send|Ref=GEN_32.27|Translit=ʼashaleḥa
13	ךָ֔	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	12	obj	_	Ref=GEN_32.27|Translit=ka
14	כִּ֖י	כי	SCONJ	conj	ExtPos=SCONJ	17	mark	_	Gloss=that|Ref=GEN_32.27|Translit=ki
15	אִם	אם	SCONJ	conj	_	14	fixed	_	Gloss=if|Ref=GEN_32.27|SpaceAfter=No|Translit=ʼim
16	־	־	PUNCT	punct	_	14	punct	_	Ref=GEN_32.27|SpaceAfter=No
17-18	בֵּרַכְתָּֽנִי	_	_	_	_	_	_	_	_
17	בֵּרַכְתָּֽ	ברך	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	12	advcl	_	Gloss=bless|Ref=GEN_32.27|Translit=berakhta
18	נִי	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	17	obj	_	Ref=GEN_32.27|Translit=ni
19	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_32.27

~~~

_ויאמר שלחני כי עלה השחר ויאמר לא אשלחך **כי אם**־ברכתני׃_

_ṿayoʼmer shalḥeni ki ʻalah hashaḥar ṿayoʼmer loʼ ʼashaleḥakha **ki ʼim** berakhtani_

_And he said "Send me away, for the dawn has arisen." and he said "I will not send you away **unless** you bless me."_

## לאמר

<!-- genesis 830 -->
~~~ conllu
# sent_id = Masoretic-Genesis-30:24-hbo
# text = וַתִּקְרָ֧א אֶת־שְׁמֹ֛ו יֹוסֵ֖ף לֵאמֹ֑ר יֹסֵ֧ף יְהוָ֛ה לִ֖י בֵּ֥ן אַחֵֽר׃
# translit = ṿatiḳraʼ ʼet shemo yosef leʼmor yosef yehṿah li ben ʼaḥer
# visual-style 8 9 fixed color:blue
1-2	וַתִּקְרָ֧א	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_30.24|Translit=ṿa
2	תִּקְרָ֧א	קרא	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=call|Ref=GEN_30.24|Translit=tiḳraʼ
3	אֶת	את	ADP	prep	_	5	case	_	Gloss=<object.marker>|Ref=GEN_30.24|SpaceAfter=No|Translit=ʼet
4	־	־	PUNCT	punct	_	3	punct	_	Ref=GEN_30.24|SpaceAfter=No
5-6	שְׁמֹ֛ו	_	_	_	_	_	_	_	_
5	שְׁמֹ֛	שׁם	NOUN	subs	Gender=Masc|Number=Sing	2	obj	_	Gloss=name|Ref=GEN_30.24|Translit=shemo
6	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	Ref=GEN_30.24|Translit=ṿ
7	יֹוסֵ֖ף	יוסף	PROPN	nmpr	Gender=Masc|Number=Sing	2	xcomp	_	Gloss=Joseph|Ref=GEN_30.24|Translit=yosef
8-9	לֵאמֹ֑ר	_	_	_	_	_	_	_	_
8	לֵ	ל	ADP	prep	ExtPos=SCONJ	10	mark	_	Gloss=to|Ref=GEN_30.24|Translit=le
9	אמֹ֑ר	אמר	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	8	fixed	_	Gloss=say|Ref=GEN_30.24|Translit=ʼmor
10	יֹסֵ֧ף	יסף	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	advcl	_	Gloss=add|Ref=GEN_30.24|Translit=yosef
11	יְהוָ֛ה	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	10	nsubj	_	Gloss=YHWH|Ref=GEN_30.24|Translit=yehṿah
12-13	לִ֖י	_	_	_	_	_	_	_	_
12	לִ֖	ל	ADP	prep	_	13	case	_	Gloss=to|Ref=GEN_30.24|Translit=li
13	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	10	obl	_	Ref=GEN_30.24|Translit=
14	בֵּ֥ן	בן	NOUN	subs	Gender=Masc|Number=Sing	10	obj	_	Gloss=son|Ref=GEN_30.24|Translit=ben
15	אַחֵֽר	אחר	ADJ	adjv	Gender=Masc|Number=Sing	14	amod	_	Gloss=other|Ref=GEN_30.24|SpaceAfter=No|Translit=ʼaḥer
16	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_30.24

~~~

_ותקרא את־שמו יוסף **לאמר** יסף יהוה לי בן אחר׃_

_ṿatiḳraʼ ʼet shemo yosef **leʼmor** yosef yehṿah li ben ʼaḥer_

_And she called his name "Joseph", **saying** "May The LORD add to me another son."._

This phrase is not fixed when it serves as an argument to a verb rather than solely as a marker for direct quotation.

<!-- genesis 676 -->
~~~ conllu
# sent_id = Masoretic-Genesis-26:7-hbo
# text = וַֽיִּשְׁאֲל֞וּ אַנְשֵׁ֤י הַמָּקֹום֙ לְאִשְׁתֹּ֔ו וַיֹּ֖אמֶר אֲחֹ֣תִי הִ֑וא כִּ֤י יָרֵא֙ לֵאמֹ֣ר אִשְׁתִּ֔י פֶּן־יַֽהַרְגֻ֜נִי אַנְשֵׁ֤י הַמָּקֹום֙ עַל־רִבְקָ֔ה כִּֽי־טֹובַ֥ת מַרְאֶ֖ה הִֽיא׃
# translit = ṿayishʼalu ʼanshe hamaḳom leʼishto ṿayoʼmer ʼaḥoti hiṿʼ ki yareʼ leʼmor ʼishti pen yaharguni ʼanshe hamaḳom ʻal rivḳah ki ṭovat marʼeh hiʼ
# visual-style 15 17 xcomp color:blue
# visual-style 17 16 case color:blue
1-2	וַֽיִּשְׁאֲל֞וּ	_	_	_	_	_	_	_	_
1	וַֽ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_26.7|Translit=ṿa
2	יִּשְׁאֲל֞וּ	שׁאל	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=ask|Ref=GEN_26.7|Translit=yishʼalu
3	אַנְשֵׁ֤י	אישׁ	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=man|Ref=GEN_26.7|Translit=ʼanshe
4-5	הַמָּקֹום֙	_	_	_	_	_	_	_	_
4	הַ	ה	DET	art	PronType=Art	5	det	_	Gloss=the|Ref=GEN_26.7|Translit=ha
5	מָּקֹום֙	מקום	NOUN	subs	Gender=Masc|Number=Sing	3	compound:smixut	_	Gloss=place|Ref=GEN_26.7|Translit=maḳom
6-8	לְאִשְׁתֹּ֔ו	_	_	_	_	_	_	_	_
6	לְ	ל	ADP	prep	_	7	case	_	Gloss=to|Ref=GEN_26.7|Translit=le
7	אִשְׁתֹּ֔	אשׁה	NOUN	subs	Gender=Fem|Number=Sing	2	obl	_	Gloss=woman|Ref=GEN_26.7|Translit=ʼishto
8	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	Ref=GEN_26.7|Translit=ṿ
9-10	וַיֹּ֖אמֶר	_	_	_	_	_	_	_	_
9	וַ	ו	CCONJ	conj	_	10	cc	_	Gloss=and|Ref=GEN_26.7|Translit=ṿa
10	יֹּ֖אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=say|Ref=GEN_26.7|Translit=yoʼmer
11-12	אֲחֹ֣תִי	_	_	_	_	_	_	_	_
11	אֲחֹ֣תִ	אחות	NOUN	subs	Gender=Fem|Number=Sing	10	ccomp	_	Gloss=sister|Ref=GEN_26.7|Translit=ʼaḥoti
12	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	11	nmod:poss	_	Ref=GEN_26.7|Translit=
13	הִ֑וא	היא	PRON	prps	Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	Gloss=she|Ref=GEN_26.7|Translit=hiṿʼ
14	כִּ֤י	כי	SCONJ	conj	_	15	mark	_	Gloss=that|Ref=GEN_26.7|Translit=ki
15	יָרֵא֙	ירא	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	10	advcl	_	Gloss=fear|Ref=GEN_26.7|Translit=yareʼ
16-17	לֵאמֹ֣ר	_	_	_	_	_	_	_	_
16	לֵ	ל	ADP	prep	_	17	case	_	Gloss=to|Ref=GEN_26.7|Translit=le
17	אמֹ֣ר	אמר	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	15	xcomp	_	Gloss=say|Ref=GEN_26.7|Translit=ʼmor
18-19	אִשְׁתִּ֔י	_	_	_	_	_	_	_	_
18	אִשְׁתִּ֔	אשׁה	NOUN	subs	Gender=Fem|Number=Sing	17	ccomp	_	Gloss=woman|Ref=GEN_26.7|Translit=ʼishti
19	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	18	nmod:poss	_	Ref=GEN_26.7|Translit=
20	פֶּן	פן	SCONJ	conj	_	22	mark	_	Gloss=lest|Ref=GEN_26.7|SpaceAfter=No|Translit=pen
21	־	־	PUNCT	punct	_	20	punct	_	Ref=GEN_26.7|SpaceAfter=No
22-23	יַֽהַרְגֻ֜נִי	_	_	_	_	_	_	_	_
22	יַֽהַרְגֻ֜	הרג	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	15	advcl	_	Gloss=kill|Ref=GEN_26.7|Translit=yahargu
23	נִי	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	22	obj	_	Ref=GEN_26.7|Translit=ni
24	אַנְשֵׁ֤י	אישׁ	NOUN	subs	Gender=Masc|Number=Plur	22	nsubj	_	Gloss=man|Ref=GEN_26.7|Translit=ʼanshe
25-26	הַמָּקֹום֙	_	_	_	_	_	_	_	_
25	הַ	ה	DET	art	PronType=Art	26	det	_	Gloss=the|Ref=GEN_26.7|Translit=ha
26	מָּקֹום֙	מקום	NOUN	subs	Gender=Masc|Number=Sing	24	compound:smixut	_	Gloss=place|Ref=GEN_26.7|Translit=maḳom
27	עַל	על	ADP	prep	_	29	case	_	Gloss=upon|Ref=GEN_26.7|SpaceAfter=No|Translit=ʻal
28	־	־	PUNCT	punct	_	27	punct	_	Ref=GEN_26.7|SpaceAfter=No
29	רִבְקָ֔ה	רבקה	PROPN	nmpr	Gender=Fem|Number=Sing	22	obl	_	Gloss=Rebekah|Ref=GEN_26.7|Translit=rivḳah
30	כִּֽי	כי	SCONJ	conj	_	32	mark	_	Gloss=that|Ref=GEN_26.7|SpaceAfter=No|Translit=ki
31	־	־	PUNCT	punct	_	30	punct	_	Ref=GEN_26.7|SpaceAfter=No
32	טֹובַ֥ת	טוב	NOUN	adjv	Gender=Fem|Number=Sing	15	advcl	_	Gloss=good|Ref=GEN_26.7|Translit=ṭovat
33	מַרְאֶ֖ה	מראה	NOUN	subs	Gender=Masc|Number=Sing	32	compound:smixut	_	Gloss=sight|Ref=GEN_26.7|Translit=marʼeh
34	הִֽיא	היא	PRON	prps	Gender=Fem|Number=Sing|Person=3|PronType=Prs	32	nsubj	_	Gloss=she|Ref=GEN_26.7|SpaceAfter=No|Translit=hiʼ
35	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_26.7

~~~

_וישאלו אנשי המקום לאשתו ויאמר אחתי הוא כי **ירא לאמר** אשתי פן־יהרגני אנשי המקום על־רבקה כי־טובת מראה היא׃_

_ṿayishʼalu ʼanshe hamaḳom leʼishto ṿayoʼmer ʼaḥoti hiṿʼ ki **yareʼ leʼmor** ʼishti pen yaharguni ʼanshe hamaḳom ʻal rivḳah ki ṭovat marʼeh hiʼ_

_And the men of the place asked about his wife, and he said "She is my sister." because he **was afraid to say** "my wife" lest the men of the place kill him because of Rebecca, for she was fair of appearance._

## לבלתי

<!-- genesis 460 -->
~~~ conllu
# sent_id = Masoretic-Genesis-19:21-hbo
# text = וַיֹּ֣אמֶר אֵלָ֔יו הִנֵּה֙ נָשָׂ֣אתִי פָנֶ֔יךָ גַּ֖ם לַדָּבָ֣ר הַזֶּ֑ה לְבִלְתִּ֛י הָפְכִּ֥י אֶת־הָעִ֖יר אֲשֶׁ֥ר דִּבַּֽרְתָּ׃
# translit = ṿayoʼmer ʼelaṿ hineh naśaʼti panekha gam ladavar hazeh levilti hafki ʼet haʻir ʼasher dibarta
# visual-style 15 16 fixed color:blue
1-2	וַיֹּ֣אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_19.21|Translit=ṿa
2	יֹּ֣אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_19.21|Translit=yoʼmer
3-4	אֵלָ֔יו	_	_	_	_	_	_	_	_
3	אֵלָ֔י	אל	ADP	prep	_	4	case	_	Gloss=to|Ref=GEN_19.21|Translit=ʼela
4	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	Ref=GEN_19.21|Translit=ṿ
5	הִנֵּה֙	הנה	INTJ	intj	_	6	discourse	_	Gloss=behold|Ref=GEN_19.21|Translit=hineh
6	נָשָׂ֣אתִי	נשׂא	VERB	verb	Aspect=Perf|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	2	ccomp	_	Gloss=lift|Ref=GEN_19.21|Translit=naśaʼti
7-8	פָנֶ֔יךָ	_	_	_	_	_	_	_	_
7	פָנֶ֔י	פנה	NOUN	subs	Gender=Masc|Number=Plur	6	obj	_	Gloss=face|Ref=GEN_19.21|Translit=pane
8	ךָ	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	Ref=GEN_19.21|Translit=ka
9	גַּ֖ם	גם	ADV	advb	_	12	advmod	_	Gloss=even|Ref=GEN_19.21|Translit=gam
10-12	לַדָּבָ֣ר	_	_	_	_	_	_	_	_
10	לַ	ל	ADP	prep	_	12	case	_	Gloss=to|Ref=GEN_19.21|Translit=la
11	_	ה	DET	art	PronType=Art	12	det	_	Gloss=the|Ref=GEN_19.21|Translit=
12	דָּבָ֣ר	דבר	NOUN	subs	Gender=Masc|Number=Sing	6	obl	_	Gloss=word|Ref=GEN_19.21|Translit=davar
13-14	הַזֶּ֑ה	_	_	_	_	_	_	_	_
13	הַ	ה	DET	art	PronType=Art	14	det	_	Gloss=the|Ref=GEN_19.21|Translit=ha
14	זֶּ֑ה	זה	PRON	prde	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	Gloss=this|Ref=GEN_19.21|Translit=zeh
15-16	לְבִלְתִּ֛י	_	_	_	_	_	_	_	_
15	לְ	ל	ADP	prep	ExtPos=SCONJ	17	mark	_	Gloss=to|Ref=GEN_19.21|Translit=le
16	בִלְתִּ֛י	בלת	NOUN	subs	Number=Sing	15	fixed	_	Gloss=failure|Ref=GEN_19.21|Translit=bilti
17-18	הָפְכִּ֥י	_	_	_	_	_	_	_	_
17	הָפְכִּ֥	הפך	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	6	advcl	_	Gloss=turn|Ref=GEN_19.21|Translit=hafki
18	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	17	nsubj	_	Ref=GEN_19.21|Translit=
19	אֶת	את	ADP	prep	_	22	case	_	Gloss=<object.marker>|Ref=GEN_19.21|SpaceAfter=No|Translit=ʼet
20	־	־	PUNCT	punct	_	19	punct	_	Ref=GEN_19.21|SpaceAfter=No
21-22	הָעִ֖יר	_	_	_	_	_	_	_	_
21	הָ	ה	DET	art	PronType=Art	22	det	_	Gloss=the|Ref=GEN_19.21|Translit=ha
22	עִ֖יר	עיר	NOUN	subs	Gender=Fem|Number=Sing	17	obj	_	Gloss=town|Ref=GEN_19.21|Translit=ʻir
23	אֲשֶׁ֥ר	אשׁר	SCONJ	conj	_	24	mark	_	Gloss=<relative>|Ref=GEN_19.21|Translit=ʼasher
24	דִּבַּֽרְתָּ	דבר	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	22	acl:relcl	_	Gloss=speak|Ref=GEN_19.21|SpaceAfter=No|Translit=dibarta
25	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_19.21

~~~

_ויאמר אליו הנה נשאתי פניך גם לדבר הזה **לבלתי** הפכי את־העיר אשר דברת׃_

_ṿayoʼmer ʼelaṿ hineh naśaʼti panekha gam ladavar hazeh **levilti** hafki ʼet haʻir ʼasher dibarta_

_And he said to him "See, I have lifted up your face for this thing also, **to not** overturn the city that you spoke of."._

## מה זה

When operating as an adverbial of manner, מה זה is tagged as a fixed expression with upos [ADV]().
In many cases, though, this sequence is an interrogative pronoun followed by a demonstrative pronoun and should be treated as such (often with one being [nsubj]() of the other).

<!-- genesis 724 -->
~~~ conllu
# sent_id = Masoretic-Genesis-27:20-hbo
# text = וַיֹּ֤אמֶר יִצְחָק֙ אֶל־בְּנֹ֔ו מַה־זֶּ֛ה מִהַ֥רְתָּ לִמְצֹ֖א בְּנִ֑י וַיֹּ֕אמֶר כִּ֥י הִקְרָ֛ה יְהוָ֥ה אֱלֹהֶ֖יךָ לְפָנָֽי׃
# translit = ṿayoʼmer yitsḥaḳ ʼel beno mah zeh miharta limtsoʼ beni ṿayoʼmer ki hiḳrah yehṿah ʼelohekha lefana
# visual-style 8 10 fixed color:blue
1-2	וַיֹּ֤אמֶר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_27.20|Translit=ṿa
2	יֹּ֤אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_27.20|Translit=yoʼmer
3	יִצְחָק֙	יצחק	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Isaac|Ref=GEN_27.20|Translit=yitsḥaḳ
4	אֶל	אל	ADP	prep	_	6	case	_	Gloss=to|Ref=GEN_27.20|SpaceAfter=No|Translit=ʼel
5	־	־	PUNCT	punct	_	4	punct	_	Ref=GEN_27.20|SpaceAfter=No
6-7	בְּנֹ֔ו	_	_	_	_	_	_	_	_
6	בְּנֹ֔	בן	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Gloss=son|Ref=GEN_27.20|Translit=beno
7	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	Ref=GEN_27.20|Translit=ṿ
8	מַה	מה	PRON	prin	ExtPos=ADV|PronType=Int	11	advmod	_	Gloss=what|Ref=GEN_27.20|SpaceAfter=No|Translit=mah
9	־	־	PUNCT	punct	_	10	punct	_	Ref=GEN_27.20|SpaceAfter=No
10	זֶּ֛ה	זה	PRON	prde	Gender=Masc|Number=Sing|PronType=Dem	8	fixed	_	Gloss=this|Ref=GEN_27.20|Translit=zeh
11	מִהַ֥רְתָּ	מהר	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	2	ccomp	_	Gloss=hasten|Ref=GEN_27.20|Translit=miharta
12-13	לִמְצֹ֖א	_	_	_	_	_	_	_	_
12	לִ	ל	ADP	prep	_	13	case	_	Gloss=to|Ref=GEN_27.20|Translit=li
13	מְצֹ֖א	מצא	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	11	xcomp	_	Gloss=find|Ref=GEN_27.20|Translit=metsoʼ
14-15	בְּנִ֑י	_	_	_	_	_	_	_	_
14	בְּנִ֑	בן	NOUN	subs	Gender=Masc|Number=Sing	11	vocative	_	Gloss=son|Ref=GEN_27.20|Translit=beni
15	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	14	nmod:poss	_	Ref=GEN_27.20|Translit=
16-17	וַיֹּ֕אמֶר	_	_	_	_	_	_	_	_
16	וַ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=GEN_27.20|Translit=ṿa
17	יֹּ֕אמֶר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=say|Ref=GEN_27.20|Translit=yoʼmer
18	כִּ֥י	כי	SCONJ	conj	_	19	mark	_	Gloss=that|Ref=GEN_27.20|Translit=ki
19	הִקְרָ֛ה	קרה	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	17	ccomp	_	Gloss=meet|Ref=GEN_27.20|Translit=hiḳrah
20	יְהוָ֥ה	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	19	nsubj	_	Gloss=YHWH|Ref=GEN_27.20|Translit=yehṿah
21-22	אֱלֹהֶ֖יךָ	_	_	_	_	_	_	_	_
21	אֱלֹהֶ֖י	אלהים	NOUN	subs	Gender=Masc|Number=Plur	20	appos	_	Gloss=god(s)|Ref=GEN_27.20|Translit=ʼelohe
22	ךָ	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	21	nmod:poss	_	Ref=GEN_27.20|Translit=ka
23-25	לְפָנָֽי	_	_	_	_	_	_	_	_
23	לְ	ל	ADP	prep	_	24	case	_	Gloss=to|Ref=GEN_27.20|Translit=le
24	פָנָֽ	פנה	NOUN	subs	Gender=Masc|Number=Plur	19	obl	_	Gloss=face|Ref=GEN_27.20|Translit=pana
25	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	24	nmod:poss	_	Ref=GEN_27.20|Translit=
26	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_27.20

~~~

_ויאמר יצחק אל־בנו **מה־זה** מהרת למצא בני ויאמר כי הקרה יהוה אלהיך לפני׃_

_ṿayoʼmer yitsḥaḳ ʼel beno **mah zeh** miharta limtsoʼ beni ṿayoʼmer ki hiḳrah yehṿah ʼelohekha lefana_

_And Isaac said to his son "**How** did you find it so quickly, my son?" and he said "Because The LORD your god brought it before me."._

## עד אם

<!-- genesis 588 -->
~~~ conllu
# sent_id = Masoretic-Genesis-24:19-hbo
# text = וַתְּכַ֖ל לְהַשְׁקֹתֹ֑ו וַתֹּ֗אמֶר גַּ֤ם לִגְמַלֶּ֨יךָ֙ אֶשְׁאָ֔ב עַ֥ד אִם־כִּלּ֖וּ לִשְׁתֹּֽת׃
# translit = ṿatkal lehashḳoto ṿatoʼmer gam ligmalekha ʼeshʼav ʻad ʼim kilu lishtot
# visual-style 13 14 fixed color:blue
1-2	וַתְּכַ֖ל	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_24.19|Translit=ṿa
2	תְּכַ֖ל	כלה	VERB	verb	Gender=Fem|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=be.complete|Ref=GEN_24.19|Translit=tekhal
3-5	לְהַשְׁקֹתֹ֑ו	_	_	_	_	_	_	_	_
3	לְ	ל	ADP	prep	_	4	case	_	Gloss=to|Ref=GEN_24.19|Translit=le
4	הַשְׁקֹתֹ֑	שׁקה	VERB	verb	HebBinyan=HIFIL|VerbForm=Inf	2	xcomp	_	Gloss=give.drink|Ref=GEN_24.19|Translit=hashḳoto
5	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	Ref=GEN_24.19|Translit=ṿ
6-7	וַתֹּ֗אמֶר	_	_	_	_	_	_	_	_
6	וַ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=GEN_24.19|Translit=ṿa
7	תֹּ֗אמֶר	אמר	VERB	verb	Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=say|Ref=GEN_24.19|Translit=toʼmer
8	גַּ֤ם	גם	ADV	advb	_	10	advmod	_	Gloss=even|Ref=GEN_24.19|Translit=gam
9-11	לִגְמַלֶּ֨יךָ֙	_	_	_	_	_	_	_	_
9	לִ	ל	ADP	prep	_	10	case	_	Gloss=to|Ref=GEN_24.19|Translit=li
10	גְמַלֶּ֨י	גמל	NOUN	subs	Gender=Masc|Number=Plur	12	obl	_	Gloss=camel|Ref=GEN_24.19|Translit=gemale
11	ךָ֙	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	10	nmod:poss	_	Ref=GEN_24.19|Translit=ka
12	אֶשְׁאָ֔ב	שׁאב	VERB	verb	Aspect=Imp|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	7	ccomp	_	Gloss=draw.water|Ref=GEN_24.19|Translit=ʼeshʼav
13	עַ֥ד	עד	ADP	prep	ExtPos=SCONJ	16	mark	_	Gloss=unto|Ref=GEN_24.19|Translit=ʻad
14	אִם	אם	SCONJ	conj	_	13	fixed	_	Gloss=if|Ref=GEN_24.19|SpaceAfter=No|Translit=ʼim
15	־	־	PUNCT	punct	_	13	punct	_	Ref=GEN_24.19|SpaceAfter=No
16	כִּלּ֖וּ	כלה	VERB	verb	Aspect=Perf|HebBinyan=PIEL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	12	advcl	_	Gloss=be.complete|Ref=GEN_24.19|Translit=kilu
17-18	לִשְׁתֹּֽת	_	_	_	_	_	_	_	_
17	לִ	ל	ADP	prep	_	18	case	_	Gloss=to|Ref=GEN_24.19|Translit=li
18	שְׁתֹּֽת	שׁתה	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	16	xcomp	_	Gloss=drink|Ref=GEN_24.19|Translit=shetot
19	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_24.19

~~~

_ותכל להשקתו ותאמר גם לגמליך אשאב **עד אם**־כלו לשתת׃_

_ṿatkal lehashḳoto ṿatoʼmer gam ligmalekha ʼeshʼav **ʻad ʼim** kilu lishtot_

_And she finished giving him a drink and she said "For your camels also, I will draw water **until** they have been fully watered."._

## עד כי

<!-- genesis 682 -->
~~~ conllu
# sent_id = Masoretic-Genesis-26:13-hbo
# text = וַיִּגְדַּ֖ל הָאִ֑ישׁ וַיֵּ֤לֶךְ הָלֹוךְ֙ וְגָדֵ֔ל עַ֥ד כִּֽי־גָדַ֖ל מְאֹֽד׃
# translit = ṿayigdal haʼish ṿayelekh halokh ṿegadel ʻad ki gadal meʼod
# visual-style 10 11 fixed color:blue
1-2	וַיִּגְדַּ֖ל	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_26.13|Translit=ṿa
2	יִּגְדַּ֖ל	גדל	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=be.strong|Ref=GEN_26.13|Translit=yigdal
3-4	הָאִ֑ישׁ	_	_	_	_	_	_	_	_
3	הָ	ה	DET	art	PronType=Art	4	det	_	Gloss=the|Ref=GEN_26.13|Translit=ha
4	אִ֑ישׁ	אישׁ	NOUN	subs	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=man|Ref=GEN_26.13|Translit=ʼish
5-6	וַיֵּ֤לֶךְ	_	_	_	_	_	_	_	_
5	וַ	ו	CCONJ	conj	_	6	cc	_	Gloss=and|Ref=GEN_26.13|Translit=ṿa
6	יֵּ֤לֶךְ	הלך	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=walk|Ref=GEN_26.13|Translit=yelekh
7	הָלֹוךְ֙	הלך	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	6	advcl	_	Gloss=walk|Ref=GEN_26.13|Translit=halokh
8-9	וְגָדֵ֔ל	_	_	_	_	_	_	_	_
8	וְ	ו	CCONJ	conj	_	9	cc	_	Gloss=and|Ref=GEN_26.13|Translit=ṿe
9	גָדֵ֔ל	גדל	ADJ	adjv	Gender=Masc|Number=Sing	7	conj	_	Gloss=growing|Ref=GEN_26.13|Translit=gadel
10	עַ֥ד	עד	ADP	prep	ExtPos=SCONJ	13	mark	_	Gloss=unto|Ref=GEN_26.13|Translit=ʻad
11	כִּֽי	כי	SCONJ	conj	_	10	fixed	_	Gloss=that|Ref=GEN_26.13|SpaceAfter=No|Translit=ki
12	־	־	PUNCT	punct	_	10	punct	_	Ref=GEN_26.13|SpaceAfter=No
13	גָדַ֖ל	גדל	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	6	advcl	_	Gloss=be.strong|Ref=GEN_26.13|Translit=gadal
14	מְאֹֽד	מאד	ADV	subs	_	13	advmod	_	Gloss=might|Ref=GEN_26.13|SpaceAfter=No|Translit=meʼod
15	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_26.13

~~~

_ויגדל האיש וילך הלוך וגדל **עד כי**־גדל מאד׃_

_ṿayigdal haʼish ṿayelekh halokh ṿegadel **ʻad** ki gadal meʼod_

_And the man went, going and growing strong, **until** he was very strong._
<!-- Interlanguage links updated So 10. května 2025, 18:15:32 CEST -->
