---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is used to combine the elements of an expression in which none of the immediate components can be identified as the sole head using standard substitution tests.
This includes both cases where more than one component passes the head test, and cases where no component does.
Note also that the `flat` relation is appropriate in such cases only when no more specific relation applies. For example, in coordination structures annotated with the [conj]() relation, any of the conjuncts can usually replace the whole.

~~~ conllu
# visual-style 2 4 flat color:blue
1	Մայր	մայր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	2	nmod	_	Translit=Mayr|LTranslit=mayr
2	Աթոռ	աթոռ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=At’oṙ|LTranslit=at’oṙ
3	Սուրբ	սուրբ	ADJ	_	Degree=Pos	4	amod	_	Translit=Sowrb|LTranslit=sowrb
4	Էջմիածին	Էջմիածին	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	2	flat	_	Translit=Ēǰmiaçin|LTranslit=Ēǰmiaçin
~~~

Flat expressions are annotated with a flat structure, where all subsequent components in the expression are attached to the first one using the `flat` label. The assumption is that in these expressions, the `flat` relations
are not syntactic head-modifier relations, and that the structural annotation is in principle arbitrary.
The components of a flat expression may have their own dependents, including nested flat structures.

~~~ conllu
# visual-style 1 2 flat color:blue
# visual-style 1 3 flat color:blue
1	ոգի	ոգի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	Translit=ogi|LTranslit=ogi
2	ի	ի	ADP	_	AdpType=Prep|ExtPos=ADP	1	flat	_	Translit=i|LTranslit=i
3	բռին	բուռ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	1	flat	_	Translit=bṙin|LTranslit=bowṙ
4	պաշտպանեց	պաշտպանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=paštpanec’|LTranslit=paštpanel
~~~

~~~ conllu
# visual-style 1 2 flat color:blue
# visual-style 1 3 flat color:blue
# visual-style 1 4 flat color:blue
1	երէկ	երէկ	ADV	_	_	0	root	_	Translit=erēk|LTranslit=erēk
2	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	flat	_	Translit=čē|LTranslit=em
3	առջի	առջի	ADJ	_	NumForm=Word|NumType=Ord|Style=Vrnc	1	flat	_	Translit=aṙǰi|LTranslit=aṙǰi
4	օր	օր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	flat	_	Translit=òr|LTranslit=òr|SpaceAfter=No
~~~

The `flat` relation is also used for numerals, and for numerical and mathematical expressions that lack an internal syntactic structure. The leftmost numeral is the head, and the other numerals are attached to it as modifiers. Note that for numerical (spatial and temporal) distributions and ranges the [flat:dist]() and [flat:range]() relations are used.

~~~ conllu
# visual-style 1 2 flat color:blue
# visual-style 1 3 flat color:blue
# visual-style 1 4 flat color:blue
# visual-style 1 5 flat color:blue
1	2	2	NUM	_	NumForm=Digit|NumType=Card	0	root	_	Translit=2|LTranslit=2|SpaceAfter=No
2	+	+	SYM	_	_	1	flat	_	Translit=+|LTranslit=+|SpaceAfter=No
3	2	2	NUM	_	NumForm=Digit|NumType=Card	1	flat	_	Translit=2|LTranslit=2|SpaceAfter=No
4	=	=	SYM	_	_	1	flat	_	Translit==|LTranslit==|SpaceAfter=No
5	4	4	NUM	_	NumForm=Digit|NumType=Card	1	flat	_	Translit=4|LTranslit=4|SpaceAfter=No
~~~

Date expressions which have a clear syntactic structure should be annotated with regular dependency relations. In other cases, when they have a flat structure with no clearly discernible head, the `flat` relation should be used. 

~~~ conllu
# visual-style 4 3 nmod:poss color:blue
# visual-style 2 4 appos color:blue
1	Այս	այս	DET	_	Deixis=Prox|PronType=Dem	2	det	_	Translit=Ays|LTranslit=ays
2	տարի	տարի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=tari|LTranslit=tari
3	Ապրիլի	Ապրիլ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	Translit=Aprili|LTranslit=April
4	26	26	NUM	_	NumForm=Digit|NumType=Card	2	appos	_	Translit=26|LTranslit=26|SpaceAfter=No
5	-	-	PUNCT	_	_	6	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
6	ին	ը	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Hyph=Yes|Number=Sing	4	dep	_	Translit=in|LTranslit=ë|SpaceAfter=No
7	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 3 4 flat color:blue
# visual-style 3 6 flat color:blue
1	Չորեքշաբթի	Չորեքշաբթի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Čorek’šabt’i|LTranslit=Čorek’šabt’i|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	Յուլիս	Յուլիս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	appos	_	Translit=Yowlis|LTranslit=Yowlis
4	7	7	NUM	_	NumForm=Digit|NumType=Card	3	flat	_	Translit=7|LTranslit=7|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	2021	2021	NUM	_	NumForm=Digit|NumType=Card	3	flat	_	Translit=2021|LTranslit=2021
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:09 CEST -->
