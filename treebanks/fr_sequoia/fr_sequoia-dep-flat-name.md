---
layout: base
title:  'Statistics of flat:name in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_sequoia-dep-flat-foreign.html">flat:foreign</a></tt>.

740 nodes (1%) are attached to their parents as `flat:name`.

740 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06621621621622.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (708; 96% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (16; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (8; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	vice-président	vice-président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	:	:	PUNCT	_	_	3	punct	_	_
3	André	André	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	Ménétrez	Ménétrez	PROPN	_	_	3	flat:name	_	_
5	;	;	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	^	^	PUNCT	_	_	3	punct	_	_
3	The	The	X	_	Foreign=Yes	0	root	_	Lang=en
4	Economist	Economist	X	_	Foreign=Yes	3	flat:name	_	Lang=en|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	18	18	NUM	_	NumType=Card	3	nmod	_	_
7	février	février	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
8	1989	1989	NUM	_	NumType=Card	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat:name	color:blue
1	En	en	ADP	_	_	2	case	_	_
2	mai	mai	NOUN	_	Gender=Masc|Number=Sing	13	obl:mod	_	_
3	et	et	CCONJ	_	_	4	cc	_	_
4	juin	juin	NOUN	_	Gender=Masc|Number=Sing	2	conj	_	_
5	2004	2004	NUM	_	NumType=Card	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	juge	juge	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
9	Renaud	Renaud	PROPN	_	Gender=Masc|Number=Sing	8	nmod	_	_
10	Van	Van	PROPN	_	_	8	flat:name	_	_
11	Ruymbeke	Ruymbeke	PROPN	_	_	9	flat:name	_	_
12	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
13	reçu	recevoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
14	deux	deux	NUM	_	NumType=Card	15	nummod	_	_
15	lettres	lettre	NOUN	_	Gender=Fem|Number=Plur	13	obj	_	_
16	anonymes	anonyme	ADJ	_	Number=Plur	15	amod	_	_
17	et	et	CCONJ	_	_	19	cc	_	_
18	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	CD-ROM	CD-ROM	NOUN	_	Gender=Masc|Number=Sing	15	conj	_	_
20	contenant	contenir	VERB	_	Tense=Pres|VerbForm=Part	19	acl	_	_
21	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	22	det	_	_
22	listings	listing	NOUN	_	Gender=Masc|Number=Plur	20	obj	_	_
23	de	de	ADP	_	_	24	case	_	_
24	comptes	compte	NOUN	_	Gender=Masc|Number=Plur	22	nmod	_	_
25	de	de	ADP	_	_	27	case	_	_
26	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	chambre	chambre	NOUN	_	Gender=Fem|Number=Sing	24	nmod	_	_
28	de	de	ADP	_	_	29	case	_	_
29	compensation	compensation	NOUN	_	Gender=Fem|Number=Sing	27	nmod	_	_
30	luxembourgeoise	luxembourgeois	ADJ	_	Gender=Fem|Number=Sing	27	amod	_	_
31	Clearstream	Clearstream	PROPN	_	_	27	nmod	_	SpaceAfter=No
32	.	.	PUNCT	_	_	13	punct	_	_

~~~


