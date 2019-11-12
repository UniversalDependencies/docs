---
layout: base
title:  'Statistics of flat:name in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_sequoia-dep-flat-foreign.html">flat:foreign</a></tt>.

851 nodes (1%) are attached to their parents as `flat:name`.

851 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08695652173913.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (711; 84% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (139; 16% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	vice-président	vice-président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	André	André	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	Ménétrez	Ménétrez	PROPN	_	_	3	flat:name	_	_
5	;	;	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	-	-	PUNCT	_	_	9	punct	_	_
2	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
3	juges	juge	NOUN	_	Gender=Masc|Number=Plur	9	nsubj	_	_
4	Van	Van	X	_	_	3	dep	_	_
5	Ruymbeke	Ruymbeke	PROPN	_	_	4	flat:name	_	_
6	et	et	CCONJ	_	_	7	cc	_	_
7	Simeoni	Simeoni	PROPN	_	_	4	conj	_	_
8	s'	se	PRON	_	Person=3|Reflex=Yes	9	expl:comp	_	SpaceAfter=No
9	intéressent	intéresser	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	à	à	ADP	_	_	12	case	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	liste	liste	NOUN	_	Gender=Fem|Number=Sing	9	obl:arg	_	_
13	détenue	détenir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	12	acl	_	_
14	par	par	ADP	_	_	16	case	_	_
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	direction	direction	NOUN	_	Gender=Fem|Number=Sing	13	obl:agent	_	_
17	de	de	ADP	_	_	19	case	_	_
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	douanes	douanes	NOUN	_	Gender=Masc|Number=Plur	16	nmod	_	SpaceAfter=No
20	,	,	PUNCT	_	_	12	punct	_	_
21	portant	porter	VERB	_	Tense=Pres|VerbForm=Part	12	acl	_	_
22	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	nom	nom	NOUN	_	Gender=Masc|Number=Sing	21	obj	_	_
24	de	de	ADP	_	_	26	case	_	_
25	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	26	det	_	_
26	bénéficiaires	bénéficiaire	NOUN	_	Number=Plur	23	nmod	_	_
27	de	de	ADP	_	_	29	case	_	_
28	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	29	det	_	_
29	commissions	commission	NOUN	_	Gender=Fem|Number=Plur	26	nmod	_	_
30	versées	verser	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	29	acl	_	_
31	lors	lors	ADV	_	_	30	advmod	_	_
32	de	de	ADP	_	_	34	case	_	_
33	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	contrat	contrat	NOUN	_	Gender=Masc|Number=Sing	31	obl:arg	_	_
35	Bravo	Bravo	PROPN	_	_	34	nmod	_	SpaceAfter=No
36	.	.	PUNCT	_	_	9	punct	_	_

~~~


