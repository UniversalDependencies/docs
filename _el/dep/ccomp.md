---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a finite dependent clause which functions like an object of the verb or adjective.

~~~ sdparse
Διαβεβαίωσε ότι οι εθελοντές θα συνεχίσουν το έργο τους .
ccomp(Διαβεβαίωσε, συνεχίσουν)
~~~

For clausal complements for nouns, see `acl` .

For clausal complements where the subject of the complement clause obligatorily
corefers with an argument (subject or object) of the higher clause, see `xcomp`.

~~~ sdparse
θέλει να αρχίσουν να γράφουν
ccomp(θέλει, αρχίσουν)
xcomp(αρχίσουν, γράφουν)
~~~

The relative pronoun *όσος* may introduce clauses that depend on a verb with the [ccomp]() function as in the example in CONLLU format below. This example could be paraphrased to the fully synonymous *στο μάτι έβαλε η Τρόϊκα* όλους όσους *είναι κάτω από 62* "Troika targets those who are less than 62 years old" where the object *όλους" is explicit and the pronoun *όσους* has it as an explicit target.

~~~conllu
# text = Στο μάτι έβαλε η τρόικα όσους είναι κάτω από 62
1	Στο	στου	ADP	AsPpSp	_	2	case	_	mwe=1|None=Yes
2	μάτι	μάτι	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	3	obl	_	mwe=1
3	έβαλε	βάζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	mwe=1:VID
4	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	τρόικα	τρόικα	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
6	όσους	όσος	PRON	PnDm	Case=Acc|Gender=Masc|Number=Plur|PronType=Rel	10	nsubj	_	_
7	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pas	10	cop	_	_
8	κάτω	κάτω	ADV	AdBa	_	9	advmod	_	None=Yes
9	από	από	ADP	AsPpSp	_	10	case	_	None=Yes
10	62	62	NUM	DIG	Case=Gen|Gender=Masc|Number=Plur	3	ccomp	_	_
~~~

<!---
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:33 CET -->
