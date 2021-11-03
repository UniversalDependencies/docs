---
layout: relation
title:  'nmod:dup'
shortdef : 'duplicated nmod of a noun or verbnoun'
udver: '2'
---

Both nouns and verbnous can be circumfixed with a dependent and independent pronoun. 
In the case of nouns, this expresses possession, in the case of verbnouns the pronoun expresses
the direct object.
The two pronouns are reference indentical.
It happends that one of the two pronouns is dropped. The second pronoun duplicates
the first, that is why it is annotated as `nmod:dup`
If the dependent pronoun (preceding pronoun) is dropped we annotate the second as `nmod:poss` (nouns) or `obj` (verbnouns)


### Examples

_ei phen (hi)_ "her head"

~~~ conllu
1	ei	ei	PRON	dep	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	phen	pen	NOUN	noun	Gender=Masc|Number=Sing|Mutation=NM	0	root	_	_
3	hi	hi	PRON	indep	Number=Sing|Person=3|PronType=Prs	2	nmod:dup	_	_
~~~

_ei weld e_ "to see him", "his [being] seen"

~~~ conllu
1	ei	ei	PRON	dep	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	weld	gweld	NOUN	verbnoun	Number=Sing|Mutation=SM|VerbForm=Vnoun	0	root	_	_
3	hi	hi	PRON	indep	Number=Sing|Person=3|PronType=Prs	2	nmod:dup	_	_
~~~


Even though Welsh has not passive, there is a periphrastic construction using the verb _cael_ which is used frequently in cases where other languages would use a passive



* _Mae'r geiriau wedi eu ysgrifennu **gan John Howel**_ "the words were written by John Howel"
~~~ conllu
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	geiriau	gair	NOUN	noun	Gender=Masc|Number=Plur	1	nsubj	_	_
4	wedi	wedi	AUX	ante	_	6	aux	_	_
5	eu	eu	PRON	dep	Number=Plur|Person=3|PronType=Prs	6	nmod:obj	_	_
6	ysgrifennu	ysgrifennu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
7	gan	gan	ADP	prep	_	8	case	_	_
8	John	John	PROPN	person	_	6	nmod:agent	_	_
9	Howel	Howel	PROPN	person	Gender=Masc|Number=Sing	8	flat:name	_	_
~~~


<!-- Interlanguage links updated St lis 3 20:59:00 CET 2021 -->
