---
layout: base
title:  'Statistics of parataxis in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="fr_parisstories-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

18 nodes (0%) are attached to their parents as `parataxis`.

18 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.61111111111111.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (9; 50% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (2; 11% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 parataxis	color:blue
1	euh	euh	INTJ	_	_	8	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	de	de	ADP	_	_	5	case	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	coup	coup	NOUN	_	Gender=Masc|Number=Sing	8	discourse	_	_
6	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
7	se	se	PRON	_	Person=3|PronType=Prs	8	dep:comp	_	_
8	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	:	:	PUNCT	_	_	15	punct	_	_
10	bon	bon	INTJ	_	_	15	discourse	_	_
11	bah	bah	INTJ	_	_	15	discourse	_	_
12	tranquille	tranquille	ADJ	_	Number=Sing	15	advcl	_	_
13	tranquille	tranquille	ADJ	_	Number=Sing	12	conj	_	_
14	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	15	nsubj	_	_
15	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	temps	temps	NOUN	_	Gender=Masc|Number=Sing	15	obj	_	_
18	euh	euh	INTJ	_	_	8	discourse	_	SpaceAfter=No
19	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 parataxis	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	ouais	ouais	INTJ	_	_	3	parataxis	_	SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 23 parataxis	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
3	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	tout	tout	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	cercle	cercle	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
7	de	de	ADP	_	_	9	case	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	collégiens	collégien	NOUN	_	Gender=Masc|Number=Plur	6	nmod	_	_
10	autour	autour	ADV	_	_	3	advmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	hyper	hyper	ADV	_	_	13	advmod	_	_
13	choqués	choquer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	9	acl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	et	et	CCONJ	_	_	17	cc	_	_
16	qui	qui	PRON	_	PronType=Rel	17	nsubj	_	_
17	étaient	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	9	acl	_	_
18	genre	genre	INTJ	_	_	23	discourse	_	_
19	là	là	ADV	_	_	17	xcomp	_	SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	ah	ah	INTJ	_	_	23	discourse	_	_
22	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=1|PronType=Prs	23	det	_	_
23	dieu	dieu	NOUN	_	Gender=Masc|Number=Sing	17	parataxis	_	Reported=Yes
24	!	!	PUNCT	_	_	3	punct	_	_

~~~


