---
layout: base
title:  'Statistics of nsubj:pass in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="el_gud-dep-nsubj-outer.html">nsubj:outer</a></tt>.

86 nodes (0%) are attached to their parents as `nsubj:pass`.

52 instances of `nsubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97674418604651.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (53; 62% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (14; 16% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (8; 9% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (7; 8% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	κατάνυξη	κατάνυξη	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
3	περιορίζεται	περιορίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	εντός	εντός	ADP	AdBa	_	6	case	_	_
5	της	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	εκκλησίας	εκκλησία	NOUN	NoCm	Case=Gen|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Σωτηρόπουλος	Σωτηρόπουλος	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
3	δολοφονήθηκε	δολοφονώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	με	με	ADP	AsPpSp	_	6	case	_	_
5	ένα	ένας	DET	AtId	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	Beretta	Beretta	X	RgFwOr	Foreign=Yes	3	obl	_	_
7	Px4	Px4	X	RgFwOr	Foreign=Yes	6	flat	_	_
8	Storm	Storm	X	RgFwOr	Foreign=Yes	6	flat	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Και	και	CCONJ	CjCo	_	8	cc	_	_
2	τα	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	4	det	_	_
3	πενήντα	πενήντα	NUM	NmCd	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	4	compound	_	_
4	χιλιάρικα	χιλιάρικο	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Plur	8	nsubj	_	_
5	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	6	nsubj:pass	_	_
6	βρέθηκαν	βρίσκω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	_
7	άθικτα	άθικτος	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Plur	6	advmod	_	_
8	ενισχύουν	ενισχύω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	αυτήν	αυτός	DET	PnDm	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	11	det	_	_
10	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	εκδοχή	εκδοχή	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	PunctType=Peri	8	punct	_	_

~~~


