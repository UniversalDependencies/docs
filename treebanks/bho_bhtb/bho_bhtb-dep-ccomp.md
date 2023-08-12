---
layout: base
title:  'Statistics of ccomp in UD_Bhojpuri-BHTB'
udver: '2'
---

## Treebank Statistics: UD_Bhojpuri-BHTB: Relations: `ccomp`

This relation is universal.

58 nodes (1%) are attached to their parents as `ccomp`.

54 instances of `ccomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.8620689655172.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (51; 88% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="bho_bhtb-pos-AUX.html">AUX</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	हम	हम	PRON	PR_PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	Translit=hama|LTranslit=hama
2	ओह	ओह	DET	DM_DMD	NumType=Card	3	det	_	Translit=oha|LTranslit=oha
3	चीफ	चीफ	NOUN	N_NN	Case=Nom	5	obj	_	Translit=cīpha|LTranslit=cīpha
4	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	3	case	_	Translit=ke|LTranslit=kā
5	डपटनी	डपट	VERB	V_VM	_	0	root	_	Translit=ḍapaṭanī|LTranslit=ḍapaṭa
6	कि	कि	SCONJ	CC_CCS	_	10	cc	_	Translit=ki|LTranslit=ki
7	का	का	PRON	PR_PRQ	_	10	obl	_	Translit=kā|LTranslit=kā
8	बेहूदा	बेहूदा	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing	9	amod	_	Translit=behūdā|LTranslit=behūdā
9	आइडिया	आइडिया	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	obj	_	SpacesAfter=\n|Translit=āiḍiyā|LTranslit=āiḍiyā
10	खोजे	खोज	VERB	V_VM	_	5	ccomp	_	Translit=khoje|LTranslit=khoja
11	में	में	ADP	PSP	AdpType=Post	10	mark	_	Translit=meṁ|LTranslit=meṁ
12	लागल	लग	AUX	V_VAUX	_	10	aux	_	Translit=lāgala|LTranslit=laga
13	बाड़	बा	AUX	V_VAUX	Number=Sing|Person=3|Polite=Form	10	aux	_	Translit=bāṛa|LTranslit=bā
14	?	।	PUNCT	RD_PUNC	_	5	punct	_	Translit=?|LTranslit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 ccomp	color:blue
1	बिआह	बिआह	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Translit=biāha|LTranslit=biāha
2	-	-	PUNCT	RD_PUNC	_	4	punct	_	Translit=-|LTranslit=-
3	प्रधान	प्रधान	NOUN	N_NN	Case=Acc	4	compound	_	Translit=pradhāna|LTranslit=pradhāna
4	मुल्क	मुल्क	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	Translit=mulka|LTranslit=mulka
5	में	में	ADP	PSP	AdpType=Post	4	case	_	Translit=meṁ|LTranslit=meṁ
6	सब	सब	DET	QT_QTF	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	det	_	Translit=saba|LTranslit=saba
7	कुछ	कुछ	NUM	QT_QTF	Case=Nom|Person=3|PronType=Prs	8	nummod	_	Translit=kucha|LTranslit=kucha
8	बिआहे	बिआहा	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Translit=biāhe|LTranslit=biāhā
9	पर	पर	ADP	PSP	AdpType=Post	8	case	_	Translit=para|LTranslit=para
10	शुरु	शुरु	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	compound	_	Translit=śuru|LTranslit=śuru
11	होला	होल	VERB	V_VM	Aspect=Perf|Gender=Masc|VerbForm=Part	0	root	_	Translit=holā|LTranslit=hola
12	आ	आ	CCONJ	CC_CCD	_	11	conj	_	Translit=ā|LTranslit=ā
13	बिआहे	बिआहा	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	SpacesAfter=\n|Translit=biāhe|LTranslit=biāhā
14	पर	पर	ADP	PSP	AdpType=Post	13	case	_	Translit=para|LTranslit=para
15	खतम	खतम	NOUN	N_NN	Case=Nom	11	ccomp	_	Translit=khatama|LTranslit=khatama
16	।	।	PUNCT	RD_PUNC	_	11	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 31 ccomp	color:blue
1	बाकिर	बाकिर	CCONJ	CC_CCD	_	10	advmod	_	Translit=bākira|LTranslit=bākira
2	ई	ई	DET	DM_DMD	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	compound	_	Translit=ī|LTranslit=ī
3	चैनल	चैनल	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	Translit=cainala|LTranslit=cainala
4	वाले	वाला	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	3	case	_	Translit=vāle|LTranslit=vālā
5	काहे	काहे	PRON	PR_PRQ	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part	6	acl	_	Translit=kāhe|LTranslit=kāhe
6	एह	एह	DET	DM_DMD	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	obl	_	Translit=eha|LTranslit=eha
7	पर	पर	ADP	PSP	AdpType=Post	6	case	_	Translit=para|LTranslit=para
8	कपार	कपार	NOUN	N_NN	Case=Nom	9	amod	_	Translit=kapāra|LTranslit=kapāra
9	खपावत	खपावत	VERB	V_VM	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	obj	_	Translit=khapāvata|LTranslit=khapāvata
10	बाड़ें	बा	AUX	V_VAUX	Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Translit=bāṛeṁ|LTranslit=bā
11	कि	कि	SCONJ	CC_CCS	_	31	mark	_	Translit=ki|LTranslit=ki
12	प्रियंका	प्रियंका	PROPN	N_NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	14	nmod	_	Translit=priyaṁkā|LTranslit=priyaṁkā
13	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	12	case	_	Translit=ke|LTranslit=kā
14	रोका	रोक	NOUN	N_NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	16	nmod	_	Translit=rokā|LTranslit=roka
15	में	में	ADP	PSP	AdpType=Post	14	case	_	Translit=meṁ|LTranslit=meṁ
16	रसगुल्ला	रसगुल्ला	VERB	V_VM	Case=Nom|Gender=Fem|Number=Sing|Person=3	18	compound	_	SpacesAfter=\n|Translit=rasagullā|LTranslit=rasagullā
17	जवना	जवना	DET	DM_DMR	Case=Acc|Gender=Fem|Number=Sing|Person=3	18	compound	_	Translit=javanā|LTranslit=javanā
18	दोकान	दोकान	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	31	nmod	_	Translit=dokāna|LTranslit=dokāna
19	से	से	ADP	PSP	AdpType=Post	18	case	_	Translit=se|LTranslit=se
20	आइल	आ	VERB	V_VM	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	xcomp	_	Translit=āila|LTranslit=ā
21	रहुवे	रह	AUX	V_VAUX	Case=Nom|Gender=Masc|Number=Sing|Person=3	20	aux	_	Translit=rahuve|LTranslit=raha
22	ओह	ओह	DET	DM_DMD	Case=Nom|Gender=Masc|Number=Sing|Person=3	23	compound	_	Translit=oha|LTranslit=oha
23	दोकान	दोकान	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	26	nmod	_	Translit=dokāna|LTranslit=dokāna
24	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	23	case	_	Translit=ke|LTranslit=kā
25	कर्मचारी	कर्मचारी	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	26	compound	_	Translit=karmacārī|LTranslit=karmacārī
26	झप्पूलाल	झप्पूलाल	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	31	nmod	_	Translit=jhappūlāla|LTranslit=jhappūlāla
27	से	से	ADP	PSP	AdpType=Post	26	case	_	Translit=se|LTranslit=se
28	इन्टरव्यू	इन्टरव्यू	NOUN	N_NN	Case=Nom	31	nmod	_	Translit=inṭaravyū|LTranslit=inṭaravyū
29	कइसे	कयह	PRON	PR_PRQ	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	31	nmod	_	Translit=kaise|LTranslit=kayaha
30	हासिल	हासिल	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	31	compound	_	SpacesAfter=\n|Translit=hāsila|LTranslit=hāsila
31	कइल	कर	VERB	V_VM	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	ccomp	_	Translit=kaila|LTranslit=kara
32	जाव	जा	AUX	V_VAUX	Case=Nom|Number=Sing|Person=3	31	aux	_	Translit=jāva|LTranslit=jā
33	?	?	PUNCT	RD_PUNC	_	10	punct	_	Translit=?|LTranslit=?

~~~


