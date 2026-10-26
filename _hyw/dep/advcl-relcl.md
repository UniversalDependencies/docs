---
layout: relation
title: 'advcl:relcl'
shortdef: 'relative clause modifier of the clause'
udver: '2'
---

The `advcl:relcl` relation applies to a relative clause that modifies a clause (as opposed to typical relative clauses, which are adnominal and use [acl:relcl]()).

~~~ conllu
# visual-style 4 1 advcl:relcl color:blue
1	Հիմա	հիմա	ADV	_	_	11	advmod	_	Translit=Hima|LTranslit=hima
2	երբ	երբ	ADV	_	PronType=Rel	4	advmod	_	Translit=erb|LTranslit=erb
3	գէշ	գէշ	ADJ	_	Degree=Pos	4	amod	_	Translit=gēš|LTranslit=gēš
4	վիճակի	վիճակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	1	advcl:relcl	_	Translit=vič̣aki|LTranslit=vič̣ak
5	մէջ	մէջ	ADP	_	AdpType=Post	4	case	_	Translit=mēǰ|LTranslit=mēǰ
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
8-9	ատելի՞	_	_	_	_	_	_	_	Translit=ateli?
8	ատելի	ատելի	ADJ	_	_	11	xcomp	_	Translit=ateli|LTranslit=ateli
9	՞	՞	PUNCT	_	_	8	punct	_	Translit=?|LTranslit=?
10	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	11	aux	_	Translit=piti|LTranslit=piti
11	դառնայ	դառնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=daṙnay|LTranslit=daṙnal|SpaceAfter=No
12	:	:	PUNCT	_	Foreign=Yes	11	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 8 3 advcl:relcl color:blue
1	Ինչպէս	ինչպէս	ADV	_	PronType=Rel	3	advmod:emph	_	Translit=Inčpēs|LTranslit=inčpēs
2	ամէն	ամէն	DET	_	ExtPos=DET|PronType=Tot	3	det	_	Translit=amēn|LTranslit=amēn
3	լուսանկարչատուն	լուսանկարչատուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	advcl:relcl	_	Translit=lowsankarčatown|LTranslit=lowsankarčatown|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
5	այս	այս	PRON	_	Deixis=Prox|PronType=Dem	8	nsubj	_	Translit=ays|LTranslit=ays
6	ալ	ալ	ADV	_	_	5	advmod:emph	_	Translit=al|LTranslit=al
7	ծայրայեղօրէն	ծայրայեղօրէն	ADV	_	_	8	advmod	_	Translit=çayrayeġòrēn|LTranslit=çayrayeġòrēn
8	խճողուած	խճողուիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=xč̣oġowaç|LTranslit=xč̣oġowil
9	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	8	aux	_	Translit=ēr|LTranslit=em
10	ամէն	ամէն	DET	_	ExtPos=DET|PronType=Tot	11	det	_	Translit=amēn|LTranslit=amēn
11	տեսակ	տեսակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	12	nmod	_	Translit=tesak|LTranslit=tesak
12	նկարներով	նկար	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	8	obl	_	Translit=nkarnerov|LTranslit=nkar|SpaceAfter=No
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:32 CEST -->
