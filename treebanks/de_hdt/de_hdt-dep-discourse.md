---
layout: base
title:  'Statistics of discourse in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `discourse`

This relation is universal.

25 nodes (0%) are attached to their parents as `discourse`.

20 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt> (23; 92% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Bitte	Bitte	INTJ	ITJ	_	2	discourse	_	_
2	nennen	nennen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	Sie	Sie	PRON	PPER	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
4	uns	uns	PRON	PPER	Case=Dat|Number=Plur|Person=1|PronType=Prs	2	iobj	_	_
5	Ihren	Ihren	PRON	PPOSAT	Case=Acc|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	Provider	Provider	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	_
7	!	!	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	Der	Der	DET	ART	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Nächste	nächste	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
3	bitte	bitte	INTJ	ITJ	_	2	discourse	_	_
4	:	:	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 discourse	color:blue
1	"	"	PUNCT	$(	PunctType=Brck	13	punct	_	_
2	Wenn	Wenn	SCONJ	KOUS	_	9	mark	_	_
3	die	die	DET	ART	Case=Nom|Number=Plur|PronType=Art	4	det	_	_
4	BI	BI	PROPN	NE	Person=3	9	nsubj	_	_
5	(	(	PUNCT	$(	PunctType=Brck	6	punct	_	_
6	Bürgerinitiativen	Initiative	NOUN	NN	Gender=Fem|Number=Plur|Person=3	4	appos	_	_
7	)	)	PUNCT	$(	PunctType=Brck	6	punct	_	_
8	Gespräche	Gespräch	NOUN	NN	Gender=Neut|Number=Plur|Person=3	9	obj	_	_
9	möchten	mögen	AUX	VMFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	13	ccomp	_	_
10	,	,	PUNCT	$,	PunctType=Comm	9	punct	_	_
11	wo	wo	ADV	PWAV	PronType=Int	13	advmod	_	_
12	bitte	bitte	INTJ	ITJ	_	13	discourse	_	_
13	sind	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	denn	denn	ADV	ADV	_	13	advmod	_	_
15	die	die	DET	ART	Case=Nom|Number=Plur|PronType=Art	16	det	_	_
16	BI'n	unknown	NOUN	NN	Person=3	13	nsubj	_	_
17	?	?	PUNCT	$.	PunctType=Peri	13	punct	_	_

~~~


