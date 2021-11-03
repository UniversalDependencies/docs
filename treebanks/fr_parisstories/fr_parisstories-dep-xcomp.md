---
layout: base
title:  'Statistics of xcomp in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `xcomp`

This relation is universal.

476 nodes (2%) are attached to their parents as `xcomp`.

471 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1281512605042.

The following 20 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (311; 65% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (62; 13% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (53; 11% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (13; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (10; 2% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	ensuite	ensuite	ADV	_	_	3	advmod	_	_
2	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
3	vas	aller	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rajouter	rajouter	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	œufs	œuf	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	puis	puis	ADV	_	_	6	advmod	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
6	étais	être	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
7	hyper	hyper	ADV	_	_	8	advmod	_	_
8	fière	fier	ADJ	_	Gender=Fem|Number=Sing	6	xcomp	_	_
9	d'	de	ADP	_	_	10	mark	_	SpaceAfter=No
10	aller	aller	VERB	_	VerbForm=Inf	8	advcl	_	_
11	en	en	ADP	_	_	12	case	_	_
12	prépa	prépa	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	_
13	aussi	aussi	ADV	_	_	6	advmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	là	là	ADV	_	_	4	advmod	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
4	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	galère	galère	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	_
8	pour	pour	ADP	_	_	9	mark	_	_
9	mélanger	mélanger	VERB	_	VerbForm=Inf	7	acl	_	_
10	et	et	CCONJ	_	_	12	cc	_	_
11	tout	tout	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
12	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


