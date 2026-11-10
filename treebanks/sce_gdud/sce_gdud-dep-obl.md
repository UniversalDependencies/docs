---
layout: base
title:  'Statistics of obl in UD_Dongxiang-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Dongxiang-GDUD: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="sce_gdud-dep-obl-tmod.html">obl:tmod</a></tt>.

40 nodes (4%) are attached to their parents as `obl`.

37 instances of `obl` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.325.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (13; 33% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (10; 25% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (7; 18% instances), <tt><a href="sce_gdud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (4; 10% instances), <tt><a href="sce_gdud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="sce_gdud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sce_gdud-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl	color:blue
1	ene	ene	DET	_	PronType=Dem	2	det	_	_
2	fugierei	fugierei	NOUN	_	Number=Sing	6	nsubj	_	_
3	dolon	dolon	NUM	_	NumType=Card	5	nummod	_	_
4	ula	ula	NOUN	_	_	5	obl	_	SpaceAfter=No
5	fugierei	_	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin	6	acl:relcl	_	Verbalizer=Yes
6	holu-zhiwo	holu-zhiwo	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin	0	root	_	_
7	dolon	dolon	NUM	_	NumType=Card	8	nummod	_	_
8	ghon	ghon	NOUN	_	_	6	obl	_	SpaceAfter=No
9	gie-ne	gie-ne	VERB	_	Mood=Imp|VerbForm=Fin	6	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	ada-mini	ada-mini	NOUN	_	_	3	nsubj	_	_
2	giə-də	giə-də	NOUN	_	Case=Dat	3	obl	_	_
3	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_
5	ana-mini	ana-mini	NOUN	_	_	8	nsubj	_	_
6	ja	ja	PART	_	_	8	discourse	_	_
7	giə-də	giə-də	NOUN	_	Case=Dat	8	obl	_	_
8	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	3	parataxis	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 obl	color:blue
1	bi	bi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	sumula	sumula	VERB	_	VerbForm=Conv	0	root	_	_
3	sə	sə	SCONJ	_	VerbForm=Conv	2	mark	_	_
4	udu	udu	NOUN	_	Case=Nom	2	obj	_	_
5	nia	nia	NUM	_	NumType=Card	4	nummod	_	_
6	dʑindʑi	dʑindʑi	VERB	_	Case=Dat	2	obl	_	_
7	da	da	ADP	_	Case=Dat	6	case	_	_
8	na	na	PART	_	_	6	mark	_	Ref=Yes
9	tʂini	tʂini	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	12	obl	_	_
10	nia	nia	NUM	_	NumType=Card	12	nummod	_	_
11	udza	udza	VERB	_	Mood=Ind|VerbForm=Fin	12	acl	_	_
12	ira	ira	VERB	_	Tense=Pres	2	xcomp	_	_
13	na	na	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	12	aux	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


