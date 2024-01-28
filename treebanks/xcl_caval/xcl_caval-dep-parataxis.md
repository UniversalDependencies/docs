---
layout: base
title:  'Statistics of parataxis in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `parataxis`

This relation is universal.

52 nodes (0%) are attached to their parents as `parataxis`.

52 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.98076923076923.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt> (42; 81% instances), <tt><a href="xcl_caval-pos-AUX.html">AUX</a></tt>-<tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt>-<tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 parataxis	color:blue
1	ահաւասիկ	ահաւասիկ	INTJ	_	PronType=Dem	6	discourse	_	Translit=ahawasik|LTranslit=ahawasik|Gloss=behold
2	հայր	հայր	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	Translit=hayr|LTranslit=hayr|Gloss=father
3	քո	դու	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod	_	Translit=kʻo|LTranslit=dow|Gloss=you_(sg.)
4	եւ	եւ	CCONJ	_	_	5	cc	_	Translit=ew|LTranslit=ew|Gloss=and
5	ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	conj	_	Translit=es|LTranslit=es|Gloss=I
6	տառապեաք	տառապիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Translit=taṙapeakʻ|LTranslit=taṙapim|Gloss=suffer
7	խնդրեաք	խնդրեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	6	parataxis	_	Translit=xndreakʻ|LTranslit=xndrem|Gloss=ask
8	զ	զ	DET	_	Definite=Def	9	det	_	SpaceAfter=No|Translit=z|LTranslit=z
9	քեզ	դու	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	6	obj	_	SpaceAfter=No|Translit=kʻez|LTranslit=dow|Gloss=you_(sg.)
10	:	:	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis	color:blue
1	Եւ	եւ	CCONJ	_	_	2	cc	_	Translit=Ew|LTranslit=ew|Gloss=and
2	եղեւ	լինիմ	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ełew|LTranslit=linim|Gloss=be
3	իբրեւ	իբրեւ	SCONJ	_	_	4	mark	_	Translit=ibrew|LTranslit=ibrew|LId=իբրեւ-1|Gloss=when
4	լցան	լնում	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	2	csubj	_	Translit=lcʻan|LTranslit=lnowm|Gloss=fill
5	աւուրք	աւր	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	Translit=awowrkʻ|LTranslit=awr|Gloss=day
6	պաշտաման	պաշտաւն	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	Translit=paštaman|LTranslit=paštawn|Gloss=office
7	նորա	նա	PRON	_	Case=Gen|Number=Sing|PronType=Dem	6	nmod	_	SpaceAfter=No|Translit=nora|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
8	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
9	գնաց	գնամ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	Translit=gnacʻ|LTranslit=gnam|Gloss=go
10	ի	ի	ADP	_	_	11	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
11	տուն	տուն	NOUN	_	Case=Acc|Number=Sing	9	obl	_	Translit=town|LTranslit=town|Gloss=house
12	իւր	իւր	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	11	nmod	_	SpaceAfter=No|Translit=iwr|LTranslit=iwr|LId=իւր-2|Gloss=oneself
13	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 parataxis	color:blue
1	Զի	զի	PRON	_	Animacy=Inan|Case=Acc|Number=Sing|PronType=Int	3	obl	_	Translit=Zi|LTranslit=zi|LId=զի-2|Gloss=what
2	՞	՞	PUNCT	_	_	1	punct	_	Translit=?|LTranslit=?
3	կոչէք	կոչեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=kočʻēkʻ|LTranslit=kočʻem|Gloss=call
4	զ	զ	DET	_	_	5	det	_	SpaceAfter=No|Translit=z|LTranslit=z
5	իս	ես	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	Translit=is|LTranslit=es|Gloss=I
6	Տէր	Տէր	NOUN	_	Case=Nom|Number=Sing	3	vocative	_	Translit=Tēr|LTranslit=Tēr|Gloss=Lord
7	Տէր	Տէր	NOUN	_	Case=Nom|Number=Sing	6	parataxis	_	SpaceAfter=No|Translit=Tēr|LTranslit=Tēr|Gloss=Lord
8	.	.	PUNCT	_	_	15	punct	_	Translit=:|LTranslit=:
9	եւ	եւ	CCONJ	_	_	15	cc	_	Translit=ew|LTranslit=ew|Gloss=and
10	զ	զ	DET	_	_	11	det	_	SpaceAfter=No|Translit=z|LTranslit=z
11	որ	որ	PRON	_	Case=Acc|Number=Sing|PronType=Rel	12	obj	_	Translit=or|LTranslit=or|LId=որ-1|Gloss=which
12	ասեմ	ասեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	15	ccomp	_	SpaceAfter=No|Translit=asem|LTranslit=asem|Gloss=say
13	ն	ն	DET	_	Definite=Def|PronType=Dem	12	det	_	Translit=n|LTranslit=n|Gloss=that
14	ոչ	ոչ	PART	_	Polarity=Neg	15	advmod	_	Translit=očʻ|LTranslit=očʻ|Gloss=not
15	առնէք	առնեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No|Translit=aṙnēkʻ|LTranslit=aṙnem|Gloss=make
16	:	:	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


