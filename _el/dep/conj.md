---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _και_, _αλλά_, etc.  We treat
conjunctions asymmetrically: The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Ακούστηκαν προτάσεις για παραγωγική ανασυγκρότηση και βιώσιμη ανάπτυξη
conj(ανασυγκρότηση, ανάπτυξη)
~~~

<div id="punct1" class="sd-parse">
των σχέσεων μεταξύ οικονομίας , πολιτικού παιγνίου , κομματικής ισορροπίας και διεθνούς παράγοντα .
conj(οικονομίας, ισορροπίας)
conj(οικονομίας, παιγνίου)
conj(οικονομίας, παράγοντα)
cc(οικονομίας, και)
punct(οικονομίας, ,-5)
punct(οικονομίας, ,-8)
</div>

~~~ sdparse
Μια μικρή αλλά ανθηρή επιχείρηση .
amod(επιχείρηση, μικρή)
cc(μικρή, αλλά)
conj(μικρή, ανθηρή)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Ο οδηγός ενοχλήθηκε και άρχισε να κορνάρει .
cc(ενοχλήθηκε, και)
conj(ενοχλήθηκε, άρχισε)
~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.

~~~ sdparse
Θα προωθήσουν ένα ασφαλέστερο , πιο ανθεκτικό παγκόσμιο χρηματοπιστωτικό σύστημα .
conj(ασφαλέστερο, ανθεκτικό)
punct(ασφαλέστερο, ,-5)
~~~

Coordination can apply to most word categories.

~~~ sdparse
Άνοιξαν και έκλεισαν την πόρτα .
conj(Άνοιξαν, έκλεισαν)
cc(Άνοιξαν, και)
dobj(Άνοιξαν, πόρτα)
~~~

~~~ sdparse
από και προς το αεροδρόμιο
case(αεροδρόμιο, από)
cc(από, και)
conj(από, προς)
~~~

~~~ sdparse
εάν και εφόσον δεήσουν
mark(δεήσουν, εάν)
cc(εάν, και)
conj(εάν, εφόσον)
~~~



### TODO
Shared dependents.
Nested coordination.

COORIDNATION IN MULTIWORD EXPRESSIONS (MWEs)

In general, we try to highlight the presence of a MWE when it exists. In the example below, there are two conjoined verb MWEs which are lexical variants *αφήνω ρέστο*, *αφήνω ταπί*: they share the verb head and they are synonymous. 

~~~connlu
# text = Αλλά έτσι είναι , όταν χτίσεις , λίγο ο εργολάβος , λίγο ο μπετατζής , λίγο ο καγκελάς , σε ξεψαχνίζουν και σε αφήνουν ρέστο και ταπί .
1	Αλλά	αλλά	CCONJ	VbMn	_	2	cc	_	_
2	έτσι	έτσι	ADV	AdBa	_	0	root	_	_
3	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
4	,	,	PUNCT	PUNCT	PunctType=Comm	2	punct	_	_
5	όταν	όταν	SCONJ	CjSb	_	6	mark	_	_
6	χτίσεις	χτίζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	21	advcl	_	_
7	,	,	PUNCT	PUNCT	PunctType=Comm	6	punct	_	_
8	λίγο	λίγο	ADV	AdBa	_	10	advmod	_	_
9	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	εργολάβος	εργολάβος	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	21	nsubj	_	_
11	,	,	PUNCT	PUNCT	PunctType=Comm	10	punct	_	_
12	λίγο	λίγο	ADV	AdBa	_	14	advmod	_	_
13	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	μπετατζής	μπετατζής	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	10	conj	_	_
15	,	,	PUNCT	PUNCT	PunctType=Comm	14	punct	_	_
16	λίγο	λίγο	ADV	AdBa	Number=Sing|PronType=Ind	18	advmod	_	_
17	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	καγκελάς	καγκελάς	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	10	conj	_	_
19	,	,	PUNCT	PUNCT	PunctType=Comm	18	punct	_	_
20	σε	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=2|PronType=Prs	21	obj	_	_
21	ξεψαχνίζουν	ξεψαχνίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
22	και	και	CCONJ	CjCo	_	24	cc	_	_
23	σε	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=2|PronType=Prs	24	obj	_	_
24	αφήνουν	αφήνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	conj	_	mwe=1,2:VID
25	ρέστο	ρέστος	ADJ	AjBa	Case=Acc|Gender=Neut|Number=Sing	24	xcomp	_	mwe=1
26	και	και	CCONJ	CjCo	_	27	cc	_	_
27	ταπί	ταπί	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	24	conj	_	mwe=2:VID
28	.	.	PUNCT	PTERMP	PunctType=Peri	21	punct	_	_

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:40 CET -->
