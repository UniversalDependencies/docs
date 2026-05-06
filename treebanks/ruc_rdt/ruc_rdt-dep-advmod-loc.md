---
layout: base
title:  'Statistics of advmod:loc in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `advmod:loc`

This relation is a language-specific subtype of <tt><a href="ruc_rdt-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="ruc_rdt-dep-advmod-cop.html">advmod:cop</a></tt>, <tt><a href="ruc_rdt-dep-advmod-emph.html">advmod:emph</a></tt>.

194 nodes (3%) are attached to their parents as `advmod:loc`.

190 instances of `advmod:loc` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01546391752577.

The following 5 pairs of parts of speech are connected with `advmod:loc`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (154; 79% instances), <tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (26; 13% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (10; 5% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:loc	color:blue
1	Nakabwoine	bona	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu12|Number=Sing|Person=1|Person[obj]=3|Tense=Past|VerbForm=Fin	0	root	0:root	Gloss=1sgS-PST-12O-see:PFV|MSeg=n-a-ka-bwoine
2	ku	ku	ADV	LOC	NounClass=Bantu17	1	advmod:loc	1:advmod:loc	Gloss=17.LOC|MSeg=ku
3	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	4	case	4:case	Gloss=AUG-18.LOC|MSeg=o-mu
4	emyaka	mwaka	NOUN	_	NounClass=Bantu4|Referent=Yes	1	obl	1:obl	Gloss=AUG-4.year|MSeg=e-myaka
5	zingi	ingi	ADJ	_	NounClass=Bantu4	4	amod	4:amod	Gloss=4-numerous|MSeg=zi-ingi
6	emabega	mabega	ADV	_	Referent=Yes	4	advmod	4:advmod	Gloss=AUG-behind|MSeg=e-mabega|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:loc	color:blue
1	Oku	ku	ADP	LOC	NounClass=Bantu17|Referent=Yes	2	case	2:case	_
2	kyalo	kyalo	NOUN	_	NounClass=Bantu7	4	obl	4:obl	_
3	kini	ni	DET	_	Deixis=Prox|NounClass=Bantu7|PronType=Dem	2	det	2:det	_
4	kuli	li	AUX	COP	NounClass=Bantu17|Person=3|Tense=Pres	0	root	0:root	_
5	ku	ku	ADV	LOC	NounClass=Bantu17	4	advmod:loc	4:advmod:loc	_
6	oMubiito	Mubiito	PROPN	_	NounClass=Bantu1|Referent=Yes	4	nsubj	4:nsubj	SpaceAfter=No
7	?	?	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:loc	color:blue
1	Naye	naye	CCONJ	_	_	2	cc	2:cc	_
2	ndoo	ndoo	ADV	NEG.COP	Polarity=Neg	0	root	0:root	_
3	wo	wo	ADV	LOC	NounClass=Bantu16	2	advmod:loc	2:advmod:loc	_
4	mugaso	mugaso	NOUN	_	NounClass=Bantu3	2	nsubj	2:nsubj	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


