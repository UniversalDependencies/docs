---
layout: relation
title: 'conj:svc'
shortdef: 'coordination of serial verbs'
udver: '2'
---

Similarly to [advcl:svc](), `conj:svc` connects a purpose (or destination activity) with a motion
verb. However, here the syntactic construction is coordination rather than adverbial infinitive.

~~~ conllu
# visual-style 10 14 conj:svc color:green
# sent_id = 1gno
# text = Та Платон Іларіонович не витримує і каже: «Пішли, козаче, покажеш мені, де той полин!»
# translit = Ta Platon Ilarionovyč ne vytrymuě i kaže: «Pišly, kozače, pokažeš meni, de toj polyn!»
1	Та	та	CCONJ	Ccs	_	5	cc	_	Id=1gnp|LTranslit=ta|Translit=Ta
2	Платон	Платон	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	_	Id=1gnq|LTranslit=Platon|Translit=Platon
3	Іларіонович	Іларіонович	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	2	flat:name	_	Id=1gnr|LTranslit=Ilarionovyč|Translit=Ilarionovyč
4	не	не	PART	Q	Polarity=Neg	5	advmod	_	Id=1gns|LTranslit=ne|Translit=ne
5	витримує	витримувати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=1gnt|LTranslit=vytrymuvaty|Translit=vytrymuě
6	і	і	CCONJ	Ccs	_	7	cc	_	Id=1gnu|LTranslit=i|Translit=i
7	каже	казати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	Id=1gnv|LTranslit=kazaty|SpaceAfter=No|Translit=kaže
8	:	:	PUNCT	U	_	10	punct	_	Id=1gnw|LTranslit=:|Translit=:
9	«	«	PUNCT	U	PunctType=Quot	10	punct	_	Id=1gnx|LTranslit=«|SpaceAfter=No|Translit=«
10	Пішли	піти	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	5	parataxis	_	Id=1gny|LTranslit=pity|SpaceAfter=No|Translit=Pišly
11	,	,	PUNCT	U	_	12	punct	_	Id=1gnz|LTranslit=,|Translit=,
12	козаче	козак	NOUN	Ncmsvy	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	10	vocative	_	Id=1go0|LTranslit=kozak|SpaceAfter=No|Translit=kozače
13	,	,	PUNCT	U	_	12	punct	_	Id=1go1|LTranslit=,|Translit=,
14	покажеш	показати	VERB	Vmeif2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	10	conj:svc	_	Id=1go2|LTranslit=pokazaty|Translit=pokažeš
15	мені	я	PRON	Pp-1-ysdn	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	14	iobj	_	Id=1go3|LTranslit=ja|SpaceAfter=No|Translit=meni
16	,	,	PUNCT	U	_	17	punct	_	Id=1go4|LTranslit=,|Translit=,
17	де	де	ADV	Pr------r	PronType=Rel	14	ccomp	_	Id=1go5|LTranslit=de|Translit=de
18	той	той	DET	Pd--m-sna	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	19	det	_	Id=1go6|LTranslit=toj|Translit=toj
19	полин	полин	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	Id=1go7|LTranslit=polyn|SpaceAfter=No|Translit=polyn
20	!	!	PUNCT	U	_	10	punct	_	Id=1go8|LTranslit=!|SpaceAfter=No|Translit=!
21	»	»	PUNCT	U	PunctType=Quot	10	punct	_	Id=1go9|LTranslit=»|Translit=»

~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->
