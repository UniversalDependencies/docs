---
layout: base
title:  'Statistics of discourse in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `discourse`

This relation is universal.

31 nodes (0%) are attached to their parents as `discourse`.

25 instances of `discourse` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.38709677419355.

The following 8 pairs of parts of speech are connected with `discourse`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (24; 77% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	5	punct	_	_
2	Όχι	όχι	INTJ	AdBa	Polarity=Neg	5	discourse	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	2	punct	_	_
4	έχουν	έχω	AUX	VbMn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
5	πεθάνει	πεθαίνω	VERB	VbMn	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
6	και	και	CCONJ	CjCo	_	8	cc	_	_
7	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	δύο	δύο	NUM	NmCd	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	5	nsubj	_	_
9	»	»	PUNCT	CPUNCT	PunctType=Quot	5	punct	_	SpaceAfter=No
10	.	.	PUNCT	PTERMP	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 discourse	color:blue
1	Βλέπετε	βλέπω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	discourse	_	_
2	,	,	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_
3	αυτοί	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	10	nsubj	_	_
4	που	που	PRON	PnRe	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	5	nsubj	_	_
5	έχουν	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	σκάφη	σκάφος	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	5	obj	_	_
7	αναψυχής	αναψυχή	NOUN	NoCm	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	10	cop	_	_
9	όλοι	όλος	DET	AjBa	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	10	det	_	_
10	εύποροι	εύπορος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
11	και	και	CCONJ	CjCo	_	12	cc	_	_
12	έχουν	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	conj	_	_
13	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	14	det	_	_
14	κονέ	κονέ	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	PTERMP	PunctType=Peri	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	4	punct	_	_
2	Καλέ	καλέ	INTJ	Ij	_	4	discourse	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
4	βέβαια	βέβαια	ADV	AdBa	_	0	root	_	_
5	»	»	PUNCT	CPUNCT	PunctType=Quot	4	punct	_	SpaceAfter=No
6	.	.	PUNCT	PTERMP	PunctType=Peri	4	punct	_	_

~~~


