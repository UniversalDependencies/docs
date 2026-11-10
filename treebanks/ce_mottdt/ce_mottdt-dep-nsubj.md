---
layout: base
title:  'Statistics of nsubj in UD_Chechen-MottDT'
udver: '2'
---

## Treebank Statistics: UD_Chechen-MottDT: Relations: `nsubj`

This relation is universal.

368 nodes (12%) are attached to their parents as `nsubj`.

271 instances of `nsubj` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92934782608696.

The following 17 pairs of parts of speech are connected with `nsubj`: <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt> (115; 31% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt> (114; 31% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-PROPN.html">PROPN</a></tt> (97; 26% instances), <tt><a href="ce_mottdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt> (12; 3% instances), <tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ce_mottdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ce_mottdt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ce_mottdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ce_mottdt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ce_mottdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ce_mottdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nsubj	color:blue
1	t'aaq	t'aaqqa	ADV	_	_	3	advmod	_	MSeg=t'aaq|Gloss=then
2	hwynax	hwun	ADV	_	_	3	advmod	_	MSeg=hwynax|Gloss=forest.ADV
3	vaxan	daxa	VERB	_	ConvType=Ant|NounClass=Vclass|VerbForm=Conv	0	root	_	MSeg=v-axa-na|Gloss=V-go-CVBant
4	xilla	xila	AUX	_	Aspect=Perf	3	aux	_	MSeg=xilla|Gloss=be.PRF
5	zhima	zhima	ADJ	_	_	6	amod	_	MSeg=zhima|Gloss=small
6	stag	stag	NOUN	_	Case=Abs	3	nsubj	_	MSeg=stag|Gloss=person.ABS

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj	color:blue
1	hwynax	hwun	NOUN	_	Case=Lat	2	obl	_	MSeg=hwynax|Gloss=forest.LAT
2	vaxan	daxa	VERB	_	ConvType=Ant|NounClass=Vclass|VerbForm=Conv	4	acl:relcl	_	MSeg=v-axa-n|Gloss=V-go-CVBant
3	volu	du	AUX	_	NounClass=Vclass|VerbForm=Part	2	aux	_	MSeg=v-olu|Gloss=V-be.PTCP
4	iza	iza	PRON	_	Case=Abs|Number=Sing|Person=3|PronType=Prs	8	dislocated	_	MSeg=iza|Gloss=3SG.ABS
5	shie	shaa	PRON	_	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	8	nsubj	_	MSeg=shie|Gloss=3SG.REFL
6	chwacca	chwacca	ADV	_	_	8	advmod	_	MSeg=chwacca|Gloss=one.by.one
7	stom	stom	NOUN	_	Case=Abs	8	obj	_	MSeg=stom|Gloss=fruit
8	boqqush	daqqa	VERB	_	ConvType=Sim|NounClass=Bclass|VerbForm=Conv	0	root	_	MSeg=b-oqqu-sh|Gloss=B-take-CVBsim

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	jalie	daa	VERB	_	Mood=Imp|NounClass=Jclass	0	root	_	MSeg=j-alie|Gloss=J-go.IMP
2	NAME	NAME	PROPN	_	Case=Abs	1	nsubj	_	MSeg=NAME|Gloss=NAME

~~~


