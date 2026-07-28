---
layout: base
title:  'Statistics of dep:comp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dep.html">dep</a></tt>.

27 nodes (0%) are attached to their parents as `dep:comp`.

14 instances of `dep:comp` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.51851851851852.

The following 18 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (4; 15% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 11% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (2; 7% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep:comp	color:blue
1	donc	donc	ADV	_	_	3	advmod	_	AlignBegin=343970|AlignEnd=344305|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=344305|AlignEnd=344305
3	qu'	que	PRON	_	PronType=Int	0	root	_	AlignBegin=344305|AlignEnd=344365|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	AlignBegin=344365|AlignEnd=344405|SpaceAfter=No
5	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	AlignBegin=344405|AlignEnd=344495|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
6	que	que	SCONJ	_	_	9	dep:comp	_	AlignBegin=344495|AlignEnd=344595
7	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=344595|AlignEnd=344655|Exponence[Number]=Inherent|Exponence[Person]=Inherent
8	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	advcl:cleft	_	AlignBegin=344655|AlignEnd=344805|Exponence[Person]=Absent|Filler=obj
9	apprendre	apprendre	VERB	_	VerbForm=Inf	8	xcomp	_	AlignBegin=344805|AlignEnd=345401|Subject=SubjRaising
10	?	?	PUNCT	_	_	3	punct	_	AlignBegin=345401|AlignEnd=345401

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	là	là	ADV	_	_	7	advmod	_	AlignBegin=38265|AlignEnd=38350|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=38350|AlignEnd=38350
3	par	par	ADP	_	_	4	dep:comp	_	AlignBegin=38350|AlignEnd=38550
4	contre	contre	ADP	_	_	7	dep	_	AlignBegin=38550|AlignEnd=38710|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=38710|AlignEnd=38710
6	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	AlignBegin=38710|AlignEnd=38810|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	doit	devoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=38810|AlignEnd=38910|Exponence[Person]=Absent
8	être	être	AUX	_	VerbForm=Inf	10	cop	_	AlignBegin=38910|AlignEnd=39040|Subject=SubjRaising
9	plus	plus	ADV	_	_	10	advmod	_	AlignBegin=39040|AlignEnd=39266|Overlap=Rhap_D0009-27
10	onéreux	onéreux	ADJ	_	Gender=Masc|Number=Sing	7	xcomp	_	AlignBegin=39266|AlignEnd=39771|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyFemWithLiaison|Overlap=Rhap_D0009-27|SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	AlignBegin=39771|AlignEnd=39771|Overlap=Rhap_D0009-21bis

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep:comp	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	AlignBegin=345855|AlignEnd=345945|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	AlignBegin=345945|AlignEnd=346005
3	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	AlignBegin=346005|AlignEnd=346179|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison
4	que	que	SCONJ	_	_	5	dep:comp	_	AlignBegin=346179|AlignEnd=346514
5	depuis	depuis	ADP	_	_	3	dep:comp	_	AlignBegin=346514|AlignEnd=346915|Scrap=Yes|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	AlignBegin=346915|AlignEnd=346915
7	euh	euh	INTJ	_	_	5	discourse	_	AlignBegin=346915|AlignEnd=346955|SpaceAfter=No
8	…	…	PUNCT	_	_	3	punct	_	AlignBegin=346955|AlignEnd=346955

~~~


