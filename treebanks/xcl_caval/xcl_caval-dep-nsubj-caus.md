---
layout: base
title:  'Statistics of nsubj:caus in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="xcl_caval-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="xcl_caval-dep-nsubj-pass.html">nsubj:pass</a></tt>.

15 nodes (0%) are attached to their parents as `nsubj:caus`.

10 instances of `nsubj:caus` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.93333333333333.

The following 3 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (9; 60% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PRON.html">PRON</a></tt> (4; 27% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PROPN.html">PROPN</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:caus	color:blue
1	Եւ	եւ	CCONJ	_	_	3	cc	_	Translit=Ew|LTranslit=ew|Gloss=and
2	նա	նա	PRON	_	Case=Nom|Number=Sing|PronType=Dem	3	nsubj	_	Translit=na|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
3	ասէ	ասեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=asē|LTranslit=asem|Gloss=say
4	ց	ց	ADP	_	_	5	case	_	SpaceAfter=No|Translit=cʻ|LTranslit=cʻ|Gloss=to
5	կին	կին	NOUN	_	Case=Acc|Number=Sing	3	obl	_	SpaceAfter=No|Translit=kin|LTranslit=kin|Gloss=woman
6	ն	ն	DET	_	Definite=Def|PronType=Dem	5	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
7	՝	՝	PUNCT	_	_	10	punct	_	Translit=;|LTranslit=;
8	հաւատք	հաւատք	NOUN	_	Case=Nom|Number=Plur	10	nsubj:caus	_	Translit=hawatkʻ|LTranslit=hawatkʻ|Gloss=belief
9	քո	դու	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	8	nmod	_	Translit=kʻo|LTranslit=dow|Gloss=you_(sg.)
10	կեցուցին	կեցուցանեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	3	ccomp	_	Translit=kecʻowcʻin|LTranslit=kecʻowcʻanem|Gloss=save
11	զ	զ	DET	_	Definite=Def	12	det	_	SpaceAfter=No|Translit=z|LTranslit=z
12	քեզ	դու	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	10	obj	_	SpaceAfter=No|Translit=kʻez|LTranslit=dow|Gloss=you_(sg.)
13	.	.	PUNCT	_	_	14	punct	_	Translit=:|LTranslit=:
14	երթ	երթամ	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	10	conj	_	Translit=ertʻ|LTranslit=ertʻam|Gloss=go
15	ի	ի	ADP	_	_	16	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
16	խաղաղութիւն	խաղաղութիւն	NOUN	_	Case=Acc|Number=Sing	14	obl	_	SpaceAfter=No|Translit=xałałowtʻiwn|LTranslit=xałałowtʻiwn|Gloss=peace
17	:	:	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:caus	color:blue
1	եւ	եւ	CCONJ	_	_	10	cc	_	Translit=ew|LTranslit=ew|Gloss=and
2	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	3	nsubj:caus	_	Translit=or|LTranslit=or|LId=որ-1|Gloss=which
3	կորուսցէ	կորուսանեմ	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	10	csubj:caus	_	Translit=korowscʻē|LTranslit=korowsanem|Gloss=destroy
4	զ	զ	DET	_	Definite=Def	5	det	_	SpaceAfter=No|Translit=z|LTranslit=z
5	անձն	անձն	NOUN	_	Case=Acc|Number=Sing	3	obj	_	Translit=anjn|LTranslit=anjn|Gloss=person/soul
6	իւր	իւր	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	5	nmod	_	Translit=iwr|LTranslit=iwr|LId=իւր-2|Gloss=oneself
7	վասն	վասն	ADP	_	_	8	case	_	Translit=vasn|LTranslit=vasn|Gloss=about/because_of
8	իմ	ես	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	3	obl	_	SpaceAfter=No|Translit=im|LTranslit=es|Gloss=I
9	.	.	PUNCT	_	_	3	punct	_	Translit=:|LTranslit=:
10	կեցուսցէ	կեցուցանեմ	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Cau	0	root	_	Translit=kecʻowscʻē|LTranslit=kecʻowcʻanem|Gloss=save
11	զ	զ	DET	_	Definite=Def	12	det	_	SpaceAfter=No|Translit=z|LTranslit=z
12	նա	նա	PRON	_	Case=Acc|Number=Sing|PronType=Dem	10	obj	_	SpaceAfter=No|Translit=na|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
13	:	:	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 nsubj:caus	color:blue
1	Իսկ	իսկ	PART	_	_	26	orphan	_	Translit=Isk|LTranslit=isk|Gloss=but
2	եթե	եթե	SCONJ	_	_	20	mark	_	Translit=etʻe|LTranslit=etʻe|LId=եթե-1|Gloss=whether
3	զ	զ	DET	_	Definite=Def	4	det	_	SpaceAfter=No|Translit=z|LTranslit=z
4	խոտ	խոտ	NOUN	_	Case=Acc|Number=Sing	20	obj	_	SpaceAfter=No|Translit=xot|LTranslit=xot|Gloss=grass
5	ն	ն	DET	_	Definite=Def|PronType=Dem	4	det	_	Translit=n|LTranslit=n|Gloss=that
6	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	9	nsubj	_	Translit=or|LTranslit=or|LId=որ-1|Gloss=which
7	այսաւր	այսաւր	ADV	_	_	9	advmod	_	Translit=aysawr|LTranslit=aysawr|Gloss=today
8	ի	ի	ADP	_	_	9	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
9	բացի	բաց	NOUN	_	Case=Loc|Number=Sing	4	acl	_	Translit=bacʻi|LTranslit=bacʻ
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em|Gloss=be
11	՝	՝	PUNCT	_	_	16	punct	_	Translit=;|LTranslit=;
12	եւ	եւ	CCONJ	_	_	16	cc	_	Translit=ew|LTranslit=ew|Gloss=and
13	վաղիւ	վաղիւ	ADV	_	_	16	advmod	_	Translit=vałiw|LTranslit=vałiw|LId=վաղիւ-1|Gloss=next_day
14	ի	ի	ADP	_	_	15	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
15	հնոց	հնոց	NOUN	_	Case=Acc|Number=Sing	16	obl	_	Translit=hnocʻ|LTranslit=hnocʻ|Gloss=furnace
16	արկանելի	արկանելի	ADJ	_	Case=Nom|Number=Sing	9	conj	_	SpaceAfter=No|Translit=arkaneli|LTranslit=arkaneli|Gloss=robe
17	.	.	PUNCT	_	_	4	punct	_	Translit=:|LTranslit=:
18	Աստուած	Աստուած	PROPN	_	Case=Nom|Number=Sing	20	nsubj:caus	_	Translit=Astowac|LTranslit=Astowac|Gloss=Astowac
19	այնպէս	այնպէս	ADV	_	PronType=Dem	20	advmod	_	Translit=aynpēs|LTranslit=aynpēs|Gloss=this_way
20	զգեցուցանէ	զգեցուցանեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Cau	26	orphan	_	SpaceAfter=No|Translit=zgecʻowcʻanē|LTranslit=zgecʻowcʻanem|Gloss=wear
21	.	.	PUNCT	_	_	20	punct	_	Translit=:|LTranslit=:
22	որչափ	որչափ	ADV	_	PronType=Rel	24	mark	_	Translit=orčʻapʻ|LTranslit=orčʻapʻ|Gloss=how_much
23	եւս	եւս	ADV	_	_	22	advmod	_	Translit=ews|LTranslit=ews|Gloss=again
24	առաւել	առաւել	ADV	_	_	26	orphan	_	Translit=aṙawel|LTranslit=aṙawel|Gloss=more
25	զ	զ	DET	_	Definite=Def	26	orphan	_	SpaceAfter=No|Translit=z|LTranslit=z
26	ձեզ	դուք	PRON	_	Case=Acc|Number=Plur|Person=2|PronType=Prs	0	root	_	Translit=jez|LTranslit=dowkʻ|Gloss=you_(pl)
27	թերահաւատք	թերահաւատ	ADJ	_	Case=Nom|Number=Plur	26	orphan	_	SpaceAfter=No|Translit=tʻerahawatkʻ|LTranslit=tʻerahawat|Gloss=skeptical
28	:	:	PUNCT	_	_	26	punct	_	Translit=.|LTranslit=.

~~~


