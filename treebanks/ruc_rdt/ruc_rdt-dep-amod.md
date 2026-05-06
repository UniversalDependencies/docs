---
layout: base
title:  'Statistics of amod in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `amod`

This relation is universal.

45 nodes (1%) are attached to their parents as `amod`.

43 instances of `amod` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17777777777778.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (35; 78% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Nakabwoine	bona	VERB	_	Aspect=Perf|Mood=Ind|NounClass=Bantu12|Number=Sing|Person=1|Person[obj]=3|Tense=Past|VerbForm=Fin	0	root	0:root	Gloss=1sgS-PST-12O-see:PFV|MSeg=n-a-ka-bwoine
2	ku	ku	ADV	LOC	NounClass=Bantu17	1	advmod:loc	1:advmod:loc	Gloss=17.LOC|MSeg=ku
3	omu	mu	ADP	LOC	NounClass=Bantu18|Referent=Yes	4	case	4:case	Gloss=AUG-18.LOC|MSeg=o-mu
4	emyaka	mwaka	NOUN	_	NounClass=Bantu4|Referent=Yes	1	obl	1:obl	Gloss=AUG-4.year|MSeg=e-myaka
5	zingi	ingi	ADJ	_	NounClass=Bantu4	4	amod	4:amod	Gloss=4-numerous|MSeg=zi-ingi
6	emabega	mabega	ADV	_	Referent=Yes	4	advmod	4:advmod	Gloss=AUG-behind|MSeg=e-mabega|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	obunyana	kanyana	NOUN	_	NounClass=Bantu14|Referent=Yes	3	obj	3:obj	Gloss=AUG-14.calf|MSeg=o-bunyana
2	obuto	buto	NOUN	_	NounClass=Bantu14|Referent=Yes	1	amod	1:amod	Gloss=AUG-14.childhood|MSeg=o-buto
3	tetubulya	lya	VERB	_	Mood=Ind|NounClass=Bantu14|Number=Plur|Person=1|Person[obj]=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=NEG-1plS-14O-eat-FV|MSeg=ti-tu-bu-ly-a|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Ale	ale	ADV	_	_	2	advmod	2:advmod	Gloss=then|MSeg=ale
2	nibakinga	kinga	VERB	_	Mood=Ind|NounClass=Bantu2|Person=3|Tense=Nar|VerbForm=Fin	0	root	0:root	Gloss=NAR-2S-prevent-FV|MSeg=ni-ba-king-a
3	ennyanja	nnyanja	NOUN	_	NounClass=Bantu9|Referent=Yes	2	obj	2:obj	Gloss=AUG-9.lake|MSeg=e-nnyanja|SpacesAfter=\n
4	nituswaga	swaga	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Nar|VerbForm=Fin	2	advcl	2:advcl	Gloss=NAR-1plS-look_for-FV|MSeg=ni-tu-swag-a
5	ku	ku	ADV	LOC	NounClass=Bantu17	4	advmod:loc	4:advmod:loc	Gloss=17.LOC|MSeg=ku
6	omukubi	mukubi	NOUN	_	NounClass=Bantu3|Referent=Yes	4	obj	4:obj	Gloss=AUG-3.sauce|MSeg=o-mukubi
7	gwonkai	nkai	ADV	_	NounClass=Bantu3|Person=3	6	amod	6:amod	Gloss=3-only|MSeg=gu-nkai|SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


