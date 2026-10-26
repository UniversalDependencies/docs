---
layout: base
title:  'Statistics of csubj:outer in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="hy_bsut-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="hy_bsut-dep-csubj-pass.html">csubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:outer`.

3 instances of `csubj:outer` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 4 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 csubj:outer	color:blue
1	Այն	այն	PRON	_	Deixis=Remt|PronType=Dem	12	nsubj	_	Translit=Ayn|LTranslit=ayn|SpaceAfter=No
2	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
3	որ	որ	SCONJ	_	_	9	mark	_	Translit=or|LTranslit=or
4	Մինասյանի	Մինասյան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	9	obl	_	Translit=Minasyani|LTranslit=Minasyan
5	համար	համար	ADP	_	AdpType=Post	4	case	_	Translit=hamar|LTranslit=hamar
6	Քոչարյանն	Քոչարյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	9	nsubj	_	Translit=K’očaryann|LTranslit=K’očaryan
7	ու	ու	CCONJ	_	_	8	cc	_	Translit=ow|LTranslit=ow
8	Սարգսյանը	Սարգսյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	6	conj	_	Translit=Sargsyanë|LTranslit=Sargsyan
9	հերոսներ	հերոս	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	12	csubj:outer	_	Translit=herosner|LTranslit=heros
10	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	Translit=en|LTranslit=em|SpaceAfter=No
11	՝	՝	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
12	զարմանալի	զարմանալի	ADJ	_	Degree=Pos	0	root	_	Translit=zarmanali|LTranslit=zarmanali
13	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	cop	_	Translit=čē|LTranslit=em|SpaceAfter=No
14	,	,	PUNCT	_	_	23	punct	_	Translit=,|LTranslit=,
15	որովհետև	որովհետև	SCONJ	_	_	23	mark	_	Translit=orovhetew|LTranslit=orovhetew
16	նրանց	նրանք	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	23	obl	_	Translit=nranc’|LTranslit=nrank’
17	և	և	CCONJ	_	_	19	cc	_	Translit=ew|LTranslit=ew
18	հատկապես	հատկապես	ADV	_	_	19	advmod:emph	_	Translit=hatkapes|LTranslit=hatkapes
19	վերջինիս	վերջին	NOUN	_	Animacy=Hum|Case=Dat|Deixis[psor]=Prox|Number=Sing	16	conj	_	Translit=verǰinis|LTranslit=verǰin
20	շնորհիվ	շնորհիվ	ADP	_	AdpType=Ambi	16	case	_	Translit=šnorhiv|LTranslit=šnorhiv
21	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	23	aux	_	Translit=ē|LTranslit=em
22	Մինասյանը	Մինասյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	23	nsubj	_	Translit=Minasyanë|LTranslit=Minasyan
23	դարձել	դառնալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	12	advcl	_	Translit=darjel|LTranslit=daṙnal
24	այն	այն	PRON	_	Deixis=Remt|PronType=Dem	23	xcomp	_	Translit=ayn|LTranslit=ayn|SpaceAfter=No
25	,	,	PUNCT	_	_	28	punct	_	Translit=,|LTranslit=,
26	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	28	nsubj	_	Translit=inč|LTranslit=inč|SpaceAfter=No
27	՝	՝	PUNCT	_	_	28	punct	_	Translit=,|LTranslit=,
28	էր	եմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	24	acl:relcl	_	Translit=ēr|LTranslit=em|SpaceAfter=No
29	,	,	PUNCT	_	_	31	punct	_	Translit=,|LTranslit=,
30	և	և	CCONJ	_	_	31	cc	_	Translit=ew|LTranslit=ew
31	այն	այն	PRON	_	Deixis=Remt|PronType=Dem	24	conj	_	Translit=ayn|LTranslit=ayn|SpaceAfter=No
32	,	,	PUNCT	_	_	34	punct	_	Translit=,|LTranslit=,
33	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	34	nsubj	_	Translit=inč|LTranslit=inč
34	կա	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	31	acl:relcl	_	Translit=ka|LTranslit=kam|SpaceAfter=No
35	:	:	PUNCT	_	Foreign=Yes	12	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 21 csubj:outer	color:blue
1	Այստեղ	այստեղ	ADV	_	Deixis=Prox|PronType=Dem	5	advmod	_	Translit=Aysteġ|LTranslit=aysteġ
2	ոչ	ոչ	PART	_	ExtPos=CCONJ|Polarity=Neg	5	cc	_	Translit=oč|LTranslit=oč
3	թե	թե	PART	_	_	2	fixed	_	Translit=t’e|LTranslit=t’e
4	կրկնակի	կրկնակի	ADJ	_	_	5	amod	_	Translit=krknaki|LTranslit=krknaki
5	աճն	աճ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	7	nsubj	_	Translit=ač̣n|LTranslit=ač̣
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=ē|LTranslit=em
7	հետաքրքիր	հետաքրքիր	ADJ	_	Degree=Pos	0	root	_	Translit=hetak’rk’ir|LTranslit=hetak’rk’ir|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
9	այլ	այլ	CCONJ	_	ConjType=Comp	10	cc	_	Translit=ayl|LTranslit=ayl
10	այն	այն	PRON	_	Deixis=Remt|PronType=Dem	5	conj	_	Translit=ayn|LTranslit=ayn|SpaceAfter=No
11	,	,	PUNCT	_	_	21	punct	_	Translit=,|LTranslit=,
12	որ	որ	SCONJ	_	_	21	mark	_	Translit=or|LTranslit=or
13	գրեթե	գրեթե	ADV	_	_	15	advmod:emph	_	Translit=gret’e|LTranslit=gret’e
14	վիճակագրական	վիճակագրական	ADJ	_	_	15	amod	_	Translit=vič̣akagrakan|LTranslit=vič̣akagrakan
15	սխալին	սխալ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	16	obl	_	Translit=sxalin|LTranslit=sxal
16	մոտ	մոտ	ADV	_	Degree=Pos	17	xcomp	_	Translit=mot|LTranslit=mot
17	գտնվող	գտնվել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	18	acl	_	Translit=gtnvoġ|LTranslit=gtnvel
18	ցուցանիշից	ցուցանիշ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	21	obl	_	Translit=c’owc’anišic’|LTranslit=c’owc’aniš
19	մեր	մեր	DET	_	Number=Plur|Person=1|Poss=Yes|PronType=Prs	20	det:poss	_	Translit=mer|LTranslit=mer
20	հասարակությունը	հասարակություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	21	nsubj	_	Translit=hasarakowt’yownë|LTranslit=hasarakowt’yown
21	մոտեցել	մոտենալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	7	csubj:outer	_	Translit=motec’el|LTranslit=motenal
22	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	21	aux	_	Translit=ē|LTranslit=em
23	արդեն	արդեն	ADV	_	_	21	advmod	_	Translit=arden|LTranslit=arden
24	այն	այն	DET	_	Deixis=Remt|PronType=Dem	25	det	_	Translit=ayn|LTranslit=ayn
25	շեմին	շեմ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	21	obl	_	Translit=šemin|LTranslit=šem|SpaceAfter=No
26	,	,	PUNCT	_	_	29	punct	_	Translit=,|LTranslit=,
27	երբ	երբ	SCONJ	_	_	29	mark	_	Translit=erb|LTranslit=erb
28	հնարավոր	հնարավոր	ADJ	_	_	29	xcomp	_	Translit=hnaravor|LTranslit=hnaravor
29	կլինի	լինել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	25	acl	_	Translit=klini|LTranslit=linel
30	որակական	որակական	ADJ	_	_	31	amod	_	Translit=orakakan|LTranslit=orakakan
31	փոփոխություններ	փոփոխություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	32	obj	_	Translit=p’op’oxowt’yownner|LTranslit=p’op’oxowt’yown
32	իրականացնել	իրականացնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	29	csubj	_	Translit=irakanac’nel|LTranslit=irakanac’nel
33	մեդիադաշտում	մեդիադաշտ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Coll	32	obl	_	Translit=mediadaštowm|LTranslit=mediadašt|SpaceAfter=No
34	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 13 csubj:outer	color:blue
1	Այն	այն	PRON	_	Deixis=Remt|PronType=Dem	19	nsubj	_	Translit=Ayn|LTranslit=ayn|SpaceAfter=No
2	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
3	որ	որ	SCONJ	_	_	13	mark	_	Translit=or|LTranslit=or
4	հեղափոխականների	հեղափոխական	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	5	nmod:poss	_	Translit=heġap’oxakanneri|LTranslit=heġap’oxakan
5	սեղանի	սեղան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	Translit=seġani|LTranslit=seġan
6	գիրքը	գիրք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	13	nsubj:pass	_	Translit=girk’ë|LTranslit=girk’|SpaceAfter=No
7	՝	՝	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
8	«	«	PUNCT	_	_	11	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
9	Ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	11	obj	_	Translit=Inč|LTranslit=inč
10	՞	՞	PUNCT	_	_	9	punct	_	Translit=?|LTranslit=?
11	անելը	անել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	appos	_	Translit=anelë|LTranslit=anel|SpaceAfter=No
12	»	»	PUNCT	_	_	11	punct	_	Translit=»|LTranslit=»
13	գրվել	գրել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	19	csubj:outer	_	Translit=grvel|LTranslit=grel
14	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	Translit=ē|LTranslit=em
15	բանտում	բանտ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	13	obl	_	Translit=bantowm|LTranslit=bant|SpaceAfter=No
16	,	,	PUNCT	_	_	19	punct	_	Translit=,|LTranslit=,
17	առավել	առավել	ADV	_	_	18	advmod	_	Translit=aṙavel|LTranslit=aṙavel
18	հայտնի	հայտնի	ADJ	_	Degree=Pos	19	amod	_	Translit=haytni|LTranslit=haytni
19	փաստ	փաստ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=p’ast|LTranslit=p’ast
20	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
21	:	:	PUNCT	_	Foreign=Yes	19	punct	_	Translit=.|LTranslit=.

~~~


