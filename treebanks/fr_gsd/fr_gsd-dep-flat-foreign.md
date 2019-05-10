---
layout: base
title:  'Statistics of flat:foreign in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_gsd-dep-flat-name.html">flat:name</a></tt>.

772 nodes (0%) are attached to their parents as `flat:foreign`.

772 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.93652849740933.

The following 14 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (739; 96% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (8; 1% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	Falling	Falling	PROPN	_	_	6	nsubj	_	Foreign=en
2	Out	Out	PROPN	_	_	1	flat:foreign	_	Foreign=en
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	deuxième	deuxième	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	album	album	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Peter	Peter	X	_	_	6	nmod	_	Foreign=en
9	Bjorn	Bjorn	X	_	_	8	flat:foreign	_	Foreign=en
10	and	and	X	_	_	8	flat:foreign	_	Foreign=en
11	John	John	X	_	_	8	flat:foreign	_	Foreign=en|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 flat:foreign	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	premier	premier	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	single	single	NOUN	_	Gender=Masc|Number=Sing	16	nsubj	_	_
4	extrait	extraire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	de	de	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	album	album	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	4	4	NUM	_	_	3	appos	_	Foreign=en
11	Seasons	Seasons	X	_	_	10	flat:foreign	_	Foreign=en
12	of	of	X	_	_	10	flat:foreign	_	Foreign=en
13	Loneliness	Loneliness	X	_	_	10	flat:foreign	_	Foreign=en|SpaceAfter=No
14	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
15	,	,	PUNCT	_	_	10	punct	_	_
16	sortit	sortir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
17	en	en	ADP	_	_	18	case	_	_
18	aout	août	NOUN	_	Gender=Masc|Number=Sing	16	obl	_	_
19	1997	1997	NUM	_	_	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 38 flat:foreign	color:blue
1	Mais	mais	CCONJ	_	_	7	cc	_	_
2	peu	peu	ADV	_	_	7	advmod	_	MWEPOS=ADV
3	à	à	ADP	_	_	2	fixed	_	_
4	peu	peu	ADV	_	_	2	fixed	_	_
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	s'	se	PRON	_	Person=3|PronType=Prs	7	obj	_	SpaceAfter=No
7	éloigne	éloigner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	de	de	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	logicisme	logicisme	NOUN	_	Gender=Masc|Number=Sing	7	obl:arg	_	_
11	et	et	CCONJ	_	_	13	cc	_	_
12	s'	se	PRON	_	Person=3|PronType=Prs	13	obj	_	SpaceAfter=No
13	oriente	orienter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_
14	vers	vers	ADP	_	_	16	case	_	_
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	philosophie	philosophie	NOUN	_	Gender=Fem|Number=Sing	13	obl	_	_
17	de	de	ADP	_	_	19	case	_	_
18	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	nature	nature	NOUN	_	Gender=Fem|Number=Sing	16	nmod	_	_
20	(	(	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	An	An	X	_	Number=Sing	7	parataxis	_	Foreign=en
22	Inquiry	Inquiry	X	_	_	21	flat:foreign	_	Foreign=en
23	concerning	concerning	X	_	_	21	flat:foreign	_	Foreign=en
24	the	the	X	_	Definite=Def	21	flat:foreign	_	Foreign=en
25	Principles	Principles	X	_	_	21	flat:foreign	_	Foreign=en
26	of	of	X	_	_	21	flat:foreign	_	Foreign=en
27	Natural	Natural	X	_	_	21	flat:foreign	_	Foreign=en
28	Knowledge	Knowledge	X	_	_	21	flat:foreign	_	Foreign=en
29	(	(	PUNCT	_	_	30	punct	_	SpaceAfter=No
30	1919	1919	NUM	_	_	21	flat:foreign	_	Foreign=en|SpaceAfter=No
31	)	)	PUNCT	_	_	30	punct	_	SpaceAfter=No
32	,	,	PUNCT	_	_	21	punct	_	_
33	The	The	X	_	Definite=Def|Gender=Masc|Number=Sing	21	flat:foreign	_	Foreign=en
34	Concept	Concept	X	_	Gender=Masc|Number=Sing	21	flat:foreign	_	Foreign=en
35	of	of	X	_	_	21	flat:foreign	_	Foreign=en
36	Nature	Nature	X	_	Gender=Fem|Number=Sing	21	flat:foreign	_	Foreign=en
37	(	(	PUNCT	_	_	38	punct	_	SpaceAfter=No
38	1920	1920	NUM	_	_	21	flat:foreign	_	Foreign=en|SpaceAfter=No
39	)	)	PUNCT	_	_	38	punct	_	SpaceAfter=No
40	.	.	PUNCT	_	_	7	punct	_	_

~~~


