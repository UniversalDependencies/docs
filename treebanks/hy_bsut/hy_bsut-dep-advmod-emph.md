---
layout: base
title:  'Statistics of advmod:emph in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="hy_bsut-dep-advmod.html">advmod</a></tt>.

34 nodes (1%) are attached to their parents as `advmod:emph`.

17 instances of `advmod:emph` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67647058823529.

The following 3 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (18; 53% instances), <tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (15; 44% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advmod:emph	color:blue
1	Միքայել	Միքայել	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	Translit=Mik’ayel|LTranslit=Mik’ayel
2	Մինասյան	Մինասյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	1	flat:name	_	Translit=Minasyan|LTranslit=Minasyan|SpaceAfter=No
3	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.
4	Հանկարծակի	հանկարծակի	ADV	_	_	8	advmod:emph	_	Translit=Hankarçaki|LTranslit=hankarçaki
5	«	«	PUNCT	_	_	6	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
6	օբյեկտիվ	օբյեկտիվ	ADJ	_	Degree=Pos	8	nmod:npmod	_	Translit=òbyektiv|LTranslit=òbyektiv|SpaceAfter=No
7	»	»	PUNCT	_	_	6	punct	_	Translit=»|LTranslit=»
8	դարձածը	դարձած	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	1	appos	_	Translit=darjaçë|LTranslit=darjaç

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advmod:emph	color:blue
1	Այնպես	այնպես	ADV	_	Deixis=Remt|PronType=Dem	10	mark	_	Translit=Aynpes|LTranslit=aynpes
2	որ	որ	PART	_	_	1	fixed	_	Translit=or|LTranslit=or|SpaceAfter=No
3	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
4	ինչպես	ինչպես	SCONJ	_	_	5	mark	_	Translit=inčpes|LTranslit=inčpes
5	ասում	ասել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	10	parataxis	_	Translit=asowm|LTranslit=asel
6	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=en|LTranslit=em|SpaceAfter=No
7	՝	՝	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
8	ով	ով	PRON	_	Case=Nom|Number=Sing|PronType=Int	10	nsubj	_	Translit=ov|LTranslit=ov
9	էլ	էլ	ADV	_	_	8	advmod:emph	_	Translit=ēl|LTranslit=ēl
10	խոսի	խոսել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=xosi|LTranslit=xosel
11	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	12	det	_	Translit=ayd|LTranslit=ayd
12	թեմայով	թեմա	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	10	obl	_	Translit=t’emayov|LTranslit=t’ema|SpaceAfter=No
13	,	,	PUNCT	_	_	18	punct	_	Translit=,|LTranslit=,
14	դա	դա	PRON	_	Case=Nom|Deixis=Med|Number=Sing|PronType=Dem	18	nsubj	_	Translit=da|LTranslit=da
15	Մինասյանը	Մինասյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	18	xcomp	_	Translit=Minasyanë|LTranslit=Minasyan
16	չպետք	պետք	AUX	_	Mood=Nec|Polarity=Neg	18	aux	_	Translit=čpetk’|LTranslit=petk’
17	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	aux	_	Translit=ē|LTranslit=em
18	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	8	acl	_	Translit=lini|LTranslit=linel|SpaceAfter=No
19	:	:	PUNCT	_	Foreign=Yes	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 52 advmod:emph	color:blue
1	1998	1998	NUM	_	NumForm=Digit|NumType=Card	9	obl	_	Translit=1998|LTranslit=1998|SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
3	ին	ը	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Hyph=Yes|Number=Sing	1	dep	_	Translit=in|LTranslit=ë|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	օրինակ	օրինակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	discourse	_	Translit=òrinak|LTranslit=òrinak|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
7	շատերը	շատ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	9	nsubj	_	Translit=šaterë|LTranslit=šat
8	ցնծությամբ	ցնծություն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	9	obl	_	Translit=c’nçowt’yamb|LTranslit=c’nçowt’yown
9	ընդունեցին	ընդունել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=ëndownec’in|LTranslit=ëndownel
10	պալատական	պալատական	ADJ	_	_	11	amod	_	Translit=palatakan|LTranslit=palatakan
11	հեղաշրջումը	հեղաշրջում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	obj	_	Translit=heġašrǰowmë|LTranslit=heġašrǰowm
12	զուտ	զուտ	ADV	_	_	13	advmod	_	Translit=zowt|LTranslit=zowt
13	այն	այն	DET	_	Deixis=Remt|PronType=Dem	14	det	_	Translit=ayn|LTranslit=ayn
14	պատճառով	պատճառ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	9	obl	_	Translit=patč̣aṙov|LTranslit=patč̣aṙ|SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	Translit=,|LTranslit=,
16	որ	որ	SCONJ	_	_	17	mark	_	Translit=or|LTranslit=or
17	ուզում	ուզել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	14	acl	_	Translit=owzowm|LTranslit=owzel
18	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	17	aux	_	Translit=ēin|LTranslit=em
19	վրեժ	վրեժ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	20	compound:lvc	_	Translit=vrež|LTranslit=vrež
20	լուծել	լուծել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	17	xcomp	_	Translit=lowçel|LTranslit=lowçel
21	«	«	PUNCT	_	_	25	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
22	մութ	մութ	ADJ	_	Degree=Pos	25	amod	_	Translit=mowt’|LTranslit=mowt’
23	ու	ու	CCONJ	_	_	24	cc	_	Translit=ow|LTranslit=ow
24	ցուրտ	ցուրտ	ADJ	_	Degree=Pos	22	conj	_	Translit=c’owrt|LTranslit=c’owrt
25	տարիների	տարի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	20	obl	_	Translit=tarineri|LTranslit=tari|SpaceAfter=No
26	»	»	PUNCT	_	_	25	punct	_	Translit=»|LTranslit=»
27	համար	համար	ADP	_	AdpType=Post	25	case	_	Translit=hamar|LTranslit=hamar
28	ու	ու	CCONJ	_	_	30	cc	_	Translit=ow|LTranslit=ow
29	չէին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	30	aux	_	Translit=čēin|LTranslit=em
30	ուզում	ուզել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	17	conj	_	Translit=owzowm|LTranslit=owzel
31	լսել	լսել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	30	xcomp	_	Translit=lsel|LTranslit=lsel
32	ոչ	ոչ	CCONJ	_	_	34	cc	_	Translit=oč|LTranslit=oč
33	՛	՛	PUNCT	_	_	32	punct	_	Translit=՛|LTranslit=՛
34	շրջափակման	շրջափակում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	31	obl	_	Translit=šrǰap’akman|LTranslit=šrǰap’akowm|SpaceAfter=No
35	,	,	PUNCT	_	_	38	punct	_	Translit=,|LTranslit=,
36	ոչ	ոչ	CCONJ	_	_	38	cc	_	Translit=oč|LTranslit=oč
37	՛	՛	PUNCT	_	_	36	punct	_	Translit=՛|LTranslit=՛
38	պատերազմի	պատերազմ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	34	conj	_	Translit=paterazmi|LTranslit=paterazm|SpaceAfter=No
39	,	,	PUNCT	_	_	42	punct	_	Translit=,|LTranslit=,
40	ոչ	ոչ	CCONJ	_	_	42	cc	_	Translit=oč|LTranslit=oč
41	՛	՛	PUNCT	_	_	40	punct	_	Translit=՛|LTranslit=՛
42	հաղթանակի	հաղթանակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	34	conj	_	Translit=haġt’anaki|LTranslit=haġt’anak
43	մասին	մասին	ADP	_	AdpType=Post	34	case	_	Translit=masin|LTranslit=masin|SpaceAfter=No
44	,	,	PUNCT	_	_	46	punct	_	Translit=,|LTranslit=,
45	ու	ու	CCONJ	_	_	46	cc	_	Translit=ow|LTranslit=ow
46	թքած	թքել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	17	conj	_	Translit=t’k’aç|LTranslit=t’k’el
47	ունեին	ունեմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	46	aux	_	Translit=ownein|LTranslit=ownem|SpaceAfter=No
48	,	,	PUNCT	_	_	59	punct	_	Translit=,|LTranslit=,
49	որ	որ	SCONJ	_	_	59	mark	_	Translit=or|LTranslit=or
50	էներգետիկ	էներգետիկ	ADJ	_	_	51	amod	_	Translit=ēnergetik|LTranslit=ēnergetik
51	ճգնաժամը	ճգնաժամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	59	nsubj	_	Translit=č̣gnažamë|LTranslit=č̣gnažam
52	հենց	հենց	ADV	_	_	53	advmod:emph	_	Translit=henc’|LTranslit=henc’
53	Լևոն	Լևոն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	59	obl	_	Translit=Lewon|LTranslit=Lewon
54	Տեր	տեր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	53	flat:name	_	Translit=Ter|LTranslit=ter|SpaceAfter=No
55	-	-	PUNCT	_	_	56	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
56	Պետրոսյանի	Պետրոսյան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	53	flat:name	_	Translit=Petrosyani|LTranslit=Petrosyan
57	օրոք	օրոք	ADP	_	AdpType=Post	53	case	_	Translit=òrok’|LTranslit=òrok’
58	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	59	aux	_	Translit=ē|LTranslit=em
59	հաղթահարվել	հաղթահարվել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	46	advcl	_	Translit=haġt’aharvel|LTranslit=haġt’aharvel|SpaceAfter=No
60	,	,	PUNCT	_	_	63	punct	_	Translit=,|LTranslit=,
61	ոչ	ոչ	PART	_	Polarity=Neg	63	cc	_	Translit=oč|LTranslit=oč
62	թե	թե	PART	_	_	61	fixed	_	Translit=t’e|LTranslit=t’e
63	հեղաշրջումից	հեղաշրջում	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	53	conj	_	Translit=heġašrǰowmic’|LTranslit=heġašrǰowm
64	հետո	հետո	ADP	_	AdpType=Post	63	case	_	Translit=heto|LTranslit=heto|SpaceAfter=No
65	։	։	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.

~~~


