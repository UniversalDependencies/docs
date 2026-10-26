---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between a nominal predicate _(ստորոգելի)_ and the copular verb _<b>եմ</b>_ “to be”. The verbs _դառնալ_/_daṙnal_ “to become”, _թուալ_/_tʼowal_ “to seem”, _երեւալ_/_erewal_ “to appear”, _ձեւանալ_/_jewanal_ “to  pretend”, _մնալ_/_mnal_ “to  stay”, _հաշուել_/_hašowel_ “to  consider” etc., despite being counted among copular verbs by some authors, are not analyzed as `cop`.

We normally take a copula as a dependent of its complement, i.e. the nominal predicate.
The nominal predicate is usually a [noun](NOUN), a [pronoun](PRON), an [adjective](ADJ), an [adverb](ADV), or an <a href="../feat/VerbForm.html#inf-infinitive">infinitive</a>.
Note that copulas are also tagged `AUX`.

~~~ conllu
# visual-style 3 5 cop color:blue
1	Հայրենիքը	հայրենիք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	Translit=Hayrenik’ë|LTranslit=hayrenik’
2	արձակուրդի	արձակուրդ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	Translit=arjakowrdi|LTranslit=arjakowrd
3	հանգրուան	հանգրուան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=hangrowan|LTranslit=hangrowan
4	մը	մը	DET	_	PronType=Art	3	det	_	Translit=më|LTranslit=më
5	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=čē|LTranslit=em
~~~

~~~ conllu
# visual-style 1 2 cop color:blue
1	Աս	աս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	0	root	_	Translit=As|LTranslit=as
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
4	որ	որ	SCONJ	_	_	7	mark	_	Translit=or|LTranslit=or
5	ըսել	ըսել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	7	xcomp	_	Translit=ësel|LTranslit=ësel
6	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	7	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
7	ուզէի	ուզել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	1	acl	_	Translit=owzēi|LTranslit=owzel|SpaceAfter=No
8	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 1 2 cop color:blue
1	Բնական	բնական	ADJ	_	_	4	parataxis	_	Translit=Bnakan|LTranslit=bnakan
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	պէտք	պէտք	ADJ	_	_	0	root	_	Translit=pētk’|LTranslit=pētk’
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	Translit=ē|LTranslit=em
6	պայքարիլ	պայքարիլ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	csubj	_	Translit=payk’aril|LTranslit=payk’aril
~~~

~~~ conllu
# visual-style 2 3 cop color:blue
1	Ժամը	ժամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	Translit=Žamë|LTranslit=žam
2	ուշ	ուշ	ADV	_	Degree=Pos	0	root	_	Translit=owš|LTranslit=owš
3	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	2	cop	_	Translit=ēr|LTranslit=em
~~~

~~~ conllu
# visual-style 5 6 cop color:blue
1	Գործնական	գործնական	ADJ	_	_	4	amod	_	Translit=Gorçnakan|LTranslit=gorçnakan
2	եւ	եւ	CCONJ	_	_	3	cc	_	Translit=ew|LTranslit=ew
3	ազդու	ազդու	ADJ	_	_	1	conj	_	Translit=azdow|LTranslit=azdow
4	այլընտրանք	այլընտրանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	Translit=aylëntrank’|LTranslit=aylëntrank’
5	առաջարկելն	առաջարկել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	Translit=aṙaǰarkeln|LTranslit=aṙaǰarkel
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	Translit=ē|LTranslit=em
7	մարտահրաւէրը	մարտահրաւէր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=martahrawērë|LTranslit=martahrawēr|SpaceAfter=No
8	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.
~~~

The nominal predicate may also be expressed using a prepositional phrase, in which the nominal part is the head of the clause.

~~~ conllu
# visual-style 3 6 cop color:blue
1	Երիտասարդները	երիտասարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	Translit=Eritasardnerë|LTranslit=eritasard
2	անորոշ	անորոշ	ADJ	_	Degree=Pos	3	amod	_	Translit=anoroš|LTranslit=anoroš
3	վիճակի	վիճակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	0	root	_	Translit=vič̣aki|LTranslit=vič̣ak
4	մը	մը	DET	_	PronType=Art	3	det	_	Translit=më|LTranslit=më
5	մէջ	մէջ	ADP	_	AdpType=Post	3	case	_	Translit=mēǰ|LTranslit=mēǰ
6	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=en|LTranslit=em
~~~

Phrases expressing the state of the subject are clear predicates, e.g. _դրամական ծանր վիճակի մէջ է_/_dramakan çanr vič̣aki mēǰ ē_ “he/she is in a tough financial situation”.
Under the v2 guidelines, (prepositional) phrases expressing locations are also considered predicates, to increase parallelism across languages.
Thus the following sentences receive parallel analyses:

- _Իր ընտանիքն ալ Սիվասէն էր_/_Ir ëntanikʼn al Sivasēn ēr_ “His/Her family was also from Sivas”
- _ամէն մարդ դեռ եկեղեցին էր այն պահուն_/_amēn mard deṙ ekeġecʼin ēr ayn pahown_ “everyone was still in church at that moment”
- _Ներկաներու շարքին էին..._/_Nerkanerow šarkʼin ēin..._ “Among those present were...”

In contrast, the following two are no longer parallel:

- _ձեռքը գործիքին վրայ էր_ “his hand was on the tool”
- _ձեռքը գործիքին վրայ մնաց_ “his hand remained (froze) on the tool”

~~~ conllu
# visual-style 4 5 cop color:blue
1	Իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp	2	det:poss	_	Translit=Ir|LTranslit=ir
2	ընտանիքն	ընտանիք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	Translit=ëntanik’n|LTranslit=ëntanik’
3	ալ	ալ	ADV	_	_	2	advmod:emph	_	Translit=al|LTranslit=al
4	Սիվասէն	Սիվաս	PROPN	_	Animacy=Nhum|Case=Abl|Definite=Def|NameType=Geo|Number=Sing	0	root	_	Translit=Sivasēn|LTranslit=Sivas
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	4	cop	_	Translit=ēr|LTranslit=em
~~~

~~~ conllu
# visual-style 2 3 cop color:blue
1	Ներկաներու	ներկայ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	2	nmod:poss	_	Translit=Nerkanerow|LTranslit=nerkay
2	շարքին	շարք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	0	root	_	Translit=šark’in|LTranslit=šark’
3	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	2	cop	_	Translit=ēin|LTranslit=em
~~~


Note, that there is variation for existential constructions with existential verb _կամ_ “be, exist” (see also [AUX]()):

~~~ conllu
# visual-style 6 2 obl color:blue
1	Իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp	2	det:poss	_	Translit=Ir|LTranslit=ir
2	գիրքին	գիրք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	6	obl	_	Translit=girk’in|LTranslit=girk’
3	մէջ	մէջ	ADP	_	AdpType=Post	2	case	_	Translit=mēǰ|LTranslit=mēǰ
4	ճնշում	ճնշում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	Translit=č̣nšowm|LTranslit=č̣nšowm
5	մը	մը	DET	_	PronType=Art	4	det	_	Translit=më|LTranslit=më
6	կայ	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=kay|LTranslit=kam
~~~

Compared to the bare copula:

~~~ conllu
# visual-style 3 5 cop color:blue
1	դրամական	դրամական	ADJ	_	_	3	amod	_	Translit=dramakan|LTranslit=dramakan
2	ծանր	ծանր	ADJ	_	Degree=Pos	3	amod	_	Translit=çanr|LTranslit=çanr
3	վիճակի	վիճակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	0	root	_	Translit=vič̣aki|LTranslit=vič̣ak
4	մէջ	մէջ	ADP	_	AdpType=Post	3	case	_	Translit=mēǰ|LTranslit=mēǰ
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=ē|LTranslit=em
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:55 CEST -->
