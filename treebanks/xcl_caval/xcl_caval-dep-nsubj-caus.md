---
layout: base
title:  'Statistics of nsubj:caus in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="xcl_caval-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="xcl_caval-dep-nsubj-pass.html">nsubj:pass</a></tt>.

84 nodes (0%) are attached to their parents as `nsubj:caus`.

69 instances of `nsubj:caus` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91666666666667.

The following 4 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (43; 51% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PRON.html">PRON</a></tt> (35; 42% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj:caus	color:blue
1	եւ	եւ	CCONJ	_	_	10	cc	_	Translit=ew|LTranslit=ew|Gloss=and
2	հայր	հայր	NOUN	_	Case=Nom|Number=Sing	10	nsubj:caus	_	SpaceAfter=No|Translit=hayr|LTranslit=hayr|Gloss=father
3	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Art	2	det	_	Translit=n|LTranslit=n|Gloss=that
4	քո	դու	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod	_	Translit=kʻo|LTranslit=dow|Gloss=you_(sg.)
5	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	6	nsubj	_	Translit=or|LTranslit=or|Gloss=who
6	տեսանէ	տեսանել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	Translit=tesanē|LTranslit=tesanel|Gloss=see
7	ի	ի	ADP	_	ExtPos=ADV	6	advmod	_	Translit=i|LTranslit=i|Gloss=to/in/from
8	ծածուկ	ծածուկ	ADV	_	_	7	fixed	_	SpaceAfter=No|Translit=cacowk|LTranslit=cacowk|Gloss=secretly
9	.	.	PUNCT	_	_	2	punct	_	Translit=:|LTranslit=:
10	հատուսցէ	հատուցանել	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Cau	0	root	_	Translit=hatowscʻē|LTranslit=hatowcʻanel|Gloss=compensate
11	քեզ	դու	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	10	iobj	_	SpaceAfter=No|Translit=kʻez|LTranslit=dow|Gloss=you_(sg.)
12	:	:	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:caus	color:blue
1	Այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	2	nsubj:caus	_	Translit=Ays|LTranslit=ays|Gloss=this
2	արդարացուցանէ	արդարացուցանել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	_	Translit=ardaracʻowcʻanē|LTranslit=ardaracʻowcʻanel|Gloss=justify
3	զ	զ	ADP	_	Definite=Def	7	case	_	SpaceAfter=No|Translit=z|LTranslit=z
4	անգիր	անգիր	ADJ	_	Case=Nom|Number=Sing	7	amod	_	Translit=angir|LTranslit=angir|Gloss=unwritten
5	հին	հին	ADJ	_	Case=Acc|Number=Sing	7	amod	_	Translit=hin|LTranslit=hin|Gloss=old
6	ասացեալ	ասել	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	amod	_	Translit=asacʻeal|LTranslit=asel|Gloss=say
7	զրոյցս	զրոյց	NOUN	_	Case=Acc|Number=Plur	2	obj	_	SpaceAfter=No|Translit=zroycʻs|LTranslit=zroycʻ|Gloss=conversation
8	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 nsubj:caus	color:blue
1	Իսկ	իսկ	PART	_	_	21	discourse	_	Translit=Isk|LTranslit=isk|Gloss=but
2	ի	ի	ADP	_	_	3	case	_	Translit=i|LTranslit=i|LId=1|Gloss=to
3	լինել	լինել	AUX	_	Case=Loc|VerbForm=Vnoun	21	obl	_	Translit=linel|LTranslit=linel|Gloss=become
4	սխալանաց	սխալանք	NOUN	_	Case=Gen|Number=Plur	3	nmod	_	Translit=sxalanacʻ|LTranslit=sxalankʻ|Gloss=error
5	ինչ	ինչ	ADV	_	Definite=Ind|PronType=Ind	3	advmod	_	Translit=inčʻ|LTranslit=inčʻ|Gloss=few
6	Զրադաշտի	Զրադաշտ	PROPN	_	Case=Gen|Number=Sing	3	nmod	_	Translit=Zradašti|LTranslit=Zradašt|Gloss=Zradašt
7	առ	առ	ADP	_	_	8	case	_	Translit=aṙ|LTranslit=aṙ|Gloss=by
8	տիկին	տիկին	NOUN	_	Case=Acc|Number=Sing	3	nmod	_	SpaceAfter=No|Translit=tikin|LTranslit=tikin|Gloss=lady
9	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Art	8	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
10	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
11	եւ	եւ	CCONJ	_	_	15	cc	_	Translit=ew|LTranslit=ew|Gloss=and
12	հակառակութեան	հակառակութիւն	NOUN	_	Case=Gen|Number=Sing	15	nmod	_	Translit=hakaṙakowtʻean|LTranslit=hakaṙakowtʻiwn|Gloss=opposition
13	ի	ի	ADP	_	ExtPos=ADV	15	advmod	_	Translit=i|LTranslit=i|Gloss=to/in/from
14	ներքս	ներքս	ADV	_	_	13	fixed	_	Translit=nerkʻs|LTranslit=nerkʻs|Gloss=inside
15	անկանել	անկանել	VERB	_	Case=Loc|VerbForm=Vnoun	3	conj	_	SpaceAfter=No|Translit=ankanel|LTranslit=ankanel|LId=1|Gloss=fall
16	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
17	պատերազմ	պատերազմ	NOUN	_	Case=Acc|Number=Sing	21	obj	_	Translit=paterazm|LTranslit=paterazm|Gloss=war
18	ի	ի	ADP	_	ExtPos=ADP	20	case	_	Translit=i|LTranslit=i|LId=1|Gloss=to
19	վերայ	վերայ	ADV	_	_	18	fixed	_	Translit=veray|LTranslit=veray|Gloss=above
20	նորա	նա	PRON	_	Case=Gen|Deixis=Remt|Number=Sing|PronType=Dem	21	obl	_	Translit=nora|LTranslit=na|Gloss=he/she/it
21	յարուցանէ	յարուցանել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	_	Translit=yarowcʻanē|LTranslit=yarowcʻanel|Gloss=raise
22	Շամիրամ	Շամիրամ	PROPN	_	Case=Nom|Number=Sing	21	nsubj:caus	_	SpaceAfter=No|Translit=Šamiram|LTranslit=Šamiram|Gloss=Šamiram
23	.	.	PUNCT	_	_	29	punct	_	Translit=:|LTranslit=:
24	քանզի	քանզի	SCONJ	_	_	29	mark	_	Translit=kʻanzi|LTranslit=kʻanzi|Gloss=for
25	բռնանալ	բռնանալ	VERB	_	VerbForm=Inf	29	xcomp	_	Translit=bṙnanal|LTranslit=bṙnanal|Gloss=violent_toward
26	ի	ի	ADP	_	ExtPos=ADP	28	case	_	Translit=i|LTranslit=i|LId=1|Gloss=to
27	վերայ	վերայ	ADV	_	_	26	fixed	_	Translit=veray|LTranslit=veray|Gloss=above
28	ամենայնի	ամենայն	PRON	_	Case=Gen|Number=Sing|PronType=Tot	25	obl	_	Translit=amenayni|LTranslit=amenayn|Gloss=all
29	խորհէր	խորհել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	21	advcl	_	Translit=xorhēr|LTranslit=xorhel|Gloss=think
30	մար	Մար	PROPN	_	Case=Nom|Number=Sing	29	nsubj	_	SpaceAfter=No|Translit=mar|LTranslit=Mar|Gloss=Mar
31	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Art	30	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
32	:	:	PUNCT	_	_	21	punct	_	Translit=.|LTranslit=.

~~~


