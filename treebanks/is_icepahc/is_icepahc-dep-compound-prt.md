---
layout: base
title:  'Statistics of compound:prt in UD_Icelandic-IcePaHC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-IcePaHC: Relations: `compound:prt`

This relation is a language-specific subtype of .

12786 nodes (1%) are attached to their parents as `compound:prt`.

8161 instances of `compound:prt` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80955732832786.

The following 15 pairs of parts of speech are connected with `compound:prt`: <tt><a href="is_icepahc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (9807; 77% instances), <tt><a href="is_icepahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (1744; 14% instances), <tt><a href="is_icepahc-pos-PRON.html">PRON</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (314; 2% instances), <tt><a href="is_icepahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (258; 2% instances), <tt><a href="is_icepahc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (204; 2% instances), <tt><a href="is_icepahc-pos-AUX.html">AUX</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (138; 1% instances), <tt><a href="is_icepahc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (113; 1% instances), <tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (77; 1% instances), <tt><a href="is_icepahc-pos-DET.html">DET</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (68; 1% instances), <tt><a href="is_icepahc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (26; 0% instances), <tt><a href="is_icepahc-pos-PART.html">PART</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (23; 0% instances), <tt><a href="is_icepahc-pos-NUM.html">NUM</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="is_icepahc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_icepahc-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="is_icepahc-pos-X.html">X</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="is_icepahc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	lét	láta	VERB	VBDI	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=sfg3eþ
2	hann	hann	PRON	PRO-N	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	1	nsubj	_	IFD_tag=fpken
3	setja	setja	VERB	VB	VerbForm=Inf|Voice=Act	1	acl	_	IFD_tag=sng
4	upp	upp	ADP	RP	_	3	compound:prt	_	IFD_tag=aa
5	skip	skip	NOUN	N-A	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	3	obj	_	IFD_tag=nheo
6	sitt	sinn	PRON	PRO-A	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	5	nmod:poss	_	IFD_tag=feheo|SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 compound:prt	color:blue
1	en	en	CCONJ	CONJ	_	8	cc	_	IFD_tag=c
2	Þorsteinn	þorsteinn	PROPN	NPR-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	8	nsubj	_	IFD_tag=nken-s
3	og	og	CCONJ	CONJ	_	4	cc	_	IFD_tag=c
4	húskarlar	húskarl	NOUN	NS-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	2	conj	_	IFD_tag=nkfn
5	hans	hann	PRON	PRO-G	Case=Gen|Gender=Masc|Number=Sing|PronType=Prs	4	nmod:poss	_	IFD_tag=fpkee
6	með	með	ADP	P	_	7	case	_	IFD_tag=aþ
7	honum	hann	PRON	PRO-D	Case=Dat|Gender=Masc|Number=Sing|PronType=Prs	4	obl	_	IFD_tag=fpkeþ
8	reið	ríða	VERB	VBDI	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=sfg3eþ
9	upp	upp	ADP	RP	_	11	compound:prt	_	IFD_tag=aa
10	til	til	ADP	P	_	11	case	_	IFD_tag=ae
11	fjalls	fjall	NOUN	N-G	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	IFD_tag=nhee|SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 compound:prt	color:blue
1	Hólpinn	hólpinn	ADJ	ADJ-A	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	IFD_tag=nkeng
2	gjör	gera	VERB	DOI	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	IFD_tag=sbg2en
3	þú	þú	PRON	PRO-N	Case=Nom|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	IFD_tag=fp2en
4	mig	ég	PRON	PRO-A	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	ccomp	_	IFD_tag=fp1eo|SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	IFD_tag=
6	sem	sem	SCONJ	C	_	10	mark	_	IFD_tag=ct
7	fram	fram	ADP	RP	_	9	compound:prt	_	IFD_tag=aa
8	fyrir	fyrir	ADP	P	_	9	case	_	IFD_tag=ao
9	þig	þú	PRON	PRO-A	Case=Acc|Number=Sing|Person=2|PronType=Prs	10	obl	_	IFD_tag=fp2eo
10	kem	koma	VERB	VBPI	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	IFD_tag=sfg1en
11	fordæmdur	fordæmdur	ADJ	ADJ-N	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	IFD_tag=lkensf|SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	IFD_tag=.

~~~


