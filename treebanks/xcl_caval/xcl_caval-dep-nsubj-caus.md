---
layout: base
title:  'Statistics of nsubj:caus in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="xcl_caval-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="xcl_caval-dep-nsubj-pass.html">nsubj:pass</a></tt>.

74 nodes (0%) are attached to their parents as `nsubj:caus`.

63 instances of `nsubj:caus` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58108108108108.

The following 4 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (38; 51% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PRON.html">PRON</a></tt> (29; 39% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PROPN.html">PROPN</a></tt> (5; 7% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-DET.html">DET</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj:caus	color:blue
1	եւ	եւ	CCONJ	_	_	10	cc	_	Translit=ew|LTranslit=ew|Gloss=and
2	հայր	հայր	NOUN	_	Case=Nom|Number=Sing	10	nsubj:caus	_	SpaceAfter=No|Translit=hayr|LTranslit=hayr|Gloss=father
3	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Dem	2	det	_	Translit=n|LTranslit=n|Gloss=that
4	քո	դու	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod	_	Translit=kʻo|LTranslit=dow|Gloss=you_(sg.)
5	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	6	nsubj	_	Translit=or|LTranslit=or|LId=որ-1|Gloss=which
6	տեսանէ	տեսանեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	Translit=tesanē|LTranslit=tesanem|Gloss=see
7	ի	ի	ADP	_	_	6	advmod	_	Translit=i|LTranslit=i|LId=ի-2|Gloss=in
8	ծածուկ	ծածուկ	ADJ	_	Case=Loc|Number=Sing	7	fixed	_	SpaceAfter=No|Translit=cacowk|LTranslit=cacowk|Gloss=hidden
9	.	.	PUNCT	_	_	2	punct	_	Translit=:|LTranslit=:
10	հատուսցէ	հատուցանեմ	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Cau	0	root	_	Translit=hatowscʻē|LTranslit=hatowcʻanem|Gloss=compensate
11	քեզ	դու	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	10	iobj	_	SpaceAfter=No|Translit=kʻez|LTranslit=dow|Gloss=you_(sg.)
12	:	:	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:caus	color:blue
1	նա	նա	PRON	_	Case=Nom|Deixis=Remt|Number=Sing|PronType=Dem	5	nsubj:caus	_	Translit=na|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
2	զ	զ	ADP	_	Definite=Def	3	case	_	SpaceAfter=No|Translit=z|LTranslit=z
3	հիւանդութիւնս	հիւանդութիւն	NOUN	_	Case=Acc|Number=Plur	5	obj	_	Translit=hiwandowtʻiwns|LTranslit=hiwandowtʻiwn|Gloss=illness
4	մեր	մեք	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	3	nmod	_	Translit=mer|LTranslit=mekʻ|Gloss=we
5	վերացոյց	վերացուցանեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	SpaceAfter=No|Translit=veracʻoycʻ|LTranslit=veracʻowcʻanem|Gloss=remove
6	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
7	եւ	եւ	CCONJ	_	_	11	cc	_	Translit=ew|LTranslit=ew|Gloss=and
8	զ	զ	ADP	_	Definite=Def	9	case	_	SpaceAfter=No|Translit=z|LTranslit=z
9	ցաւս	ցաւ	NOUN	_	Case=Acc|Number=Plur	11	obj	_	Translit=cʻaws|LTranslit=cʻaw|Gloss=pain
10	մեր	մեք	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	9	nmod	_	Translit=mer|LTranslit=mekʻ|Gloss=we
11	եբարձ	բառնամ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No|Translit=ebarj|LTranslit=baṙnam|Gloss=raise
12	:	:	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 nsubj:caus	color:blue
1	Իսկ	իսկ	PART	_	_	26	orphan	_	Translit=Isk|LTranslit=isk|Gloss=but
2	եթե	եթե	SCONJ	_	_	20	mark	_	Translit=etʻe|LTranslit=tʻe|LId=եթե-1|Gloss=whether
3	զ	զ	ADP	_	Definite=Def	4	case	_	SpaceAfter=No|Translit=z|LTranslit=z
4	խոտ	խոտ	NOUN	_	Case=Acc|Number=Sing	20	obj	_	SpaceAfter=No|Translit=xot|LTranslit=xot|Gloss=grass
5	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Dem	4	det	_	Translit=n|LTranslit=n|Gloss=that
6	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	9	nsubj	_	Translit=or|LTranslit=or|LId=որ-1|Gloss=which
7	այսաւր	այսաւր	ADV	_	_	9	advmod	_	Translit=aysawr|LTranslit=aysawr|Gloss=today
8	ի	ի	ADP	_	_	9	case	_	Translit=i|LTranslit=i|LId=ի-2|Gloss=in
9	բացի	բաց	NOUN	_	Case=Loc|Number=Sing	4	acl	_	Translit=bacʻi|LTranslit=bacʻ
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em|Gloss=be
11	՝	՝	PUNCT	_	_	16	punct	_	Translit=;|LTranslit=;
12	եւ	եւ	CCONJ	_	_	16	cc	_	Translit=ew|LTranslit=ew|Gloss=and
13	վաղիւ	վաղիւ	ADV	_	_	16	advmod	_	Translit=vałiw|LTranslit=vałiw|LId=վաղիւ-1|Gloss=next_day
14	ի	ի	ADP	_	_	15	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to
15	հնոց	հնոց	NOUN	_	Case=Acc|Number=Sing	16	obl	_	Translit=hnocʻ|LTranslit=hnocʻ|Gloss=furnace
16	արկանելի	արկանելի	ADJ	_	Case=Nom|Number=Sing	9	conj	_	SpaceAfter=No|Translit=arkaneli|LTranslit=arkaneli|Gloss=robe
17	.	.	PUNCT	_	_	4	punct	_	Translit=:|LTranslit=:
18	Աստուած	Աստուած	PROPN	_	Case=Nom|Number=Sing	20	nsubj:caus	_	Translit=Astowac|LTranslit=Astowac|Gloss=God
19	այնպէս	այնպէս	ADV	_	Deixis=Remt|PronType=Dem	20	advmod	_	Translit=aynpēs|LTranslit=aynpēs|Gloss=this_way
20	զգեցուցանէ	զգեցուցանեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Cau	26	orphan	_	SpaceAfter=No|Translit=zgecʻowcʻanē|LTranslit=zgecʻowcʻanem|Gloss=wear
21	.	.	PUNCT	_	_	20	punct	_	Translit=:|LTranslit=:
22	որչափ	որչափ	ADV	_	PronType=Rel	24	mark	_	Translit=orčʻapʻ|LTranslit=orčʻapʻ|Gloss=how_much
23	եւս	եւս	ADV	_	_	22	advmod	_	Translit=ews|LTranslit=ews|Gloss=even
24	առաւել	առաւել	ADV	_	_	26	orphan	_	Translit=aṙawel|LTranslit=aṙawel|Gloss=more
25	զ	զ	DET	_	Definite=Def	26	orphan	_	SpaceAfter=No|Translit=z|LTranslit=z
26	ձեզ	դուք	PRON	_	Case=Acc|Number=Plur|Person=2|PronType=Prs	0	root	_	Translit=jez|LTranslit=dowkʻ|Gloss=you_(pl)
27	թերահաւատք	թերահաւատ	ADJ	_	Case=Nom|Number=Plur	26	orphan	_	SpaceAfter=No|Translit=tʻerahawatkʻ|LTranslit=tʻerahawat|Gloss=skeptical
28	:	:	PUNCT	_	_	26	punct	_	Translit=.|LTranslit=.

~~~


