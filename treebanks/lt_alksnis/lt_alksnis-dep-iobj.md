---
layout: base
title:  'Statistics of iobj in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `iobj`

This relation is universal.

158 nodes (0%) are attached to their parents as `iobj`.

85 instances of `iobj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.12658227848101.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (97; 61% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (34; 22% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (18; 11% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (6; 4% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Todėl	todėl	ADV	Rgp	Degree=Pos	0	root	0:root	_
2	kiekvienai	kiekvienas	DET	Pgfsdn	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing|PronType=Tot	5	det	5:det	_
3	savo	savęs	PRON	Pg--gn	Case=Gen|Definite=Ind|PronType=Prs|Reflex=Yes	4	nmod	4:nmod	_
4	darbo	darbas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod	_
5	dienai	diena	NOUN	Ncfsdn-	Case=Dat|Gender=Fem|Number=Sing	6	iobj	6:iobj	_
6	sugalvoti	sugalvoti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	_
7	užduotis	užduotis	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	6	obj	6:obj	_
8	ir	ir	CCONJ	Cg	_	9	cc	9:cc	_
9	tikslą	tikslas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	7	conj	6:obj|7:conj	SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Gal	gal	PART	Qg	_	0	root	0:root	_
2	tėvas	tėvas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	1:nsubj	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	6:punct	_
4	kad	kad	SCONJ	Cg	_	6	mark	6:mark	_
5	mums	aš	PRON	Pg-pdn	Case=Dat|Definite=Ind|Number=Plur|Person=1|PronType=Prs	6	iobj	6:iobj	_
6	reikia	reikėti	VERB	Vgmp3---n--ni-	Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	acl	1:acl	_
7	trintis	trintis	VERB	Vgi-----n--y--	Polarity=Pos|Reflex=Yes|VerbForm=Inf	6	xcomp	6:xcomp	_
8	tose	tas	DET	Pgfpln	Case=Loc|Definite=Ind|Gender=Fem|Number=Plur|PronType=Dem	9	det	9:det	_
9	eilėse	eilė	NOUN	Ncfpln-	Case=Loc|Gender=Fem|Number=Plur	7	obl	7:obl	SpaceAfter=No
10	?	?	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	O	o	PART	Qg	_	0	root	0:root	_
2	varinis	varinis	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	1:amod	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	6:punct	_
4	kuriuo	kuris	DET	Pgmsin	Case=Ins|Definite=Ind|Gender=Masc|Number=Sing|PronType=Int	6	iobj	6:iobj	_
5	Jasonas	Jasonas	PROPN	Npmsnnf	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	nsubj	6:nsubj	_
6	suarė	suarti	VERB	Vgma3s--n--ni-	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	1	acl	1:acl	_
7	akmenų	akmuo	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	8	nmod	8:nmod	_
8	lauką	laukas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	6	obj	6:obj	SpaceAfter=No
9	?	?	PUNCT	Z	_	1	punct	1:punct	_

~~~


