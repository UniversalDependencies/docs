---
layout: base
title:  'Statistics of dislocated:obl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dislocated:obl`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="fr_parisstories-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-subj.html">dislocated:subj</a></tt>.

3 nodes (0%) are attached to their parents as `dislocated:obl`.

3 instances of `dislocated:obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.33333333333333.

The following 2 pairs of parts of speech are connected with `dislocated:obl`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 dislocated:obl	color:blue
1	enfin	enfin	ADV	_	ExtPos=INTJ	5	discourse	_	_
2	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	5	dislocated:obl	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	5	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
5	apporte	apporter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent
6	euh	euh	INTJ	_	_	7	discourse:filler	_	_
7	beaucoup	beaucoup	ADV	_	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 dislocated:obl	color:blue
1	en	en	ADP	_	_	3	case	_	WordAlignmentBegin=35722|WordAlignmentEnd=35890
2	même	même	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=35890|WordAlignmentEnd=36058
3	temps	temps	NOUN	_	Gender=Masc|Number=Sing	9	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=36058|WordAlignmentEnd=36227
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=36227|WordAlignmentEnd=36227
5	Morgane	Morgane	PROPN	_	_	9	dislocated:obl	_	SpaceAfter=No|WordAlignmentBegin=36227|WordAlignmentEnd=36395
6	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=36395|WordAlignmentEnd=36395
7	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=36395|WordAlignmentEnd=36563
8	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	9	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=36563|WordAlignmentEnd=36731
9	connaît	connaître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=36731|WordAlignmentEnd=36899
10	depuis	depuis	ADP	_	_	15	case	_	WordAlignmentBegin=36899|WordAlignmentEnd=37114
11	à	à	ADP	_	_	13	case	_	WordAlignmentBegin=37114|WordAlignmentEnd=37329
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	moins	moins	ADV	_	_	14	obl:mod	_	WordAlignmentBegin=37329|WordAlignmentEnd=37544
14	vingt-deux	vingt-deux	NUM	_	_	15	nummod	_	WordAlignmentBegin=37544|WordAlignmentEnd=37759
15	ans	an	NOUN	_	Gender=Masc|Number=Plur	9	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=37759|WordAlignmentEnd=37974
16	maintenant	maintenant	ADV	_	_	15	advmod	_	SpaceAfter=No|WordAlignmentBegin=37974|WordAlignmentEnd=38189
17	.	.	PUNCT	_	_	9	punct	_	WordAlignmentBegin=38189|WordAlignmentEnd=38189

~~~


