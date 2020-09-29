---
layout: relation
title: 'parataxis:rel'
shortdef: 'relative clause for clauses'
udver: '2'
---

`parataxis:rel` stands for clauses relative to the whole upper clause, that is, instead of referring to a particular noun, the relativizer refers to the **predication** in a higher clause.

~~~ conllu
# visual-style 4 10 parataxis:rel color:green
1	Ім'я	ім’я	NOUN	Ncnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	Id=25r5|LTranslit=imja|Translit=Imja
2	Волтера	Волтер	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	1	nmod	_	Id=25r6|LTranslit=Volter|Translit=Voltera
3	Вайта	Вайт	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	2	flat:name	_	Id=25r7|LTranslit=Vajt|Translit=Vajta
4	нагадує	нагадувати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=25r8|LTranslit=nahaduvaty|Translit=nahaduě
5	поета	поет	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	Id=25r9|LTranslit=poet|Translit=poeta
6	Волта	Волт	PROPN	Npmsay	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	5	flat:title	_	Id=25ra|LTranslit=Volt|Translit=Volta
7	Вітмена	Вітмен	PROPN	Npmsay	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing	6	flat:name	_	Id=25rb|LTranslit=Vitmen|SpaceAfter=No|Translit=Vitmena
8	,	,	PUNCT	U	_	10	punct	_	Id=25rc|LTranslit=,|Translit=,
9	що	що	PRON	Pr--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	10	nsubj	_	Id=25rd|LTranslit=ščo|Translit=ščo
10	відіграло	відіграти	VERB	Vmeis-sn	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	4	parataxis:rel	_	Id=25re|LTranslit=vidihraty|Translit=vidihralo
11	важливу	важливий	ADJ	Afpfsas	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	Id=25rf|LTranslit=važlyvyj|Translit=važlyvu
12	роль	роль	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	10	obj	_	Id=25rg|LTranslit=roľ|Translit=roľ
13	у	у	ADP	Spsl	Case=Loc	14	case	_	Id=25rh|LTranslit=u|Translit=u
14	сюжеті	сюжет	NOUN	Ncmsln	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	12	nmod	_	Id=25ri|LTranslit=śužet|SpaceAfter=No|Translit=śužeti
15	.	.	PUNCT	U	_	4	punct	_	Id=25rq|LTranslit=.|Translit=.

# visual-style 4 10 parataxis:rel color:green
1	[The]-name	_	_	_	_	0	root	_	_
2	of-Walter	_	_	_	_	0	root	_	_
3	White	_	_	_	_	0	root	_	_
4	reminds	_	_	_	_	0	root	_	_
5	of-poet	_	_	_	_	0	root	_	_
6	Walt	_	_	_	_	0	root	_	_
7	Whitman	_	_	_	_	0	root	_	_
8	,	_	_	_	_	0	root	_	_
9	which	_	_	_	_	0	root	_	_
10	played	_	Gender=Neut	_	_	4	parataxis:rel	_	_
11	[an]-important	_	_	_	_	0	root	_	_
12	role	_	_	_	_	0	root	_	_
13	in	_	_	_	_	0	root	_	_
14	[the]-plot	_	_	_	_	0	root	_	_
15	.	_	_	_	_	0	root	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:32:01 CEST 2020 -->
