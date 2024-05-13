---
layout: base
title:  'Statistics of nsubj:pass in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-nsubj.html">nsubj</a></tt>.

167 nodes (1%) are attached to their parents as `nsubj:pass`.

166 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.7065868263473.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (125; 75% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (21; 13% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (19; 11% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
1	अधिकतम	अधिकतम	ADJ	JJS	_	2	amod	_	Translit=adhikatama|LTranslit=adhikatama
2	$5,000	$5000	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	4	compound	_	Translit=$5,000|LTranslit=$5000
3	प्रति	प्रति	DET	QF	_	4	det	_	Translit=prati|LTranslit=prati
4	व्यक्ति	व्यक्ति	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	6	nmod:poss	_	Translit=vyakti|LTranslit=vyakti
5	की	का	ADP	IN	Case=Gen|Gender=Fem	4	case	_	Translit=kī|LTranslit=kā
6	स्वीकृति	स्वीकृति	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	Translit=svīkr̥ti|LTranslit=svīkr̥ti
7	दी	देना	VERB	VBI	Gender=Fem|Number=Sing|Person=3	0	root	_	LTranslit=denā|Translit=dī
8	गयी	जाना	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3	7	aux:pass	_	LTranslit=jānā|Translit=gayī
9	है	है	AUX	VXH	Gender=Fem|Number=Sing|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No|Translit=hai|LTranslit=hai
10	।	।	PUNCT	.	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 nsubj:pass	color:blue
1	भारत	भारत	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	7	obl	_	Translit=bhārata|LTranslit=bhārata
2	में	में	ADP	IN	Case=Loc	1	case	_	Translit=meṁ|LTranslit=meṁ
3	बुढ़ापे	बुढ़ापा	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	7	obl	_	Translit=buṛhāpe|LTranslit=buṛhāpā
4	में	में	ADP	IN	Case=Loc	3	case	_	Translit=meṁ|LTranslit=meṁ
5	जब	जब	SCONJ	IN	_	7	mark	_	Translit=jaba|LTranslit=jaba
6	लोग	लोग	NOUN	NN	Case=Nom|Number=Plur	7	nsubj	_	Translit=loga|LTranslit=loga
7	मरते	मरना	VERB	VBI	Aspect=Imp|Number=Plur|Person=3	0	root	_	LTranslit=maranā|Translit=marate
8	हैं	है	AUX	VXH	Number=Plur|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No|Translit=haiṁ|LTranslit=hai
9	,	,	PUNCT	,	_	13	punct	_	Translit=,|LTranslit=,
10	तो	तो	SCONJ	IN	_	13	mark	_	Translit=to|LTranslit=to
11	इसे	यह	PRON	PDEM	Number=Sing	13	nsubj:pass	_	Translit=ise|LTranslit=yaha
12	उत्सव	उत्सव	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	13	obj	_	Translit=utsava|LTranslit=utsava
13	माना	मानना	VERB	VBI	Gender=Masc|Number=Sing|Person=3	7	ccomp	_	LTranslit=mānanā|Translit=mānā
14	जाता	जाना	AUX	VXH	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3	13	aux:pass	_	LTranslit=jānā|Translit=jātā
15	है	है	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Pres	13	aux	_	SpaceAfter=No|Translit=hai|LTranslit=hai
16	।	।	PUNCT	.	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 3 nsubj:pass	color:blue
1	हालांकि	हालांकि	SCONJ	IN	_	16	mark	_	SpaceAfter=No|Translit=hālāṁki|LTranslit=hālāṁki
2	,	,	PUNCT	,	_	16	punct	_	Translit=,|LTranslit=,
3	पाइरस	पाइरस	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	16	nsubj:pass	_	Translit=pāirasa|LTranslit=pāirasa
4	को	को	ADP	IN	Case=Acc	3	case	_	Translit=ko|LTranslit=ko
5	दक्षिणी	दक्षिणी	ADJ	JJ	_	6	amod	_	Translit=dakṣiṇī|LTranslit=dakṣiṇī
6	इटली	इटली	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	Translit=iṭalī|LTranslit=iṭalī
7	में	में	ADP	IN	Case=Loc	6	case	_	Translit=meṁ|LTranslit=meṁ
8	व्यापार	व्यापार	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	9	obj	_	Translit=vyāpāra|LTranslit=vyāpāra
9	करने	करना	VERB	VINF	VerbForm=Inf	16	advcl	_	LTranslit=karanā|Translit=karane
10	के	के	ADP	IN	Case=Erg	9	case	_	Translit=ke|LTranslit=ke
11	लिेए	लिेए	ADP	IN	_	10	fixed	_	Translit=liेe|LTranslit=liेe
12	सिसली	सिसली	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	13	obj	_	Translit=sisalī|LTranslit=sisalī
13	छोड़ने	छोडना	VERB	VINF	VerbForm=Inf	15	acl	_	LTranslit=choḍanā|Translit=choṛane
14	को	को	ADP	IN	Case=Acc	13	case	_	Translit=ko|LTranslit=ko
15	बाध्य	बाध्य	ADJ	JJ	_	16	xcomp	_	Translit=bādhya|LTranslit=bādhya
16	किया	करना	VERB	VBI	Gender=Masc|Number=Sing|Person=3	0	root	_	LTranslit=karanā|Translit=kiyā
17	गया	जाना	AUX	VXH	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3	16	aux:pass	_	LTranslit=jānā|Translit=gayā
18	था	था	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Past	16	aux	_	SpaceAfter=No|Translit=thā|LTranslit=thā
19	।	।	PUNCT	.	_	16	punct	_	Translit=.|LTranslit=.

~~~


