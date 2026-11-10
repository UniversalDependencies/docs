---
layout: base
title:  'Statistics of advcl in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="ruc_rdt-dep-advcl-relcl.html">advcl:relcl</a></tt>.

204 nodes (2%) are attached to their parents as `advcl`.

130 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.61764705882353.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (168; 82% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (9; 4% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (6; 3% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Oizire	iza	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=2sgS-come-PFV|MSeg=o-iz-ire
2	ani	ani	ADV	_	Deixis=Prox|NounClass=Bantu16|PronType=Dem	1	advmod	1:advmod	Gloss=here|MSeg=ani
3	kunyita	ita	VERB	_	NounClass=Bantu1|Person=3|VerbForm=Inf	1	advcl	1:advcl	Gloss=INF-1O-kill-FV|MSeg=ku-n-it-a|SpaceAfter=No
4	?	?	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Baamubbwere	bbwa	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu2|NounClass[obj]=Bantu1|Person=3|Person[obj]=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
2	nga	nga	SCONJ	_	_	3	mark	3:mark	_
3	ndoo	ndoo	ADV	NEG.COP	Polarity=Neg	1	advcl	1:advcl	_
4	wo	wo	ADV	LOC	NounClass=Bantu16	3	advmod:loc	3:advmod:loc	_
5	bujuurwa	bujuurwa	NOUN	_	NounClass=Bantu14	3	nsubj	3:nsubj	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 advcl	color:blue
1	Ni	ni	SCONJ	_	_	2	mark	2:mark	Gloss=when|MSeg=ni
2	nabazire	baza	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	8	advcl	8:advcl	Gloss=1sgS-PST-talk-PFV|MSeg=n-a-baz-ire
3	oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	4	case	4:case	Gloss=AUG-17.LOC|MSeg=o-ku
4	safe	safe	NOUN	_	NounClass=Bantu9	2	obl	2:obl	Gloss=9.safe|MSeg=safe|SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	2:punct	_
6	amaiso	riiso	NOUN	_	NounClass=Bantu6|Referent=Yes	8	obj	8:obj	Gloss=AUG-6.eye|MSeg=a-maiso
7	gamwei	mwe	NUM	_	NounClass=Bantu6|NumForm=Word|NumType=Card	6	nummod	6:nummod	Gloss=6-one|MSeg=ga-mwei
8	yagataire	ta	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu1|NounClass[obj]=Bantu6|Person=3|Person[obj]=3|Tense=Past|VerbForm=Fin	0	root	0:root	Gloss=1S-PST-6O-put:PFV|MSeg=a-a-ga-taire
9	oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	10	case	10:case	Gloss=AUG-17.LOC|MSeg=o-ku
10	niyo	ni	AUX	COP	InfStruct=Foc|NounClass=Bantu9|Person=3|Tense=Pres	8	advcl	8:advcl	Gloss=COP-9|MSeg=ni-yo|SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


