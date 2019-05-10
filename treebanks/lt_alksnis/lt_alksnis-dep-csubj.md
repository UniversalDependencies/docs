---
layout: base
title:  'Statistics of csubj in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="lt_alksnis-dep-csubj-pass.html">csubj:pass</a></tt>.

160 nodes (0%) are attached to their parents as `csubj`.

142 instances of `csubj` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05625.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (64; 40% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (59; 37% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (26; 16% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Jei	jei	SCONJ	Cg	_	2	mark	2:mark	_
2	darbingas	darbingas	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	_
3	jaučiatės	jaustis	VERB	Vgmp2p--n--yi-	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin	2	csubj	2:csubj	_
4	su	su	ADP	Sgi	AdpType=Prep|Case=Ins	5	case	5:case	_
5	švarku	švarkas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg	SpaceAfter=No
6	,	,	PUNCT	Z	_	2	punct	2:punct	_
7	jį	jis	PRON	Pgmsan	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obj	2:obj	_
8	ir	ir	PART	Qg	_	2	advmod:emph	2:advmod:emph	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Dirbdamas	dirbti	VERB	Vgh--sm-n--n--	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Conv	0	root	0:root	_
2	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	1	obl	1:obl	_
3	ilgainiui	ilgainiui	ADV	Rgp	Degree=Pos	5	advmod	5:advmod	_
4	pasijusti	pasijusti	VERB	Vgi-----n--y--	Polarity=Pos|Reflex=Yes|VerbForm=Inf	5	csubj	5:csubj	_
5	izoliuotas	izoliuoti	VERB	Vgps-smpnnnn-p	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	1	xcomp	1:xcomp	SpaceAfter=No
6	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Dėl	dėl	ADP	Sgg	AdpType=Prep|Case=Gen	3	case	3:case	_
2	ekonomikos	ekonomika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod	_
3	nuosmukio	nuosmukis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	0	root	0:root	_
4	rinkti	rinkti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	3	csubj	3:csubj	_
5	lėšas	lėšos	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	4	obj	4:obj	_
6	ir	ir	CCONJ	Cg	_	7	cc	7:cc	_
7	pasitraukti	pasitraukti	VERB	Vgi-----n--y--	Polarity=Pos|Reflex=Yes|VerbForm=Inf	4	conj	3:csubj|4:conj	_
8	dar	dar	PART	Qg	_	9	advmod:emph	9:advmod:emph	_
9	sunkiau	sunkiai	ADV	Rgc	Degree=Cmp	3	conj	0:root|3:conj	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


