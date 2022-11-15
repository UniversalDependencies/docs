---
layout: base
title:  'Statistics of dep in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep`

This relation is universal.
There are 1 language-specific subtypes of `dep`: <tt><a href="fr_gsd-dep-dep-comp.html">dep:comp</a></tt>.

26 nodes (0%) are attached to their parents as `dep`.

26 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19230769230769.

The following 10 pairs of parts of speech are connected with `dep`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (7; 27% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (5; 19% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (3; 12% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (3; 12% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 12% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 dep	color:blue
1	Eric	Eric	PROPN	_	_	8	nsubj	_	_
2	B.	B.	PROPN	_	_	1	flat:name	_	_
3	Henriet	Henriet	PROPN	_	_	1	flat:name	_	_
4	s'	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	8	expl:pv	_	SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
6	en	en	ADP	_	_	8	advmod	_	ExtPos=ADV|Idiom=Yes
7	effet	effet	NOUN	_	Gender=Masc|Number=Sing	6	fixed	_	InIdiom=Yes
8	livré	livrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	à	à	ADP	_	_	12	case	_	_
10	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	petit	petit	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
12	recensement	recensement	NOUN	_	Gender=Masc|Number=Sing	8	obl:arg	_	_
13	de	de	ADP	_	_	15	case	_	_
14	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	15	det	_	_
15	thèmes	thème	NOUN	_	Gender=Masc|Number=Plur	12	nmod	_	_
16	à	à	ADP	_	_	15	dep	_	ExtPos=ADJ|Idiom=Yes
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	fixed	_	InIdiom=Yes
18	mode	mode	NOUN	_	Gender=Fem|Number=Sing	16	fixed	_	InIdiom=Yes
19	en	en	ADP	_	_	20	case	_	_
20	Uchronie	Uchronie	PROPN	_	_	15	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 dep	color:blue
1	Dès	dès	ADP	_	_	12	advmod	_	ExtPos=ADV|Idiom=Yes|wordform=dès
2	lors	lors	ADV	_	_	1	fixed	_	InIdiom=Yes
3	que	que	SCONJ	_	_	6	mark	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	peuple	peuple	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
6	décide	décider	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
7	de	de	ADP	_	_	8	mark	_	_
8	regagner	regagner	VERB	_	VerbForm=Inf	6	xcomp	_	Subject=SubjRaising
9	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	10	det	_	_
10	liberté	liberté	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	_
11	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
13	instantanément	instantanément	ADV	_	_	12	advmod	_	_
14	et	et	CCONJ	_	_	15	cc	_	_
15	de	de	ADV	_	_	13	conj	_	Idiom=Yes
16	facto	facto	X	_	_	15	dep	_	InIdiom=Yes|SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	libre	libre	ADJ	_	Gender=Masc|Number=Sing	12	xcomp	_	SpaceAfter=No
19	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 dep	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=il
2	signe	signer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	à	à	ADP	_	_	5	case	_	_
4	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	été	été	NOUN	_	Gender=Masc|Number=Sing	2	obl:mod	_	_
6	2001	2001	NUM	_	Number=Plur	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	à	à	ADP	_	_	10	case	_	_
9	21	21	NUM	_	Number=Plur	10	nummod	_	_
10	ans	an	NOUN	_	Gender=Masc|Number=Plur	2	obl:mod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	en	en	ADP	_	_	14	case	_	_
13	même	même	ADJ	_	Gender=Masc|Number=Sing	14	amod	_	_
14	temps	temps	NOUN	_	Gender=Masc|Number=Sing	2	obl:mod	_	_
15	que	que	SCONJ	_	_	16	case	_	_
16	Nicolas	Nicolas	PROPN	_	_	13	obj	_	_
17	Seube	Seube	PROPN	_	_	16	flat:name	_	_
18	qui	qui	PRON	_	PronType=Rel	19	nsubj	_	_
19	deviendra	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	16	acl:relcl	_	_
20	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	21	det	_	_
21	alter	alter	NOUN	_	Gender=Masc|Number=Sing	19	xcomp	_	Idiom=Yes
22	ego	ego	X	_	Gender=Masc|Number=Sing	21	dep	_	InIdiom=Yes
23	côté	côté	NOUN	_	Gender=Masc|Number=Sing	21	nmod	_	_
24	gauche	gauche	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	_
25	de	de	ADP	_	_	27	case	_	_
26	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	défense	défense	NOUN	_	Gender=Fem|Number=Sing	21	nmod	_	_
28	normande	normand	ADJ	_	Gender=Fem|Number=Sing	27	amod	_	SpaceAfter=No
29	.	.	PUNCT	_	_	2	punct	_	_

~~~


