---
layout: base
title:  'Statistics of nummod in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nummod`

This relation is universal.

1049 nodes (1%) are attached to their parents as `nummod`.

861 instances of `nummod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45757864632984.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1005; 96% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (40; 4% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	_	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nummod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	_	10	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Hälsa	Hälsa	PROPN	_	_	0	root	_	_
2	Pharma	Pharma	PROPN	_	_	1	flat:name	_	_
3	GmbH	GmbH	PROPN	_	_	1	flat:name	_	_
4	Immermannstraße	Immermannstraße	PROPN	_	_	1	flat:name	_	_
5	9	9	NUM	_	NumType=Card	4	nummod	_	_
6	33619	33619	NUM	_	NumType=Card	1	nummod	_	_
7	Bielefeld	Bielefeld	PROPN	_	_	6	nmod	_	_
8	Allemagne	Allemagne	PROPN	_	Gender=Fem|Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 nummod	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	^	^	PUNCT	_	_	4	punct	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	en	en	X	_	_	0	root	_	SpaceAfter=No
5	)	)	PUNCT	_	_	4	punct	_	_
6	Brian	Brian	PROPN	_	Gender=Masc|Number=Sing	4	dep	_	_
7	Eno	Eno	PROPN	_	_	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	_
9	Lessons	Lessons	X	_	_	4	dep	_	_
10	in	in	X	_	_	9	flat:foreign	_	_
11	how	how	X	_	_	9	flat:foreign	_	_
12	to	to	X	_	_	9	flat:foreign	_	_
13	lie	lie	X	_	_	9	flat:foreign	_	_
14	about	about	X	_	_	9	flat:foreign	_	_
15	Iraq	Iraq	X	_	_	9	flat:foreign	_	SpaceAfter=No
16	,	,	PUNCT	_	_	4	punct	_	_
17	The	The	X	_	_	4	dep	_	_
18	Observer	Observer	X	_	_	17	flat:foreign	_	SpaceAfter=No
19	,	,	PUNCT	_	_	4	punct	_	_
20	August	August	X	_	_	21	dep	_	_
21	17	17	NUM	_	NumType=Card	4	dep	_	SpaceAfter=No
22	,	,	PUNCT	_	_	21	punct	_	_
23	2003	2003	NUM	_	NumType=Card	21	nummod	_	SpaceAfter=No
24	.	.	PUNCT	_	_	4	punct	_	_

~~~


