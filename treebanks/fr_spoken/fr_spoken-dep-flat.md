---
layout: base
title:  'Statistics of flat in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `flat`

This relation is universal.

256 nodes (1%) are attached to their parents as `flat`.

256 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3046875.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (161; 63% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (85; 33% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	réponse	réponse	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	à	à	ADP	_	_	3	mark	_	_
3	suivre	suivre	VERB	_	VerbForm=Inf	1	acl	_	_
4	avec	avec	ADP	_	_	5	case	_	_
5	Hélène	Hélène	PROPN	_	_	3	obl:mod	_	_
6	Chevalier	Chevalier	PROPN	_	_	5	flat	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	congrès	congrès	NOUN	_	Gender=Masc	3	obl:mod	_	_
10	de	de	ADP	_	_	11	case	_	_
11	Barcelone	Barcelone	PROPN	_	_	9	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	te	le	PRON	_	_	5	obj	_	_
5	dis	dire	VERB	DISCOURSE	Number=Sing|Person=1	2	discourse	_	_
6	dix-huit	dix-huit	NUM	_	Number=Plur	2	obl:mod	_	_
7	cent	cent	NUM	_	Number=Plur	6	flat	_	_
8	soixante-dix	soixante-dix	NUM	_	Number=Plur	6	flat	_	_
9	par	par	ADP	_	_	10	case	_	_
10	là	là	ADV	_	_	6	nmod	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	enfin	enfin	ADV	_	_	4	discourse	_	_
2	tout	tout	ADV	_	_	3	advmod	_	_
3	récemment	récemment	ADV	_	_	4	advmod	_	_
4	vient	venir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	_	_	7	mark	_	_
6	s'	se	PRON	_	Person=3|PronType=Prs	7	dep:comp	_	_
7	ouvrir	ouvrir	VERB	_	VerbForm=Inf	4	xcomp:obl	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	site	site	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
10	Famibook	Famibook	PROPN	_	_	9	nmod:appos	_	_
11	point	point	NOUN	_	Gender=Masc|Number=Sing	10	flat	_	_
12	com	com	NOUN	_	_	10	flat	_	_

~~~


