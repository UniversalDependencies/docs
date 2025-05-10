---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The prototypical use of `obl` is to attach a prepositional phrase to a clause.

Such prepositional phrases can express temporal information.

<!-- genesis 1 -->
~~~ conllu
# sent_id = Masoretic-Genesis-1:1-hbo
# text = בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃
# translit = bereʼshit baraʼ ʼelohim ʼet hashamayim ṿeʼet haʼarets
# visual-style 3 2 obl color:blue
1-2	בְּרֵאשִׁ֖ית	_	_	_	_	_	_	_	_
1	בְּ	ב	ADP	prep	_	2	case	_	Gloss=in|Ref=GEN_1.1|Ref[BHSA]=1|Translit=be
2	רֵאשִׁ֖ית	ראשׁית	NOUN	subs	Gender=Fem|Number=Sing	3	obl	_	Gloss=beginning|Ref=GEN_1.1|Ref[BHSA]=2|Translit=reʼshit
3	בָּרָ֣א	ברא	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=create|Ref=GEN_1.1|Ref[BHSA]=3|Translit=baraʼ
4	אֱלֹהִ֑ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	3	nsubj	_	Gloss=god(s)|Ref=GEN_1.1|Ref[BHSA]=4|Translit=ʼelohim
5	אֵ֥ת	את	ADP	prep	_	7	case	_	Gloss=<object.marker>|Ref=GEN_1.1|Ref[BHSA]=5|Translit=ʼet
6-7	הַשָּׁמַ֖יִם	_	_	_	_	_	_	_	_
6	הַ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=GEN_1.1|Ref[BHSA]=6|Translit=ha
7	שָּׁמַ֖יִם	שׁמים	NOUN	subs	Gender=Masc|Number=Plur	3	obj	_	Gloss=heavens|Ref=GEN_1.1|Ref[BHSA]=7|Translit=shamayim
8-9	וְאֵ֥ת	_	_	_	_	_	_	_	_
8	וְ	ו	CCONJ	conj	_	11	cc	_	Gloss=and|Ref=GEN_1.1|Ref[BHSA]=8|Translit=ṿe
9	אֵ֥ת	את	ADP	prep	_	11	case	_	Gloss=<object.marker>|Ref=GEN_1.1|Ref[BHSA]=9|Translit=ʼet
10-11	הָאָֽרֶץ	_	_	_	_	_	_	_	_
10	הָ	ה	DET	art	PronType=Art	11	det	_	Gloss=the|Ref=GEN_1.1|Ref[BHSA]=10|Translit=ha
11	אָֽרֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	7	conj	_	Gloss=earth|Ref=GEN_1.1|Ref[BHSA]=11|Translit=ʼarets
12	׃	׃	PUNCT	punct	_	3	punct	_	Ref=GEN_1.1

~~~

_בראשית ברא אלהים את השמים ואת הארץ׃_

_bereʼshit baraʼ ʼelohim ʼet hashamayim ṿeʼet haʼarets_

_In the beginning, God had created the skies and the land._

They can also express location.

<!-- genesis 2 -->
~~~ conllu
# sent_id = Masoretic-Genesis-1:2-hbo
# text = וְהָאָ֗רֶץ הָיְתָ֥ה תֹ֨הוּ֙ וָבֹ֔הוּ וְחֹ֖שֶׁךְ עַל־פְּנֵ֣י תְהֹ֑ום וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל־פְּנֵ֥י הַמָּֽיִם׃
# translit = ṿehaʼarets haytah tohu ṿavohu ṿeḥoshekh ʻal pene tehom ṿeruḥa ʼelohim meraḥefet ʻal pene hamayim
# visual-style 17 20 obl color:blue
1-3	וְהָאָ֗רֶץ	_	_	_	_	_	_	_	_
1	וְ	ו	CCONJ	conj	_	5	cc	_	Gloss=and|Ref=GEN_1.2|Ref[BHSA]=12|Translit=ṿe
2	הָ	ה	DET	art	PronType=Art	3	det	_	Gloss=the|Ref=GEN_1.2|Ref[BHSA]=13|Translit=ha
3	אָ֗רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	5	nsubj	_	Gloss=earth|Ref=GEN_1.2|Ref[BHSA]=14|Translit=ʼarets
4	הָיְתָ֥ה	היה	AUX	verb	Aspect=Perf|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	5	cop	_	Gloss=be|Ref=GEN_1.2|Ref[BHSA]=15|Translit=haytah
5	תֹ֨הוּ֙	תהו	NOUN	subs	Gender=Masc|Number=Sing	0	root	_	Gloss=emptiness|Ref=GEN_1.2|Ref[BHSA]=16|Translit=tohu
6-7	וָבֹ֔הוּ	_	_	_	_	_	_	_	_
6	וָ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=GEN_1.2|Ref[BHSA]=17|Translit=ṿa
7	בֹ֔הוּ	בהו	NOUN	subs	Gender=Masc|Number=Sing	5	conj	_	Gloss=emptiness|Ref=GEN_1.2|Ref[BHSA]=18|Translit=bohu
8-9	וְחֹ֖שֶׁךְ	_	_	_	_	_	_	_	_
8	וְ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_1.2|Ref[BHSA]=19|Translit=ṿe
9	חֹ֖שֶׁךְ	חשׁך	NOUN	subs	Gender=Masc|Number=Sing	12	nsubj	_	Gloss=darkness|Ref=GEN_1.2|Ref[BHSA]=20|Translit=ḥoshekh
10	עַל	על	ADP	prep	_	12	case	_	Gloss=upon|Ref=GEN_1.2|Ref[BHSA]=21|SpaceAfter=No|Translit=ʻal
11	־	־	PUNCT	punct	_	10	punct	_	Ref=GEN_1.2|SpaceAfter=No
12	פְּנֵ֣י	פנה	NOUN	subs	Gender=Masc|Number=Plur	5	conj	_	Gloss=face|Ref=GEN_1.2|Ref[BHSA]=22|Translit=pene
13	תְהֹ֑ום	תהום	NOUN	subs	Gender=Fem|Number=Sing	12	compound:smixut	_	Gloss=primeval.ocean|Ref=GEN_1.2|Ref[BHSA]=23|Translit=tehom
14-15	וְר֣וּחַ	_	_	_	_	_	_	_	_
14	וְ	ו	CCONJ	conj	_	17	cc	_	Gloss=and|Ref=GEN_1.2|Ref[BHSA]=24|Translit=ṿe
15	ר֣וּחַ	רוח	NOUN	subs	Number=Sing	17	nsubj	_	Gloss=wind|Ref=GEN_1.2|Ref[BHSA]=25|Translit=ruḥa
16	אֱלֹהִ֔ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	15	compound:smixut	_	Gloss=god(s)|Ref=GEN_1.2|Ref[BHSA]=26|Translit=ʼelohim
17	מְרַחֶ֖פֶת	רחף	VERB	verb	Gender=Fem|HebBinyan=PIEL|Number=Sing|VerbForm=Part	5	conj	_	Gloss=shake|Ref=GEN_1.2|Ref[BHSA]=27|Translit=meraḥefet
18	עַל	על	ADP	prep	_	20	case	_	Gloss=upon|Ref=GEN_1.2|Ref[BHSA]=28|SpaceAfter=No|Translit=ʻal
19	־	־	PUNCT	punct	_	18	punct	_	Ref=GEN_1.2|SpaceAfter=No
20	פְּנֵ֥י	פנה	NOUN	subs	Gender=Masc|Number=Plur	17	obl	_	Gloss=face|Ref=GEN_1.2|Ref[BHSA]=29|Translit=pene
21-22	הַמָּֽיִם	_	_	_	_	_	_	_	_
21	הַ	ה	DET	art	PronType=Art	22	det	_	Gloss=the|Ref=GEN_1.2|Ref[BHSA]=30|Translit=ha
22	מָּֽיִם	מים	NOUN	subs	Gender=Masc|Number=Plur	20	compound:smixut	_	Gloss=water|Ref=GEN_1.2|Ref[BHSA]=31|Translit=mayim
23	׃	׃	PUNCT	punct	_	5	punct	_	Ref=GEN_1.2

~~~

_והארץ היתה תהו ובהו וחשך על־פני תהום ורוח אלהים מרחפת על־פני המים׃_

_ṿehaʼarets haytah tohu ṿavohu ṿeḥoshekh ʻal pene tehom ṿeruḥa ʼelohim meraḥefet ʻal pene hamayim_

_And the land was empty, and darkness was upon the surface of the depths, and the wind of God was hovering over the surface of the waters._

The primary case of prepositional phrases being attached with something other than `obl` is with the preposition **את** /ʼet/, which usually appears before definite direct objects.
(**את** also occasionally means "with" in the comitative sense, and in such cases it is `obl`.)

<!-- genesis 4 -->
~~~ conllu
# sent_id = Masoretic-Genesis-1:4-hbo
# text = וַיַּ֧רְא אֱלֹהִ֛ים אֶת־הָאֹ֖ור כִּי־טֹ֑וב וַיַּבְדֵּ֣ל אֱלֹהִ֔ים בֵּ֥ין הָאֹ֖ור וּבֵ֥ין הַחֹֽשֶׁךְ׃
# translit = ṿayarʼ ʼelohim ʼet haʼor ki ṭov ṿayavdel ʼelohim ben haʼor uven haḥoshekh
1-2	וַיַּ֧רְא	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_1.4|Ref[BHSA]=40|Translit=ṿa
2	יַּ֧רְא	ראה	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=see|Ref=GEN_1.4|Ref[BHSA]=41|Translit=yarʼ
3	אֱלֹהִ֛ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=god(s)|Ref=GEN_1.4|Ref[BHSA]=42|Translit=ʼelohim
4	אֶת	את	ADP	prep	_	7	case	_	Gloss=<object.marker>|Ref=GEN_1.4|Ref[BHSA]=43|SpaceAfter=No|Translit=ʼet
5	־	־	PUNCT	punct	_	4	punct	_	Ref=GEN_1.4|SpaceAfter=No
6-7	הָאֹ֖ור	_	_	_	_	_	_	_	_
6	הָ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=GEN_1.4|Ref[BHSA]=44|Translit=ha
7	אֹ֖ור	אור	NOUN	subs	Gender=Masc|Number=Sing	2	obj	_	Gloss=light|Ref=GEN_1.4|Ref[BHSA]=45|Translit=ʼor
8	כִּי	כי	SCONJ	conj	_	10	mark	_	Gloss=that|Ref=GEN_1.4|Ref[BHSA]=46|SpaceAfter=No|Translit=ki
9	־	־	PUNCT	punct	_	8	punct	_	Ref=GEN_1.4|SpaceAfter=No
10	טֹ֑וב	טוב	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	Gloss=be.good|Ref=GEN_1.4|Ref[BHSA]=47|Translit=ṭov
11-12	וַיַּבְדֵּ֣ל	_	_	_	_	_	_	_	_
11	וַ	ו	CCONJ	conj	_	12	cc	_	Gloss=and|Ref=GEN_1.4|Ref[BHSA]=48|Translit=ṿa
12	יַּבְדֵּ֣ל	בדל	VERB	verb	Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=separate|Ref=GEN_1.4|Ref[BHSA]=49|Translit=yavdel
13	אֱלֹהִ֔ים	אלהים	NOUN	subs	Gender=Masc|Number=Plur	12	nsubj	_	Gloss=god(s)|Ref=GEN_1.4|Ref[BHSA]=50|Translit=ʼelohim
14	בֵּ֥ין	בין	ADP	subs	_	16	case	_	Gloss=interval|Ref=GEN_1.4|Ref[BHSA]=51|Translit=ben
15-16	הָאֹ֖ור	_	_	_	_	_	_	_	_
15	הָ	ה	DET	art	PronType=Art	16	det	_	Gloss=the|Ref=GEN_1.4|Ref[BHSA]=52|Translit=ha
16	אֹ֖ור	אור	NOUN	subs	Gender=Masc|Number=Sing	12	obl	_	Gloss=light|Ref=GEN_1.4|Ref[BHSA]=53|Translit=ʼor
17-18	וּבֵ֥ין	_	_	_	_	_	_	_	_
17	וּ	ו	CCONJ	conj	_	20	cc	_	Gloss=and|Ref=GEN_1.4|Ref[BHSA]=54|Translit=u
18	בֵ֥ין	בין	ADP	subs	_	20	case	_	Gloss=interval|Ref=GEN_1.4|Ref[BHSA]=55|Translit=ben
19-20	הַחֹֽשֶׁךְ	_	_	_	_	_	_	_	_
19	הַ	ה	DET	art	PronType=Art	20	det	_	Gloss=the|Ref=GEN_1.4|Ref[BHSA]=56|Translit=ha
20	חֹֽשֶׁךְ	חשׁך	NOUN	subs	Gender=Masc|Number=Sing	16	conj	_	Gloss=darkness|Ref=GEN_1.4|Ref[BHSA]=57|Translit=ḥoshekh
21	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_1.4

~~~

_וירא אלהים את־האור כי־טוב ויבדל אלהים בין האור ובין החשך׃_

_ṿayarʼ ʼelohim **ʼet haʼor** ki ṭov ṿayavdel ʼelohim ben haʼor uven haḥoshekh_

_And God saw **the light**, that it was good, and God separated the light from the darkness._

Resultatives are also not labeled as `obl`.
They are instead attached with [xcomp]().

<!-- genesis 961 -->
~~~ conllu
# sent_id = Masoretic-Genesis-34:8-hbo
# text = וַיְדַבֵּ֥ר חֲמֹ֖ור אִתָּ֣ם לֵאמֹ֑ר שְׁכֶ֣ם בְּנִ֗י חָֽשְׁקָ֤ה נַפְשֹׁו֙ בְּבִתְּכֶ֔ם תְּנ֨וּ נָ֥א אֹתָ֛הּ לֹ֖ו לְאִשָּֽׁה׃
# translit = ṿaydaber ḥamor ʼitam leʼmor shekhem beni ḥashḳah nafsho bevitkem tenu naʼ ʼotah lo leʼishah
# visual-style 17 24 xcomp color:green
1-2	וַיְדַבֵּ֥ר	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_34.8|Ref[BHSA]=18583|Translit=ṿa
2	יְדַבֵּ֥ר	דבר	VERB	verb	Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=speak|Ref=GEN_34.8|Ref[BHSA]=18584|Translit=yedaber
3	חֲמֹ֖ור	חמור	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Hamor|Ref=GEN_34.8|Ref[BHSA]=18585|Translit=ḥamor
4-5	אִתָּ֣ם	_	_	_	_	_	_	_	_
4	אִתָּ֣	את	ADP	prep	_	5	case	_	Gloss=together.with|Ref=GEN_34.8|Ref[BHSA]=18586|Translit=ʼita
5	ם	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	obl	_	Ref=GEN_34.8|Translit=m
6-7	לֵאמֹ֑ר	_	_	_	_	_	_	_	_
6	לֵ	ל	ADP	prep	ExtPos=SCONJ	11	mark	_	Gloss=to|Ref=GEN_34.8|Ref[BHSA]=18587|Translit=le
7	אמֹ֑ר	אמר	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	6	fixed	_	Gloss=say|Ref=GEN_34.8|Ref[BHSA]=18588|Translit=ʼmor
8	שְׁכֶ֣ם	שׁכם	PROPN	nmpr	Gender=Masc|Number=Sing	11	dislocated	_	Gloss=Shechem|Ref=GEN_34.8|Ref[BHSA]=18589|Translit=shekhem
9-10	בְּנִ֗י	_	_	_	_	_	_	_	_
9	בְּנִ֗	בן	NOUN	subs	Gender=Masc|Number=Sing	8	appos	_	Gloss=son|Ref=GEN_34.8|Ref[BHSA]=18590|Translit=beni
10	י	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	9	nmod:poss	_	Ref=GEN_34.8|Translit=
11	חָֽשְׁקָ֤ה	חשׁק	VERB	verb	Aspect=Perf|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	Gloss=love|Ref=GEN_34.8|Ref[BHSA]=18591|Translit=ḥashḳah
12-13	נַפְשֹׁו֙	_	_	_	_	_	_	_	_
12	נַפְשֹׁ	נפשׁ	NOUN	subs	Gender=Fem|Number=Sing	11	nsubj	_	Gloss=soul|Ref=GEN_34.8|Ref[BHSA]=18592|Translit=nafsho
13	ו֙	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nmod:poss	_	Ref=GEN_34.8|Translit=ṿ
14-16	בְּבִתְּכֶ֔ם	_	_	_	_	_	_	_	_
14	בְּ	ב	ADP	prep	_	15	case	_	Gloss=in|Ref=GEN_34.8|Ref[BHSA]=18593|Translit=be
15	בִתְּ	בת	NOUN	subs	Gender=Fem|Number=Sing	11	obl	_	Gloss=daughter|Ref=GEN_34.8|Ref[BHSA]=18594|Translit=bit
16	כֶ֔ם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	15	nmod:poss	_	Ref=GEN_34.8|Translit=kem
17	תְּנ֨וּ	נתן	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	11	parataxis	_	Gloss=give|Ref=GEN_34.8|Ref[BHSA]=18595|Translit=tenu
18	נָ֥א	נא	INTJ	intj	_	17	discourse	_	Gloss=yeah|Ref=GEN_34.8|Ref[BHSA]=18596|Translit=naʼ
19-20	אֹתָ֛הּ	_	_	_	_	_	_	_	_
19	אֹתָ֛	את	ADP	prep	_	20	case	_	Gloss=<object.marker>|Ref=GEN_34.8|Ref[BHSA]=18597|Translit=ʼota
20	הּ	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	17	obj	_	Ref=GEN_34.8|Translit=h
21-22	לֹ֖ו	_	_	_	_	_	_	_	_
21	לֹ֖	ל	ADP	prep	_	22	case	_	Gloss=to|Ref=GEN_34.8|Ref[BHSA]=18598|Translit=lo
22	ו	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	obl	_	Ref=GEN_34.8|Translit=ṿ
23-24	לְאִשָּֽׁה	_	_	_	_	_	_	_	_
23	לְ	ל	ADP	prep	_	24	case	_	Gloss=to|Ref=GEN_34.8|Ref[BHSA]=18599|Translit=le
24	אִשָּֽׁה	אשׁה	NOUN	subs	Gender=Fem|Number=Sing	17	xcomp	_	Gloss=woman|Ref=GEN_34.8|Ref[BHSA]=18600|Translit=ʼishah
25	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_34.8

~~~

_וידבר חמור אתם לאמר שכם בני חשקה נפשו בבתכם תנו נא אתה לו **לאשה**׃_

_ṿaydaber ḥamor ʼitam leʼmor shekhem beni ḥashḳah nafsho bevitkem tenu naʼ ʼotah lo **leʼishah*_

_And Hamor spoke to them "Shechem, my son, his soul loves your daughter; please give her to him **as a wife**."._
<!-- Interlanguage links updated So 10. května 2025, 18:15:56 CEST -->
