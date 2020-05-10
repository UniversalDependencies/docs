---
layout: base
title:  'Statistics of acl:relcl in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-acl.html">acl</a></tt>.

232 nodes (1%) are attached to their parents as `acl:relcl`.

231 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.41810344827586.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (147; 63% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (32; 14% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (22; 9% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Obvykle	obvykle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	2	advmod	2:advmod	LDeriv=obvyklý
2	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	umělci	umělec	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	2	nsubj	2:nsubj|7:nsubj|9:nsubj	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	kteří	který	DET	P4MP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	7	nsubj	3:ref	_
6	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	8	nmod	8:nmod:gen	_
7	chtějí	chtít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	_
8	spoustu	spousta	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	9	obj	9:obj	_
9	udělat	udělat	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	7	xcomp	7:xcomp	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 acl:relcl	color:blue
1	Velká	velký	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	_
2	nadmořská	nadmořský	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	výška	výška	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
4	ochlazuje	ochlazovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj|12:nsubj	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
7	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	5:ref	_
8	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	12	aux	12:aux	_
9	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	cop	12:cop	_
10	jinak	jinak	ADV	Db-------------	_	12	advmod	12:advmod	_
11	velice	velice	ADV	Db-------------	_	12	advmod	12:advmod	_
12	horký	horký	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	acl:relcl	5:acl:relcl	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Mezitím	mezitím	ADV	Db-------------	_	2	advmod	2:advmod	_
2	obsadil	obsadit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
3	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	det	4:det	LGloss=(přivlast.)
4	místo	místo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	obj	2:obj	LId=místo-1|LGloss=(fyzické_umístění)
5	tribuna	tribun	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	4:nmod:gen	_
6	Marcus	Marcus	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	2	nsubj	2:nsubj|10:nsubj	_
7	Antonius	Antonius	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	6	flat	6:flat	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
9	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	10	nsubj	6:ref	_
10	zastával	zastávat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	acl:relcl	6:acl:relcl	LDeriv=zastat
11	tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	12	det	12:det	_
12	funkci	funkce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	10	obj	10:obj	_
13	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	14:case	LId=do-1
14	prosince	prosinec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	10:obl:do:gen	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


