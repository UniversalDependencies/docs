---
layout: base
title:  'Statistics of dep:comp in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dep.html">dep</a></tt>.

16 nodes (0%) are attached to their parents as `dep:comp`.

12 instances of `dep:comp` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.125.

The following 5 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (11; 69% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (2; 13% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dep:comp	color:blue
1	Pourquoi	pourquoi	ADV	_	PronType=Int	4	advmod	_	wordform=pourquoi
2	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	_
3	lui	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	dep:comp	_	_
4	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-on	on	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	wordform=on
6	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
7	confiance	confiance	NOUN	_	Gender=Fem|Number=Sing	4	obj:lvc	_	_
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 dep:comp	color:blue
1	À	à	ADP	_	_	3	case	_	wordform=à
2	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	occasion	occasion	NOUN	_	Gender=Fem|Number=Sing	13	obl:mod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	François	François	PROPN	_	_	13	nsubj	_	_
6	Fillon	Fillon	PROPN	_	_	5	flat:name	_	_
7	alors	alors	ADV	_	_	8	advmod	_	_
8	ministre	ministre	NOUN	_	Gender=Masc|Number=Sing	5	appos	_	_
9	de	de	ADP	_	_	11	case	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	Éducation	éducation	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	wordform=éducation
12	nationale	national	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
13	déclare	déclarer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	que	que	SCONJ	_	_	13	dep:comp	_	SpaceAfter=No
15	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 24 dep:comp	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	wordform=cette
2	théorie	théorie	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
3	issue	issu	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	psychologie	psychologie	NOUN	_	Gender=Fem|Number=Sing	3	obl:arg	_	_
7	suppose	supposer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	que	que	SCONJ	_	_	11	mark	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	individu	individu	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
11	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	_
12	sens	sens	NOUN	_	Gender=Masc|Number=Sing	11	obj:lvc	_	_
13	de	de	ADP	_	_	15	case	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	monde	monde	NOUN	_	Gender=Masc|Number=Sing	11	obl:arg	_	_
16	qui	qui	PRON	_	PronType=Rel	18	nsubj	_	_
17	l'	lui	PRON	_	Emph=No|Number=Sing|Person=3|PronType=Prs	18	obj	_	SpaceAfter=No
18	entoure	entourer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	acl:relcl	_	_
19	à	à	ADP	_	ExtPos=ADV	11	advmod	_	Idiom=Yes
20	partir	partir	VERB	_	VerbForm=Inf	19	fixed	_	InIdiom=Yes
21	de	de	ADP	_	_	24	case	_	_
22	ses	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	24	det	_	_
23	propres	propre	ADJ	_	Gender=Masc|Number=Plur	24	amod	_	_
24	construits	construire	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	19	dep:comp	_	SpaceAfter=No
25	.	.	PUNCT	_	_	7	punct	_	_

~~~


