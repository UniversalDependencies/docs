---
layout: base
title:  'Statistics of cc in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `cc`

This relation is universal.

547 nodes (2%) are attached to their parents as `cc`.

528 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.28336380255941.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (208; 38% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (191; 35% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (70; 13% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (66; 12% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="hi_pud-pos-DET.html">DET</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="hi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 cc	color:blue
1	हमारे	_	PRON	PRP	Animacy=Anim|Case=Acc|Number=Sing|Person=1	6	nsubj	_	Translit=hamāre
2	पास	_	ADP	IN	_	1	case	_	Translit=pāsa
3	एक	_	DET	DT	Definite=Ind|Number=Sing	5	det	_	Translit=eka
4	शानदार	_	ADJ	JJ	_	5	amod	_	Translit=śānadāra
5	टीम	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	obj	_	Translit=ṭīma
6	है	_	VERB	VBI	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	Translit=hai
7	और	_	CCONJ	CC	_	15	cc	_	Translit=aura
8	यह	_	PRON	PDEM	Number=Sing	15	nsubj	_	Translit=yaha
9	हमारे	_	PRON	PRP	Animacy=Anim|Case=Acc|Number=Plur|Person=1	15	iobj	_	Translit=hamāre
10	लिए	_	ADP	IN	_	9	case	_	Translit=lie
11	आगे	_	NOUN	NST	_	12	compound:lvc	_	Translit=āge
12	बढ़ने	_	VERB	VINF	VerbForm=Inf	14	xcomp	_	Translit=baṛhane
13	का	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	12	case	_	Translit=kā
14	अवसर	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	15	obj	_	Translit=avasara
15	है	_	VERB	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	conj	_	SpaceAfter=No|Translit=hai
16	।	_	PUNCT	.	_	6	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	खेलों	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	nmod:poss	_	Translit=kheloṁ
2	और	_	CCONJ	CC	_	3	cc	_	Translit=aura
3	रोजमर्रा	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	conj	_	Translit=rojamarrā
4	के	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	1	case	_	Translit=ke
5	जीवन	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	Translit=jīvana
6	के	_	ADP	IN	_	5	case	_	Translit=ke
7	बीच	_	ADP	IN	_	6	fixed	_	Translit=bīca
8	समानताएं	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	9	obj	_	Translit=samānatāeṁ
9	निकालनी	_	VERB	VBI	Gender=Fem|Number=Sing|Person=3	0	root	_	Translit=nikālanī
10	पड़ती	_	AUX	VXH	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3	9	aux	_	Translit=paṛatī
11	हैं	_	AUX	VXH	Gender=Fem|Number=Plur|Person=3|Tense=Pres	9	aux	_	SpaceAfter=No|Translit=haiṁ
12	।	_	PUNCT	.	_	9	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	उनमें	_	PRON	PDEM	Number=Plur	13	iobj	_	Translit=unameṁ
2	सेंट	_	NOUN	NN	Animacy=Anim|Gender=Masc|Number=Sing	3	compound	_	Proper=True|Translit=seṁṭa
3	पीटर	_	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	8	nmod:poss	_	Translit=pīṭara
4	और	_	CCONJ	CC	_	5	cc	_	Translit=aura
5	पॉल	_	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	conj	_	Translit=pôla
6	के	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	3	case	_	Translit=ke
7	एबी	_	PROPN	NNP	Animacy=Inan|Gender=Masc|Number=Sing	8	compound	_	Translit=ebī
8	चर्च	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	nmod:poss	_	Proper=True|Translit=carca
9	का	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	8	case	_	Translit=kā
10	एक	_	DET	DT	Definite=Ind|Number=Sing	12	det	_	Translit=eka
11	पुराना	_	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing	12	amod	_	Translit=purānā
12	मठ	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	obj	_	Translit=maṭha
13	है	_	VERB	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No|Translit=hai
14	।	_	PUNCT	.	_	13	punct	_	Translit=.

~~~


