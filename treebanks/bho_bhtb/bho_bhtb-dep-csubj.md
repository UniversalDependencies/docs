---
layout: base
title:  'Statistics of csubj in UD_Bhojpuri-BHTB'
udver: '2'
---

## Treebank Statistics: UD_Bhojpuri-BHTB: Relations: `csubj`

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.9.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="bho_bhtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="bho_bhtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="bho_bhtb-pos-VERB.html">VERB</a></tt>-<tt><a href="bho_bhtb-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	कहे	कह	VERB	V_VM	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	csubj	_	Translit=kahe|LTranslit=kaha
2	वाला	वाला	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	1	mark	_	Translit=vālā|LTranslit=vālā
3	त	त	PART	RP_RPD	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	obl	_	Translit=ta|LTranslit=ta
4	इहो	इहो	DET	DM_DMD	_	5	det	_	Translit=iho|LTranslit=iho
5	कहेलें	कहेल	VERB	V_VM	Mood=Sub|Number=Sing|Person=2|Polite=Form|VerbForm=Fin	0	root	_	Translit=kaheleṁ|LTranslit=kahela
6	कि	कि	SCONJ	CC_CCS	_	14	mark	_	Translit=ki|LTranslit=ki
7	राहुल	राहुल	PROPN	N_NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Translit=rāhula|LTranslit=rāhula
8	आ	आ	CCONJ	CC_CCD	Number=Plur|Voice=Act	9	cc	_	Translit=ā|LTranslit=ā
9	प्रियंको	प्रियंको	PROPN	N_NNP	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	7	conj	_	Translit=priyaṁko|LTranslit=priyaṁko
10	इटलिए	इटले	PROPN	N_NNP	PronType=Prs	12	nmod	_	Translit=iṭalie|LTranslit=iṭale
11	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	10	case	_	Translit=ke|LTranslit=kā
12	नागरिक	नागरिक	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	obj	_	Translit=nāgarika|LTranslit=nāgarika
13	ह	ह	VERB	V_VM	NumType=Card	5	ccomp	_	Translit=ha|LTranslit=ha
14	लोग	लोग	NUM	QT_QTO	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	discourse	_	Translit=loga|LTranslit=loga
15	।	।	PUNCT	RD_PUNC	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	देखतानी	देखतानी	VERB	V_VM	Case=Nom|Number=Sing|Person=3	3	csubj	_	Translit=dekhatānī|LTranslit=dekhatānī
2	एगो	एगो	DET	QT_QTC	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	det	_	Translit=ego|LTranslit=ego
3	चैनल	चैनल	NOUN	N_NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	Translit=cainala|LTranslit=cainala
4	पर	पर	ADP	PSP	AdpType=Post	3	case	_	Translit=para|LTranslit=para
5	ब्रेकिंग	ब्रेकिंग	ADJ	JJ	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	amod	_	SpacesAfter=\n|Translit=brekiṁga|LTranslit=brekiṁga
6	न्यूज	न्यूज	NOUN	N_NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	obj	_	Translit=nyūja|LTranslit=nyūja
7	आ	आ	VERB	V_VM	_	0	root	_	Translit=ā|LTranslit=ā
8	रहल	रह	AUX	V_VAUX	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	aux	_	Translit=rahala|LTranslit=raha
9	बा	बा	AUX	V_VAUX	Case=Nom|Number=Sing|Person=3	6	aux	_	Translit=bā|LTranslit=bā
10	–	–	PUNCT	RD_SYM	_	7	punct	_	Translit=–|LTranslit=–
11	सबले	सबला	DET	RP_INTF	Case=Nom|Gender=Masc|Number=Plur|Person=3	12	det	_	Translit=sabale|LTranslit=sabalā
12	पहिले	पहिल	NOUN	N_NST	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|VerbForm=Part|Voice=Act	24	nmod	_	Translit=pahile|LTranslit=pahila
13	हम	हम	PRON	PR_PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	24	iobj	_	Translit=hama|LTranslit=hama
14	बताएब	बताएब	VERB	V_VM	Case=Nom|Gender=Masc|Number=Sing|Person=3	24	compound	_	Translit=batāeba|LTranslit=batāeba
15	कि	कि	SCONJ	CC_CCS	_	24	mark	_	Translit=ki|LTranslit=ki
16	प्रियंका	प्रियंका	PROPN	N_NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	24	iobj	_	Translit=priyaṁkā|LTranslit=priyaṁkā
17	अपना	अपना	PRON	PR_PRF	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	18	nmod	_	Translit=apanā|LTranslit=apanā
18	बिआह	बिआह	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing|Person=3	20	amod	_	Translit=biāha|LTranslit=biāha
19	वाला	वाला	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	18	mark	_	Translit=vālā|LTranslit=vālā
20	लहँगा	लहँगा	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	24	obj	_	Translit=laham̃gā|LTranslit=laham̃gā
21	कवना	कवना	DET	DM_DMI	Case=Acc|VerbForm=Inf	24	advcl	_	Translit=kavanā|LTranslit=kavanā
22	दोकान	दोकान	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	24	obl	_	SpacesAfter=\n|Translit=dokāna|LTranslit=dokāna
23	से	से	ADP	PSP	AdpType=Post	22	case	_	Translit=se|LTranslit=se
24	खरीदिहें	खरीदिह	VERB	V_VM	Mood=Sub|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	7	ccomp	_	Translit=kharīdiheṁ|LTranslit=kharīdiha
25	।	।	PUNCT	RD_PUNC	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 csubj	color:blue
1	बाकिर	बाकिर	CCONJ	CC_CCD	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	csubj	_	Translit=bākira|LTranslit=bākira
2	पप्पू	पप्पू	PROPN	N_NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	Translit=pappū|LTranslit=pappū
3	के	का	ADP	PSP	AdpType=Post	2	case	_	Translit=ke|LTranslit=kā
4	दुर्भाग्य	दुर्भाग्य	ADV	RB	_	15	advmod	_	Translit=durbhāgya|LTranslit=durbhāgya
5	कि	कि	SCONJ	CC_CCS	_	15	mark	_	Translit=ki|LTranslit=ki
6	ऊ	ऊ	PRON	PR_PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	15	obj	_	Translit=ū|LTranslit=ū
7	इटालियन	इटालियन	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	amod	_	Translit=iṭāliyana|LTranslit=iṭāliyana
8	महतारी	महतारी	NOUN	N_NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	Translit=mahatārī|LTranslit=mahatārī
9	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	8	case	_	Translit=kā|LTranslit=kā
10	पेट	पेट	NOUN	N_NST	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	Translit=peṭa|LTranslit=peṭa
11	से	से	ADP	PSP	AdpType=Post	10	case	_	Translit=se|LTranslit=se
12	बाकिर	बाकिर	CCONJ	CC_CCD	_	15	cc	_	Translit=bākira|LTranslit=bākira
13	हिन्दुस्तान	हिन्दुस्तान	PROPN	N_NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nmod	_	Translit=hindustāna|LTranslit=hindustāna
14	में	में	ADP	PSP	AdpType=Post	13	case	_	Translit=meṁ|LTranslit=meṁ
15	जनमल	जनमल	VERB	V_VM	_	0	root	_	Translit=janamala|LTranslit=janamala
16	।	।	PUNCT	RD_PUNC	_	15	punct	_	Translit=.|LTranslit=.

~~~


