---
layout: relation
title: 'flat:redup'
shortdef: 'reduplication'
udver: '2'
---

This relation is used generally for reduplicating constructions in Armenian. We consider the case of a reduplication only when the same word is repeated in a sequence, all of the repetitions having the same function and head in the clause, often with no other words belonging to other phrases intervening. This allows for intermediate elements like conjunctions, adpositions, punctuation or the reduplicated elements' own dependents.
Reduplication is a common process especially for [adverbs](ADV) and [adjectives](ADJ), but it is also used for reduplicated [noun](NOUN) and [verb](VERB) forms. They can have additional feature of [Echo]().

~~~ conllu
# visual-style 8 10 flat:redup color:blue
1	Վերջին	վերջին	ADJ	_	Degree=Pos	2	amod	_	Translit=Verǰin|LTranslit=verǰin
2	ժամանակներս	ժամանակ	NOUN	_	Animacy=Nhum|Case=Nom|Deixis[psor]=Prox|Number=Plur	14	obl	_	Translit=žamanakners|LTranslit=žamanak
3	«	«	PUNCT	_	_	4	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
4	Նարեկի	Նարեկ	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Pro|Number=Sing	7	nmod:npmod	_	Translit=Nareki|LTranslit=Narek|SpaceAfter=No
5	»	»	PUNCT	_	_	4	punct	_	Translit=»|LTranslit=»
6	նկատմամբ	նկատմամբ	ADP	_	AdpType=Post	4	case	_	Translit=nkatmamb|LTranslit=nkatmamb
7	հետաքրքրությունն	հետաքրքրություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	14	nsubj	_	Translit=hetak’rk’rowt’yownn|LTranslit=hetak’rk’rowt’yown
8	ավելի	ավելի	ADV	_	Degree=Cmp	11	advmod	_	Translit=aveli|LTranslit=aveli
9	ու	ու	CCONJ	_	_	10	cc	_	Translit=ow|LTranslit=ow
10	ավելի	ավելի	ADV	_	Degree=Cmp	8	flat:redup	_	Translit=aveli|LTranslit=aveli
11	լայն	լայն	ADJ	_	Degree=Pos	12	amod	_	Translit=layn|LTranslit=layn
12	շրջանակներ	շրջանակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	14	obj	_	Translit=šrǰanakner|LTranslit=šrǰanak
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	aux	_	Translit=ē|LTranslit=em
14	նվաճում	նվաճել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=nvač̣owm|LTranslit=nvač̣el|SpaceAfter=No
15	:	:	PUNCT	_	Foreign=Yes	14	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 8 10 flat:redup color:blue
1	Նույն	նույն	DET	_	Deixis=Remt|PronType=Dem	5	det	_	Translit=Nowyn|LTranslit=nowyn
2	ճկուն	ճկուն	ADJ	_	Degree=Pos	5	amod	_	Translit=č̣kown|LTranslit=č̣kown
3	ու	ու	CCONJ	_	_	4	cc	_	Translit=ow|LTranslit=ow
4	թեթև	թեթև	ADJ	_	Degree=Pos	2	conj	_	Translit=t’et’ew|LTranslit=t’et’ew
5	տղան	տղա	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=tġan|LTranslit=tġa
6	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	5	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
8	գլոր	գլոր	ADV	_	_	12	compound:lvc	_	Translit=glor|LTranslit=glor|SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
10	մլոր	մլոր	ADV	_	Echo=Ech	8	flat:redup	_	Translit=mlor|LTranslit=mlor
11	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	12	aux	_	Translit=ēr|LTranslit=em
12	լինում	լինել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	5	conj	_	Translit=linowm|LTranslit=linel|SpaceAfter=No
~~~

~~~ conllu
# visual-style 2 4 flat:redup color:blue
1	Բանասերը	բանասեր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=Banaserë|LTranslit=banaser
2	քայլ	քայլ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obl	_	Translit=k’ayl|LTranslit=k’ayl
3	առ	առ	ADP	_	AdpType=Prep	4	case	_	Translit=aṙ|LTranslit=aṙ
4	քայլ	քայլ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	flat:redup	_	Translit=k’ayl|LTranslit=k’ayl
5	հետևում	հետևել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=hetewowm|LTranslit=hetewel
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=ē|LTranslit=em
7	Սունդուկյանի	Սունդուկյան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	11	nmod:poss	_	Translit=Sowndowkyani|LTranslit=Sowndowkyan|SpaceAfter=No
8	՝	՝	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
9	որպես	որպես	ADP	_	AdpType=Prep	10	case	_	Translit=orpes|LTranslit=orpes
10	գեղագետի	գեղագետ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	7	appos	_	Translit=geġageti|LTranslit=geġaget
11	զարգացման	զարգացում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	12	nmod:poss	_	Translit=zargac’man|LTranslit=zargac’owm
12	ընթացքին	ընթացք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Coll	5	iobj	_	Translit=ënt’ac’k’in|LTranslit=ënt’ac’k’|SpaceAfter=No
13	:	:	PUNCT	_	Foreign=Yes	5	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 2 4 flat:redup color:blue
1	«	«	PUNCT	_	_	2	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
2	Իզմայլովո	Իզմայլովո	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Oth|Number=Sing	4	nmod	_	Translit=Izmaylovo|LTranslit=Izmaylovo|SpaceAfter=No
3	»	»	PUNCT	_	_	2	punct	_	Translit=»|LTranslit=»
4	մարզադահլիճը	մարզադահլիճ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=marzadahlič̣ë|LTranslit=marzadahlič̣
5	լեփ	լեփ	ADJ	_	Echo=Ech	0	root	_	Translit=lep’|LTranslit=lep’|SpaceAfter=No
6	-	-	PUNCT	_	_	7	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
7	լեցուն	լեցուն	ADJ	_	_	5	flat:redup	_	Translit=lec’own|LTranslit=lec’own
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	Translit=ē|LTranslit=em
9	ծանրամարտի	ծանրամարտ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	10	nmod:poss	_	Translit=çanramarti|LTranslit=çanramart
10	երկրպագուներով	երկրպագու	NOUN	_	Animacy=Hum|Case=Ins|Definite=Ind|Number=Plur	5	obl	_	Translit=erkrpagownerov|LTranslit=erkrpagow
~~~

~~~ sdparse
Եղբայրները մեջք մեջքի կանգնած էին ։ \n The-brothers was standing back to-back .
compound:redup(մեջք, մեջքի)
compound:redup(back, to-back)
acl(կանգնած, մեջք)
acl(standing, back)
~~~

~~~ sdparse
Գիրքը ձեռքից ձեռք էր անցնում ։ \n The-book passed from-hand to-hand .
compound:redup(ձեռքից, ձեռք)
compound:redup(from-hand, to-hand)
obl(անցնում, ձեռքից)
obl(passed, from-hand)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:06 CEST -->
