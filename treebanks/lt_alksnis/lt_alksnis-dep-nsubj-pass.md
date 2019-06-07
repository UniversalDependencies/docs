---
layout: base
title:  'Statistics of nsubj:pass in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-nsubj.html">nsubj</a></tt>.

105 nodes (0%) are attached to their parents as `nsubj:pass`.

58 instances of `nsubj:pass` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40952380952381.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (87; 83% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (10; 10% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (6; 6% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	,	,	PUNCT	Z	_	5	punct	5:punct	_
2	kaip	kaip	SCONJ	Cg	_	5	mark	5:mark	_
3	tas	tas	DET	Pgmsnn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	4	det	4:det	_
4	sąrašas	sąrašas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
5	sudarytas	sudaryti	VERB	Vgps-smpnnnn-p	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	Dokumentui	dokumentas	NOUN	Ncmsdn-	Case=Dat|Gender=Masc|Number=Sing	0	root	0:root	_
2	peržengti	peržengti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	_
3	paskutinį	paskutinis	ADJ	Agpmsan	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	laiptelį	laiptelis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	_
5	-	-	PUNCT	Z	_	6	punct	6:punct	_
6	priėmimą	priėmimas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	9:punct	_
8	kuris	kuris	DET	Pgmsnn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Int	9	nsubj:pass	9:nsubj:pass	_
9	planuojamas	planuoti	VERB	Vgpp-smpnnnn-p	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	6	acl	6:acl	_
10	gruodį	gruodis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	9	obl	9:obl	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 nsubj:pass	color:blue
1	Net	net	PART	Qg	_	2	advmod:emph	2:advmod:emph	_
2	nežinau	nežinoti	VERB	Vgmp1s--y--ni-	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	7:punct	_
4	ar	ar	CCONJ	Cg	_	7	mark	7:mark	_
5	aš	aš	PRON	Pg-snn	Case=Nom|Definite=Ind|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	_
6	tuo	tas	DET	Pgmsin	Case=Ins|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	7	det	7:det	_
7	daiktu	daiktas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	2	dep	2:dep	SpaceAfter=No
8	,	,	PUNCT	Z	_	12	punct	12:punct	_
9	ar	ar	CCONJ	Cg	_	12	mark	12:mark	_
10	tas	tas	DET	Pgmsnn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	11	det	11:det	_
11	daiktas	daiktas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
12	manimi	aš	PRON	Pg-sin	Case=Ins|Definite=Ind|Number=Sing|Person=1|PronType=Prs	7	conj	2:dep|7:conj	_
13	–	–	PUNCT	Z	_	2	punct	2:punct	_
14	mudu	aš	PRON	Pgmdnn	Case=Nom|Definite=Ind|Gender=Masc|Number=Dual|Person=1|PronType=Prs	17	nsubj:pass	17:nsubj:pass	_
15	vienas	vienas	PRON	Pgmsnn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	16	nmod	16:nmod	_
16	kitu	kitas	PRON	Pgmsin	Case=Ins|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	17	obj	17:obj	_
17	nepatenkinti	nepatenkinti	VERB	Vgps-pmpynnn-p	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Pass	2	conj	0:root|2:conj	SpaceAfter=No
18	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


