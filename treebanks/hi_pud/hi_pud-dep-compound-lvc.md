---
layout: base
title:  'Statistics of compound:lvc in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="hi_pud-dep-compound-redup.html">compound:redup</a></tt>.

447 nodes (2%) are attached to their parents as `compound:lvc`.

443 instances of `compound:lvc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04250559284116.

The following 7 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (219; 49% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (217; 49% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:lvc	color:blue
1	फिर	_	ADV	RB	_	4	advmod	_	Translit=phira
2	विज्ञापन	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Translit=vijñāpana
3	खत्म	_	ADJ	JJ	_	4	compound:lvc	_	Translit=khatma
4	हो	_	VERB	VB	_	0	root	_	Translit=ho
5	जाते	_	AUX	VXH	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3	4	aux	_	Translit=jāte
6	हैं	_	AUX	VXH	Gender=Masc|Number=Plur|Person=3|Tense=Pres	4	aux	_	SpaceAfter=No|Translit=haiṁ
7	।	_	PUNCT	.	_	4	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:lvc	color:blue
1	पहले	_	ADV	RB	_	8	advmod	_	Translit=pahale
2	एक	_	DET	DT	Definite=Ind|Number=Sing	4	det	_	Translit=eka
3	यजीदी	_	ADJ	JJ	_	4	amod	_	Translit=yajīdī
4	महिला	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing	8	nsubj	_	Translit=mahilā
5	ने	_	ADP	IN	Case=Erg	4	case	_	Translit=ne
6	रोना	_	VERB	VINF	VerbForm=Inf	8	xcomp	_	Translit=ronā
7	शुरू	_	NOUN	NN	Gender=Masc|Number=Sing	8	compound:lvc	_	Translit=śurū
8	किया	_	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No|Bug=multi-subj|Translit=kiyā
9	,	_	PUNCT	,	_	10	punct	_	Translit=,
10	फिर	_	ADV	RB	_	8	advmod	_	Translit=phira
11	उसकी	_	PRON	PRP$	Animacy=Anim|Case=Nom|Gender=Fem|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	13	nmod:poss	_	Translit=usakī
12	एक	_	DET	DT	Definite=Ind|Number=Sing	13	det	_	Translit=eka
13	दोस्त	_	NOUN	NN	Animacy=Anim|Case=Acc|Number=Sing	8	nsubj	_	Translit=dosta
14	ने	_	ADP	IN	Case=Erg	13	case	_	SpaceAfter=No|Translit=ne
15	।	_	PUNCT	.	_	8	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 compound:lvc	color:blue
1	पुरुष	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	compound	_	Translit=puruṣa
2	माध्यमिक	_	ADJ	JJ	_	3	amod	_	Translit=mādhyamika
3	स्कूलों	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	27	obl	_	Translit=skūloṁ
4	में	_	ADP	IN	Case=Loc	3	case	_	Translit=meṁ
5	अधिक	_	DET	QF	_	6	det	_	Translit=adhika
6	नामांकन	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	19	nmod:poss	_	SpaceAfter=No|Translit=nāmāṁkana
7	,	_	PUNCT	,	_	10	punct	_	Translit=,
8	प्रति	_	DET	QF	_	9	det	_	Translit=prati
9	व्यक्ति	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	compound	_	Translit=vyakti
10	आय	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	conj	_	Translit=āya
11	और	_	CCONJ	CC	_	14	cc	_	Translit=aura
12	आर्थिक	_	ADJ	JJ	_	14	amod	_	Translit=ārthika
13	वृद्धि	_	NOUN	NN	Animacy=Inan|Gender=Fem|Number=Sing	14	compound	_	Translit=vr̥ddhi
14	दर	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No|Translit=dara
15	,	_	PUNCT	,	_	16	punct	_	Translit=,
16	इन	_	DET	DT	Definite=Def|Number=Plur	6	det	_	Translit=ina
17	सभी	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	appos	_	Translit=sabhī
18	का	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	6	case	_	Translit=kā
19	गृहयुद्ध	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	21	nmod:poss	_	Translit=gr̥hayuddha
20	की	_	ADP	IN	Case=Gen|Gender=Fem	19	case	_	Translit=kī
21	संभावना	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	23	obj	_	Translit=saṁbhāvanā
22	कम	_	DET	QF	_	23	compound:lvc	_	Translit=kama
23	करने	_	VERB	VINF	VerbForm=Inf	27	xcomp	_	Translit=karane
24	पर	_	ADP	IN	Case=Acc	23	case	_	Translit=para
25	महत्वपूर्ण	_	ADJ	JJ	_	26	amod	_	Translit=mahatvapūrṇa
26	प्रभाव	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	27	obj	_	Translit=prabhāva
27	पड़ा	_	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No|Translit=paṛā
28	।	_	PUNCT	.	_	27	punct	_	Translit=.

~~~


