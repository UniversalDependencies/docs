---
layout: base
title:  'Statistics of ccomp in UD_Bhojpuri-BHTB'
udver: '2'
---

## Treebank Statistics: UD_Bhojpuri-BHTB: Relations: `ccomp`

This relation is universal.

57 nodes (1%) are attached to their parents as `ccomp`.

53 instances of `ccomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.9824561403509.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (50; 88% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="bho_bhtb-pos-AUX.html">AUX</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	हम	हम	PRON	PR_PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
2	ओह	ओह	DET	DM_DMD	NumType=Card	3	det	_	_
3	चीफ	चीफ	NOUN	N_NN	Case=Nom	5	obj	_	_
4	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	3	case	_	_
5	डपटनी	डपट	VERB	V_VM	_	0	root	_	_
6	कि	कि	SCONJ	CC_CCS	_	10	cc	_	_
7	का	का	PRON	PR_PRQ	_	10	obl	_	_
8	बेहूदा	बेहूदा	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing	9	amod	_	_
9	आइडिया	आइडिया	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	obj	_	SpacesAfter=\n
10	खोजे	खोज	VERB	V_VM	_	5	ccomp	_	_
11	में	में	ADP	PSP	AdpType=Post	10	mark	_	_
12	लागल	लग	AUX	V_VAUX	_	10	aux	_	_
13	बाड़	बा	AUX	V_VAUX	Number=Sing|Person=3|Polite=Form	10	aux	_	_
14	?	।	PUNCT	RD_PUNC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 ccomp	color:blue
1	बिआह	बिआह	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	_
2	-	-	PUNCT	RD_PUNC	_	4	punct	_	_
3	प्रधान	प्रधान	NOUN	N_NN	Case=Acc	4	compound	_	_
4	मुल्क	मुल्क	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	_
5	में	में	ADP	PSP	AdpType=Post	4	case	_	_
6	सब	सब	DET	QT_QTF	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	det	_	_
7	कुछ	कुछ	NUM	QT_QTF	Case=Nom|Person=3|PronType=Prs	8	nummod	_	_
8	बिआहे	बिआहा	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	_
9	पर	पर	ADP	PSP	AdpType=Post	8	case	_	_
10	शुरु	शुरु	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	compound	_	_
11	होला	होल	VERB	V_VM	Aspect=Perf|Gender=Masc|VerbForm=Part	0	root	_	_
12	आ	आ	CCONJ	CC_CCD	_	11	conj	_	_
13	बिआहे	बिआहा	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	SpacesAfter=\n
14	पर	पर	ADP	PSP	AdpType=Post	13	case	_	_
15	खतम	खतम	NOUN	N_NN	Case=Nom	11	ccomp	_	_
16	।	।	PUNCT	RD_PUNC	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 31 ccomp	color:blue
1	बाकिर	बाकिर	CCONJ	CC_CCD	_	10	advmod	_	_
2	ई	ई	DET	DM_DMD	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	compound	_	_
3	चैनल	चैनल	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
4	वाले	वाला	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	3	case	_	_
5	काहे	काहे	PRON	PR_PRQ	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part	6	acl	_	_
6	एह	एह	DET	DM_DMD	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	obl	_	_
7	पर	पर	ADP	PSP	AdpType=Post	6	case	_	_
8	कपार	कपार	NOUN	N_NN	Case=Nom	9	amod	_	_
9	खपावत	खपावत	VERB	V_VM	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	obj	_	_
10	बाड़ें	बा	AUX	V_VAUX	Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
11	कि	कि	SCONJ	CC_CCS	_	31	mark	_	_
12	प्रियंका	प्रियंका	PROPN	N_NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	14	nmod	_	_
13	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	12	case	_	_
14	रोका	रोक	NOUN	N_NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	16	nmod	_	_
15	में	में	ADP	PSP	AdpType=Post	14	case	_	_
16	रसगुल्ला	रसगुल्ला	VERB	V_VM	Case=Nom|Gender=Fem|Number=Sing|Person=3	18	compound	_	SpacesAfter=\n
17	जवना	जवना	DET	DM_DMR	Case=Acc|Gender=Fem|Number=Sing|Person=3	18	compound	_	_
18	दोकान	दोकान	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	31	nmod	_	_
19	से	से	ADP	PSP	AdpType=Post	18	case	_	_
20	आइल	आ	VERB	V_VM	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	xcomp	_	_
21	रहुवे	रह	AUX	V_VAUX	Case=Nom|Gender=Masc|Number=Sing|Person=3	20	aux	_	_
22	ओह	ओह	DET	DM_DMD	Case=Nom|Gender=Masc|Number=Sing|Person=3	23	compound	_	_
23	दोकान	दोकान	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	26	nmod	_	_
24	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	23	case	_	_
25	कर्मचारी	कर्मचारी	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	26	compound	_	_
26	झप्पूलाल	झप्पूलाल	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	31	nmod	_	_
27	से	से	ADP	PSP	AdpType=Post	26	case	_	_
28	इन्टरव्यू	इन्टरव्यू	NOUN	N_NN	Case=Nom	31	nmod	_	_
29	कइसे	कयह	PRON	PR_PRQ	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	31	nmod	_	_
30	हासिल	हासिल	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	31	compound	_	SpacesAfter=\n
31	कइल	कर	VERB	V_VM	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	ccomp	_	_
32	जाव	जा	AUX	V_VAUX	Case=Nom|Number=Sing|Person=3	31	aux	_	_
33	?	?	PUNCT	RD_PUNC	_	10	punct	_	_

~~~


