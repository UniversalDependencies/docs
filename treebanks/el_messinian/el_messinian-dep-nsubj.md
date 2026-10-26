---
layout: base
title:  'Statistics of nsubj in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `nsubj`

This relation is universal.

42 nodes (5%) are attached to their parents as `nsubj`.

28 instances of `nsubj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07142857142857.

The following 15 pairs of parts of speech are connected with `nsubj`: <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-PRON.html">PRON</a></tt> (10; 24% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (8; 19% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (7; 17% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-ADV.html">ADV</a></tt>-<tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-DET.html">DET</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Και	και	CCONJ	CjCo	_	4	cc	_	_
2	εγώ	εγώ	PRON	NoCm	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	την	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
4	άλλαζα	αλλάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
6	γιατί	γιατί	SCONJ	CjSb	_	7	mark	_	_
7	σιχαινόμουν	σιχαίνομαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	advcl	_	_
8	να	να	SCONJ	PtSj	_	10	mark	_	_
9	την	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
10	ακουμπάω	ακουμπώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	_	_
11	.	.	PUNCT	PTERMP	_	4	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Ό,τι	ό,τι	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	2	obj	_	_
2	θέλετε	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=2863|start_char=2857
3	'σείς	εγώ	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	2	nsubj	_	end_char=2869|start_char=2864
4	.	.	PUNCT	PTERMP	_	2	punct	_	end_char=2871|start_char=2870

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Δεν	δεν	PART	PtNg	Polarity=Neg	2	advmod	_	end_char=214|start_char=211
2	υπάρχει	υπάρχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=222|start_char=215
3	αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	end_char=227|start_char=223
4	εδώ	εδώ	ADV	AdBa	_	2	advmod	_	end_char=231|start_char=228
5	.	.	PUNCT	PTERMP	_	2	punct	_	end_char=233|start_char=232

~~~


