---
layout: base
title:  'Statistics of xcomp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `xcomp`

This relation is universal.

548 nodes (1%) are attached to their parents as `xcomp`.

543 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.11313868613139.

The following 19 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (456; 83% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (25; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (21; 4% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (15; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	là	là	ADV	_	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	viens	venir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	_	_	6	mark	_	_
6	faire	faire	VERB	_	VerbForm=Inf	4	xcomp	_	Subject=SubjRaising
7	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	reparandum	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	10	det	_	_
10	vaccins	vaccin	NOUN	_	Gender=Masc|Number=Plur	6	obj	_	_
11	par	par	ADP	_	_	12	case	_	_
12	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	4	obl:mod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	obj	_	_
5	sympa	sympa	ADJ	_	Gender=Masc|Number=Sing	3	xcomp	_	_
6	d'	de	ADP	_	_	8	mark	_	SpaceAfter=No
7	en	en	PRON	_	Person=3|PronType=Prs	8	obj	_	_
8	voir	voir	VERB	_	VerbForm=Inf	3	xcomp	_	Subject=SubjRaising
9	dans	dans	ADP	_	_	10	case	_	_
10	Paris	Paris	PROPN	_	_	8	obl:mod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	_
2	allez	aller	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	être	être	AUX	_	VerbForm=Inf	4	cop	_	Subject=SubjRaising
4	médecin	médecin	NOUN	_	Gender=Masc|Number=Sing	2	xcomp	_	_
5	en	en	ADP	_	_	6	case	_	_
6	France	France	PROPN	_	_	4	nmod	_	_
7	en	en	ADP	_	_	8	case	_	_
8	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


