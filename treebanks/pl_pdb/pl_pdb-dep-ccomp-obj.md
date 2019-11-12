---
layout: base
title:  'Statistics of ccomp:obj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `ccomp:obj`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="pl_pdb-dep-ccomp-cleft.html">ccomp:cleft</a></tt>.

846 nodes (0%) are attached to their parents as `ccomp:obj`.

845 instances of `ccomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.63120567375887.

The following 11 pairs of parts of speech are connected with `ccomp:obj`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (628; 74% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (114; 13% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (70; 8% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (15; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp:obj	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	ukrywamy	ukrywać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
4	że	że	SCONJ	comp	_	5	mark	5:mark	_
5	trzeba	trzeba	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	2	ccomp:obj	2:ccomp:obj	_
6	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux	5:aux	_
7	wielu	wiele	DET	num:pl:acc:m1:rec	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	8	det:numgov	8:det:numgov	_
8	ludzi	człowiek	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	9	obj	9:obj	_
9	aresztować	aresztować	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	5	xcomp	5:xcomp	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp:obj	color:blue
1	Dodaje	dodawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
3	że	że	SCONJ	comp	_	6	mark	6:mark	_
4	zwolnienia	zwolnienie	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	6:nsubj	_
5	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	nieuniknione	nieunikniony	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	1	ccomp:obj	1:ccomp:obj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp:obj	color:blue
1	Mówił	mówić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
3	że	że	SCONJ	comp	_	7	mark	7:mark	_
4	jesteś	być	AUX	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
5	naszym	nasz	DET	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	7	det:poss	7:det:poss	_
6	najlepszym	dobry	ADJ	adj:sg:inst:m1:sup	Animacy=Hum|Case=Ins|Degree=Sup|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	klientem	klient	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	1	ccomp:obj	1:ccomp:obj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


