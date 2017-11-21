---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-nsubj.html">nsubj</a></tt>.

280 nodes (0%) are attached to their parents as `nsubj:pass`.

197 instances of `nsubj:pass` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.625.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (141; 50% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (49; 18% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (30; 11% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (21; 8% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (17; 6% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (9; 3% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	Ale	ale	CCONJ	J^-------------	_	4	cc	_	_
2	babička	babička	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	_	_
3	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	4	discourse	_	_
4	prosadila	prosadit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	že	že	SCONJ	J,-------------	_	9	mark	_	_
7	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
8	lípa	lípa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	9	nsubj:pass	_	_
9	přesadí	přesadit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp	_	_
10	a	a	CCONJ	J^-------------	_	11	cc	_	_
11	hotovo	hotový	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	Nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	2	case	_	_
2	tím	ten	DET	PDNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	_
3	vším	všechen	DET	PLNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	2	det	_	_
4	byl	být	AUX	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	_	_
5	vyveden	vyvedený	ADJ	VsIS------AP---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	nápis	nápis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	_	_
7	Bitva	bitva	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	_	_
8	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	_
9	Krásné	Krásná	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	_
10	a	a	CCONJ	J^-------------	_	11	cc	_	_
11	letopočet	letopočet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	_	_
12	1427	1427	NUM	C=-------------	NumForm=Digit|NumType=Card	11	nummod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	"	"	PUNCT	Z:-------------	_	6	punct	_	SpaceAfter=No
2	Ta	ten	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	6	nsubj:pass	_	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	_	_
4	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	_	_
5	něj	on	PRON	P5MS2--3-------	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	6	obl	_	_
6	léčila	léčit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	dávno	dávno	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	_
8	předtím	předtím	ADV	Db-------------	_	6	advmod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	13	punct	_	_
10	než	než	SCONJ	J,-------------	_	13	mark	_	_
11	jsi	být	AUX	VB-S---2P-AA---	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux	_	_
12	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
13	poznal	poznat	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	advcl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


