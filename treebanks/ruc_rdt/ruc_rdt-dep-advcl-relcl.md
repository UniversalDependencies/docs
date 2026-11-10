---
layout: base
title:  'Statistics of advcl:relcl in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-advcl.html">advcl</a></tt>.

3 nodes (0%) are attached to their parents as `advcl:relcl`.

3 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl:relcl	color:blue
1	Tozwa	zwa	VERB	_	Mood=Ind|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=NEG-2sgS-leave-FV|MSeg=ti-o-zw-a
2	w'	e	PRON	REL	NounClass=Bantu16|PronType=Rel	1	obl	1:obl	Gloss=16.REL|MSeg=we
3	oikaire	ikala	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	advcl:relcl	1:advcl:relcl	Gloss=2sgS-sit:PFV|MSeg=o-ikaire
4	Mal	Mal	PROPN	_	NounClass=Bantu1	1	vocative	1:vocative	Gloss=1.Mal|MSeg=Mal|SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 advcl:relcl	color:blue
1	Naye	naye	CCONJ	_	_	4	cc	4:cc	Gloss=but|MSeg=naye
2	nka	nka	ADP	_	_	4	mark	4:mark	Gloss=like|MSeg=nka
3	ni	ni	SCONJ	_	_	4	mark	4:mark	Gloss=when|MSeg=ni
4	tulangire	langa	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	advcl	7:advcl	Gloss=1plS-show:PFV|MSeg=tu-langire
5	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	6	case	6:case	Gloss=AUG-18.LOC|MSeg=o-mu
6	Sudan	Sudan	PROPN	_	NounClass=Bantu9	7	obl	7:obl	Gloss=9.Sudan|MSeg=Sudan
7	eri	li	AUX	COP	NounClass=Bantu23|Person=3|Tense=Pres	0	root	0:root	Gloss=23S-COP|MSeg=e-li
8	yo	yo	ADV	LOC	NounClass=Bantu23	7	advmod:loc	7:advmod:loc	Gloss=23.LOC|MSeg=yo
9	Nyala	Nyala	PROPN	_	NounClass=Bantu2	7	nsubj	7:nsubj	Gloss=2.Nyala|MSeg=Nyala
10	awali	li	AUX	REL-COP	NounClass=Bantu16|Person=3|Referent=Yes|Tense=Pres	7	advcl:relcl	7:advcl:relcl	Gloss=S.REL-16S-COP|MSeg=a-wa-li
11	aBanyala	Munyala	PROPN	_	NounClass=Bantu2|Referent=Yes	10	nsubj	10:nsubj	Gloss=AUG-2.Banyala|MSeg=a-Banyala|SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	7:punct	SpacesAfter=\n

~~~


