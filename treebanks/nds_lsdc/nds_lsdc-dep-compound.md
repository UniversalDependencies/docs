---
layout: base
title:  'Statistics of compound in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="nds_lsdc-dep-compound-prt.html">compound:prt</a></tt>.

7 nodes (0%) are attached to their parents as `compound`.

6 instances of `compound` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADP.html">ADP</a></tt> (4; 57% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (3; 43% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Alle	al	PRON	_	Case=Nom|Number=Plur|PronType=Tot	2	nsubj	_	lemma[gml]=al
2	lachen	lachen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	lemma[gml]=lachen¹
3	harde	harde	ADV	_	_	2	advmod	_	lemma[gml]=hā̆rde
4	up	up	ADP	_	_	2	compound	_	lemma[gml]=up¹|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	un	un	DET	_	_	8	det	_	lemma[gml]=unde²
7	Wiesken	Wiesken	PROPN	_	Number=Sing	8	nsubj	_	_
8	ward	werden	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	lemma[gml]=wērden¹
9	roud	roud	ADJ	_	Degree=Pos	8	xcomp	_	lemma[gml]=rôt⁴
10	as	as	ADP	_	_	11	case	_	lemma[gml]=alsô
11	vüür	vüür	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	nmod	_	lemma[gml]=vü̂r¹|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound	color:blue
1	Beaden	beaden	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	lemma[gml]=bēden(t)
2	un	un	CCONJ	_	_	3	cc	_	lemma[gml]=unde²
3	vlöken	vloken	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	conj	_	lemma[gml]=vlôken(t)
4	wesselde	wesselen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=wes(se)len
5	mid	mid	ADP	_	AdpType=Prep	6	case	_	lemma[gml]=mit
6	enander	enander	PRON	_	Case=Acc,Dat|PronType=Rcp	4	obl	_	lemma[gml]=êⁱnander
7	af	af	ADV	_	_	4	compound	_	lemma[gml]=af²|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


