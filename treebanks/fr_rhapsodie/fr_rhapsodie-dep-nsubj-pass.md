---
layout: base
title:  'Statistics of nsubj:pass in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_rhapsodie-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-nsubj-outer.html">nsubj:outer</a></tt>.

123 nodes (0%) are attached to their parents as `nsubj:pass`.

122 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.41463414634146.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (86; 70% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (35; 28% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	et	et	CCONJ	_	_	5	cc	_	WordAlignmentBegin=284832|WordAlignmentEnd=284862
2	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj:pass	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=284862|WordAlignmentEnd=284892
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	WordAlignmentBegin=284892|WordAlignmentEnd=285062
4	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	WordAlignmentBegin=285062|WordAlignmentEnd=285172
5	payé	payer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=285172|WordAlignmentEnd=285382
6	en	en	ADP	_	_	7	case	_	WordAlignmentBegin=285382|WordAlignmentEnd=285442
7	plus	plus	ADV	_	_	5	advmod	_	SpaceAfter=No|WordAlignmentBegin=285442|WordAlignmentEnd=285638
8	.	.	PUNCT	_	_	5	punct	_	WordAlignmentBegin=285638|WordAlignmentEnd=285638

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=114815|WordAlignmentEnd=114947
2	réunion	réunion	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=114947|WordAlignmentEnd=115533
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	WordAlignmentBegin=115533|WordAlignmentEnd=115659
4	savamment	savamment	ADV	_	_	5	advmod	_	WordAlignmentBegin=115659|WordAlignmentEnd=116243
5	minutée	minuter	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=116243|WordAlignmentEnd=117021
6	.	.	PUNCT	_	_	5	punct	_	WordAlignmentBegin=117021|WordAlignmentEnd=117021

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D2010-63|SpaceAfter=No|WordAlignmentBegin=128158|WordAlignmentEnd=129314
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	reparandum	_	Overlap=Rhap_D2010-63|SpaceAfter=No|WordAlignmentBegin=128158|WordAlignmentEnd=129314
3	,	,	PUNCT	_	_	2	punct	_	Overlap=Rhap_D2010-52|WordAlignmentBegin=129314|WordAlignmentEnd=128158
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj:pass	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D2010-63|SpaceAfter=No|WordAlignmentBegin=128158|WordAlignmentEnd=129314
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D2010-63|Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=128158|WordAlignmentEnd=129314
6	…	…	PUNCT	_	_	5	punct	_	Overlap=Rhap_D2010-52|WordAlignmentBegin=129314|WordAlignmentEnd=129314

~~~


