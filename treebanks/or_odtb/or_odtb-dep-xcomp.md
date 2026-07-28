---
layout: base
title:  'Statistics of xcomp in UD_Odia-ODTB'
udver: '2'
---

## Treebank Statistics: UD_Odia-ODTB: Relations: `xcomp`

This relation is universal.

103 nodes (2%) are attached to their parents as `xcomp`.

87 instances of `xcomp` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54368932038835.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="or_odtb-pos-VERB.html">VERB</a></tt>-<tt><a href="or_odtb-pos-ADJ.html">ADJ</a></tt> (40; 39% instances), <tt><a href="or_odtb-pos-VERB.html">VERB</a></tt>-<tt><a href="or_odtb-pos-VERB.html">VERB</a></tt> (28; 27% instances), <tt><a href="or_odtb-pos-VERB.html">VERB</a></tt>-<tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt> (23; 22% instances), <tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="or_odtb-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="or_odtb-pos-VERB.html">VERB</a></tt>-<tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="or_odtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="or_odtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="or_odtb-pos-ADP.html">ADP</a></tt>-<tt><a href="or_odtb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="or_odtb-pos-AUX.html">AUX</a></tt>-<tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="or_odtb-pos-PRON.html">PRON</a></tt>-<tt><a href="or_odtb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
1	ଏହି	_	DET	DM_DMD	PronType=Dem	2	det	_	Translit=ehi
2	ବୈଠକରେ	_	NOUN	N_NN	Case=Loc	10	obl	_	Translit=baiṭhakare
3	ଭାରତୀୟ	_	ADJ	JJ	Degree=Pos	6	amod	_	Entity=(e12-location-1-new-sgl)|Translit=bhāratīŷa
4	କ୍ରିକେଟ	_	NOUN	N_NN	_	5	compound	_	Translit=krikeṭa
5	ଦଳର	_	NOUN	N_NN	Case=Gen	6	nmod	_	Translit=daḷara
6	ଅଧିନାୟକ	_	NOUN	N_NN	_	10	nsubj	_	Translit=adhināŷaka
7	ବିରାଟ	_	PROPN	N_NNP	_	6	flat	_	Translit=birāṭa
8	କୋହଲି	_	PROPN	N_NNP	_	7	flat	_	Translit=kohali
9	ଉପସ୍ଥିତ	_	ADJ	JJ	Degree=Pos	10	xcomp	_	Translit=upasthita
10	ଥିଲେ	_	VERB	V_VM_VF	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Translit=thile
11	।	_	PUNCT	RD_PUNC	_	10	punct	_	SpacesAfter=\n|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	ଏହାଯୋଗୁ	_	PRON	PR_PRP	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	nmod	_	Translit=ehāyogu
2	ଭୁଲ୍	_	NOUN	N_NN	Case=Acc|Number=Sing	5	nmod	_	Translit=bhul
3	କରିବାର	_	VERB	V_VM_VNF	VerbForm=Inf	5	xcomp	_	Translit=karibāra
4	ବିପଦ	_	NOUN	N_NN	Case=Nom|Number=Sing	5	nsubj	_	Translit=bipada
5	ବଢ଼ିଯାଇଥାଏ	_	VERB	V_VM_VF	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Translit=baṛhiyāithāe
6	।	_	PUNCT	RD_PUNC	_	5	punct	_	SpacesAfter=\n|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	କ୍ରିଷ୍ଟିଆନ	_	PROPN	N_NNP	Number=Sing	3	nsubj	_	Entity=(e14-person-1,2-new-sgl)|Translit=kriṣṭiāna
2	ରୋନାଲ୍ଡୋ	_	PROPN	N_NNP	Number=Sing	1	flat	_	Entity=e14|Translit=ronālḍo
3	ହେଲେ	_	VERB	V_VM_VF	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Translit=hele
4	ଫୁଟବଲ	_	NOUN	N_NN	Number=Sing	5	compound	_	Translit=phuṭabala
5	ଇତିହାସର	_	NOUN	N_NN	Case=Gen|Number=Sing	8	nmod	_	Entity=(e15-abstract-5-new-sgl)|Translit=itihāsara
6	ସର୍ବାଧିକ	_	ADJ	JJ	Degree=Pos	8	amod	_	Translit=sarbādhika
7	ଗୋଲ	_	NOUN	N_NN	Number=Sing	8	compound	_	Translit=gola
8	ସ୍କୋରର	_	NOUN	N_NN	Number=Sing	3	xcomp	_	Translit=skorara
9	।	_	PUNCT	RD_PUNC	_	3	punct	_	SpacesAfter=\n|Translit=.

~~~


