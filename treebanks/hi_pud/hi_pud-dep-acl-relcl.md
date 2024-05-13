---
layout: base
title:  'Statistics of acl:relcl in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-acl.html">acl</a></tt>.

215 nodes (1%) are attached to their parents as `acl:relcl`.

215 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.0093023255814.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (133; 62% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (38; 18% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (13; 6% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="hi_pud-pos-DET.html">DET</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 acl:relcl	color:blue
1	वे	वह	PRON	PRP	Case=Nom|Number=Plur|Person=3	5	nsubj	_	Translit=ve|LTranslit=vaha
2	आमतौर	आमतौर	ADV	RB	_	5	advmod	_	Translit=āmataura|LTranslit=āmataura
3	पर	पर	ADP	IN	Case=Acc	2	case	_	Translit=para|LTranslit=para
4	कलाकार	कलाकार	NOUN	NN	Case=Nom|Number=Sing	5	amod	_	Translit=kalākāra|LTranslit=kalākāra
5	हैं	हैना	VERB	VBI	Aspect=Imp|Mood=Ind|Person=3|Tense=Pres	0	root	_	LTranslit=hainā|Translit=haiṁ
6	जो	जो	PRON	REL	Case=Nom|PronType=Prs	11	nsubj	_	ToDo=जो|Translit=jo|LTranslit=jo
7	बहुत	बहुत	DET	QF	_	9	det	_	Translit=bahuta|LTranslit=bahuta
8	सारे	सारा	DET	QF	Case=Acc|Gender=Masc|Number=Sing	9	det	_	Translit=sāre|LTranslit=sārā
9	काम	काम	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	10	obj	_	Translit=kāma|LTranslit=kāma
10	करना	करना	VERB	VINF	VerbForm=Inf	11	xcomp	_	LTranslit=karanā|Translit=karanā
11	चाहते	चाहना	VERB	VBI	Aspect=Imp|Mood=Ind|Person=3|Polite=Form	4	acl:relcl	_	LTranslit=cāhanā|Translit=cāhate
12	हैं	है	AUX	VXH	Person=3|Tense=Pres	11	aux	_	SpaceAfter=No|Translit=haiṁ|LTranslit=hai
13	।	।	PUNCT	.	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 acl:relcl	color:blue
1	और	और	CCONJ	CC	_	7	cc	_	SpaceAfter=No|Translit=aura|LTranslit=aura
2	,	,	PUNCT	,	_	7	punct	_	Translit=,|LTranslit=,
3	निस्संदेह	निस्संदेह	ADV	RB	_	7	advmod	_	SpaceAfter=No|Translit=nissaṁdeha|LTranslit=nissaṁdeha
4	,	,	PUNCT	,	_	3	punct	_	Translit=,|LTranslit=,
5	इसमें	यह	PRON	PDEM	Number=Sing	7	iobj	_	Translit=isameṁ|LTranslit=yaha
6	बॉब	बॉब	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	7	obj	_	Translit=bôba|LTranslit=bôba
7	है	हैना	VERB	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	LTranslit=hainā|SpaceAfter=No|Translit=hai
8	,	,	PUNCT	,	_	15	punct	_	Translit=,|LTranslit=,
9	जो	जो	PRON	REL	Case=Nom|Gender[psor]=Masc|Number[psor]=Sing|PronType=Prs	15	nsubj	_	ToDo=जो|Translit=jo|LTranslit=jo
10	मनोरंजन	मनोरंजन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	14	nmod:poss	_	Translit=manoraṁjana|LTranslit=manoraṁjana
11	का	का	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	10	case	_	Translit=kā|LTranslit=kā
12	एक	एक	DET	DT	Definite=Ind|Number=Sing	14	det	_	Translit=eka|LTranslit=eka
13	सतत	सतत	ADJ	JJ	_	14	amod	_	Translit=satata|LTranslit=satata
14	स्रोत	स्रोत	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	15	obj	_	Translit=srota|LTranslit=srota
15	है	हैना	VERB	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	acl:relcl	_	LTranslit=hainā|SpaceAfter=No|Translit=hai
16	।	।	PUNCT	.	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl:relcl	color:blue
1	प्रदर्शनी	प्रदर्शनी	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	Translit=pradarśanī|LTranslit=pradarśanī
2	में	में	ADP	IN	Case=Loc	1	case	_	Translit=meṁ|LTranslit=meṁ
3	प्रत्येक	प्रत्येक	DET	QF	_	4	det	_	Translit=pratyeka|LTranslit=pratyeka
4	नक्शे	नक्शा	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	7	nmod:poss	_	Translit=nakśe|LTranslit=nakśā
5	की	का	ADP	IN	Case=Gen|Gender=Fem	4	case	_	Translit=kī|LTranslit=kā
6	अपनी	अपना	PRON	PRR	Case=Nom|Gender=Fem|Number=Sing	7	nmod:poss	_	Translit=apanī|LTranslit=apanā
7	कहानी	कहानी	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	8	obj	_	Translit=kahānī|LTranslit=kahānī
8	है	हैना	VERB	VBI	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	LTranslit=hainā|SpaceAfter=No|Translit=hai
9	,	,	PUNCT	,	_	12	punct	_	Translit=,|LTranslit=,
10	जिनमें	जो	PRON	REL	Case=Acc|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|PronType=Prs	12	obl	_	Translit=jinameṁ|LTranslit=jo
11	सभी	सब	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	12	nsubj	_	Translit=sabhī|LTranslit=saba
12	तथ्यात्मक	तथ्यात्मक	ADJ	JJ	_	7	acl:relcl	_	Translit=tathyātmaka|LTranslit=tathyātmaka
13	नहीं	नहीं	PART	NEG	Polarity=Neg	12	advmod	_	Translit=nahīṁ|LTranslit=nahīṁ
14	हैं	है	AUX	VBI	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Plur|Person=3|Tense=Pres	12	cop	_	SpaceAfter=No|Translit=haiṁ|LTranslit=hai
15	।	।	PUNCT	.	_	8	punct	_	Translit=.|LTranslit=.

~~~


