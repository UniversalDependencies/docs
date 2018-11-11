---
layout: base
title:  'Statistics of aux:pass in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="lv_lvtb-dep-aux.html">aux</a></tt>.

827 nodes (1%) are attached to their parents as `aux:pass`.

817 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14147521160822.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (822; 99% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	3:nsubj:pass	LvtbNodeId=a-d197-p78s6w1
2	nav	būt	AUX	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	LvtbNodeId=a-d197-p78s6w2
3	precēta	precēt	VERB	vmnpdfsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	LvtbNodeId=a-d197-p78s6w3|SpaceAfter=No
4	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-d197-p78s6w4

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Režisora	režisors	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod:gen	LvtbNodeId=a-p13835-p21s7w1
2	vēstījums	vēstījums	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj|4:nsubj	LvtbNodeId=a-p13835-p21s7w2
3	šķiet	šķist	VERB	vtnipi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-p13835-p21s7w3
4	nepārprotams	nepārprast	VERB	vmnpdmsnapnpn	Aspect=Imp|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	3	xcomp	3:xcomp	LvtbNodeId=a-p13835-p21s7w4
5	–	–	PUNCT	zd	_	7	punct	7:punct	LvtbNodeId=a-p13835-p21s7w5
6	cilvēks	cilvēks	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	LvtbNodeId=a-p13835-p21s7w6
7	domājas	domāties	VERB	vmyipi230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	LvtbNodeId=a-p13835-p21s7w7
8	esam	būt	VERB	vmnpu0000000n	Polarity=Pos|VerbForm=Conv	9	aux:pass	9:aux:pass	LvtbNodeId=a-p13835-p21s7w8
9	ieslodzīts	ieslodzīt	VERB	vmnpdmsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	7	advcl	7:advcl	LvtbNodeId=a-p13835-p21s7w9
10	savā	sava	DET	ps0fsln	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	11:det	LvtbNodeId=a-p13835-p21s7w10
11	vientulībā	vientulība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	9	obl	9:obl:loc	LvtbNodeId=a-p13835-p21s7w11|SpaceAfter=No
12	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-p13835-p21s7w12

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	Vēl	vēl	ADV	r0t	_	3	advmod	3:advmod	LvtbNodeId=a-d198-p73s2w1
2	vienmēr	vienmēr	ADV	r0t	PronType=Tot	3	advmod	3:advmod	LvtbNodeId=a-d198-p73s2w2
3	kaila	kails	ADJ	affsnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	LvtbNodeId=a-d198-p73s2w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	7:punct	LvtbNodeId=a-d198-p73s2w4
5	vēl	vēl	ADV	r0t	_	7	advmod	7:advmod	LvtbNodeId=a-d198-p73s2w5
6	vienmēr	vienmēr	ADV	r0t	PronType=Tot	7	advmod	7:advmod	LvtbNodeId=a-d198-p73s2w6
7	salstu	salt	VERB	vmnipi11san	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	LvtbNodeId=a-d198-p73s2w7|SpaceAfter=No
8	,	,	PUNCT	zc	_	13	punct	13:punct	LvtbNodeId=a-d198-p73s2w8
9	bet	bet	CCONJ	cc	_	13	cc	13:cc	LvtbNodeId=a-d198-p73s2w9
10	vīrieša	vīrietis	NOUN	ncmsg2	Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod:gen	LvtbNodeId=a-d198-p73s2w10
11	balss	balss	NOUN	ncfsn6	Case=Nom|Gender=Fem|Number=Sing	13	nsubj:pass	13:nsubj:pass|15.1:nsubj	LvtbNodeId=a-d198-p73s2w11
12	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux:pass	13:aux:pass	LvtbNodeId=a-d198-p73s2w12
13	silta	silts	ADJ	affsnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	conj	3:conj	LvtbNodeId=a-d198-p73s2w13
14	un	un	CCONJ	cc	_	15	cc	15.1:cc	LvtbNodeId=a-d198-p73s2w14
15	tuvu	tuvu	ADV	r0p	_	13	conj	15.1:advmod	LvtbNodeId=a-d198-p73s2w15|SpaceAfter=No
16	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-d198-p73s2w16

~~~


