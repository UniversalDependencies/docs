---
layout: relation
title: 'case:loc'
shortdef: 'postpositional localizer'
udver: '2'
---

We treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers. See [ADP]() for a list of localizers.

A localizer is attached either to the noun it follows or directly to the main verb of the clause. Localizers are always tagged `ADP`. When a localizer follows a noun and functions as its adposition, it is attached to the noun with the `case:loc` relation. When it occurs independently as an adverbial modifier of a verb, it is attached directly to the predicate with the [obl]() relation, while retaining the `ADP` tag. 

~~~ conllu
# visual-style 4 5 case:loc color:blue
1	Կաւի	կաւ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	Translit=Kawi|LTranslit=kaw
2	տեղերուն	տեղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	4	nmod:poss	_	Translit=teġerown|LTranslit=teġ
3	կապոյտ	կապոյտ	ADJ	_	Degree=Pos	4	amod	_	Translit=kapoyt|LTranslit=kapoyt
4	հողերուն	հող	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	8	obl	_	Translit=hoġerown|LTranslit=hoġ
5	վրայէն	վրայ	ADP	_	AdpType=Post|Case=Abl|Definite=Def	4	case:loc	_	Translit=vrayēn|LTranslit=vray
6	մէկը	մէկը	PRON	_	Case=Nom|PronType=Ind	8	nsubj	_	Translit=mēkë|LTranslit=mēkë
7	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	8	aux	_	Translit=kë|LTranslit=kë
8	վազէր	վազել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=vazēr|LTranslit=vazel
9	դարվեր	դարվեր	ADV	_	_	8	advmod	_	Translit=darver|LTranslit=darver|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	8	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 5 6 case:loc color:blue
# translit = Veradarj, jiwnov çaçkowaç dašterow mēǰēn.
1	Վերադարձ	վերադարձ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Veradarj|LTranslit=veradarj|SpaceAfter=No
2	՝	՝	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
3	ձիւնով	ձիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	4	obl	_	Translit=jiwnov|LTranslit=jiwn
4	ծածկուած	ծածկուիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	5	acl	_	Translit=çaçkowaç|LTranslit=çaçkowil
5	դաշտերու	դաշտ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	1	nmod:npmod	_	Translit=dašterow|LTranslit=dašt
6	մէջէն	մէջ	ADP	_	AdpType=Post|Case=Abl|Definite=Def	5	case:loc	_	Translit=mēǰēn|LTranslit=mēǰ|SpaceAfter=No
7	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 13 14 obl color:blue
1	Թեթեւ	թեթեւ	ADJ	_	Degree=Pos	2	amod	_	Translit=T’et’ew|LTranslit=t’et’ew
2	կարմրութիւն	կարմրութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	Translit=karmrowt’iwn|LTranslit=karmrowt’iwn
3	մը	մը	DET	_	PronType=Art	2	det	_	Translit=më|LTranslit=më
4	գունաւորեց	գունաւորել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=gownaworec’|LTranslit=gownaworel
5	տիկնոջ	տիկին	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	Translit=tiknoǰ|LTranslit=tikin
6	այտերը	այտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	4	obj	_	Translit=ayterë|LTranslit=ayt|SpaceAfter=No
7	.	.	PUNCT	_	_	13	punct	_	Translit=.|LTranslit=.
8	ըմբոստ	ըմբոստ	ADJ	_	Degree=Pos	9	amod	_	Translit=ëmbost|LTranslit=ëmbost
9	շարժումով	շարժում	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	13	obl	_	Translit=šaržowmov|LTranslit=šaržowm
10	մը	մը	DET	_	PronType=Art	9	det	_	Translit=më|LTranslit=më
11	շալը	շալ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	13	obj	_	Translit=šalë|LTranslit=šal
12	բոլորովին	բոլորովին	ADV	_	_	13	advmod:emph	_	Translit=bolorovin|LTranslit=bolorovin
13	նետեց	նետել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	Translit=netec’|LTranslit=netel
14	վրայէն	վրայ	ADP	_	AdpType=Post|Case=Abl|Definite=Def	13	obl	_	Translit=vrayēn|LTranslit=vray
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:45 CEST -->
