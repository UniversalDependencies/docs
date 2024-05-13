---
layout: base
title:  'Statistics of det in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `det`

This relation is universal.

791 nodes (3%) are attached to their parents as `det`.

788 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49810366624526.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (704; 89% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (32; 4% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (19; 2% instances), <tt><a href="hi_pud-pos-DET.html">DET</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (12; 2% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (11; 1% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	वर्ष	वर्ष	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	compound	_	Translit=varṣa|LTranslit=varṣa
2	1563	1563	NUM	CD	NumType=Card	11	obl:tmod	_	Translit=1563|LTranslit=1563
3	तक	तक	ADP	IN	_	2	case	_	SpaceAfter=No|Translit=taka|LTranslit=taka
4	,	,	PUNCT	,	_	2	punct	_	Translit=,|LTranslit=,
5	वेनिस	वेनिस	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	7	nmod:poss	_	Translit=venisa|LTranslit=venisa
6	की	का	ADP	IN	Case=Gen|Gender=Fem	5	case	_	Translit=kī|LTranslit=kā
7	आबादी	आबादी	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	8	obj	_	Translit=ābādī|LTranslit=ābādī
8	गिरकर	गिरना	VERB	VB	_	10	acl	_	LTranslit=giranā|Translit=girakara
9	लगभग	लगभग	DET	QF	_	10	det	_	Translit=lagabhaga|LTranslit=lagabhaga
10	168,000	168000	NUM	CD	NumType=Card	11	xcomp	_	Translit=168,000|LTranslit=168000
11	हो	होना	VERB	VB	_	0	root	_	LTranslit=honā|Translit=ho
12	गयी	जाना	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	aux	_	LTranslit=jānā|SpaceAfter=No|Translit=gayī
13	।	।	PUNCT	.	_	11	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 det	color:blue
1	दो	दो	NUM	CD	NumType=Card	2	nummod	_	Translit=do|LTranslit=do
2	साल	साल	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	14	obl:tmod	_	Translit=sāla|LTranslit=sāla
3	बाद	बाद	ADP	IN	_	2	case	_	SpaceAfter=No|Translit=bāda|LTranslit=bāda
4	,	,	PUNCT	,	_	2	punct	_	Translit=,|LTranslit=,
5	हांगकांग	हांगकांग	PROPN	NNP	Gender=Masc|Number=Sing	6	compound	_	Translit=hāṁgakāṁga|LTranslit=hāṁgakāṁga
6	हाईकोर्ट	हाईकोर्ट	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	14	obl	_	Proper=True|Translit=hāīkorṭa|LTranslit=hāīkorṭa
7	में	में	ADP	IN	Case=Loc	6	case	_	SpaceAfter=No|Translit=meṁ|LTranslit=meṁ
8	,	,	PUNCT	,	_	6	punct	_	Translit=,|LTranslit=,
9	जटिंग	जटिंग	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	Translit=jaṭiṁga|LTranslit=jaṭiṁga
10	बहुत	बहुत	DET	QF	_	12	det	_	Translit=bahuta|LTranslit=bahuta
11	ही	ही	PART	EMPH	_	10	discourse	_	Translit=hī|LTranslit=hī
12	शान्त	शान्त	ADJ	JJ	_	14	xcomp	_	Translit=śānta|LTranslit=śānta
13	नजर	नजर	NOUN	NN	Gender=Fem|Number=Sing	12	compound:lvc	_	Translit=najara|LTranslit=najara
14	आया	आना	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LTranslit=ānā|SpaceAfter=No|Translit=āyā
15	।	।	PUNCT	.	_	14	punct	_	Translit=.|LTranslit=.

~~~


