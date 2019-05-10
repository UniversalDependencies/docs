---
layout: base
title:  'Statistics of det:predet in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-det.html">det</a></tt>.

10 nodes (0%) are attached to their parents as `det:predet`.

10 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `det:predet`: <tt><a href="hi_pud-pos-DET.html">DET</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (7; 70% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (3; 30% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:predet	color:blue
1	हर	_	DET	QF	_	2	det	_	Translit=hara
2	कविता	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Translit=kavitā
3	युद्ध	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	nmod:poss	_	Translit=yuddha
4	के	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	3	case	_	Translit=ke
5	केवल	_	DET	QF	_	6	det:predet	_	Translit=kevala
6	एक	_	DET	DT	Definite=Ind|Number=Sing	7	det	_	Translit=eka
7	हिस्से	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod:poss	_	Translit=hisse
8	का	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	7	case	_	Translit=kā
9	बयान	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	obj	_	Translit=bayāna
10	करती	_	VERB	VBI	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3	0	root	_	Translit=karatī
11	है	_	AUX	VXH	Gender=Fem|Number=Sing|Person=3|Tense=Pres	10	aux	_	SpaceAfter=No|Translit=hai
12	।	_	PUNCT	.	_	10	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det:predet	color:blue
1	दक्षिण	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	2	compound	_	Translit=dakṣiṇa
2	अफ्रीकी	_	ADJ	JJ	_	3	amod	_	Translit=aphrīkī
3	खिलाड़ी	_	NOUN	NN	Animacy=Anim|Case=Nom|Number=Sing	8	nsubj	_	Translit=khilāṛī
4	लगभग	_	DET	QF	_	6	det:predet	_	Translit=lagabhaga
5	ऐसी	_	SCONJ	DT	_	8	mark	_	Translit=aisī
6	स्थिति	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obl	_	Translit=sthiti
7	में	_	ADP	IN	Case=Loc	6	case	_	Translit=meṁ
8	है	_	VERB	VBI	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	Translit=hai
9	जहां	_	SCONJ	IN	_	14	mark	_	Translit=jahāṁ
10	से	_	ADP	IN	_	14	case	_	Bug=mark-child|Translit=se
11	वह	_	PRON	PRP	Animacy=Anim|Case=Nom|Number=Plur|Person=3	14	nsubj	_	Translit=vaha
12	वापस	_	ADV	RB	_	14	advmod	_	Translit=vāpasa
13	नहीं	_	PART	NEG	Polarity=Neg	14	advmod	_	Translit=nahīṁ
14	लौट	_	VERB	VB	_	8	parataxis	_	Translit=lauṭa
15	सकते	_	NOUN	NN	Animacy=Anim|Case=Acc|Number=Plur	14	aux	_	Translit=sakate
16	और	_	CCONJ	CC	_	25	cc	_	Translit=aura
17	हमें	_	PRON	PRP	Animacy=Anim|Case=Acc|Number=Plur|Person=1	25	nsubj	_	Translit=hameṁ
18	उनकी	_	PRON	PRP$	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur|Number[psor]=Plur|Person=3|PronType=Prs	19	det	_	Translit=unakī
19	इच्छा	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	22	obl	_	Translit=icchā
20	से	_	ADP	IN	Case=Acc	19	case	_	Translit=se
21	मेल	_	NOUN	NN	Gender=Masc|Number=Sing	22	compound:conjv	_	Translit=mela
22	करने	_	VERB	VINF	VerbForm=Inf	25	advcl	_	Translit=karane
23	के	_	ADP	IN	_	22	case	_	Translit=ke
24	लिए	_	ADP	IN	_	23	fixed	_	Translit=lie
25	सक्षम	_	ADJ	JJ	_	14	conj	_	Translit=sakṣama
26	होना	_	AUX	VINF	Number=Plur|Person=1|VerbForm=Inf	25	cop	_	Translit=honā
27	चाहिए	_	AUX	VXH	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres	25	aux	_	SpaceAfter=No|Translit=cāhie
28	।	_	PUNCT	.	_	8	punct	_	Translit=.

~~~


