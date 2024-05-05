---
layout: base
title:  'Statistics of punct in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `punct`

This relation is universal.

8821 nodes (20%) are attached to their parents as `punct`.

6226 instances of `punct` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.46536673846503.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (2701; 31% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (1862; 21% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (1449; 16% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (956; 11% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (458; 5% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (362; 4% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (250; 3% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (239; 3% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (218; 2% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (125; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (95; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (40; 0% instances), <tt><a href="fr_rhapsodie-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (39; 0% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PUNCT.html">PUNCT</a></tt> (27; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	j'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	SpaceAfter=No
2	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Scrap=Yes|SpaceAfter=No
3	…	…	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	bah	bah	INTJ	_	_	6	discourse	_	Overlap=Rhap_D0006-1bis|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	Overlap=Rhap_D0006-1bis
3	honnêtement	honnêtement	ADV	_	_	6	advmod	_	Overlap=Rhap_D0006-1bis|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	Overlap=Rhap_D0006-1bis
5	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	Overlap=Rhap_D0006-1bis
6	vraiment	vraiment	ADV	_	_	0	root	_	Overlap=Rhap_D0006-1bis|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	Overlap=Rhap_D0006-1bis

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 punct	color:blue
1	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	euh	euh	INTJ	_	_	2	discourse	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	moi	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	14	dislocated	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
12	m'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	14	iobj	_	SpaceAfter=No
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	_
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


