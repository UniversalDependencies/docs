---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a more precise dependency relation between two words cannot be determined. This may be because of a weird grammatical construction, a limitation in software, a parser error, or because of an unresolved long distance dependency.

~~~ conllu
# visual-style 3 4 dep color:blue
1	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	2	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
2	արգիլէր	արգիլել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=argilēr|LTranslit=argilel
3	օտար	օտար	ADJ	_	Degree=Pos	5	amod	_	Translit=òtar|LTranslit=òtar
4	երկրացի	երկրացի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	3	dep	_	Translit=erkrac’i|LTranslit=erkrac’i
5	սրբազաններու	սրբազան	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	7	nmod:poss	_	Translit=srbazannerow|LTranslit=srbazan
6	ընտրութեան	ընտրութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	nmod:npmod	_	Translit=ëntrowt’ean|LTranslit=ëntrowt’iwn
7	մասնակցումը	մասնակցում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	2	obj	_	Translit=masnakc’owmë|LTranslit=masnakc’owm


Note that we also use this relation to link the inflectional bound morphemes that are separated due to tokenization to the _main_ part of the word (usually the last word of phrases or sentences used as names or after abbreviations).

~~~ conllu
# visual-style 2 4 dep color:blue
# visual-style 9 11 dep color:blue
1	«	«	PUNCT	_	_	2	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
2	Թէական	թէական	ADJ	_	_	7	nsubj	_	Translit=T’ēakan|LTranslit=t’ēakan|SpaceAfter=No
3	»	»	PUNCT	_	_	2	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
4	ը	ը	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Hyph=Yes|Number=Sing	2	dep	_	Translit=ë|LTranslit=ë
5	հոս	հոս	ADV	_	Deixis=Prox|PronType=Dem	7	advmod	_	Translit=hos|LTranslit=hos|SpaceAfter=No
6	՝	՝	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	ըլլալով	ըլլալ	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	0	root	_	Translit=ëllalov|LTranslit=ëllal
8	«	«	PUNCT	_	_	9	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
9	էական	էական	ADJ	_	Degree=Pos	12	nmod:poss	_	Translit=ēakan|LTranslit=ēakan|SpaceAfter=No
10	»	»	PUNCT	_	_	9	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
11	ին	ը	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Hyph=Yes|Number=Sing	9	dep	_	Translit=in|LTranslit=ë
12	հակառակը	հակառակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	xcomp	_	Translit=hakaṙakë|LTranslit=hakaṙak|SpaceAfter=No
13	:	:	PUNCT	_	Foreign=Yes	7	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 1 3 dep color:blue
1	1969	1969	NUM	_	NumForm=Digit|NumType=Card	15	obl	_	Translit=1969|LTranslit=1969|SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
3	էն	ը	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Hyph=Yes|Number=Sing	1	dep	_	Translit=ēn|LTranslit=ë
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:58 CEST -->
