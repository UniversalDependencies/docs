---
layout: base
title:  'Statistics of advcl in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="fr_rhapsodie-dep-advcl-cleft.html">advcl:cleft</a></tt>.

363 nodes (1%) are attached to their parents as `advcl`.

227 instances of `advcl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.03856749311295.

The following 18 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (217; 60% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (39; 11% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (39; 11% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (22; 6% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (11; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (10; 3% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 advcl	color:blue
1	si	si	SCONJ	_	_	4	mark	_	AlignBegin=247281|AlignEnd=247386
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	AlignBegin=247386|AlignEnd=247506|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	t'	toi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=2|PronType=Prs	4	obj	_	AlignBegin=247506|AlignEnd=247556|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	embête	embêter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl	_	AlignBegin=247556|AlignEnd=247776|Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=247776|AlignEnd=247776
6	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=247776|AlignEnd=247856|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	ne	ne	ADV	_	Polarity=Neg	9	advmod	_	AlignBegin=247856|AlignEnd=247882
8	le	lui	PRON	_	Case=Acc|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	AlignBegin=247882|AlignEnd=247966|Exponence[Person]=Inherent
9	mets	mettre	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=247966|AlignEnd=248156|Exponence[Person]=Absent
10	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	AlignBegin=248156|AlignEnd=248340|SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	AlignBegin=248340|AlignEnd=248340

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 advcl	color:blue
1	quand	quand	SCONJ	_	_	4	mark	_	AlignBegin=123349|AlignEnd=123454
2	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=123454|AlignEnd=123564|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
3	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:tense	_	AlignBegin=123564|AlignEnd=123594
4	aimé	aimer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	9	advcl	_	AlignBegin=123594|AlignEnd=123924|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Tense[denom]=Past
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=123924|AlignEnd=123924
6	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	AlignBegin=123924|AlignEnd=123994|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
7	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux:tense	_	AlignBegin=123994|AlignEnd=124060
8	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	AlignBegin=124060|AlignEnd=124250|Tense[denom]=Past
9	fidèle	fidèle	ADJ	_	Gender=Masc|Number=Sing	0	root	_	AlignBegin=124250|AlignEnd=124527|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	AlignBegin=124527|AlignEnd=124659
11	mh	mh	INTJ	_	_	9	discourse	_	AlignBegin=124659|AlignEnd=124799|SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	AlignBegin=124799|AlignEnd=124799

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	2	nsubj	_	AlignBegin=8889|AlignEnd=8989|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown
2	prenez	prendre	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=8989|AlignEnd=9309
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	AlignBegin=9309|AlignEnd=9353|HasSpokenGender=OnlySingExceptWithLiaison
4	rond-point	rond-point	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	AlignBegin=9353|AlignEnd=9811|Exponence[Gender]=Inherent|Exponence[Number]=Absent
5	tout	tout	ADV	_	_	6	advmod	_	AlignBegin=9811|AlignEnd=9955
6	droit	droit	ADJ	_	Gender=Masc|Number=Sing	2	advcl	_	AlignBegin=9955|AlignEnd=10215|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	AlignBegin=10215|AlignEnd=10215

~~~


