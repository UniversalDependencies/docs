---
layout: base
title:  'Statistics of discourse:filler in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `discourse:filler`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-discourse.html">discourse</a></tt>.
There are also 1 other language-specific subtypes of `discourse`: <tt><a href="fr_parisstories-dep-discourse-tag.html">discourse:tag</a></tt>.

1594 nodes (4%) are attached to their parents as `discourse:filler`.

1169 instances of `discourse:filler` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.37703889585947.

The following 14 pairs of parts of speech are connected with `discourse:filler`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (662; 42% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (420; 26% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (160; 10% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (102; 6% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (75; 5% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (39; 2% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (36; 2% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (34; 2% instances), <tt><a href="fr_parisstories-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (20; 1% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (18; 1% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (11; 1% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (11; 1% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 discourse:filler	color:blue
1	XXX	XXX	X	_	_	6	discourse	_	wordform=xxx
2	et	et	CCONJ	_	_	6	cc	_	_
3	euh	euh	INTJ	_	_	6	discourse:filler	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	et	et	CCONJ	_	_	6	cc	_	_
6	voilà	voilà	VERB	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 discourse:filler	color:blue
1	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	posé	poser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom
4	euh	euh	INTJ	_	_	8	discourse:filler	_	_
5	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	6	reparandum	_	HasSpokenGender=OnlySingExceptWithLiaison
6	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison
7	lunch	lunch	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
8	bag	bag	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
9	dans	dans	ADP	_	_	11	case	_	_
10	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison
11	casier	casier	NOUN	_	Gender=Masc|Number=Sing	3	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse:filler	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	euh	euh	INTJ	_	_	1	discourse:filler	_	_
3	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	Exponence[Person]=Inherent
4	fallait	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent
5	passer	passer	VERB	_	VerbForm=Inf	4	xcomp	_	Subject=SubjRaising
6	par	par	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison
8	périph	périph	NOUN	_	Gender=Masc|Number=Sing	5	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
9	euh	euh	INTJ	_	_	4	discourse:filler	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


