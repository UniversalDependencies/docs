---
layout: base
title:  'Statistics of nmod:poss in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-nmod.html">nmod</a></tt>.

75 nodes (0%) are attached to their parents as `nmod:poss`.

75 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21333333333333.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (74; 99% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Deren	der	DET	PDAT	Case=Gen|Number=Plur|PronType=Dem	2	nmod:poss	_	_
2	Zahlungsmittel	Zahlungsmittel	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
3	waren	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
4	Transferrubel	Transferrubel	PROPN	NN	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	NamedEntity=Yes
5	und	und	CCONJ	KON	_	6	cc	_	_
6	Goldreserven	Goldreserve	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	Hinzu	hinzu	ADV	PTKVZ	_	2	mark	_	_
2	kam	kommen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Ratsvorsitz	Ratsvorsitz	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	in	in	ADP	APPR	_	7	case	_	_
6	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Rat	Rat	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	4	nmod	_	_
8	für	für	ADP	APPR	_	10	case	_	_
9	Allgemeine	allgemein	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	10	nmod:poss	_	_
10	Angelegenheiten	Angelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	7	nmod	_	_
11	und	und	CCONJ	KON	_	13	cc	_	_
12	Auswärtige	auswärtig	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	13	amod	_	_
13	Beziehungen	Beziehung	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	10	conj	_	SpaceAfter=No
14	,	,	PUNCT	$,	_	22	punct	_	_
15	der	der	PRON	PRELS	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	22	nsubj	_	_
16	halbjährlich	halbjährlich	ADJ	ADJD	Degree=Pos	22	advmod	_	_
17	zwischen	zwischen	ADP	APPR	_	19	case	_	_
18	den	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	_
19	Außenministern	Außenminister	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	22	obl	_	_
20	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	21	det	_	_
21	Mitgliedstaaten	Mitgliedstaat	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	19	nmod	_	_
22	rotierte	rotieren	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	acl	_	_
23	und	und	CCONJ	KON	_	34	cc	_	_
24	dessen	der	DET	PRELAT	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	25	det	_	_
25	Aufgaben	Aufgabe	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	34	nsubj	_	_
26	sich	er|es|sie	PRON	PRF	Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	34	obj	_	_
27	teilweise	teilweise	ADV	ADV	_	34	advmod	_	_
28	ebenfalls	ebenfalls	ADV	ADV	_	34	advmod	_	_
29	mit	mit	ADP	APPR	_	30	case	_	_
30	denen	der	PRON	PDS	Case=Dat|Number=Plur|PronType=Dem	34	obl	_	_
31	des	der	DET	ART	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
32	Hohen	hoch	PROPN	ADJA	Case=Gen|Gender=Masc|Number=Sing	33	amod	_	NamedEntity=Yes
33	Vertreters	Vertreter	PROPN	NN	Case=Gen|Gender=Masc|Number=Sing	30	nmod	_	NamedEntity=Yes
34	überschnitten	überschneiden	VERB	VVPP	VerbForm=Part	22	conj	_	SpaceAfter=No
35	.	.	PUNCT	$.	_	2	punct	_	_

~~~


