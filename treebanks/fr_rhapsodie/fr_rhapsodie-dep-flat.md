---
layout: base
title:  'Statistics of flat in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `flat`

This relation is universal.

256 nodes (1%) are attached to their parents as `flat`.

256 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34375.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (160; 63% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (85; 33% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


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
11	Barcelone	Barcelone	PROPN	_	_	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	te	lui	PRON	_	Number=Sing|Person=2|PronType=Prs	6	obj	_	_
6	dis	dire	VERB	DISCOURSE	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	discourse	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	dix-huit	dix-huit	NUM	_	Number=Plur	2	obl:mod	_	_
9	cent	cent	NUM	_	Number=Plur	8	flat	_	_
10	soixante-dix	soixante-dix	NUM	_	Number=Plur	8	flat	_	_
11	par	par	ADP	_	_	12	case	_	_
12	là	là	ADV	_	_	8	advmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 flat	color:blue
1	là	là	ADV	_	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	4	nsubj	_	_
4	remontez	remonter	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	boulevard	boulevard	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	euh	euh	INTJ	_	_	6	discourse	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	fff	fff	INTJ	_	_	6	discourse	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	machin	machin	NOUN	_	Gender=Masc|Number=Sing	6	nmod:appos	_	_
13	Sembat	Sembat	PROPN	_	_	12	flat	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	Sembat	Sembat	PROPN	conj:reform	_	12	reparandum	_	_
16	quelque	quelque	DET	_	Number=Sing|Person=3|PronType=Ind	17	det	_	_
17	chose	chose	NOUN	_	Gender=Fem|Number=Sing	15	flat	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


