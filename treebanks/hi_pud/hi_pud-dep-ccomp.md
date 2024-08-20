---
layout: base
title:  'Statistics of ccomp in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `ccomp`

This relation is universal.

153 nodes (1%) are attached to their parents as `ccomp`.

152 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.6666666666667.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (126; 82% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (12; 8% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	लीव	लीव	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	3	nsubj	_	Translit=līva|LTranslit=līva
2	ने	ने	ADP	IN	Case=Erg	1	case	_	Translit=ne|LTranslit=ne
3	कहा	कहना	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LTranslit=kahanā|Translit=kahā
4	कि	कि	SCONJ	IN	_	11	mark	_	Translit=ki|LTranslit=ki
5	उसकी	वह	PRON	PRP$	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nmod:poss	_	Translit=usakī|LTranslit=vaha
6	आवाज	आवाज	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	Translit=āvāja|LTranslit=āvāja
7	सचमुच	सचमुच	ADV	RB	_	11	advmod	_	Translit=sacamuca|LTranslit=sacamuca
8	दुनिया	दुनिया	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	11	obl	_	Translit=duniyā|LTranslit=duniyā
9	भर	भर	PART	PRT	_	8	discourse	_	Translit=bhara|LTranslit=bhara
10	में	में	ADP	IN	Case=Loc	8	case	_	Translit=meṁ|LTranslit=meṁ
11	फैल	फैलना	VERB	VB	_	3	ccomp	_	LTranslit=phailanā|Translit=phaila
12	गयी	जाना	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3	11	aux	_	LTranslit=jānā|SpaceAfter=No|Translit=gayī
13	।	।	PUNCT	.	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 22 ccomp	color:blue
1	हार्ले	हार्ला	PROPN	NNP	Gender=Masc|Number=Sing	6	nmod:poss	_	SpaceAfter=No|Translit=hārle|LTranslit=hārlā
2	-	-	PUNCT	-	_	3	punct	_	SpaceAfter=No|Proper=True|Translit=-|LTranslit=-
3	डेविडसन	डेविडसन	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	1	flat:name	_	Translit=ḍeviḍasana|LTranslit=ḍeviḍasana
4	की	का	ADP	IN	Case=Gen|Gender=Fem	1	case	_	Translit=kī|LTranslit=kā
5	एक	एक	DET	DT	Definite=Ind|Number=Sing	6	det	_	Translit=eka|LTranslit=eka
6	प्रवक्ता	प्रवक्ता	NOUN	NN	Case=Acc|Number=Sing	8	nsubj	_	Translit=pravaktā|LTranslit=pravaktā
7	ने	ने	ADP	IN	Case=Erg	6	case	_	Translit=ne|LTranslit=ne
8	कहा	कहना	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LTranslit=kahanā|Translit=kahā
9	कि	कि	SCONJ	IN	_	22	mark	_	Translit=ki|LTranslit=ki
10	मीडिया	मीडिया	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	12	obl	_	Translit=mīḍiyā|LTranslit=mīḍiyā
11	में	में	ADP	IN	Case=Acc	10	case	_	Translit=meṁ|LTranslit=meṁ
12	बताई	बताना	VERB	VBI	Gender=Fem|Number=Sing|Person=3	16	acl	_	LTranslit=batānā|Translit=batāī
13	जा	जाना	AUX	VXH	_	12	aux:pass	_	LTranslit=jānā|Translit=jā
14	रही	रहना	AUX	VXH	Aspect=Prog|Gender=Fem|Mood=Ind|Number=Sing|Person=3	12	aux	_	LTranslit=rahanā|Translit=rahī
15	समय	समय	NOUN	NN	Gender=Masc|Number=Sing	16	compound	_	Translit=samaya|LTranslit=samaya
16	सीमा	सीमा	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	22	obj	_	Translit=sīmā|LTranslit=sīmā
17	--	--	PUNCT	-	_	18	punct	_	Translit=--|LTranslit=--
18	2017	2017	NUM	CD	NumType=Card	16	appos	_	Translit=2017|LTranslit=2017
19	या	या	CCONJ	CC	_	20	cc	_	Translit=yā|LTranslit=yā
20	2020	2020	NUM	CD	NumType=Card	18	conj	_	Translit=2020|LTranslit=2020
21	--	--	PUNCT	-	_	20	punct	_	Translit=--|LTranslit=--
22	सटीक	सटीक	ADJ	JJ	_	8	ccomp	_	Translit=saṭīka|LTranslit=saṭīka
23	नहीं	नहीं	PART	NEG	Polarity=Neg	22	advmod	_	Translit=nahīṁ|LTranslit=nahīṁ
24	है	है	AUX	VBI	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	22	cop	_	SpaceAfter=No|Translit=hai|LTranslit=hai
25	।	।	PUNCT	.	_	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 ccomp	color:blue
1	यह	यह	PRON	PDEM	Number=Sing	2	nsubj	_	Translit=yaha|LTranslit=yaha
2	स्पष्ट	स्पष्ट	ADJ	JJ	_	0	root	_	Translit=spaṣṭa|LTranslit=spaṣṭa
3	है	है	AUX	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	SpaceAfter=No|Translit=hai|LTranslit=hai
4	:	:	PUNCT	:	_	12	punct	_	Translit=:|LTranslit=:
5	गर्भनिरोध	गर्भनिरोध	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	7	nmod:poss	_	Translit=garbhanirodha|LTranslit=garbhanirodha
6	के	का	ADP	IN	Case=Gen|Gender=Masc|Number=Plur	5	case	_	Translit=ke|LTranslit=kā
7	मामलों	मामला	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	12	obl	_	Translit=māmaloṁ|LTranslit=māmalā
8	में	में	ADP	IN	Case=Acc	7	case	_	Translit=meṁ|LTranslit=meṁ
9	पुरुष	पुरुष	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	12	obj	_	Translit=puruṣa|LTranslit=puruṣa
10	ज्यादा	ज्यादा	DET	QF	_	11	det	_	Translit=jyādā|LTranslit=jyādā
11	जिम्मेदार	जिम्मेदार	ADJ	JJ	_	12	xcomp	_	Translit=jimmedāra|LTranslit=jimmedāra
12	हो	होना	VERB	VB	_	2	ccomp	_	LTranslit=honā|Translit=ho
13	सकते	सकना	AUX	VXH	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3	12	aux	_	LTranslit=sakanā|Translit=sakate
14	हैं	है	AUX	VXH	Gender=Masc|Number=Plur|Person=3|Tense=Pres	12	aux	_	SpaceAfter=No|Translit=haiṁ|LTranslit=hai
15	।	।	PUNCT	.	_	2	punct	_	Translit=.|LTranslit=.

~~~


