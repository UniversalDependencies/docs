---
layout: base
title:  'Statistics of advmod in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `advmod`

This relation is universal.
There are 3 language-specific subtypes of `advmod`: <tt><a href="ruc_rdt-dep-advmod-cop.html">advmod:cop</a></tt>, <tt><a href="ruc_rdt-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="ruc_rdt-dep-advmod-loc.html">advmod:loc</a></tt>.

300 nodes (5%) are attached to their parents as `advmod`.

175 instances of `advmod` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62333333333333.

The following 10 pairs of parts of speech are connected with `advmod`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (232; 77% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (21; 7% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (19; 6% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (9; 3% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (7; 2% instances), <tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	Iza	iza	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	0:root	Gloss=come-FV|MSeg=iz-a
2	eni	ni	ADV	_	Deixis=Prox|NounClass=Bantu23|PronType=Dem	1	advmod	1:advmod	Gloss=23.PROX|MSeg=eni|SpaceAfter=No
3	!	!	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advmod	color:blue
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
# visual-style 4 5 advmod	color:blue
1	Ekirowoozo	kirowoozo	NOUN	_	NounClass=Bantu7|Referent=Yes	2	nsubj	2:nsubj	Gloss=AUG-7.thought|MSeg=e-kirowoozo
2	kiba	bba	VERB	COP	NounClass=Bantu7|Person=3|Tense=Pres	0	root	0:root	Gloss=7S-COP-FV|MSeg=ki-bb-a
3	kintu	kintu	NOUN	_	NounClass=Bantu7	2	obj	2:obj	Gloss=7.thing|MSeg=kintu
4	kibi	bbi	ADJ	_	NounClass=Bantu7	3	amod	3:amod	Gloss=7-bad|MSeg=ki-bbi
5	muno	muno	ADV	_	_	4	advmod	4:advmod	Gloss=plenty|MSeg=muno|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


