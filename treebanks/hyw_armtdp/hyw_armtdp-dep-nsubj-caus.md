---
layout: base
title:  'Statistics of nsubj:caus in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="hyw_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hyw_armtdp-dep-nsubj-pass.html">nsubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:caus`.

5 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4.

The following 2 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj:caus	color:blue
1	—	—	PUNCT	_	_	6	punct	_	Translit=—|LTranslit=—
2	Հանրային	հանրային	ADJ	_	Degree=Pos	3	amod	_	Translit=Hanrayin|LTranslit=hanrayin
3	պարտքի	պարտք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	Translit=partk’i|LTranslit=partk’
4	վարչութիւնը	վարչութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj:caus	_	Translit=varčowt’iwnë|LTranslit=varčowt’iwn
5	սնտուկներ	սնտուկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	6	obj	_	Translit=sntowkner|LTranslit=sntowk
6	պատրաստել	պատրաստել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	Translit=patrastel|LTranslit=patrastel
7	կու	կը	AUX	_	Aspect=Imp|Mood=Ind	6	aux	_	Translit=kow|LTranslit=kë
8	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	6	aux:caus	_	Translit=tay|LTranslit=tal
9	կոր	կոր	AUX	_	Aspect=Prog|Mood=Ind|Style=Coll	6	aux	_	Translit=kor|LTranslit=kor
10	տետրակները	տետրակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	11	obj	_	Translit=tetraknerë|LTranslit=tetrak
11	փոխադրելու	փոխադրել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	obl	_	Translit=p’oxadrelow|LTranslit=p’oxadrel
12	համար	համար	ADP	_	AdpType=Post	11	case	_	Translit=hamar|LTranslit=hamar|SpaceAfter=No
13	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:caus	color:blue
1	Յանկարծ	յանկարծ	ADV	_	_	5	advmod	_	Translit=Yankarç|LTranslit=yankarç
2	հայրենիքէն	հայրենիք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	5	obl	_	Translit=hayrenik’ēn|LTranslit=hayrenik’
3	թուղթ	թուղթ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	Translit=t’owġt’|LTranslit=t’owġt’
4	մը	մը	DET	_	PronType=Art	3	det	_	Translit=më|LTranslit=më
5	եկաւ	գալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=ekaw|LTranslit=gal|SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
7	որ	որ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	10	nsubj:caus	_	Translit=or|LTranslit=or
8	բռնի	բռնի	ADV	_	_	10	advmod	_	Translit=bṙni|LTranslit=bṙni
9	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	10	aux	_	Translit=kë|LTranslit=kë
10	յիշեցնէր	յիշեցնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Cau	3	acl:relcl	_	Translit=yišec’nēr|LTranslit=yišec’nel
11	իրեն	ինք	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Emp	10	iobj:agent	_	Translit=iren|LTranslit=ink’
12	մոռցած	մոռնալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	17	acl	_	Translit=moṙc’aç|LTranslit=moṙnal
13	ու	ու	CCONJ	_	_	15	cc	_	Translit=ow|LTranslit=ow
14	ոտնակոխ	ոտնակոխ	ADJ	_	_	15	compound:lvc	_	Translit=otnakox|LTranslit=otnakox
15	ըրած	ընել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	12	conj	_	Translit=ëraç|LTranslit=ënel
16	սրբազան	սրբազան	ADJ	_	_	17	amod	_	Translit=srbazan|LTranslit=srbazan
17	պարտաւորութիւնները	պարտաւորութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	10	obj	_	Translit=partaworowt’iwnnerë|LTranslit=partaworowt’iwn|SpaceAfter=No
18	.	.	PUNCT	_	_	28	punct	_	Translit=.|LTranslit=.
19	այն	այն	DET	_	Deixis=Remt|PronType=Dem	21	det	_	Translit=ayn|LTranslit=ayn
20	բարակ	բարակ	ADJ	_	Degree=Pos	21	amod	_	Translit=barak|LTranslit=barak
21	պահարանին	պահարան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	23	obl	_	Translit=paharanin|LTranslit=paharan
22	մէջէն	մէջ	ADP	_	AdpType=Post|Case=Abl|Definite=Def	21	case:loc	_	Translit=mēǰēn|LTranslit=mēǰ
23	ելլող	ելլել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	26	acl	_	Translit=elloġ|LTranslit=ellel
24	քառածալ	քառածալ	ADJ	_	_	25	amod	_	Translit=k’aṙaçal|LTranslit=k’aṙaçal
25	թուղթի	թուղթ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	26	nmod:poss	_	Translit=t’owġt’i|LTranslit=t’owġt’
26	կտորը	կտոր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	28	nsubj	_	Translit=ktorë|LTranslit=ktor
27	անխուսափելի	անխուսափելի	ADJ	_	Degree=Pos	28	amod	_	Translit=anxowsap’eli|LTranslit=anxowsap’eli
28	պարսաւ	պարսաւ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	5	conj	_	Translit=parsaw|LTranslit=parsaw
29	մըն	մը	DET	_	PronType=Art	28	det	_	Translit=mën|LTranslit=më
30	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	28	cop	_	Translit=ēr|LTranslit=em
31	ուսկից	ուսկից	ADV	_	Style=Vrnc	34	advmod	_	Translit=owskic’|LTranslit=owskic’
32	ակամայ	ակամայ	ADV	_	_	34	advmod	_	Translit=akamay|LTranslit=akamay
33	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	34	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
34	ամչնար	ամչնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	28	acl	_	Translit=amčnar|LTranslit=amčnal|SpaceAfter=No
35	.	.	PUNCT	_	_	46	punct	_	Translit=.|LTranslit=.
36	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	39	det	_	Translit=ayd|LTranslit=ayd
37	անզգայ	անզգայ	ADJ	_	Degree=Pos	39	amod	_	Translit=anzgay|LTranslit=anzgay
38	փոքրիկ	փոքրիկ	ADJ	_	Degree=Pos	39	amod	_	Translit=p’ok’rik|LTranslit=p’ok’rik
39	սուրհանդակը	սուրհանդակ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	46	nsubj	_	Translit=sowrhandakë|LTranslit=sowrhandak
40	ընտանի	ընտանի	ADJ	_	Degree=Pos	43	amod	_	Translit=ëntani|LTranslit=ëntani
41	եւ	եւ	CCONJ	_	_	42	cc	_	Translit=ew|LTranslit=ew
42	անողոք	անողոք	ADJ	_	Degree=Pos	40	conj	_	Translit=anoġok’|LTranslit=anoġok’
43	մարդու	մարդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	44	nmod:poss	_	Translit=mardow|LTranslit=mard
44	կերպարանք	կերպարանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	46	compound:lvc	_	Translit=kerparank’|LTranslit=kerparank’
45	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	46	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
46	առնէր	առնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	5	conj	_	Translit=aṙnēr|LTranslit=aṙnel
47	եւ	եւ	CCONJ	_	_	50	cc	_	Translit=ew|LTranslit=ew
48	զինքը	ինք	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Emp|Style=Coll	50	obj	_	Translit=zink’ë|LTranslit=ink’
49	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	50	aux	_	Translit=kë|LTranslit=kë
50	յանդիմանէր	յանդիմանել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	46	conj	_	Translit=yandimanēr|LTranslit=yandimanel|SpaceAfter=No
51	:	:	PUNCT	_	Foreign=Yes	5	punct	_	Translit=.|LTranslit=.

~~~


