---
layout: base
title:  'Statistics of expl:impers in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="ca_ancora-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ca_ancora-dep-expl-pv.html">expl:pv</a></tt>.

500 nodes (0%) are attached to their parents as `expl:impers`.

437 instances of `expl:impers` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.598.

The following 1 pairs of parts of speech are connected with `expl:impers`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (500; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl:impers	color:blue
1	D'	de	ADP	sps00	_	3	case	3:case	SpaceAfter=No
2	aquestes	aquest	DET	dd0fp0	Gender=Fem|Number=Plur|PronType=Dem	3	det	3:det	_
3	activitats	activitat	NOUN	ncfp000	Gender=Fem|Number=Plur	9	obl	9:obl	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	_
5	algunes	algun	PRON	pi0fp000	Gender=Fem|Number=Plur|PronType=Ind	9	nsubj	9:nsubj	ArgTem=arg1:pat
6	no	no	ADV	rn	Polarity=Neg	9	advmod	9:advmod	_
7	s'	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:impers	9:expl:impers	SpaceAfter=No
8	han	haver	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
9	obert	obrir	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
10	a	a	ADP	spcms	_	12	case	12:case	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	12:det	_
12	públic	públic	NOUN	ncms000	Gender=Masc|Number=Sing	9	obj	9:obj	SpaceAfter=No|ArgTem=arg2:tem
13	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


