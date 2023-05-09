---
layout: base
title:  'Statistics of acl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_parisstories-dep-acl-relcl.html">acl:relcl</a></tt>.

139 nodes (0%) are attached to their parents as `acl`.

137 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96402877697842.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (127; 91% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl	color:blue
1	moi	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	dislocated	_	AlignBegin=36331|AlignEnd=36594|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=36594|AlignEnd=36594
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=36594|AlignEnd=36858
4	savais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	7	reparandum	_	AlignBegin=36858|AlignEnd=37121|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	AlignBegin=37121|AlignEnd=37121
6	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=37121|AlignEnd=37384|SpaceAfter=No
7	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	AlignBegin=37384|AlignEnd=37648
8	de	de	ADP	_	_	10	det	_	AlignBegin=37648|AlignEnd=37911|ExtPos=DET|Idiom=Yes
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	fixed	_	AlignBegin=37911|AlignEnd=38174|InIdiom=Yes
10	conscience	conscience	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	AlignBegin=38174|AlignEnd=38438
11	que	que	SCONJ	_	_	15	mark	_	AlignBegin=38438|AlignEnd=38701
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj	_	AlignBegin=38701|AlignEnd=38964|SpaceAfter=No
13	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	AlignBegin=38964|AlignEnd=39228
14	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	15	det	_	AlignBegin=39228|AlignEnd=39491
15	père	père	NOUN	_	Gender=Masc|Number=Sing	10	acl	_	AlignBegin=39491|AlignEnd=39754|SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	_	AlignBegin=39754|AlignEnd=39754

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 acl	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	essayé	essayer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	rendre	rendre	VERB	_	VerbForm=Inf	3	xcomp	_	Subject=SubjRaising
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	classes	classe	NOUN	_	Gender=Fem|Number=Plur	5	obj	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	advmod	_	ExtPos=ADV|Idiom=Yes
9	petit	petit	ADJ	_	Gender=Masc|Number=Sing	8	fixed	_	InIdiom=Yes
10	peu	peu	NOUN	_	Gender=Masc|Number=Sing	8	fixed	_	InIdiom=Yes
11	plus	plus	ADV	_	_	12	advmod	_	_
12	jolies	joli	ADJ	_	Gender=Fem|Number=Plur	7	amod	_	_
13	que	que	SCONJ	_	_	14	case	_	_
14	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	obj	_	_
15	qu'	que	PRON	_	PronType=Rel	14	acl	_	SpaceAfter=No
16	elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Prs	15	nsubj	_	_
17	n'	ne	ADV	_	_	15	advmod	_	SpaceAfter=No
18	étaient	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	SpaceAfter=No
19	.	.	PUNCT	_	_	3	punct	_	_

~~~


