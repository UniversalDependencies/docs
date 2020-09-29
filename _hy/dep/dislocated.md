---
layout: relation
title:  'dislocated'
shortdef : 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for elements that have been displaced from its regular syntactic position, often to the front or back of the clause it resides within or of the whole sentence. This applies often to an argument of a clause that has been moved to the periphery for topic, focus, or similar types of effects.

However, this relation is also used generally for topic elements that otherwise do not fulfill any core grammatical relation of a sentence. These elements may be separated off with a comma intonation.

The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in
spoken languages.

~~~ conllu
1	Համահարթ	համահարթ	ADJ	_	_	9	dislocated	_	Translit=hamahart’|LTranslit=hamahart’|SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
3	թե	թե	CCONJ	_	_	4	cc	_	Translit=t’e|LTranslit=t’e
4	պրոգրեսիվ	պրոգրեսիվ	ADJ	_	Degree=Pos	1	conj	_	Translit=progresiv|LTranslit=progresiv|SpaceAfter=No
5	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.
6	այդ	այդ	DET	_	Distance=Med|PronType=Dem	7	det	_	Translit=ayd|LTranslit=ayd
7	բանավեճը	բանավեճ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	Translit=banaveč̣ë|LTranslit=banaveč̣
8	միշտ	միշտ	ADV	_	_	9	advmod	_	Translit=mišt|LTranslit=mišt
9	եղել	լինել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=eġel|LTranslit=linel
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
11	:	:	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.

~~~

~~~ sdparse
Դա էլ հենց վատ է , որ ընտանիքներով են եկել : \n That is just bad , that they have come with families .
dislocated(վատ, Դա)
dislocated(bad, That)
csubj(վատ, եկել)
csubj(bad, come)
~~~

Note that the dislocated relation is also used for "fronted" apposition, which is not usual for Armenian, as in traditional grammar it is always described as a postposed construction:

~~~ sdparse
Նրանց ՝ ծերերին ու երեխաներին փրկեք առաջինը ։ \n Them elderly and children save first .
obj(փրկեք, Նրանց)
obj(save, Them)
appos(Նրանց, ծերերին)
appos(Them, elderly)
conj(ծերերին, երեխաներին)
conj(elderly, children)
cc(երեխաներին, ու)
cc(children, and)
~~~ 

~~~ sdparse
Ծերերին ու երեխաներին , նրանց փրկեք առաջինը ։ \n Elderly and children save them first .
obj(փրկեք, նրանց)
obj(save, them)
dilocated(փրկեք, Ծերերին)
dilocated(save, Elderly)
conj(Ծերերին, երեխաներին)
conj(Elderly, children)
cc(երեխաներին, ու)
cc(children, and)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:51 CEST 2020 -->
