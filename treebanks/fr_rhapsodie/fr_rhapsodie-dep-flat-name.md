---
layout: base
title:  'Statistics of flat:name in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_rhapsodie-dep-flat-foreign.html">flat:foreign</a></tt>.

164 nodes (0%) are attached to their parents as `flat:name`.

164 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1219512195122.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (158; 96% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	réponse	réponse	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=93449|WordAlignmentEnd=94023
2	à	à	ADP	_	_	3	mark	_	WordAlignmentBegin=94023|WordAlignmentEnd=94124
3	suivre	suivre	VERB	_	VerbForm=Inf	1	acl	_	Subject=NoRaising|WordAlignmentBegin=94124|WordAlignmentEnd=94478
4	avec	avec	ADP	_	_	5	case	_	WordAlignmentBegin=94478|WordAlignmentEnd=94795
5	Hélène	Hélène	PROPN	_	_	3	obl:mod	_	WordAlignmentBegin=94795|WordAlignmentEnd=95036
6	Chevalier	Chevalier	PROPN	_	_	5	flat:name	_	WordAlignmentBegin=95036|WordAlignmentEnd=95615
7	à	à	ADP	_	_	9	case	_	WordAlignmentBegin=95615|WordAlignmentEnd=95720
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	congrès	congrès	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=95720|WordAlignmentEnd=96044
10	de	de	ADP	_	_	11	case	_	WordAlignmentBegin=96044|WordAlignmentEnd=96088
11	Barcelone	Barcelone	PROPN	_	_	9	nmod	_	SpaceAfter=No|WordAlignmentBegin=96088|WordAlignmentEnd=96699
12	.	.	PUNCT	_	_	1	punct	_	WordAlignmentBegin=96699|WordAlignmentEnd=96699

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	5	vocative	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=109636|WordAlignmentEnd=109861
2	Mitterrand	Mitterrand	PROPN	_	_	1	flat:name	_	SpaceAfter=No|WordAlignmentBegin=109861|WordAlignmentEnd=110342
3	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=110342|WordAlignmentEnd=110574
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	WordAlignmentBegin=110574|WordAlignmentEnd=110649
5	seconde	seconde	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=110649|WordAlignmentEnd=110902
6	.	.	PUNCT	_	_	5	punct	_	WordAlignmentBegin=110902|WordAlignmentEnd=110902

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 flat:name	color:blue
1	et	et	CCONJ	_	_	6	cc	_	WordAlignmentBegin=21741|WordAlignmentEnd=21993
2	donc	donc	ADV	_	_	6	advmod	_	SpaceAfter=No|WordAlignmentBegin=22312|WordAlignmentEnd=22487
3	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=22487|WordAlignmentEnd=22487
4	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=22487|WordAlignmentEnd=22607
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	WordAlignmentBegin=22607|WordAlignmentEnd=22667
6	parti	partir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=22667|WordAlignmentEnd=23118
7	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=23118|WordAlignmentEnd=23118
8	euh	euh	INTJ	_	_	6	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=23118|WordAlignmentEnd=23257
9	,	,	PUNCT	_	_	12	punct	_	WordAlignmentBegin=23257|WordAlignmentEnd=23257
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=23257|WordAlignmentEnd=23377
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	WordAlignmentBegin=23377|WordAlignmentEnd=23437
12	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	6	discourse	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=23437|WordAlignmentEnd=23547
13	,	,	PUNCT	_	_	15	punct	_	WordAlignmentBegin=23547|WordAlignmentEnd=23547
14	avec	avec	ADP	_	_	15	case	_	WordAlignmentBegin=23547|WordAlignmentEnd=23737
15	Jean-François	Jean-François	PROPN	_	_	6	obl:mod	_	WordAlignmentBegin=23737|WordAlignmentEnd=24277
16	Alain	Alain	PROPN	_	_	15	flat:name	_	SpaceAfter=No|WordAlignmentBegin=24277|WordAlignmentEnd=24518
17	,	,	PUNCT	_	_	18	punct	_	WordAlignmentBegin=24518|WordAlignmentEnd=24518
18	Alexandre	Alexandre	PROPN	_	_	15	conj	_	Overlap=Rhap_D2007-21|WordAlignmentBegin=24518|WordAlignmentEnd=25413
19	XXX	XXX	X	_	ExtPos=PROPN	18	flat:name	_	Overlap=Rhap_D2007-21|SpaceAfter=No|WordAlignmentBegin=24518|WordAlignmentEnd=25413
20	.	.	PUNCT	_	_	6	punct	_	Overlap=Rhap_D2007-14|WordAlignmentBegin=25413|WordAlignmentEnd=25413

~~~


