---
layout: base
title:  'Statistics of xcomp in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="ga-dep-xcomp-pred.html">xcomp:pred</a></tt>.

607 nodes (3%) are attached to their parents as `xcomp`.

595 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.50741350906096.

The following 17 pairs of parts of speech are connected with `xcomp`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (394; 65% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (130; 21% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (18; 3% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (15; 2% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (13; 2% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (10; 2% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga-pos-AUX.html">AUX</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga-pos-DET.html">DET</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga-pos-PART.html">PART</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Cén	cé	PRON	Q	Number=Sing|PronType=Int	0	root	_	_
3	diabhal	diabhal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	xcomp:pred	_	_
4	útamála	útamáil	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	3	compound	_	_
5	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	csubj:cleft	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	siúl	siúl	NOUN	Noun	VerbForm=Inf	5	xcomp	_	_
8	ansin	ansin	ADV	Loc	_	5	advmod	_	_
9	thíos	thíos	ADV	Dir	_	5	advmod	_	SpaceAfter=No
10	?	?	PUNCT	?	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	'	'	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ach	ach	SCONJ	Subord	_	3	advmod	_	_
3	caithfidh	caith	VERB	FutInd	Mood=Ind|Tense=Fut	0	root	_	_
4	mise	mise	PRON	Pers	Number=Sing|Person=1|PronType=Emp	3	nsubj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	3	xcomp	_	_
7	ar	ar	ADP	Simp	_	8	case	_	_
8	shiúl	siúl	NOUN	Noun	Form=Len|VerbForm=Inf	6	xcomp	_	_
9	chun	chun	ADP	Simp	_	11	case	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	tsiopa	siopa	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 xcomp	color:blue
1	Ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	2	csubj:cop	_	_
5	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	4	nsubj	_	_
6	acu	ag	ADP	Prep	Number=Plur|Person=3	4	obl:prep	_	_
7	cad	cad	PRON	Q	PronType=Int	10	nsubj	_	_
8	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	7	nmod	_	_
9	a	a	PART	Vb	PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	tharla	tarlaigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	4	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


