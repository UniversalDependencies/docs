---
layout: base
title:  'Statistics of advcl in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `advcl`

This relation is universal.

200 nodes (1%) are attached to their parents as `advcl`.

176 instances of `advcl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.03.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (151; 76% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (26; 13% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (12; 6% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 5 advcl	color:blue
1	इन	_	DET	DT	Definite=Def|Number=Plur	2	det	_	Translit=ina
2	सभी	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obl	_	Translit=sabhī
3	से	_	ADP	IN	Case=Acc	2	case	_	Translit=se
4	दूर	_	NOUN	NST	_	5	obl	_	Translit=dūra
5	रहने	_	VERB	VINF	VerbForm=Inf	18	advcl	_	Translit=rahane
6	के	_	ADP	IN	_	5	case	_	Translit=ke
7	लिए	_	ADP	IN	_	6	fixed	_	SpaceAfter=No|Translit=lie
8	,	_	PUNCT	,	_	5	punct	_	Translit=,
9	रेमिस	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	Translit=remisa
10	1947	_	NUM	CD	NumType=Card	12	nmod:poss	_	Translit=1947
11	की	_	ADP	IN	Case=Gen|Gender=Fem	10	case	_	Translit=kī
12	गर्मियों	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	18	obl	_	Translit=garmiyoṁ
13	में	_	ADP	IN	Case=Loc	12	case	_	Translit=meṁ
14	ज्यादातर	_	DET	QF	_	15	det	_	Translit=jyādātara
15	समय	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	18	obl:tmod	_	Translit=samaya
16	स्विट्जरलैंड	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	obl	_	Translit=sviṭjaralaiṁḍa
17	में	_	ADP	IN	Case=Loc	16	case	_	Translit=meṁ
18	रहा	_	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No|Translit=rahā
19	।	_	PUNCT	.	_	18	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 advcl	color:blue
1	एंडीज	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	obj	_	Translit=eṁḍīja
2	बनने	_	VERB	VINF	VerbForm=Inf	15	advcl	_	Translit=banane
3	से	_	ADP	IN	_	2	case	_	Translit=se
4	पहले	_	ADP	IN	_	3	fixed	_	SpaceAfter=No|Translit=pahale
5	,	_	PUNCT	,	_	2	punct	_	Translit=,
6	दक्षिण	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	7	compound	_	Proper=True|Translit=dakṣiṇa
7	अमेरिका	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	nmod:poss	_	Translit=amerikā
8	की	_	ADP	IN	Case=Gen|Gender=Fem	7	case	_	Translit=kī
9	पश्चिमी	_	ADJ	JJ	_	10	amod	_	Translit=paścimī
10	सीमा	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	15	obl	_	Translit=sīmā
11	पर	_	ADP	IN	Case=Loc	10	case	_	Translit=para
12	कई	_	DET	QF	_	14	det	_	Translit=kaī
13	ऑरगेनी	_	ADJ	JJ	_	14	amod	_	Translit=ôragenī
14	स्थल	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	15	obj	_	Translit=sthala
15	मौजूद	_	ADJ	JJ	_	0	root	_	Translit=maujūda
16	थे	_	AUX	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Past	15	cop	_	SpaceAfter=No|Translit=the
17	।	_	PUNCT	.	_	15	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 5 advcl	color:blue
1	हवा	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	nmod:poss	_	Translit=havā
2	की	_	ADP	IN	Case=Gen|Gender=Fem	1	case	_	Translit=kī
3	गति	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	obj	_	Translit=gati
4	और	_	DET	QF	_	5	advmod	_	Translit=aura
5	तेज	_	ADJ	JJ	_	15	advcl	_	Translit=teja
6	होने	_	AUX	VINF	VerbForm=Inf	5	cop	_	Translit=hone
7	पर	_	ADP	IN	Case=Acc	5	case	_	SpaceAfter=No|Translit=para
8	,	_	PUNCT	,	_	5	punct	_	Translit=,
9	कुछ	_	DET	QF	_	10	det	_	Translit=kucha
10	कण	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	Translit=kaṇa
11	हवा	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	13	nmod:poss	_	Translit=havā
12	की	_	ADP	IN	Case=Gen|Gender=Fem	11	case	_	Translit=kī
13	धारा	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	15	obl	_	Translit=dhārā
14	में	_	ADP	IN	Case=Loc	13	case	_	Translit=meṁ
15	उठ	_	VERB	VB	_	0	root	_	Translit=uṭha
16	जाते	_	AUX	VXH	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3	15	aux	_	Translit=jāte
17	हैं	_	AUX	VXH	Gender=Masc|Number=Plur|Person=3|Tense=Pres	15	aux	_	SpaceAfter=No|Translit=haiṁ
18	।	_	PUNCT	.	_	15	punct	_	Translit=.

~~~


