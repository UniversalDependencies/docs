---
layout: base
title:  'Statistics of csubj in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="cs_fictree-dep-csubj-pass.html">csubj:pass</a></tt>.

501 nodes (0%) are attached to their parents as `csubj`.

452 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.77844311377245.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (302; 60% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (94; 19% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (37; 7% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (19; 4% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj	color:blue
1	A	a	CCONJ	J^-------------	_	5	cc	5:cc	_
2	jednou	jednou	ADV	Db-------------	_	5	advmod	5:advmod	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	_
4	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	obl:arg	5:obl:arg:dat	_
5	stalo	stát	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
7	že	že	SCONJ	J,-------------	_	11	mark	11:mark	_
8	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	11:aux	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	_
10	práci	práce	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	11	obl	11:obl:v:loc	_
11	usnul	usnout	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	csubj	5:csubj	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj	color:blue
1	Zadržet	zadržet	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	csubj	4:csubj	_
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	obj	1:obj	_
4	možno	možný	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	0	root	0:root	_
5	jen	jen	PART	TT-------------	_	7	advmod:emph	7:advmod:emph	_
6	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	7	case	7:case	_
7	chvilkách	chvilka	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	4	obl	4:obl:v:loc	_
8	osamění	osamění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	7	nmod	7:nmod:gen	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	SpaceAfter=No
10	)	)	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 csubj	color:blue
1	Co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	4	nsubj	4:nsubj	_
2	prý	prý	PART	TT-------------	_	4	advmod	4:advmod	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	4:expl:pv	_
4	děje	dít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	csubj	10:csubj	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	_
6	té	ten	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	7	det	7:det	_
7	kuchyni	kuchyně	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	4:obl:v:loc	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	hrůza	hrůza	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


