---
layout: relation
title: 'flat:redup'
shortdef: 'reduplication'
udver: '2'
---

This relation is used generally for reduplicating constructions in Western Armenian. We consider the case of a reduplication only when the same word is repeated in a sequence, all of the repetitions having the same function and head in the clause, often with no other words belonging to other phrases intervening. This allows for intermediate elements like conjunctions, adpositions, punctuation or the reduplicated elements' own dependents.
Reduplication is a common process especially for [adverbs](ADV) and [adjectives](ADJ), but it is also used for reduplicated [noun](NOUN) and [verb](VERB) forms. They can have additional feature of [Echo]().

~~~ conllu
# visual-style 1 3 flat:redup color:blue
1	Քիչ	քիչ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	obl	_	Translit=K’ič|LTranslit=k’ič
2	առ	առ	ADP	_	AdpType=Prep	3	case	_	Translit=aṙ|LTranslit=aṙ
3	քիչ	քիչ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	flat:redup	_	Translit=k’ič|LTranslit=k’ič
4	ձայներնին	ձայն	NOUN	_	Animacy=Nhum|Case=Nom|Number[psor]=Plur|Person[psor]=3	6	nsubj	_	Translit=jaynernin|LTranslit=jayn
5	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	6	aux	_	Translit=kë|LTranslit=kë
6	բարձրանայ	բարձրանալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=barjranay|LTranslit=barjranal
~~~

~~~ conllu
# visual-style 2 4 flat:redup color:blue
1	Շարունակեց	շարունակել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=Šarownakec’|LTranslit=šarownakel
2	լաւ	լաւ	ADV	_	_	6	advmod	_	Translit=law|LTranslit=law|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	վատ	վատ	ADV	_	_	2	flat:redup	_	Translit=vat|LTranslit=vat
5	վառարանագործութեամբ	վառարանագործութիւն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	6	obl	_	Translit=vaṙaranagorçowt’eamb|LTranslit=vaṙaranagorçowt’iwn
6	զբաղիլ	զբաղիլ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	1	xcomp	_	Translit=zbaġil|LTranslit=zbaġil|SpaceAfter=No
7	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 4 6 flat:redup color:blue
1	Մեծի	մեծ	ADJ	_	Style=Arch	2	amod	_	Translit=Meçi|LTranslit=meç
2	Տանն	տուն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	Translit=Tann|LTranslit=town
3	Կիլիկիոյ	Կիլիկիա	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	8	nmod:poss	_	Translit=Kilikioy|LTranslit=Kilikia
4	Տ	տ.	NOUN	_	Abbr=Yes|Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	8	nmod	_	Translit=T|LTranslit=t.|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.|SpaceAfter=No
6	Տ	տ.	NOUN	_	Abbr=Yes|Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	4	flat:redup	_	Translit=T|LTranslit=t.|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.
8	Արամ	Արամ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	16	nsubj	_	Translit=Aram|LTranslit=Aram
9	Ա	Ա.	ADJ	_	NumForm=Armenian|NumType=Ord	8	flat:name	_	Translit=A|LTranslit=A.|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.
11	Կաթողիկոսը	կաթողիկոս	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	8	flat:name	_	Translit=Kat’oġikosë|LTranslit=kat’oġikos
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:52 CEST -->
