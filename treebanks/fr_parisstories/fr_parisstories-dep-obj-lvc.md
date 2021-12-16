---
layout: base
title:  'Statistics of obj:lvc in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-obj.html">obj</a></tt>.

19 nodes (0%) are attached to their parents as `obj:lvc`.

19 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84210526315789.

The following 3 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (17; 89% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj:lvc	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	trop	trop	ADV	_	_	5	advmod	_	_
5	peur	peur	NOUN	_	Gender=Fem|Number=Sing	3	obj:lvc	_	_
6	de	de	ADP	_	_	8	mark	_	_
7	se	se	PRON	_	Person=3|PronType=Prs	8	obj	_	_
8	relever	relever	VERB	_	VerbForm=Inf	5	xcomp	_	_
9	en	en	ADP	_	_	3	advmod	_	ExtPos=ADV|Idiom=Yes
10	fait	fait	NOUN	_	Gender=Masc|Number=Sing	9	fixed	_	InIdiom=Yes|SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj:lvc	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No
3	avais	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
4	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj:lvc	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	y	y	PRON	_	Person=3|PronType=Prs	8	obl:mod	_	_
8	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
9	d'	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	11	det	_	SpaceAfter=No
10	énormes	énorme	ADJ	_	Gender=Masc|Number=Plur	11	amod	_	_
11	bâtiments	bâtiment	NOUN	_	Gender=Masc|Number=Plur	8	obj	_	_
12	avec	avec	ADP	_	_	14	case	_	_
13	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	14	det	_	_
14	gens	gens	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	_
15	mais	mais	CCONJ	_	_	16	cc	_	_
16	partout	partout	ADV	_	_	14	advmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	mais	mais	CCONJ	_	_	20	cc	_	_
19	vraiment	vraiment	ADV	_	_	20	advmod	_	_
20	partout	partout	ADV	_	_	16	reparandum	_	_
21	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obj:lvc	color:blue
1	et	et	CCONJ	_	_	7	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	7	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	SpaceAfter=No
6	en	en	PRON	_	Person=3|PronType=Prs	9	dep:comp	_	_
7	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
8	tellement	tellement	ADV	_	_	9	advmod	_	_
9	marre	marre	ADV	_	_	7	obj:lvc	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


