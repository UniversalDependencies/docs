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
1	Ale	ale	CCONJ	J^-------------	_	4	cc	4:cc	_
2	babička	babička	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
3	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	4	discourse	4:discourse	_
4	prosadila	prosadit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
6	že	že	SCONJ	J,-------------	_	9	mark	9:mark	_
7	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	9:expl:pass	_
8	lípa	lípa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	9	nsubj:pass	9:nsubj:pass	_
9	přesadí	přesadit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	_
10	a	a	CCONJ	J^-------------	_	11	cc	11:cc	_
11	hotovo	hotový	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	9	conj	4:ccomp|9:conj	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	Nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	2	case	2:case	_
2	tím	ten	DET	PDNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	5	obl	5:obl:nad:ins	_
3	vším	všechen	DET	PLNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	2	det	2:det	_
4	byl	být	AUX	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	5:aux:pass	_
5	vyveden	vyvedený	ADJ	VsIS------AP---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	nápis	nápis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	5:nsubj:pass	_
7	Bitva	bitva	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	6:nmod:nom	_
8	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	_
9	Krásné	Krásná	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	7	nmod	7:nmod:u:gen	_
10	a	a	CCONJ	J^-------------	_	11	cc	11:cc	_
11	letopočet	letopočet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	5:nsubj:pass|6:conj	_
12	1427	1427	NUM	C=-------------	NumForm=Digit|NumType=Card	11	nummod	11:nummod	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	"	"	PUNCT	Z:-------------	_	6	punct	6:punct	SpaceAfter=No
2	Ta	ten	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	6	nsubj:pass	6:nsubj:pass	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	_
4	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	5:case	_
5	něj	on	PRON	P5MS2--3-------	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	6	obl	6:obl:u:gen	_
6	léčila	léčit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
7	dávno	dávno	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	8:advmod	_
8	předtím	předtím	ADV	Db-------------	_	6	advmod	6:advmod	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
10	než	než	SCONJ	J,-------------	_	13	mark	13:mark	_
11	jsi	být	AUX	VB-S---2P-AA---	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux	13:aux	_
12	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	_
13	poznal	poznat	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	advcl	6:advcl:než	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


