---
layout: base
title:  'Statistics of amod in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `amod`

This relation is universal.

54 nodes (3%) are attached to their parents as `amod`.

48 instances of `amod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22222222222222.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (43; 80% instances), <tt><a href="el_cypriot-pos-DET.html">DET</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="el_cypriot-pos-NUM.html">NUM</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Έντζ̆ε	έντζ̆ε	PART	_	Polarity=Neg	2	advmod	_	_
2	παίζουμεν	παίζω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	παραδοσιακά	παραδοσιακός	ADJ	_	Case=Acc|Gender=Neut|Number=Plur	4	amod	_	_
4	παιχνίθκια	παιχνίδιν	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	2	obj	_	_
5	σ	σε	ADP	_	_	7	case	_	_
6	την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	κοινότηταν	κοινότητα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	2	obl	_	_
8	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Εν	εν	PART	_	Polarity=Neg	2	advmod	_	_
2	έσ̆ει	έχω	VERB	_	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
3	κάτι	κάτι	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	2	obj	_	_
4	συγκεκριμμένον	συγκεκριμμένος	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	3	amod	_	_
5	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	οποίον	οποίος	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	dislocated	_	_
7	πιστεύκω	πιστεύκω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
8	ότι	ότι	SCONJ	_	_	9	mark	_	_
9	λειφκούμαστεν	λείφκουμαι	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	7	ccomp	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	Να	να	AUX	_	_	3	aux	_	_
2	μεν	μεν	PART	_	Polarity=Neg	3	advmod	_	_
3	ξεχάσουμεν	ξεχνώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	0	root	_	_
4	να	να	SCONJ	_	_	5	mark	_	_
5	μπούμεν	μπαίννω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	xcomp	_	_
6	τζ̆αι	τζ̆αι	CCONJ	_	_	9	cc	_	_
7	σ	σε	ADP	_	_	9	case	_	_
8	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	χρηματιστήριον	χρηματιστήριον	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	_
10	της	ο	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	Νέας	νέος	ADJ	_	Case=Gen|Gender=Fem|Number=Sing	12	amod	_	_
12	Υόρκης	Υόρκη	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
13	!	!	PUNCT	_	_	3	punct	_	_

~~~


