---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The parataxis relation (from Greek for “place side by side”) is a relation between a word (often the main predicate of a sentence) and other elements, such as a sentential parenthetical or a clause after a “.” (Armenian colon) or a “—”, placed side by side without any explicit coordination, subordination, or argument relation with the head word. Parataxis is a discourse-like equivalent of coordination, and so usually obeys an iconic ordering. Hence it is normal for the first part of a sentence to be the head and the second part to be the parataxis dependent, regardless of the headedness properties of the language. But things do get more complicated, such as cases of parentheticals, which appear medially.

## An inventory of constructions to which parataxis has been applied

### Side-by-side sentences ("run-on sentences")

The parataxis relation is used for a pair of what could have been standalone sentences, but which are being treated together as a single sentence. This may happen because sentence segmentation of the sentence was done primarily following the presence of sentence-final punctuation, and these clauses are joined by punctuation such as a colon or comma, or not delimited by punctuation at all. Note that in Western Armnian, two coordinate clauses in a sentence can be separated with Armenian colon “.”. We do not use the [conj]() relation, but [parataxis]() to connect these clauses, if they are rather independent from each other semantically.

~~~ conllu
# visual-style 6 1 parataxis color:blue
1	Եկէք	գալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Plur|Person=2|Subcat=Intr|VerbForm=Fin|Voice=Mid	6	parataxis	_	Translit=Ekēk’|LTranslit=gal
2	շարունակենք	շարունակել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	1	xcomp	_	Translit=šarownakenk’|LTranslit=šarownakel|SpaceAfter=No
3	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.
4	քրտինքս	քրտինք	NOUN	_	Animacy=Nhum|Case=Nom|Number=Coll|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	Translit=k’rtink’s|LTranslit=k’rtink’
5	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	6	aux	_	Translit=kë|LTranslit=kë
6	հոսի	հոսիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=hosi|LTranslit=hosil
7	կոր	կոր	AUX	_	Aspect=Prog|Mood=Ind|Style=Coll	6	aux	_	Translit=kor|LTranslit=kor
~~~

### Paired clauses with non-conjunction connective ("X so Y" etc.)

The relation is also used for clauses connected by a word like *so*, *then*, *therefore*, or *however* if neither clause is interpreted as modifying the other, and there is no coordinating conjunction:

~~~ conllu
# visual-style 9 1 parataxis color:blue
1	Կարեւորը	կարեւոր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	parataxis	_	Translit=Kareworë|LTranslit=karewor|SpaceAfter=No
2	՝	՝	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
3	առանց	առանց	ADP	_	AdpType=Prep	6	case	_	Translit=aṙanc’|LTranslit=aṙanc’
4	հոսկէ	հոսկէ	ADV	_	Deixis=Prox|PronType=Dem	6	advmod	_	Translit=hoskē|LTranslit=hoskē
5	ջուր	ջուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	obj	_	Translit=ǰowr|LTranslit=ǰowr
6	խմելու	խմել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	9	obl	_	Translit=xmelow|LTranslit=xmel
7	տուն	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	obl	_	Translit=town|LTranslit=town
8	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	9	aux	_	Translit=piti|LTranslit=piti
9	չերթամ	երթալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=1|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=čert’am|LTranslit=ert’al|SpaceAfter=No
10	։	։	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.
~~~

### Reported speech

When a speech verb interrupts reported speech content, the interruption is treated as a parenthetical parataxis:

~~~ conllu
# visual-style 10 5 parataxis color:blue
1	—	—	PUNCT	_	_	2	punct	_	Translit=—|LTranslit=—
2-3	Ի՞նչպէս	_	_	_	_	_	_	_	Translit=I?nčpēs|SpaceAfter=No
2	Ինչպէս	ինչպէս	ADV	_	PronType=Int	10	discourse	_	Translit=Inčpēs|LTranslit=inčpēs
3	՞	՞	PUNCT	_	_	2	punct	_	Translit=?|LTranslit=?
4	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	ըսաւ	ըսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	10	parataxis	_	Translit=ësaw|LTranslit=ësel
6	տղան	տղայ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=tġan|LTranslit=tġay
7	յանկարծակիի	յանկարծակի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing|Style=Rare	8	compound:lvc	_	Translit=yankarçakii|LTranslit=yankarçaki
8	եկած	գալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	5	advcl	_	Translit=ekaç|LTranslit=gal|SpaceAfter=No
9	.	.	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.
10-11	դո՞ւք	_	_	_	_	_	_	_	Translit=do?wk’|SpaceAfter=No
10	դուք	Դուք	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|Polite=Form|PronType=Prs	0	root	_	Translit=dowk’|LTranslit=Dowk’
11	՞	՞	PUNCT	_	_	10	punct	_	Translit=?|LTranslit=?
12	,	,	PUNCT	_	_	14	punct	_	Translit=,|LTranslit=,
13	Տիկին	տիկին	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	14	nmod	_	Translit=Tikin|LTranslit=tikin
14	Վիլանի	Վիլանի	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	10	vocative	_	Translit=Vilani|LTranslit=Vilani
~~~

For further discussion of the reported speech, see [ccomp]().

### News article bylines

We have used the parataxis relation to connect the parts of a news article byline. 

~~~ conllu
# visual-style 1 3 parataxis color:blue
1	Երեւան	Երեւան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	0	root	_	Translit=Erewan|LTranslit=Erewan
2	(	(	PUNCT	_	_	3	punct	_	Translit=(|LTranslit=(|SpaceAfter=No
3	Արմենպրես	Արմենպրես	PROPN	_	Abbr=Yes|Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Com|Number=Sing	1	parataxis	_	Translit=Armenpres|LTranslit=Armenpres|SpaceAfter=No
4	)	)	PUNCT	_	_	3	punct	_	Translit=)|LTranslit=)
~~~

### Interjected clauses

Single word or phrase interjections are analyzed as [discourse](), but when a whole clause is interjected, we use the relation parataxis.

~~~ conllu
# visual-style 10 7 parataxis color:blue
1	Համայնքի	համայնք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	nmod:poss	_	Translit=Hamaynk’i|LTranslit=hamaynk’
2	առկայ	առկայ	ADJ	_	_	5	amod	_	Translit=aṙkay|LTranslit=aṙkay
3	հրատապ	հրատապ	ADJ	_	Degree=Pos	5	amod	_	Translit=hratap|LTranslit=hratap
4	բոլոր	բոլոր	DET	_	PronType=Tot	5	det	_	Translit=bolor|LTranslit=bolor
5	հարցերը	հարց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	10	nsubj	_	Translit=harc’erë|LTranslit=harc’|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	իրականութեան	իրականութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	10	parataxis	_	Translit=irakanowt’ean|LTranslit=irakanowt’iwn
8	մէջ	մէջ	ADP	_	AdpType=Post	7	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
10	ունին	ունիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=ownin|LTranslit=ownim
11	որոշ	որոշ	DET	_	PronType=Ind	12	det	_	Translit=oroš|LTranslit=oroš
12	վաղեմութիւն	վաղեմութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	10	obj	_	Translit=vaġemowt’iwn|LTranslit=vaġemowt’iwn
13	մը	մը	DET	_	PronType=Art	12	det	_	Translit=më|LTranslit=më|SpaceAfter=No
14	։	։	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.
~~~

### Tag questions

We also use the parataxis relation for tag questions such as _այնպէս չէ՞_/_aynpēs čē?_ “isn't it?”

~~~ conllu
# visual-style 7 9 parataxis color:blue
1	քանի	քանի	DET	_	ExtPos=DET|PronType=Int	3	det	_	Translit=k’ani|LTranslit=k’ani
2	մը	մը	DET	_	PronType=Art	1	fixed	_	Translit=më|LTranslit=më
3	միլիոն	միլիոն	NUM	_	NumForm=Word|NumType=Card	4	nummod	_	Translit=milion|LTranslit=milion
4	զոհ	զոհ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	Translit=zoh|LTranslit=zoh
5	աւելի	աւելի	ADV	_	Degree=Cmp	4	advmod:emph	_	Translit=aweli|LTranslit=aweli
6	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	58	aux	_	Translit=piti|LTranslit=piti
7	ունենար	ունենալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=ownenar|LTranslit=ownenal|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
9	այնպէս	այնպէս	ADV	_	Deixis=Remt|PronType=Dem	7	parataxis	_	Translit=aynpēs|LTranslit=aynpēs
10-11	չէ՞	_	_	_	_	_	_	_	Translit=čē?|SpaceAfter=No
10	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	cop	_	Translit=čē|LTranslit=em
11	՞	՞	PUNCT	_	_	10	punct	_	Translit=?|LTranslit=?
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:38 CEST -->
