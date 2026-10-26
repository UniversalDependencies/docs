---
layout: base
title:  'Statistics of dep:comp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-dep.html">dep</a></tt>.

7 nodes (0%) are attached to their parents as `dep:comp`.

5 instances of `dep:comp` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (5; 71% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	Ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	encourent	encourir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	jusqu'	jusque	ADP	_	_	4	dep:comp	_	SpaceAfter=No
4	à	à	ADP	_	_	6	dep	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	an	an	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	Exponence[Gender]=Inherent
7	de	de	ADP	_	_	8	case	_	_
8	prison	prison	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	15 000	15 000	NUM	_	Number=Plur	11	nummod	_	Exponence[Number]=Inherent
11	euros	euro	NOUN	_	Gender=Masc|Number=Plur	6	conj	_	Exponence[Gender]=Inherent
12	d'	de	ADP	_	_	13	case	_	SpaceAfter=No
13	amende	amende	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	Exponence[Gender]=Inherent
14	et	et	CCONJ	_	_	16	cc	_	_
15	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	peine	peine	NOUN	_	Gender=Fem|Number=Sing	6	conj	_	Exponence[Gender]=Inherent
17	d'	de	ADP	_	_	18	case	_	SpaceAfter=No
18	inéligibilité	inéligibilité	NOUN	_	Gender=Fem|Number=Sing	16	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dep:comp	color:blue
1	Il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	fort	fort	ADV	_	_	4	advmod	_	_
4	probable	probable	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	vu	voir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	advcl	_	Tense[denom]=Past
7	qu'	que	SCONJ	_	_	6	dep:comp	_	SpaceAfter=No
8	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	accusés	accuser	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	6	ccomp	_	Tense[denom]=Past
11	d'	de	ADP	_	_	12	case	_	SpaceAfter=No
12	espionnage	espionnage	NOUN	_	Gender=Masc|Number=Sing	10	obl:arg	_	Exponence[Gender]=Inherent
13	en	en	ADP	_	_	14	case	_	_
14	faveur	faveur	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	Exponence[Gender]=Inherent
15	de	de	ADP	_	_	17	case	_	_
16	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	États-Unis	États-Unis	PROPN	_	Gender=Masc|Number=Plur	14	nmod	_	Exponence[Gender]=Inherent
18	et	et	CCONJ	_	_	20	cc	_	_
19	d'	de	ADP	_	_	20	case	_	SpaceAfter=No
20	Israël	Israël	PROPN	_	Gender=Masc|Number=Sing	17	conj	_	Exponence[Gender]=Inherent
21	-	-	PUNCT	_	_	26	punct	_	SpaceAfter=No
22	lesquels	lequel	PRON	_	Gender=Masc|Number=Plur|PronType=Rel	26	nsubj	_	_
23	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	aux:tense	_	_
24	par	par	ADP	_	_	25	case	_	_
25	ailleurs	ailleurs	ADV	_	_	26	advmod	_	_
26	démenti	démentir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	20	acl:relcl	_	Tense[denom]=Past
27	tout	tout	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	28	det	_	_
28	lien	lien	NOUN	_	Gender=Masc|Number=Sing	26	obj	_	Exponence[Gender]=Inherent
29	avec	avec	ADP	_	_	31	case	_	_
30	ces	ce	DET	_	Number=Plur|PronType=Dem	31	det	_	_
31	personnes	personne	NOUN	_	Gender=Fem|Number=Plur	28	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
32	-	-	PUNCT	_	_	26	punct	_	_
33	qu'	que	SCONJ	_	_	36	mark	_	SpaceAfter=No
34	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	36	nsubj:pass	_	_
35	soient	être	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	36	aux:pass	_	_
36	condamnés	condamner	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	4	csubj	_	Tense[denom]=Past
37	à	à	ADP	_	_	39	case	_	_
38	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	39	det	_	_
39	peine	peine	NOUN	_	Gender=Fem|Number=Sing	36	obl:arg	_	Exponence[Gender]=Inherent
40	capitale	capital	ADJ	_	Gender=Fem|Number=Sing	39	amod	_	SpaceAfter=No
41	.	.	PUNCT	_	_	4	punct	_	_

~~~


