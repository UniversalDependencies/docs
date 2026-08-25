---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Armenian uses a combination of oblique morphological cases and adpositions to express semantic case. Adpositions are treated as dependents of the nouns they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ conllu
# visual-style 4 3 case color:blue
1	Հինգ	հինգ	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	Translit=Hing|LTranslit=hing
2	վայրկեանի	վայրկեան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	obl	_	Translit=vayrkeani|LTranslit=vayrkean
3	չափ	չափ	ADP	_	AdpType=Post	2	case	_	Translit=čap’|LTranslit=čap’
4	անցաւ	անցնիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=anc’aw|LTranslit=anc’nil|SpaceAfter=No
5	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 2 3 case color:blue
1	Ոտքին	ոտք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	2	nmod:poss	_	Translit=Otk’in|LTranslit=otk’
2	ծայրերուն	ծայր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	4	obl	_	Translit=çayrerown|LTranslit=çayr
3	վրայ	վրայ	ADP	_	AdpType=Post	2	case	_	Translit=vray|LTranslit=vray
4	կոխելով	կոխել	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	advcl	_	Translit=koxelov|LTranslit=koxel
5	գնաց	երթալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=gnac’|LTranslit=ert’al
6	նստիլ	նստիլ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	5	xcomp	_	Translit=nstil|LTranslit=nstil
7	անկողնին	անկողին	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	8	nmod:poss	_	Translit=ankoġnin|LTranslit=ankoġin
8	եզրը	եզր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	obl	_	Translit=ezrë|LTranslit=ezr
~~~

We also use `case` for certain case-marking elements that are treated as separate syntactic words and historically derive from a closed set of nouns, adjectives/participles, or adverbs. These elements, traditionally known as “adpositional words”, are treated as dependents of the noun or clause they attach to or introduce and are tagged [ADP](). When they retain their basic lexical function rather than functioning as adpositions, they are tagged and annotated according to that function.

~~~ conllu
# visual-style 1 2 case color:blue
1	Խօսակցութեան	խօսակցութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	obl	_	Translit=Xòsakc’owt’ean|LTranslit=xòsakc’owt’iwn
2	միջոցին	միջոցին	ADP	_	AdpType=Post	1	case	_	Translit=miǰoc’in|LTranslit=miǰoc’in|SpaceAfter=No
3	՝	՝	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
4	Թորգոմ	Թորգոմ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	5	nsubj	_	Translit=T’orgom|LTranslit=T’orgom
5	յայտնեց	յայտնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=yaytnec’|LTranslit=yaytnel
~~~

~~~ conllu
# visual-style 2 3 case color:blue
1	Այս	այս	DET	_	Deixis=Prox|PronType=Dem	2	det	_	Translit=Ays|LTranslit=ays
2	տրամադրութեան	տրամադրութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	obl	_	Translit=tramadrowt’ean|LTranslit=tramadrowt’iwn
3	ներքեւ	ներքեւ	ADP	_	AdpType=Post	2	case	_	Translit=nerk’ew|LTranslit=nerk’ew
4	գտնուող	գտնուիլ	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	5	acl	_	Translit=gtnowoġ|LTranslit=gtnowil
5	մէկու	մէկ	PRON	_	Case=Dat|Definite=Ind|PronType=Ind	9	obl	_	Translit=mēkow|LTranslit=mēk
6	մը	մը	DET	_	PronType=Art	5	det	_	Translit=më|LTranslit=më
7	հետ	հետ	ADP	_	AdpType=Post	5	case	_	Translit=het|LTranslit=het
8	ճամբայ	ճամբայ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	compound:lvc	_	Translit=č̣ambay|LTranslit=č̣ambay
9	քալելը	քալել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	11	csubj	_	Translit=k’alelë|LTranslit=k’alel
10	հաճելի	հաճելի	ADJ	_	Degree=Pos	11	amod	_	Translit=hač̣eli|LTranslit=hač̣eli
11	բան	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=ban|LTranslit=ban
12	մը	մը	DET	_	PronType=Art	11	det	_	Translit=më|LTranslit=më
13	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	11	cop	_	Translit=čēr|LTranslit=em|SpaceAfter=No
~~~

Some inflected postpositions / localizers (traditionally known as “improper adpositions”), are labeled with [case:loc]() instead.

<!-- Interlanguage links updated Út 30. června 2026, 10:59:44 CEST -->
