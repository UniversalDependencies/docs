---
layout: base
title:  'Statistics of discourse:tag in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `discourse:tag`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-discourse.html">discourse</a></tt>.
There are also 1 other language-specific subtypes of `discourse`: <tt><a href="fr_parisstories-dep-discourse-filler.html">discourse:filler</a></tt>.

19 nodes (0%) are attached to their parents as `discourse:tag`.

19 instances of `discourse:tag` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.26315789473684.

The following 9 pairs of parts of speech are connected with `discourse:tag`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (6; 32% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 21% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (2; 11% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 discourse:tag	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=73424|WordAlignmentEnd=73639
2	fait	faire	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	reparandum	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=73639|WordAlignmentEnd=73854
3	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=73854|WordAlignmentEnd=73854
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	reparandum	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=73854|WordAlignmentEnd=74069
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=74069|WordAlignmentEnd=74069
6	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=74069|WordAlignmentEnd=74283
7	change	changer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=74283|WordAlignmentEnd=74498
8	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=74498|WordAlignmentEnd=74498
9	hein	hein	INTJ	_	_	7	discourse:tag	_	WordAlignmentBegin=74498|WordAlignmentEnd=74713
10	?	?	PUNCT	_	_	7	punct	_	WordAlignmentBegin=74713|WordAlignmentEnd=74713

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 discourse:tag	color:blue
1	parce	parce	ADV	_	ExtPos=SCONJ	5	mark	_	Idiom=Yes|SingleSpeaker=Yes|WordAlignmentBegin=38110|WordAlignmentEnd=38244
2	qu'	que	SCONJ	_	_	1	fixed	_	InIdiom=Yes|SpaceAfter=No|WordAlignmentBegin=38244|WordAlignmentEnd=38379
3	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=38379|WordAlignmentEnd=38513
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	WordAlignmentBegin=38513|WordAlignmentEnd=38647
5	déménagé	déménager	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Coconstruct=mod::ParisStories_2022_7_chienGourmand__13::4|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=38647|WordAlignmentEnd=38781
6	entre	entre	ADP	_	_	7	case	_	WordAlignmentBegin=38781|WordAlignmentEnd=38916
7	temps	temps	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=38916|WordAlignmentEnd=39050
8	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=39050|WordAlignmentEnd=39050
9	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	10	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=39050|WordAlignmentEnd=39184
10	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	14	discourse	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=39184|WordAlignmentEnd=39318
11	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=39318|WordAlignmentEnd=39318
12	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	14	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=39318|WordAlignmentEnd=39453
13	te	toi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	14	obj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=39453|WordAlignmentEnd=39587
14	rappelles	rappeller	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	discourse:tag	_	Exponence[Person]=Absent|WordAlignmentBegin=39587|WordAlignmentEnd=39721
15	?	?	PUNCT	_	_	5	punct	_	WordAlignmentBegin=39721|WordAlignmentEnd=39721

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 discourse:tag	color:blue
1	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	WordAlignmentBegin=106906|WordAlignmentEnd=107076
2	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	LiaisonAfter=Yes|WordAlignmentBegin=107076|WordAlignmentEnd=107246
3	école	école	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=107246|WordAlignmentEnd=107416
4	de	de	ADP	_	_	5	case	_	WordAlignmentBegin=107416|WordAlignmentEnd=107586
5	commerce	commerce	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=107586|WordAlignmentEnd=107756
6	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=107756|WordAlignmentEnd=107756
7	ni	ni	CCONJ	_	_	8	cc	_	WordAlignmentBegin=107756|WordAlignmentEnd=107926
8	rien	rien	PRON	_	Gender=Masc|Number=Sing|PronType=Neg	3	conj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|SpaceAfter=No|WordAlignmentBegin=107926|WordAlignmentEnd=108096
9	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=108096|WordAlignmentEnd=108096
10	hein	hein	INTJ	_	_	8	discourse:tag	_	WordAlignmentBegin=108096|WordAlignmentEnd=108266
11	?	?	PUNCT	_	_	3	punct	_	WordAlignmentBegin=108266|WordAlignmentEnd=108266

~~~


