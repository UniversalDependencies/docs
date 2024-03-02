---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

A relative clause modifier of an noun is a finite clause that modifies the noun and is introduced by *που* or a (structure including) an *οποίος*-relative pronoun. The relation points from the noun that is modified to the head of the relative clause. *οποίος*-relative pronoun are assigned typical nominal relations like  [dobj](obj), [nsubj](nsubj) and [nmod](nmod). A [det](det) relation is also possible.

~~~ sdparse
το Όσκαρ με το οποίο τιμήθηκε
acl:relcl(Όσκαρ, τιμήθηκε)
nmod(τιμήθηκε, οποίο)
~~~

~~~ sdparse
το έκθεμα , για τη μόνιμη θέση του οποίου διαφωνούν
acl:relcl(έκθεμα, διαφωνούν)
nmod(διαφωνούν, θέση)
nmod(θέση, οποίου)
~~~

~~~ sdparse
δάνειζαν ποσά σε ιδιώτες, τα οποία ποσά εκείνοι χρησιμοποιούσαν ...
acl:relcl(ποσά, χρησιμοποιούσαν)
dobj(χρησιμοποιούσαν, ποσά)
det(ποσά, οποία)
~~~

In GTD, the [mark](mark) relation is used for the Greek relativizer *που*.

~~~ sdparse
το βιβλίο που σου έδωσα
acl:relcl(βιβλίο, έδωσα)
mark(έδωσα, που)
~~~

~~~ sdparse
μια έκθεση που να μην περιέχει λάθη
acl:relcl(έκθεση, περιέχει)
mark(περιέχει, που)
aux(περιέχει, να)
~~~~


In GUD, the relativer *που* is marked with a proper dependency (such as [nsubj](), [obj](), etc).

~~~ sdparse
μια έκθεση που να μην περιέχει λάθη
acl:relcl(έκθεση, περιέχει)
nsubj(περιέχει, που)
mark(περιέχει, να)
advmod(περιέχει, μην)
~~~

*που* may not depend on the verb of the relative clause:
 
~~~ conllu
# text = « Εσείς διαλευκάνατε ένα έγκλημα που , για να είμαστε ειλικρινείς , τη λύση του σας τη σέρβιραν σ το πιάτο ».
1	«	«	PUNCT	OPUNCT	PunctType=Quot	3	punct	_	_
2	Εσείς	εγώ	PRON	PnPe	Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
3	διαλευκάνατε	διαλευκαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ένα	ένας	NUM	NmCd	Case=Acc|Gender=Neut|Number=Sing|NumType=Card	5	nummod	_	_
5	έγκλημα	έγκλημα	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
6	που	που	PRON	PnRe	Case=Gen|Gender=Neut|Number=Sing|PronType=Rel	14	nmod	_	_
7	,	,	PUNCT	PUNCT	PunctType=Comm	11	punct	_	_
8	για	για	ADP	AsPpSp	_	11	mark	_	_
9	να	να	SCONJ	PtSj	_	8	fixed	_	_
10	είμαστε	είμαι	AUX	VbMn	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	11	cop	_	_
11	ειλικρινείς	ειλικρινής	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Plur	6	advcl	_	_
12	,	,	PUNCT	PUNCT	PunctType=Comm	11	punct	_	_
13	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	λύση	λύση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	18	obj	_	_
15	του	εγώ	PRON	PnPe	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
16	σας	εγώ	PRON	PnPe	Case=Gen|Number=Plur|Person=2|PronType=Prs	18	iobj	_	_
17	τη	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	18	expl	_	_
18	σέρβιραν	σερβίρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
19	σ	σε	ADP	AsPpSp	_	21	case	_	_
20	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	21	det	_	_
21	πιάτο	πιάτο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	18	obl	_	_
22	»	»	PUNCT	CPUNCT	PunctType=Quot	3	punct	_	SpaceAfter=No
23	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_
~~~

The relative pronoun *όσος* may introduce clauses that depend on a verb with the [ccomp]() function as in the example in CONLLU form  below. This example could be paraphrased to the fully synonymous *στο μάτι έβαλε η Τρόϊκα* </b>όλους όσους</> *είναι κάτω από 62* "Troika targets those who are less than 62 years old" where the object *όλους" is explicit and the pronoun *όσους* has it as an explicit target.

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
TODO: Revisit arguments for pou being a marker or a relative pronoun
-->
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:15 CET -->
