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

~~~ conllu
# visual-style 2 4 flat:redup color:blue
1	Նույնիսկ	նույնիսկ	PART	_	_	2	discourse	_	Translit=Nowynisk|LTranslit=nowynisk
2	վախենալ	վախենալ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	0	root	_	Translit=vaxenal|LTranslit=vaxenal|SpaceAfter=No
3	/	/	PUNCT	_	_	4	punct	_	Translit=/|LTranslit=/|SpaceAfter=No
4	չվախենալու	վախենալ	VERB	_	Case=Dat|Definite=Ind|Polarity=Neg|Subcat=Intr|VerbForm=Inf|Voice=Mid	2	flat:redup	_	Translit=čvaxenalow|LTranslit=vaxenal
5	միջև	միջև	ADP	_	AdpType=Post	2	case	_	Translit=miǰew|LTranslit=miǰew|SpaceAfter=No
6	:	:	PUNCT	_	Foreign=Yes	2	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 2 4 flat:redup color:blue
1	տան	տուն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	Translit=tan|LTranslit=town
2	եղած	եղած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	Translit=eġaç|LTranslit=eġaç|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	չեղածը	չեղած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	flat:redup	_	Translit=čeġaçë|LTranslit=čeġaç
5	ապառիկով	ապառիկ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	7	obl	_	Translit=apaṙikov|LTranslit=apaṙik
6	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=em|LTranslit=em
7	առնում	առնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=aṙnowm|LTranslit=aṙnel|SpaceAfter=No
~~~

~~~ conllu
# visual-style 1 3 flat:redup color:blue
1	Կողք	կողք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	Translit=Koġk’|LTranslit=koġk’|SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
3	կողքի	կողք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	1	flat:redup	_	Translit=koġk’i|LTranslit=koġk’
4	քայլող	քայլել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	5	acl	_	Translit=k’ayloġ|LTranslit=k’aylel
5	շան	շուն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	8	nmod:poss	_	Translit=šan|LTranslit=šown
6	և	և	CCONJ	_	_	7	cc	_	Translit=ew|LTranslit=ew
7	տիրոջ	տեր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	5	conj	_	Translit=tiroǰ|LTranslit=ter
8	քայլվածքները	քայլվածք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	9	nsubj	_	Translit=k’aylvaçk’nerë|LTranslit=k’aylvaçk’
9	նման	նման	ADJ	_	_	0	root	_	Translit=nman|LTranslit=nman
10	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	9	cop	_	Translit=ēin|LTranslit=em|SpaceAfter=No
11	։	։	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 1 3 flat:redup color:blue
1	հնարավոր	հնարավոր	ADJ	_	_	0	root	_	Translit=hnaravor|LTranslit=hnaravor
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em
3	թռիչքաձև	թռիչքաձև	ADV	_	_	4	advmod	_	Translit=t’ṙičk’ajew|LTranslit=t’ṙičk’ajew
4	անցնել	անցնել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	1	csubj	_	Translit=anc’nel|LTranslit=anc’nel
5	աշխարհից	աշխարհ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	4	obl	_	Translit=ašxarhic’|LTranslit=ašxarh
6	աշխարհ	աշխարհ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	flat:redup	_	Translit=ašxarh|LTranslit=ašxarh|SpaceAfter=No
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:11 CEST -->
