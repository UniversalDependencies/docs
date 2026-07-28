---
layout: base
title:  'Statistics of flat:name in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_rhapsodie-dep-flat-foreign.html">flat:foreign</a></tt>.

161 nodes (0%) are attached to their parents as `flat:name`.

161 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12422360248447.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (158; 98% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	réponse	réponse	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=93449|AlignEnd=94023|Exponence[Gender]=Inherent|Exponence[Number]=Absent
2	à	à	ADP	_	_	3	mark	_	AlignBegin=94023|AlignEnd=94124
3	suivre	suivre	VERB	_	VerbForm=Inf	1	acl	_	AlignBegin=94124|AlignEnd=94478|Subject=NoRaising
4	avec	avec	ADP	_	_	5	case	_	AlignBegin=94478|AlignEnd=94795
5	Hélène	Hélène	PROPN	_	_	3	obl:mod	_	AlignBegin=94795|AlignEnd=95036
6	Chevalier	Chevalier	PROPN	_	_	5	flat:name	_	AlignBegin=95036|AlignEnd=95615
7	à	à	ADP	_	_	9	case	_	AlignBegin=95615|AlignEnd=95720
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	AlignBegin=95615|AlignEnd=95720
9	congrès	congrès	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	AlignBegin=95720|AlignEnd=96044|Exponence[Gender]=Inherent|Exponence[Number]=Absent
10	de	de	ADP	_	_	11	case	_	AlignBegin=96044|AlignEnd=96088
11	Barcelone	Barcelone	PROPN	_	_	9	nmod	_	AlignBegin=96088|AlignEnd=96699|SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	AlignBegin=96699|AlignEnd=96699

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	AlignBegin=9213|AlignEnd=9852|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	remonte	remonter	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=9852|AlignEnd=10523|Exponence[Person]=Absent|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	AlignBegin=10493|AlignEnd=10493
4	euh	euh	INTJ	_	_	2	discourse	_	AlignBegin=10523|AlignEnd=10883|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	AlignBegin=10883|AlignEnd=10883
6	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	AlignBegin=10883|AlignEnd=10933|Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No
7	avenue	avenue	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	AlignBegin=10933|AlignEnd=11143|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
8	Général	général	NOUN	_	Gender=Masc|Number=Sing	7	nmod:appos	_	AlignBegin=11143|AlignEnd=11643|Exponence[Gender]=Inherent
9	Champon	Champon	PROPN	_	_	8	flat:name	_	AlignBegin=11643|AlignEnd=12105|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	AlignBegin=12105|AlignEnd=12105

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 flat:name	color:blue
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=21741|AlignEnd=21993
2	donc	donc	ADV	_	_	6	advmod	_	AlignBegin=22312|AlignEnd=22487|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	AlignBegin=22487|AlignEnd=22487
4	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	nsubj	_	AlignBegin=22487|AlignEnd=22607|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	AlignBegin=22607|AlignEnd=22667
6	parti	partir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=22667|AlignEnd=23118|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Tense[denom]=Past
7	,	,	PUNCT	_	_	8	punct	_	AlignBegin=23118|AlignEnd=23118
8	euh	euh	INTJ	_	_	6	discourse	_	AlignBegin=23118|AlignEnd=23257|SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	AlignBegin=23257|AlignEnd=23257
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	AlignBegin=23257|AlignEnd=23377|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	AlignBegin=23377|AlignEnd=23437
12	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	6	discourse	_	AlignBegin=23437|AlignEnd=23547|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	AlignBegin=23547|AlignEnd=23547
14	avec	avec	ADP	_	_	15	case	_	AlignBegin=23547|AlignEnd=23737
15	Jean-François	Jean-François	PROPN	_	_	6	obl:mod	_	AlignBegin=23737|AlignEnd=24277
16	Alain	Alain	PROPN	_	_	15	flat:name	_	AlignBegin=24277|AlignEnd=24518|SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	AlignBegin=24518|AlignEnd=24518
18	Alexandre	Alexandre	PROPN	_	_	15	conj	_	AlignBegin=24518|AlignEnd=25413|Overlap=Rhap_D2007-21
19	XXX	XXX	X	_	ExtPos=PROPN	18	flat:name	_	AlignBegin=24518|AlignEnd=25413|Overlap=Rhap_D2007-21|SpaceAfter=No
20	.	.	PUNCT	_	_	6	punct	_	AlignBegin=25413|AlignEnd=25413|Overlap=Rhap_D2007-14

~~~


