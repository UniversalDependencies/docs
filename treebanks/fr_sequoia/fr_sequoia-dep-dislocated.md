---
layout: base
title:  'Statistics of dislocated in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `dislocated`

This relation is universal.
There are 1 language-specific subtypes of `dislocated`: <tt><a href="fr_sequoia-dep-dislocated-obj.html">dislocated:obj</a></tt>.

11 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.81818181818182.

The following 7 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (3; 27% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dislocated	color:blue
1	Ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	9	dislocated	_	_
2	que	que	PRON	_	PronType=Rel	4	obj	_	_
3	nous	nous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
4	voulons	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
5	surtout	surtout	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	économiser	économiser	VERB	_	VerbForm=Inf	0	root	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	combustibles	combustible	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	Exponence[Gender]=Inherent
12	fossiles	fossile	ADJ	_	Gender=Masc|Number=Plur	11	amod	_	Exponence[Gender]=Absent|SpaceAfter=No
13	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 dislocated	color:blue
1	Faire	faire	AUX	_	VerbForm=Inf	3	aux:caus	_	Subject=Generic
2	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	_	SpaceAfter=No
3	exprimer	exprimer	VERB	_	VerbForm=Inf	13	dislocated	_	Subject=ObjRaising
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	enfants	enfant	NOUN	_	Number=Plur	3	obj:agent	_	_
6	à	à	ADP	_	ExtPos=ADP	9	case	_	Idiom=Yes
7	travers	travers	NOUN	_	Gender=Masc	6	fixed	_	Exponence[Gender]=Inherent|InIdiom=Yes
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	activité	activité	NOUN	_	Gender=Fem|Number=Sing	3	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
10	,	,	PUNCT	_	_	3	punct	_	_
11	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	13	nsubj	_	SpaceAfter=No
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	important	important	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 dislocated	color:blue
1	Deux	deux	NUM	_	Number=Plur|NumType=Card	2	nummod	_	Exponence[Number]=Inherent
2	étoiles	étoile	NOUN	_	Gender=Fem|Number=Plur	9	dislocated	_	Exponence[Gender]=Inherent
3	aussi	aussi	ADV	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	nouveau	nouveau	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	classement	classement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent
10	de	de	ADP	_	_	12	case	_	_
11	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	Exponence[Gender]=Absent|SpaceAfter=No
12	Office	office	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	Exponence[Gender]=Inherent
13	de	de	ADP	_	_	14	case	_	_
14	tourisme	tourisme	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	Exponence[Gender]=Inherent
15	d'	de	ADP	_	_	16	case	_	SpaceAfter=No
16	Arc-et-Senans	Arc-et-Senans	PROPN	_	Gender=Masc|Number=Sing	12	nmod	_	Exponence[Gender]=Inherent
17	qui	qui	PRON	_	PronType=Rel	18	nsubj	_	_
18	prend	prendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	acl:relcl	_	_
19	ainsi	ainsi	ADV	_	_	18	advmod	_	_
20	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	21	det	_	_
21	place	place	NOUN	_	Gender=Fem|Number=Sing	18	obj	_	Exponence[Gender]=Inherent
22	dans	dans	ADP	_	_	24	case	_	_
23	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	cour	cour	NOUN	_	Gender=Fem|Number=Sing	18	obl:mod	_	Exponence[Gender]=Inherent
25	de	de	ADP	_	_	27	case	_	_
26	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	27	det	_	_
27	grands	grand	ADJ	_	Gender=Masc|Number=Plur	24	nmod	_	SpaceAfter=No
28	,	,	PUNCT	_	_	32	punct	_	_
29	juste	juste	ADV	_	_	32	advmod	_	_
30	derrière	derrière	ADP	_	_	32	case	_	_
31	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	32	det	_	_
32	offices	office	NOUN	_	Gender=Masc|Number=Plur	18	obl:mod	_	Exponence[Gender]=Inherent
33	de	de	ADP	_	_	34	case	_	_
34	Besançon	Besançon	PROPN	_	_	32	nmod	_	_
35	et	et	CCONJ	_	_	36	cc	_	_
36	Montbéliard	Montbéliard	PROPN	_	_	34	conj	_	SpaceAfter=No
37	.	.	PUNCT	_	_	9	punct	_	_

~~~


