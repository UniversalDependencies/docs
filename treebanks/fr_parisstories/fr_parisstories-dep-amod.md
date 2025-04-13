---
layout: base
title:  'Statistics of amod in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `amod`

This relation is universal.

649 nodes (2%) are attached to their parents as `amod`.

458 instances of `amod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38983050847458.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (588; 91% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (34; 5% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (11; 2% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (11; 2% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	de	de	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	coup	coup	NOUN	_	Gender=Masc|Number=Sing	6	discourse	_	_
5	tu	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	finis	finir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
7	avec	avec	ADP	_	_	10	case	_	_
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	vraie	vrai	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
10	boule	boule	NOUN	_	Gender=Fem|Number=Sing	6	obl:mod	_	_
11	de	de	ADP	_	_	12	case	_	_
12	pâte	pâte	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	là	là	ADV	_	_	4	advmod	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
4	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	Subject=SubjRaising
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	galère	galère	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	_
8	pour	pour	ADP	_	_	9	mark	_	_
9	mélanger	mélanger	VERB	_	VerbForm=Inf	7	acl	_	Subject=NoRaising
10	et	et	CCONJ	_	_	12	cc	_	_
11	tout	tout	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
12	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	et	et	CCONJ	_	_	10	cc	_	AlignBegin=81083|AlignEnd=81312
2	petit	petit	ADJ	_	_	4	amod	_	AlignBegin=81312|AlignEnd=81540
3	à	à	ADP	_	_	4	case	_	AlignBegin=81540|AlignEnd=81540
4	petit	petit	ADJ	_	_	10	obl:mod	_	AlignBegin=81540|AlignEnd=81769|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	AlignBegin=81769|AlignEnd=81769
6	bah	bah	INTJ	_	_	4	discourse	_	AlignBegin=81769|AlignEnd=81998|SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	AlignBegin=81998|AlignEnd=81998
8	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj:pass	_	AlignBegin=81998|AlignEnd=82227
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	AlignBegin=82227|AlignEnd=82455
10	devenue	devenir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	AlignBegin=82455|AlignEnd=82684
11	amie	ami	NOUN	_	Gender=Fem|Number=Sing	10	xcomp	_	AlignBegin=82684|AlignEnd=82913|SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	AlignBegin=82913|AlignEnd=82913

~~~


