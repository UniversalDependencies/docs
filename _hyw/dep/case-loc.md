---
layout: relation
title: 'case:loc'
shortdef: 'postpositional localizer'
udver: '2'
---

We treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers. (See [ADP]() for a list of localizers.)

The head of the localizer is the noun or the main verb of the clause preceding it. Localizers are always tagged `ADP`.
When it follows a noun, it receives the `case:loc` relation label. But if it follows a verb and acts as an adverbial,
it receives the [obl]() relation (but retains the tag `ADP`).

~~~ conllu
# visual-style 4 5 case:loc color:blue
text = Կաւի տեղերուն կապոյտ հողերուն վրայէն մէկը կը վազէր դարվեր:
# translit = Kawi teġerown kapoyt hoġerown vrayēn mēkë kë vazēr darver.
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
# visual-style 5 6 advcl:relcl color:blue
# sent_id = nonfiction-000I-000R01BN
# text = Վերադարձ՝ ձիւնով ծածկուած դաշտերու մէջէն։
# translit = Veradarj, jiwnov çaçkowaç dašterow mēǰēn.
1	Վերադարձ	վերադարձ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Veradarj|LTranslit=veradarj|SpaceAfter=No
2	՝	՝	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
3	ձիւնով	ձիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	4	obl	_	Translit=jiwnov|LTranslit=jiwn
4	ծածկուած	ծածկուիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	5	acl	_	Translit=çaçkowaç|LTranslit=çaçkowil
5	դաշտերու	դաշտ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	1	nmod:npmod	_	Translit=dašterow|LTranslit=dašt
6	մէջէն	մէջ	ADP	_	AdpType=Post|Case=Abl|Definite=Def	5	case:loc	_	Translit=mēǰēn|LTranslit=mēǰ|SpaceAfter=No
7	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:16 CET 2020 -->
