---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.

A `cc` is the relation between a conjunct and the [coordinating conjunction](CCONJ) that precedes it.
(Note that different dependency grammars have different treatments of coordination. We take the first conjunct as the head of the coordination.)

~~~ conllu
# visual-style 3 2 cc color:blue
1	Պատրաստ	պատրաստ	ADJ	_	_	4	xcomp	_	Translit=Patrast|LTranslit=patrast
2	եւ	եւ	CCONJ	_	_	3	cc	_	Translit=ew|LTranslit=ew
3	գիտակից	գիտակից	ADJ	_	Degree=Pos	1	conj	_	Translit=gitakic’|LTranslit=gitakic’
4	չըլլալուն	ըլլալ	VERB	_	Case=Dat|Definite=Def|Polarity=Neg|Subcat=Intr|VerbForm=Inf|Voice=Mid	6	nmod:poss	_	Translit=čëllalown|LTranslit=ëllal
5	զօրաւոր	զօրաւոր	ADJ	_	Degree=Pos	6	amod	_	Translit=zòrawor|LTranslit=zòrawor
6	ապացոյցը	ապացոյց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Translit=apac’oyc’ë|LTranslit=apac’oyc’
7	այն	այն	PRON	_	Deixis=Remt|PronType=Dem	0	root	_	Translit=ayn|LTranslit=ayn
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=ē|LTranslit=em
~~~

A coordinating conjunction may also occur at the beginning of a sentence, linking it to the preceding discourse. In such cases, it is also attached with the `cc` relation and depends on the root predicate of the sentence. Since dependencies cannot cross sentence boundaries, the conjunction cannot be attached to a conjunct in the preceding sentence and is therefore attached to the main predicate of the current sentence.

~~~ conllu
# visual-style 4 1 cc color:blue
1	Բայց	բայց	CCONJ	_	_	4	cc	_	Translit=Bayc’|LTranslit=bayc’
2	հոդ	հոդ	ADV	_	Deixis=Med|PronType=Dem	4	advmod	_	Translit=hod|LTranslit=hod
3	կանգ	կանգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll|Style=Rare	4	compound:lvc	_	Translit=kang|LTranslit=kang
4	առաւ	առնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=aṙaw|LTranslit=aṙnel
5	նաեւ	նաեւ	CCONJ	_	_	4	cc	_	Translit=naew|LTranslit=naew
6	ռուսական	ռուսական	ADJ	_	NameType=Geo	7	amod	_	Translit=ṙowsakan|LTranslit=ṙowsakan
7	յաջողութիւնը	յաջողութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	Translit=yaǰoġowt’iwnë|LTranslit=yaǰoġowt’iwn|SpaceAfter=No
8	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:46 CEST -->
