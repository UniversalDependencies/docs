---
layout: base
title:  'Statistics of nsubj:pass in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-nsubj.html">nsubj</a></tt>.

167 nodes (1%) are attached to their parents as `nsubj:pass`.

165 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.40119760479042.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (115; 69% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (20; 12% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (14; 8% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
1	अधिकतम	_	ADJ	JJS	_	2	amod	_	Translit=adhikatama
2	$5,000	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	compound	_	OrigForm=$5000|Translit=$5,000
3	प्रति	_	DET	QF	_	4	det	_	Translit=prati
4	व्यक्ति	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	nmod:poss	_	Translit=vyakti
5	की	_	ADP	IN	Case=Gen|Gender=Fem	4	case	_	Translit=kī
6	स्वीकृति	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	Translit=svīkr̥ti
7	दी	_	VERB	VBI	Gender=Fem|Number=Sing|Person=3	0	root	_	Translit=dī
8	गयी	_	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3	7	aux:pass	_	Translit=gayī
9	है	_	AUX	VXH	Gender=Fem|Number=Sing|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No|Translit=hai
10	।	_	PUNCT	.	_	7	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 nsubj:pass	color:blue
1	भारत	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	Translit=bhārata
2	में	_	ADP	IN	Case=Loc	1	case	_	Translit=meṁ
3	बुढ़ापे	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	Translit=buṛhāpe
4	में	_	ADP	IN	Case=Loc	3	case	_	Translit=meṁ
5	जब	_	SCONJ	IN	_	7	mark	_	Translit=jaba
6	लोग	_	NOUN	NN	Animacy=Anim|Case=Nom|Number=Plur	7	nsubj	_	Translit=loga
7	मरते	_	VERB	VBI	Aspect=Imp|Number=Plur|Person=3	0	root	_	Translit=marate
8	हैं	_	AUX	VXH	Number=Plur|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No|Translit=haiṁ
9	,	_	PUNCT	,	_	13	punct	_	Translit=,
10	तो	_	SCONJ	IN	_	13	mark	_	Translit=to
11	इसे	_	PRON	PDEM	Number=Sing	13	nsubj:pass	_	Translit=ise
12	उत्सव	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	obj	_	Translit=utsava
13	माना	_	VERB	VBI	Gender=Masc|Number=Sing|Person=3	7	ccomp	_	Translit=mānā
14	जाता	_	AUX	VXH	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3	13	aux:pass	_	Translit=jātā
15	है	_	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Pres	13	aux	_	SpaceAfter=No|Translit=hai
16	।	_	PUNCT	.	_	7	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj:pass	color:blue
1	वेइस	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	nsubj:pass	_	Translit=veisa
2	कोलोन	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	compound	_	Translit=kolona
3	और	_	CCONJ	CC	_	4	cc	_	Translit=aura
4	ब्रेमेन	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	conj	_	Translit=bremena
5	शहरों	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obl:agent	_	Translit=śaharoṁ
6	द्वारा	_	ADP	IN	_	5	case	_	Translit=dvārā
7	साहित्य	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	8	compound	_	Translit=sāhitya
8	पुरस्कारों	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	obl	_	Translit=puraskāroṁ
9	से	_	ADP	IN	Case=Acc	8	case	_	Translit=se
10	सम्मानित	_	ADJ	JJ	_	11	compound:lvc	_	Translit=sammānita
11	किया	_	VERB	VBI	Gender=Masc|Number=Sing|Person=3	0	root	_	Translit=kiyā
12	गया	_	AUX	VXH	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3	11	aux:pass	_	Translit=gayā
13	था	_	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Past	11	aux	_	SpaceAfter=No|Translit=thā
14	।	_	PUNCT	.	_	11	punct	_	Translit=.

~~~


