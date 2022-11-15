---
layout: base
title:  'Statistics of csubj in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `csubj`

This relation is universal.

11 nodes (0%) are attached to their parents as `csubj`.

11 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.27272727272727.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (3; 27% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (3; 27% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-PART.html">PART</a></tt> (1; 9% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 17 csubj	color:blue
1	Eitt	einn	DET	ONE-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	3	det	_	IFD_tag=fohen
2	það	sá	DET	D-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	det	_	IFD_tag=fahen
3	allra	allur	DET	Q-G	Case=Gen|Gender=Neut|Number=Plur|PronType=Ind	0	root	_	IFD_tag=fohfe
4	galnasta	galinn	ADJ	ADJS-N	Case=Nom|Definite=Def|Degree=Sup|Gender=Neut|Number=Sing	3	amod	_	IFD_tag=lhenve
5	sem	sem	SCONJ	C	_	7	mark	_	IFD_tag=ct
6	menn	maður	NOUN	NS-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	7	nsubj	_	IFD_tag=nkfn
7	gerðu	gera	VERB	DODI	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	IFD_tag=sfg3fþ
8	í	í	ADP	P	_	9	case	_	IFD_tag=aþ
9	rugli	rugl	NOUN	N-D	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	IFD_tag=nheþ
10	sínu	sinn	PRON	PRO-D	Case=Dat|Gender=Neut|Number=Sing|PronType=Prs	9	nmod:poss	_	IFD_tag=feheþ
11	á	á	ADP	P	_	12	case	_	IFD_tag=aþ
12	árunum	ár	NOUN	NS-D	Case=Dat|Definite=Def|Gender=Neut|Number=Plur	7	obl	_	IFD_tag=nhfþg
13	2003	2003	NUM	NUM-D	NumType=Card	12	appos	_	IFD_tag=ta
14	2007	2007	NUM	NUM-D	NumType=Card	13	nummod	_	IFD_tag=ta
15	var	vera	AUX	BEDI	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	IFD_tag=sfg3eþ
16	að	að	PART	TO	_	17	mark	_	IFD_tag=cn
17	fella	fella	VERB	VB	VerbForm=Inf|Voice=Act	3	csubj	_	IFD_tag=sng
18	niður	niður	ADP	RP	_	17	compound:prt	_	IFD_tag=aa
19	hátekjuskattsþrepið	hátekjuskattsþrep	NOUN	N-A	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	17	obj	_	IFD_tag=nheog|SpaceAfter=No
20	.	.	PUNCT	.	_	19	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Annars	annar	PRON	OTHER-G	Case=Gen|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	IFD_tag=fokee
2	vegar	vegur	NOUN	N-G	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	IFD_tag=nkee
3	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	IFD_tag=sfg3en
4	tilgangurinn	tilgangur	NOUN	N-N	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	IFD_tag=nkeng
5	að	að	PART	TO	_	6	mark	_	IFD_tag=cn
6	vinna	vinna	VERB	VB	VerbForm=Inf|Voice=Act	4	csubj	_	IFD_tag=sng
7	tölfræðiskýrslur	tölfræðiskýrsla	NOUN	NS-A	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	6	obj	_	IFD_tag=nvfo|SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj	color:blue
1	Það	það	PRON	PRO-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	IFD_tag=fahen
2	sem	sem	SCONJ	C	_	7	mark	_	IFD_tag=ct
3	við	ég	PRON	PRO-N	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	IFD_tag=fp1fn
4	getum	geta	AUX	MDPI	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	IFD_tag=sfg1fn
5	hins	hinn	DET	D-G	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	IFD_tag=fakee
6	vegar	vegur	ADV	N-G	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	7	advmod	_	IFD_tag=nkee
7	gert	gera	VERB	DAN	VerbForm=Sup|Voice=Act	1	acl:relcl	_	IFD_tag=ssg
8	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	IFD_tag=sfg3en
9	að	að	PART	TO	_	10	mark	_	IFD_tag=cn
10	fresta	fresta	VERB	VB	VerbForm=Inf|Voice=Act	1	csubj	_	IFD_tag=sng
11	nauðungarsölum	nauðungarsala	NOUN	NS-D	Case=Dat|Definite=Ind|Gender=Fem|Number=Plur	10	obj	_	IFD_tag=nvfþ
12	þar	þar	ADV	ADV	_	10	dep	_	IFD_tag=aa
13	til	til	ADV	ADV	_	12	advmod	_	IFD_tag=aa
14	lagalegri	lagalegur	ADJ	ADJ-D	Case=Dat|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	IFD_tag=lveþsf
15	óvissu	óvissa	NOUN	N-D	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	18	nsubj	_	IFD_tag=nvee
16	hefur	hafa	AUX	HVPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	aux	_	IFD_tag=sfg3en
17	verið	vera	AUX	BEN	VerbForm=Sup|Voice=Act	18	cop	_	IFD_tag=ssg
18	eytt	eyða	VERB	VAN	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	12	conj	_	IFD_tag=sþghen|SpaceAfter=No
19	.	.	PUNCT	.	_	18	punct	_	IFD_tag=.

~~~


