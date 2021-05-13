---
layout: base
title:  'Statistics of aux in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `aux`

This relation is universal.
There are 4 language-specific subtypes of `aux`: <tt><a href="pl_lfg-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_lfg-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_lfg-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_lfg-dep-aux-pass.html">aux:pass</a></tt>.

547 nodes (0%) are attached to their parents as `aux`.

305 instances of `aux` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29250457038391.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (528; 97% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (11; 2% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	Aga	Aga	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
2	cały	cały	ADJ	adj:sg:acc:m3:pos	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	3	amod	3:amod	_
3	czas	czas	NOUN	subst:sg:acc:m3	Case=Acc|Gender=Masc|Number=Sing|SubGender=Masc3	4	obl	4:obl	_
4	pyta	pytać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
6	czy	czy	PART	qub	PartType=Int	10	mark	10:mark	_
7	nie	nie	PART	qub	Polarity=Neg	10	advmod	10:advmod	_
8	będę	być	AUX	bedzie:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	10	aux	10:aux	_
9	się	się	PRON	qub	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
10	nudził	nudzić	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux	color:blue
1	Co	co	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	0:root	_
2	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	1	cop	1:cop	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	1:aux	_
4	balistyka	balistyka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	1:nsubj	SpaceAfter=No
5	?	?	PUNCT	interp	PunctType=Qest	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 aux	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	głowa	głowa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
3	tego	ten	DET	adj:sg:gen:m2:pos	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem|SubGender=Masc2	4	det	4:det	_
4	orła	orzeł	NOUN	subst:sg:gen:m2	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc2	2	nmod:poss	2:nmod:poss	_
5	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	2	cop	2:cop	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	2:aux	_
7	ten	ten	DET	adj:sg:nom:m1:pos	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem|SubGender=Masc1	9	det	9:det	_
8	nasz	nasz	DET	adj:sg:nom:m1:pos	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs|SubGender=Masc1	9	det	9:det	_
9	prezydent	prezydent	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	nsubj	2:nsubj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


