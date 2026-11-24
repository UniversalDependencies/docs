---
layout: base
title:  'Statistics of nmod:tmod in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="hi_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

8 nodes (0%) are attached to their parents as `nmod:tmod`.

5 instances of `nmod:tmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.375.

The following 4 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NUM.html">NUM</a></tt> (3; 38% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (1; 13% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-NUM.html">NUM</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 nmod:tmod	color:blue
1	विंस्टन	विंस्टन	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	15	nsubj:pass	_	Translit=viṁsṭana|LTranslit=viṁsṭana
2	को	को	ADP	IN	Case=Acc	1	case	_	Translit=ko|LTranslit=ko
3	4	4	NUM	CD	NumType=Card	4	nummod	_	Translit=4|LTranslit=4
4	अक्टूबर	अक्टूबर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	15	obl:tmod	_	Translit=akṭūbara|LTranslit=akṭūbara
5	1988	1988	NUM	CD	NumType=Card	4	nummod	_	Translit=1988|LTranslit=1988
6	और	और	CCONJ	CC	_	4	cc	_	ToDo=cc-without-conj|Translit=aura|LTranslit=aura
7	फिर	फिर	ADV	RB	_	15	advmod	_	Translit=phira|LTranslit=phira
8	19	19	NUM	CD	NumType=Card	9	nummod	_	Translit=19|LTranslit=19
9	मार्च	मार्च	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	4	nmod:tmod	_	Translit=mārca|LTranslit=mārca
10	1993	1993	NUM	CD	NumType=Card	9	nummod	_	Translit=1993|LTranslit=1993
11	को	को	ADP	IN	Case=Loc	4	case	_	Translit=ko|LTranslit=ko
12	दिवालिया	दिवालिया	ADJ	JJ	_	14	xcomp	_	Translit=divāliyā|LTranslit=divāliyā
13	घोषित	घोषित	ADJ	JJ	_	12	compound:lvc	_	Translit=ghoṣita|LTranslit=ghoṣita
14	कर	करना	VERB	VB	_	15	xcomp	_	LTranslit=karanā|Translit=kara
15	दिया	देना	VERB	VXH	Gender=Masc|Number=Sing|Person=3	0	root	_	LTranslit=denā|Translit=diyā
16	गया	जाना	AUX	VXH	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3	15	aux:pass	_	LTranslit=jānā|Translit=gayā
17	था	था	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Past	15	aux	_	SpaceAfter=No|Translit=thā|LTranslit=thā
18	।	।	PUNCT	.	_	15	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:tmod	color:blue
1	पहली	पहला	ADJ	JJ	Gender=Fem	3	amod	_	Translit=pahalī|LTranslit=pahalā
2	फिल्म	फिल्म	NOUN	NN	Gender=Fem|Number=Sing	3	compound	_	Translit=philma|LTranslit=philma
3	कम्पनी	कम्पनी	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	16	nsubj:pass	_	Translit=kampanī|LTranslit=kampanī
4	(	(	PUNCT	(	_	6	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
5	एथिना	एथिना	PROPN	NNP	Gender=Fem|Number=Sing	6	compound	_	Translit=ethinā|LTranslit=ethinā
6	फिल्म	फिल्म	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No|Proper=True|Translit=philma|LTranslit=philma
7	)	)	PUNCT	)	_	6	punct	_	Translit=)|LTranslit=)
8	1912	1912	NUM	CD	NumType=Card	6	nmod:tmod	_	Translit=1912|LTranslit=1912
9	में	में	ADP	IN	Case=Loc	8	case	_	Translit=meṁ|LTranslit=meṁ
10	और	और	CCONJ	CC	_	12	cc	_	Translit=aura|LTranslit=aura
11	एस्टी	एस्टी	PROPN	NNP	Gender=Masc|Number=Sing	12	compound	_	Translit=esṭī|LTranslit=esṭī
12	फिल्म	फिल्म	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	Proper=True|Translit=philma|LTranslit=philma
13	1916	1916	NUM	CD	NumType=Card	12	obl:tmod	_	Translit=1916|LTranslit=1916
14	में	में	ADP	IN	Case=Loc	13	case	_	Translit=meṁ|LTranslit=meṁ
15	स्थापित	स्थापित	ADJ	JJ	_	16	compound:lvc	_	Translit=sthāpita|LTranslit=sthāpita
16	की	करना	VERB	VBI	Gender=Fem|Number=Sing|Person=3	0	root	_	LTranslit=karanā|Translit=kī
17	गयी	जाना	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past	16	aux:pass	_	LTranslit=jānā|SpaceAfter=No|Translit=gayī
18	।	।	PUNCT	.	_	16	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:tmod	color:blue
1	इस	यह	DET	DT	Definite=Def|Number=Sing	2	nmod:tmod	_	Translit=isa|LTranslit=yaha
2	बार	बार	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	obl	_	Translit=bāra|LTranslit=bāra
3	उन्होंने	वह	PRON	PRP	Case=Acc|Person=3	5	nsubj	_	Translit=unhoṁne|LTranslit=vaha
4	दावा	दावा	NOUN	NN	Gender=Masc|Number=Sing	5	compound:lvc	_	Translit=dāvā|LTranslit=dāvā
5	किया	करना	VERB	VBI	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LTranslit=karanā|Translit=kiyā
6	कि	कि	SCONJ	IN	_	20	mark	_	Translit=ki|LTranslit=ki
7	लड़ाई	लड़ाई	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	9	obj	_	Translit=laṛāī|LTranslit=laṛāī
8	शुरू	शुरू	NOUN	NN	Gender=Masc|Number=Sing	9	compound:lvc	_	Translit=śurū|LTranslit=śurū
9	होने	होना	VERB	VINF	VerbForm=Inf	20	advcl	_	LTranslit=honā|Translit=hone
10	के	के	ADP	IN	_	9	case	_	Translit=ke|LTranslit=ke
11	बाद	बाद	ADP	IN	_	10	fixed	_	Translit=bāda|LTranslit=bāda
12	दो	दो	NUM	CD	NumType=Card	13	nummod	_	Translit=do|LTranslit=do
13	घंटे	घंटा	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	20	obl:tmod	_	Translit=ghaṁṭe|LTranslit=ghaṁṭā
14	तक	तक	ADP	IN	_	13	case	_	Translit=taka|LTranslit=taka
15	उन्होंने	वह	PRON	PRP	Case=Acc|Person=3	20	nsubj	_	Translit=unhoṁne|LTranslit=vaha
16	बिना	बिना	PART	NEG	Polarity=Neg	17	advmod	_	Translit=binā|LTranslit=binā
17	कवच	कवच	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	18	obj	_	Translit=kavaca|LTranslit=kavaca
18	पहने	पहनना	VERB	VINF	VerbForm=Inf	20	xcomp	_	LTranslit=pahananā|Translit=pahane
19	लड़ाई	लड़ाई	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	20	obj	_	Translit=laṛāī|LTranslit=laṛāī
20	लड़ी	लडना	VERB	VBI	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	ccomp	_	LTranslit=laḍanā|SpaceAfter=No|Translit=laṛī
21	।	।	PUNCT	.	_	5	punct	_	Translit=.|LTranslit=.

~~~


