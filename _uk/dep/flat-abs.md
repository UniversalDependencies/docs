---
layout: relation
title: 'flat:abs'
shortdef: 'clausal absolutive'
udver: '2'
---

Consider the following example.
~~~ conllu
# visual-style 3 4 flat:abs color:green
1	Вони	вони	PRON	noun:p:v_naz:&pron:pers:3	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	розповідали	розповідати	VERB	verb:imperf:past:p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	одне	один	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	iobj	_	_
4	одному	один	DET	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	3	flat:abs	_	_
5	історії	історія	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	obj	_	_
6	.	.	PUNCT	_	_	2	punct	_	_

# visual-style 3 4 flat:abs color:green
1	They	_	_	_	_	0	root	_	_
2	told	_	_	_	_	0	root	_	_
3	one	_	_	_	_	2	iobj	_	_
4	another	_	_	_	_	3	flat:abs	_	_
5	stories	_	_	_	_	2	obj	_	_
6	.	_	_	_	_	0	root	_	_

~~~
Here, _одне одному_ “one another” is acting as a single unit — an indirect object of the main predicate (like German _einander_) while having a predication on its own (_one told another_ — notice that _one_ even has a nominative case signifying a subject). A basic tree is unable to capture such secondary structure, therefore we use `flat:abs` here.

This phenomenon is not limited to pure reciprocals:
~~~ conllu
# visual-style 6 8 flat:abs color:green
1	Величезна	величезний	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
2	пірамідальна	пірамідальний	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
3	будівля	будівля	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	здіймалася	здійматися	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Reverse=Yes|Tense=Past|VerbForm=Fin	0	root	_	_
5	вгору	вгору	ADV	_	_	4	advmod	_	_
6	тераса	тераса	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	obl	_	_
7	за	за	ADP	_	Case=Ins	8	case	_	_
8	терасою	тераса	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	6	flat:abs	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

# visual-style 6 8 flat:abs color:green
1	Huge	_	_	_	_	0	root	_	_
2	pyramidal	_	_	_	_	0	root	_	_
3	building	_	_	_	_	0	root	_	_
4	rose	_	_	_	_	0	root	_	_
5	up	_	_	_	_	0	root	_	_
6	terrace	_	_	_	_	4	obl	_	_
7	by	_	_	_	_	0	root	_	_
8	terrace	_	_	_	_	6	flat:abs	_	_
9	.	_	_	_	_	0	root	_	_

~~~


<!-- Theoretically, this is a subset of [`flat:sibl`](flat-sibl.html). -->

Do not confuse `flat:abs` with [`flat:sibl`](flat-sibl.html).

For the discussion on clausal absolutive constructions, see issue [#557](https://github.com/UniversalDependencies/docs/issues/557).
<!-- Interlanguage links updated St lis 3 20:58:54 CET 2021 -->
