---
layout: base
title:  'Statistics of vocative in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `vocative`

This relation is universal.

57 nodes (0%) are attached to their parents as `vocative`.

31 instances of `vocative` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.03508771929825.

The following 13 pairs of parts of speech are connected with `vocative`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (35; 61% instances), <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (6; 11% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="bg-pos-ADV.html">ADV</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="bg-pos-INTJ.html">INTJ</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="bg-pos-ADV.html">ADV</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="bg-pos-PART.html">PART</a></tt>-<tt><a href="bg-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="bg-pos-X.html">X</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 vocative	color:blue
1	Ах	ах	INTJ	I	_	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	летете	летя	VERB	Vpiiz--2p	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	5	punct	_	_
5	ескадрони	ескадрон	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	3	vocative	_	SpaceAfter=No
6	!	!	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 vocative	color:blue
1	-	-	PUNCT	punct	_	7	punct	_	_
2	Да	да	INTJ	Ta	_	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	докторе	доктор	NOUN	Ncms-v	Gender=Masc|Number=Sing	7	vocative	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	тази	този	DET	Pde-os-f	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	нощ	нощ	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	...	...	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Отечество	отечество	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	5	vocative	_	_
2	любезно	любезен	ADJ	Ansi	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	1	punct	_	_
4	как	как	ADV	Pim	PronType=Int	5	advmod	_	_
5	хубаво	хубав	ADJ	Ansi	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
6	си	съм	AUX	Vxitf-r2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
7	ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	SpaceAfter=No
8	!	!	PUNCT	punct	_	5	punct	_	_

~~~


