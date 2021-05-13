---
layout: base
title:  'Statistics of acl:relcl in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-acl.html">acl</a></tt>.

215 nodes (1%) are attached to their parents as `acl:relcl`.

215 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.9441860465116.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (120; 56% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (33; 15% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (25; 12% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="hi_pud-pos-DET.html">DET</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 acl:relcl	color:blue
1	वे	_	PRON	PRP	Animacy=Anim|Case=Nom|Number=Plur|Person=3	5	nsubj	_	Translit=ve
2	आमतौर	_	ADV	RB	_	5	advmod	_	Translit=āmataura
3	पर	_	ADP	IN	Case=Acc	2	case	_	Translit=para
4	कलाकार	_	NOUN	NN	Animacy=Anim|Case=Nom|Number=Sing	5	amod	_	Translit=kalākāra
5	हैं	_	VERB	VBI	Aspect=Imp|Mood=Ind|Person=3|Tense=Pres	0	root	_	Translit=haiṁ
6	जो	_	PRON	REL	Case=Nom|PronType=Prs	11	nsubj	_	ToDo=जो|Translit=jo
7	बहुत	_	DET	QF	_	9	det	_	Translit=bahuta
8	सारे	_	DET	QF	Case=Acc|Gender=Masc|Number=Sing	9	det	_	Translit=sāre
9	काम	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	obj	_	Translit=kāma
10	करना	_	VERB	VINF	VerbForm=Inf	11	xcomp	_	Translit=karanā
11	चाहते	_	VERB	VBI	Aspect=Imp|Mood=Ind|Person=3|Polite=Form	4	acl:relcl	_	Translit=cāhate
12	हैं	_	AUX	VXH	Person=3|Tense=Pres	11	aux	_	SpaceAfter=No|Translit=haiṁ
13	।	_	PUNCT	.	_	5	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 acl:relcl	color:blue
1	और	_	CCONJ	CC	_	7	cc	_	SpaceAfter=No|Translit=aura
2	,	_	PUNCT	,	_	7	punct	_	Translit=,
3	निस्संदेह	_	ADV	RB	_	7	advmod	_	SpaceAfter=No|Translit=nissaṁdeha
4	,	_	PUNCT	,	_	3	punct	_	Translit=,
5	इसमें	_	PRON	PDEM	Number=Sing	7	iobj	_	Translit=isameṁ
6	बॉब	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	obj	_	Translit=bôba
7	है	_	VERB	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No|Translit=hai
8	,	_	PUNCT	,	_	15	punct	_	Translit=,
9	जो	_	PRON	REL	Case=Nom|Gender[psor]=Masc|Number[psor]=Sing|PronType=Prs	15	nsubj	_	ToDo=जो|Translit=jo
10	मनोरंजन	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	14	nmod:poss	_	Translit=manoraṁjana
11	का	_	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	10	case	_	Translit=kā
12	एक	_	DET	DT	Definite=Ind|Number=Sing	14	det	_	Translit=eka
13	सतत	_	ADJ	JJ	_	14	amod	_	Translit=satata
14	स्रोत	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	15	obj	_	Translit=srota
15	है	_	VERB	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	acl:relcl	_	SpaceAfter=No|Translit=hai
16	।	_	PUNCT	.	_	7	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 acl:relcl	color:blue
1	सबसे	_	ADJ	JJS	_	2	advmod	_	Translit=sabase
2	पहली	_	ADJ	JJ	Gender=Fem	7	amod	_	Translit=pahalī
3	और	_	CCONJ	CC	_	5	cc	_	Translit=aura
4	सबसे	_	ADJ	JJS	_	5	advmod	_	Translit=sabase
5	महत्वपूर्ण	_	ADJ	JJ	_	2	conj	_	Translit=mahatvapūrṇa
6	ओहियो	_	PROPN	NNP	Animacy=Inan|Gender=Fem|Number=Sing	7	compound	_	Translit=ohiyo
7	नदी	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	Translit=nadī
8	थी	_	VERB	VBI	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No|Translit=thī
9	,	_	PUNCT	,	_	14	punct	_	Translit=,
10	जो	_	PRON	REL	Case=Nom|Gender[psor]=Fem|Number[psor]=Sing|PronType=Prs	14	nsubj	_	ToDo=जो|Translit=jo
11	मिसिसिपी	_	PROPN	NNP	Animacy=Inan|Gender=Fem|Number=Sing	12	compound	_	Translit=misisipī
12	नदी	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	14	obl	_	Translit=nadī
13	में	_	ADP	IN	Case=Loc	12	case	_	Translit=meṁ
14	प्रवाहित	_	ADJ	JJ	_	7	acl:relcl	_	Translit=pravāhita
15	होती	_	AUX	VBI	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3	14	cop	_	Translit=hotī
16	थी	_	AUX	VXH	Gender=Fem|Number=Sing|Person=3|Tense=Past	14	aux	_	SpaceAfter=No|Translit=thī
17	।	_	PUNCT	.	_	8	punct	_	Translit=.

~~~


