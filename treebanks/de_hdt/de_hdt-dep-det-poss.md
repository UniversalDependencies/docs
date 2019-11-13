---
layout: base
title:  'Statistics of det:poss in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-det.html">det</a></tt>.

12 nodes (0%) are attached to their parents as `det:poss`.

12 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 3 pairs of parts of speech are connected with `det:poss`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (9; 75% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (2; 17% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	Konkursgerüchte	Gerücht	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur|Person=3	2	nsubj	_	_
2	drücken	drücken	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	Kurs	Kurs	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	_
4	der	der	DET	ART	Case=Gen|Gender=Fem|Number=Sing|PronType=Art	5	det:poss	_	_
5	Amazon-Aktie	Aktie	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	3	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:poss	color:blue
1	Die	Die	DET	ART	Case=Nom|Number=Plur|PronType=Art	2	det	_	_
2	Vertreter	Vertreter	NOUN	NN	Gender=Masc|Number=Plur|Person=3	5	nsubj	_	_
3	der	der	DET	ART	Case=Gen|Gender=Fem|Number=Sing|PronType=Art	4	det:poss	_	_
4	US-Regierung	Regierung	NOUN	NN	Gender=Fem|Number=Sing|Person=3	2	nmod:poss	_	_
5	enthielten	enthalten	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
7	ihrer	sein	PRON	PPOSAT	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	det:poss	_	_
8	Stimme	Stimme	NOUN	NN	Gender=Fem|Number=Sing|Person=3	5	obj	_	_
9	,	,	PUNCT	$,	PunctType=Comm	18	punct	_	_
10	da	da	SCONJ	KOUS	_	18	mark	_	_
11	kein	kein	DET	PIAT	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind,Neg,Tot	13	det	_	_
12	wirklicher	wirklich	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	Konsens	Konsens	NOUN	NN	Gender=Masc|Number=Sing|Person=3	18	nsubj	_	_
14	über	über	ADP	APPR	AdpType=Prep|Case=Acc	16	case	_	_
15	einen	einen	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Vorschlag	Vorschlag	NOUN	NN	Gender=Masc|Number=Sing|Person=3	13	nmod	_	_
17	zustande	zustande	ADV	ADV	_	18	advmod	_	_
18	kam	kommen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	advcl	_	_
19	.	.	PUNCT	$.	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 det:poss	color:blue
1	Formac	unknown	NOUN	NN	Person=3	13	nsubj	_	_
2	aus	aus	ADP	APPR	AdpType=Prep|Case=Dat	3	case	_	_
3	Blankenfelde	Feld	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	1	nmod	_	_
4	,	,	PUNCT	$,	PunctType=Comm	11	punct	_	_
5	Mac-Usern	User	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur|Person=3	11	nsubj	_	_
6	durch	durch	ADP	APPR	AdpType=Prep|Case=Acc	7	case	_	_
7	Grafikkarten	Karte	NOUN	NN	Gender=Fem|Number=Plur|Person=3	11	nmod	_	_
8	und	und	CCONJ	KON	_	9	cc	_	_
9	Monitore	Tor	NOUN	NN	Gender=Neut|Number=Plur|Person=3	7	conj	_	_
10	ein	ein	DET	ART	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Begriff	Begriff	NOUN	NN	Gender=Masc|Number=Sing|Person=3	1	appos	_	_
12	,	,	PUNCT	$,	PunctType=Comm	11	punct	_	_
13	zeigt	zeigen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	auf	auf	ADP	APPR	AdpType=Prep|Case=Dat	16	case	_	_
15	der	der	DET	ART	Case=Dat|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	Macworld	unknown	NOUN	NN	Person=3	13	obl	_	_
17	zwei	zwei	NUM	CARD	Number=Plur|NumType=Card|Person=3	18	nummod	_	_
18	Erweiterungskarten	Karte	NOUN	NN	Gender=Fem|Number=Plur|Person=3	13	obj	_	_
19	für	für	ADP	APPR	AdpType=Prep|Case=Acc	22	case	_	_
20	den	den	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
21	internen	intern	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	22	amod	_	_
22	Mezzanine-Slot	Slot	NOUN	NN	Gender=Masc|Number=Sing|Person=3	18	nmod	_	_
23	des	des	DET	ART	Case=Gen|Gender=Neut|Number=Sing|PronType=Art	24	det:poss	_	_
24	iMac	iMac	PROPN	NE	Case=Nom|Number=Sing|Person=3	22	nmod:poss	_	_
25	.	.	PUNCT	$.	PunctType=Peri	13	punct	_	_

~~~


